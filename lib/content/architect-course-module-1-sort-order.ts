/**
 * A hand-interleaved display order for Screen 5's sortable items - kept
 * separate from SORT_ITEMS (which is grouped by modelBucket for
 * readability) so the pool doesn't visibly cluster by category before
 * the learner has sorted anything. Fixed/deterministic rather than
 * randomised at render time, to avoid hydration mismatches.
 */
export const SORT_ITEM_DISPLAY_ORDER = [
  "town-centre",
  "conservation-area",
  "client-wants",
  "setting",
  "article-4",
  "not-listed",
  "fabric",
  "standard-route",
  "validation",
  "character",
  "appraisal",
  "adjustment",
];
