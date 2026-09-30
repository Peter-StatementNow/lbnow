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
 * Shared by Module 1's pages and the chapters 2-7 framework.
 */
export function LearningScreenShell({
  courseName,
  stageLabel,
  percentComplete,
  minutesLeft,
  projectMoment,
  task,
  taskDetail,
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
  /** Optional second line of the task, shown under the heading. */
  taskDetail?: string;
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
        {taskDetail && (
          <p className="mt-1 text-base leading-7 text-neutral-700">{taskDetail}</p>
        )}
      </div>

      {/* Main two-column area. Mobile order (wireframe): the project
          workspace (material, then record), then the working content. */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <aside className="order-1 grid gap-4 lg:order-2 lg:sticky lg:top-6 lg:self-start">
          {projectMaterial}
          <HeritageRecordPanel record={heritageRecord} />
        </aside>

        {/* Flex column, top-aligned: each block sizes to its own content
            and stacks directly below the previous one. (A grid here would
            stretch to the workspace column's height and share the spare
            space out between rows, leaving large gaps.) */}
        <div className="order-2 flex min-w-0 flex-col gap-6 lg:order-1 lg:self-start">
          {children}
        </div>
      </div>

      {/* Save/continue footer */}
      <div className="mt-8 border-t border-neutral-200 pt-6">{footer}</div>
    </div>
  );
}
