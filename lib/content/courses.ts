export type CourseAudience = "architect" | "conveyancer";

export type Course = {
  slug: string;
  audience: CourseAudience;
  audienceLabel: string;
  title: string;
  strapline: string;
  workflow: string;
  outcomes: string[];
  status: "in-preparation";
  /** Set once a course has its own detail page (chapter curriculum, module previews). */
  detailHref: string | null;
};

/**
 * The two launch tracks named in the design-parameters note. Both are
 * "in preparation" - Phase 1 has no working registration/payment/
 * learning-platform yet, so this catalogue is deliberately a
 * "what's coming" page, not an enrolment page. Update `status` once a
 * course actually opens.
 */
export const COURSES: Course[] = [
  {
    slug: "heritage-design-risk-for-architects",
    audience: "architect",
    audienceLabel: "For architects",
    title: "Heritage Design Risk for Architects",
    strapline:
      "Understand heritage risk early enough to shape the design, not just justify it afterwards.",
    workflow:
      "Project brief -> heritage baseline and significance -> design and consent strategy -> early Recept instruction.",
    outcomes: [
      "Read a listed building's significance the way a heritage consultant does, before the design is fixed.",
      "Build an evidence baseline that actually supports a consent strategy, not just a retrospective justification.",
      "Recognise the point in a project where late-stage redesign risk becomes real - and how to avoid it.",
      "Know when a project has moved beyond straightforward heritage risk and needs specialist input.",
    ],
    status: "in-preparation",
    detailHref: "/courses/heritage-design-risk-for-architects",
  },
  {
    slug: "listed-buildings-in-conveyancing",
    audience: "conveyancer",
    audienceLabel: "For solicitors and licensed conveyancers",
    title: "Listed Buildings in Conveyancing: Spot, Investigate and Escalate",
    strapline:
      "Spot unauthorised works and missing consent before they become your client's problem.",
    workflow:
      "Heritage-sensitive transaction -> evidence and consent risk -> safe client communication -> Recept escalation.",
    outcomes: [
      "Recognise the signs of unapproved or undocumented works to a listed building during a transaction.",
      "Understand what the available records can, and cannot, tell you with certainty.",
      "Communicate heritage risk to a client clearly, without overstating or understating it.",
      "Know when and how to escalate a heritage question to a specialist, and what to send them.",
    ],
    status: "in-preparation",
    detailHref: null,
  },
];
