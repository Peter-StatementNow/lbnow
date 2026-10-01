import type { Metadata } from "next";
import { ChapterExperience } from "@/components/course/ChapterExperience";

export const metadata: Metadata = {
  title: "Chapter 7: Handover and the next change | Training by Recept Heritage",
  description: "Chapter 7 of Heritage Design Risk for Architects: Handover and the next change.",
};

export default function Chapter7Page() {
  return <ChapterExperience chapterNumber={7} />;
}
