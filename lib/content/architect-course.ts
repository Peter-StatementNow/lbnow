/**
 * "Heritage Design Risk for Architects" - the RIBA-project-model
 * curriculum structure, named in normal architectural language rather
 * than "heritage stages" (owner instruction, 23 Sep 2026).
 *
 * Every chapter is built as a sequence of pages (see
 * lib/content/architect-course-chapters.ts and
 * components/course/ChapterExperience.tsx).
 */

export type CourseChapter = {
  chapterNumber: number;
  title: string;
  question: string;
  /** One-line "what heritage adds at this project point" - used on the course route map. */
  heritageAddition: string;
  chapterHref: string | null;
  estimatedMinutes: number | null;
};

export const ARCHITECT_COURSE_CHAPTERS: CourseChapter[] = [
  {
    chapterNumber: 1,
    title: "Receiving the brief",
    question:
      "What does the client think they are asking for - and what may change because the building is historic or designated?",
    heritageAddition: "Add heritage considerations before assumptions harden",
    chapterHref: "/courses/heritage-design-risk-for-architects/chapter-1",
    estimatedMinutes: 7,
  },
  {
    chapterNumber: 2,
    title: "Understanding the existing building and place",
    question:
      "What additional evidence is needed beyond a standard measured/condition survey?",
    heritageAddition: "Establish significance, evidence and uncertainty",
    chapterHref: "/courses/heritage-design-risk-for-architects/chapter-2",
    estimatedMinutes: 9,
  },
  {
    chapterNumber: 3,
    title: "Developing the design",
    question:
      "How does understanding significance change option testing and design choice?",
    heritageAddition: "Test options against what matters",
    chapterHref: "/courses/heritage-design-risk-for-architects/chapter-3",
    estimatedMinutes: 8,
  },
  {
    chapterNumber: 4,
    title: "Managing client, cost and programme",
    question:
      "How do you explain uncertainty, consent risk, evidence needs and decision gates without alarming the client?",
    heritageAddition: "Build in consent, evidence and decision gates",
    chapterHref: "/courses/heritage-design-risk-for-architects/chapter-4",
    estimatedMinutes: 7,
  },
  {
    chapterNumber: 5,
    title: "Gaining consent",
    question:
      "How does a listed building change the permissions, application material, sequencing and likely scrutiny?",
    heritageAddition: "Explain effects and provide the right information",
    chapterHref: "/courses/heritage-design-risk-for-architects/chapter-5",
    estimatedMinutes: 8,
  },
  {
    chapterNumber: 6,
    title: "Detailing and delivering work",
    question:
      "How do historic fabric, repair/replacement, technical upgrades and site discoveries change ordinary technical and construction management?",
    heritageAddition: "Protect fabric and manage site change",
    chapterHref: "/courses/heritage-design-risk-for-architects/chapter-6",
    estimatedMinutes: 9,
  },
  {
    chapterNumber: 7,
    title: "Handover and the next change",
    question:
      "What needs recording, retaining and explaining to make future ownership and alteration safer?",
    heritageAddition: "Keep records for care and future work",
    chapterHref: "/courses/heritage-design-risk-for-architects/chapter-7",
    estimatedMinutes: 8,
  },
];
