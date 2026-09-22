import Link from "next/link";
import {
  PRIMARY_NAV,
  RECEPT_HERITAGE_WEBSITE_URL,
} from "@/lib/content/site";

/**
 * Shared site header, shown above every page. Follows the same
 * "[Product] by Recept Heritage" brand-lockup pattern as Statement
 * Now's own SiteHeader - product name links internally to "/", "by
 * Recept Heritage" is its own external link to the parent practice's
 * site, so the endorsement is always visible and never implied to be
 * the same product.
 */
export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-10 focus:bg-neutral-900 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex min-w-0 items-baseline gap-2">
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-tight text-neutral-900"
          >
            Training
          </Link>
          <a
            href={RECEPT_HERITAGE_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[13px] font-medium text-neutral-500 hover:text-neutral-700"
          >
            by Recept Heritage
          </a>
        </div>

        <nav aria-label="Primary" className="flex flex-wrap gap-6">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
