import type { Metadata } from "next";
import { ChapterExperience } from "@/components/course/ChapterExperience";

export const metadata: Metadata = {
  title: "Chapter 1: Receiving the brief | Training by Recept Heritage",
  description: "Chapter 1 of Heritage Design Risk for Architects: Receiving the brief.",
};

export default function Chapter1Page() {
  return <ChapterExperience chapterNumber={1} />;
}
