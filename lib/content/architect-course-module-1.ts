/**
 * "Receiving the brief" - Module 1 of Heritage Design Risk for
 * Architects.
 *
 * Case (rebuilt 24 Sep 2026 from course-design-discussion-from-2026-
 * 09-24-1034.md - the actual agreed source, after two earlier misses
 * built content from lossy paraphrases instead): The Old Vicarage,
 * Church Lane, Ashcombe - a Grade II listed former vicarage. The
 * client's own enquiry states the house is listed. There is no
 * "reveal" anywhere in this course - the wording rule from that
 * document is explicit and must not be reintroduced:
 *
 *   "No false twist: the house does not suddenly become Grade II
 *   listed halfway through."
 *
 * The teaching point is not "spot that it's listed" - it's "a
 * confirmed listing tells you consent and significance matter here;
 * it does not tell you what matters, or what has already changed."
 * The coach house and boundary wall are flagged (ScopeBoundaryCard),
 * not resolved, in the core course - curtilage/associated-structure
 * analysis is explicitly reserved for a future advanced module.
 *
 * Built around an evidence-led learning loop - predict, inspect,
 * add/revise, compare, understand, save - applied consistently to all
 * three activities, with a heritage-only Heritage Record (no ordinary
 * project-management tracking).
 *
 * Prototype only - no backend/persistence architecture; state is
 * carried via lib/course/heritage-course-store.ts (localStorage) so it
 * survives navigation between chapter pages, not a server.
 */

import type { ComparisonCardContent } from "@/components/course/ComparisonCard";
import type { ScopeBoundaryCardContent } from "@/components/course/ScopeBoundaryCard";

/**
 * Short form of the course title, used consistently across the
 * course-taking chrome (not the longer marketing title used on the
 * catalogue/detail pages).
 */
export const COURSE_NAME = "Heritage Design Risk for Architects";

/** Persists across the whole chapter - all three activities share it. */
export const STAGE_LABEL = "1. Receiving the brief";

/** Illustrative only - see this file's own v2-era note; unchanged in v3. */
export const TOTAL_COURSE_MINUTES = 56;

export const PROJECT_CONTEXT = {
  project: "The Old Vicarage, Church Lane, Ashcombe",
  projectType:
    "Rear kitchen/family extension, ground-floor reconfiguration and window/energy works to a Grade II listed house",
  clientAmbition:
    "A larger kitchen and family space, improved insulation, heating and ventilation, and better garden access",
  programme: "Fee proposal and information requirements sought now; hoped-for start on site next spring",
};

// --- Heritage Record (the persistent, heritage-only accumulating record) --

export type HeritageRecordState = {
  completed: string[];
  known: string;
  toEstablish: string;
  keepUnderReview: string;
  decisionPoints: string;
};

export const HERITAGE_RECORD_INITIAL: HeritageRecordState = {
  completed: [],
  known: "Not yet recorded",
  toEstablish: "Not yet recorded",
  keepUnderReview: "Not yet started",
  decisionPoints: "Not yet set",
};

export const HERITAGE_RECORD_AFTER_ACTIVITY_1: HeritageRecordState = {
  completed: ["Initial heritage position recorded"],
  known:
    "The Old Vicarage is Grade II listed; proposed works are a rear extension, ground-floor reconfiguration, window and energy works",
  toEstablish:
    "What the listing covers, the status of the coach house and boundary wall, consent history for prior work, and the conservation-area/Article 4 position",
  keepUnderReview: "Not yet started",
  decisionPoints: "Not yet set",
};

export const HERITAGE_RECORD_AFTER_ACTIVITY_2: HeritageRecordState = {
  completed: [
    "Initial heritage position recorded",
    "Heritage Considerations Addendum - version 1",
  ],
  known: HERITAGE_RECORD_AFTER_ACTIVITY_1.known,
  toEstablish:
    "Conservation-area/Article 4 position, significance of the coach house and wall, consent history for prior work, and local validation requirements",
  keepUnderReview: "Effects and changed implications as design develops",
  decisionPoints: "Not yet set",
};

export const HERITAGE_RECORD_AFTER_ACTIVITY_3: HeritageRecordState = {
  completed: [
    "Initial heritage position recorded",
    "Heritage Considerations Addendum - version 1",
    "Heritage decision point recorded",
  ],
  known: HERITAGE_RECORD_AFTER_ACTIVITY_2.known,
  toEstablish: HERITAGE_RECORD_AFTER_ACTIVITY_2.toEstablish,
  keepUnderReview: "Effects and changed implications as design develops",
  decisionPoints:
    "Establish the heritage baseline and likely information requirements before a preferred concept or route is settled",
};

// --- Evidence -------------------------------------------------------------

export type EvidenceItem = { id: string; label: string; body: string[] };

export const CLIENT_ENQUIRY: EvidenceItem = {
  id: "client-enquiry",
  label: "Client enquiry",
  body: [
    "Subject: Request for proposal - alterations to The Old Vicarage, Ashcombe",
    "Dear [Architect's name],",
    "We are looking for an architect to help us plan alterations to The Old Vicarage, Church Lane, Ashcombe, which we bought last year. We understand that the house is Grade II listed and would like advice on what is possible, as well as a proposal for taking the project forward.",
    "The main aim is to create a more useful kitchen and family space at the back of the house. We are considering a modest rear extension and some changes to the existing ground-floor rooms. We would also like to improve insulation, heating and ventilation, and review the existing windows, several of which are in poor condition.",
    "We are also thinking about improving access to the garden. There is an old brick wall along Church Lane and a detached former coach house at the bottom of the garden. We are not proposing to alter the coach house immediately, but may want to consider it in future.",
    "The previous owners carried out some work, including changes to the kitchen and windows, but we do not have a full set of drawings or approvals. We have attached the sales details, photographs and the information we received when we bought the house.",
    "We would be grateful if you could let us know what information you would need in order to provide a fee proposal, and your likely availability and timescales. We would ideally like work to begin next spring, if possible.",
    "Kind regards,",
    "The owners of The Old Vicarage",
  ],
};

export const EXISTING_PLAN: EvidenceItem = {
  id: "existing-plan",
  label: "Sale particulars / existing plan",
  body: [
    "A simple existing floor plan and description, from the sales particulars the client received when they bought the house.",
  ],
};

export const SITE_PHOTOGRAPHS: EvidenceItem = {
  id: "site-photographs",
  label: "Site photographs",
  body: [
    "A handful of exterior photographs supplied by the client: the principal (Church Lane) elevation, the rear of the house, the boundary wall and the detached coach house.",
  ],
};

export const INITIAL_PROGRAMME_NOTE: EvidenceItem = {
  id: "initial-programme-note",
  label: "Initial programme note",
  body: [PROJECT_CONTEXT.programme],
};

export const LOCATION_CONTEXT_NOTE: EvidenceItem = {
  id: "location-context-note",
  label: "Initial location/context note",
  body: [
    "The Old Vicarage is Grade II listed (confirmed by the client).",
    "Ashcombe's older centre contains several other listed buildings, including the church and a former school.",
    "Whether the site lies within a conservation area, whether an Article 4 direction applies, and the status of the coach house and boundary wall have not yet been checked.",
    "No consent history is held for the previous owners' kitchen and window alterations.",
  ],
};

export function initialHeritagePositionEvidence(record: HeritageRecordState): EvidenceItem {
  return {
    id: "initial-heritage-position",
    label: "Initial heritage position",
    body: [
      `Known: ${record.known}`,
      `To establish: ${record.toEstablish}`,
    ],
  };
}

export function addendumEvidence(addendumText: string): EvidenceItem {
  return {
    id: "addendum-v1",
    label: "Heritage Considerations Addendum v1",
    body: addendumText.split("\n").filter(Boolean),
  };
}

// --- Activity 1: Identify the heritage additions to the brief -------------

export const ACTIVITY_1 = {
  projectMoment:
    "A homeowner has asked for a fee proposal for alterations to The Old Vicarage, a Grade II listed house they bought last year. Their email is clear about what they want, and states that the house is listed - but it also raises a boundary wall, a former coach house, and previous work with no surviving consent records.",
  task: "Identify what this brief needs to record, beyond the fact that the house is listed.",
  predictionPrompt: "Which of these is the most useful first heritage addition to this brief?",
  predictionOptions: [
    "None - the client has already confirmed the house is listed, so nothing further needs recording yet.",
    "A note that listed building consent will be required, without yet establishing what it needs to cover.",
    "A record of what still needs establishing: the extent of the listing, the status of the coach house and wall, and the missing consent history for earlier work.",
    "A recommendation that the client commission a full heritage impact assessment before any fee proposal is given.",
  ],
  predictionExpectedIndex: 2,
  predictionFeedback:
    "Knowing the house is listed is the start, not the end, of the heritage position. The useful first addition is recording what still needs to be established, proportionately, before scope and fee are fixed - not a conclusion, and not a blanket requirement.",
  evidence: [CLIENT_ENQUIRY, SITE_PHOTOGRAPHS, EXISTING_PLAN, LOCATION_CONTEXT_NOTE],
  alwaysAvailableEvidenceIds: [CLIENT_ENQUIRY.id],
  knownEntry: [
    "The Old Vicarage is Grade II listed.",
    "The proposal includes a rear extension, ground-floor reconfiguration, energy improvements and window works.",
    "The brief also raises a boundary wall and a detached former coach house, and notes incomplete consent records for previous work.",
  ],
  worked: {
    known: [
      "The Old Vicarage is Grade II listed.",
      "The brief covers a rear extension, internal reconfiguration, energy works and windows, alongside a boundary wall and a detached former coach house.",
    ],
    toEstablish: [
      "What the list entry actually covers, and what significance it protects.",
      "Whether the coach house and boundary wall require further heritage/status investigation before any future work is assumed.",
      "Whether the previous kitchen and window alterations were lawfully consented.",
      "Whether the site lies within a conservation area or is affected by an Article 4 direction.",
    ],
  },
  whyThisMatters:
    "A confirmed listing tells you that consent and significance matter here - it does not tell you what matters, or what has already changed. The heritage addition at instruction is to record what needs establishing before scope, fee and programme are fixed.",
  saveLabel: "Save initial heritage position",
  carryForwardCue: "You have recorded the initial heritage position. Next, turn it into the specific additions that should travel with the brief.",
  comparisonCard: {
    heading: "If the house were unlisted but in a conservation area",
    courseCase: "The Old Vicarage is confirmed Grade II listed.",
    comparable: "The house is not listed, but sits within a conservation area.",
    whatMayChange: [
      "Listed building consent would not apply to the house itself.",
      "Conservation-area character, local validation requirements and any Article 4 direction would still need checking.",
      "Internal work is less likely to raise the same consent questions, though external works and boundary treatment may still need assessment.",
    ],
    whatStaysSame: [
      "Identify the heritage trigger before assuming a route.",
      "Establish proportionate evidence for the trigger actually present.",
      "Do not assume the consent or information route from one fact alone.",
    ],
  } satisfies ComparisonCardContent,
  scopeBoundaryCard: {
    heading: "The coach house and boundary wall are flagged, not resolved, at this stage.",
    covers: [
      "Recording that associated structures and boundary features may need further heritage/status investigation before future work is assumed.",
    ],
    doesNotCover: [
      "Determining curtilage status.",
      "Legal advice on the status of associated structures.",
    ],
    nextAction:
      "Establish the relevant status and significance proportionately before developing proposals for these structures.",
  } satisfies ScopeBoundaryCardContent,
};

// --- Activity 2: Record the Heritage Considerations Addendum --------------

export type AddendumHeading = "A" | "B" | "C";

export const ADDENDUM_HEADINGS: { key: AddendumHeading; label: string }[] = [
  { key: "A", label: "To establish before design direction is fixed" },
  { key: "B", label: "To allow for in heritage scope / information / timing" },
  { key: "C", label: "To keep under review as the proposal develops" },
];

export type PromptCard = { id: string; text: string; suggestedHeading: AddendumHeading };

export const PROMPT_CARDS: PromptCard[] = [
  {
    id: "conservation-area",
    text: "Conservation-area status and relevant character/appraisal material.",
    suggestedHeading: "A",
  },
  {
    id: "article-4",
    text: "Article 4 direction coverage and the relevant types of work.",
    suggestedHeading: "A",
  },
  {
    id: "nearby-assets",
    text: "Nearby designated or locally listed assets and potential setting considerations.",
    suggestedHeading: "A",
  },
  {
    id: "outbuilding",
    text: "Whether the coach house or boundary wall needs further heritage/status investigation.",
    suggestedHeading: "A",
  },
  {
    id: "existing-changes",
    text: "Consent history and records for the previous owners' kitchen and window alterations.",
    suggestedHeading: "A",
  },
  {
    id: "local-validation",
    text: "Local validation requirements and likely heritage-information expectations.",
    suggestedHeading: "A",
  },
  {
    id: "specialist-input",
    text: "Whether additional heritage research, assessment, survey or other specialist input is proportionate before a concept direction is fixed.",
    suggestedHeading: "B",
  },
  {
    id: "emerging-effects",
    text: "Whether the emerging proposal affects character, appearance, fabric, setting or a relevant asset.",
    suggestedHeading: "C",
  },
  {
    id: "evidence-changes",
    text: "Whether new evidence changes the heritage-information or consent implications.",
    suggestedHeading: "C",
  },
];

export const ACTIVITY_2 = {
  projectMoment:
    "The Old Vicarage's listed status is confirmed. The initial position has been recorded, but the brief still needs a clear record of what must be established and revisited.",
  task: "Create the Heritage Considerations Addendum.",
  predictionPrompt: "Before you open the Heritage Record, which category does this question belong in?",
  predictionQuestion: "“Does the coach house or boundary wall need further heritage/status investigation?”",
  predictionOptions: [
    "Known now.",
    "To establish before design direction is fixed.",
    "Keep under review only after an application is submitted.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "Correct. The question is not whether the structure prevents the project. It is whether it could affect the baseline, evidence or project route and therefore needs proportionate establishing early.",
  evidence: [SITE_PHOTOGRAPHS, EXISTING_PLAN, INITIAL_PROGRAMME_NOTE],
  workingIntro: [
    "A heritage consideration can arise because the project affects the listed house directly, or because it may affect an associated structure, boundary feature or local control beyond the house itself.",
    "Use the available information to create a concise addendum. Do not attempt to decide what the proposal can achieve yet.",
  ],
  compareInstruction:
    "Compare the entries, not just the selections. The aim is to frame the heritage addition as a live record: what is not known yet, what may need allowance, and what must be revisited as the design develops.",
  whyThisMatters:
    "The addendum does not tell the project team what to design. It prevents a heritage-sensitive question - the coach house, the wall, the undocumented earlier works - being lost inside an assumed “standard” route. Some entries may fall away after proportionate checks; others may become more important as evidence and proposals develop.",
  saveLabel: "Save Heritage Considerations Addendum",
  carryForwardCue: "The heritage additions are now recorded. Next, decide when this information must affect the normal project route.",
};

// --- Activity 3: Set the heritage decision point ---------------------------

export const DECISION_GATE_OPTIONS = [
  "Heritage should be considered after a preferred option has been developed.",
  "A full heritage statement should always be completed before further discussion with the client.",
  "Before a preferred concept or consent route is treated as settled, establish the heritage baseline and likely heritage-information requirements proportionately.",
  "Wait for the local planning authority to identify any heritage requirements after submission.",
] as const;

export const DECISION_GATE_EXPECTED_INDEX = 2;

export const ACTIVITY_3 = {
  projectMoment:
    "The client wants initial options within four weeks. Heritage considerations are now recorded, but the project needs a point at which that information must influence design assumptions and the expected planning and listed building consent route.",
  task: "Set the heritage decision point.",
  predictionPrompt: "Which statement is the most useful heritage addition to the project route?",
  predictionFeedback:
    "This is a heritage decision point, not a requirement for a prescribed report. The next step is to establish what must be understood proportionately before a preferred option or route is treated as settled.",
  evidence: [INITIAL_PROGRAMME_NOTE],
  decisionPointText:
    "Establish the heritage baseline and likely heritage-information requirements proportionately, using further research, survey, assessment or specialist input where required by the project.",
  worked:
    "Do not prescribe a report at instruction. Record the point at which the project must have enough heritage understanding to make the next decision responsibly. The appropriate evidence and input will depend on the asset, place, proposed change and information already available.",
  whyThisMatters:
    "This is not an alternative project-management process. It is the heritage addition to a normal project route: a recorded point at which uncertainty must be reduced enough to avoid designing, programming or advising against assumptions that later prove unsafe.",
  saveLabel: "Save heritage decision point",
  carryForwardCue:
    "The Heritage Record now identifies what needs establishing. The next stage examines the building and place to turn these initial entries into a proportionate heritage baseline.",
};

// --- Module completion ------------------------------------------------------

export const MODULE_COMPLETE = {
  heading: "Receiving the brief complete",
  body: "The course has not changed how you receive a project brief. It has added a Heritage Record alongside it: a concise way to preserve heritage context, uncertainty and the point at which those matters must inform later decisions.",
  outputsCompleted: ["Heritage Considerations Addendum - version 1", "Heritage decision point"],
  nextStageHeading: "Next: Understanding the existing building and place",
  nextStageBody:
    "The Heritage Record now identifies what needs establishing. Next, examine the building, context and available evidence to create a proportionate heritage baseline.",
  nextStageMinutes: "About 9 minutes",
};
