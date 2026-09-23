"use client";

import { useState } from "react";
import type { EvidenceItem } from "@/lib/content/architect-course-module-1";

/**
 * Evidence supports the current activity; it is not a standalone
 * course screen. Chips open their content inline, one at a time
 * (accordion-style) - works identically on desktop and mobile without
 * needing a true modal/dialog.
 */
export function EvidenceTray({ items }: { items: EvidenceItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = items.find((item) => item.id === openId) ?? null;

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
        Evidence available
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            aria-expanded={openId === item.id}
            className={
              openId === item.id
                ? "border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white"
                : "border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 hover:border-neutral-500"
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      {openItem && (
        <div className="mt-3 border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {openItem.label}
          </p>
          <div className="mt-2 grid gap-2">
            {openItem.body.map((paragraph, index) => (
              <p key={index} className="text-sm leading-6 text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
