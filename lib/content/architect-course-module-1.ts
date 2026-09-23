/**
 * "Receiving the brief" - Module 1 of Heritage Design Risk for
 * Architects. Rebuilt (23 Sep 2026) from
 * architect-course-module-1-wireframe-v3.md around an evidence-led
 * learning loop - predict, inspect, add/revise, compare, understand,
 * save - applied consistently to all three activities, with a
 * heritage-only Heritage Record (no ordinary project-management
 * tracking - see the wireframe's own "must not teach generic
 * briefing" rule).
 *
 * Per explicit instruction (23 Sep 2026): this is a content/interaction
 * prototype only. No backend/persistence architecture - state lives in
 * the browser tab for this session. The reusable template is built
 * through Module 1 only; do not extend it into later modules yet.
 */

export const MODULE_TITLE = "Heritage Considerations in Practice";

/** Illustrative only - see this file's own v2-era note; unchanged in v3. */
export const TOTAL_COURSE_MINUTES = 56;

export const PROJECT_CONTEXT = {
  project: "42 Church Street",
  projectType: "Alterations and rear extension to an existing house",
  clientAmbition:
    "More family space, improved energy performance and a clearer connection to the garden",
  programme:
    "Initial options in four weeks; intended application within the year; hoped-for start on site next spring",
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
  known: "Initial limitations and context noted",
  toEstablish: "Context, controls, associated structures, existing changes and route",
  keepUnderReview: "Not yet started",
  decisionPoints: "Not yet set",
};

export const HERITAGE_RECORD_AFTER_ACTIVITY_2: HeritageRecordState = {
  completed: [
    "Initial heritage position recorded",
    "Heritage Considerations Addendum - version 1",
  ],
  known: "Initial limitations and context noted",
  toEstablish: "Context, controls, structures and information requirements",
  keepUnderReview: "Effects and changed implications as design develops",
  decisionPoints: "Not yet set",
};

export const HERITAGE_RECORD_AFTER_ACTIVITY_3: HeritageRecordState = {
  completed: [
    "Initial heritage position recorded",
    "Heritage Considerations Addendum - version 1",
    "Heritage decision point recorded",
  ],
  known: "Initial limitations and context noted",
  toEstablish: "Context, controls, structures and information requirements",
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
    "Hello,",
    "We are hoping to buy 42 Church Street and would like an initial view on whether we can make it work for our family. The house needs more usable space and we would like a rear extension, new windows where necessary and some internal changes downstairs.",
    "The agent has said that the property is not listed, so we do not think there should be anything unusual. It is in an attractive older part of the town, but we assume the main issue will be getting planning permission for the extension.",
    "We would like to move quickly after exchange. We have allowed for a straightforward design and planning process, and ideally want work to start next spring.",
    "Many thanks,",
    "A prospective client",
  ],
};

export const EXISTING_PLAN: EvidenceItem = {
  id: "existing-plan",
  label: "Existing plan",
  body: ["A simple existing floor plan sketch, supplied by the client's estate agent."],
};

export const SITE_PHOTOGRAPHS: EvidenceItem = {
  id: "site-photographs",
  label: "Site photographs",
  body: [
    "A handful of exterior photographs of the house, garden and rear outbuilding, taken by the client on a viewing.",
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
    "The house is not identified as nationally listed in the initial information.",
    "It lies in an older town-centre area.",
    "A listed former school is shown nearby on initial mapping.",
    "The site boundary includes a rear outbuilding and boundary wall.",
    "No conservation-area, Article 4, local-listing, consent-history or local-validation check has yet been recorded.",
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

// --- Activity 1: Identify the heritage addition to the brief --------------

export const ACTIVITY_1 = {
  projectMoment:
    "Receiving the brief: normal briefing is underway. The client's objectives, broad scope, budget and programme are being discussed in the usual way.",
  heritageQuestion:
    "What additional heritage consideration should be recorded now, before the project is treated as having a settled design-and-consent route?",
  whyNow:
    "Client assumptions about designation or planning route can shape expectations before the information needed to test them has been gathered.",
  predictionPrompt: "Before you open the project material, which description best captures the heritage position?",
  predictionOptions: [
    "The building itself is likely to be the heritage asset.",
    "The building is unlikely to be an asset, but the proposal may affect heritage context.",
    "Both may apply.",
    "There is not yet enough information to know; the heritage position needs recording as an information gap.",
  ],
  predictionExpectedIndex: 3,
  predictionFeedback:
    "A useful first response is not a conclusion. At instruction, record whether heritage may be relevant and what needs checking before the brief assumes a simple route.",
  evidence: [CLIENT_ENQUIRY, SITE_PHOTOGRAPHS, EXISTING_PLAN, LOCATION_CONTEXT_NOTE],
  knownEntry: [
    "The building is not identified as nationally listed in the initial information.",
    "The project is in an older town-centre context and is close to a listed building.",
    "Existing information does not establish conservation-area status, local controls, the status of the outbuilding/boundary wall, or the project's wider heritage context.",
  ],
  worked: {
    known: [
      "The house is not identified as nationally listed in available initial information.",
      "The project may be heritage-sensitive because of its older context, nearby listed building and associated outbuilding/boundary features.",
    ],
    toEstablish: [
      "Conservation-area status, relevant local controls and nearby/local heritage designations.",
      "Whether existing building/associated structures and previous alterations require further investigation.",
      "Whether heritage considerations affect the anticipated consent and application-information route.",
    ],
  },
  whyThisMatters:
    "“Not listed” does not settle the heritage position. The heritage addition at instruction is to record the possible routes by which context, associated structures, local controls or effects on other assets may alter the information needed before design direction is fixed.",
  saveLabel: "Save initial heritage position",
  carryForwardCue: "You have recorded the initial heritage position. Next, turn it into the specific additions that should travel with the brief.",
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
    text: "Whether the outbuilding or boundary wall needs further heritage/context investigation.",
    suggestedHeading: "A",
  },
  {
    id: "existing-changes",
    text: "Existing changes, historic fabric and available consent/approval records.",
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
    "Receiving the brief: normal briefing is continuing. The project now needs a concise heritage addition alongside the ordinary brief.",
  heritageQuestion:
    "What heritage information, allowance and review point should be added now - without deciding the outcome of the eventual proposal?",
  whyNow:
    "Heritage considerations are most useful when they influence what is established before a design option, programme or consent route becomes an assumption.",
  predictionPrompt: "Before you open the Heritage Record, which category does this question belong in?",
  predictionQuestion: "“Does the outbuilding or boundary wall need further heritage/context investigation?”",
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
    "A heritage consideration can arise because the project affects an asset directly, or because it may affect an asset, historic place or local control beyond the building itself.",
    "Use the available information to create a concise addendum. Do not attempt to decide what the proposal can achieve yet.",
  ],
  compareInstruction:
    "Compare the entries, not just the selections. The aim is to frame the heritage addition as a live record: what is not known yet, what may need allowance, and what must be revisited as the design develops.",
  whyThisMatters:
    "The addendum does not tell the project team what to design. It prevents a heritage-sensitive question being lost inside an assumed “standard” route. Some entries may fall away after proportionate checks; others may become more important as evidence and proposals develop.",
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
    "Receiving the brief: the client wants initial options in four weeks and expects an ordinary planning route. The normal project programme is moving forward.",
  heritageQuestion:
    "What heritage decision point should be recorded before the project treats a preferred option or consent route as settled?",
  whyNow:
    "The value of an early heritage record is lost if it does not affect the point at which design and client assumptions become commitments.",
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
