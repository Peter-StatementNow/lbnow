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
  /** Short status label shown at the top of the panel, e.g. "Review required". Optional - most snapshots don't set one. */
  status?: string;
  /** One-off explanatory line shown under `status`, e.g. on first arrival - drop it once the task itself has explained why. */
  statusNote?: string;
};

export const HERITAGE_RECORD_INITIAL: HeritageRecordState = {
  completed: [],
  status: "Review required",
  statusNote:
    "Initial information indicates that heritage may affect this project. Verify the trigger and record the proportionate heritage considerations.",
  known:
    "Client identifies The Old Vicarage as Grade II listed; proposed work includes a rear extension, ground-floor reconfiguration, energy improvements and window work; the brief refers to a detached former coach house, a boundary wall and incomplete records of earlier work",
  toEstablish: "Not yet recorded",
  keepUnderReview: "Not yet started",
  decisionPoints: "Not yet set",
};

export const HERITAGE_RECORD_AFTER_ACTIVITY_1: HeritageRecordState = {
  completed: ["Initial heritage position recorded"],
  status: "Review required",
  known: HERITAGE_RECORD_INITIAL.known,
  toEstablish:
    "The current listing record, entry details and what the entry identifies; available consent history for earlier work; whether the former coach house and boundary wall require further heritage/status investigation before future alteration is assumed",
  keepUnderReview:
    "Which parts of the building, fabric, setting and associated features are affected as the proposal becomes more specific",
  decisionPoints: "Not yet set",
};

export const HERITAGE_RECORD_AFTER_ACTIVITY_2: HeritageRecordState = {
  completed: [
    "Initial heritage position recorded",
    "Heritage Considerations Addendum - version 1",
  ],
  status: HERITAGE_RECORD_AFTER_ACTIVITY_1.status,
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
  status: HERITAGE_RECORD_AFTER_ACTIVITY_2.status,
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
    "We are looking for an architect to help us plan alterations to The Old Vicarage, Church Lane, Ashcombe, which we bought last year. We understand that the house is Grade II listed and would like advice on what may be possible, as well as a proposal for taking the project forward.",
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
  label: "Sales particulars / existing plan",
  body: [
    "Client-held sales particulars and existing plan showing the principal house, later rear/service accommodation, detached coach house, garden and street boundary.",
  ],
};

export const SITE_PHOTOGRAPHS: EvidenceItem = {
  id: "existing-house",
  label: "Existing house",
  body: [
    "The Old Vicarage from Church Lane. The boundary wall and gate piers are visible; the former coach house is not visible in this view.",
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
    "The property is on Church Lane, in the historic core of Ashcombe.",
    "The village contains a number of older buildings, including the parish church and former school.",
    "The client's information identifies the principal house as Grade II listed.",
    "The client-held material does not include the current National Heritage List entry, a confirmed conservation-area record, Article 4 information, local-listing information, or a complete planning/listed-building-consent history.",
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
    "A homeowner has asked for a fee proposal for alterations to The Old Vicarage, a house they bought last year. Their enquiry describes a rear extension, ground-floor alterations, energy improvements and window work. They identify the house as Grade II listed, refer to a detached former coach house and boundary wall, and explain that records of earlier work are incomplete.\nThe client's information is enough to begin a heritage review. It is not enough to define the heritage position, consent route or scope of advice.",
  task: "Decide whether this brief needs a Heritage Record review. If it does, identify the most useful first heritage addition to the brief before scope and fee are defined.",
  predictionPrompt: "What is the most useful first heritage addition to this brief?",
  predictionOptions: [
    "No further heritage entry is needed at this stage. The client has identified the house as listed, so the architect can address heritage matters when developing the application.",
    "Record that listed building consent will be required for the extension, internal changes, window work and boundary-wall alterations.",
    "Record what needs verifying or establishing: the current listing record and what it identifies; the available consent history for earlier work; and the status/significance of the former coach house and boundary wall before future work to them is assumed.",
    "Require a full heritage impact assessment before providing a fee proposal.",
  ],
  predictionExpectedIndex: 2,
  predictionFeedback:
    "This is the strongest first addition. It records the heritage trigger and the information gaps without treating the client's description as verified, deciding the consent route, or prescribing a report before the project's heritage questions are understood.",
  /** Per-option feedback (indexed to predictionOptions), when authored - overrides the generic wrong-answer nudge. */
  optionFeedback: [
    "The client's statement that the house is listed is a reason to begin a heritage review, not a reason to defer it. The proposed works, incomplete records and associated features may affect what needs to be established before scope, fee, programme and later decisions can be defined responsibly. The next step is not to resolve everything now, but to record the questions that need verification or proportionate investigation.",
    "This reaches a consent conclusion too early. The proposed works may raise listed-building-consent questions, but the current listing record, the specific fabric affected, the extent of earlier work and the position of associated structures have not yet been verified. Record what needs establishing before defining the likely route.",
    "This is the strongest first addition. It records the heritage trigger and the information gaps without treating the client's description as verified, deciding the consent route, or prescribing a report before the project's heritage questions are understood.",
    "This is over-prescriptive at this stage. Further heritage input may become proportionate, but the material currently available does not justify prescribing a full heritage impact assessment before verifying the listed asset, understanding the proposal and identifying the project's actual heritage questions.",
  ] as string[] | undefined,
  evidence: [CLIENT_ENQUIRY, SITE_PHOTOGRAPHS, EXISTING_PLAN, LOCATION_CONTEXT_NOTE],
  alwaysAvailableEvidenceIds: [CLIENT_ENQUIRY.id],
  /** What this activity adds to the record - the "to establish" gaps, not "known", since Known is already given by the client's own enquiry. */
  toEstablishEntry: [
    "The current listing record, entry details and what the entry identifies.",
    "Available consent history for earlier work.",
    "Whether the former coach house and boundary wall require further heritage/status investigation before future alteration is assumed.",
  ],
  worked: {
    known: [
      "The client identifies the principal house as Grade II listed.",
      "The immediate proposal includes a rear extension, ground-floor changes, energy improvements and window work.",
      "The site includes a boundary wall and detached former coach house.",
      "Records of earlier work are incomplete.",
    ],
    toEstablish: [
      "Current listing record and its limits.",
      "Available approval / consent history.",
      "Relevant status and significance questions for associated structures.",
      "The proportionate heritage information needed before project assumptions harden.",
    ],
  },
  whyThisMatters:
    "A client's statement that a house is listed is enough to trigger a heritage review, but not enough to define the project route. The first Heritage Record entry identifies what must be verified or established before assumptions about scope, fee, programme, consent or specialist input become fixed.",
  saveLabel: "Save initial heritage position",
  continueLabel: "Continue: Verify the listed asset",
  carryForwardCue:
    "The client identifies The Old Vicarage as Grade II listed. Next, check the current official listing record and distinguish what it establishes from what still requires investigation.",
  comparisonCard: {
    heading: "If the heritage trigger were different",
    courseCase: "The Old Vicarage is confirmed Grade II listed from the client's own enquiry.",
    comparable:
      "The house is unlisted, but lies in a conservation area or the proposal may affect the setting of a listed building. The first action is still to verify the relevant designation, local controls and heritage context, then record what they may add to the brief.",
    whatMayChange: [
      "Listed building consent may not apply to the house itself.",
      "External work, conservation-area character and appearance, Article 4 directions, local validation requirements or effects on nearby heritage assets may still affect the route.",
      "Internal alterations would not normally raise the same listed-building considerations.",
    ],
    whatStaysSame: [
      "Verify the heritage trigger.",
      "Record what is known and what needs establishing.",
      "Do not fix scope, fee, programme or consent assumptions on incomplete information.",
    ],
  } satisfies ComparisonCardContent,
  scopeBoundaryCard: {
    heading: "The former coach house and boundary wall are flagged, not resolved, at this stage.",
    covers: [
      "Recognising that associated structures and boundary features may need heritage/status investigation before future work is assumed.",
    ],
    doesNotCover: [
      "Determining curtilage status.",
      "Giving legal advice on the status or consent implications of associated structures.",
    ],
    nextAction:
      "Verify and establish their relevant status and significance proportionately before developing proposals that affect them.",
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
  optionFeedback: undefined as string[] | undefined,
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
  optionFeedback: undefined as string[] | undefined,
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
