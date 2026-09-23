"use client";

import { useState } from "react";
import type { HeritageRecordState } from "@/lib/content/architect-course-module-1";

/**
 * The persistent, heritage-only accumulating record - deliberately
 * excludes ordinary project-management content (client objectives,
 * budget, programme). Collapsible so it doesn't crowd the working
 * surface, especially on a phone.
 */
export function HeritageRecordPanel({ record }: { record: HeritageRecordState }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-neutral-200 bg-white">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
          Heritage Record
        </span>
        <span className="text-xs text-neutral-400">{isOpen ? "Hide" : "Show"}</span>
      </button>

      {isOpen && (
        <div className="grid gap-4 border-t border-neutral-200 px-4 py-4">
          {record.completed.length > 0 && (
            <ul className="grid gap-1">
              {record.completed.map((item) => (
                <li key={item} className="text-xs font-medium text-neutral-900">
                  &#10003; {item}
                </li>
              ))}
            </ul>
          )}

          <dl className="grid gap-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Known
              </dt>
              <dd className="mt-0.5 text-xs text-neutral-700">{record.known}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                To establish
              </dt>
              <dd className="mt-0.5 text-xs text-neutral-700">{record.toEstablish}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Keep under review
              </dt>
              <dd className="mt-0.5 text-xs text-neutral-700">{record.keepUnderReview}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Decision points
              </dt>
              <dd className="mt-0.5 text-xs text-neutral-700">{record.decisionPoints}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}
