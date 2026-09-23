import { MODULE_1_STAGES } from "@/lib/content/architect-course-module-1";

export function ModuleStepper({ currentStageIndex }: { currentStageIndex: number }) {
  return (
    <div>
      <ol className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {MODULE_1_STAGES.map((stage, index) => (
          <li key={stage} className="flex shrink-0 items-center gap-2">
            <span
              className={
                index === currentStageIndex
                  ? "whitespace-nowrap border border-neutral-900 bg-neutral-900 px-2.5 py-1 font-semibold text-white"
                  : index < currentStageIndex
                    ? "whitespace-nowrap border border-neutral-300 px-2.5 py-1 text-neutral-500 line-through decoration-neutral-300"
                    : "whitespace-nowrap border border-neutral-200 px-2.5 py-1 text-neutral-400"
              }
            >
              {stage}
            </span>
            {index < MODULE_1_STAGES.length - 1 && (
              <span aria-hidden="true" className="text-neutral-300">
                &rarr;
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-2 text-xs font-medium text-neutral-500">
        You are here: {MODULE_1_STAGES[currentStageIndex]}
      </p>
    </div>
  );
}
