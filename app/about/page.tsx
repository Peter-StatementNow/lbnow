import type { Metadata } from "next";
import { ABOUT } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About | Training by Recept Heritage",
  description:
    "Training by Recept Heritage is written and delivered by Recept Heritage, heritage consultants.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        {ABOUT.eyebrow}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
        {ABOUT.heading}
      </h1>
      <p className="mt-6 text-base leading-7 text-neutral-600">{ABOUT.intro}</p>

      <div className="mt-6 grid gap-4">
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-neutral-600">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 border border-neutral-200 bg-neutral-50 px-6 py-5">
        <p className="text-sm font-semibold text-neutral-900">
          {ABOUT.whatThisIsNot.heading}
        </p>
        <p className="mt-1 text-sm leading-6 text-neutral-600">
          {ABOUT.whatThisIsNot.body}
        </p>
      </div>
    </div>
  );
}
