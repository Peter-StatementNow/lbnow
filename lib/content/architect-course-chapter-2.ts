/**
 * "Understanding the existing building and place" - Chapter 2.
 *
 * Source (1 Oct 2026): heritage-design-risk-chapters-2-to-7-revised-
 * content.md - a revised draft for content review. Transcribed from that
 * document, not paraphrased; edit here only against a newer version of
 * the source. Each page's `recordEntries` are the worked-position
 * entries exactly as the source gives them.
 */

import { buildChapter, type EvidenceItem, type PageDraft } from "@/lib/content/course-model";
import { RECORD_AFTER_CHAPTER_1 } from "@/lib/content/architect-course-chapter-1";

const INITIAL_VISIT_NOTE: EvidenceItem = {
  id: "initial-visit-note",
  label: "Initial visit note",
  body: [
    "INITIAL VISIT NOTE",
    "• The ground floor has been altered; the kitchen occupies part of the rear range.",
    "• A former doorway is visible as a change in wall finish.",
    "• Several internal doors appear early or original; others are later.",
    "• The rear range has a lower ceiling and exposed timber in one room.",
    "• The roof space has not been inspected.",
    "• The garden is enclosed by a brick boundary wall; the detached former coach house sits at the far end of the plot.",
    "• No complete record of earlier kitchen, window or service work is available.",
  ],
};

const EVIDENCE_SUMMARY: EvidenceItem = {
  id: "evidence-summary",
  label: "Evidence summary",
  body: [
    "BUILDING AND PLACE",
    "• Grade II listed early C19 principal house with later alterations.",
    "• Principal elevation faces Church Lane.",
    "• Early or original internal doors appear to survive.",
    "• Rear range includes exposed timber, altered openings and later finishes.",
    "• Brick boundary wall and gate piers define the Church Lane edge.",
    "• Rear garden separates the main house from the detached former coach house.",
    "LIKELY WORKS",
    "• Compact rear extension or reworking of rear range.",
    "• Ground-floor changes and new/altered opening.",
    "• Energy, ventilation and window work.",
    "• Possible later work to access, boundary wall or coach house.",
  ],
};

const CHAPTER_2_OUTPUTS: EvidenceItem = {
  id: "chapter-2-outputs",
  label: "Chapter 2 outputs",
  body: [
    "CHAPTER 2 OUTPUTS",
    "• Visible evidence and uncertainty recorded.",
    "• Fabric, spaces and relationships likely to be affected identified.",
    "• A proportionate working position on significance established.",
    "• Questions created for testing credible design options.",
  ],
};

const DRAFTS: PageDraft[] = [
  // --- Page 1 - What does the building show? ---
  {
    number: 1,
    title: "What does the building show?",
    contentStatus: "draft",
    minutes: 3,
    projectMoment:
      "The commission has started. The architect visits The Old Vicarage before developing options for the rear extension, ground-floor changes and energy work.\nThe listing entry and client papers provide a starting point. The building now raises more specific questions: altered rear rooms, exposed timber, possible earlier openings, internal doors, incomplete records and the relationship between house, garden, wall and coach house.",
    task: "Identify the most useful first heritage action during the visit.",
    evidence: [INITIAL_VISIT_NOTE],
    alwaysAvailableEvidenceIds: [INITIAL_VISIT_NOTE.id],
    question: "What is the most useful Heritage Record entry after this first visit?",
    options: [
      "The rear range is low significance because it has been altered and contains a modern kitchen.",
      "Record the visible fabric and changes; identify the rear range, internal doors, altered openings, roof space, boundary wall and coach house relationship as matters requiring proportionate further understanding before affected work is assumed to be low-impact.",
      "The exposed timber proves that the rear range is the oldest and most significant part of the house.",
      "No design discussion can take place until every room and feature has been fully investigated.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Earlier alteration and modern fittings do not settle significance. They may coexist with earlier fabric or evidence of the building’s development.\nRecord what is visible and identify what needs understanding before the proposed work is assumed to have limited effect.",
      "This is the strongest first entry.\nIt distinguishes observation from conclusion and identifies the evidence that could change the developing design decision.",
      "Exposed timber is evidence worth investigating, but it does not prove age, sequence or relative significance by itself.",
      "The project can explore design ideas. The point is not to solve every question now; it is to prevent a preferred solution being based on untested assumptions about the affected building.",
    ],
    recordEntries: [
      {
        heading: "Known",
        entries: [
          "The rear range contains lower ceilings, exposed timber, altered finishes and evidence of at least one altered or blocked opening.",
          "Some early or original internal doors appear to survive.",
          "The main house, garden, boundary wall and former coach house have a physical relationship that may be relevant to the developing proposal.",
        ],
      },
      {
        heading: "To establish",
        entries: [
          "The development, condition and contribution of the rear range and the fabric likely to be affected by proposed openings, services and internal changes.",
          "The significance and condition of internal doors and other fabric likely to be affected.",
          "The condition of roof-space fabric and existing insulation/service interventions relevant to energy work.",
          "The relevant relationship of house, garden, wall and coach house.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The site visit does not need to produce a complete history. Its job is to identify evidence and uncertainty that could change the choice, location or detail of the proposed work.",
      ],
    },
    comparisonCard: {
      heading: "If the trigger were conservation area, Article 4 or local listing",
      intro:
        "Verify the conservation-area boundary, any relevant Article 4 direction and local-list status. Then carry out the same practical visit: identify the features, condition, relationships and contribution that the proposal may affect. A designation or direction is a trigger for questions, not a complete answer.",
    },
    whyThisMatters:
      "Early design often labels parts of a building “later”, “altered” or “less important” before the evidence supports that conclusion. The Heritage Record keeps those assumptions from becoming design instructions too soon.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: What matters for this project?",
    continueCue:
      "The first observations are recorded. Next, identify what matters about the building and place in relation to the work being considered.",
  },

  // --- Page 2 - What matters for this project? ---
  {
    number: 2,
    title: "What matters for this project?",
    contentStatus: "draft",
    minutes: 4,
    projectMoment:
      "The client does not need a complete account of every historical phase before discussing an extension. They do need the project to understand what matters about the building and place where the proposed work may have an effect.",
    task: "Identify the strongest working position on significance.",
    evidence: [EVIDENCE_SUMMARY],
    alwaysAvailableEvidenceIds: [EVIDENCE_SUMMARY.id],
    question: "Which statement best guides the next design decision?",
    options: [
      "Only the front elevation matters because it is the part described most clearly in the list entry.",
      "Understand the contribution of the affected fabric, spaces, form, development and site relationships; use that understanding to test the proposed work, rather than treating every element as equally significant.",
      "Everything within the site must be treated as equally significant because the house is listed.",
      "Significance can be considered after the preferred extension has been designed.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "The front elevation may be important, but the listing entry is not a complete map of significance. The project also needs to understand the areas and relationships affected by its own proposal.",
      "This is the strongest working position.\nIt is proportionate: it asks what matters for this project and how that should influence the developing design, without requiring every part of the site to receive identical treatment.",
      "Association does not mean identical significance. The Heritage Record should help the project identify what matters, why it matters and how a proposal may affect it.",
      "Significance should inform option selection. Waiting until a design is preferred risks making heritage understanding a late justification exercise.",
    ],
    recordEntries: [
      {
        heading: "To establish",
        entries: [
          "The contribution of the rear range, internal doors, altered openings and surviving fabric to the significance of the principal house.",
          "The contribution of the garden, boundary wall, gate piers and coach-house relationship to the setting and historic character of the site.",
          "Which elements are likely to be materially affected by each credible option.",
        ],
      },
      {
        heading: "Keep under review",
        entries: [
          "Whether emerging design choices affect significant fabric, spaces, setting or relationships.",
          "Whether further survey, opening-up or specialist input is proportionate before a preferred option is selected.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "Significance is not a separate historical essay. Here it asks practical design questions: does the new opening affect evidence of the building’s development? Does an extension change a meaningful garden relationship? Can a service route avoid an early door or exposed timber?",
      ],
    },
    comparisonCard: {
      heading: "If the site were in a conservation area",
      intro:
        "The question becomes: what about the building, street edge, boundary wall, plot pattern, garden or wider townscape contributes to the area’s character or appearance, and what might the proposal change? The method is the same; the relevant heritage asset and effects differ.",
    },
    whyThisMatters:
      "A proportionate understanding of significance allows the project to target attention where it will change the design decision. It avoids both ignorance and an unworkable assumption that nothing can change.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Complete Chapter 2",
    continueCue:
      "The project now has a focused understanding of what needs to be tested as options develop. Review the Heritage Record before moving into design.",
  },

  // --- Page 3 - Chapter 2 complete ---
  {
    number: 3,
    title: "Chapter 2 complete",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The project has moved from a verified list entry to a more useful understanding of the existing building and place. It has not selected a design solution.",
    task: "Identify what Chapter 2 has added to the project.",
    evidence: [CHAPTER_2_OUTPUTS],
    alwaysAvailableEvidenceIds: [CHAPTER_2_OUTPUTS.id],
    question: "What is the project ready to do next?",
    options: [
      "Confirm a preferred extension and likely consent route.",
      "Test credible options against the affected fabric, spaces, setting and relationships now identified.",
      "Stop work until a complete historical account of the property has been prepared.",
      "Treat the list entry as no longer relevant because the building visit is complete.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "The evidence base is better, but the design options still need to be tested before a preferred direction is fixed.",
      "This is the strongest next step.\nChapter 2 has created the heritage understanding needed to make design development more informed and less likely to require later reversal.",
      "The project needs enough evidence for its next decision, not necessarily a complete historical account before it can explore design.",
      "The list entry remains a verified source within the evidence base. The visit adds project-specific understanding; it does not replace the entry.",
    ],
    recordEntries: [
      {
        heading: "Decision point",
        entries: [
          "Before selecting a preferred design option, test credible approaches against the fabric, spaces, setting and relationships identified in Chapter 2.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "Chapter 2 changes the design conversation from “Which extension do you prefer?” to “Which option best meets the brief while responding to the fabric and relationships that matter?”",
      ],
    },
    whyThisMatters:
      "Heritage information earns its place when it changes the quality of a design decision. That is the handover from Chapter 2 to Chapter 3.",
    saveLabel: "Save and complete Chapter 2",
    continueLabel: "Begin Chapter 3: Developing the design",
    continueCue:
      "The building and place are now better understood. Next, test the options against what matters.",
  },
];

const chapter = buildChapter(
  "Chapter 2 · Understanding the existing building and place",
  RECORD_AFTER_CHAPTER_1,
  DRAFTS
);

export const CHAPTER_2_PAGES = chapter.pages;
export const RECORD_AFTER_CHAPTER_2 = chapter.groupsAfter;
