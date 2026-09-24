export type ScopeBoundaryCardContent = {
  heading: string;
  covers: string[];
  doesNotCover: string[];
  nextAction: string;
};

/**
 * A professional safeguard, not a sales prompt: flags where the
 * course case touches something genuinely out of scope for this
 * course (specialist heritage advice, detailed legal interpretation)
 * so the learner doesn't take a confident answer away from a
 * placeholder. Always visible, not collapsible - unlike ComparisonCard,
 * this isn't optional reading.
 */
export function ScopeBoundaryCard({ content }: { content: ScopeBoundaryCardContent }) {
  return (
    <div className="border border-neutral-300 border-l-4 border-l-neutral-900 bg-neutral-50 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
        Scope boundary
      </p>
      <p className="mt-1 text-sm font-medium text-neutral-900">{content.heading}</p>

      <div className="mt-3 grid gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            This course covers
          </p>
          <ul className="mt-1 grid gap-1">
            {content.covers.map((line) => (
              <li key={line} className="text-sm leading-6 text-neutral-700">
                - {line}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            This course does not cover
          </p>
          <ul className="mt-1 grid gap-1">
            {content.doesNotCover.map((line) => (
              <li key={line} className="text-sm leading-6 text-neutral-700">
                - {line}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm leading-6 text-neutral-700">
          <span className="font-medium text-neutral-900">Next action: </span>
          {content.nextAction}
        </p>
      </div>
    </div>
  );
}
