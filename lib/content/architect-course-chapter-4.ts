/**
 * "Managing client, cost and programme" - Chapter 4.
 *
 * Source (1 Oct 2026): heritage-design-risk-chapters-2-to-7-revised-
 * content.md - a revised draft for content review. Transcribed from that
 * document, not paraphrased; edit here only against a newer version of
 * the source. Each page's `recordEntries` are the worked-position
 * entries exactly as the source gives them.
 */

import { buildChapter, type EvidenceItem, type PageDraft } from "@/lib/content/course-model";
import { RECORD_AFTER_CHAPTER_3 } from "@/lib/content/architect-course-chapter-3";

const CURRENT_DEPENDENCY: EvidenceItem = {
  id: "current-dependency",
  label: "Current dependency",
  body: [
    "PREFERRED DIRECTION DEPENDS ON",
    "• Targeted investigation of fabric and structure at the proposed opening.",
    "• Detailed design of rear-range junctions, services and retained timber.",
    "• Confirmation of garden/access and any boundary-wall implications.",
    "• Verification of the relevant consent route and local requirements.",
    "• Proportionate supporting heritage information.",
    "• Possible heritage consultant/specialist input if evidence, complexity or local requirements indicate that it is needed.",
  ],
};

const IDENTIFIED_UNCERTAINTY: EvidenceItem = {
  id: "identified-uncertainty",
  label: "Identified uncertainty",
  body: [
    "IDENTIFIED UNCERTAINTY",
    "• Structure and fabric at proposed opening not fully visible.",
    "• Possible earlier fabric or altered openings within rear wall.",
    "• Condition of retained timber and finishes not fully known.",
    "• Service routes and previous interventions incompletely recorded.",
    "• Repair needs may become clearer during opening-up.",
  ],
};

const CHAPTER_4_OUTPUT: EvidenceItem = {
  id: "chapter-4-output",
  label: "Chapter 4 output",
  pageAid: true,
  body: [
    "CHAPTER 4 OUTPUT",
    "The project has not created a separate heritage process.",
    "It has made visible:",
    "• targeted investigation and design work before scope/cost/timing are fixed;",
    "• possible proportionate supporting information and specialist input;",
    "• likely approval dependency and possible timing implications;",
    "• transparent contingency for identified fabric uncertainty.",
  ],
};

const DRAFTS: PageDraft[] = [
  // --- Page 1 - Define the targeted next stage ---
  {
    number: 1,
    title: "Define the targeted next stage",
    contentStatus: "draft",
    minutes: 3,
    projectMoment:
      "The client wants a fixed fee, early budget range and spring construction start. The remaining questions are specific: fabric at the opening, detailed rear-range junctions, garden/access implications and the likely approval route.\nThe project needs to define what further work may be required before these assumptions become reliable.",
    task: "Identify the most useful next-stage definition.",
    evidence: [CURRENT_DEPENDENCY],
    alwaysAvailableEvidenceIds: [CURRENT_DEPENDENCY.id],
    question: "What should be included in the next client proposal?",
    options: [
      "Nothing needs to change; heritage can be dealt with after the client approves a fixed scope, price and construction date.",
      "A defined investigation and design-development stage, with an allowance for proportionate heritage information and possible specialist advice if needed; review scope, cost and programme once fabric, design and consent requirements are clearer.",
      "Delay every client decision until all possible heritage questions about the property have been resolved.",
      "Promise a fixed price and start date, then use a general “heritage” contingency if the assumptions prove wrong.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "This allows incomplete information to harden into a client commitment. The identified questions could affect the work, route and timing of the preferred direction.",
      "This is the strongest response.\nIt makes one proportionate adjustment to normal project assumptions. It does not assume that a consultant or heritage statement is always required; it allows for them where evidence, complexity or local requirements make them proportionate.",
      "This is unnecessarily broad. The project needs targeted information for the preferred direction, not every possible answer about the whole property.",
      "A contingency may be appropriate, but it is not a substitute for defining the work needed to reduce uncertainty and explain the potential costs to the client.",
    ],
    recordEntries: [
      {
        heading: "Project implication",
        entries: [
          "Define a targeted investigation and design-development stage before scope, cost and construction timing are treated as fixed.",
          "Allow for proportionate supporting heritage information and possible specialist advice where evidence, complexity or local requirements indicate this is needed.",
          "Review the relevant consent route, application scope, cost and programme once the targeted work is complete.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "“We can proceed with the preferred direction. Before fixing detailed scope, cost and start date, we need to inspect the opening area, develop the junctions and confirm the route and supporting information. We have allowed for that stage and will update the project position afterwards. If the evidence or local requirements justify specialist heritage advice, we will define that scope before commissioning it.”",
      ],
    },
    comparisonCard: {
      heading: "If an Article 4 direction applies",
      intro:
        "Verify the exact restriction before assuming work can proceed under permitted development. If an application is required, allow for the necessary design and supporting information in the fee and programme. Do not assume an Article 4 direction means a consultant or formal heritage statement is always required.",
    },
    whyThisMatters:
      "A heritage-sensitive project does not need a separate commercial system. It needs the current client proposal to state clearly what must be established before the project’s main promises become reliable.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Use contingency for identified uncertainty",
    continueCue:
      "The next-stage work is defined. Next, explain how identified uncertainty in historic fabric may affect contingency and adaptation without becoming a generic heritage premium.",
  },

  // --- Page 2 - Use contingency for identified uncertainty ---
  {
    number: 2,
    title: "Use contingency for identified uncertainty",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The preferred design depends on opening-up and detailed work in an altered rear range. The client asks whether heritage means the whole project needs a large, unexplained contingency.\nThe relevant risk is more specific: historic fabric, concealed conditions and repair needs can lead to unexpected redesign, adaptation or additional work once the building is opened up.",
    task: "Identify the strongest approach to contingency.",
    evidence: [IDENTIFIED_UNCERTAINTY],
    alwaysAvailableEvidenceIds: [IDENTIFIED_UNCERTAINTY.id],
    question: "How should the project discuss contingency?",
    options: [
      "Add a large generic “heritage contingency” without explaining what it covers.",
      "Promise that heritage-sensitive work will not affect cost because the preferred intervention is modest.",
      "Link any allowance or contingency to identified uncertainty: opening-up, potential repair, redesign or adaptation of fabric/services; explain what may reduce the uncertainty and when the allowance will be reviewed.",
      "Refuse to discuss cost until every concealed condition has been exposed.",
    ],
    expectedIndex: 2,
    optionFeedback: [
      "An unexplained contingency makes heritage appear like an arbitrary premium. The client should understand the specific risk it covers and the work intended to reduce it.",
      "A modest intervention can still encounter concealed fabric, condition issues or repair needs. False reassurance is not helpful to the client or project.",
      "This is the strongest approach.\nIt links contingency to known uncertainty rather than designation alone. It also explains that the allowance should be reviewed as evidence improves and decisions are made.",
      "Cost discussion can begin before every condition is known. The project should distinguish estimates, allowances and the specific uncertainty that remains.",
    ],
    recordEntries: [
      {
        heading: "Keep under review",
        entries: [
          "Cost implications of opening-up, concealed conditions, repair needs, redesign or adaptation of opening, services, finishes and retained fabric.",
        ],
      },
      {
        heading: "Project implication",
        entries: [
          "Use a transparent allowance or contingency only for identified uncertainty.",
          "Review the allowance after targeted investigation, detailed design and material site discoveries; do not treat it as a generic heritage premium.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "“We have included an allowance for investigation and potential repair or redesign around the opening and services. It is not an unexplained heritage uplift. Once the opening area is investigated and the design is developed, we will update the allowance and explain any remaining risk.”",
      ],
    },
    comparisonCard: {
      heading: "If the project involves a conservation-area façade or boundary wall",
      intro:
        "Contingency may relate to concealed condition, repair rather than replacement, matching materials, careful dismantling or a revised external detail. The same principle applies: identify the uncertainty, explain the allowance and review it as evidence improves.",
    },
    whyThisMatters:
      "Historic fabric can reveal conditions that require adaptation. A transparent, targeted contingency helps the project manage that possibility without overstating risk or hiding it from the client.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Complete Chapter 4",
    continueCue:
      "The targeted heritage dependencies are now visible in scope, potential specialist input, contingency and timing. Review the handover into consent preparation.",
  },

  // --- Page 3 - Chapter 4 complete ---
  {
    number: 3,
    title: "Chapter 4 complete",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The client understands the preferred direction, the work needed before key assumptions become reliable, the possible need for supporting heritage information or specialist advice, and the targeted uncertainty that may justify an allowance.",
    task: "Identify what Chapter 4 has achieved.",
    evidence: [CHAPTER_4_OUTPUT],
    alwaysAvailableEvidenceIds: [CHAPTER_4_OUTPUT.id],
    question: "What is the strongest next move?",
    options: [
      "Treat the preferred direction as final because the client has accepted an allowance.",
      "Use the targeted evidence and developed design to prepare a proportionate explanation of significance, effects and design response for the relevant consent route.",
      "Stop all project work until consent is granted.",
      "Remove the Heritage Record because the application documents will replace it.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "An allowance and preferred direction do not resolve the remaining evidence, design and approval questions.",
      "This is the strongest next move.\nThe project now has the focused evidence and design direction needed to explain the proposal properly, rather than using the application stage to discover the issues it should address.",
      "Design and application preparation continue before consent is determined. The key is to keep the Heritage Record aligned with those decisions.",
      "The Heritage Record remains the working thread. Application material draws from it; it does not replace it.",
    ],
    recordEntries: [
      {
        heading: "Decision point",
        entries: [
          "Before submission, confirm that the developed proposal and supporting material explain the relevant significance, effects and design response proportionately.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "Chapter 4 changes only the assumptions heritage affects: the client understands why the project needs targeted evidence, possible specialist input, realistic consent allowance and transparent contingency before its promises become fixed.",
      ],
    },
    whyThisMatters:
      "The commercial value of the Heritage Record is not complexity. It is preventing a late, expensive surprise by making a small number of material dependencies visible early enough to manage.",
    saveLabel: "Save and complete Chapter 4",
    continueLabel: "Begin Chapter 5: Gaining consent",
    continueCue:
      "The project has the evidence and design direction to explain the proposal. Next, prepare the information that supports the relevant consent decision.",
  },
];

const chapter = buildChapter(
  "Chapter 4 · Managing client, cost and programme",
  RECORD_AFTER_CHAPTER_3,
  DRAFTS
);

export const CHAPTER_4_PAGES = chapter.pages;
export const RECORD_AFTER_CHAPTER_4 = chapter.groupsAfter;
