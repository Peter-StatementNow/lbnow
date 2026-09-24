import type { Metadata } from "next";
import Link from "next/link";
import { COURSES } from "@/lib/content/courses";
import { ARCHITECT_COURSE_CHAPTERS } from "@/lib/content/architect-course";
import { TOTAL_COURSE_MINUTES } from "@/lib/content/architect-course-module-1";
import { CourseRouteMap } from "@/components/course/CourseRouteMap";
import { ScopeBoundaryCard } from "@/components/course/ScopeBoundaryCard";

const course = COURSES.find(
  (entry) => entry.slug === "heritage-design-risk-for-architects"
)!;

const firstChapter = ARCHITECT_COURSE_CHAPTERS[0];

export const metadata: Metadata = {
  title: `${course.title} | Training by Recept Heritage`,
  description: course.strapline,
};

export default function ArchitectCoursePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        {course.audienceLabel}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
        {course.title}
      </h1>

      <p className="mt-6 text-xl font-medium leading-8 text-neutral-900">
        Heritage changes the decisions - not the project lifecycle.
      </p>
      <p className="mt-3 text-base leading-7 text-neutral-600">
        This practical course follows a project from first brief to handover, showing what
        needs to be added when historic buildings, conservation areas or other heritage
        considerations are involved.
      </p>

      <p className="mt-4 text-sm text-neutral-500">
        England &middot; about {TOTAL_COURSE_MINUTES} minutes &middot; 7 project stages
        &middot; a working Heritage Record you build as you go
      </p>

      <div className="mt-10">
        <CourseRouteMap chapters={ARCHITECT_COURSE_CHAPTERS} />
      </div>

      <p className="mt-6 text-sm leading-6 text-neutral-600">
        Follow a familiar project route - from first instruction to handover - and see what
        heritage adds at each decision point.
      </p>
      <p className="mt-2 text-xs text-neutral-500">
        The structure reflects the stages most architects already use to organise projects;
        the course does not teach a separate process.
      </p>

      <h2 className="mt-12 text-xl font-semibold text-neutral-900">
        What you will be able to do
      </h2>
      <ul className="mt-4 grid gap-2">
        <li className="text-sm leading-6 text-neutral-600">
          - Add the right heritage considerations to a normal project brief.
        </li>
        <li className="text-sm leading-6 text-neutral-600">
          - Identify the evidence and decision points needed before a design direction hardens.
        </li>
        <li className="text-sm leading-6 text-neutral-600">
          - Manage heritage implications through consent, delivery and handover.
        </li>
      </ul>

      <div className="mt-8">
        <ScopeBoundaryCard
          content={{
            heading:
              "The former coach house and boundary wall are flagged throughout this course, not resolved.",
            covers: [
              "Recognising when associated structures and boundary features need heritage/status investigation before future work is assumed.",
            ],
            doesNotCover: [
              "Determining curtilage status.",
              "Giving legal advice on the status or consent implications of associated structures.",
            ],
            nextAction:
              "Verify and establish their relevant status and significance proportionately before developing proposals that affect them.",
          }}
        />
      </div>

      {firstChapter.moduleHref && (
        <div className="mt-8">
          <Link
            href={firstChapter.moduleHref}
            className="inline-flex items-center justify-center bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Start Chapter 1 - {firstChapter.title}
            {firstChapter.estimatedMinutes ? ` · ${firstChapter.estimatedMinutes} minutes` : ""}
          </Link>
        </div>
      )}

      <h2 className="mt-16 text-xl font-semibold text-neutral-900">
        Course chapters
      </h2>
      <p className="mt-2 text-sm text-neutral-500">
        Chapter 1 is a fully worked prototype. Chapters 2-7 are a lighter
        framework build, walking the same case through the rest of the
        project - content and wording are still placeholder.
      </p>

      <ol className="mt-6 grid gap-4">
        {ARCHITECT_COURSE_CHAPTERS.map((chapter) => (
          <li
            key={chapter.chapterNumber}
            className="border border-neutral-200 bg-white px-6 py-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Chapter {chapter.chapterNumber}
                </p>
                <p className="mt-1 text-base font-semibold text-neutral-900">
                  {chapter.title}
                </p>
              </div>

              {!chapter.moduleHref ? (
                <span className="border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500">
                  Coming soon
                </span>
              ) : chapter.isPrototype ? (
                <span className="border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                  Prototype
                </span>
              ) : (
                <span className="border border-neutral-900 bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                  Preview available
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {chapter.question}
            </p>

            {chapter.moduleHref && (
              <div className="mt-4">
                <Link
                  href={chapter.moduleHref}
                  className="text-sm font-medium text-neutral-900 underline hover:text-neutral-600"
                >
                  Preview this chapter
                  {chapter.estimatedMinutes
                    ? ` (about ${chapter.estimatedMinutes} minutes)`
                    : ""}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={`/refer?source=${course.slug}`}
          className="text-sm font-medium text-neutral-700 underline hover:text-neutral-900"
        >
          Have a live project already? Refer it to Recept Heritage
        </Link>
        <Link
          href="/courses"
          className="text-sm font-medium text-neutral-700 underline hover:text-neutral-900"
        >
          Back to all courses
        </Link>
      </div>
    </div>
  );
}
