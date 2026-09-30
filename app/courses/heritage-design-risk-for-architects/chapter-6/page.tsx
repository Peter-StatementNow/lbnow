import type { Metadata } from "next";
import { ChapterActivity } from "@/components/course/ChapterActivity";
import { CHAPTER_6 } from "@/lib/content/architect-course-chapters";

export const metadata: Metadata = {
  title: "Chapter 6: Detailing and delivering work | Training by Recept Heritage",
  description:
    "A prototype walkthrough of Chapter 6 of Heritage Design Risk for Architects - placeholder content, not final guidance.",
};

export default function Chapter6Page() {
  return (
    <ChapterActivity
      content={CHAPTER_6}
      previousHref="/courses/heritage-design-risk-for-architects/chapter-5"
      nextHref="/courses/heritage-design-risk-for-architects/chapter-7"
      nextLabel="Next chapter"
    />
  );
}
