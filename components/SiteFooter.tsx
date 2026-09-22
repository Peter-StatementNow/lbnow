import Link from "next/link";
import { FOOTER_LINKS, RECEPT_HERITAGE_WEBSITE_URL } from "@/lib/content/site";

/**
 * Shared site footer, shown below every page. Deliberately plain,
 * matching Statement Now's own footer: a link row and a copyright
 * line, with the Recept endorsement repeated here too (design
 * parameters require it to be unambiguous in header AND footer).
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-4 text-sm text-neutral-600"
        >
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-neutral-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Training by{" "}
          <a
            href={RECEPT_HERITAGE_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-700"
          >
            Recept Heritage
          </a>
        </p>
      </div>
    </footer>
  );
}
