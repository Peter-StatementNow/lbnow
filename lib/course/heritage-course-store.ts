"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "lbnow-heritage-design-risk-course-state";

type CourseState = {
  completedChapters: number[];
};

const INITIAL_STATE: CourseState = {
  completedChapters: [],
};

function readStoredState(): CourseState {
  if (typeof window === "undefined") return INITIAL_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_STATE;
    const parsed = JSON.parse(raw);
    return {
      completedChapters: Array.isArray(parsed.completedChapters)
        ? parsed.completedChapters
        : [],
    };
  } catch {
    return INITIAL_STATE;
  }
}

function writeStoredState(state: CourseState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Prototype-only persistence; a failed write just means state resets on reload.
  }
}

/**
 * Where a learner has got to inside one chapter: current page, the answer
 * chosen on each page and which pages have been added to the Heritage
 * Record. Kept per chapter so reopening or reloading a chapter resumes
 * where they left off instead of returning to page 1 while the progress
 * bar still counts earlier work. Browser-only, like the rest of the course
 * state.
 */
export type ChapterProgress = {
  pageIndex: number;
  predictions: (number | null)[];
  saved: boolean[];
};

const chapterKey = (chapter: number) => `${STORAGE_KEY}-chapter-${chapter}`;

/**
 * The stored progress for a chapter, or null if there is none or it no
 * longer fits the chapter's content (a different number of pages, or an
 * answer that is not one of a page's options) - stale data is ignored
 * rather than trusted.
 */
export function readChapterProgress(
  chapter: number,
  optionCounts: number[]
): ChapterProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(chapterKey(chapter));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const pageCount = optionCounts.length;
    const { pageIndex, predictions, saved } = parsed ?? {};
    if (
      !Number.isInteger(pageIndex) ||
      pageIndex < 0 ||
      pageIndex >= pageCount ||
      !Array.isArray(predictions) ||
      predictions.length !== pageCount ||
      !Array.isArray(saved) ||
      saved.length !== pageCount
    ) {
      return null;
    }
    const answersFit = predictions.every(
      (value: unknown, index: number) =>
        value === null ||
        (Number.isInteger(value) && (value as number) >= 0 && (value as number) < optionCounts[index])
    );
    const savedFit = saved.every(
      (value: unknown, index: number) =>
        typeof value === "boolean" && (!value || predictions[index] !== null)
    );
    if (!answersFit || !savedFit) return null;
    return { pageIndex, predictions, saved };
  } catch {
    return null;
  }
}

export function writeChapterProgress(chapter: number, progress: ChapterProgress) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(chapterKey(chapter), JSON.stringify(progress));
  } catch {
    // Storage unavailable: progress simply will not survive a reload.
  }
}

function clearAllChapterProgress() {
  if (typeof window === "undefined") return;
  try {
    for (let chapter = 1; chapter <= 7; chapter++) {
      window.localStorage.removeItem(chapterKey(chapter));
    }
  } catch {
    // Nothing to clear if storage is unavailable.
  }
}

/**
 * Shared, browser-only course state - which chapters are complete, so
 * course-wide progress carries across the separate chapter routes. (The
 * Heritage Record itself is fixed per page by the content, so it needs
 * no storage.) This is localStorage, not a backend - per the explicit
 * "no backend/persistence architecture" instruction, it only needs to
 * survive navigation in one browser, not across devices or accounts.
 */
export function useCourseState() {
  const [state, setState] = useState<CourseState>(INITIAL_STATE);

  useEffect(() => {
    // localStorage can't be read during SSR; hydrating after mount (rather
    // than a lazy useState initializer) avoids a client/server render mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(readStoredState());
  }, []);

  const markChapterComplete = useCallback((chapter: number) => {
    setState((current) => {
      if (current.completedChapters.includes(chapter)) return current;
      const next = {
        ...current,
        completedChapters: [...current.completedChapters, chapter].sort((a, b) => a - b),
      };
      writeStoredState(next);
      return next;
    });
  }, []);

  const resetCourse = useCallback(() => {
    setState(INITIAL_STATE);
    writeStoredState(INITIAL_STATE);
    clearAllChapterProgress();
  }, []);

  return {
    completedChapters: state.completedChapters,
    markChapterComplete,
    resetCourse,
  };
}
