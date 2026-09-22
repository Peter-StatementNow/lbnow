export const HERO = {
  eyebrow: "Training by Recept Heritage",
  heading:
    "Practical heritage training for the professionals who touch listed buildings every day.",
  subheading:
    "Short, evidence-led courses for architects, solicitors and conveyancers - built around real scenarios, not abstract policy. Learn what the risk actually looks like, know where your own role ends, and refer with confidence when it does.",
};

export type AudienceCard = {
  name: string;
  forWhom: string;
  workflow: string;
};

export const AUDIENCES: AudienceCard[] = [
  {
    name: "Architects",
    forWhom: "Project brief through to consent strategy.",
    workflow:
      "Project brief -> heritage baseline and significance -> design and consent strategy -> early Recept instruction.",
  },
  {
    name: "Solicitors and licensed conveyancers",
    forWhom: "Heritage-sensitive transactions.",
    workflow:
      "Heritage-sensitive transaction -> evidence and consent risk -> safe client communication -> Recept escalation.",
  },
];

export type PathwayStep = {
  step: number;
  heading: string;
  description: string;
};

export const PATHWAY: PathwayStep[] = [
  {
    step: 1,
    heading: "Find training that's actually useful",
    description:
      "Timely, practical courses built around the risk you're facing right now, not a general planning-law syllabus.",
  },
  {
    step: 2,
    heading: "Learn from real scenarios",
    description:
      "Evidence-led modules built around cases and decisions, not lectures on policy you already know exists.",
  },
  {
    step: 3,
    heading: "Know where your role ends",
    description:
      "Understand the boundary between what you can safely judge yourself and what needs specialist heritage input.",
  },
  {
    step: 4,
    heading: "Refer with confidence",
    description:
      "When a project or transaction needs it, hand it to Recept Heritage with the right information already to hand.",
  },
];

export const RECEPT_RELATIONSHIP = {
  heading: "Backed by Recept Heritage",
  body: "Training by Recept Heritage is built and run by Recept Heritage, heritage consultants. Course content comes from the same practice that carries out heritage statements, heritage impact assessments and bespoke advice on listed and historic buildings - not a third-party training provider working from published guidance alone.",
  linkLabel: "Have a live project or transaction?",
  linkHref: "/refer",
};

export const COURSES_TEASER = {
  heading: "Current courses",
  body: "Two tracks are in preparation, sharing the same standards but built for different professions and different risk.",
};
