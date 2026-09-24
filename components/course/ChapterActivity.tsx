"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LearningScreenShell } from "@/components/course/LearningScreenShell";
import { PredictionBlock } from "@/components/course/PredictionBlock";
import { ProjectMaterialPanel } from "@/components/course/ProjectMaterialPanel";
import { ComparisonCard } from "@/components/course/ComparisonCard";
import { ScopeBoundaryCard } from "@/components/course/ScopeBoundaryCard";
import {
  BackButton,
  CompareToggle,
  PredictionFeedback,
  WhyThisMatters,
  cardClassName,
  primaryButton,
} from "@/components/course/ActivityElements";
import { useCourseState } from "@/lib/course/heritage-course-store";
import { COURSE_NAME } from "@/lib/content/architect-course-module-1";
import {
  PROTOTYPE_NOTICE,
  courseProgress,
  type ChapterActivityContent,
} from "@/lib/content/architect-course-chapters";

const UNLOCK_HINT = "Available after you record your initial view";

/**
 * Generic single-activity chapter renderer for the chapters 2-7
 * framework (24 Sep 2026) - one predict -> inspect -> compare -> save
 * pattern per chapter, matching Module 1's rhythm but content-light.
 * Chapters are separate routes (not in-memory stage switches like
 * Module 1), so the Heritage Record and completion state come from
 * the shared localStorage-backed course store, and "read only on
 * revisit" is driven by `completedChapters` rather than component
 * state.
 */
export function ChapterActivity({
  content,
  previousHref,
  nextHref,
  nextLabel,
}: {
  content: ChapterActivityContent;
  previousHref: string;
  nextHref: string;
  nextLabel: string;
}) {
  const { heritageRecord, setHeritageRecord, completedChapters, markChapterComplete } =
    useCourseState();
  const [prediction, setPrediction] = useState<number | null>(null);

  const saved = completedChapters.includes(content.chapterNumber);

  useEffect(() => {
    // `saved` only becomes true after the course store hydrates from
    // localStorage post-mount; this mirrors that same safe timing.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setPrediction(content.predictionExpectedIndex);
  }, [saved, content.predictionExpectedIndex]);

  const hasAnswered = prediction !== null;
  const { percentComplete, minutesLeft } = courseProgress(completedChapters);

  function handleSave() {
    setHeritageRecord(content.recordAfter);
    markChapterComplete(content.chapterNumber);
  }

  return (
    <LearningScreenShell
      courseName={COURSE_NAME}
      stageLabel={content.stageLabel}
      percentComplete={percentComplete}
      minutesLeft={minutesLeft}
      projectMoment={content.projectMoment}
      task={content.task}
      projectMaterial={
        <ProjectMaterialPanel
          items={content.evidence}
          unlocked={hasAnswered}
          unlockHint={UNLOCK_HINT}
        />
      }
      heritageRecord={saved ? content.recordAfter : heritageRecord}
      footer={
        <div className="flex flex-wrap items-center justify-between gap-4">
          <BackButton href={previousHref} />
          {saved ? (
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-sm font-medium text-neutral-900">
                &#10003; Saved to Heritage Record
              </p>
              <Link href={nextHref} className={primaryButton}>
                {nextLabel} &rarr;
              </Link>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleSave}
              disabled={!hasAnswered}
              className={primaryButton}
            >
              {content.saveLabel}
            </button>
          )}
        </div>
      }
    >
      <div className="border border-dashed border-neutral-300 bg-neutral-50 px-4 py-2">
        <p className="text-xs text-neutral-500">{PROTOTYPE_NOTICE}</p>
      </div>

      <div className="grid gap-6">
        <PredictionBlock
          prompt={content.predictionPrompt}
          options={content.predictionOptions}
          selectedIndex={prediction}
          onSelect={setPrediction}
          disabled={saved}
        />

        {hasAnswered && (
          <>
            <PredictionFeedback
              selectedIndex={prediction}
              expectedIndex={content.predictionExpectedIndex}
              feedback={content.predictionFeedback}
              optionFeedback={content.optionFeedback}
            />

            <div className={cardClassName}>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Added to the Heritage Record
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-900">
                {content.recordAfter.known}
              </p>
            </div>

            <CompareToggle label="For comparison: show a worked example">
              <p className="text-sm leading-6 text-neutral-600">{content.workedExample}</p>
            </CompareToggle>

            {content.comparisonCard && <ComparisonCard content={content.comparisonCard} />}
            {content.scopeBoundaryCard && (
              <ScopeBoundaryCard content={content.scopeBoundaryCard} />
            )}

            <WhyThisMatters text={content.whyThisMatters} />
          </>
        )}
      </div>
    </LearningScreenShell>
  );
}
