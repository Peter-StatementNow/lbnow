"use client";

import { useState } from "react";
import Link from "next/link";
import { LearningScreenShell } from "@/components/course/LearningScreenShell";
import { PredictionBlock } from "@/components/course/PredictionBlock";
import { ProjectMaterialPanel } from "@/components/course/ProjectMaterialPanel";
import { ComparisonCard } from "@/components/course/ComparisonCard";
import {
  BackButton,
  CompareToggle,
  PredictionFeedback,
  SeeRecordLink,
  WhyThisMatters,
  cardClassName,
  primaryButton,
} from "@/components/course/ActivityElements";
import { useCourseState } from "@/lib/course/heritage-course-store";
import { ARCHITECT_COURSE_CHAPTERS } from "@/lib/content/architect-course";
import { CHAPTER_PAGES, courseProgress } from "@/lib/content/architect-course-chapters";
import { COURSE_HREF, COURSE_NAME, type CoursePage } from "@/lib/content/course-model";

const UNLOCK_HINT = "Available after you record your initial view";
const DRAFT_NOTICE = "Draft content for review - wording may change.";

/**
 * One chapter's pages, rendered in-memory on that chapter's route. Every
 * page follows the same sequence: initial view -> option-specific
 * feedback -> worked example -> (resources) -> optional comparison ->
 * why this matters -> save (the workspace's Heritage Record tab then
 * shows the page's worked position) -> fixed continue. Any answer
 * unlocks the rest of the page; the Heritage Record moves to the page's
 * worked position on save, whatever was chosen (no answer-dependent
 * route, score or record state - per the source documents).
 */
export function ChapterExperience({ chapterNumber }: { chapterNumber: number }) {
  const pages = CHAPTER_PAGES[chapterNumber];
  const chapter = ARCHITECT_COURSE_CHAPTERS.find((c) => c.chapterNumber === chapterNumber)!;
  const previousChapter = ARCHITECT_COURSE_CHAPTERS.find(
    (c) => c.chapterNumber === chapterNumber - 1
  );
  const nextChapter = ARCHITECT_COURSE_CHAPTERS.find(
    (c) => c.chapterNumber === chapterNumber + 1
  );

  const pageCount = pages.length;
  const [pageIndex, setPageIndex] = useState(0);
  const [predictions, setPredictions] = useState<(number | null)[]>(() =>
    Array(pageCount).fill(null)
  );
  const [saved, setSaved] = useState<boolean[]>(() => Array(pageCount).fill(false));
  const [recordRevision, setRecordRevision] = useState(0);
  const { completedChapters, markChapterComplete } = useCourseState();

  const page = pages[pageIndex];
  const prediction = predictions[pageIndex];
  const isSaved = saved[pageIndex];
  const isLastPage = pageIndex === pageCount - 1;

  const savedMinutes = pages.reduce((sum, p, index) => sum + (saved[index] ? p.minutes : 0), 0);
  const { percentComplete, minutesLeft } = courseProgress(
    completedChapters,
    chapterNumber,
    savedMinutes
  );

  function goTo(index: number) {
    setPageIndex(index);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function predict(index: number) {
    setPredictions((current) => current.map((v, i) => (i === pageIndex ? index : v)));
  }

  function save() {
    setSaved((current) => current.map((v, i) => (i === pageIndex ? true : v)));
    setRecordRevision((n) => n + 1);
    if (isLastPage) markChapterComplete(chapterNumber);
  }

  // The last page continues to the next chapter (or, at the end of the
  // course, back to the course overview).
  const continueButton = !isLastPage ? (
    <button type="button" onClick={() => goTo(pageIndex + 1)} className={primaryButton}>
      {page.continueLabel} &rarr;
    </button>
  ) : (
    <Link href={nextChapter?.chapterHref ?? COURSE_HREF} className={primaryButton}>
      {page.continueLabel} &rarr;
    </Link>
  );

  const backButton =
    pageIndex > 0 ? (
      <BackButton onClick={() => goTo(pageIndex - 1)} />
    ) : previousChapter?.chapterHref ? (
      <BackButton href={previousChapter.chapterHref} />
    ) : (
      <span />
    );

  return (
    <LearningScreenShell
      // Remount per page so collapsible panels reset to their defaults.
      key={page.number}
      courseName={COURSE_NAME}
      stageLabel={`${chapter.chapterNumber}. ${chapter.title}`}
      percentComplete={percentComplete}
      minutesLeft={minutesLeft}
      projectMoment={page.projectMoment}
      task={page.task}
      taskDetail={page.taskDetail}
      pageProgress={{
        current: page.number,
        total: pageCount,
        title: page.title,
        completed: saved.filter(Boolean).length,
      }}
      projectMaterial={
        <ProjectMaterialPanel
          items={page.evidence}
          unlocked={prediction !== null}
          unlockHint={UNLOCK_HINT}
          alwaysAvailableIds={page.alwaysAvailableEvidenceIds}
          initialOpenId={page.alwaysAvailableEvidenceIds[0]}
        />
      }
      heritageRecord={isSaved ? page.recordAfter : page.recordBefore}
      recordRevision={recordRevision}
      footer={
        <div className="flex flex-wrap items-center justify-between gap-4">
          {backButton}
          {isSaved ? (
            <div className="flex max-w-xl flex-col items-end gap-3 text-right">
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-action">
                  &#10003; Saved to Heritage Record.
                </span>{" "}
                {page.continueCue}
              </p>
              {continueButton}
            </div>
          ) : (
            <button
              type="button"
              onClick={save}
              disabled={prediction === null}
              className={primaryButton}
            >
              {page.saveLabel}
            </button>
          )}
        </div>
      }
    >
      <PageContent
        page={page}
        prediction={prediction}
        onPredict={predict}
        saved={isSaved}
        onShowRecord={() => setRecordRevision((n) => n + 1)}
      />
    </LearningScreenShell>
  );
}

function PageContent({
  page,
  prediction,
  onPredict,
  saved,
  onShowRecord,
}: {
  page: CoursePage;
  prediction: number | null;
  onPredict: (index: number) => void;
  saved: boolean;
  onShowRecord: () => void;
}) {
  return (
    <div className="grid gap-6">
      {page.contentStatus === "draft" && (
        <div className="border border-dashed border-neutral-300 bg-neutral-50 px-4 py-2">
          <p className="text-xs text-neutral-500">{DRAFT_NOTICE}</p>
        </div>
      )}

      <PredictionBlock
        prompt={page.question}
        context={page.questionContext}
        options={page.options}
        selectedIndex={prediction}
        onSelect={onPredict}
        disabled={saved}
      />

      {prediction !== null && (
        <>
          <PredictionFeedback
            selectedIndex={prediction}
            expectedIndex={page.expectedIndex}
            feedback={page.optionFeedback[page.expectedIndex]}
            optionFeedback={page.optionFeedback}
          />

          <CompareToggle label="For comparison: show a worked example">
            <div className="grid gap-3">
              {page.workedExample.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-6 text-neutral-600">
                  {paragraph}
                </p>
              ))}
              {page.workedExample.groups && (
                <div className="mt-1 grid gap-4 sm:grid-cols-2">
                  {page.workedExample.groups.map((group) => (
                    <div key={group.heading}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                        {group.heading}
                      </p>
                      <ul className="mt-2 grid gap-1.5">
                        {group.items.map((line) => (
                          <li key={line} className="text-xs leading-5 text-neutral-600">
                            - {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CompareToggle>

          {page.resourcePrompt && (
            <div className={cardClassName}>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Guidance and resources
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{page.resourcePrompt}</p>
            </div>
          )}

          {page.comparisonCard && <ComparisonCard content={page.comparisonCard} />}

          <WhyThisMatters text={page.whyThisMatters} />

          {/* The worked position itself appears in the workspace's
              Heritage Record tab on save - no duplicate copy here. Sits
              last, next to the save/continue footer, so it's in view. */}
          {saved && <SeeRecordLink onClick={onShowRecord} />}
        </>
      )}
    </div>
  );
}
