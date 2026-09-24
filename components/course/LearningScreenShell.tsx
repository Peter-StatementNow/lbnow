import type { ReactNode } from "react";
import type { HeritageRecordState } from "@/lib/content/architect-course-module-1";
import { HeritageRecordPanel } from "@/components/course/HeritageRecordPanel";

/**
 * The reusable learning-screen template (wireframe v3): course bar,
 * a read-only project moment, the active task, then a two-column area
 * (working content | persistent project workspace), then save/
 * continue. The workspace is Project Material (the available evidence)
 * above the Heritage Record (the learner's accumulated response) -
 * reading order matches the professional process: material informs
 * judgement, the record preserves it. Everything below the task -
 * prediction, the working surface, compare-with-worked-example, why-
 * this-matters - is activity-specific sequencing and lives in
 * `children`, not in this shell.
 *
 * Built through Module 1 only (explicit instruction, 23 Sep 2026) -
 * do not extend into later modules until the live rhythm has been
 * tested.
 */
export function LearningScreenShell({
  courseName,
  stageLabel,
  percentComplete,
  minutesLeft,
  projectMoment,
  task,
  projectMaterial,
  heritageRecord,
  children,
  footer,
}: {
  courseName: string;
  stageLabel: string;
  percentComplete: number;
  minutesLeft: number;
  projectMoment: string;
  task: string;
  projectMaterial: ReactNode;
  heritageRecord: HeritageRecordState;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Course bar - percent/time is a course-level measure, so it
          pairs with the course name; the chapter label (fixed for the
          whole chapter) sits below the progress bar. */}
      <div>
        <div className="flex items-baseline justify-between gap-3 text-xs text-neutral-500">
          <span className="font-medium text-neutral-700">{courseName}</span>
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
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
          {stageLabel}
        </p>
      </div>

      {/* Project moment - read only, updates between activities. May be
          multiple paragraphs, separated by "\n" in the content. */}
      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Project moment
        </p>
        <div className="mt-1 grid gap-2">
          {projectMoment.split("\n").map((paragraph) => (
            <p key={paragraph} className="text-sm leading-6 text-neutral-600">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Your task - active */}
      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Your task
        </p>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-neutral-900">
          {task}
        </h1>
      </div>

      {/* Main two-column area. Mobile order (wireframe): the project
          workspace (material, then record), then the working content. */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <aside className="order-1 grid gap-4 lg:order-2 lg:sticky lg:top-6 lg:self-start">
          {projectMaterial}
          <HeritageRecordPanel record={heritageRecord} />
        </aside>

        <div className="order-2 grid gap-6 lg:order-1">{children}</div>
      </div>

      {/* Save/continue footer */}
      <div className="mt-8 border-t border-neutral-200 pt-6">{footer}</div>
    </div>
  );
}
