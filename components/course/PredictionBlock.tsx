import { StepBadge } from "@/components/course/ActivityElements";

/**
 * "Your initial view" - template item 4: one low-stakes judgement
 * before the fuller evidence is opened. Answering (regardless of
 * whether it's the expected option) is what unlocks the evidence tray
 * and working surface below it - the point is to activate existing
 * professional judgement, not to gate progress on getting it right.
 */
export function PredictionBlock({
  prompt,
  context,
  options,
  selectedIndex,
  onSelect,
  disabled,
}: {
  prompt: string;
  context?: string;
  options: readonly string[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      {/* Accent = "act here" (see --action in globals.css). */}
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-action">
        <StepBadge step={3} />
        Your initial view
      </p>
      <p className="mt-1 text-base font-semibold leading-7 text-neutral-900">{prompt}</p>
      {context && (
        <p className="mt-1 text-base italic leading-7 text-neutral-700">{context}</p>
      )}

      <div className="mt-3 grid gap-2">
        {options.map((option, index) => (
          <label
            key={option}
            className={
              selectedIndex === index
                ? "flex cursor-pointer gap-3 border-2 border-action bg-action-tint px-4 py-3"
                : "flex cursor-pointer gap-3 border-2 border-neutral-200 bg-white px-4 py-3 hover:border-neutral-400"
            }
          >
            <input
              type="radio"
              name={prompt}
              checked={selectedIndex === index}
              onChange={() => onSelect(index)}
              disabled={disabled}
              className="mt-1.5 h-4 w-4 shrink-0 accent-action"
            />
            <span className="text-base leading-7 text-neutral-800">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
