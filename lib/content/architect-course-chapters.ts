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

import type { CoursePage } from "@/lib/content/course-model";
import { CHAPTER_1_PAGES } from "@/lib/content/architect-course-chapter-1";
import { CHAPTER_2_PAGES } from "@/lib/content/architect-course-chapter-2";
import { CHAPTER_3_PAGES } from "@/lib/content/architect-course-chapter-3";
import { CHAPTER_4_PAGES } from "@/lib/content/architect-course-chapter-4";
import { CHAPTER_5_PAGES } from "@/lib/content/architect-course-chapter-5";
import { CHAPTER_6_PAGES } from "@/lib/content/architect-course-chapter-6";
import { CHAPTER_7_PAGES } from "@/lib/content/architect-course-chapter-7";

export const CHAPTER_PAGES: Record<number, CoursePage[]> = {
  1: CHAPTER_1_PAGES,
  2: CHAPTER_2_PAGES,
  3: CHAPTER_3_PAGES,
  4: CHAPTER_4_PAGES,
  5: CHAPTER_5_PAGES,
  6: CHAPTER_6_PAGES,
  7: CHAPTER_7_PAGES,
};

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
