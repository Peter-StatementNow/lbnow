import type { Metadata } from "next";
import { ChapterExperience } from "@/components/course/ChapterExperience";

export const metadata: Metadata = {
  title: "Chapter 5: Gaining consent | Training by Recept Heritage",
  description: "Chapter 5 of Heritage Design Risk for Architects: Gaining consent.",
};

export default function Chapter5Page() {
  return <ChapterExperience chapterNumber={5} />;
}
