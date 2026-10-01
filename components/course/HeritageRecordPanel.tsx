"use client";

import { useState } from "react";
import type {
  HeritageRecordView,
  RecordGroup,
  RecordText,
} from "@/lib/content/course-model";

function RecordValue({ text }: { text: RecordText }) {
  const className = "text-sm leading-6 text-neutral-700";
  if (!Array.isArray(text)) {
    return <dd className={`mt-0.5 ${className}`}>{text}</dd>;
  }
  return (
    <dd className="mt-1">
      <ul className="grid gap-1">
        {text.map((line) => (
          <li key={line} className={`flex gap-1.5 ${className}`}>
            <span aria-hidden>&bull;</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </dd>
  );
}

/** One chapter's record: optional status, then its headed sections. */
function RecordGroupBody({ group }: { group: RecordGroup }) {
  return (
    <div className="grid gap-4">
      {group.status && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
            {group.status}
          </p>
          {group.statusNote && (
            <p className="mt-1 text-sm leading-6 text-neutral-600">{group.statusNote}</p>
          )}
        </div>
      )}
      <dl className="grid gap-4">
        {group.sections.map((section) => (
          <div key={section.heading}>
            <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              {section.heading}
            </dt>
            <RecordValue text={section.entries} />
          </div>
        ))}
      </dl>
    </div>
  );
}

function EarlierChapter({ group, defaultOpen }: { group: RecordGroup; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-neutral-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-3 text-left"
      >
        <span className="text-sm font-medium text-neutral-800">{group.label}</span>
        <span className="shrink-0 text-xs text-neutral-600">{open ? "Hide" : "Show"}</span>
      </button>
      {open && (
        <div className="pb-4">
          <RecordGroupBody group={group} />
        </div>
      )}
    </div>
  );
}

/**
 * The persistent, heritage-only accumulating record, grouped by chapter
 * (Peter, 1 Oct 2026): the current chapter's entries in full, then each
 * earlier chapter's record collapsed beneath it. Rendered as the second
 * tab of the right-hand workspace (see LearningScreenShell).
 */
export function HeritageRecordPanel({ record }: { record: HeritageRecordView }) {
  const { current, earlier } = record;
  const currentIsEmpty = current.sections.length === 0;

  return (
    <div className="grid gap-5 px-5 py-5">
      <div>
        <p className="text-sm font-semibold text-neutral-900">{current.label}</p>
        <div className="mt-3">
          {currentIsEmpty ? (
            <p className="text-sm leading-6 text-neutral-500">
              This chapter&rsquo;s entries appear here as you save each page. The record so far
              is below.
            </p>
          ) : (
            <RecordGroupBody group={current} />
          )}
        </div>
      </div>

      {earlier.length > 0 && (
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            Earlier chapters
          </h3>
          <div className="mt-2">
            {earlier.map((group, index) => (
              <EarlierChapter
                key={group.label}
                group={group}
                // On a chapter's first page there is nothing new yet, so
                // open the most recent earlier chapter instead.
                defaultOpen={currentIsEmpty && index === 0}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
