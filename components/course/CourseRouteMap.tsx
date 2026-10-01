import Link from "next/link";
import type { CourseChapter } from "@/lib/content/architect-course";

/**
 * The course's chapter list - a Recept-original project-route graphic,
 * not a reproduction of RIBA's Plan of Work diagram (licensing/
 * attribution unconfirmed for that). Each stage pairs the chapter with
 * the one thing heritage adds at that point in an ordinary project.
 * This is the only chapter list on the course overview.
 */
export function CourseRouteMap({
  chapters,
  minutes,
}: {
  chapters: CourseChapter[];
  /** Minutes per chapter, keyed by chapter number. */
  minutes: Record<number, number>;
}) {
  return (
    <ol className="border-t border-neutral-200">
      {chapters.map((chapter, index) => {
        const isLast = index === chapters.length - 1;

        const row = (
          <div className="flex gap-4 py-5">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-neutral-900 bg-white text-sm font-semibold text-neutral-900">
                {chapter.chapterNumber}
              </span>
              {!isLast && <span className="mt-1 w-px flex-1 bg-neutral-200" />}
            </div>
            <div className="flex-1 pb-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="text-base font-semibold text-neutral-900">{chapter.title}</p>
                <span className="shrink-0 text-xs text-neutral-500">
                  about {minutes[chapter.chapterNumber]} min
                  {chapter.chapterHref && <span aria-hidden> &rarr;</span>}
                </span>
              </div>
              <p className="mt-1 text-sm leading-6 text-neutral-600">{chapter.heritageAddition}</p>
            </div>
          </div>
        );

        return (
          <li key={chapter.chapterNumber} className="border-b border-neutral-200">
            {chapter.chapterHref ? (
              <Link href={chapter.chapterHref} className="block hover:bg-neutral-50">
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
