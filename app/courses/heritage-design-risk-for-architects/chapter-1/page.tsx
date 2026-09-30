import type { Metadata } from "next";
import { Chapter1Experience } from "@/components/course/Chapter1Experience";

export const metadata: Metadata = {
  title: "Chapter 1: Receiving the brief | Training by Recept Heritage",
  description:
    "A working prototype of Chapter 1 of Heritage Design Risk for Architects.",
};

export default function Chapter1Page() {
  return <Chapter1Experience />;
}
