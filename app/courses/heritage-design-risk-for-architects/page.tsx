import type { Metadata } from "next";
import Link from "next/link";
import { COURSES } from "@/lib/content/courses";
import { ARCHITECT_COURSE_CHAPTERS } from "@/lib/content/architect-course";
import { CHAPTER_MINUTES, TOTAL_COURSE_MINUTES } from "@/lib/content/architect-course-chapters";
import { CourseRouteMap } from "@/components/course/CourseRouteMap";
import { StepBadge, type Step } from "@/components/course/ActivityElements";

const course = COURSES.find(
  (entry) => entry.slug === "heritage-design-risk-for-architects"
)!;

const firstChapter = ARCHITECT_COURSE_CHAPTERS[0];

export const metadata: Metadata = {
  title: `${course.title} | Training by Recept Heritage`,
  description: course.strapline,
};

/**
 * The five steps every learning page follows - kept in step with the
 * numbered sections on the pages themselves (LearningScreenShell,
 * PredictionBlock, ChapterExperience).
 */
const HOW_IT_WORKS: { step: Step; title: string; body: string }[] = [
  {
    step: 1,
    title: "Read the project moment",
    body: "Where the Old Vicarage project has got to.",
  },
  {
    step: 2,
    title: "Read your task and check the Project Material",
    body: "The documents beside the question - the client’s email, the listing entry, site notes and other evidence.",
  },
  {
    step: 3,
    title: "Answer the question",
    body: "Choose the answer you think is strongest. Any answer is fine - each one gets its own feedback explaining the reasoning, followed by why it matters.",
  },
  {
    step: 4,
    title: "Read the further analysis",
    body: "A worked example and, where useful, how the approach would change for a different heritage trigger such as a conservation area or local listing.",
  },
  {
    step: 5,
    title: "Add to your Heritage Record",
    body: "A working record of what is known, what needs establishing and which decisions must not harden too early. Each page adds its worked position, whichever answer you chose, and it builds up chapter by chapter - it is what you take away from the course.",
  },
];

function StartButton() {
  if (!firstChapter.chapterHref) return null;
  return (
    <Link
      href={firstChapter.chapterHref}
      className="inline-flex items-center justify-center bg-action px-6 py-3 text-sm font-medium text-white hover:bg-action-hover"
    >
      Start Chapter 1 - {firstChapter.title} &middot; about{" "}
      {CHAPTER_MINUTES[firstChapter.chapterNumber]} minutes
    </Link>
  );
}

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

      <div className="mt-8">
        <StartButton />
      </div>

      {/* How the course works - the same four numbered steps learners
          see on every page. */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">How the course works</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-600">
        You follow one case - alterations to The Old Vicarage, a Grade II listed house - from
        the client&rsquo;s first email to handover. Every page follows the same five steps:
      </p>
      <ol className="mt-5 grid gap-4">
        {HOW_IT_WORKS.map((item) => (
          <li key={item.step} className="flex gap-3">
            <span className="mt-0.5">
              <StepBadge step={item.step} />
            </span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">{item.title}</p>
              <p className="mt-0.5 text-sm leading-6 text-neutral-600">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-xs leading-5 text-neutral-500">
        Completed chapters are remembered in this browser, so you can stop between chapters.
        This course is designed for desktop and laptop screens. On a tablet, use landscape
        orientation. It works on all devices, but it is not designed for use on a phone.
      </p>

      {/* The one chapter list. */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">The seven chapters</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-600">
        A familiar project route - from first instruction to handover - showing what heritage
        adds at each decision point. The structure reflects the stages most architects already
        use; the course does not teach a separate process.
      </p>
      <div className="mt-6">
        <CourseRouteMap chapters={ARCHITECT_COURSE_CHAPTERS} minutes={CHAPTER_MINUTES} />
      </div>

      {/* Course scope - a general statement, drawn from the "Content
          boundary" section of the Chapters 2-7 source document. */}
      <section className="mt-14 border border-neutral-300 px-6 py-5">
        <h2 className="text-base font-semibold text-neutral-900">
          What this course covers and does not cover
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-700">
          <span className="font-semibold text-neutral-900">Covers: </span>a design and
          project-decision method, showing where heritage changes an otherwise normal project
          decision, what needs to be understood before that decision hardens, and what to keep
          in the Heritage Record.
        </p>
        <p className="mt-2 text-sm leading-6 text-neutral-700">
          <span className="font-semibold text-neutral-900">Does not cover: </span>
          determining legal status, curtilage or consent requirements, or the right professional
          appointment, in an individual case.
        </p>
        <p className="mt-3 text-sm leading-6 text-neutral-600">
          Where a project needs technical, conservation, heritage or legal advice, the Heritage
          Record should make that need visible early enough to obtain appropriate advice.
        </p>
      </section>

      <div className="mt-10">
        <StartButton />
      </div>

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
