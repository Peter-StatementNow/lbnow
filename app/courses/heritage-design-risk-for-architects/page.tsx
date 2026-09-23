import type { Metadata } from "next";
import Link from "next/link";
import { COURSES } from "@/lib/content/courses";
import { ARCHITECT_COURSE_CHAPTERS } from "@/lib/content/architect-course";

const course = COURSES.find(
  (entry) => entry.slug === "heritage-design-risk-for-architects"
)!;

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
      <p className="mt-4 text-base leading-7 text-neutral-600">
        {course.strapline}
      </p>

      <div className="mt-6 border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600">
        Built around the RIBA project stages, in plain architectural language -
        not a separate heritage syllabus bolted onto the side of a project.
      </div>

      <h2 className="mt-12 text-xl font-semibold text-neutral-900">
        Course chapters
      </h2>
      <p className="mt-2 text-sm text-neutral-500">
        Chapter 1 is built as a working prototype - the rest are curriculum
        only so far.
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

              {chapter.moduleHref ? (
                <span className="border border-neutral-900 bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                  Preview available
                </span>
              ) : (
                <span className="border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500">
                  Coming soon
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
