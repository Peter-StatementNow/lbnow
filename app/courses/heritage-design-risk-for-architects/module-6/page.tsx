import type { Metadata } from "next";
import { ChapterActivity } from "@/components/course/ChapterActivity";
import { CHAPTER_6 } from "@/lib/content/architect-course-chapters";

export const metadata: Metadata = {
  title: "Module 6: Detailing and delivering work | Training by Recept Heritage",
  description:
    "A prototype walkthrough of Chapter 6 of Heritage Design Risk for Architects - placeholder content, not final guidance.",
};

export default function Module6Page() {
  return (
    <ChapterActivity
      content={CHAPTER_6}
      previousHref="/courses/heritage-design-risk-for-architects/module-5"
      nextHref="/courses/heritage-design-risk-for-architects/module-7"
      nextLabel="Next chapter"
    />
  );
}
