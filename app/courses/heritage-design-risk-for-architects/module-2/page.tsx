import type { Metadata } from "next";
import { ChapterActivity } from "@/components/course/ChapterActivity";
import { CHAPTER_2 } from "@/lib/content/architect-course-chapters";

export const metadata: Metadata = {
  title: "Module 2: Understanding the existing building and place | Training by Recept Heritage",
  description:
    "A prototype walkthrough of Chapter 2 of Heritage Design Risk for Architects - placeholder content, not final guidance.",
};

export default function Module2Page() {
  return (
    <ChapterActivity
      content={CHAPTER_2}
      previousHref="/courses/heritage-design-risk-for-architects/module-1"
      nextHref="/courses/heritage-design-risk-for-architects/module-3"
      nextLabel="Next chapter"
    />
  );
}
