export type PolicySection = {
  heading: string;
  paragraphs: string[];
};

export type PolicyPage = {
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
};

/**
 * Phase 1 has no accounts, no payments and no course platform yet - the
 * only personal data this site collects is what a visitor types into
 * the referral form (app/refer), which is emailed directly to Recept
 * Heritage via Resend and not stored in any database. Keep these
 * pages honest to that actual, narrow footprint; expand them (course
 * enrolment, learner accounts, certificates, payment) only as those
 * capabilities are actually built - see the design-parameters note's
 * own phasing.
 */

export const PRIVACY_POLICY: PolicyPage = {
  title: "Privacy Policy",
  lastUpdated: "22 September 2026",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "Training by Recept Heritage is operated by Recept Heritage. For the purposes of UK data protection law, Recept Heritage is the data controller for personal data collected through this site.",
      ],
    },
    {
      heading: "What we collect",
      paragraphs: [
        "At this stage, this site collects personal data only when you voluntarily submit the referral form: your name, email address, profession, and the project or transaction details you choose to provide.",
        "This site does not currently have user accounts, course enrolment, or payment - it does not collect data for those purposes yet. This policy will be updated before any of those are introduced.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "Referral form submissions are sent by email directly to Recept Heritage, so that Recept Heritage can respond to your enquiry. We do not use this data for marketing, and we do not sell or share it with third parties other than the email delivery provider described below.",
      ],
    },
    {
      heading: "Who processes it on our behalf",
      paragraphs: [
        "Referral form submissions are delivered using Resend, an email-sending service, acting as a data processor on our instructions. No other third-party processor currently receives personal data from this site.",
      ],
    },
    {
      heading: "Legal basis",
      paragraphs: [
        "We process referral form data on the basis of legitimate interests - responding to an enquiry you have chosen to send us - and, where the enquiry relates to a service you are considering instructing, to take steps at your request before entering into a contract.",
      ],
    },
    {
      heading: "Retention",
      paragraphs: [
        "Referral emails are retained in Recept Heritage's mailbox for as long as reasonably needed to respond to the enquiry and for our own record-keeping, and are deleted when no longer needed.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You have the right to ask what personal data we hold about you, to have inaccurate data corrected, and to ask for it to be deleted, subject to any legal requirement to keep it. Contact us using the details below to exercise any of these rights.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "For any question about this policy or your data, contact Recept Heritage directly.",
      ],
    },
  ],
};

export const TERMS_AND_CONDITIONS: PolicyPage = {
  title: "Terms and Conditions",
  lastUpdated: "22 September 2026",
  sections: [
    {
      heading: "About this site",
      paragraphs: [
        "This site is operated by Recept Heritage. At this stage it provides information about forthcoming training courses and a form to refer a project or transaction to Recept Heritage - it does not currently sell courses, issue certificates, or provide any paid service directly.",
      ],
    },
    {
      heading: "No professional advice",
      paragraphs: [
        "Nothing on this site constitutes heritage, planning, legal or professional advice on any specific project or transaction. Course content, when published, will be general professional training, not advice on your particular circumstances - for that, refer your project to Recept Heritage.",
      ],
    },
    {
      heading: "Accuracy",
      paragraphs: [
        "We take care to keep course descriptions and site content accurate and current, but planning policy and legal frameworks change, and course content is reviewed periodically rather than continuously. Always check the version and review date shown on any published course material.",
      ],
    },
    {
      heading: "Referral form",
      paragraphs: [
        "Submitting the referral form sends your enquiry to Recept Heritage by email. It does not create a contract, booking, or any commitment on Recept Heritage's part to accept the instruction or to respond within any particular time.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "These terms will be updated as course registration, payment and learner accounts are introduced. Continued use of the site after an update constitutes acceptance of the revised terms.",
      ],
    },
  ],
};

export const COOKIE_POLICY: PolicyPage = {
  title: "Cookie Policy",
  lastUpdated: "22 September 2026",
  sections: [
    {
      heading: "Current position",
      paragraphs: [
        "This site does not currently set any non-essential cookies. It has no analytics, advertising, or tracking scripts installed, and no user accounts or login session to maintain.",
      ],
    },
    {
      heading: "If this changes",
      paragraphs: [
        "If analytics, learner accounts, or any other feature requiring cookies is introduced, this policy will be updated to describe exactly what is set and why, and consent will be requested where required by law before any non-essential cookie is set.",
      ],
    },
  ],
};
