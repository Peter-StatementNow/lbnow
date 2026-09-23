/**
 * "Heritage Design Risk for Architects" - the RIBA-project-model
 * curriculum structure, named in normal architectural language rather
 * than "heritage stages" (owner instruction, 23 Sep 2026). Chapter 1
 * ("Receiving the brief") is built as a real interactive walkthrough -
 * see lib/content/architect-course-module-1.ts and
 * components/course/Module1Experience.tsx, built from
 * architect-course-module-1-wireframe.md. Chapters 2-7 are curriculum
 * only so far - no content built yet.
 */

export type CourseChapter = {
  chapterNumber: number;
  title: string;
  question: string;
  /** Only Chapter 1 has a built module right now. */
  moduleHref: string | null;
  estimatedMinutes: number | null;
};

export const ARCHITECT_COURSE_CHAPTERS: CourseChapter[] = [
  {
    chapterNumber: 1,
    title: "Receiving the brief",
    question:
      "What does the client think they are asking for - and what may change because the building is historic or designated?",
    moduleHref: "/courses/heritage-design-risk-for-architects/module-1",
    estimatedMinutes: 7,
  },
  {
    chapterNumber: 2,
    title: "Understanding the existing building",
    question:
      "What additional evidence is needed beyond a standard measured/condition survey?",
    moduleHref: null,
    estimatedMinutes: null,
  },
  {
    chapterNumber: 3,
    title: "Developing the design",
    question:
      "How does understanding significance change option testing and design choice?",
    moduleHref: null,
    estimatedMinutes: null,
  },
  {
    chapterNumber: 4,
    title: "Managing client, cost and programme",
    question:
      "How do you explain uncertainty, consent risk, evidence needs and decision gates without alarming the client?",
    moduleHref: null,
    estimatedMinutes: null,
  },
  {
    chapterNumber: 5,
    title: "Gaining consent",
    question:
      "How does a listed building change the permissions, application material, sequencing and likely scrutiny?",
    moduleHref: null,
    estimatedMinutes: null,
  },
  {
    chapterNumber: 6,
    title: "Detailing and delivering work",
    question:
      "How do historic fabric, repair/replacement, technical upgrades and site discoveries change ordinary technical and construction management?",
    moduleHref: null,
    estimatedMinutes: null,
  },
  {
    chapterNumber: 7,
    title: "Handover and the next change",
    question:
      "What needs recording, retaining and explaining to make future ownership and alteration safer?",
    moduleHref: null,
    estimatedMinutes: null,
  },
];
