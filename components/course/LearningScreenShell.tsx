import type { ReactNode } from "react";
import type { EvidenceItem, ProjectFileState } from "@/lib/content/architect-course-module-1";
import { EvidenceTray } from "@/components/course/EvidenceTray";
import { ProjectFilePanel } from "@/components/course/ProjectFilePanel";

/**
 * The reusable learning-screen template (wireframe v2): the chrome
 * stays fixed across every activity in every module - only the
 * working surface (children) and footer state actually change. Reuse
 * this exact component for Module 2 onwards rather than rebuilding
 * the shell per module.
 */
export function LearningScreenShell({
  courseTitle,
  percentComplete,
  minutesLeft,
  stageLabel,
  activityLabel,
  activityIndexLabel,
  whyNow,
  projectFile,
  evidence,
  children,
  footer,
}: {
  courseTitle: string;
  percentComplete: number;
  minutesLeft: number;
  stageLabel: string;
  activityLabel: string;
  activityIndexLabel: string;
  whyNow: string;
  projectFile: ProjectFileState;
  evidence?: EvidenceItem[];
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

      {/* Stage / activity header */}
      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          {stageLabel}
        </p>
        <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {activityLabel}
          </h1>
          <span className="text-xs font-medium text-neutral-500">{activityIndexLabel}</span>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">{whyNow}</p>
      </div>

      {/* Main two-column area. Mobile order (wireframe): project-file
          summary, then evidence, then working surface - achieved with
          `order` since the project file lives in the second grid
          child but must render visually first below lg. */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <aside className="order-1 lg:order-2 lg:sticky lg:top-6 lg:self-start">
          <ProjectFilePanel projectFile={projectFile} />
        </aside>

        <div className="order-2 grid gap-6 lg:order-1">
          {evidence && evidence.length > 0 && <EvidenceTray items={evidence} />}
          <div>{children}</div>
        </div>
      </div>

      {/* Save/continue footer */}
      <div className="mt-8 border-t border-neutral-200 pt-6">{footer}</div>
    </div>
  );
}
