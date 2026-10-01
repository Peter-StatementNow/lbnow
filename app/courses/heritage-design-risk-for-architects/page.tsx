import type { Metadata } from "next";
import Link from "next/link";
import { COURSES } from "@/lib/content/courses";
import { ARCHITECT_COURSE_CHAPTERS } from "@/lib/content/architect-course";
import { CHAPTER_MINUTES, TOTAL_COURSE_MINUTES } from "@/lib/content/architect-course-chapters";
import { CourseRouteMap } from "@/components/course/CourseRouteMap";
import { ScopeBoundaryCard } from "@/components/course/ScopeBoundaryCard";
import { StepBadge } from "@/components/course/ActivityElements";

const course = COURSES.find(
  (entry) => entry.slug === "heritage-design-risk-for-architects"
)!;

const firstChapter = ARCHITECT_COURSE_CHAPTERS[0];

export const metadata: Metadata = {
  title: `${course.title} | Training by Recept Heritage`,
  description: course.strapline,
};

/**
 * The four steps every learning page follows - kept in step with the
 * numbered sections on the pages themselves (LearningScreenShell,
 * PredictionBlock, ChapterExperience's save button).
 */
const HOW_IT_WORKS: { step: 1 | 2 | 3 | 4; title: string; body: string }[] = [
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
    body: "Choose the answer you think is strongest. Any answer is fine - each one gets its own feedback explaining the reasoning, followed by a worked example.",
  },
  {
    step: 4,
    title: "Save to your Heritage Record",
    body: "A working record of what is known, what needs establishing and which decisions must not harden too early. It builds up chapter by chapter - it is what you take away from the course.",
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
        the client&rsquo;s first email to handover. Every page follows the same four steps:
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

      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
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
