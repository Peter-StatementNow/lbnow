"use client";

import { useState } from "react";
import type { EvidenceItem, MaterialGroup } from "@/lib/content/course-model";

/** A list of documents, each opened and closed in place. */
function MaterialList({
  items,
  isUnlocked,
  initialOpenId,
}: {
  items: EvidenceItem[];
  isUnlocked: (item: EvidenceItem) => boolean;
  initialOpenId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(initialOpenId ?? null);

  return (
    <ul className="grid gap-0.5">
      {items.map((item) => {
        const itemUnlocked = isUnlocked(item);
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
  );
}

/** One earlier chapter's documents, collapsed until opened - like the Heritage Record's earlier chapters. */
function EarlierGroup({ group }: { group: MaterialGroup }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-neutral-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-3 text-left"
      >
        <span className="text-sm font-medium text-neutral-800">{group.label}</span>
        <span className="shrink-0 text-xs text-neutral-400">{open ? "Hide" : "Show"}</span>
      </button>
      {open && (
        <div className="pb-3 pl-3">
          <MaterialList items={group.items} isUnlocked={() => true} />
        </div>
      )}
    </div>
  );
}

/**
 * The "what evidence exists" panel - the first tab of the right-hand
 * workspace (see LearningScreenShell), ahead of the Heritage Record:
 * material informs judgement, the record preserves it.
 *
 * Cumulative (Peter, 1 Oct 2026): this page's documents first, then
 * every earlier document grouped by chapter, so source material such as
 * the client's enquiry is never lost. The Heritage Record interprets;
 * Project Material keeps the evidence.
 *
 * This page's items are locked (visible but not openable) until
 * `unlocked`, except any in `alwaysAvailableIds`. Earlier material is
 * always open to reference.
 */
export function ProjectMaterialPanel({
  items,
  earlier = [],
  unlocked,
  unlockHint,
  alwaysAvailableIds = [],
  initialOpenId,
}: {
  items: EvidenceItem[];
  earlier?: MaterialGroup[];
  unlocked: boolean;
  unlockHint: string;
  alwaysAvailableIds?: string[];
  initialOpenId?: string;
}) {
  const stillLocked = !unlocked && items.some((item) => !alwaysAvailableIds.includes(item.id));

  return (
    <div className="grid gap-5 px-5 py-4">
      <div>
        {earlier.length > 0 && (
          <p className="mb-1 text-sm font-semibold text-neutral-900">For this page</p>
        )}
        <MaterialList
          items={items}
          isUnlocked={(item) => unlocked || alwaysAvailableIds.includes(item.id)}
          initialOpenId={initialOpenId}
        />
        {stillLocked && (
          <p className="mt-2 border-t border-neutral-200 pt-2.5 text-xs text-neutral-500">
            {unlockHint}
          </p>
        )}
      </div>

      {earlier.length > 0 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            Earlier project material
          </p>
          <div className="mt-2">
            {earlier.map((group) => (
              <EarlierGroup key={group.label} group={group} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
