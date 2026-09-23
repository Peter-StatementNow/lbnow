"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ModuleStepper } from "@/components/course/ModuleStepper";
import { ARCHITECT_COURSE_CHAPTERS } from "@/lib/content/architect-course";
import {
  MODULE_META,
  SCREEN_1,
  SCREEN_2,
  SCREEN_3,
  SCREEN_4,
  SCREEN_5,
  SCREEN_6,
  SCREEN_7,
  SORT_BUCKETS,
  SORT_ITEMS,
  type SortBucket,
} from "@/lib/content/architect-course-module-1";
import { SORT_ITEM_DISPLAY_ORDER } from "@/lib/content/architect-course-module-1-sort-order";

type ScreenNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const primaryButton =
  "inline-flex items-center justify-center bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300";
const secondaryButton =
  "inline-flex items-center justify-center border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-500";
const cardClassName = "border border-neutral-200 bg-white p-6";

function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-6 text-sm font-medium text-neutral-500 hover:text-neutral-800"
    >
      &larr; Back
    </button>
  );
}

function buildAddendumText(): string {
  const lines = [
    SCREEN_6.heading.toUpperCase(),
    `PROJECT: ${SCREEN_6.project}`,
    `DATE: ${SCREEN_6.dateLabel}`,
    "",
  ];

  for (const section of SCREEN_6.sections) {
    lines.push(section.heading.toUpperCase());
    for (const item of section.items) {
      lines.push(`- ${item}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

export function Module1Experience() {
  const [screen, setScreen] = useState<ScreenNumber>(1);
  const [placements, setPlacements] = useState<Record<string, SortBucket | null>>(() =>
    Object.fromEntries(SORT_ITEMS.map((item) => [item.id, null]))
  );
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  const itemsById = useMemo(
    () => new Map(SORT_ITEMS.map((item) => [item.id, item])),
    []
  );

  const unplacedIds = SORT_ITEM_DISPLAY_ORDER.filter((id) => !placements[id]);
  const allPlaced = unplacedIds.length === 0;

  function placeItem(id: string, bucket: SortBucket) {
    setPlacements((current) => ({ ...current, [id]: bucket }));
  }

  function unplaceItem(id: string) {
    setPlacements((current) => ({ ...current, [id]: null }));
  }

  function goTo(next: ScreenNumber) {
    setScreen(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const stageIndex = 0; // Module 1 is entirely within "Receiving the brief"

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {screen > 1 && (
        <BackLink onClick={() => goTo((screen - 1) as ScreenNumber)} />
      )}

      {screen === 1 && <Screen1 onNext={() => goTo(2)} stageIndex={stageIndex} />}
      {screen === 2 && <Screen2 onOpenEmail={() => goTo(3)} />}
      {screen === 3 && <Screen3 onNext={() => goTo(4)} />}
      {screen === 4 && <Screen4 onNext={() => goTo(5)} />}
      {screen === 5 && (
        <Screen5
          unplacedIds={unplacedIds}
          placements={placements}
          itemsById={itemsById}
          allPlaced={allPlaced}
          showModelAnswer={showModelAnswer}
          onPlace={placeItem}
          onUnplace={unplaceItem}
          onToggleModelAnswer={() => setShowModelAnswer((v) => !v)}
          onNext={() => goTo(6)}
        />
      )}
      {screen === 6 && <Screen6 onNext={() => goTo(7)} />}
      {screen === 7 && <Screen7 />}
    </div>
  );
}

// --- Screen 1 --------------------------------------------------------

function Screen1({
  onNext,
  stageIndex,
}: {
  onNext: () => void;
  stageIndex: number;
}) {
  return (
    <div>
      <ModuleStepper currentStageIndex={stageIndex} />

      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-neutral-900">
        {SCREEN_1.heading}
      </h1>

      <div className="mt-6 grid gap-4">
        {SCREEN_1.body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-neutral-600">
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-8 border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
        {MODULE_META.timeEstimate} &middot; {MODULE_META.outputPromise}
      </p>

      <div className="mt-8">
        <button type="button" onClick={onNext} className={primaryButton}>
          {SCREEN_1.primaryAction}
        </button>
      </div>
    </div>
  );
}

// --- Screen 2 --------------------------------------------------------

function Screen2({ onOpenEmail }: { onOpenEmail: () => void }) {
  const { projectFile, availableItems, briefStatus } = SCREEN_2;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {SCREEN_2.heading}
      </h1>
      <p className="mt-4 text-base leading-7 text-neutral-600">{SCREEN_2.body}</p>

      <div className={`mt-8 ${cardClassName}`}>
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Project file
        </p>
        <dl className="mt-3 grid gap-2 text-sm">
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <dt className="font-medium text-neutral-500">Project</dt>
            <dd className="text-neutral-900">{projectFile.project}</dd>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <dt className="font-medium text-neutral-500">Type</dt>
            <dd className="text-neutral-900">{projectFile.type}</dd>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <dt className="font-medium text-neutral-500">Client ambition</dt>
            <dd className="text-neutral-900">{projectFile.clientAmbition}</dd>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <dt className="font-medium text-neutral-500">Programme</dt>
            <dd className="text-neutral-900">{projectFile.programme}</dd>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <dt className="font-medium text-neutral-500">Budget</dt>
            <dd className="text-neutral-900">{projectFile.budget}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className={cardClassName}>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            Available
          </p>
          <ul className="mt-3 grid gap-2">
            {availableItems.map((item) =>
              item.interactive ? (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={onOpenEmail}
                    className="w-full border border-neutral-300 px-3 py-2 text-left text-sm font-medium text-neutral-900 hover:border-neutral-500 hover:bg-neutral-50"
                  >
                    {item.label} &rarr;
                  </button>
                </li>
              ) : (
                <li
                  key={item.label}
                  className="border border-neutral-100 bg-neutral-50 px-3 py-2 text-sm text-neutral-500"
                >
                  {item.label}
                </li>
              )
            )}
          </ul>
        </div>

        <div className={cardClassName}>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            Brief status
          </p>
          <dl className="mt-3 grid gap-2 text-sm">
            {briefStatus.map((row) => (
              <div key={row.item} className="flex items-center justify-between gap-3">
                <dt className="text-neutral-600">{row.item}</dt>
                <dd
                  className={
                    row.status === "Recorded"
                      ? "font-medium text-neutral-900"
                      : "font-medium text-neutral-500"
                  }
                >
                  {row.status}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <p className="mt-6 text-sm text-neutral-500">
        Start with the client email.
      </p>
    </div>
  );
}

// --- Screen 3 --------------------------------------------------------

function Screen3({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
        {SCREEN_3.documentHeader}
      </p>

      <div className={`mt-4 ${cardClassName} font-serif`}>
        <div className="grid gap-4 text-[15px] leading-7 text-neutral-800">
          {SCREEN_3.email.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <p className="mt-6 text-base leading-7 text-neutral-600">{SCREEN_3.prompt}</p>

      <div className="mt-8">
        <button type="button" onClick={onNext} className={primaryButton}>
          {SCREEN_3.action}
        </button>
      </div>
    </div>
  );
}

// --- Screen 4 --------------------------------------------------------

function Screen4({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {SCREEN_4.heading}
      </h1>
      <p className="mt-4 text-base leading-7 text-neutral-600">{SCREEN_4.body}</p>

      <div className="mt-8 grid gap-6">
        {SCREEN_4.cards.map((card) => (
          <div key={card.label} className={cardClassName}>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              {card.label}
            </p>
            <p className="mt-2 text-base font-semibold text-neutral-900">
              {card.heading}
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{card.body}</p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              {card.additionsHeading}
            </p>
            <ul className="mt-2 grid gap-1.5">
              {card.additions.map((addition) => (
                <li key={addition} className="text-sm leading-6 text-neutral-600">
                  - {addition}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm font-medium text-neutral-700">
        {SCREEN_4.interactionPrompt}
      </p>

      <div className="mt-4">
        <button type="button" onClick={onNext} className={primaryButton}>
          {SCREEN_4.action}
        </button>
      </div>
    </div>
  );
}

// --- Screen 5 ----------------------------------------------------------

function Screen5({
  unplacedIds,
  placements,
  itemsById,
  allPlaced,
  showModelAnswer,
  onPlace,
  onUnplace,
  onToggleModelAnswer,
  onNext,
}: {
  unplacedIds: string[];
  placements: Record<string, SortBucket | null>;
  itemsById: Map<string, (typeof SORT_ITEMS)[number]>;
  allPlaced: boolean;
  showModelAnswer: boolean;
  onPlace: (id: string, bucket: SortBucket) => void;
  onUnplace: (id: string) => void;
  onToggleModelAnswer: () => void;
  onNext: () => void;
}) {
  const placedCount = SORT_ITEMS.length - unplacedIds.length;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {SCREEN_5.heading}
      </h1>
      <p className="mt-4 text-base leading-7 text-neutral-600">{SCREEN_5.body}</p>
      <p className="mt-4 text-sm leading-6 text-neutral-500">{SCREEN_5.instructions}</p>

      {unplacedIds.length > 0 && (
        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            To place ({placedCount} of {SORT_ITEMS.length} placed)
          </p>
          <ul className="mt-3 grid gap-3">
            {unplacedIds.map((id) => {
              const item = itemsById.get(id)!;
              return (
                <li
                  key={id}
                  className="border border-neutral-300 bg-white px-4 py-3"
                >
                  <p className="text-sm text-neutral-900">{item.text}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SORT_BUCKETS.map((bucket) => (
                      <button
                        key={bucket.key}
                        type="button"
                        onClick={() => onPlace(id, bucket.key)}
                        className="border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                      >
                        {bucket.label}
                      </button>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {SORT_BUCKETS.map((bucket) => {
          const placedIds = SORT_ITEMS.filter(
            (item) => placements[item.id] === bucket.key
          );
          return (
            <div key={bucket.key} className="border border-neutral-200 bg-neutral-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                {bucket.label}
              </p>
              <ul className="mt-3 grid gap-2">
                {placedIds.map((item) => (
                  <li
                    key={item.id}
                    className="border border-neutral-200 bg-white px-3 py-2 text-xs leading-5 text-neutral-800"
                  >
                    {item.text}
                    <button
                      type="button"
                      onClick={() => onUnplace(item.id)}
                      className="ml-2 text-neutral-400 hover:text-neutral-700"
                      aria-label={`Move "${item.text}" back to the list`}
                    >
                      &times;
                    </button>
                  </li>
                ))}
                {placedIds.length === 0 && (
                  <li className="text-xs text-neutral-400">Nothing placed here yet.</li>
                )}
              </ul>
            </div>
          );
        })}
      </div>

      {allPlaced && (
        <div className="mt-10 border border-neutral-300 bg-neutral-50 px-6 py-5">
          <p className="text-base font-semibold text-neutral-900">
            {SCREEN_5.feedbackHeading}
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            {SCREEN_5.feedbackBody}
          </p>

          <button
            type="button"
            onClick={onToggleModelAnswer}
            className="mt-4 text-sm font-medium text-neutral-700 underline hover:text-neutral-900"
          >
            {showModelAnswer
              ? "Hide one possible categorisation"
              : "For comparison: show one possible categorisation"}
          </button>

          {showModelAnswer && (
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {SORT_BUCKETS.map((bucket) => (
                <div key={bucket.key}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                    {bucket.label}
                  </p>
                  <ul className="mt-2 grid gap-1.5">
                    {SORT_ITEMS.filter((item) => item.modelBucket === bucket.key).map(
                      (item) => (
                        <li key={item.id} className="text-xs leading-5 text-neutral-600">
                          - {item.text}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-8">
        <button
          type="button"
          onClick={onNext}
          disabled={!allPlaced}
          className={primaryButton}
        >
          {SCREEN_5.action}
        </button>
      </div>
    </div>
  );
}

// --- Screen 6 --------------------------------------------------------

function Screen6({ onNext }: { onNext: () => void }) {
  const downloadHref = `data:text/plain;charset=utf-8,${encodeURIComponent(
    buildAddendumText()
  )}`;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {SCREEN_6.heading}
      </h1>
      <p className="mt-4 text-base leading-7 text-neutral-600">{SCREEN_6.body}</p>

      <div className={`mt-8 ${cardClassName} font-mono text-[13px] leading-6`}>
        <p className="text-neutral-500">PROJECT: {SCREEN_6.project}</p>
        <p className="text-neutral-500">DATE: {SCREEN_6.dateLabel}</p>

        <div className="mt-5 grid gap-5">
          {SCREEN_6.sections.map((section) => (
            <div key={section.heading}>
              <p className="font-semibold text-neutral-900">{section.heading}</p>
              <ul className="mt-1.5 grid gap-1">
                {section.items.map((item) => (
                  <li key={item} className="text-neutral-700">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border border-neutral-200 bg-neutral-50 px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          {SCREEN_6.sidePanel.heading}
        </p>
        <p className="mt-1 text-base font-semibold text-neutral-900">
          {SCREEN_6.sidePanel.body}
        </p>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {SCREEN_6.sidePanel.footer}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={downloadHref}
          download="heritage-considerations-addendum.txt"
          className={secondaryButton}
        >
          {SCREEN_6.actions.download}
        </a>
        <button type="button" onClick={onNext} className={primaryButton}>
          {SCREEN_6.actions.continue}
        </button>
      </div>
    </div>
  );
}

// --- Screen 7 --------------------------------------------------------

function Screen7() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {SCREEN_7.heading}
      </h1>

      <div className="mt-6 grid gap-4">
        {SCREEN_7.body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-neutral-600">
            {paragraph}
          </p>
        ))}
      </div>

      <div className={`mt-8 ${cardClassName}`}>
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Course progress
        </p>
        <ul className="mt-3 grid gap-2">
          {ARCHITECT_COURSE_CHAPTERS.map((chapter, index) => {
            const status =
              index === 0 ? "Complete" : index === 1 ? "Next" : "Later";
            return (
              <li
                key={chapter.chapterNumber}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span
                  className={
                    index === 0 ? "text-neutral-400 line-through" : "text-neutral-800"
                  }
                >
                  {chapter.chapterNumber}. {chapter.title}
                </span>
                <span
                  className={
                    status === "Next"
                      ? "font-medium text-neutral-900"
                      : "text-neutral-400"
                  }
                >
                  {status}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button type="button" disabled className={primaryButton}>
          {SCREEN_7.continueAction} (not yet built)
        </button>
        <Link href="/courses/heritage-design-risk-for-architects" className={secondaryButton}>
          {SCREEN_7.returnAction}
        </Link>
      </div>
    </div>
  );
}
