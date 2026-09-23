"use client";

import { useState } from "react";
import type { ProjectFileState } from "@/lib/content/architect-course-module-1";

/**
 * The persistent, accumulating record - shows outputs the learner has
 * built so far, not course content. Collapsible so it doesn't crowd
 * the working surface, especially on a phone.
 */
export function ProjectFilePanel({ projectFile }: { projectFile: ProjectFileState }) {
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
          Project file
        </span>
        <span className="text-xs text-neutral-400">{isOpen ? "Hide" : "Show"}</span>
      </button>

      {isOpen && (
        <div className="grid gap-4 border-t border-neutral-200 px-4 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              Project brief
            </p>
            <dl className="mt-2 grid gap-1.5">
              {projectFile.briefRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-3 text-xs"
                >
                  <dt className="text-neutral-600">{row.label}</dt>
                  <dd
                    className={
                      row.emphasis
                        ? "text-right font-semibold text-neutral-900"
                        : "text-right text-neutral-500"
                    }
                  >
                    {row.status}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              Project outputs
            </p>
            <dl className="mt-2 grid gap-1.5">
              {projectFile.outputs.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-3 text-xs"
                >
                  <dt className="text-neutral-600">{row.label}</dt>
                  <dd
                    className={
                      row.emphasis
                        ? "text-right font-semibold text-neutral-900"
                        : "text-right text-neutral-500"
                    }
                  >
                    {row.status}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
