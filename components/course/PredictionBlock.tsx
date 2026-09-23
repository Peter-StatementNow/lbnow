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
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
        Your initial view
      </p>
      <p className="mt-1 text-sm font-medium text-neutral-800">{prompt}</p>
      {context && (
        <p className="mt-1 text-sm italic text-neutral-600">{context}</p>
      )}

      <div className="mt-3 grid gap-2">
        {options.map((option, index) => (
          <label
            key={option}
            className={
              selectedIndex === index
                ? "flex cursor-pointer gap-3 border border-neutral-900 bg-neutral-50 px-4 py-3"
                : "flex cursor-pointer gap-3 border border-neutral-200 bg-white px-4 py-3 hover:border-neutral-400"
            }
          >
            <input
              type="radio"
              name={prompt}
              checked={selectedIndex === index}
              onChange={() => onSelect(index)}
              disabled={disabled}
              className="mt-1 h-4 w-4 shrink-0"
            />
            <span className="text-sm text-neutral-800">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
