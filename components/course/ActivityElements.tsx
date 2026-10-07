"use client";

import Link from "next/link";

export const primaryButton =
  "inline-flex items-center justify-center bg-action px-6 py-3 text-sm font-medium text-white hover:bg-action-hover disabled:cursor-not-allowed disabled:bg-neutral-300";
export const secondaryButton =
  "inline-flex items-center justify-center border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-500";

/** Small shared pieces used by every chapter page. */

/**
 * The page's five-step rhythm, numbered on every learning page and
 * explained on the course overview ("How the course works"):
 * 1 project moment, 2 task + project material, 3 your initial view
 * (with feedback), 4 further analysis, 5 add the worked position to the Heritage Record.
 * Reading steps (1, 4) stay neutral; action steps (2, 3, 5) take the
 * accent.
 */
export type Step = 1 | 2 | 3 | 4 | 5;

export function StepBadge({ step }: { step: Step }) {
  return (
    <span
      aria-hidden
      className={
        step === 1 || step === 4
          ? "inline-flex h-5 w-5 shrink-0 items-center justify-center border border-neutral-400 text-[11px] font-semibold text-neutral-600"
          : "inline-flex h-5 w-5 shrink-0 items-center justify-center border border-action text-[11px] font-semibold text-action"
      }
    >
      {step}
    </span>
  );
}

function Paragraphs({ text }: { text: string }) {
  return text.split("\n").map((paragraph) => (
    <p key={paragraph} className="text-sm leading-6 text-neutral-800">
      {paragraph}
    </p>
  ));
}

/**
 * The response to the learner's answer - part of step 3: the bespoke
 * feedback for the option chosen, then why it matters. Pale accent
 * tint and border, matching the selected answer above it, so answer
 * and response read as one unit. Paragraphs are separated by "\n".
 */
export function AnswerResponse({
  feedback,
  whyThisMatters,
}: {
  feedback: string;
  whyThisMatters: string;
}) {
  const heading = "text-xs font-semibold uppercase tracking-wide text-action";
  return (
    <div className="border-2 border-action bg-action-tint px-5 py-4">
      <h3 className={heading}>Feedback</h3>
      <div className="mt-2 grid gap-2">
        <Paragraphs text={feedback} />
      </div>
      <div className="mt-4 border-t border-action/25 pt-4">
        <h3 className={heading}>Why this matters</h3>
        <div className="mt-2 grid gap-2">
          <Paragraphs text={whyThisMatters} />
        </div>
      </div>
    </div>
  );
}

/**
 * Shown once the page is saved.
 *
 * Large screens: the Heritage Record tab beside the question has already
 * switched on save, so this is a plain statement pointing to it - not a
 * link (Peter, 2 Oct 2026: an underlined link that seemed to do nothing
 * was confusing).
 *
 * Phones/narrow tablets: the workspace sits far above the question, so
 * this is a real button that brings the Heritage Record tab forward and
 * scrolls up to it.
 */
export function SeeRecordLink({ onClick }: { onClick: () => void }) {
  return (
    <>
      <p className="hidden text-sm font-medium text-action lg:block">
        &#10003; Added to your Heritage Record - see the tab on the right.
      </p>
      <button
        type="button"
        onClick={() => {
          onClick();
          // Wait for the tab switch to render first - otherwise the panel
          // swapping height mid-scroll makes the browser cancel the scroll.
          setTimeout(() =>
            document
              .getElementById(WORKSPACE_TABS_ID)
              ?.scrollIntoView({ behavior: scrollBehavior(), block: "start" })
          );
        }}
        className="justify-self-start border border-action bg-white px-4 py-2.5 text-sm font-medium text-action hover:bg-action-tint lg:hidden"
      >
        View the updated Heritage Record &uarr;
      </button>
    </>
  );
}

/** "smooth", unless the viewer has asked their system to reduce motion. */
export function scrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

/** DOM id of the workspace tab bar, for scrolling it into view. */
export const WORKSPACE_TABS_ID = "workspace-tabs";

export function BackButton({ onClick, href }: { onClick?: () => void; href?: string }) {
  if (href) {
    return (
      <Link href={href} className={secondaryButton}>
        &larr; Back
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={secondaryButton}>
      &larr; Back
    </button>
  );
}
