import Link from "next/link";
import {
  AUDIENCES,
  COURSES_TEASER,
  HERO,
  PATHWAY,
  RECEPT_RELATIONSHIP,
} from "@/lib/content/home";
import { COURSES } from "@/lib/content/courses";

export default function Home() {
  return (
    <div className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          {HERO.eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          {HERO.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          {HERO.subheading}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            See current courses
          </Link>
          <Link
            href="/refer"
            className="inline-flex items-center justify-center border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-500"
          >
            Refer a project
          </Link>
        </div>
      </section>

      {/* Audiences */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Who this is for
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {AUDIENCES.map((audience) => (
              <div
                key={audience.name}
                className="border border-neutral-200 bg-white px-6 py-6"
              >
                <p className="text-lg font-semibold text-neutral-900">
                  {audience.name}
                </p>
                <p className="mt-1 text-sm text-neutral-600">{audience.forWhom}</p>
                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {audience.workflow}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            How it works
          </h2>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2">
            {PATHWAY.map((item) => (
              <li key={item.step}>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center border border-neutral-300 text-sm font-medium text-neutral-700"
                >
                  {item.step}
                </span>
                <h3 className="mt-4 text-base font-semibold text-neutral-900">
                  {item.heading}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Courses teaser */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {COURSES_TEASER.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
            {COURSES_TEASER.body}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {COURSES.map((course) => (
              <div
                key={course.slug}
                className="border border-neutral-200 bg-white px-6 py-6"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  {course.audienceLabel}
                </p>
                <p className="mt-2 text-base font-semibold text-neutral-900">
                  {course.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {course.strapline}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/courses"
              className="text-sm font-medium text-neutral-700 underline hover:text-neutral-900"
            >
              See course details
            </Link>
          </div>
        </div>
      </section>

      {/* Recept relationship */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {RECEPT_RELATIONSHIP.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            {RECEPT_RELATIONSHIP.body}
          </p>
          <div className="mt-6">
            <Link
              href={RECEPT_RELATIONSHIP.linkHref}
              className="text-sm font-medium text-neutral-700 underline hover:text-neutral-900"
            >
              {RECEPT_RELATIONSHIP.linkLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
