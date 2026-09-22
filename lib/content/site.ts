/**
 * Site-wide brand constants for Training by Recept Heritage.
 *
 * Kept separate from page-level content modules (home.ts, about.ts, ...)
 * because these values - the product name, the Recept endorsement link,
 * primary navigation - are referenced from the header/footer on every
 * page, not from any one page's own content.
 */

export const SITE_NAME = "Training by Recept Heritage";
export const SITE_SHORT_NAME = "Training";

/**
 * The parent practice's own site. Recept Heritage is presently on
 * Squarespace at this address - see the design-parameters note for the
 * planned transition away from it. Update this if/when that happens.
 */
export const RECEPT_HERITAGE_WEBSITE_URL = "https://www.receptconsult.com";

export const SITE_METADATA = {
  title: "Training by Recept Heritage",
  description:
    "Practical, evidence-led training for architects, solicitors and conveyancers working on listed and historic buildings - from Recept Heritage.",
};

export type NavLink = {
  href: string;
  label: string;
};

export const PRIMARY_NAV: readonly NavLink[] = [
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/refer", label: "Refer a project" },
];

export const FOOTER_LINKS: readonly NavLink[] = [
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];
