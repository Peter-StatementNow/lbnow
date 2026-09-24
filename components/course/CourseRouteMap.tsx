import Link from "next/link";
import type { CourseChapter } from "@/lib/content/architect-course";

function badgeFor(chapter: CourseChapter): { label: string; className: string } {
  if (!chapter.moduleHref) {
    return {
      label: "Coming soon",
      className: "border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-500",
    };
  }
  if (chapter.isPrototype) {
    return {
      label: "Prototype",
      className:
        "border border-neutral-300 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600",
    };
  }
  return {
    label: "Available now",
    className: "border border-neutral-900 bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white",
  };
}

/**
 * The course's project-route map - a Recept-original graphic, not a
 * reproduction of RIBA's Plan of Work diagram (licensing/attribution
 * unconfirmed for that). Each stage pairs the chapter with the one
 * thing heritage adds at that point in an ordinary project.
 */
export function CourseRouteMap({ chapters }: { chapters: CourseChapter[] }) {
  return (
    <ol className="border-t border-neutral-200">
      {chapters.map((chapter, index) => {
        const isLast = index === chapters.length - 1;
        const badge = badgeFor(chapter);

        const row = (
          <div className="flex gap-4 py-5">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-neutral-900 bg-white text-sm font-semibold text-neutral-900">
                {chapter.chapterNumber}
              </span>
              {!isLast && <span className="mt-1 w-px flex-1 bg-neutral-200" />}
            </div>
            <div className="flex-1 pb-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-neutral-900">{chapter.title}</p>
                <span className={`shrink-0 ${badge.className}`}>{badge.label}</span>
              </div>
              <p className="mt-1 text-sm leading-6 text-neutral-600">{chapter.heritageAddition}</p>
            </div>
          </div>
        );

        return (
          <li key={chapter.chapterNumber} className="border-b border-neutral-200">
            {chapter.moduleHref ? (
              <Link href={chapter.moduleHref} className="block hover:bg-neutral-50">
                {row}
              </Link>
            ) : (
              row
            )}
          </li>
        );
      })}
    </ol>
  );
}
