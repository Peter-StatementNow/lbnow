import type { HeritageRecordState, RecordText } from "@/lib/content/architect-course-module-1";

const SECTIONS = [
  { key: "known", label: "Known" },
  { key: "toEstablish", label: "To establish" },
  { key: "keepUnderReview", label: "Keep under review" },
  { key: "decisionPoints", label: "Decision points" },
] as const;

function RecordValue({ text, className }: { text: RecordText; className: string }) {
  if (!Array.isArray(text)) {
    return <dd className={`mt-0.5 ${className}`}>{text}</dd>;
  }
  return (
    <dd className="mt-1">
      <ul className="grid gap-1">
        {text.map((line) => (
          <li key={line} className={`flex gap-1.5 ${className}`}>
            <span aria-hidden>&bull;</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </dd>
  );
}

/**
 * The four Heritage Record sections (Known / To establish / Keep under
 * review / Decision points). Shared by the side panel and the worked-
 * position card on each Module 1 page.
 */
export function HeritageRecordSections({
  record,
  size = "xs",
}: {
  record: HeritageRecordState;
  size?: "xs" | "sm";
}) {
  const valueClass =
    size === "sm" ? "text-sm leading-6 text-neutral-700" : "text-xs leading-5 text-neutral-700";

  return (
    <dl className={size === "sm" ? "grid gap-4" : "grid gap-3"}>
      {SECTIONS.map((section) => (
        <div key={section.key}>
          <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {section.label}
          </dt>
          <RecordValue text={record[section.key]} className={valueClass} />
        </div>
      ))}
    </dl>
  );
}

/**
 * The persistent, heritage-only accumulating record - deliberately
 * excludes ordinary project-management content (client objectives,
 * budget, programme). Rendered as the second tab of the right-hand
 * workspace (see LearningScreenShell).
 */
export function HeritageRecordPanel({ record }: { record: HeritageRecordState }) {
  return (
    <div className="grid gap-5 px-5 py-5">
      {record.status && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
            {record.status}
          </p>
          {record.statusNote && (
            <p className="mt-1 text-sm leading-6 text-neutral-600">{record.statusNote}</p>
          )}
        </div>
      )}

      {record.completed.length > 0 && (
        <ul className="grid gap-1">
          {record.completed.map((item) => (
            <li key={item} className="text-sm font-medium text-neutral-900">
              &#10003; {item}
            </li>
          ))}
        </ul>
      )}

      <HeritageRecordSections record={record} size="sm" />
    </div>
  );
}
