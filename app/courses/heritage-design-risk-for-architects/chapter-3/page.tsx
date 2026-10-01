import type { Metadata } from "next";
import { ChapterExperience } from "@/components/course/ChapterExperience";

export const metadata: Metadata = {
  title: "Chapter 3: Developing the design | Training by Recept Heritage",
  description: "Chapter 3 of Heritage Design Risk for Architects: Developing the design.",
};

export default function Chapter3Page() {
  return <ChapterExperience chapterNumber={3} />;
}
