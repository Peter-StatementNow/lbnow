import type { Metadata } from "next";
import { ReferralForm } from "@/components/ReferralForm";
import { COURSES } from "@/lib/content/courses";
import { REFERRAL_PAGE } from "@/lib/content/referral";

export const metadata: Metadata = {
  title: "Refer a project | Training by Recept Heritage",
  description:
    "Refer a project or transaction directly to Recept Heritage.",
};

export default async function ReferPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  const { source } = await searchParams;
  const sourceCourse = COURSES.find((course) => course.slug === source);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        {REFERRAL_PAGE.eyebrow}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
        {REFERRAL_PAGE.heading}
      </h1>
      <p className="mt-4 text-base leading-7 text-neutral-600">
        {REFERRAL_PAGE.intro}
      </p>

      {sourceCourse && (
        <p className="mt-4 border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
          Referring from: {sourceCourse.title}
        </p>
      )}

      <p className="mt-2 text-xs leading-5 text-neutral-500">
        {REFERRAL_PAGE.disclaimer}
      </p>

      <div className="mt-8">
        <ReferralForm sourceCourseSlug={sourceCourse?.slug ?? null} />
      </div>
    </div>
  );
}
