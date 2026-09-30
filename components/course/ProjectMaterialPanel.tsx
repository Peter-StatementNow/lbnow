"use client";

import { useState } from "react";
import type { EvidenceItem } from "@/lib/content/architect-course-chapter-1";

/**
 * The "what evidence exists" panel - the first tab of the right-hand
 * workspace (see LearningScreenShell), ahead of the Heritage Record:
 * material informs judgement, the record preserves it.
 * Items are locked (visible but not openable) until `unlocked`, except
 * any in `alwaysAvailableIds` - the document that triggered the
 * activity (e.g. a client enquiry) is something the learner would
 * already have seen, so it shouldn't gate on a prediction that hasn't
 * happened yet.
 */
export function ProjectMaterialPanel({
  items,
  unlocked,
  unlockHint,
  alwaysAvailableIds = [],
  initialOpenId,
}: {
  items: EvidenceItem[];
  unlocked: boolean;
  unlockHint: string;
  alwaysAvailableIds?: string[];
  initialOpenId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(initialOpenId ?? null);
  const stillLocked = !unlocked && items.some((item) => !alwaysAvailableIds.includes(item.id));

  return (
    <div>
      <ul className="grid gap-0.5 px-5 py-3">
        {items.map((item) => {
          const itemUnlocked = unlocked || alwaysAvailableIds.includes(item.id);
          const isOpen = itemUnlocked && openId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => itemUnlocked && setOpenId(isOpen ? null : item.id)}
                disabled={!itemUnlocked}
                aria-expanded={isOpen}
                className={
                  itemUnlocked
                    ? "flex w-full items-center justify-between gap-2 py-1.5 text-left text-sm text-neutral-800 hover:text-neutral-900"
                    : "flex w-full items-center justify-between gap-2 py-1.5 text-left text-sm text-neutral-400"
                }
              >
                <span>{item.label}</span>
                {itemUnlocked && (
                  <span className="text-xs text-neutral-400">{isOpen ? "Hide" : "Open"}</span>
                )}
              </button>
              {isOpen && (
                <div className="mb-2 border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <div className="grid gap-2">
                    {item.body.map((paragraph, index) => (
                      <p key={index} className="text-sm leading-6 text-neutral-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {stillLocked && (
        <p className="border-t border-neutral-200 px-5 py-2.5 text-xs text-neutral-500">
          {unlockHint}
        </p>
      )}
    </div>
  );
}
