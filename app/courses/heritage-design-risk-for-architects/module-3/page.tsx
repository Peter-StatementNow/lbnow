import type { Metadata } from "next";
import { ChapterActivity } from "@/components/course/ChapterActivity";
import { CHAPTER_3 } from "@/lib/content/architect-course-chapters";

export const metadata: Metadata = {
  title: "Module 3: Developing the design | Training by Recept Heritage",
  description:
    "A prototype walkthrough of Chapter 3 of Heritage Design Risk for Architects - placeholder content, not final guidance.",
};

export default function Module3Page() {
  return (
    <ChapterActivity
      content={CHAPTER_3}
      previousHref="/courses/heritage-design-risk-for-architects/module-2"
      nextHref="/courses/heritage-design-risk-for-architects/module-4"
      nextLabel="Next chapter"
    />
  );
}
