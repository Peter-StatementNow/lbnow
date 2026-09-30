import type { Metadata } from "next";
import { ChapterActivity } from "@/components/course/ChapterActivity";
import { CHAPTER_7 } from "@/lib/content/architect-course-chapters";

export const metadata: Metadata = {
  title: "Chapter 7: Handover and the next change | Training by Recept Heritage",
  description:
    "A prototype walkthrough of Chapter 7 of Heritage Design Risk for Architects - placeholder content, not final guidance.",
};

export default function Chapter7Page() {
  return (
    <ChapterActivity
      content={CHAPTER_7}
      previousHref="/courses/heritage-design-risk-for-architects/chapter-6"
      nextHref="/courses/heritage-design-risk-for-architects"
      nextLabel="Return to course overview"
    />
  );
}
