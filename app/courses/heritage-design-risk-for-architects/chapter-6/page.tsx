import type { Metadata } from "next";
import { ChapterExperience } from "@/components/course/ChapterExperience";

export const metadata: Metadata = {
  title: "Chapter 6: Detailing and delivering work | Training by Recept Heritage",
  description: "Chapter 6 of Heritage Design Risk for Architects: Detailing and delivering work.",
};

export default function Chapter6Page() {
  return <ChapterExperience chapterNumber={6} />;
}
