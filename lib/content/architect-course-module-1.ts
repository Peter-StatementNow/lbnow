/**
 * "Receiving the brief" - Module 1 of Heritage Design Risk for
 * Architects.
 *
 * Source (30 Sep 2026): module-1-heritage-record-pages-1-to-6-draft.md,
 * the governing six-page sequence, plus the replacement Page 1
 * optional comparison supplied alongside it. Page 1 is agreed content;
 * Pages 2-6 are drafts for review. Transcribed from that document, not
 * paraphrased - edit here only against a newer version of the source.
 *
 * Case: The Old Vicarage, Church Lane, Ashcombe - a Grade II listed
 * former vicarage. The client's own enquiry states the house is listed.
 * There is no "reveal" anywhere in this course:
 *
 *   "No false twist: the house does not suddenly become Grade II
 *   listed halfway through."
 *
 * "Heritage Record" is the sole learner-facing name for the workspace
 * and the Module 1 output. "Heritage Considerations Addendum" was a
 * superseded term and must not be reintroduced.
 *
 * Every page uses fixed continuation and option-specific feedback: no
 * answer-dependent route, score or Heritage Record state.
 *
 * Prototype only - no backend; state is carried via
 * lib/course/heritage-course-store.ts (localStorage).
 */

import type { ComparisonCardContent } from "@/components/course/ComparisonCard";

/**
 * Short form of the course title, used consistently across the
 * course-taking chrome (not the longer marketing title used on the
 * catalogue/detail pages).
 */
export const COURSE_NAME = "Heritage Design Risk for Architects";

/** Persists across the whole chapter - all six pages share it. */
export const STAGE_LABEL = "1. Receiving the brief";

/** Illustrative only. */
export const TOTAL_COURSE_MINUTES = 56;

// --- Heritage Record (the persistent, heritage-only accumulating record) --

/** A record section: a list of entries, or a single line such as "Not yet set". */
export type RecordText = string | string[];

export type HeritageRecordState = {
  completed: string[];
  known: RecordText;
  toEstablish: RecordText;
  keepUnderReview: RecordText;
  decisionPoints: RecordText;
  /** Short status label shown at the top of the panel, e.g. "Review required". */
  status?: string;
  /** One-off explanatory line shown under `status`, e.g. on first arrival. */
  statusNote?: string;
};

export function recordTextToString(text: RecordText): string {
  return Array.isArray(text) ? text.join(" ") : text;
}

const REVIEW_REQUIRED = "Review required";

export const HERITAGE_RECORD_INITIAL: HeritageRecordState = {
  completed: [],
  status: REVIEW_REQUIRED,
  statusNote:
    "Initial information indicates that heritage may affect this project. Verify the trigger and record the proportionate heritage considerations.",
  known: [
    "Client identifies The Old Vicarage as Grade II listed.",
    "Proposed work includes a rear extension, ground-floor reconfiguration, energy improvements and window work.",
    "The brief refers to a detached former coach house, a boundary wall and incomplete records of earlier work.",
  ],
  toEstablish: "Not yet recorded.",
  keepUnderReview: "Not yet started.",
  decisionPoints: "Not yet set.",
};

const RECORD_AFTER_PAGE_1: HeritageRecordState = {
  completed: [],
  status: REVIEW_REQUIRED,
  known: [
    "Client identifies The Old Vicarage as Grade II listed.",
    "The proposal includes a rear extension, ground-floor reconfiguration, energy improvements and window work.",
    "The brief raises a detached former coach house, a boundary wall and incomplete records of earlier work.",
  ],
  toEstablish: [
    "The current listing record, entry details and what the entry identifies.",
    "Available consent history for earlier work.",
    "Whether the former coach house and boundary wall require further heritage/status investigation before future alteration is assumed.",
  ],
  keepUnderReview: [
    "Which parts of the building, fabric, setting and associated features are affected as the proposal becomes more specific.",
  ],
  decisionPoints: "Not yet set.",
};

const KNOWN_AFTER_LISTING_ENTRY = [
  "The Old Vicarage, Church Lane, Ashcombe, is Grade II listed.",
  "The official entry identifies the principal house as an early C19 building with later C19 and C20 alterations.",
  "The entry notes alterations to the rear range and a small single-storey addition.",
];

const RECORD_AFTER_PAGE_2: HeritageRecordState = {
  completed: [],
  status: REVIEW_REQUIRED,
  known: [
    ...KNOWN_AFTER_LISTING_ENTRY,
    "The proposal includes a rear extension, ground-floor reconfiguration, energy improvements and window work.",
  ],
  toEstablish: [
    "The significance and condition of the building, including the rear range, later additions and internal fabric affected by the proposal.",
    "Available consent history for earlier work.",
    "Whether the former coach house and boundary wall require further heritage/status investigation before future alteration is assumed.",
  ],
  keepUnderReview: RECORD_AFTER_PAGE_1.keepUnderReview,
  decisionPoints: "Not yet set.",
};

const KNOWN_FROM_PAGE_3 = [
  ...KNOWN_AFTER_LISTING_ENTRY,
  "The client’s early priorities include a rear extension, ground-floor changes, energy improvements and window work.",
];

const RECORD_AFTER_PAGE_3: HeritageRecordState = {
  completed: [],
  status: REVIEW_REQUIRED,
  known: KNOWN_FROM_PAGE_3,
  toEstablish: [
    "The significance, condition and contribution of the spaces, fabric and features likely to be affected by the proposal.",
    "The nature, extent and approval history of earlier work.",
    "The status and significance questions raised by the former coach house and boundary wall before future alteration is assumed.",
    "The effect of the developing proposal on the building and its setting.",
  ],
  keepUnderReview: [
    "Whether emerging design choices affect significant fabric, spaces, setting or associated features.",
    "The proportionate level of heritage information required as the project becomes more specific.",
  ],
  decisionPoints: "Not yet set.",
};

const TO_ESTABLISH_FROM_PAGE_4 = [
  "The significance, condition and contribution of the spaces, fabric and features likely to be affected by the proposal.",
  "The nature, extent and approval history of earlier work.",
  "The status and significance questions raised by the former coach house and boundary wall before future alteration is assumed.",
  "The information needed to understand the effect of the developing proposal on the building and its setting.",
];

const KEEP_UNDER_REVIEW_FROM_PAGE_4 = [
  "Whether emerging design choices affect significant fabric, spaces, setting or associated features.",
  "The extent to which the rear extension, internal changes, energy measures and window strategy affect the heritage position.",
  "The proportionate level of heritage information required as the project becomes more specific.",
];

const RECORD_AFTER_PAGE_4: HeritageRecordState = {
  completed: [],
  status: REVIEW_REQUIRED,
  known: KNOWN_FROM_PAGE_3,
  toEstablish: TO_ESTABLISH_FROM_PAGE_4,
  keepUnderReview: KEEP_UNDER_REVIEW_FROM_PAGE_4,
  decisionPoints: "Not yet set.",
};

const FIRST_DECISION_POINT =
  "Before a preferred concept, programme assumption or likely consent route is treated as settled, establish the affected fabric and spaces, relevant earlier changes, and the proposal’s likely effect on the listed building and its setting.";

const RECORD_AFTER_PAGE_5: HeritageRecordState = {
  ...RECORD_AFTER_PAGE_4,
  decisionPoints: [FIRST_DECISION_POINT],
};

/** The Heritage Record at the end of Module 1 - the starting point for Chapter 2. */
export const HERITAGE_RECORD_MODULE_1_COMPLETE: HeritageRecordState = {
  ...RECORD_AFTER_PAGE_5,
  status: "Module 1 complete: receiving the brief",
};

// --- Project Material -------------------------------------------------------

export type EvidenceItem = { id: string; label: string; body: string[] };

const CLIENT_ENQUIRY: EvidenceItem = {
  id: "client-enquiry",
  label: "Client enquiry",
  body: [
    "Subject: Request for proposal — alterations to The Old Vicarage, Ashcombe",
    "Dear [Architect’s name],",
    "We are looking for an architect to help us plan alterations to The Old Vicarage, Church Lane, Ashcombe, which we bought last year. We understand that the house is Grade II listed and would like advice on what may be possible, as well as a proposal for taking the project forward.",
    "The main aim is to create a more useful kitchen and family space at the back of the house. We are considering a modest rear extension and some changes to the existing ground-floor rooms. We would also like to improve insulation, heating and ventilation, and review the existing windows, several of which are in poor condition.",
    "We are also thinking about improving access to the garden. There is an old brick wall along Church Lane and a detached former coach house at the bottom of the garden. We are not proposing to alter the coach house immediately, but may want to consider it in future.",
    "The previous owners carried out some work, including changes to the kitchen and windows, but we do not have a full set of drawings or approvals. We have attached the sales details, photographs and the information we received when we bought the house.",
    "We would be grateful if you could let us know what information you would need in order to provide a fee proposal, and your likely availability and timescales. We would ideally like work to begin next spring, if possible.",
    "Kind regards,",
    "[Client name]",
  ],
};

const EXISTING_HOUSE: EvidenceItem = {
  id: "existing-house",
  label: "Existing house",
  body: [
    "The Old Vicarage from Church Lane. The boundary wall and gate piers are visible; the former coach house is not visible in this view.",
  ],
};

const EXISTING_PLAN: EvidenceItem = {
  id: "existing-plan",
  label: "Sales particulars / existing plan",
  body: [
    "Client-held sales particulars and existing plan showing the principal house, later rear/service accommodation, detached coach house, garden and street boundary.",
  ],
};

const LOCATION_CONTEXT_NOTE: EvidenceItem = {
  id: "location-context-note",
  label: "Initial location/context note",
  body: [
    "• The property is on Church Lane, in the historic core of Ashcombe.",
    "• The village contains a number of older buildings, including the parish church and former school.",
    "• The client’s information identifies the principal house as Grade II listed.",
    "• The client-held material does not include the current National Heritage List entry, a confirmed conservation-area record, Article 4 information, local-listing information, or a complete planning/listed-building-consent history.",
  ],
};

const LISTING_ENTRY: EvidenceItem = {
  id: "listing-entry",
  label: "Current official listing entry",
  body: [
    "NATIONAL HERITAGE LIST FOR ENGLAND",
    "THE OLD VICARAGE, CHURCH LANE, ASHCOMBE",
    "List entry number: [illustrative entry number]",
    "Grade: II",
    "Date first listed: [illustrative date]",
    "Parish: Ashcombe",
    "District: [illustrative district]",
    "Description",
    "House. Early C19, with later C19 and C20 alterations. Rendered elevations under a slate roof. Two storeys. Three-bay principal elevation facing Church Lane, with central entrance and sash windows. Brick end stacks.",
    "The rear range has been altered. A small single-storey addition is noted to one side.",
    "Listing NGR: [illustrative reference]",
    "This list entry identifies the principal listed building. The list description is not intended to be a comprehensive record of every feature or alteration.",
  ],
};

const LISTING_ENTRY_NOTE: EvidenceItem = {
  id: "listing-entry-note",
  label: "Listing-entry note",
  body: [
    "READING THE ENTRY",
    "The official list entry confirms that The Old Vicarage, Church Lane, Ashcombe, is Grade II listed.",
    "The entry gives an identification and a short description. It does not, by itself, confirm the significance of every element, the date or status of all later work, the status of detached structures, or whether a particular proposal requires consent.",
  ],
};

const EARLY_CLIENT_PRIORITIES: EvidenceItem = {
  id: "early-client-priorities",
  label: "Proposal note — early client priorities",
  body: [
    "EARLY CLIENT PRIORITIES",
    "• A modest rear extension to create a larger kitchen and family space.",
    "• Reconfiguration of the ground floor, including changes to the existing kitchen.",
    "• Improved insulation, heating and ventilation.",
    "• Review and possible repair or replacement of poor-condition windows.",
    "• Better access to the garden; the coach house may be considered at a later date.",
    "No measured survey, fabric investigation, significance assessment, consent history or developed design proposal is yet available.",
  ],
};

const LISTING_ENTRY_NOTE_EXTRACT: EvidenceItem = {
  id: "listing-entry-note-extract",
  label: "Extract from listing-entry note",
  body: [
    "WHAT THE ENTRY ESTABLISHES",
    "• Identity of the principal listed asset.",
    "• Grade II designation.",
    "• A short description of the building at the time of listing and the wording included in the entry.",
    "WHAT THE ENTRY DOES NOT SETTLE",
    "• The significance of every space, feature, finish or later alteration.",
    "• The nature, date, approval or effect of past works.",
    "• The status or significance of detached structures and boundary features.",
    "• The effect of a particular proposal on the building’s character.",
    "• The likely consent route for a particular proposal.",
  ],
};

const CURRENT_PROJECT_INFORMATION: EvidenceItem = {
  id: "current-project-information",
  label: "Current project information",
  body: [
    "CLIENT ENQUIRY",
    "• Client identifies the house as Grade II listed.",
    "• Proposed work includes a rear extension, ground-floor changes, energy improvements and window work.",
    "• The brief refers to a former coach house, boundary wall and incomplete records of earlier work.",
    "OFFICIAL LISTING ENTRY",
    "• The Old Vicarage, Church Lane, Ashcombe, is Grade II listed.",
    "• The entry identifies an early C19 house with later C19 and C20 alterations.",
    "• The entry notes alterations to the rear range and a small single-storey addition.",
    "EARLY PROJECT PRIORITIES",
    "• No measured survey, fabric investigation, consent history or developed proposal is currently available.",
  ],
};

const CLIENT_FOLLOW_UP: EvidenceItem = {
  id: "client-follow-up",
  label: "Client follow-up",
  body: [
    "Thank you for the initial review. We would like to move quickly and are keen to know whether the rear extension and internal changes are likely to be acceptable. If possible, we would like to work towards a spring start.",
    "Can you now advise which option we should pursue and whether consent will be needed?",
  ],
};

const HERITAGE_RECORD_EXTRACT: EvidenceItem = {
  id: "heritage-record-extract",
  label: "Current Heritage Record extract",
  body: [
    "TO ESTABLISH",
    "• Significance, condition and contribution of spaces, fabric and features likely to be affected.",
    "• Nature, extent and approval history of earlier work.",
    "• Status and significance questions for the former coach house and boundary wall.",
    "• Information needed to understand the effect of the developing proposal on the building and its setting.",
    "KEEP UNDER REVIEW",
    "• Whether emerging design choices affect significant fabric, spaces, setting or associated features.",
    "• The extent to which the rear extension, internal changes, energy measures and window strategy affect the heritage position.",
    "• The proportionate level of heritage information required as the project becomes more specific.",
  ],
};

const MODULE_1_OUTPUTS: EvidenceItem = {
  id: "module-1-outputs",
  label: "Module 1 outputs",
  body: [
    "• The commission request and client-held information have been recorded.",
    "• The principal listed asset has been verified against the current official entry.",
    "• The limits of the listing entry have been identified.",
    "• Heritage matters have been organised into Known, To establish and Keep under review.",
    "• The first heritage decision point has been recorded.",
  ],
};

/** A one-line summary of a record, used as Project Material in later chapters. */
export function initialHeritagePositionEvidence(record: HeritageRecordState): EvidenceItem {
  return {
    id: "initial-heritage-position",
    label: "Heritage Record so far",
    body: [
      `Known: ${recordTextToString(record.known)}`,
      `To establish: ${recordTextToString(record.toEstablish)}`,
    ],
  };
}

// --- Pages -------------------------------------------------------------------

export type WorkedExample = {
  paragraphs: string[];
  groups?: { heading: string; items: string[] }[];
};

export type Module1Page = {
  number: number;
  title: string;
  /** Editorial status from the source document - "draft" pages show a review notice. */
  contentStatus: "agreed" | "draft";
  minutes: number;
  /** Paragraphs separated by "\n". */
  projectMoment: string;
  task: string;
  taskDetail: string;
  evidence: EvidenceItem[];
  /** Material readable before the learner answers; everything else unlocks on answering. */
  alwaysAvailableEvidenceIds: string[];
  question: string;
  /** A statement the question is about (shown under the question), when there is one. */
  questionContext?: string;
  options: string[];
  expectedIndex: number;
  /** Bespoke feedback per option, indexed to `options`. Paragraphs separated by "\n". */
  optionFeedback: string[];
  recordBefore: HeritageRecordState;
  recordAfter: HeritageRecordState;
  workedExample: WorkedExample;
  comparisonCard?: ComparisonCardContent;
  whyThisMatters: string;
  saveLabel: string;
  continueLabel: string;
  continueCue: string;
};

const SAVE_TO_RECORD = "Save to Heritage Record";

export const MODULE_1_PAGES: Module1Page[] = [
  // --- Page 1 - Client enquiry received (agreed content) ---
  {
    number: 1,
    title: "Client enquiry received",
    contentStatus: "agreed",
    minutes: 1,
    projectMoment:
      "A homeowner has asked for a fee proposal for alterations to The Old Vicarage, a house they bought last year. Their enquiry describes a rear extension, ground-floor alterations, energy improvements and window work. They identify the house as Grade II listed, refer to a detached former coach house and boundary wall, and explain that records of earlier work are incomplete.\nThe client’s information is enough to begin a heritage review. It is not enough to define the heritage position, consent route or scope of advice.",
    task: "Decide whether this brief needs a Heritage Record review.",
    taskDetail:
      "If it does, identify the most useful first heritage addition to the brief before scope and fee are defined.",
    evidence: [CLIENT_ENQUIRY, EXISTING_HOUSE, EXISTING_PLAN, LOCATION_CONTEXT_NOTE],
    alwaysAvailableEvidenceIds: [CLIENT_ENQUIRY.id],
    question: "What is the most useful first heritage addition to this brief?",
    options: [
      "No further heritage entry is needed at this stage. The client has identified the house as listed, so the architect can address heritage matters when developing the application.",
      "Record that listed building consent will be required for the extension, internal changes, window work and boundary-wall alterations.",
      "Record what needs verifying or establishing: the current listing record and what it identifies; the available consent history for earlier work; and the status/significance of the former coach house and boundary wall before future work to them is assumed.",
      "Require a full heritage impact assessment before providing a fee proposal.",
    ],
    expectedIndex: 2,
    optionFeedback: [
      "The client’s statement that the house is listed is a reason to begin a heritage review, not a reason to defer it.\nThe proposed works, incomplete records and associated features may affect what needs to be established before scope, fee, programme and later decisions can be defined responsibly. The next step is not to resolve everything now, but to record the questions that need verification or proportionate investigation.",
      "This reaches a consent conclusion too early.\nThe proposed works may raise listed-building-consent questions, but the current listing record, the specific fabric affected, the extent of earlier work and the position of associated structures have not yet been verified. Record what needs establishing before defining the likely route.",
      "This is the strongest first addition.\nIt records the heritage trigger and the information gaps without treating the client’s description as verified, deciding the consent route, or prescribing a report before the project’s heritage questions are understood.",
      "This is over-prescriptive at this stage.\nFurther heritage input may become proportionate, but the material currently available does not justify prescribing a full heritage impact assessment before verifying the listed asset, understanding the proposal and identifying the project’s actual heritage questions.",
    ],
    recordBefore: HERITAGE_RECORD_INITIAL,
    recordAfter: RECORD_AFTER_PAGE_1,
    workedExample: {
      paragraphs: [
        "At instruction, the client enquiry does not provide a complete heritage position. It provides enough information to begin a Heritage Record review.",
        "The first record should distinguish the client’s information from matters that must be verified or established. It should not assume that the list entry is complete, that associated structures have a particular status, that earlier work was approved, or that a particular consent or report will be required.",
      ],
      groups: [
        {
          heading: "Known from the client enquiry",
          items: [
            "The client identifies the principal house as Grade II listed.",
            "The immediate proposal includes a rear extension, ground-floor changes, energy improvements and window work.",
            "The site includes a boundary wall and detached former coach house.",
            "Records of earlier work are incomplete.",
          ],
        },
        {
          heading: "To verify or establish",
          items: [
            "Current listing record and its limits.",
            "Available approval / consent history.",
            "Relevant status and significance questions for associated structures.",
            "The proportionate heritage information needed before project assumptions harden.",
          ],
        },
      ],
    },
    comparisonCard: {
      heading: "If the heritage trigger were a conservation area, Article 4 direction or local listing",
      intro: "An unlisted building can still require an early heritage review.",
      sections: [
        {
          heading: "Verify",
          items: [
            "Whether the site lies within the current conservation-area boundary.",
            "Whether a relevant Article 4 direction applies to the property or proposed work.",
            "Whether the building appears on the local authority’s current local heritage list.",
          ],
        },
        {
          heading: "Do not assume",
          items: [
            "That conservation-area designation or local listing determines the significance of every feature.",
            "That an Article 4 direction applies without checking its exact wording, area and affected development rights.",
            "That a local-list entry itself decides whether planning permission is needed or what design response will be acceptable.",
          ],
        },
        {
          heading: "Record",
          items: [
            "The verified designation or control under “Known”.",
            "The building’s contribution, relevant policy/history and proposal-specific effects under “To establish” or “Keep under review”.",
          ],
        },
      ],
    },
    whyThisMatters:
      "A client’s statement that a house is listed is enough to trigger a heritage review, but not enough to define the project route.\nThe first Heritage Record entry identifies what must be verified or established before assumptions about scope, fee, programme, consent or specialist input become fixed.",
    saveLabel: "Save initial heritage position",
    continueLabel: "Continue: Verify the listed asset",
    continueCue:
      "The client identifies The Old Vicarage as Grade II listed. Next, check the current official listing record and distinguish what it establishes from what still requires investigation.",
  },

  // --- Page 2 - Verify the listed asset (draft) ---
  {
    number: 2,
    title: "Verify the listed asset",
    contentStatus: "draft",
    minutes: 1,
    projectMoment:
      "Before the brief can be priced or the likely project route discussed, the client’s statement about listing needs to be checked against the current official record.\nThe listing entry is now available. It identifies the listed asset and provides an official starting point. It is not a complete account of every part of the building, its significance or the consent implications of proposed work.",
    task: "Read the official listing entry and identify what can now be recorded as verified.",
    taskDetail: "Record only what the entry establishes. Keep the questions it does not answer open.",
    evidence: [LISTING_ENTRY, LISTING_ENTRY_NOTE],
    alwaysAvailableEvidenceIds: [LISTING_ENTRY.id, LISTING_ENTRY_NOTE.id],
    question: "What is the most useful verified addition to the Heritage Record after reading this entry?",
    options: [
      "The Old Vicarage is Grade II listed; the entry identifies the principal house at Church Lane, Ashcombe, and describes an early C19 house with later alterations.",
      "The Old Vicarage, its former coach house and its boundary wall are all Grade II listed.",
      "The rear range and single-storey addition have limited heritage significance because the entry says they were altered later.",
      "The entry confirms that listed building consent will be required for the proposed extension, window work and internal changes.",
    ],
    expectedIndex: 0,
    optionFeedback: [
      "This is the strongest verified addition.\nIt records the listed asset’s identity, grade and the limited description provided by the official entry. It does not turn the entry into a complete statement of significance, protection or consent requirements.",
      "The entry identifies the principal listed building. It does not, on its own, establish the status of detached structures or boundary features.\nKeep the former coach house and boundary wall under “To establish” rather than recording a conclusion.",
      "Later alteration does not settle significance.\nThe entry indicates that parts of the building have changed, but it does not tell you the significance, condition, contribution or consent history of the altered areas. Those remain questions for proportionate investigation.",
      "This reaches a consent conclusion that the entry cannot make.\nA listing entry identifies the listed asset; it does not decide the effect of specific proposed works on character or determine the consent route. Record the verified listing information and retain the proposal-specific questions.",
    ],
    recordBefore: RECORD_AFTER_PAGE_1,
    recordAfter: RECORD_AFTER_PAGE_2,
    workedExample: {
      paragraphs: [
        "The listing entry changes one important part of the record: the listed asset is now verified.",
        "It does not convert an early client enquiry into a complete heritage assessment. The entry is a reliable source for identity, grade and its own wording. It is not evidence that every feature omitted from the description is unimportant, nor a decision about the proposed works.",
      ],
    },
    whyThisMatters:
      "Verifying the listed asset prevents a project from being scoped around an untested client description.\nReading the entry accurately is equally important: record what it establishes, but do not claim that it answers questions about significance, associated structures, earlier work or consent.",
    saveLabel: SAVE_TO_RECORD,
    continueLabel: "Continue: What the entry does not answer",
    continueCue:
      "The asset is now verified. Next, separate the questions the listing entry can answer from the heritage questions it leaves open.",
  },

  // --- Page 3 - What the entry does not answer (draft) ---
  {
    number: 3,
    title: "What the entry does not answer",
    contentStatus: "draft",
    minutes: 1,
    projectMoment:
      "The listing entry confirms the identity and grade of The Old Vicarage. The client now asks whether the rear extension, internal changes and window work are likely to be straightforward.\nThe entry gives useful starting information, but the project questions are more specific than the entry. Before a preferred approach or consent route is discussed as settled, the outstanding questions need to be visible in the Heritage Record.",
    task: "Identify the heritage questions that remain open after the listing entry has been checked.",
    taskDetail:
      "Distinguish between a verified fact and a question that still needs proportionate investigation.",
    evidence: [EARLY_CLIENT_PRIORITIES, LISTING_ENTRY_NOTE_EXTRACT],
    alwaysAvailableEvidenceIds: [EARLY_CLIENT_PRIORITIES.id, LISTING_ENTRY_NOTE_EXTRACT.id],
    question: "Which statement best records the position after the entry has been checked?",
    options: [
      "The entry settles the heritage position because it identifies the building’s date, form and later alterations. The next step is to develop the preferred design.",
      "The entry verifies the listed asset, but further work is needed to understand the significance of affected fabric and spaces, earlier changes, associated structures and the effect of the developing proposal.",
      "Because the rear range has been altered, the extension and internal changes can be treated as lower-risk work without further investigation.",
      "The entry does not contain enough detail, so no heritage position can be recorded until a full heritage assessment is commissioned.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "The entry gives a starting point, not a complete heritage position.\nIt verifies the listed asset and records some descriptive information, but it does not settle the significance of the affected fabric, the history of change, associated structures or the effect of a developing design.",
      "This is the strongest position.\nIt separates what is verified from the project questions that remain open. That allows the project to move forward with proportionate investigation rather than false certainty or unnecessary delay.",
      "Later change does not automatically mean low significance or low risk.\nThe rear range may be relevant to the building’s development, use or character. The proposal’s effect on it, and on any surviving earlier fabric, still needs to be understood.",
      "The information is incomplete, but that does not mean no useful position can be recorded.\nThe Heritage Record should capture what is known and identify what needs establishing. Whether more formal assessment is needed can be decided proportionately as the proposal and evidence develop.",
    ],
    recordBefore: RECORD_AFTER_PAGE_2,
    recordAfter: RECORD_AFTER_PAGE_3,
    workedExample: {
      paragraphs: [
        "The list entry answers a narrow but important question: which principal asset is listed and how the official record describes it.",
        "The design work raises different questions. A Heritage Record should make those questions visible before the project begins to treat a concept, a budget allowance or a consent route as settled.",
      ],
    },
    whyThisMatters:
      "The most common early error is not failing to find the list entry. It is treating the entry as if it resolves the whole heritage position.\nA proportionate record keeps investigation focused on the actual project: the building, the proposed works and the information needed for the next decision.",
    saveLabel: SAVE_TO_RECORD,
    continueLabel: "Continue: Build the Heritage Record",
    continueCue:
      "The verified facts and open questions are now clear. Next, organise them into a working Heritage Record that can guide the brief and project decisions.",
  },

  // --- Page 4 - Build the Heritage Record (draft) ---
  {
    number: 4,
    title: "Build the Heritage Record",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The client enquiry, official listing entry and early project priorities now provide enough information to create a useful first Heritage Record.\nThe purpose is not to produce a finished assessment. It is to keep verified facts, outstanding questions and emerging risks distinct while the brief and proposal are still developing.",
    task: "Organise the current heritage information into the Heritage Record.",
    taskDetail:
      "Use the headings “Known”, “To establish” and “Keep under review” so that facts, information gaps and future project questions are not confused.",
    evidence: [CURRENT_PROJECT_INFORMATION],
    alwaysAvailableEvidenceIds: [CURRENT_PROJECT_INFORMATION.id],
    question: "Where should this statement sit in the Heritage Record?",
    questionContext:
      "“The official listing entry identifies The Old Vicarage, Church Lane, Ashcombe, as Grade II listed.”",
    options: ["Known", "To establish", "Keep under review", "Decision points"],
    expectedIndex: 0,
    optionFeedback: [
      "This is the strongest placement.\nThe official entry verifies the identity and Grade II designation of the principal listed asset. Record it as a known fact, while keeping the questions that the entry does not answer elsewhere in the record.",
      "This has already been verified through the official entry.\n“To establish” is for questions such as the significance of affected fabric, the history of earlier changes and the status of associated structures.",
      "The listed status itself is not an emerging design question.\nRecord it under “Known”. The effect of evolving proposals on the listed building is the kind of matter that belongs under “Keep under review”.",
      "The designation is an established project fact, not a point at which the project must pause for a future decision.\nDecision points will be added when the project identifies information that must be in place before a concept, scope or route can be treated as settled.",
    ],
    recordBefore: RECORD_AFTER_PAGE_3,
    recordAfter: RECORD_AFTER_PAGE_4,
    workedExample: {
      paragraphs: [
        "A useful Heritage Record is not a single undifferentiated list of heritage issues.",
        "“Known” holds verified project facts. “To establish” holds information that is needed but not yet known. “Keep under review” holds questions that depend on how the brief and design develop. This distinction makes the record usable in conversations about scope, fee, programme and next actions.",
      ],
    },
    whyThisMatters:
      "When verified facts, assumptions and future questions are mixed together, a project can appear more certain than it is.\nA structured Heritage Record makes it possible to progress the project while showing exactly what remains to be established before important choices are fixed.",
    saveLabel: SAVE_TO_RECORD,
    continueLabel: "Continue: Set the first decision point",
    continueCue:
      "The Heritage Record now separates verified facts, information gaps and evolving design questions. Next, identify what must be established before the project treats a preferred concept or likely route as settled.",
  },

  // --- Page 5 - Set the first heritage decision point (draft) ---
  {
    number: 5,
    title: "Set the first heritage decision point",
    contentStatus: "draft",
    minutes: 1,
    projectMoment:
      "The client would like an early view on whether a rear extension and internal reconfiguration can be pursued, and whether a spring start remains realistic.\nThe Heritage Record now identifies the main heritage questions. The next step is to make clear which information must be available before the project commits to a preferred concept, programme assumption or likely consent route.",
    task: "Set the first heritage decision point.",
    taskDetail:
      "Identify what needs to be established before the project presents a preferred concept or consent route as settled.",
    evidence: [CLIENT_FOLLOW_UP, HERITAGE_RECORD_EXTRACT],
    alwaysAvailableEvidenceIds: [CLIENT_FOLLOW_UP.id, HERITAGE_RECORD_EXTRACT.id],
    question: "What is the most useful first heritage decision point to record?",
    options: [
      "Confirm immediately that the preferred rear-extension concept is acceptable and set the consent route once the client selects a style.",
      "Before treating a preferred concept or likely consent route as settled, establish the affected fabric and spaces, relevant earlier changes, and the proposal’s likely effect on the listed building and its setting.",
      "Pause all design work until every question about the house, coach house and boundary wall has been resolved.",
      "Record that listed building consent will be required before any further design work can begin.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "This commits the project too early.\nThe client can explore options, but the Heritage Record shows that key questions about affected fabric, earlier change and the effect of the proposal remain open. A preferred concept should not be treated as settled before those questions are addressed proportionately.",
      "This is the strongest first decision point.\nIt does not stop design work or prescribe a final route. It identifies the information needed before the project presents a concept, programme assumption or likely consent route as settled.",
      "This is more restrictive than the current information requires.\nThe project can continue to develop proportionately. The decision point is not “know everything before doing anything”; it is “establish the information that matters before fixing an important project position.”",
      "This reaches a consent conclusion too early.\nThe Heritage Record should identify what needs to be understood before a consent route is treated as likely or settled. It should not use the early brief to make a blanket determination.",
    ],
    recordBefore: RECORD_AFTER_PAGE_4,
    recordAfter: RECORD_AFTER_PAGE_5,
    workedExample: {
      paragraphs: [
        "A decision point is not a blanket instruction to stop work. It is a clear threshold for confidence.",
        "Here, the project can develop options and discuss priorities. What it should not do is present an option, a programme or a consent expectation as settled before the relevant heritage questions have been investigated proportionately.",
      ],
    },
    whyThisMatters:
      "Early heritage risk often becomes expensive when a project commits to a preferred design, fee allowance or programme before understanding the fabric and significance affected.\nRecording the decision point protects both the client conversation and the design process: it makes clear what can progress now and what must be established before the next commitment.",
    saveLabel: SAVE_TO_RECORD,
    continueLabel: "Continue: Complete Chapter 1",
    continueCue:
      "The project now has a verified listed asset, a clear record of open heritage questions and its first decision point. Review what has been created and why it matters for the next stage.",
  },

  // --- Page 6 - Chapter 1 complete (draft) ---
  {
    number: 6,
    title: "Chapter 1 complete",
    contentStatus: "draft",
    minutes: 1,
    projectMoment:
      "You have received the client enquiry, verified the principal listed asset, identified the limits of the official entry and created the first working Heritage Record.\nThe project has not yet reached a design or consent conclusion. It now has a clearer basis for defining the next proportionate steps.",
    task: "Review the Heritage Record created at receiving-the-brief stage.",
    taskDetail:
      "Identify what it enables the project to do next—and what it deliberately does not yet decide.",
    evidence: [MODULE_1_OUTPUTS],
    alwaysAvailableEvidenceIds: [MODULE_1_OUTPUTS.id],
    question: "What has Module 1 achieved?",
    options: [
      "It has determined that the client’s proposed works are acceptable and confirmed the consent route.",
      "It has created a working heritage position: verified the listed asset, recorded what is known, identified what needs establishing, and set a decision point before key project assumptions are fixed.",
      "It has completed the heritage assessment needed for the whole project.",
      "It has shown that the project cannot proceed until every heritage question is resolved.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Module 1 does not determine that a particular proposal is acceptable or confirm a consent route.\nIt creates the informed starting position needed before those later project decisions can be made responsibly.",
      "This is the strongest summary.\nThe Heritage Record now distinguishes verified facts from open questions and identifies the first point at which further information is needed before the project commits to a position.",
      "Module 1 is an early-stage review, not a completed heritage assessment.\nIts value is that it makes the next proportionate enquiries and decision points visible before the project fixes its scope, design or programme assumptions.",
      "The project can progress, but it should do so with the Heritage Record in view.\nThe record identifies what needs to be established before key commitments are made; it does not require every question to be resolved before the next stage begins.",
    ],
    recordBefore: RECORD_AFTER_PAGE_5,
    recordAfter: HERITAGE_RECORD_MODULE_1_COMPLETE,
    workedExample: {
      paragraphs: [
        "The Heritage Record is not a legal determination, a consent application or a completed assessment. It is a working project record.",
        "At the end of Module 1, it gives the architect and client a shared account of what is verified, what remains to be established and what must happen before the project treats an important position as settled.",
      ],
    },
    whyThisMatters:
      "Receiving the brief is the point at which assumptions about cost, scope, timing and project route begin to form.\nThe Heritage Record keeps heritage matters connected to those early decisions without pretending that the available information can answer every later question.",
    saveLabel: "Save and complete Chapter 1",
    // Source reads "Begin Module 2: Prepare the brief"; Peter chose (30 Sep
    // 2026) to keep the existing Chapter 2 title, so the label and cue are
    // adapted to it. Flagged for content review.
    continueLabel: "Begin Module 2: Understanding the existing building and place",
    continueCue:
      "The Heritage Record now provides the starting position for the next stage: understanding the existing building and place, so the outstanding heritage questions can be addressed proportionately.",
  },
];
