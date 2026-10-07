/**
 * "Gaining consent" - Chapter 5.
 *
 * Source (1 Oct 2026): heritage-design-risk-chapters-2-to-7-revised-
 * content.md - a revised draft for content review. Transcribed from that
 * document, not paraphrased; edit here only against a newer version of
 * the source. Each page's `recordEntries` are the worked-position
 * entries exactly as the source gives them.
 *
 * Pages 1-2 are from chapter-5-approvals-and-associated-features-
 * amendments.md (5 Oct 2026): "Check planning permission and listed
 * building consent" (replacing Correction Pass 2's route page) and
 * "Confirm validation and information". The original pages 1-3 are now
 * 3-5.
 */

import { buildChapter, type EvidenceItem, type PageDraft } from "@/lib/content/course-model";
import { RECORD_AFTER_CHAPTER_4 } from "@/lib/content/architect-course-chapter-4";

const DEVELOPED_PROPOSAL: EvidenceItem = {
  id: "developed-proposal",
  label: "Developed proposal",
  body: [
    "DEVELOPED PROPOSAL",
    "• Compact rear extension.",
    "• Limited rear-range reworking.",
    "• Retention of exposed timber and identified early doors where possible.",
    "• Opening strategy developed following targeted investigation.",
    "• Kitchen/service changes and garden threshold works.",
    "• No boundary-wall alteration is proposed in this phase.",
  ],
};

const TWO_APPROVAL_QUESTIONS: EvidenceItem = {
  id: "two-approval-questions",
  label: "Two approval questions",
  body: [
    "TWO APPROVAL QUESTIONS",
    "Planning permission",
    "• For this listed-building extension, treat planning permission as required.",
    "• Check the scope of the development and any other relevant planning requirements or local controls.",
    "Listed Building Consent",
    "• Separately consider whether the proposed extension, alteration or other works may affect the listed building’s character as a building of special architectural or historic interest.",
    "• Establish the information and design development needed to understand and explain that effect.",
    "Planning permission and Listed Building Consent are separate questions.",
    "Planning permission for the extension does not decide the Listed Building Consent question.",
    "Listed Building Consent does not replace planning permission for the extension.",
  ],
};

const CONSENT_AND_VALIDATION_CHECK: EvidenceItem = {
  id: "consent-and-validation-check",
  label: "Consent and validation check",
  body: [
    "CONSENT AND VALIDATION CHECK",
    "Before preparing supporting material, confirm:",
    "• Current local validation requirements.",
    "• Whether any other local control or designation affects the proposal.",
    "• What drawings, photographs, surveys, details or supporting documents are required.",
    "• What level of heritage information is proportionate to the proposal, evidence available and local requirements.",
    "• Whether a heritage statement and/or specialist heritage input is proportionate to the evidence gap, complexity or local requirements.",
    "Requirements vary by authority and proposal. Do not assume that one report, one specialist appointment or one level of information applies to every project.",
  ],
};

const DESIGN_RESPONSE_SCHEDULE: EvidenceItem = {
  id: "design-response-schedule",
  label: "Design response schedule",
  body: [
    "DESIGN RESPONSE",
    "• Compact extension footprint.",
    "• Opening strategy adjusted following investigation.",
    "• Exposed timber retained.",
    "• Early doors retained where possible.",
    "• Services and kitchen layout arranged to reduce intervention.",
    "• Threshold/access design developed to limit effects on garden relationships.",
  ],
};

const CHAPTER_5_OUTPUTS: EvidenceItem = {
  id: "chapter-5-outputs",
  label: "Chapter 5 outputs",
  pageAid: true,
  body: [
    "CHAPTER 5 OUTPUTS",
    "• Proposal explained through relevant significance, effects and design response.",
    "• Drawings and supporting material aligned.",
    "• Retention, protection and detail commitments identified.",
    "• Any conditions or further approvals identified for the next stage.",
  ],
};

const DRAFTS: PageDraft[] = [
  // --- Page 1 - Check planning permission and listed building consent ---
  // (Chapter 5 approvals and associated features amendments, 5 Oct 2026:
  // replaces Correction Pass 2's Page 1; a new Page 2 follows it.)
  {
    number: 1,
    title: "Check planning permission and listed building consent",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The preferred proposal is a compact rear extension with limited rear-range alteration, an opening strategy, energy and service work, and garden-threshold changes.\nA similar-sized rear extension to an unlisted house may sometimes be permitted development for planning purposes. That is not the starting assumption for a listed building. The team must check planning permission and Listed Building Consent separately before preparing an application or giving the client a final programme expectation.",
    task: "Separate the planning-permission question from the Listed Building Consent question, then identify what must be checked before the application route is confirmed.",
    evidence: [TWO_APPROVAL_QUESTIONS],
    alwaysAvailableEvidenceIds: [TWO_APPROVAL_QUESTIONS.id],
    question: "What is the most accurate approval position for the proposed rear extension to The Old Vicarage?",
    options: [
      "It is a modest rear extension, so normal householder permitted-development rights apply.",
      "The house is listed, so only Listed Building Consent needs checking.",
      "The extension requires planning permission, and the project must separately consider whether the proposed works require Listed Building Consent.",
      "Every alteration to a listed building automatically requires both planning permission and Listed Building Consent.",
    ],
    expectedIndex: 2,
    optionFeedback: [
      "A modest rear extension may sometimes be permitted development for planning purposes at an unlisted house. That is not the starting assumption for a listed-building extension. Planning permission is required for this extension, with Listed Building Consent considered separately.",
      "Listed status makes Listed Building Consent a separate question, but it does not remove the planning-permission requirement for the extension.",
      "This is the strongest position. The extension requires planning permission. The project must separately consider whether the extension, opening strategy, internal works and related alterations require Listed Building Consent because they may affect the listed building’s character.",
      "This is too absolute. The extension requires planning permission, but not every alteration automatically requires both permissions. The Listed Building Consent question depends on the particular works and their effect on the listed building’s character.",
    ],
    recordEntries: [
      {
        heading: "To establish",
        entries: [
          "The scope of development requiring planning permission.",
          "Whether the proposed extension, opening strategy, internal alterations, services, threshold or related works require Listed Building Consent.",
          "Current local validation requirements and any other relevant local control affecting the proposal.",
          "The proportionate information needed to explain significance, effects and design response.",
        ],
      },
      {
        heading: "Decision point",
        entries: [
          "Before submission, confirm that the planning application, Listed Building Consent position and supporting information are proportionate to the works and current local requirements.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The project does not treat ‘small and rear’ as an approval shortcut. It recognises that planning permission is required for the listed-building extension, then separately considers the Listed Building Consent implications of the extension and related works.",
      ],
    },
    comparisonCard: {
      // The source gives no scenario heading for this comparison; this
      // one names the scenario its text covers. Flagged for review.
      heading: "If the house were unlisted, in a conservation area",
      intro:
        "For an unlisted house in a conservation area, planning permission and permitted-development rights remain the main route questions. Permitted-development rights may be more restricted, and an Article 4 direction can remove specified rights. There is no generic separate conservation-area consent equivalent to Listed Building Consent. Check the relevant planning position and explain the effect on the area’s character or appearance where required.",
    },
    whyThisMatters:
      "Planning permission and Listed Building Consent answer different questions. Do not let ‘small’, ‘rear’, ‘listed’, ‘conservation area’ or ‘permitted development’ answer the wrong approval question.",
    continueLabel: "Continue: Confirm validation and information",
    continueCue:
      "The planning-permission and Listed Building Consent questions are now distinct. Next, confirm current local validation requirements and the proportionate information needed for the proposal.",
  },

  // --- Page 2 - Confirm validation and information ---
  {
    number: 2,
    title: "Confirm validation and information",
    contentStatus: "draft",
    minutes: 1,
    projectMoment:
      "The planning-permission and Listed Building Consent questions have been separated. The project now needs to check what the relevant authority currently requires before preparing supporting material.\nThe aim is not to commission a standard report by default. It is to prepare information proportionate to this proposal, the evidence available and current local requirements.",
    task: "Identify what the project should confirm before preparing the heritage explanation.",
    evidence: [CONSENT_AND_VALIDATION_CHECK],
    alwaysAvailableEvidenceIds: [CONSENT_AND_VALIDATION_CHECK.id],
    question: "Before preparing the heritage explanation, what should the project confirm?",
    options: [
      "That the existing listing entry is all the supporting information the authority will need.",
      "Current local validation requirements, any other relevant local control, and the proportionate drawings, evidence and heritage information needed for this proposal.",
      "That a full heritage statement and consultant are required for every listed-building extension.",
      "Nothing further: submit the drawings and allow the authority to request anything missing after submission.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "The listing entry is an important source, but it is not a complete explanation of this proposal, its effects or the current submission requirements.",
      "This is the strongest first step. It checks what the authority currently needs for this proposal and keeps the supporting information proportionate. It does not assume that every project needs the same report or specialist input.",
      "Further heritage information or specialist advice may be proportionate, but neither should be automatic. The required scope depends on the proposal, evidence gap, complexity and local requirements.",
      "A submission can be made incomplete, but that is not a useful project strategy. Confirming requirements early helps the project prepare the right information and avoid avoidable delay or redesign.",
    ],
    recordEntries: [
      {
        heading: "To establish",
        entries: [
          "Current local validation requirements and any other relevant local control.",
          "The proportionate drawings, evidence and supporting information needed for the proposal.",
          "Whether a heritage statement and/or specialist heritage input is proportionate.",
        ],
      },
      {
        heading: "Decision point",
        entries: [
          "Before submission, confirm that the application material explains the relevant significance, effects and design response proportionately.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The project does not start by commissioning a standard report. It checks what route applies, what the authority requires and what evidence is needed to explain this proposal. The resulting information should be proportionate to the works and heritage questions involved.",
      ],
    },
    comparisonCard: {
      // The source gives no scenario heading for this comparison; this
      // one names the triggers its text covers. Flagged for review.
      heading: "If the site were in a conservation area or under an Article 4 direction",
      intro:
        "If the project is in a conservation area or affected by an Article 4 direction, verify the current boundary, direction wording and relevant restriction before assuming permitted development or a particular planning route. Check current local validation requirements for the proposal.",
    },
    whyThisMatters:
      "Consent preparation works best when the project confirms the route and information requirements before it writes the explanation. This is a verification step, not a separate application-administration course.",
    continueLabel: "Continue: Explain the heritage case",
    continueCue:
      "The route and current requirements are clear enough to prepare the supporting explanation. Next, explain what matters, what changes and how the design responds.",
  },

  // --- Page 3 - Explain the heritage case ---
  {
    number: 3,
    title: "Explain the heritage case",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The planning-permission and Listed Building Consent position have been checked, and current local validation requirements are clear. The compact extension and limited rear-range alteration are now developed, and targeted investigation has informed the opening strategy.\nThe project can now prepare proportionate supporting information that explains this proposal: what matters, what changes and how the design responds.",
    task: "Identify the strongest structure for the heritage explanation.",
    evidence: [DEVELOPED_PROPOSAL],
    alwaysAvailableEvidenceIds: [DEVELOPED_PROPOSAL.id],
    question: "Which approach best explains the proposal?",
    options: [
      "Describe the client’s desired rooms and say that the extension will improve the house.",
      "Identify the relevant significance; explain the fabric, spaces and relationships affected by the proposal; show how the design avoids or reduces effects; and explain why any remaining change is justified by the project brief.",
      "Repeat the listing entry and attach drawings without explaining their relationship.",
      "State that no effect arises because the extension is contemporary and at the rear.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Client benefit is relevant, but it does not explain the heritage case. The supporting material needs to connect significance, effects and design response.",
      "This is the strongest structure.\nIt turns the Heritage Record into a clear, proportionate explanation that is specific to the asset and the proposed work.",
      "The list entry is a source, not a complete assessment of this proposal. The relationship between the drawings and what matters about the building must be explained.",
      "Rear location and contemporary appearance do not remove the need to assess what changes. The explanation should be based on the particular fabric, spaces and relationships affected.",
    ],
    recordEntries: [
      {
        heading: "Submission narrative",
        entries: [
          "Significance: relevant form, fabric, spaces, site relationships and setting.",
          "Effects: extension, opening, internal alterations, services and threshold work.",
          "Response: compact footprint, retained fabric, investigated opening strategy and design development to reduce effects on rear range and garden relationships.",
          "Justification: the proposal meets the client brief while limiting and explaining the remaining change.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "A concise explanation could say: “The extension is kept compact to limit alteration of the rear range. Exposed timber and early doors are retained. The opening strategy follows targeted investigation. The threshold and access are designed to reduce change to the relationship between house and garden.”",
      ],
    },
    comparisonCard: {
      heading: "If the site were in a conservation area",
      intro:
        "Explain the relevant character or appearance of the area, the external features or relationships affected by the proposal, and how scale, form, materials, boundary treatment or landscape respond. The method is the same even where the consent route differs.",
    },
    whyThisMatters:
      "A good heritage explanation is not a separate narrative added at the end. It is the design reasoning made clear enough for a decision-maker to understand.",
    continueLabel: "Continue: Make the response visible",
    continueCue:
      "The explanation is structured. Next, ensure that the drawings and details show the design response rather than merely claiming it.",
  },

  // --- Page 4 - Make the response visible ---
  {
    number: 4,
    title: "Make the response visible",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The proposal claims to retain identified timber and early doors, limit intervention in the rear range and reduce effects on the garden relationship. Those claims need to be visible in the submitted drawings and details.",
    task: "Identify what makes the design response credible.",
    evidence: [DESIGN_RESPONSE_SCHEDULE],
    alwaysAvailableEvidenceIds: [DESIGN_RESPONSE_SCHEDULE.id],
    question: "What makes this response credible?",
    options: [
      "A general statement that heritage has been considered.",
      "A clear line from evidence to option testing to design choices, with drawings and details showing the measures that avoid or reduce effects.",
      "A promise that all remaining heritage matters will be resolved on site.",
      "A list of traditional materials without explaining where or why they are used.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "A general assurance does not show how heritage understanding changed the design.",
      "This is the strongest response.\nIt allows the decision-maker to trace the project’s reasoning from evidence through to the proposed work.",
      "Some detailed matters may remain, but the consent-stage proposal needs a sufficiently clear response. Important design decisions should not be deferred without explanation.",
      "Materials can matter, but a list alone does not explain their relationship to the building, the effects of the proposal or the design response.",
    ],
    recordEntries: [
      {
        heading: "Known",
        entries: [
          "The proposal has been refined to retain identified timber and early doors, limit rear-range intervention and reduce effects on garden/access relationships.",
        ],
      },
      {
        heading: "Keep under review",
        entries: [
          "Detailed materials, junctions, service routes and conditions requiring further approval or confirmation before work starts.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The evidence identified exposed timber and a possible earlier opening. The option comparison avoided a larger intervention. The preferred design retained the timber and developed the opening strategy after investigation. The drawings show that response. That is a credible heritage case.",
      ],
    },
    comparisonCard: {
      heading: "If an Article 4 direction affects windows or boundary treatment",
      intro:
        "Show the existing condition, the feature or character at issue, the proposed change and the detailed response. The supporting material should make the relationship visible; it should not rely on generic claims about matching or traditional appearance.",
    },
    whyThisMatters:
      "The clearest applications let a reviewer see how understanding the asset has shaped the proposal. That makes the decision easier and reduces the risk that the built work later departs from the approved reasoning.",
    continueLabel: "Continue: Complete Chapter 5",
    continueCue:
      "The heritage case is clear and visible in the proposal. Review what needs to carry forward into technical design and delivery.",
  },

  // --- Page 5 - Chapter 5 complete ---
  {
    number: 5,
    title: "Chapter 5 complete",
    contentStatus: "draft",
    minutes: 1,
    projectMoment:
      "The project has explained the proposal through significance, effects and design response. The next heritage risk is not the application narrative; it is losing that rationale as details, procurement and site work develop.",
    task: "Identify what must carry forward after the consent decision.",
    evidence: [CHAPTER_5_OUTPUTS],
    alwaysAvailableEvidenceIds: [CHAPTER_5_OUTPUTS.id],
    question: "What is the strongest handover into detailed design and delivery?",
    options: [
      "File the consent material; technical design can now begin without reference to it.",
      "Carry forward the approved rationale, retained/protected fabric, detailed commitments, conditions and unresolved matters so that technical and site decisions remain aligned with the proposal.",
      "Assume consent removes the need for further heritage decisions.",
      "Use only the planning drawings because supporting material is no longer relevant.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "The consent material records decisions and commitments that need to guide the next stage. Starting technical work without it risks losing why the design is arranged as it is.",
      "This is the strongest handover.\nThe Heritage Record connects the consent-stage rationale to technical details, conditions and site decisions.",
      "Consent is a milestone, not the end of heritage management. Materials, junctions, protection measures and discoveries still require decisions.",
      "Supporting material explains why the design takes its approved form. It remains relevant when those decisions are translated into buildable information.",
    ],
    recordEntries: [
      {
        heading: "To establish",
        entries: [
          "Detailed materials, junctions, service routes, protection measures and any information required by conditions or further approvals.",
        ],
      },
      {
        heading: "Keep under review",
        entries: [
          "Whether technical development or site constraints alter the approved heritage response and require a further decision.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The consent drawings may show that exposed timber is retained. Chapter 6 must ensure that details, contractor instructions and site work preserve that intention rather than treating it as a planning-stage aspiration.",
      ],
    },
    whyThisMatters:
      "The heritage case needs to survive the transition from proposal to built work. Otherwise the project can obtain consent for one rationale and deliver another.",
    continueLabel: "Begin Chapter 6: Detailing and delivering work",
    continueCue:
      "The approved response now needs to become practical information and managed site decisions. Next, use compatible repair methods, protect fabric and manage material change.",
  },
];

const chapter = buildChapter("Chapter 5 · Gaining consent", RECORD_AFTER_CHAPTER_4, DRAFTS);

export const CHAPTER_5_PAGES = chapter.pages;
export const RECORD_AFTER_CHAPTER_5 = chapter.groupsAfter;
