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
  }, []);

  return {
    completedChapters: state.completedChapters,
    markChapterComplete,
    resetCourse,
  };
}
