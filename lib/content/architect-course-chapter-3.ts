/**
 * "Developing the design" - Chapter 3.
 *
 * Source (1 Oct 2026): heritage-design-risk-chapters-2-to-7-revised-
 * content.md - a revised draft for content review. Transcribed from that
 * document, not paraphrased; edit here only against a newer version of
 * the source. Each page's `recordEntries` are the worked-position
 * entries exactly as the source gives them.
 */

import { buildChapter, type EvidenceItem, type PageDraft } from "@/lib/content/course-model";
import { RECORD_AFTER_CHAPTER_2 } from "@/lib/content/architect-course-chapter-2";

const EMERGING_OPTIONS: EvidenceItem = {
  id: "emerging-options",
  label: "Emerging options",
  body: [
    "OPTION A — COMPACT REAR EXTENSION",
    "Small extension to the rear of the main house. Limited internal alteration in rear range. Retains exposed timber in its present location.",
    "OPTION B — REWORK THE REAR RANGE",
    "No new extension. Reconfigure the rear range, including changes to partitions, services and finishes around exposed timber and a blocked opening.",
    "OPTION C — LARGER GARDEN-FACING EXTENSION",
    "Larger extension with new garden threshold, revised access and greater change to the relationship between house, garden and route towards coach house.",
  ],
};

const OPENING_OPTIONS: EvidenceItem = {
  id: "opening-options",
  label: "Opening options",
  body: [
    "OPTION 1 — NEW OPENING",
    "Create a new opening through the rear wall to connect kitchen and extension.",
    "OPTION 2 — ADAPT EXISTING WINDOW",
    "Convert an existing rear window into a door, with a new threshold and access arrangement to the garden.",
    "OPTION 3 — RETAIN CURRENT OPENINGS",
    "Retain current openings and resolve connection through a different internal layout and extension arrangement.",
    "KNOWN ISSUES",
    "• The rear wall contains evidence of altered openings and patchy finishes.",
    "• Exposed timber is present within the rear range.",
    "• The existing plan does not confirm structure or earlier interventions.",
  ],
};

const PREFERRED_DIRECTION: EvidenceItem = {
  id: "preferred-direction",
  label: "Preferred direction",
  body: [
    "PREFERRED DIRECTION",
    "• Compact rear extension.",
    "• Limited rear-range alteration.",
    "• Retain exposed timber and identified early doors where possible.",
    "• Investigate whether adapting the existing rear window, forming a carefully located new opening, or retaining current openings is the most appropriate response.",
    "• Develop garden threshold, access and boundary implications through next design stage.",
  ],
};

const CURRENT_IMPLICATIONS: EvidenceItem = {
  id: "current-implications",
  label: "Preferred direction: current implications",
  pageAid: true,
  body: [
    "CURRENT IMPLICATIONS",
    "• The preferred works may require listed building consent, alongside any other relevant approvals.",
    "• The exact route is not yet confirmed.",
    "• Targeted investigation and design development are needed to finalise the opening strategy and explain effects.",
    "• Proportionate supporting heritage information may be required.",
    "• Depending on evidence gaps, complexity and local requirements, specialist heritage advice or a heritage statement may be proportionate.",
    "• Preparation, determination, requests for clarification or design refinement may affect timing.",
  ],
};

const DRAFTS: PageDraft[] = [
  // --- Page 1 - Test the options ---
  {
    number: 1,
    title: "Test the options",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The client wants a larger kitchen and family space. Three credible approaches are being discussed: a compact rear extension; reworking the existing rear range; or a larger extension with more substantial changes to the garden and access.\nThe heritage question is not “can anything change?” It is how the options differ in what they change and how those effects can be avoided, reduced or justified.",
    task: "Identify the strongest option-testing question.",
    evidence: [EMERGING_OPTIONS],
    alwaysAvailableEvidenceIds: [EMERGING_OPTIONS.id],
    question: "What should be compared before a preferred option is selected?",
    options: [
      "Which option creates the largest kitchen, because client benefit should be decided before heritage matters are considered.",
      "How each option meets the brief and affects identified fabric, spaces, relationships and setting; what can be avoided or reduced; and what information is still needed before the effect is understood.",
      "Which option looks most contemporary, because contrast is always the safest heritage response.",
      "Which option creates the least visible change from Church Lane, because rear effects do not matter.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Client benefit matters, but it is not separate from heritage decision-making. The project needs to understand benefits and effects together before one option becomes the assumed answer.",
      "This is the strongest comparison.\nIt keeps the evidence from Chapter 2 connected to real design choices and makes visible where the design can reduce effects before the preferred option is fixed.",
      "Contemporary appearance alone does not decide an appropriate response. The project needs to assess the particular building, fabric, spaces, setting and effects of each option.",
      "Visibility can matter, but it is not the only question. Rear work may affect significant fabric, garden relationships, access, boundary features or the setting of the asset.",
    ],
    recordEntries: [
      {
        heading: "Keep under review",
        entries: [
          "How Options A, B and C meet the client brief and affect the rear range, identified fabric, internal spaces, garden, boundary wall, access and coach-house relationship.",
          "Whether proposed openings, services, threshold changes, footprint, landscape or boundary treatment can be avoided, reduced or relocated.",
        ],
      },
      {
        heading: "To establish",
        entries: [
          "The specific fabric affected by each credible opening or internal alteration.",
          "Whether further investigation is needed to compare likely effects before a preferred option is selected.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "Option A may create less change in the rear range but require a new opening. Option B avoids a new extension but may alter more existing fabric. Option C may meet the family brief most fully but change garden and access relationships. There is no automatic answer; the project must test the actual effects.",
      ],
    },
    comparisonCard: {
      heading: "If the trigger were a conservation area or Article 4 direction",
      intro:
        "Compare how each option affects the particular character or feature at issue: an elevation, window pattern, roof form, boundary wall, plot rhythm or street relationship. Verify the relevant control, then use it to sharpen the design questions—not to select a solution automatically.",
    },
    whyThisMatters:
      "Heritage-informed design is not a late check on a finished scheme. It is the process of changing the option while it is still flexible enough to respond to what matters.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Test the opening before fixing it",
    continueCue:
      "The options are clear. Next, examine a new or altered opening before the kitchen layout, extension position or access design makes it difficult to change.",
  },

  // --- Page 2 - Test the opening before fixing it ---
  {
    number: 2,
    title: "Test the opening before fixing it",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "Across the emerging options, the project needs to test how the kitchen and family space connect to the garden. One possible approach forms a new opening through the rear wall. Another converts an existing rear window into a door.\nBoth may be practical. Both may remove historic fabric, alter evidence of development or change the composition of the rear elevation. The opening strategy should be tested before it becomes a fixed instruction.",
    task: "Identify the most useful first question before selecting an opening strategy.",
    evidence: [OPENING_OPTIONS],
    alwaysAvailableEvidenceIds: [OPENING_OPTIONS.id],
    question: "What should the project establish before treating an opening location as fixed?",
    options: [
      "Which location creates the shortest route between kitchen and garden.",
      "Which option affects the least visible elevation.",
      "What fabric, evidence of development, proportion and external composition each option affects; whether an existing opening can be used or adapted; and how structure, threshold, access and drainage affect the proposed intervention.",
      "Whether the client prefers a door or a window.",
    ],
    expectedIndex: 2,
    optionFeedback: [
      "Circulation is important, but it is not the only decision. The shortest route may require the greatest removal of fabric or create a less appropriate relationship with the existing building.",
      "Visibility can be relevant, but it does not determine the effect on historic fabric, evidence of development, elevation composition or technical implications.",
      "This is the strongest approach.\nA new or adapted opening is not only a circulation decision. It can remove historic fabric, alter the legibility and composition of an elevation, affect internal evidence and create structural, threshold, access and drainage implications. Test the actual alternatives before the location becomes a fixed design assumption.",
      "The client’s preference matters, but it should be considered alongside the building evidence and the effects of the available options.",
    ],
    recordEntries: [
      {
        heading: "To establish",
        entries: [
          "Fabric, structure and evidence of development at each potential opening location.",
          "The effect of a new opening or window-to-door conversion on the rear elevation, internal space and surviving fabric.",
          "Whether an existing opening can be used or adapted with less effect.",
        ],
      },
      {
        heading: "Keep under review",
        entries: [
          "Opening size, proportion, threshold, access, drainage, joinery and relationship to the proposed extension.",
          "Whether opening-up or specialist structural/fabric advice is proportionate before the opening position is fixed.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The preferred answer may be a smaller adapted opening, a carefully located new opening, or a different layout that avoids one altogether. The learning point is that opening strategy is tested against fabric and composition before it becomes a kitchen-planning assumption.",
      ],
    },
    comparisonCard: {
      heading: "If the building were in a conservation area",
      intro:
        "A window-to-door conversion or new opening may affect the building’s contribution to character and appearance, particularly where the elevation is visible or has a clear pattern of openings. Test existing proportions, materials, threshold treatment and relationship to the street or garden rather than assuming that a rear elevation is automatically less sensitive.",
    },
    mythCard: {
      title: "Rear does not automatically mean low impact",
      myth:
        "“A new opening or a window-to-door conversion at the back of a building is a minor heritage change.”",
      remember:
        "A rear opening can remove historic fabric, alter evidence of a building’s development, change the composition of an elevation and create effects at the threshold, access and drainage. Test the actual intervention before treating it as a routine kitchen or circulation decision.",
      separate:
        "A rear intervention may be appropriate. The point is not that it cannot happen; it is that its effect depends on the particular fabric, spaces, elevation and relationships affected.",
    },
    whyThisMatters:
      "New, enlarged or adapted openings often become one of the most consequential heritage decisions in a domestic project. They can trigger investigation, design revision, consent implications and later site discoveries.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Select a preferred direction",
    continueCue:
      "The opening strategy has been tested alongside the wider options. Next, record the preferred direction and the conditions that still need to be addressed.",
  },

  // --- Page 3 - Select a preferred direction ---
  {
    number: 3,
    title: "Select a preferred direction",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The client prefers a refined version of Option A: a compact rear extension, limited reworking of the rear range, retention of exposed timber and early doors where possible, and further testing of the garden connection.\nThe decision is useful, but it is not the end of the heritage work. The record needs to distinguish a preferred direction from a settled design and consent position.",
    task: "Record the preferred direction in a way that preserves the decisions still to be made.",
    evidence: [PREFERRED_DIRECTION],
    alwaysAvailableEvidenceIds: [PREFERRED_DIRECTION.id],
    question: "Which Heritage Record entry is most useful?",
    options: [
      "Preferred option approved: compact rear extension. Heritage issues resolved.",
      "Preferred direction: develop a compact rear extension with limited rear-range alteration; retain identified fabric where possible; confirm the opening strategy, affected fabric, detailed junctions, garden/access effects and relevant consent route before the design is treated as settled.",
      "Preferred direction: stop all design work until formal consent is granted.",
      "Preferred direction: proceed with the client’s choice; heritage matters can be explained later if an application is needed.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "A preferred direction is not a resolved heritage position. The record should retain the questions that could alter the detail, scope or route of the work.",
      "This is the strongest entry.\nIt records a clear design preference while keeping the material heritage conditions visible for the next decisions.",
      "Design development can continue. The point is to develop it against the Heritage Record, not to suspend all work until approval is obtained.",
      "Deferring heritage explanation until later risks developing a preference around assumptions that may need revision.",
    ],
    recordEntries: [
      {
        heading: "Known",
        entries: [
          "The preferred direction is a compact rear extension with limited reworking of the rear range.",
        ],
      },
      {
        heading: "To establish",
        entries: [
          "Whether adapting the existing rear window or creating a new opening is the more appropriate response once fabric, structure and elevation effects are known.",
        ],
      },
      {
        heading: "Keep under review",
        entries: [
          "Retention, repair or alteration of exposed timber, finishes, doors and evidence of earlier openings.",
          "Opening size, proportion, threshold, access, drainage, garden landscape and boundary-wall implications.",
        ],
      },
      {
        heading: "Decision point",
        entries: [
          "Before the preferred direction is treated as settled, confirm affected fabric, opening strategy, detailed effects, proportionate evidence requirements and the relevant consent route.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The client can choose a direction without the project claiming that every detail is resolved. The Heritage Record explains what the choice depends on and what must be answered before the option becomes a commitment.",
      ],
    },
    comparisonCard: {
      heading: "If the building were locally listed",
      intro:
        "Record how the preferred direction responds to the building’s identified local value, while retaining questions about materials, external details, affected features and the planning route. Local listing changes the evidence and policy context; it does not eliminate the need for design judgement.",
    },
    whyThisMatters:
      "A preferred option often becomes difficult to change because cost, programme and client expectation begin to form around it. The Heritage Record keeps the important conditions visible before that happens.",
    saveLabel: "Save to Heritage Record",
    continueLabel: "Continue: Complete Chapter 3",
    continueCue:
      "A preferred direction has been selected with its heritage conditions visible. Next, prepare the client for the approval, information, cost and timing implications.",
  },

  // --- Page 4 - Chapter 3 complete ---
  {
    number: 4,
    title: "Chapter 3 complete",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The project has selected a preferred direction. The remaining heritage questions are focused: the opening strategy, affected fabric, detailed design, garden/access effects and the relevant consent route.\nBefore the client treats the direction as a fixed scope, budget or start date, they need a clear conversation about what the likely approval process may add to the project.",
    task: "Identify what the client needs to understand next.",
    evidence: [CURRENT_IMPLICATIONS],
    alwaysAvailableEvidenceIds: [CURRENT_IMPLICATIONS.id],
    question: "What is the most useful client-facing position at this point?",
    options: [
      "Confirm that listed building consent will be granted once the preferred drawings are complete.",
      "Explain that the preferred direction may require listed building consent and proportionate supporting information; confirm the route as the design and evidence develop; allow for possible heritage-statement/specialist input, application preparation, determination and potential clarification or refinement before presenting the scope, cost or start date as fixed.",
      "Tell the client that heritage approval is likely to be too difficult, so a different project should be chosen now.",
      "Avoid discussing approvals or potential delay until an application is ready to submit.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "This gives the client a certainty the project does not yet have. A credible preferred direction may support a positive route, but consent outcome and timing should not be promised before the relevant evidence, design and requirements are known.",
      "This is the strongest client position.\nIt is clear without being alarmist. It explains the likely dependency, what may be needed, what remains to be confirmed and why the project should not yet present price, programme or approval outcome as fixed.",
      "This is unnecessarily pessimistic. The project has a credible direction; it needs proportionate information and a realistic conversation about route, timing and possible refinement.",
      "Waiting until submission preparation makes an important project dependency appear late and unexpected. The client should understand it while the design and commercial assumptions are still adaptable.",
    ],
    recordEntries: [
      {
        heading: "Client conversation",
        entries: [
          "The preferred direction may require listed building consent and possibly other relevant approvals; confirm the route as design and evidence develop.",
          "Allow for proportionate supporting heritage information and, where justified by the evidence gap, complexity or local requirements, a heritage statement and/or specialist heritage advice.",
          "Explain that preparation, determination and possible clarification or design refinement may affect timing.",
        ],
      },
      {
        heading: "Decision point",
        entries: [
          "Before scope, cost, programme or approval outcome is presented as fixed, confirm the opening strategy, affected fabric, relevant consent route and proportionate supporting-information requirements.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "“The preferred direction is viable, but it may require listed building consent and supporting heritage information. We need to confirm the opening detail, affected fabric and local requirements before we can define the full application scope with confidence. We should allow for preparation and determination, and for the possibility of clarification or refinement.”",
      ],
    },
    whyThisMatters:
      "This is not a lesson in consent process. It is the point at which a heritage-sensitive proposal changes the client’s understanding of what can be promised, what needs allowing for and when decisions become reliable.",
    saveLabel: "Save and complete Chapter 3",
    continueLabel: "Begin Chapter 4: Managing client, cost and programme",
    continueCue:
      "The client understands the likely approval dependency. Next, make the targeted implications for fee, contingency and timing visible without creating a separate project lifecycle.",
  },
];

const chapter = buildChapter(
  "Chapter 3 · Developing the design",
  RECORD_AFTER_CHAPTER_2,
  DRAFTS
);

export const CHAPTER_3_PAGES = chapter.pages;
export const RECORD_AFTER_CHAPTER_3 = chapter.groupsAfter;
