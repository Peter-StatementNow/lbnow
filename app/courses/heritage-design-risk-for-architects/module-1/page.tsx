import type { Metadata } from "next";
import { Module1Experience } from "@/components/course/Module1Experience";

export const metadata: Metadata = {
  title: "Module 1: Receiving the brief | Training by Recept Heritage",
  description:
    "A working prototype of Module 1 of Heritage Design Risk for Architects.",
};

export default function Module1Page() {
  return <Module1Experience />;
}
