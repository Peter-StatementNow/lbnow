import type { Metadata } from "next";
import { ChapterActivity } from "@/components/course/ChapterActivity";
import { CHAPTER_5 } from "@/lib/content/architect-course-chapters";

export const metadata: Metadata = {
  title: "Chapter 5: Gaining consent | Training by Recept Heritage",
  description:
    "A prototype walkthrough of Chapter 5 of Heritage Design Risk for Architects - placeholder content, not final guidance.",
};

export default function Chapter5Page() {
  return (
    <ChapterActivity
      content={CHAPTER_5}
      previousHref="/courses/heritage-design-risk-for-architects/chapter-4"
      nextHref="/courses/heritage-design-risk-for-architects/chapter-6"
      nextLabel="Next chapter"
    />
  );
}
