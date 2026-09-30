import type { Metadata } from "next";
import { ChapterActivity } from "@/components/course/ChapterActivity";
import { CHAPTER_4 } from "@/lib/content/architect-course-chapters";

export const metadata: Metadata = {
  title: "Chapter 4: Managing client, cost and programme | Training by Recept Heritage",
  description:
    "A prototype walkthrough of Chapter 4 of Heritage Design Risk for Architects - placeholder content, not final guidance.",
};

export default function Chapter4Page() {
  return (
    <ChapterActivity
      content={CHAPTER_4}
      previousHref="/courses/heritage-design-risk-for-architects/chapter-3"
      nextHref="/courses/heritage-design-risk-for-architects/chapter-5"
      nextLabel="Next chapter"
    />
  );
}
