import type { Metadata } from "next";
import Link from "next/link";
import { COURSES } from "@/lib/content/courses";

export const metadata: Metadata = {
  title: "Courses | Training by Recept Heritage",
  description:
    "Upcoming heritage training courses for architects, solicitors and conveyancers, from Recept Heritage.",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        Courses
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
        Two tracks, in preparation
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
        Both courses share the same standard of evidence-led, scenario-based
        content, built for different professions and different risk. Neither
        is open for registration yet - if you want to know when a course
        opens, get in touch via the referral form and mention which one.
      </p>

      <div className="mt-10 grid gap-8">
        {COURSES.map((course) => (
          <article
            key={course.slug}
            className="border border-neutral-200 bg-white px-6 py-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                {course.audienceLabel}
              </p>
              <span className="border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-600">
                In preparation
              </span>
            </div>

            <h2 className="mt-3 text-xl font-semibold text-neutral-900">
              {course.detailHref ? (
                <Link href={course.detailHref} className="hover:underline">
                  {course.title}
                </Link>
              ) : (
                course.title
              )}
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {course.strapline}
            </p>

            <p className="mt-5 text-sm font-semibold text-neutral-900">
              Workflow
            </p>
            <p className="mt-1 text-sm leading-6 text-neutral-600">
              {course.workflow}
            </p>

            <p className="mt-5 text-sm font-semibold text-neutral-900">
              What you will be able to do
            </p>
            <ul className="mt-2 grid gap-2">
              {course.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="text-sm leading-6 text-neutral-600"
                >
                  - {outcome}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-4">
              {course.detailHref && (
                <Link
                  href={course.detailHref}
                  className="text-sm font-medium text-neutral-900 underline hover:text-neutral-600"
                >
                  See chapters and preview Chapter 1
                </Link>
              )}
              <Link
                href={`/refer?source=${course.slug}`}
                className="text-sm font-medium text-neutral-700 underline hover:text-neutral-900"
              >
                Have a live project already? Refer it to Recept Heritage
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
