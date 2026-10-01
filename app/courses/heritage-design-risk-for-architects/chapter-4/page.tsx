import type { Metadata } from "next";
import { ChapterExperience } from "@/components/course/ChapterExperience";

export const metadata: Metadata = {
  title: "Chapter 4: Managing client, cost and programme | Training by Recept Heritage",
  description: "Chapter 4 of Heritage Design Risk for Architects: Managing client, cost and programme.",
};

export default function Chapter4Page() {
  return <ChapterExperience chapterNumber={4} />;
}
