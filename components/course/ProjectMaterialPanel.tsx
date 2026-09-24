"use client";

import { useState } from "react";
import type { EvidenceItem } from "@/lib/content/architect-course-module-1";

/**
 * The persistent right-hand "what evidence exists" panel - sits above
 * the Heritage Record so the reading order matches the professional
 * process: material informs judgement, the record preserves it.
 * Locked (visible but not openable) until `unlocked`, so the first
 * prediction on each activity stays a genuine initial view rather than
 * an evidence-assisted one.
 */
export function ProjectMaterialPanel({
  items,
  unlocked,
  unlockHint,
}: {
  items: EvidenceItem[];
  unlocked: boolean;
  unlockHint: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = unlocked ? items.find((item) => item.id === openId) ?? null : null;

  return (
    <div className="border border-neutral-200 bg-white">
      <div className="px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
          Project Material
        </span>
      </div>

      <ul className="grid gap-0.5 border-t border-neutral-200 px-4 py-3">
        {items.map((item) => {
          const isOpen = openItem?.id === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => unlocked && setOpenId(isOpen ? null : item.id)}
                disabled={!unlocked}
                aria-expanded={isOpen}
                className={
                  unlocked
                    ? "flex w-full items-center justify-between gap-2 py-1.5 text-left text-sm text-neutral-800 hover:text-neutral-900"
                    : "flex w-full items-center justify-between gap-2 py-1.5 text-left text-sm text-neutral-400"
                }
              >
                <span>{item.label}</span>
                {unlocked && (
                  <span className="text-xs text-neutral-400">{isOpen ? "Hide" : "Open"}</span>
                )}
              </button>
              {isOpen && (
                <div className="mb-2 border border-neutral-200 bg-neutral-50 p-3">
                  <div className="grid gap-1.5">
                    {item.body.map((paragraph, index) => (
                      <p key={index} className="text-xs leading-5 text-neutral-700">
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

      {!unlocked && (
        <p className="border-t border-neutral-200 px-4 py-2.5 text-xs text-neutral-500">
          {unlockHint}
        </p>
      )}
    </div>
  );
}
