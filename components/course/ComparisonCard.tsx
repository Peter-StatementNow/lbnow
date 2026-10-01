"use client";

import { useState } from "react";

/** An intro paragraph, optionally followed by headed checklists (e.g. Verify / Do not assume / Record). */
export type ComparisonCardContent = {
  heading: string;
  intro: string;
  sections?: { heading: string; items: string[] }[];
};

/**
 * "Other heritage options" - how the professional logic would shift for
 * a comparable but different heritage trigger (e.g. a conservation area
 * or local listing), without turning the course into a survey of every
 * scenario. Sits inside the step 4 Further analysis box, styled like
 * its "Worked example": a small label, the scenario on the next line,
 * and the full text collapsed until shown.
 */
export function ComparisonCard({ content }: { content: ComparisonCardContent }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Other heritage options
        </h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="-my-1.5 shrink-0 px-2 py-1.5 text-xs font-medium text-neutral-600 underline hover:text-neutral-900"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      <p className="mt-2 text-sm font-medium leading-6 text-neutral-800">{content.heading}</p>

      {open && (
        <div className="mt-2 grid gap-3">
          <p className="text-sm leading-6 text-neutral-700">{content.intro}</p>
          {content.sections?.map((section) => (
            <div key={section.heading}>
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                {section.heading}
              </p>
              <ul className="mt-1.5 grid gap-1.5">
                {section.items.map((line) => (
                  <li key={line} className="text-sm leading-6 text-neutral-700">
                    - {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
