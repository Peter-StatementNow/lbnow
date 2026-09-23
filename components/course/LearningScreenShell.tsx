import type { ReactNode } from "react";
import type { HeritageRecordState } from "@/lib/content/architect-course-module-1";
import { HeritageRecordPanel } from "@/components/course/HeritageRecordPanel";

/**
 * The reusable learning-screen template (wireframe v3): course bar,
 * a read-only project moment, the active heritage question, then a
 * two-column area (working content | persistent Heritage Record),
 * then save/continue. Everything below the heritage question - why
 * now, prediction, evidence, the working surface, compare-with-
 * worked-example, why-this-matters - is activity-specific sequencing
 * and lives in `children`, not in this shell, since when evidence
 * unlocks (after the prediction) is content behaviour, not chrome.
 *
 * Built through Module 1 only (explicit instruction, 23 Sep 2026) -
 * do not extend into later modules until the live rhythm has been
 * tested.
 */
export function LearningScreenShell({
  courseTitle,
  percentComplete,
  minutesLeft,
  projectMoment,
  heritageQuestion,
  heritageRecord,
  children,
  footer,
}: {
  courseTitle: string;
  percentComplete: number;
  minutesLeft: number;
  projectMoment: string;
  heritageQuestion: string;
  heritageRecord: HeritageRecordState;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Course bar */}
      <div>
        <div className="flex items-baseline justify-between gap-3 text-xs text-neutral-500">
          <span className="font-medium text-neutral-700">{courseTitle}</span>
          <span>
            {percentComplete}% complete &middot; about {minutesLeft} min left
          </span>
        </div>
        <div className="mt-1.5 h-1.5 w-full bg-neutral-200">
          <div
            className="h-1.5 bg-neutral-900"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
      </div>

      {/* Project moment - read only */}
      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Project moment
        </p>
        <p className="mt-1 text-sm leading-6 text-neutral-600">{projectMoment}</p>
      </div>

      {/* Heritage question - active */}
      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Heritage question
        </p>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-neutral-900">
          {heritageQuestion}
        </h1>
      </div>

      {/* Main two-column area. Mobile order (wireframe): Heritage
          Record summary, then the working content. */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <aside className="order-1 lg:order-2 lg:sticky lg:top-6 lg:self-start">
          <HeritageRecordPanel record={heritageRecord} />
        </aside>

        <div className="order-2 grid gap-6 lg:order-1">{children}</div>
      </div>

      {/* Save/continue footer */}
      <div className="mt-8 border-t border-neutral-200 pt-6">{footer}</div>
    </div>
  );
}
