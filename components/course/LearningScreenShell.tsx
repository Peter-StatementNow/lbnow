"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { HeritageRecordView } from "@/lib/content/course-model";
import { HeritageRecordPanel } from "@/components/course/HeritageRecordPanel";
import { WORKSPACE_TABS_ID } from "@/components/course/ActivityElements";

type WorkspaceTab = "material" | "record";

const WORKSPACE_TABS: { key: WorkspaceTab; label: string }[] = [
  { key: "material", label: "Project Material" },
  { key: "record", label: "Heritage Record" },
];

/**
 * The reusable learning-screen template: course bar, a read-only
 * project moment, the active task, then two equal columns - working
 * content | project workspace - then save/continue. Everything below
 * the task (question, feedback, worked example, why-this-matters) is
 * activity-specific and lives in `children`.
 *
 * The workspace is tabbed: Project Material (the evidence) and the
 * Heritage Record (the learner's accumulated response) each get the
 * full column rather than competing for height. Material opens first -
 * material informs judgement - and the tab switches to the Heritage
 * Record whenever `recordRevision` changes, so saving visibly updates
 * the record (also how a page's "see the updated Heritage Record" link
 * brings it forward).
 *
 * Width matches the site header/footer (max-w-6xl): these pages are
 * mainly used on laptop/desktop screens, and the workspace holds
 * documents that need to be read properly. Below lg it collapses to one
 * column, workspace first.
 *
 * Shared by Chapter 1's pages and the chapters 2-7 framework.
 */
export function LearningScreenShell({
  courseName,
  stageLabel,
  percentComplete,
  minutesLeft,
  projectMoment,
  task,
  taskDetail,
  pageProgress,
  projectMaterial,
  heritageRecord,
  recordRevision = 0,
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
  /** Position within a multi-page chapter, e.g. page 2 of 6. */
  pageProgress?: PageProgressInfo;
  projectMaterial: ReactNode;
  heritageRecord: HeritageRecordView;
  /** Bump after saving to bring the Heritage Record tab to the front. */
  recordRevision?: number;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
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
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {stageLabel}
          </p>
          {pageProgress && <PageProgress {...pageProgress} />}
        </div>
      </div>

      {/* Project moment (read: the story so far) and task (act) - held
          to a reading width rather than running the full page. Project
          moment may be multiple paragraphs, separated by "\n". */}
      <div className="max-w-3xl">
        <div className="mt-6 border-l-2 border-neutral-300 bg-neutral-50 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            Project moment
          </p>
          <div className="mt-1.5 grid gap-2">
            {projectMoment.split("\n").map((paragraph) => (
              <p key={paragraph} className="text-base leading-7 text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Accent = "act here" (see --action in globals.css). */}
        <div className="mt-8 border-l-4 border-action pl-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-action">
            Your task
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900">
            {task}
          </h1>
          {taskDetail && (
            <p className="mt-1.5 text-base leading-7 text-neutral-700">{taskDetail}</p>
          )}
        </div>
      </div>

      {/* Two equal columns. Mobile order: the workspace, then the
          working content. */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
        <aside className="order-1 lg:order-2 lg:sticky lg:top-6 lg:self-start">
          <WorkspaceTabs
            projectMaterial={projectMaterial}
            heritageRecord={heritageRecord}
            recordRevision={recordRevision}
          />
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

type PageProgressInfo = {
  current: number;
  total: number;
  /** The current page's title, e.g. "Verify the listed asset". */
  title: string;
  /** How many pages have been saved - drawn as filled markers. */
  completed: number;
};

/** "Page 2 of 6 · Verify the listed asset", with a marker per page. */
function PageProgress({ current, total, title, completed }: PageProgressInfo) {
  return (
    <div className="flex items-center gap-3">
      <ol className="flex gap-1" aria-hidden>
        {Array.from({ length: total }, (_, index) => {
          const pageNumber = index + 1;
          const done = index < completed;
          const isCurrent = pageNumber === current;
          return (
            <li
              key={pageNumber}
              className={
                done
                  ? "h-2 w-5 bg-neutral-900"
                  : isCurrent
                    ? "h-2 w-5 border border-neutral-900 bg-white"
                    : "h-2 w-5 bg-neutral-200"
              }
            />
          );
        })}
      </ol>
      <p className="text-xs text-neutral-600">
        <span className="font-medium text-neutral-900">
          Page {current} of {total}
        </span>{" "}
        &middot; {title}
      </p>
    </div>
  );
}

function WorkspaceTabs({
  projectMaterial,
  heritageRecord,
  recordRevision,
}: {
  projectMaterial: ReactNode;
  heritageRecord: HeritageRecordView;
  recordRevision: number;
}) {
  const [active, setActive] = useState<WorkspaceTab>("material");
  const initialRevision = useRef(recordRevision);

  useEffect(() => {
    // Only a save made while this screen is open switches tabs - not
    // the value the screen mounted with.
    if (recordRevision !== initialRevision.current) {
      setActive("record");
    }
  }, [recordRevision]);

  return (
    <div className="border border-neutral-200 bg-white">
      <div
        role="tablist"
        id={WORKSPACE_TABS_ID}
        aria-label="Project workspace"
        className="flex scroll-mt-6 border-b border-neutral-200"
      >
        {WORKSPACE_TABS.map((tab) => {
          const selected = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`workspace-tab-${tab.key}`}
              aria-selected={selected}
              aria-controls={`workspace-panel-${tab.key}`}
              onClick={() => setActive(tab.key)}
              className={
                selected
                  ? "-mb-px flex-1 border-b-2 border-neutral-900 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-900"
                  : "-mb-px flex-1 border-b-2 border-transparent px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-400 hover:text-neutral-700"
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Both panels stay mounted (hidden, not unmounted) so opened
          documents stay open when switching tabs. On large screens the
          column scrolls on its own so long documents are never cut off
          by the sticky positioning. */}
      <div className="lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
        <div
          role="tabpanel"
          id="workspace-panel-material"
          aria-labelledby="workspace-tab-material"
          hidden={active !== "material"}
        >
          {projectMaterial}
        </div>
        <div
          role="tabpanel"
          id="workspace-panel-record"
          aria-labelledby="workspace-tab-record"
          hidden={active !== "record"}
        >
          <HeritageRecordPanel record={heritageRecord} />
        </div>
      </div>
    </div>
  );
}
