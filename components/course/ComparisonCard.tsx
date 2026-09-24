"use client";

import { useState } from "react";

export type ComparisonCardContent = {
  heading: string;
  courseCase: string;
  comparable: string;
  whatMayChange: string[];
  whatStaysSame: string[];
};

/**
 * "If the heritage trigger were different" - optional, collapsed by
 * default so it never interrupts the core case. Its job is to show
 * how the professional logic would shift for a comparable but
 * different heritage trigger (e.g. unlisted-but-conservation-area),
 * without turning the course into a survey of every scenario.
 */
export function ComparisonCard({ content }: { content: ComparisonCardContent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span>
          <span className="mr-2 text-xs font-medium uppercase tracking-wide text-neutral-400">
            Optional
          </span>
          <span className="text-sm font-medium text-neutral-800">{content.heading}</span>
        </span>
        <span className="shrink-0 text-xs text-neutral-400">{open ? "Hide" : "Show"}</span>
      </button>

      {open && (
        <div className="grid gap-4 border-t border-neutral-200 px-5 py-4">
          <p className="text-sm leading-6 text-neutral-700">
            <span className="font-medium text-neutral-900">This course case: </span>
            {content.courseCase}
          </p>
          <p className="text-sm leading-6 text-neutral-700">
            <span className="font-medium text-neutral-900">Comparable project: </span>
            {content.comparable}
          </p>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              What may change
            </p>
            <ul className="mt-2 grid gap-1.5">
              {content.whatMayChange.map((line) => (
                <li key={line} className="text-sm leading-6 text-neutral-700">
                  - {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              What stays the same
            </p>
            <ul className="mt-2 grid gap-1.5">
              {content.whatStaysSame.map((line) => (
                <li key={line} className="text-sm leading-6 text-neutral-700">
                  - {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
