"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LearningScreenShell } from "@/components/course/LearningScreenShell";
import { HeritageRecordPanel } from "@/components/course/HeritageRecordPanel";
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
  secondaryButton,
} from "@/components/course/ActivityElements";
import { useCourseState } from "@/lib/course/heritage-course-store";
import {
  ACTIVITY_1,
  ACTIVITY_2,
  ACTIVITY_3,
  ADDENDUM_HEADINGS,
  COURSE_NAME,
  DECISION_GATE_EXPECTED_INDEX,
  DECISION_GATE_OPTIONS,
  HERITAGE_RECORD_AFTER_ACTIVITY_1,
  HERITAGE_RECORD_AFTER_ACTIVITY_2,
  HERITAGE_RECORD_AFTER_ACTIVITY_3,
  MODULE_COMPLETE,
  PROMPT_CARDS,
  STAGE_LABEL,
  TOTAL_COURSE_MINUTES,
  addendumEvidence,
  initialHeritagePositionEvidence,
  type AddendumHeading,
  type HeritageRecordState,
} from "@/lib/content/architect-course-module-1";
import { PROMPT_CARD_DISPLAY_ORDER } from "@/lib/content/architect-course-module-1-display-order";

type Stage = 1 | 2 | 3 | "complete";

const ACTIVITY_MINUTES = { 1: 2, 2: 3, 3: 2 };
const UNLOCK_HINT = "Available after you record your initial view";

function buildWorkingToolText(
  addendumPlacements: Record<string, AddendumHeading | null>,
  record: HeritageRecordState
): string {
  const lines = ["HERITAGE RECORD - MODULE 1", ""];
  lines.push(`Known: ${record.known}`);
  lines.push(`Decision point: ${record.decisionPoints}`, "");
  lines.push("HERITAGE CONSIDERATIONS ADDENDUM - VERSION 1", "");

  for (const heading of ADDENDUM_HEADINGS) {
    lines.push(`${heading.key}. ${heading.label}`.toUpperCase());
    const items = PROMPT_CARDS.filter(
      (card) => addendumPlacements[card.id] === heading.key
    );
    if (items.length === 0) {
      lines.push("(nothing placed here)");
    }
    for (const item of items) {
      lines.push(`- ${item.text}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

export function Module1Experience() {
  const [stage, setStage] = useState<Stage>(1);
  const { heritageRecord, setHeritageRecord, markChapterComplete } = useCourseState();

  // Activity 1
  const [a1Prediction, setA1Prediction] = useState<number | null>(null);
  const [a1Saved, setA1Saved] = useState(false);

  // Activity 2
  const [a2Prediction, setA2Prediction] = useState<number | null>(null);
  const [addendumPlacements, setAddendumPlacements] = useState<
    Record<string, AddendumHeading | null>
  >(() => Object.fromEntries(PROMPT_CARDS.map((card) => [card.id, null])));
  const [a2ShowCompare, setA2ShowCompare] = useState(false);
  const [a2Saved, setA2Saved] = useState(false);

  // Activity 3
  const [a3Prediction, setA3Prediction] = useState<number | null>(null);
  const [a3Saved, setA3Saved] = useState(false);

  const completedActivities = [a1Saved, a2Saved, a3Saved].filter(Boolean).length;
  const completedMinutes = [1, 2, 3]
    .slice(0, completedActivities)
    .reduce((sum, n) => sum + ACTIVITY_MINUTES[n as 1 | 2 | 3], 0);
  const percentComplete = Math.round((completedMinutes / TOTAL_COURSE_MINUTES) * 100);
  const minutesLeft = TOTAL_COURSE_MINUTES - completedMinutes;

  const unplacedCardIds = PROMPT_CARD_DISPLAY_ORDER.filter(
    (id) => !addendumPlacements[id]
  );
  const allCardsPlaced = unplacedCardIds.length === 0;

  function placeCard(id: string, heading: AddendumHeading) {
    setAddendumPlacements((current) => ({ ...current, [id]: heading }));
  }

  function unplaceCard(id: string) {
    setAddendumPlacements((current) => ({ ...current, [id]: null }));
  }

  function goTo(next: Stage) {
    setStage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const shellCommon = {
    courseName: COURSE_NAME,
    stageLabel: STAGE_LABEL,
    percentComplete,
    minutesLeft,
    heritageRecord,
  };

  if (stage === "complete") {
    return (
      <ModuleComplete addendumPlacements={addendumPlacements} record={heritageRecord} />
    );
  }

  return (
    <>
      {stage === 1 && (
        <LearningScreenShell
          {...shellCommon}
          projectMoment={ACTIVITY_1.projectMoment}
          task={ACTIVITY_1.task}
          projectMaterial={
            <ProjectMaterialPanel
              items={ACTIVITY_1.evidence}
              unlocked={a1Prediction !== null}
              unlockHint={UNLOCK_HINT}
              alwaysAvailableIds={ACTIVITY_1.alwaysAvailableEvidenceIds}
              initialOpenId={ACTIVITY_1.alwaysAvailableEvidenceIds[0]}
            />
          }
          footer={
            a1Saved ? (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-md text-sm text-neutral-600">
                  <span className="font-medium text-neutral-900">
                    &#10003; Saved to Heritage Record.
                  </span>{" "}
                  {ACTIVITY_1.carryForwardCue}
                </p>
                <button type="button" onClick={() => goTo(2)} className={primaryButton}>
                  {ACTIVITY_1.continueLabel} &rarr;
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setHeritageRecord(HERITAGE_RECORD_AFTER_ACTIVITY_1);
                  setA1Saved(true);
                }}
                disabled={a1Prediction === null}
                className={primaryButton}
              >
                {ACTIVITY_1.saveLabel}
              </button>
            )
          }
        >
          <Activity1Content
            prediction={a1Prediction}
            onPredict={setA1Prediction}
            saved={a1Saved}
          />
        </LearningScreenShell>
      )}

      {stage === 2 && (
        <LearningScreenShell
          {...shellCommon}
          projectMoment={ACTIVITY_2.projectMoment}
          task={ACTIVITY_2.task}
          projectMaterial={
            <ProjectMaterialPanel
              items={[initialHeritagePositionEvidence(heritageRecord), ...ACTIVITY_2.evidence]}
              unlocked={a2Prediction !== null}
              unlockHint={UNLOCK_HINT}
            />
          }
          footer={
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackButton onClick={() => goTo(1)} />
              {a2Saved ? (
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-sm font-medium text-neutral-900">
                    &#10003; Saved to Heritage Record
                  </p>
                  <button type="button" onClick={() => goTo(3)} className={primaryButton}>
                    Next activity &rarr;
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setHeritageRecord(HERITAGE_RECORD_AFTER_ACTIVITY_2);
                    setA2Saved(true);
                  }}
                  disabled={!allCardsPlaced}
                  className={primaryButton}
                >
                  {ACTIVITY_2.saveLabel}
                </button>
              )}
            </div>
          }
        >
          <Activity2Content
            prediction={a2Prediction}
            onPredict={setA2Prediction}
            unplacedCardIds={unplacedCardIds}
            placements={addendumPlacements}
            allPlaced={allCardsPlaced}
            showCompare={a2ShowCompare}
            onPlace={placeCard}
            onUnplace={unplaceCard}
            onToggleCompare={() => setA2ShowCompare((v) => !v)}
            saved={a2Saved}
          />
        </LearningScreenShell>
      )}

      {stage === 3 && (
        <LearningScreenShell
          {...shellCommon}
          projectMoment={ACTIVITY_3.projectMoment}
          task={ACTIVITY_3.task}
          projectMaterial={
            <ProjectMaterialPanel
              items={[
                addendumEvidence(buildWorkingToolText(addendumPlacements, heritageRecord)),
                ...ACTIVITY_3.evidence,
                initialHeritagePositionEvidence(heritageRecord),
              ]}
              unlocked={a3Prediction === DECISION_GATE_EXPECTED_INDEX}
              unlockHint="Available once your initial view reflects the heritage decision point"
            />
          }
          footer={
            <div className="flex flex-wrap items-center justify-between gap-4">
              <BackButton onClick={() => goTo(2)} />
              {a3Saved ? (
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-sm font-medium text-neutral-900">
                    &#10003; Saved to Heritage Record
                  </p>
                  <button
                    type="button"
                    onClick={() => goTo("complete")}
                    className={primaryButton}
                  >
                    Finish Module 1 &rarr;
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setHeritageRecord(HERITAGE_RECORD_AFTER_ACTIVITY_3);
                    setA3Saved(true);
                    markChapterComplete(1);
                  }}
                  disabled={a3Prediction !== DECISION_GATE_EXPECTED_INDEX}
                  className={primaryButton}
                >
                  {ACTIVITY_3.saveLabel}
                </button>
              )}
            </div>
          }
        >
          <Activity3Content
            prediction={a3Prediction}
            onPredict={setA3Prediction}
            saved={a3Saved}
          />
        </LearningScreenShell>
      )}
    </>
  );
}

// --- Activity 1 -------------------------------------------------------

function Activity1Content({
  prediction,
  onPredict,
  saved,
}: {
  prediction: number | null;
  onPredict: (index: number) => void;
  saved: boolean;
}) {
  const hasAnswered = prediction !== null;

  return (
    <div className="grid gap-6">
      <PredictionBlock
        prompt={ACTIVITY_1.predictionPrompt}
        options={ACTIVITY_1.predictionOptions}
        selectedIndex={prediction}
        onSelect={onPredict}
        disabled={saved}
      />

      {hasAnswered && (
        <>
          <PredictionFeedback
            selectedIndex={prediction}
            expectedIndex={ACTIVITY_1.predictionExpectedIndex}
            feedback={ACTIVITY_1.predictionFeedback}
            optionFeedback={ACTIVITY_1.optionFeedback}
            alwaysShowFeedback
          />

          <div className={cardClassName}>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              Added to the Heritage Record - To establish
            </p>
            <ul className="mt-2 grid gap-1.5">
              {ACTIVITY_1.toEstablishEntry.map((line) => (
                <li key={line} className="text-sm leading-6 text-neutral-700">
                  - {line}
                </li>
              ))}
            </ul>
          </div>

          <CompareToggle label="For comparison: show a worked example">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                  Known
                </p>
                <ul className="mt-2 grid gap-1.5">
                  {ACTIVITY_1.worked.known.map((line) => (
                    <li key={line} className="text-xs leading-5 text-neutral-600">
                      - {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                  To establish
                </p>
                <ul className="mt-2 grid gap-1.5">
                  {ACTIVITY_1.worked.toEstablish.map((line) => (
                    <li key={line} className="text-xs leading-5 text-neutral-600">
                      - {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CompareToggle>

          <ComparisonCard content={ACTIVITY_1.comparisonCard} />
          <ScopeBoundaryCard content={ACTIVITY_1.scopeBoundaryCard} />

          <WhyThisMatters text={ACTIVITY_1.whyThisMatters} />
        </>
      )}
    </div>
  );
}

// --- Activity 2 -------------------------------------------------------

function Activity2Content({
  prediction,
  onPredict,
  unplacedCardIds,
  placements,
  allPlaced,
  showCompare,
  onPlace,
  onUnplace,
  onToggleCompare,
  saved,
}: {
  prediction: number | null;
  onPredict: (index: number) => void;
  unplacedCardIds: string[];
  placements: Record<string, AddendumHeading | null>;
  allPlaced: boolean;
  showCompare: boolean;
  onPlace: (id: string, heading: AddendumHeading) => void;
  onUnplace: (id: string) => void;
  onToggleCompare: () => void;
  saved: boolean;
}) {
  const cardsById = useMemo(() => new Map(PROMPT_CARDS.map((c) => [c.id, c])), []);
  const hasAnswered = prediction !== null;
  const placedCount = PROMPT_CARDS.length - unplacedCardIds.length;

  return (
    <div className="grid gap-6">
      <PredictionBlock
        prompt={ACTIVITY_2.predictionPrompt}
        context={ACTIVITY_2.predictionQuestion}
        options={ACTIVITY_2.predictionOptions}
        selectedIndex={prediction}
        onSelect={onPredict}
        disabled={saved}
      />

      {hasAnswered && (
        <>
          <PredictionFeedback
            selectedIndex={prediction}
            expectedIndex={ACTIVITY_2.predictionExpectedIndex}
            feedback={ACTIVITY_2.predictionFeedback}
            optionFeedback={ACTIVITY_2.optionFeedback}
          />

          <div className="grid gap-2">
            {ACTIVITY_2.workingIntro.map((p) => (
              <p key={p} className="text-sm leading-6 text-neutral-600">
                {p}
              </p>
            ))}
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              Heritage Considerations Addendum - draft
            </p>

            {unplacedCardIds.length > 0 && (
              <div className="mt-3">
                <p className="text-xs text-neutral-500">
                  {placedCount} of {PROMPT_CARDS.length} placed
                </p>
                <ul className="mt-2 grid gap-3">
                  {unplacedCardIds.map((id) => {
                    const card = cardsById.get(id)!;
                    return (
                      <li key={id} className="border border-neutral-300 bg-white px-4 py-3">
                        <p className="text-sm text-neutral-900">{card.text}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {ADDENDUM_HEADINGS.map((heading) => (
                            <button
                              key={heading.key}
                              type="button"
                              onClick={() => onPlace(id, heading.key)}
                              className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                            >
                              {heading.key}. {heading.label}
                            </button>
                          ))}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className="mt-6 grid gap-4">
              {ADDENDUM_HEADINGS.map((heading) => {
                const placed = PROMPT_CARDS.filter(
                  (card) => placements[card.id] === heading.key
                );
                return (
                  <div key={heading.key} className="border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                      {heading.key}. {heading.label}
                    </p>
                    <ul className="mt-2 grid gap-1.5">
                      {placed.map((card) => (
                        <li
                          key={card.id}
                          className="border border-neutral-200 bg-white px-3 py-2 text-xs leading-5 text-neutral-800"
                        >
                          {card.text}
                          {!saved && (
                            <button
                              type="button"
                              onClick={() => onUnplace(card.id)}
                              className="ml-2 text-neutral-400 hover:text-neutral-700"
                              aria-label={`Move "${card.text}" back to the list`}
                            >
                              &times;
                            </button>
                          )}
                        </li>
                      ))}
                      {placed.length === 0 && (
                        <li className="text-xs text-neutral-400">Nothing placed here yet.</li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {allPlaced && (
            <>
              <CompareToggle
                label="For comparison: show a worked example"
                open={showCompare}
                onToggle={onToggleCompare}
              >
                <p className="mb-3 text-xs leading-5 text-neutral-500">
                  {ACTIVITY_2.compareInstruction}
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {ADDENDUM_HEADINGS.map((heading) => (
                    <div key={heading.key}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                        {heading.key}. {heading.label}
                      </p>
                      <ul className="mt-2 grid gap-1.5">
                        {PROMPT_CARDS.filter(
                          (card) => card.suggestedHeading === heading.key
                        ).map((card) => (
                          <li key={card.id} className="text-xs leading-5 text-neutral-600">
                            - {card.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CompareToggle>

              <WhyThisMatters text={ACTIVITY_2.whyThisMatters} />
            </>
          )}
        </>
      )}
    </div>
  );
}

// --- Activity 3 -------------------------------------------------------

function Activity3Content({
  prediction,
  onPredict,
  saved,
}: {
  prediction: number | null;
  onPredict: (index: number) => void;
  saved: boolean;
}) {
  const hasAnswered = prediction !== null;
  const isCorrect = prediction === DECISION_GATE_EXPECTED_INDEX;

  return (
    <div className="grid gap-6">
      <PredictionBlock
        prompt={ACTIVITY_3.predictionPrompt}
        options={DECISION_GATE_OPTIONS}
        selectedIndex={prediction}
        onSelect={onPredict}
        disabled={saved}
      />

      {hasAnswered && (
        <>
          <PredictionFeedback
            selectedIndex={prediction}
            expectedIndex={DECISION_GATE_EXPECTED_INDEX}
            feedback={ACTIVITY_3.predictionFeedback}
            optionFeedback={ACTIVITY_3.optionFeedback}
          />

          {isCorrect && (
            <>
              <div className={cardClassName}>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Added to the Heritage Record - Decision point
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-900">
                  {ACTIVITY_3.decisionPointText}
                </p>
              </div>

              <CompareToggle label="For comparison: show a worked example">
                <p className="text-sm leading-6 text-neutral-600">{ACTIVITY_3.worked}</p>
              </CompareToggle>

              <WhyThisMatters text={ACTIVITY_3.whyThisMatters} />
            </>
          )}
        </>
      )}
    </div>
  );
}

// --- Module completion --------------------------------------------------

function ModuleComplete({
  addendumPlacements,
  record,
}: {
  addendumPlacements: Record<string, AddendumHeading | null>;
  record: HeritageRecordState;
}) {
  const downloadHref = `data:text/plain;charset=utf-8,${encodeURIComponent(
    buildWorkingToolText(addendumPlacements, record)
  )}`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        {MODULE_COMPLETE.heading}
      </h1>

      <p className="mt-6 text-base leading-7 text-neutral-600">{MODULE_COMPLETE.body}</p>

      <div className={`mt-8 ${cardClassName}`}>
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Outputs created
        </p>
        <ul className="mt-3 grid gap-1.5">
          {MODULE_COMPLETE.outputsCompleted.map((output) => (
            <li key={output} className="text-sm text-neutral-900">
              &#10003; {output}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <HeritageRecordPanel record={record} />
      </div>

      <div className="mt-6 border border-neutral-200 bg-neutral-50 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          {MODULE_COMPLETE.nextStageHeading}
        </p>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {MODULE_COMPLETE.nextStageBody}
        </p>
        <p className="mt-2 text-xs font-medium text-neutral-500">
          {MODULE_COMPLETE.nextStageMinutes}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button type="button" disabled className={primaryButton}>
          Continue to Module 2 (not yet built)
        </button>
        <a href={downloadHref} download="module-1-heritage-record.txt" className={secondaryButton}>
          Download Module 1 working tool
        </a>
        <Link href="/courses/heritage-design-risk-for-architects" className={secondaryButton}>
          Return to course overview
        </Link>
      </div>
    </div>
  );
}
