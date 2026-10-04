"use client";

import { useState } from "react";

/**
 * "Myth and misconception" - optional reinforcement of a principle the
 * page has already taught, collapsed until shown. Styled like "Other
 * heritage options" in the step 4 Further analysis box: visually
 * secondary, never required to continue.
 */
export function MythCard({
  card,
}: {
  card: { title: string; myth: string; remember: string; separate: string };
}) {
  const [open, setOpen] = useState(false);

  const label = "text-xs font-medium uppercase tracking-wide text-neutral-500";

  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className={label}>Myth and misconception</h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="-my-1.5 shrink-0 px-2 py-1.5 text-xs font-medium text-neutral-600 underline hover:text-neutral-900"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      <p className="mt-2 text-sm font-medium leading-6 text-neutral-800">{card.title}</p>

      {open && (
        <dl className="mt-2 grid gap-3">
          <div>
            <dt className={label}>Myth</dt>
            <dd className="mt-1 text-sm italic leading-6 text-neutral-700">{card.myth}</dd>
          </div>
          <div>
            <dt className={label}>What to remember</dt>
            <dd className="mt-1 text-sm leading-6 text-neutral-700">{card.remember}</dd>
          </div>
          <div>
            <dt className={label}>What remains separate</dt>
            <dd className="mt-1 text-sm leading-6 text-neutral-700">{card.separate}</dd>
          </div>
        </dl>
      )}
    </div>
  );
}
