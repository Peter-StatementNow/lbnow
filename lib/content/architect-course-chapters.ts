/**
 * Every chapter's pages, and course progress derived from them.
 *
 * Chapter 1: module-1-heritage-record-pages-1-to-6-draft.md (30 Sep
 * 2026). Chapters 2-7: heritage-design-risk-chapters-2-to-7-revised-
 * content.md (1 Oct 2026). See each chapter's own file.
 *
 * Case: The Old Vicarage, Church Lane, Ashcombe - Grade II listed,
 * confirmed from the client's own first email. There is no reveal
 * anywhere in this course:
 *
 *   "No false twist: the house does not suddenly become Grade II
 *   listed halfway through."
 *
 * The coach house and boundary wall stay flagged, never resolved - they
 * are revisited as an open question in Chapter 7.
 */

import type { CoursePage, EvidenceItem, MaterialGroup } from "@/lib/content/course-model";
import { ARCHITECT_COURSE_CHAPTERS } from "@/lib/content/architect-course";
import { CHAPTER_1_PAGES } from "@/lib/content/architect-course-chapter-1";
import { CHAPTER_2_PAGES } from "@/lib/content/architect-course-chapter-2";
import { CHAPTER_3_PAGES } from "@/lib/content/architect-course-chapter-3";
import { CHAPTER_4_PAGES } from "@/lib/content/architect-course-chapter-4";
import { CHAPTER_5_PAGES } from "@/lib/content/architect-course-chapter-5";
import { CHAPTER_6_PAGES } from "@/lib/content/architect-course-chapter-6";
import { CHAPTER_7_PAGES } from "@/lib/content/architect-course-chapter-7";

const PAGES_BY_CHAPTER: CoursePage[][] = [
  CHAPTER_1_PAGES,
  CHAPTER_2_PAGES,
  CHAPTER_3_PAGES,
  CHAPTER_4_PAGES,
  CHAPTER_5_PAGES,
  CHAPTER_6_PAGES,
  CHAPTER_7_PAGES,
];

/** Each document once, in the order first introduced. */
function uniqueItems(pages: CoursePage[]): EvidenceItem[] {
  const seen = new Map<string, EvidenceItem>();
  for (const page of pages) {
    for (const item of page.evidence) if (!seen.has(item.id)) seen.set(item.id, item);
  }
  return [...seen.values()];
}

/**
 * Project Material is cumulative (Peter, 1 Oct 2026): every page keeps
 * the documents introduced before it - first this chapter's earlier
 * pages, then each earlier chapter, newest first. A document already on
 * the current page isn't repeated.
 */
function withEarlierEvidence(chapters: CoursePage[][]): CoursePage[][] {
  const chapterGroups: MaterialGroup[] = [];
  return chapters.map((pages, chapterIndex) => {
    const chapter = ARCHITECT_COURSE_CHAPTERS[chapterIndex];
    const result = pages.map((page, pageIndex) => {
      const onThisPage = new Set(page.evidence.map((item) => item.id));
      const notHere = (group: MaterialGroup): MaterialGroup => ({
        ...group,
        items: group.items.filter((item) => !onThisPage.has(item.id)),
      });
      const groups = [
        { label: "Earlier in this chapter", items: uniqueItems(pages.slice(0, pageIndex)) },
        ...chapterGroups,
      ]
        .map(notHere)
        .filter((group) => group.items.length > 0);
      return { ...page, earlierEvidence: groups };
    });
    chapterGroups.unshift({
      label: `Chapter ${chapter.chapterNumber} · ${chapter.title}`,
      items: uniqueItems(pages),
    });
    return result;
  });
}

export const CHAPTER_PAGES: Record<number, CoursePage[]> = Object.fromEntries(
  withEarlierEvidence(PAGES_BY_CHAPTER).map((pages, index) => [index + 1, pages])
);

function sumMinutes(pages: CoursePage[]) {
  return pages.reduce((sum, page) => sum + page.minutes, 0);
}

/** Illustrative minutes per chapter - the sum of its pages. */
export const CHAPTER_MINUTES: Record<number, number> = Object.fromEntries(
  Object.entries(CHAPTER_PAGES).map(([chapter, pages]) => [chapter, sumMinutes(pages)])
);

export const TOTAL_COURSE_MINUTES = Object.values(CHAPTER_MINUTES).reduce((a, b) => a + b, 0);

/**
 * Course-wide progress: every completed chapter (other than the one in
 * progress) plus the minutes saved so far in the current chapter.
 */
export function courseProgress(
  completedChapters: number[],
  currentChapter: number,
  currentChapterMinutes: number
) {
  const completedMinutes =
    completedChapters
      .filter((chapter) => chapter !== currentChapter)
      .reduce((sum, chapter) => sum + (CHAPTER_MINUTES[chapter] ?? 0), 0) +
    currentChapterMinutes;
  return {
    percentComplete: Math.round((completedMinutes / TOTAL_COURSE_MINUTES) * 100),
    minutesLeft: Math.max(TOTAL_COURSE_MINUTES - completedMinutes, 0),
  };
}
