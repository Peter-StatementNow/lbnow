import type { Metadata } from "next";
import { ChapterExperience } from "@/components/course/ChapterExperience";

export const metadata: Metadata = {
  title: "Chapter 2: Understanding the existing building and place | Training by Recept Heritage",
  description: "Chapter 2 of Heritage Design Risk for Architects: Understanding the existing building and place.",
};

export default function Chapter2Page() {
  return <ChapterExperience chapterNumber={2} />;
}
