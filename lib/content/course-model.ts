/**
 * Shared page and Heritage Record model for every chapter of Heritage
 * Design Risk for Architects.
 *
 * Every chapter is a sequence of pages with the same shape (project
 * moment, task, material, question, per-option feedback, worked
 * example, optional comparison, why this matters, fixed continue), so
 * one renderer (components/course/ChapterExperience.tsx) drives them
 * all.
 *
 * Heritage Record model (Peter, 1 Oct 2026 - "group by chapter"): the
 * record is shown as the current chapter's entries in full, with each
 * earlier chapter's record below it, collapsed. From Chapter 2 on, the
 * source gives each page's worked position as the entries that page
 * adds; they are appended under their headings exactly as written -
 * nothing is merged across chapters or dropped.
 */

import type { ComparisonCardContent } from "@/components/course/ComparisonCard";

/**
 * Short form of the course title, used consistently across the
 * course-taking chrome (not the longer marketing title used on the
 * catalogue/detail pages).
 */
export const COURSE_NAME = "Heritage Design Risk for Architects";

export const COURSE_HREF = "/courses/heritage-design-risk-for-architects";

// --- Heritage Record ------------------------------------------------------

/** A record section's content: a list of entries, or a single line such as "Not yet set." */
export type RecordText = string | string[];

export type RecordSection = { heading: string; entries: RecordText };

/** One chapter's part of the Heritage Record. */
export type RecordGroup = {
  /** e.g. "Chapter 2 · Understanding the existing building and place" */
  label: string;
  sections: RecordSection[];
  /** Short status label, e.g. "Review required". */
  status?: string;
  /** One-off explanatory line shown under `status`. */
  statusNote?: string;
};

/** What the Heritage Record tab shows: this chapter, then earlier chapters (newest first). */
export type HeritageRecordView = {
  current: RecordGroup;
  earlier: RecordGroup[];
};

export function recordTextToString(text: RecordText): string {
  return Array.isArray(text) ? text.join(" ") : text;
}

/** The four core headings sort first, in this order; any others follow in the order they first appear. */
const CORE_HEADINGS = [
  "Known",
  "To establish",
  "Keep under review",
  "Decision point",
  "Decision points",
];

/** Appends each page's entries under their headings, as written. */
function mergeSections(pagesEntries: RecordSection[][]): RecordSection[] {
  const byHeading = new Map<string, string[]>();
  for (const sections of pagesEntries) {
    for (const { heading, entries } of sections) {
      const list = byHeading.get(heading) ?? [];
      list.push(...(Array.isArray(entries) ? entries : [entries]));
      byHeading.set(heading, list);
    }
  }
  const headings = [...byHeading.keys()];
  const rank = (heading: string) => {
    const index = CORE_HEADINGS.indexOf(heading);
    return index === -1 ? CORE_HEADINGS.length : index;
  };
  return headings
    .map((heading, order) => ({ heading, order }))
    .sort((a, b) => rank(a.heading) - rank(b.heading) || a.order - b.order)
    .map(({ heading }) => ({ heading, entries: byHeading.get(heading)! }));
}

// --- Pages ------------------------------------------------------------------

export type EvidenceItem = {
  id: string;
  label: string;
  /**
   * A page aid (a note, extract, checklist or chapter summary written
   * for one page) rather than a project source document. Shown on its
   * own page only - not carried forward into earlier project material.
   */
  pageAid?: boolean;
  /** A photograph or drawing shown above the text (served from /public). */
  image?: { src: string; alt: string; width: number; height: number };
  body: string[];
};

export type WorkedExample = {
  paragraphs: string[];
  groups?: { heading: string; items: string[] }[];
};

/** A page as authored, without its Heritage Record views. */
export type PageContent = {
  number: number;
  title: string;
  /** Editorial status from the source document - "draft" pages show a review notice. */
  contentStatus: "agreed" | "draft";
  minutes: number;
  /** Paragraphs separated by "\n". */
  projectMoment: string;
  task: string;
  taskDetail?: string;
  evidence: EvidenceItem[];
  /** Material readable before the learner answers; everything else unlocks on answering. */
  alwaysAvailableEvidenceIds: string[];
  question: string;
  /** A statement the question is about (shown under the question), when there is one. */
  questionContext?: string;
  options: string[];
  expectedIndex: number;
  /** Bespoke feedback per option, indexed to `options`. Paragraphs separated by "\n". */
  optionFeedback: string[];
  workedExample: WorkedExample;
  /** Pointer to recognised guidance, shown after the worked example. */
  resourcePrompt?: string;
  /**
   * Optional "Myth and misconception" reinforcement card (myths-and-
   * misconceptions-content-addition.md, 4 Oct 2026). Never part of the
   * question, feedback, record or continuation - and only on the three
   * pages that source names.
   */
  mythCard?: { title: string; myth: string; remember: string; separate: string };
  comparisonCard?: ComparisonCardContent;
  /** Paragraphs separated by "\n". */
  whyThisMatters: string;
  saveLabel: string;
  continueLabel: string;
  continueCue: string;
};

/** A labelled set of earlier Project Material, e.g. one chapter's documents. */
export type MaterialGroup = { label: string; items: EvidenceItem[] };

export type CoursePage = PageContent & {
  recordBefore: HeritageRecordView;
  recordAfter: HeritageRecordView;
  /**
   * Project Material is cumulative (Peter, 1 Oct 2026): documents from
   * earlier pages and chapters stay available, grouped by chapter,
   * newest first. Filled in by lib/content/architect-course-chapters.ts.
   */
  earlierEvidence?: MaterialGroup[];
};

/** A Chapter 2-7 page as authored: the record entries it adds, as written in the source. */
export type PageDraft = PageContent & {
  recordEntries: RecordSection[];
  /** Status label for the chapter's record once this page is saved. */
  statusAfter?: string;
};

/**
 * Builds a chapter's pages from drafts: each page's record shows this
 * chapter's entries so far (appended per page) above the earlier
 * chapters' records. Returns the pages and the record groups to hand to
 * the next chapter.
 */
export function buildChapter(
  label: string,
  earlier: RecordGroup[],
  drafts: PageDraft[]
): { pages: CoursePage[]; groupsAfter: RecordGroup[] } {
  const groupAfter = (pageCount: number): RecordGroup => {
    const saved = drafts.slice(0, pageCount);
    const status = [...saved].reverse().find((draft) => draft.statusAfter)?.statusAfter;
    return {
      label,
      sections: mergeSections(saved.map((draft) => draft.recordEntries)),
      status,
    };
  };

  const pages = drafts.map((draft, index) => ({
    ...draft,
    recordBefore: { current: groupAfter(index), earlier },
    recordAfter: { current: groupAfter(index + 1), earlier },
  }));

  return { pages, groupsAfter: [groupAfter(drafts.length), ...earlier] };
}
