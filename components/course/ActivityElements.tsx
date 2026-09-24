"use client";

import { useState } from "react";
import Link from "next/link";

export const primaryButton =
  "inline-flex items-center justify-center bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300";
export const secondaryButton =
  "inline-flex items-center justify-center border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-500";
export const cardClassName = "border border-neutral-200 bg-white p-6";

/** Small shared pieces used by every activity screen (Module 1 and the chapter framework). */

export function FeedbackNote({ text }: { text: string }) {
  return (
    <div className="border border-neutral-300 bg-neutral-50 px-5 py-4">
      <p className="text-sm leading-6 text-neutral-700">{text}</p>
    </div>
  );
}

export function WrongPredictionNudge() {
  return (
    <p className="text-sm text-neutral-500">
      Consider the position again in light of what proportionate professional practice
      requires - review the other options.
    </p>
  );
}

export function WhyThisMatters({ text }: { text: string }) {
  return (
    <div className="border-t border-neutral-200 pt-4">
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
        Why this matters
      </p>
      <p className="mt-1 text-sm leading-6 text-neutral-600">{text}</p>
    </div>
  );
}

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

export function CompareToggle({
  label,
  open: openProp,
  onToggle,
  children,
}: {
  label: string;
  open?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}) {
  const [localOpen, setLocalOpen] = useState(false);
  const open = openProp ?? localOpen;
  const toggle = onToggle ?? (() => setLocalOpen((v) => !v));

  return (
    <div>
      <button
        type="button"
        onClick={toggle}
        className="text-sm font-medium text-neutral-700 underline hover:text-neutral-900"
      >
        {open ? "Hide worked example" : label}
      </button>
      {open && <div className="mt-3 border border-neutral-200 bg-neutral-50 p-4">{children}</div>}
    </div>
  );
}
