/**
 * "Receiving the brief" - Module 1 of Heritage Design Risk for
 * Architects. Rebuilt (23 Sep 2026) from
 * architect-course-module-1-wireframe-v2.md around a reusable
 * learning-screen template (course bar, stage/activity header, why-now,
 * project file, evidence tray, working surface, save/continue) instead
 * of one-off screens - see components/course/Module1Experience.tsx and
 * components/course/LearningScreenShell.tsx.
 *
 * Explicitly a content/interaction prototype, not a finished product:
 * state lives only in the browser tab for this session (no accounts,
 * no backend) - see this file's own "illustrative" notes below for
 * what's a placeholder until the full course exists.
 */

export const MODULE_TITLE = "Heritage Considerations in Practice";

/**
 * Illustrative only - there's no real total yet since only this one
 * module (of an eventual much longer course) has been built. Chosen to
 * roughly match the wireframe's own worked example ("8% complete ·
 * about 51 min left"). Replace once the full curriculum's module count
 * and time estimates are set.
 */
export const TOTAL_COURSE_MINUTES = 56;

export const STAGE_LABEL = "1. Receiving the brief";

export const PROJECT_CONTEXT = {
  project: "42 Church Street",
  projectType: "Alterations and extension to an existing house",
  clientAmbition:
    "More usable family space, improved energy performance and a clearer connection to the garden",
  programme:
    "Initial options in four weeks; target application this year; hoped-for start on site next spring",
  budget: "To be confirmed after feasibility",
};

// --- Project file (the persistent, accumulating record) ----------------

export type ProjectFileRow = { label: string; status: string; emphasis?: boolean };
export type ProjectFileState = {
  briefRows: ProjectFileRow[];
  outputs: ProjectFileRow[];
};

export const PROJECT_FILE_INITIAL: ProjectFileState = {
  briefRows: [
    { label: "Client objectives", status: "Recorded" },
    { label: "Budget and programme", status: "Initial only" },
    { label: "Existing-building information", status: "Partial" },
    { label: "Heritage considerations", status: "Not yet added" },
  ],
  outputs: [
    { label: "Heritage Considerations Addendum", status: "Not started" },
    { label: "Pre-design decision gate", status: "Not started" },
  ],
};

export const PROJECT_FILE_AFTER_ACTIVITY_1: ProjectFileState = {
  briefRows: [
    { label: "Client objectives", status: "Recorded" },
    { label: "Budget and programme", status: "Initial only" },
    {
      label: "Existing-building information",
      status: "Partial - baseline to establish",
      emphasis: true,
    },
    { label: "Heritage considerations", status: "To add", emphasis: true },
    { label: "Planning / consent route", status: "To establish", emphasis: true },
  ],
  outputs: PROJECT_FILE_INITIAL.outputs,
};

export const PROJECT_FILE_AFTER_ACTIVITY_2: ProjectFileState = {
  briefRows: PROJECT_FILE_AFTER_ACTIVITY_1.briefRows.map((row) =>
    row.label === "Heritage considerations"
      ? { label: row.label, status: "Addendum v1 saved", emphasis: true }
      : row
  ),
  outputs: [
    { label: "Heritage Considerations Addendum", status: "Version 1", emphasis: true },
    { label: "Pre-design decision gate", status: "Not started" },
  ],
};

export const PROJECT_FILE_AFTER_ACTIVITY_3: ProjectFileState = {
  briefRows: PROJECT_FILE_AFTER_ACTIVITY_2.briefRows,
  outputs: [
    { label: "Heritage Considerations Addendum", status: "Version 1" },
    { label: "Pre-design decision gate", status: "Agreed", emphasis: true },
  ],
};

// --- Evidence -----------------------------------------------------------

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
    "A listed former school is shown on mapping nearby.",
    "The site boundary includes a rear outbuilding and boundary wall.",
    "No conservation-area, Article 4, local-listing, consent-history or local-validation check has yet been recorded.",
  ],
};

// --- Activity 1: Set up the project brief -------------------------------

export const ACTIVITY_1 = {
  activityLabel: "Set up the project brief",
  activityIndexLabel: "Activity 1 of 3 · about 2 min",
  whyNow:
    "Before scope and programme harden, make the additional heritage considerations visible in the normal brief.",
  openingInstruction:
    "The client has supplied the usual early information for an initial briefing conversation. Review the project material and identify the parts of the brief that cannot yet be treated as settled.",
  evidence: [CLIENT_ENQUIRY, EXISTING_PLAN, SITE_PHOTOGRAPHS, INITIAL_PROGRAMME_NOTE],
  briefStatusRows: [
    {
      label: "Client objectives",
      detail:
        "More family space, improved energy performance and better connection to garden.",
      status: "Recorded",
      selectable: false,
    },
    {
      label: "Budget and programme",
      detail: "Budget to be confirmed after feasibility. Initial options requested in four weeks.",
      status: "Initial only",
      selectable: false,
    },
    {
      label: "Existing-building information",
      detail: "Plan, photographs and agent information available.",
      status: "Partial",
      selectable: true,
    },
    {
      label: "Planning / consent route",
      detail: "Client assumes a standard planning route.",
      status: "To establish",
      selectable: true,
    },
    {
      label: "Heritage considerations",
      detail: "No heritage information recorded.",
      status: "Add now",
      selectable: true,
    },
  ],
  prompt: "Which brief lines should remain open before the project is treated as a straightforward design-and-planning commission?",
  feedback: {
    heading: "Correct.",
    body: "The client's objectives can be recorded, but the information needed to confirm scope, programme and project route is incomplete. At this point, no conclusion is required about acceptability, consent or the exact level of heritage work. The next professional task is to record what heritage may add to the brief and what needs establishing.",
  },
  saveLabel: "Save initial brief status",
  savedConfirmation:
    "Initial brief status saved. You have identified the project lines that cannot yet be treated as settled.",
  forwardCue: "Next, add the heritage considerations that need to sit alongside the normal brief.",
};

// --- Activity 2: Add heritage considerations ----------------------------

export type AddendumHeading = "A" | "B" | "C";

export const ADDENDUM_HEADINGS: { key: AddendumHeading; label: string }[] = [
  { key: "A", label: "Establish before the brief is fixed" },
  { key: "B", label: "Allow for in scope, programme or appointments" },
  { key: "C", label: "Keep under review as the proposal develops" },
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
    text: "Article 4 direction coverage and the types of work affected.",
    suggestedHeading: "A",
  },
  {
    id: "nearby-assets",
    text: "Nearby designated or locally listed assets and possible setting considerations.",
    suggestedHeading: "A",
  },
  {
    id: "outbuilding",
    text: "Whether the rear outbuilding or boundary wall requires further heritage/context investigation.",
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
    text: "Whether additional research, survey, assessment or specialist input is proportionate before concept direction is fixed.",
    suggestedHeading: "B",
  },
  {
    id: "route-adjustment",
    text: "Whether the consent route, scope, programme or budget needs adjustment as the baseline becomes clearer.",
    suggestedHeading: "B",
  },
  {
    id: "emerging-effects",
    text: "Effects of the emerging proposal on character, appearance, fabric, setting and any relevant asset.",
    suggestedHeading: "C",
  },
];

export const ACTIVITY_2 = {
  activityLabel: "Add heritage considerations",
  activityIndexLabel: "Activity 2 of 3 · about 3 min",
  whyNow:
    "Record the additional heritage considerations that may affect information, scope, programme or design decisions later.",
  openingInstruction: [
    "A heritage consideration can arise because the project affects an asset directly, or because it may affect an asset, historic place or local control beyond the building itself.",
    "Use the available information to create a concise addendum to the brief. Do not attempt to decide what the proposal can achieve yet.",
  ],
  evidence: [CLIENT_ENQUIRY, SITE_PHOTOGRAPHS, LOCATION_CONTEXT_NOTE, INITIAL_PROGRAMME_NOTE],
  feedback: {
    heading: "The addendum does not decide the scheme.",
    body: "It makes the additional heritage considerations visible in the same place as the client objectives, programme and other project constraints. Some of these items may prove not to affect the final proposal. Their value at this stage is that the team does not treat uncertainty as an answer.",
  },
  saveLabel: "Save Heritage Considerations Addendum",
  savedConfirmation: "Heritage Considerations Addendum saved to the project file.",
  forwardCue: "You have identified what needs establishing. Now agree the point at which this information must inform the project.",
};

// --- Activity 3: Agree the pre-design decision gate ---------------------

export const DECISION_GATE_OPTIONS = [
  "Start option design immediately. Heritage information can be considered when preparing the application.",
  "Commission a full heritage statement before any further client or design discussion.",
  "Establish the heritage baseline and likely information/consent route proportionately before the client treats a preferred concept, programme or consent route as settled.",
  "Wait for the local planning authority to identify heritage requirements after a planning application is submitted.",
] as const;

export const DECISION_GATE_EXPECTED_INDEX = 2;

export const ACTIVITY_3 = {
  activityLabel: "Agree the pre-design decision gate",
  activityIndexLabel: "Activity 3 of 3 · about 2 min",
  whyNow:
    "Set the point at which the additional heritage information must inform the project before design assumptions harden.",
  openingInstruction:
    "The client wants initial options within four weeks and expects a conventional planning route. The project file now records heritage considerations, but the team still needs to decide when those considerations must influence the next step.",
  prompt: "Which position should be recorded before the project moves into a preferred concept direction?",
  feedback: {
    heading: "Correct.",
    body: "This is a decision gate, not a prescription for a single report or consultant appointment. The appropriate next step depends on the building, place, proposed change and evidence already available. The principle is that the project should establish enough of the heritage baseline and likely route to make the next design and client decisions responsibly.",
  },
  savedNoteHeading: "Pre-design decision gate",
  savedNoteIntro: "Before a preferred concept, project programme or consent route is treated as settled:",
  savedNoteBody:
    "Establish the heritage baseline and likely information/consent route proportionately, using further research, survey, assessment or specialist input where required by the project.",
  saveLabel: "Save decision gate",
  savedConfirmation:
    "Decision gate saved. The project now has a clear reason to move from initial briefing to understanding the building and place.",
};

// --- Module completion ---------------------------------------------------

export const MODULE_COMPLETE = {
  heading: "Receiving the brief complete",
  body: [
    "The ordinary brief has not become a separate heritage process. It now records the additional considerations that may affect how the project proceeds.",
    "You have identified what needs establishing before design assumptions, programme and client expectations become fixed.",
  ],
  outputsCompleted: ["Heritage Considerations Addendum - version 1", "Pre-design decision gate"],
  nextStageHeading: "Next: Understanding the existing building and place",
  nextStageBody:
    "The project file identifies what needs establishing. The next stage turns these initial flags into a proportionate baseline: existing fabric, history, significance, setting and project context.",
  nextStageMinutes: "About 9 minutes",
};
