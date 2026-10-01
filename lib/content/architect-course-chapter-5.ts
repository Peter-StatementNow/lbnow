/**
 * "Gaining consent" - Chapter 5.
 *
 * Source (1 Oct 2026): heritage-design-risk-chapters-2-to-7-revised-
 * content.md - a revised draft for content review. Transcribed from that
 * document, not paraphrased; edit here only against a newer version of
 * the source. Each page's `recordEntries` are the worked-position
 * entries exactly as the source gives them.
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
    "• No boundary-wall alteration in this phase.",
  ],
};

const CONSENT_AND_VALIDATION_CHECK: EvidenceItem = {
  id: "consent-and-validation-check",
  label: "Consent and validation check",
  body: [
    "CONSENT AND VALIDATION CHECK",
    "Before preparing supporting material, confirm:",
    "• The relevant consent or application route(s).",
    "• Current local validation requirements.",
    "• Whether the proposal affects any other heritage control or designation.",
    "• What level of supporting heritage information is proportionate to the proposal, evidence available and local requirements.",
    "Requirements vary by authority and proposal. Do not assume that one consent, one report or one level of information applies to every project.",
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
    "• Threshold/access design developed to limit effects on garden and boundary relationships.",
  ],
};

const CHAPTER_5_OUTPUTS: EvidenceItem = {
  id: "chapter-5-outputs",
  label: "Chapter 5 outputs",
  body: [
    "CHAPTER 5 OUTPUTS",
    "• Proposal explained through relevant significance, effects and design response.",
    "• Drawings and supporting material aligned.",
    "• Retention, protection and detail commitments identified.",
    "• Any conditions or further approvals identified for the next stage.",
  ],
};

const DRAFTS: PageDraft[] = [
  // --- Page 1 - Explain the heritage case ---
  {
    number: 1,
    title: "Explain the heritage case",
    contentStatus: "draft",
    minutes: 3,
    projectMoment:
      "The compact extension and limited rear-range alteration are now developed. Targeted investigation has informed the opening strategy, and the project needs to submit the right information for the relevant consent route.\nThe supporting material should not be a generic heritage report. It needs to explain this proposal: what matters, what changes and how the design responds.",
    task: "Identify the strongest structure for the heritage explanation.",
    taskDetail:
      "Before explaining the heritage case, confirm the relevant application route and current local validation requirements.",
    evidence: [CONSENT_AND_VALIDATION_CHECK, DEVELOPED_PROPOSAL],
    alwaysAvailableEvidenceIds: [CONSENT_AND_VALIDATION_CHECK.id, DEVELOPED_PROPOSAL.id],
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
        "A concise explanation could say: “The extension is kept compact to limit alteration of the rear range. Exposed timber and early doors are retained. The opening strategy follows targeted investigation. The threshold and access are designed to reduce change to the relationship between house, garden and route towards the coach house.”",
      ],
    },
    comparisonCard: {
      heading: "If the site were in a conservation area",
      intro:
        "Explain the relevant character or appearance of the area, the external features or relationships affected by the proposal, and how scale, form, materials, boundary treatment or landscape respond. The method is the same even where the consent route differs.",
    },
    whyThisMatters:
      "A good heritage explanation is not a separate narrative added at the end. It is the design reasoning made clear enough for a decision-maker to understand.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Make the response visible",
    continueCue:
      "The explanation is structured. Next, ensure that the drawings and details show the design response rather than merely claiming it.",
  },

  // --- Page 2 - Make the response visible ---
  {
    number: 2,
    title: "Make the response visible",
    contentStatus: "draft",
    minutes: 3,
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
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Complete Chapter 5",
    continueCue:
      "The heritage case is clear and visible in the proposal. Review what needs to carry forward into technical design and delivery.",
  },

  // --- Page 3 - Chapter 5 complete ---
  {
    number: 3,
    title: "Chapter 5 complete",
    contentStatus: "draft",
    minutes: 2,
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
    saveLabel: "Save and complete Chapter 5",
    continueLabel: "Begin Chapter 6: Detailing and delivering work",
    continueCue:
      "The approved response now needs to become practical information and managed site decisions. Next, use compatible repair methods, protect fabric and manage material change.",
  },
];

const chapter = buildChapter("Chapter 5 · Gaining consent", RECORD_AFTER_CHAPTER_4, DRAFTS);

export const CHAPTER_5_PAGES = chapter.pages;
export const RECORD_AFTER_CHAPTER_5 = chapter.groupsAfter;
