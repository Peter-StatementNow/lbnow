import type { PolicyPage } from "@/lib/content/policy-pages";

export function PolicyPageLayout({ policy }: { policy: PolicyPage }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        {policy.title}
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Last updated: {policy.lastUpdated}
      </p>

      <div className="mt-10 grid gap-8">
        {policy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-neutral-900">
              {section.heading}
            </h2>
            <div className="mt-2 grid gap-3">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-6 text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
