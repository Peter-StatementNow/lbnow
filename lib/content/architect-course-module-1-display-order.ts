/**
 * Hand-interleaved display order for Activity 2's prompt-card pool
 * (PROMPT_CARDS in architect-course-module-1.ts is grouped by
 * suggestedHeading for readability) - kept separate so the pool
 * doesn't visibly cluster by category before the learner has placed
 * anything. Fixed/deterministic rather than randomised at render time.
 */
export const PROMPT_CARD_DISPLAY_ORDER = [
  "local-validation",
  "specialist-input",
  "nearby-assets",
  "emerging-effects",
  "article-4",
  "existing-changes",
  "route-adjustment",
  "conservation-area",
  "outbuilding",
];
