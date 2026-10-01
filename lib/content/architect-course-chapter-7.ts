/**
 * "Handover and the next change" - Chapter 7.
 *
 * Source (1 Oct 2026): heritage-design-risk-chapters-2-to-7-revised-
 * content.md - a revised draft for content review. Transcribed from that
 * document, not paraphrased; edit here only against a newer version of
 * the source. Each page's `recordEntries` are the worked-position
 * entries exactly as the source gives them.
 */

import { buildChapter, type EvidenceItem, type PageDraft } from "@/lib/content/course-model";
import { RECORD_AFTER_CHAPTER_6 } from "@/lib/content/architect-course-chapter-6";

const AVAILABLE_INFORMATION: EvidenceItem = {
  id: "available-handover-information",
  label: "Available handover information",
  pageAid: true,
  body: [
    "AVAILABLE INFORMATION",
    "• Listing entry and verified asset information.",
    "• Approved drawings and supporting explanation.",
    "• Consent decision, conditions, evidence of condition discharge or approval where applicable, and relevant authority correspondence.",
    "• Completion drawings, site photographs and change records.",
    "• Notes on retained timber, early doors, plaster repair and revised opening.",
    "• Materials, warranties, maintenance and service information.",
    "• Outstanding questions about future coach-house and boundary-wall work.",
  ],
};

const FUTURE_CHANGE_PROMPT: EvidenceItem = {
  id: "future-change-prompt",
  label: "Future change prompt",
  pageAid: true,
  body: [
    "POSSIBLE FUTURE WORK",
    "• Reuse or conversion of former coach house.",
    "• Further window improvement.",
    "• Additional insulation or ventilation work.",
    "• Garden access and boundary-wall changes.",
    "EXISTING HERITAGE RECORD",
    "• Verified principal listed asset information.",
    "• Previous evidence, design rationale and consent information.",
    "• Consent decision, conditions, evidence of condition discharge or approval where applicable, and relevant authority correspondence.",
    "• Completion record and retained-fabric notes.",
    "• Open questions about the status of the former coach house and boundary wall, and their contribution to the significance and setting of the principal listed building.",
  ],
};

const HERITAGE_RECORD_JOURNEY: EvidenceItem = {
  id: "heritage-record-journey",
  label: "Heritage Record journey",
  pageAid: true,
  body: [
    "THE HERITAGE RECORD",
    "Receiving the brief",
    "• Verified the asset and recorded information gaps.",
    "Understanding the building and place",
    "• Recorded evidence, significance and uncertainty relevant to proposed work.",
    "Developing the design",
    "• Tested options, including opening strategies, and recorded the preferred direction with conditions.",
    "Managing client, cost and programme",
    "• Made approval, evidence, specialist-input and contingency dependencies visible before assumptions hardened.",
    "Gaining consent",
    "• Explained significance, effects and design response.",
    "Detailing and delivering work",
    "• Used compatible repair methods, protected fabric, managed material discovery and recorded built changes.",
    "Handover and the next change",
    "• Retained knowledge for care and a better-informed future project.",
  ],
};

const DRAFTS: PageDraft[] = [
  // --- Page 1 - Keep the record useful ---
  {
    number: 1,
    title: "Keep the record useful",
    contentStatus: "draft",
    minutes: 3,
    projectMoment:
      "The client now has approval documents, drawings, photographs, contractor information and messages from the project. They do not need an unstructured archive. They need a practical record that explains the building and the completed work when care or future change arises.",
    task: "Identify the most useful handover Heritage Record.",
    evidence: [AVAILABLE_INFORMATION],
    alwaysAvailableEvidenceIds: [AVAILABLE_INFORMATION.id],
    question: "What should the client keep as the Heritage Record?",
    options: [
      "Every project file in date order, without explanation.",
      "A concise record of verified heritage information, approved and completed work, material changes and reasons, retained/repaired fabric, useful care information and prompts for future change.",
      "Only warranties for new products and equipment.",
      "Only the listing entry, because it is the official heritage record.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "The full archive can be retained, but it is not a usable handover record. Future decisions need a clear account of what matters and where supporting material can be found.",
      "This is the strongest handover record.\nIt preserves the building knowledge created by the project without asking the client to interpret every file themselves.",
      "Product information is useful, but it does not explain retained historic fabric, repairs, design rationale or future heritage questions.",
      "The listing entry remains important, but it does not record the project’s discoveries, decisions, completed work or care information.",
    ],
    recordEntries: [
      {
        heading: "Handover Heritage Record",
        entries: [
          "Verified asset and relevant significance information.",
          "Approved proposal, consent information and final built record.",
          "Consent decision, conditions, evidence of condition discharge or approval where applicable, and relevant authority correspondence retained.",
          "Retained, repaired and altered fabric identified.",
          "Material discoveries and changes recorded.",
          "Care, maintenance, materials and service information included.",
          "Future-change prompts retained, including coach-house and boundary-wall questions.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "A future owner looking at the rear range can see that the opening moved because timber was found, identify what was retained and repaired, and find the drawings and notes needed before proposing further work.",
      ],
    },
    comparisonCard: {
      heading: "If the building is in a conservation area or locally listed",
      intro:
        "Keep the verified designation/control, external material and boundary/joinery information, and relevant approval context with the handover record. These may change the questions asked by a future repair or alteration.",
    },
    whyThisMatters:
      "Handover is where project knowledge either becomes useful building information or disappears into disconnected files. The Heritage Record preserves the decisions that a future project would otherwise need to rediscover.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Start the next change better",
    continueCue:
      "The handover record is complete. Next, see how it changes the starting point for future work without assuming past decisions settle new proposals.",
  },

  // --- Page 2 - Start the next change better ---
  {
    number: 2,
    title: "Start the next change better",
    contentStatus: "draft",
    minutes: 3,
    projectMoment:
      "Several years later, the client considers converting the former coach house and making further energy improvements. The completed project gives useful evidence, but it did not determine the coach house’s status or significance and did not assess future changes to it.",
    task: "Identify the strongest starting point for the next project.",
    evidence: [FUTURE_CHANGE_PROMPT],
    alwaysAvailableEvidenceIds: [FUTURE_CHANGE_PROMPT.id],
    question: "What should a future project do first?",
    options: [
      "Assume that the previous consent and project decisions apply to the new proposal.",
      "Start with the existing Heritage Record, verify what remains current, identify the new trigger and proposal-specific questions, then update the record before scope, cost or route assumptions harden.",
      "Ignore the completed project because a new architect must rediscover everything independently.",
      "Treat the coach house as automatically covered by the same heritage position as the main house.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Previous decisions are useful evidence, but a new proposal may affect different fabric, structures, controls and questions. They must not be assumed to apply unchanged.",
      "This is the strongest starting point.\nThe Heritage Record provides continuity without pretending that it determines the next project. Verify what remains current and use the record to focus the new investigation.",
      "Existing records should be tested, not ignored. They can show what was previously found, retained, repaired, approved and left unresolved.",
      "The coach-house question was deliberately flagged, not resolved. Its status and significance need verification before a conversion route or cost is assumed.",
    ],
    recordEntries: [
      {
        heading: "Future-change prompt",
        entries: [
          "Revisit the existing Heritage Record before new work begins.",
          "Verify current designations, controls, approvals and building condition.",
          "Identify the new proposal’s affected fabric, spaces, setting and associated structures.",
          "Record what remains relevant, what has changed and what must be established before new scope, cost, programme or consent assumptions are fixed.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The coach-house project begins with a useful record entry: “The previous project did not alter the coach house. Its status and significance were flagged but not resolved. Verify those matters before assuming a conversion route or budget.”",
      ],
    },
    comparisonCard: {
      heading: "If an Article 4 direction or local-list entry has changed",
      intro:
        "A future project must check current controls rather than rely on the previous position. The Heritage Record provides the previous evidence and decisions; it does not freeze the regulatory or heritage context.",
    },
    whyThisMatters:
      "The Heritage Record does not freeze a historic building. It makes change more informed by ensuring the next project begins with evidence, continuity and clear questions rather than rediscovery and assumption.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Complete the course",
    continueCue:
      "The Heritage Record now supports future care and change. Review the method used across the project lifecycle.",
  },

  // --- Page 3 - Course complete ---
  {
    number: 3,
    title: "Course complete",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The Old Vicarage project has moved from client enquiry to completed work and a usable record for future care. Heritage did not create a separate lifecycle. It changed the evidence, options and commitments at the points where they mattered.",
    task: "Identify the central method of the course.",
    evidence: [HERITAGE_RECORD_JOURNEY],
    alwaysAvailableEvidenceIds: [HERITAGE_RECORD_JOURNEY.id],
    question: "What is the central method of the course?",
    options: [
      "Treat heritage as a specialist report required only when an application is submitted.",
      "Use a working Heritage Record to verify triggers, understand what matters proportionately, test options, keep key decisions visible, manage material change and retain knowledge for future care.",
      "Avoid changing historic buildings because uncertainty makes design decisions impossible.",
      "Assume that listing, conservation-area status or local listing provides all the information a project needs.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Supporting information may be required at application stage, but the method begins at instruction and continues through design, delivery and handover.",
      "This is the strongest summary.\nHeritage changes the decisions—not the project lifecycle. The Heritage Record keeps evidence, uncertainty and project choices connected at the moments where that changes the outcome.",
      "The course supports well-managed change. Uncertainty is a reason to verify and investigate proportionately, not a reason to avoid adaptation.",
      "Designations and local controls are important triggers, but they do not answer every question about a particular building, place or proposal.",
    ],
    recordEntries: [
      {
        heading: "A working record that",
        entries: [
          "verifies relevant heritage triggers and controls;",
          "distinguishes known facts from assumptions and information gaps;",
          "identifies the fabric, spaces, setting and relationships that matter to the work;",
          "tests options before commitments harden;",
          "makes approval, evidence, specialist-input and contingency dependencies visible where heritage changes normal project assumptions;",
          "carries approved reasoning into compatible repair, details and material site decisions; and",
          "keeps useful knowledge for care and the next change.",
        ],
      },
    ],
    statusAfter: "Heritage Record — course complete",
    workedExample: {
      paragraphs: [
        "The next project starts with four questions: “What is the heritage trigger? What is known? What needs establishing for this proposal? Which decision must not harden before we know it?”",
      ],
    },
    whyThisMatters:
      "Listed buildings, conservation areas, Article 4 directions, locally listed assets and setting issues involve different controls and evidence. The method remains consistent: verify, understand, test, decide, record and carry knowledge forward.",
    saveLabel: "Save and complete the course",
    continueLabel: "Course complete",
    continueCue: "You have completed Heritage Design Risk for Architects.",
  },
];

const chapter = buildChapter(
  "Chapter 7 · Handover and the next change",
  RECORD_AFTER_CHAPTER_6,
  DRAFTS
);

export const CHAPTER_7_PAGES = chapter.pages;
