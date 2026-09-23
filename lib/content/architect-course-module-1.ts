/**
 * "Receiving the brief" - Module 1 of Heritage Design Risk for
 * Architects. Built verbatim from
 * architect-course-module-1-wireframe.md (23 Sep 2026) - a working
 * prototype to test the shape/feel of the course, not a finished
 * product. See components/course/Module1Experience.tsx for the
 * screen-by-screen build this content feeds.
 *
 * Content-authenticity note carried over from the wireframe: the
 * address, client, email and project facts are a composite based on
 * recurring project patterns, not an identifiable commission.
 */

export const MODULE_1_STAGES = [
  "Receiving the brief",
  "Understanding the existing building",
  "Developing the design",
  "Managing client, cost and programme",
  "Gaining consent",
  "Detailing and delivering work",
  "Handover and the next change",
] as const;

export const MODULE_META = {
  courseLabel: "Heritage Design Risk for Architects",
  moduleTitle: "Receiving the brief",
  timeEstimate: "About 7 minutes",
  outputPromise: "You will leave with a Heritage Considerations Addendum to a normal project brief.",
};

export const SCREEN_1 = {
  heading: "Receiving the brief",
  body: [
    "You already know how to establish a client's objectives, scope, budget, programme and appetite for risk.",
    "Where heritage is involved, the brief is not different. It has additional considerations: the building or place affected, what is already known, and what may need establishing before assumptions become commitments.",
  ],
  primaryAction: "Open a project brief",
};

export const SCREEN_2 = {
  heading: "A new instruction",
  body: "The client has asked for an initial meeting and wants to move quickly. The normal briefing information is already taking shape.",
  projectFile: {
    project: "42 Church Street",
    type: "Alterations and extension to an existing house",
    clientAmbition:
      "More family space, improved energy performance and a clearer connection to the garden",
    programme: "Initial options in four weeks; aim to submit an application this year",
    budget: "To be confirmed after feasibility",
  },
  availableItems: [
    { label: "Client email", interactive: true },
    { label: "Estate-agent particulars", interactive: false },
    { label: "Existing plan/sketch", interactive: false },
    { label: "Site photographs", interactive: false },
    { label: "Initial programme note", interactive: false },
  ],
  briefStatus: [
    { item: "Client objectives", status: "Recorded" },
    { item: "Budget and programme", status: "Initial only" },
    { item: "Existing information", status: "Partial" },
    { item: "Planning context", status: "To establish" },
    { item: "Heritage considerations", status: "To establish" },
  ],
};

export const SCREEN_3 = {
  documentHeader: "Client email - extract",
  email: [
    "Hello,",
    "We are hoping to buy 42 Church Street and would like an initial view on whether we can make it work for our family. The house needs more usable space and we would like a rear extension, new windows where necessary and some internal changes downstairs.",
    "The agent has said that the property is not listed, so we do not think there should be anything unusual. It is in an attractive older part of the town, but we assume the main issue will be getting planning permission for the extension.",
    "We would like to move quickly after exchange. We have allowed for a straightforward design and planning process, and ideally want work to start next spring.",
    "Many thanks,",
    "A prospective client",
  ],
  prompt:
    "Nothing in this email changes the ordinary briefing conversation. But are there additional heritage considerations that could affect what you record, check or explain at this point?",
  action: "Review the initial heritage context",
};

export const SCREEN_4 = {
  heading: "The property is not listed. Heritage may still affect the project.",
  body: "A project does not need to alter a listed building for heritage to affect its route. At instruction, the point is not to reach a conclusion. It is to identify whether heritage adds information, design, consent or programme considerations to the normal brief.",
  cards: [
    {
      label: "Card A - The asset itself",
      heading: "Where the work affects a heritage asset",
      body: "Record whether the building or any structure directly affected may be listed or otherwise designated. Note what is known about historic fabric, prior alteration and consent history - and what is not.",
      additionsHeading: "Typical additions to the brief",
      additions: [
        "Designation and affected building/structure",
        "Known historic fabric and significance",
        "Existing alterations and available approval records",
        "Potential listed building consent implications",
      ],
    },
    {
      label: "Card B - The building and its context",
      heading: "Where the proposal may affect heritage beyond the building",
      body: "The building may be unlisted but lie in a conservation area, affect the setting of a listed building, relate to a locally listed asset, or be subject to other heritage-related controls.",
      additionsHeading: "Typical additions to the brief",
      additions: [
        "Conservation-area status and relevant character/appraisal material",
        "Article 4 directions and other local controls",
        "Nearby heritage assets and potential setting considerations",
        "Local listing, historic landscape or archaeological context where relevant",
        "Local validation requirements likely to affect the application route",
      ],
    },
  ],
  interactionPrompt: "Add the considerations that are relevant to this project brief.",
  action: "Build the Heritage Considerations Addendum",
};

export type SortBucket = "known" | "toEstablish" | "underReview";

export const SORT_BUCKETS: { key: SortBucket; label: string }[] = [
  { key: "known", label: "Known now" },
  { key: "toEstablish", label: "To establish before the brief is fixed" },
  { key: "underReview", label: "Keep under review as the project develops" },
];

export type SortItem = {
  id: string;
  text: string;
  modelBucket: SortBucket;
};

/**
 * Deliberately un-grouped here (see Module1Experience.tsx, which
 * shuffles them for display) - the learner sorts these into the three
 * buckets above. modelBucket is only revealed after the learner has
 * placed everything, as "one possible categorisation" - the wireframe
 * is explicit that more than one placement can be reasonable.
 */
export const SORT_ITEMS: SortItem[] = [
  { id: "not-listed", text: "Existing house is not nationally listed", modelBucket: "known" },
  {
    id: "client-wants",
    text: "Client wants rear extension, window changes and internal alterations",
    modelBucket: "known",
  },
  {
    id: "standard-route",
    text: "Client anticipates a standard planning route",
    modelBucket: "known",
  },
  { id: "town-centre", text: "Older town-centre location", modelBucket: "known" },
  {
    id: "conservation-area",
    text: "Whether the property is in a conservation area",
    modelBucket: "toEstablish",
  },
  {
    id: "article-4",
    text: "Whether Article 4 directions affect the proposed works",
    modelBucket: "toEstablish",
  },
  {
    id: "validation",
    text: "Local validation requirements and heritage-information expectations",
    modelBucket: "toEstablish",
  },
  {
    id: "appraisal",
    text: "Relevant local appraisal/design guidance",
    modelBucket: "toEstablish",
  },
  {
    id: "character",
    text: "How the emerging proposal affects character and appearance",
    modelBucket: "underReview",
  },
  {
    id: "setting",
    text: "Whether nearby heritage assets could be affected through setting",
    modelBucket: "underReview",
  },
  {
    id: "fabric",
    text: "Whether existing changes or retained fabric need further investigation",
    modelBucket: "underReview",
  },
  {
    id: "adjustment",
    text: "Whether consent route, scope, programme or budget needs adjustment",
    modelBucket: "underReview",
  },
];

export const SCREEN_5 = {
  heading: "Add the heritage considerations",
  body: 'The aim is not to diagnose the project from a map or a listing entry. It is to make the additional considerations visible before they disappear into an assumed "straightforward" route.',
  instructions:
    "Place each item where it matters most. More than one answer may be appropriate. The purpose is not a perfect answer; it is a usable brief that makes uncertainty visible.",
  feedbackHeading: "The heritage layer is now visible in the brief.",
  feedbackBody:
    "At this stage, the project does not need a conclusion about acceptability or consent. It needs a proportionate plan for establishing the information that could affect scope, programme, design development and client expectation.",
  action: "View the completed addendum",
};

export const SCREEN_6 = {
  heading: "Heritage Considerations Addendum",
  body: "This is not a separate heritage brief. It is an addition to the normal project brief.",
  project: "42 Church Street",
  dateLabel: "[course example]",
  sections: [
    {
      heading: "1. Heritage context to check",
      items: [
        "Conservation-area status and relevant appraisal/management material.",
        "Article 4 direction coverage and the specific classes/works affected.",
        "Nearby designated or locally listed heritage assets and any potential setting consideration.",
        "Other relevant designations or locally held heritage information where proportionate.",
      ],
    },
    {
      heading: "2. Existing building and available information",
      items: [
        "Existing plans, photographs and client/agent information reviewed.",
        "Existing alterations, including windows and internal changes, to be recorded as part of baseline understanding.",
        "Available planning/consent history and relevant local records to be checked.",
        "Known facts, client assumptions and missing evidence to be distinguished.",
      ],
    },
    {
      heading: "3. Brief, appointments and decision gates",
      items: [
        "Confirm whether heritage research, assessment, survey or other specialist input is required before the concept direction is fixed.",
        "Allow for any additional consent/information requirements in initial programme and fee discussions.",
        "Explain to client that a planning route, scope, cost and timing may need adjustment when the heritage baseline is understood.",
        "Record a decision point before client approval of a preferred design direction.",
      ],
    },
  ],
  sidePanel: {
    heading: "The brief has not become more complicated.",
    body: "It is more complete.",
    footer: "The next task is to understand the existing building and place well enough to develop options responsibly.",
  },
  actions: { download: "Download the addendum", continue: "Continue to the next stage" },
};

export const SCREEN_7 = {
  heading: "Before design, establish the baseline",
  body: [
    "A normal brief gives the project direction. Heritage considerations help identify what must be understood before that direction becomes difficult or expensive to change.",
    "In the next stage, you will look at the information that turns an initial heritage flag into a proportionate baseline: the building, its history, its fabric, its setting and the project context.",
  ],
  continueAction: "Continue: Understanding the existing building",
  returnAction: "Return to course overview",
};
