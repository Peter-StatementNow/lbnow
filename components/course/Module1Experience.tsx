"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LearningScreenShell } from "@/components/course/LearningScreenShell";
import { ProjectFilePanel } from "@/components/course/ProjectFilePanel";
import {
  ACTIVITY_1,
  ACTIVITY_2,
  ACTIVITY_3,
  ADDENDUM_HEADINGS,
  DECISION_GATE_EXPECTED_INDEX,
  DECISION_GATE_OPTIONS,
  MODULE_COMPLETE,
  MODULE_TITLE,
  PROJECT_FILE_AFTER_ACTIVITY_1,
  PROJECT_FILE_AFTER_ACTIVITY_2,
  PROJECT_FILE_AFTER_ACTIVITY_3,
  PROJECT_FILE_INITIAL,
  PROMPT_CARDS,
  STAGE_LABEL,
  TOTAL_COURSE_MINUTES,
  type AddendumHeading,
  type ProjectFileState,
} from "@/lib/content/architect-course-module-1";
import { PROMPT_CARD_DISPLAY_ORDER } from "@/lib/content/architect-course-module-1-display-order";

type Stage = 1 | 2 | 3 | "complete";

const ACTIVITY_MINUTES = { 1: 2, 2: 3, 3: 2 };

const primaryButton =
  "inline-flex items-center justify-center bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300";
const secondaryButton =
  "inline-flex items-center justify-center border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-500";
const cardClassName = "border border-neutral-200 bg-white p-6";

function buildWorkingToolText(
  addendumPlacements: Record<string, AddendumHeading | null>
): string {
  const lines = ["HERITAGE CONSIDERATIONS ADDENDUM - VERSION 1", ""];

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

  lines.push("PRE-DESIGN DECISION GATE", "");
  lines.push(
    "Establish the heritage baseline and likely information/consent route proportionately, using further research, survey, assessment or specialist input where required by the project."
  );

  return lines.join("\n");
}

export function Module1Experience() {
  const [stage, setStage] = useState<Stage>(1);
  const [projectFile, setProjectFile] = useState<ProjectFileState>(PROJECT_FILE_INITIAL);

  // Activity 1
  const [briefSelections, setBriefSelections] = useState<Set<string>>(new Set());
  const [activity1Saved, setActivity1Saved] = useState(false);

  // Activity 2
  const [addendumPlacements, setAddendumPlacements] = useState<
    Record<string, AddendumHeading | null>
  >(() => Object.fromEntries(PROMPT_CARDS.map((card) => [card.id, null])));
  const [activity2Saved, setActivity2Saved] = useState(false);
  const [showSuggestedPlacement, setShowSuggestedPlacement] = useState(false);

  // Activity 3
  const [selectedGateOption, setSelectedGateOption] = useState<number | null>(null);
  const [activity3Saved, setActivity3Saved] = useState(false);

  const completedActivities = [activity1Saved, activity2Saved, activity3Saved].filter(
    Boolean
  ).length;
  const completedMinutes = [1, 2, 3]
    .slice(0, completedActivities)
    .reduce((sum, n) => sum + ACTIVITY_MINUTES[n as 1 | 2 | 3], 0);
  const percentComplete = Math.round((completedMinutes / TOTAL_COURSE_MINUTES) * 100);
  const minutesLeft = TOTAL_COURSE_MINUTES - completedMinutes;

  const selectableRows = ACTIVITY_1.briefStatusRows.filter((row) => row.selectable);
  const allBriefLinesSelected = selectableRows.every((row) =>
    briefSelections.has(row.label)
  );

  function toggleBriefSelection(label: string) {
    setBriefSelections((current) => {
      const next = new Set(current);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  }

  function saveActivity1() {
    setProjectFile(PROJECT_FILE_AFTER_ACTIVITY_1);
    setActivity1Saved(true);
  }

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

  function saveActivity2() {
    setProjectFile(PROJECT_FILE_AFTER_ACTIVITY_2);
    setActivity2Saved(true);
  }

  function saveActivity3() {
    setProjectFile(PROJECT_FILE_AFTER_ACTIVITY_3);
    setActivity3Saved(true);
  }

  function goTo(next: Stage) {
    setStage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const shellCommon = {
    courseTitle: MODULE_TITLE,
    percentComplete,
    minutesLeft,
    stageLabel: STAGE_LABEL,
    projectFile,
  };

  if (stage === "complete") {
    return (
      <ModuleComplete
        addendumPlacements={addendumPlacements}
        projectFile={projectFile}
      />
    );
  }

  return (
    <>
      {stage === 1 && (
        <LearningScreenShell
          {...shellCommon}
          activityLabel={ACTIVITY_1.activityLabel}
          activityIndexLabel={ACTIVITY_1.activityIndexLabel}
          whyNow={ACTIVITY_1.whyNow}
          evidence={ACTIVITY_1.evidence}
          footer={
            activity1Saved ? (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-medium text-neutral-900">
                  &#10003; Saved to project file
                </p>
                <button
                  type="button"
                  onClick={() => goTo(2)}
                  className={primaryButton}
                >
                  Next activity &rarr;
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={saveActivity1}
                disabled={!allBriefLinesSelected}
                className={primaryButton}
              >
                {ACTIVITY_1.saveLabel}
              </button>
            )
          }
        >
          <Activity1WorkingSurface
            selections={briefSelections}
            onToggle={toggleBriefSelection}
            allSelected={allBriefLinesSelected}
            saved={activity1Saved}
          />
        </LearningScreenShell>
      )}

      {stage === 2 && (
        <LearningScreenShell
          {...shellCommon}
          activityLabel={ACTIVITY_2.activityLabel}
          activityIndexLabel={ACTIVITY_2.activityIndexLabel}
          whyNow={ACTIVITY_2.whyNow}
          evidence={ACTIVITY_2.evidence}
          footer={
            activity2Saved ? (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-medium text-neutral-900">
                  &#10003; Saved to project file
                </p>
                <button
                  type="button"
                  onClick={() => goTo(3)}
                  className={primaryButton}
                >
                  Next activity &rarr;
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={saveActivity2}
                disabled={!allCardsPlaced}
                className={primaryButton}
              >
                {ACTIVITY_2.saveLabel}
              </button>
            )
          }
        >
          <Activity2WorkingSurface
            unplacedCardIds={unplacedCardIds}
            placements={addendumPlacements}
            allPlaced={allCardsPlaced}
            showSuggested={showSuggestedPlacement}
            onPlace={placeCard}
            onUnplace={unplaceCard}
            onToggleSuggested={() => setShowSuggestedPlacement((v) => !v)}
          />
        </LearningScreenShell>
      )}

      {stage === 3 && (
        <LearningScreenShell
          {...shellCommon}
          activityLabel={ACTIVITY_3.activityLabel}
          activityIndexLabel={ACTIVITY_3.activityIndexLabel}
          whyNow={ACTIVITY_3.whyNow}
          evidence={[]}
          footer={
            activity3Saved ? (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-medium text-neutral-900">
                  &#10003; Saved to project file
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
                onClick={saveActivity3}
                disabled={selectedGateOption !== DECISION_GATE_EXPECTED_INDEX}
                className={primaryButton}
              >
                {ACTIVITY_3.saveLabel}
              </button>
            )
          }
        >
          <Activity3WorkingSurface
            selectedOption={selectedGateOption}
            onSelect={setSelectedGateOption}
            saved={activity3Saved}
          />
        </LearningScreenShell>
      )}
    </>
  );
}

// --- Activity 1 working surface -----------------------------------------

function Activity1WorkingSurface({
  selections,
  onToggle,
  allSelected,
  saved,
}: {
  selections: Set<string>;
  onToggle: (label: string) => void;
  allSelected: boolean;
  saved: boolean;
}) {
  return (
    <div>
      <p className="text-sm leading-6 text-neutral-600">{ACTIVITY_1.openingInstruction}</p>

      <div className={`mt-6 ${cardClassName}`}>
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Project brief - initial status
        </p>
        <ul className="mt-3 grid gap-3">
          {ACTIVITY_1.briefStatusRows.map((row) => (
            <li
              key={row.label}
              className="flex items-start gap-3 border-b border-neutral-100 pb-3 last:border-0 last:pb-0"
            >
              {row.selectable ? (
                <input
                  type="checkbox"
                  checked={selections.has(row.label)}
                  onChange={() => onToggle(row.label)}
                  disabled={saved}
                  className="mt-1 h-4 w-4 shrink-0"
                  aria-label={`Keep "${row.label}" open`}
                />
              ) : (
                <span className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              )}
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-neutral-900">{row.label}</p>
                  <span className="text-xs font-medium text-neutral-500">{row.status}</span>
                </div>
                <p className="mt-0.5 text-sm text-neutral-600">{row.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-sm font-medium text-neutral-700">{ACTIVITY_1.prompt}</p>
      {!allSelected && !saved && (
        <p className="mt-1 text-xs text-neutral-400">
          Select every brief line that should stay open.
        </p>
      )}

      {allSelected && (
        <div className="mt-4 border border-neutral-300 bg-neutral-50 px-5 py-4">
          <p className="text-sm font-semibold text-neutral-900">
            {ACTIVITY_1.feedback.heading}
          </p>
          <p className="mt-1 text-sm leading-6 text-neutral-600">
            {ACTIVITY_1.feedback.body}
          </p>
        </div>
      )}

      {saved && (
        <p className="mt-4 text-sm leading-6 text-neutral-600">
          {ACTIVITY_1.savedConfirmation}
          <br />
          <span className="text-neutral-500">{ACTIVITY_1.forwardCue}</span>
        </p>
      )}
    </div>
  );
}

// --- Activity 2 working surface -----------------------------------------

function Activity2WorkingSurface({
  unplacedCardIds,
  placements,
  allPlaced,
  showSuggested,
  onPlace,
  onUnplace,
  onToggleSuggested,
}: {
  unplacedCardIds: string[];
  placements: Record<string, AddendumHeading | null>;
  allPlaced: boolean;
  showSuggested: boolean;
  onPlace: (id: string, heading: AddendumHeading) => void;
  onUnplace: (id: string) => void;
  onToggleSuggested: () => void;
}) {
  const cardsById = useMemo(
    () => new Map(PROMPT_CARDS.map((card) => [card.id, card])),
    []
  );
  const placedCount = PROMPT_CARDS.length - unplacedCardIds.length;

  return (
    <div>
      <div className="grid gap-2">
        {ACTIVITY_2.openingInstruction.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-6 text-neutral-600">
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-6 text-xs font-medium uppercase tracking-wide text-neutral-500">
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
                    <button
                      type="button"
                      onClick={() => onUnplace(card.id)}
                      className="ml-2 text-neutral-400 hover:text-neutral-700"
                      aria-label={`Move "${card.text}" back to the list`}
                    >
                      &times;
                    </button>
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

      {allPlaced && (
        <div className="mt-6 border border-neutral-300 bg-neutral-50 px-6 py-5">
          <p className="text-base font-semibold text-neutral-900">
            {ACTIVITY_2.feedback.heading}
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            {ACTIVITY_2.feedback.body}
          </p>

          <button
            type="button"
            onClick={onToggleSuggested}
            className="mt-4 text-sm font-medium text-neutral-700 underline hover:text-neutral-900"
          >
            {showSuggested
              ? "Hide one suggested placement"
              : "For comparison: show one suggested placement"}
          </button>

          {showSuggested && (
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
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
          )}
        </div>
      )}
    </div>
  );
}

// --- Activity 3 working surface -----------------------------------------

function Activity3WorkingSurface({
  selectedOption,
  onSelect,
  saved,
}: {
  selectedOption: number | null;
  onSelect: (index: number) => void;
  saved: boolean;
}) {
  const isExpectedSelected = selectedOption === DECISION_GATE_EXPECTED_INDEX;
  const hasSelectedWrong = selectedOption !== null && !isExpectedSelected;

  return (
    <div>
      <p className="text-sm leading-6 text-neutral-600">{ACTIVITY_3.openingInstruction}</p>

      <p className="mt-6 text-sm font-medium text-neutral-700">{ACTIVITY_3.prompt}</p>

      <div className="mt-3 grid gap-2">
        {DECISION_GATE_OPTIONS.map((option, index) => (
          <label
            key={option}
            className={
              selectedOption === index
                ? "flex cursor-pointer gap-3 border border-neutral-900 bg-neutral-50 px-4 py-3"
                : "flex cursor-pointer gap-3 border border-neutral-200 bg-white px-4 py-3 hover:border-neutral-400"
            }
          >
            <input
              type="radio"
              name="decision-gate"
              checked={selectedOption === index}
              onChange={() => onSelect(index)}
              disabled={saved}
              className="mt-1 h-4 w-4 shrink-0"
            />
            <span className="text-sm text-neutral-800">{option}</span>
          </label>
        ))}
      </div>

      {hasSelectedWrong && (
        <p className="mt-4 text-sm text-neutral-500">
          Consider whether this position is proportionate for a straightforward case -
          review the other options.
        </p>
      )}

      {isExpectedSelected && (
        <div className="mt-4 border border-neutral-300 bg-neutral-50 px-5 py-4">
          <p className="text-sm font-semibold text-neutral-900">
            {ACTIVITY_3.feedback.heading}
          </p>
          <p className="mt-1 text-sm leading-6 text-neutral-600">
            {ACTIVITY_3.feedback.body}
          </p>

          <div className="mt-4 border-t border-neutral-200 pt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              {ACTIVITY_3.savedNoteHeading}
            </p>
            <p className="mt-2 text-sm text-neutral-700">{ACTIVITY_3.savedNoteIntro}</p>
            <p className="mt-2 text-sm leading-6 text-neutral-900">
              {ACTIVITY_3.savedNoteBody}
            </p>
          </div>
        </div>
      )}

      {saved && (
        <p className="mt-4 text-sm leading-6 text-neutral-600">
          {ACTIVITY_3.savedConfirmation}
        </p>
      )}
    </div>
  );
}

// --- Module completion -----------------------------------------------

function ModuleComplete({
  addendumPlacements,
  projectFile,
}: {
  addendumPlacements: Record<string, AddendumHeading | null>;
  projectFile: ProjectFileState;
}) {
  const downloadHref = `data:text/plain;charset=utf-8,${encodeURIComponent(
    buildWorkingToolText(addendumPlacements)
  )}`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        {MODULE_COMPLETE.heading}
      </h1>

      <div className="mt-6 grid gap-4">
        {MODULE_COMPLETE.body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-neutral-600">
            {paragraph}
          </p>
        ))}
      </div>

      <div className={`mt-8 ${cardClassName}`}>
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Completed project-file outputs
        </p>
        <ul className="mt-3 grid gap-1.5">
          {MODULE_COMPLETE.outputsCompleted.map((output) => (
            <li key={output} className="text-sm text-neutral-900">
              &#10003; {output}
            </li>
          ))}
        </ul>
      </div>

      <div id="project-file" className="mt-6">
        <ProjectFilePanel projectFile={projectFile} />
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
        <a href={downloadHref} download="module-1-working-tool.txt" className={secondaryButton}>
          Download Module 1 working tool
        </a>
        <Link href="/courses/heritage-design-risk-for-architects" className={secondaryButton}>
          Return to course overview
        </Link>
      </div>
    </div>
  );
}
