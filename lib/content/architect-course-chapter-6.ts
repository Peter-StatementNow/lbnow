/**
 * "Detailing and delivering work" - Chapter 6.
 *
 * Source (1 Oct 2026): heritage-design-risk-chapters-2-to-7-revised-
 * content.md - a revised draft for content review. Transcribed from that
 * document, not paraphrased; edit here only against a newer version of
 * the source. Each page's `recordEntries` are the worked-position
 * entries exactly as the source gives them.
 *
 * Site discovery (Peter, 1 Oct 2026): a concealed timber member and
 * earlier wall fabric at the proposed rear opening - this replaces the
 * earlier fireplace-opening/timber-lintel example.
 */

import { buildChapter, type EvidenceItem, type PageDraft } from "@/lib/content/course-model";
import { RECORD_AFTER_CHAPTER_5 } from "@/lib/content/architect-course-chapter-5";

const REPAIR_NOTE: EvidenceItem = {
  id: "repair-note",
  label: "Repair note",
  body: [
    "REPAIR ISSUE",
    "• Patchy historic plaster and later repairs are present around the altered opening.",
    "• The plaster type, condition and cause of deterioration are not yet confirmed.",
    "• The rear range has exposed timber and evidence of earlier alteration.",
    "• The contractor proposes full removal and gypsum replastering.",
  ],
};

const COMMITMENTS: EvidenceItem = {
  id: "commitments-to-carry-forward",
  label: "Commitments to carry forward",
  body: [
    "COMMITMENTS TO CARRY FORWARD",
    "• Retain exposed timber in rear range.",
    "• Avoid removal of identified early doors.",
    "• Use the investigated opening strategy.",
    "• Repair historic plaster using the agreed compatible method.",
    "• Limit intervention in the rear range.",
    "• Develop threshold/access to reduce effects on garden relationships.",
    "• Confirm materials and junctions as needed before work starts.",
  ],
};

const SITE_DISCOVERY: EvidenceItem = {
  id: "site-discovery",
  label: "Site discovery and proposed change",
  body: [
    "SITE DISCOVERY",
    "Opening-up reveals a concealed timber member and earlier wall fabric at the proposed opening location. The extent and condition are unclear.",
    "POSSIBLE RESPONSES",
    "• Adjust or reduce the opening.",
    "• Relocate the opening.",
    "• Use a larger structural intervention.",
    "• Retain more fabric and revise kitchen layout.",
    "• Investigate further before deciding.",
    "APPROVED POSITION",
    "• The submitted proposal relied on a limited intervention and an opening strategy developed following targeted investigation.",
  ],
};

const COMPLETION_SUMMARY: EvidenceItem = {
  id: "completion-summary",
  label: "Completion summary",
  body: [
    "WORKS COMPLETED / CHANGED",
    "• Compact rear extension completed.",
    "• Rear-range opening relocated or adjusted following discovery of concealed timber.",
    "• Exposed timber and identified early doors retained.",
    "• Historic plaster repaired using agreed compatible method.",
    "• Kitchen services rerouted.",
    "• Threshold detail revised during construction.",
    "• Boundary wall not altered in this phase.",
  ],
};

const DRAFTS: PageDraft[] = [
  // --- Page 1 - Choose compatible repair methods ---
  {
    number: 1,
    title: "Choose compatible repair methods",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "During detailed design and opening-up, damaged plaster is identified around an altered opening in the rear range. The contractor proposes removing the damaged material and replastering with gypsum because it is familiar, quick and readily available.\nThe project needs to decide whether that is an appropriate repair assumption before the specification is issued.",
    task: "Identify the most useful next step before specifying the repair.",
    evidence: [REPAIR_NOTE],
    alwaysAvailableEvidenceIds: [REPAIR_NOTE.id],
    question: "What should the project do before specifying the repair?",
    options: [
      "Use gypsum plaster because it is readily available and will produce a neat finish quickly.",
      "Identify the existing material and its condition; establish whether repair is possible; understand the likely cause of deterioration; use compatible methods/materials; and obtain appropriate technical or specialist advice where uncertainty remains.",
      "Replace all visible old plaster because any historic finish is likely to fail again.",
      "Leave the issue entirely to the contractor’s preferred method because repair decisions are construction details.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Familiarity and speed do not establish compatibility. A modern substitute can alter moisture behaviour, finishes and the relationship with retained historic fabric.",
      "This is the strongest response.\nThe project first understands what is there and why it has failed, then decides whether repair, local renewal or another intervention is appropriate. Compatible material and method are decisions based on the building, not simply on convenience.",
      "Wholesale replacement may sometimes be necessary, but it should not be an automatic response. Retained fabric, local repair and the cause of deterioration all need consideration.",
      "Repair decisions can affect significant fabric, building performance and the approved heritage response. The contractor’s experience is valuable, but the method needs an informed project decision where heritage issues are material.",
    ],
    recordEntries: [
      {
        heading: "To establish",
        entries: [
          "Existing plaster type, condition and likely cause of deterioration.",
          "Whether local repair is possible and what compatible material/method is appropriate.",
          "Whether moisture, ventilation, salts, movement or previous interventions are contributing to failure.",
        ],
      },
      {
        heading: "Keep under review",
        entries: [
          "Whether proposed repairs, finishes and service work remain compatible with retained historic fabric and the building’s performance.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The project may conclude that local lime-based repair is appropriate, that a later incompatible patch needs careful removal, or that a moisture issue must be addressed first. Lime repair may be appropriate where the existing material, condition and building performance support it; it is not a substitute for identifying the existing fabric and the cause of failure. It should not specify gypsum simply because it is the familiar default without understanding the existing fabric and cause of failure.",
      ],
    },
    resourcePrompt:
      "Use recognised conservation guidance and suitably experienced advice where needed. Historic England and the Society for the Protection of Ancient Buildings provide practical guidance on repair principles, traditional materials and appropriate working methods. Use manufacturer information as technical support for a selected compatible system, not as a substitute for understanding the historic fabric.",
    comparisonCard: {
      heading: "If the work involves windows, joinery or a boundary wall",
      intro:
        "The same principle applies: identify the existing material, condition and cause of failure; consider repair before replacement where appropriate; use compatible methods; and seek suitably experienced advice when the intervention could affect significant fabric or character.",
    },
    mythCard: {
      title: "Replacement is not automatically repair",
      myth:
        "“Replacing traditional fabric with a modern material that looks similar is the same as repair.”",
      remember:
        "Repair starts by identifying the existing material, its condition and the cause of failure. Where repair or local renewal is appropriate, method and material need to be compatible with the retained historic fabric and the building’s performance.",
      separate:
        "This is not an automatic rule that every historic plaster repair must use lime, or that replacement is never justified. The project should understand the existing fabric and condition before specifying the intervention.",
    },
    whyThisMatters:
      "Repair versus renewal is often a heritage decision, not just a specification choice. Small material decisions—such as an incompatible plaster—can have significant consequences for fabric, appearance and building performance.",
    continueLabel: "Continue: Keep the rationale in the details",
    continueCue:
      "The repair method has been approached proportionately. Next, translate all retention, protection and repair decisions into practical information for delivery.",
  },

  // --- Page 2 - Keep the rationale in the details ---
  {
    number: 2,
    title: "Keep the rationale in the details",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "Technical drawings now need to resolve the opening, retained timber, services, plaster repairs, threshold and materials. The contractor needs clear information, not a general statement that heritage has been considered.",
    task: "Identify the heritage addition to normal technical information.",
    evidence: [COMMITMENTS],
    alwaysAvailableEvidenceIds: [COMMITMENTS.id],
    question: "What should be added to the technical package?",
    options: [
      "Nothing beyond the planning drawings; the contractor can resolve sensitive details on site.",
      "Coordinated details, specifications, repair/protection notes and responsibilities that show what is retained, what requires compatible treatment, what needs a hold point and what needs further approval before it is built.",
      "A generic instruction to use traditional materials wherever possible.",
      "Removal of heritage notes to avoid confusing the contractor.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Planning drawings do not resolve every technical issue. Leaving sensitive work to informal site decisions risks changing the approved response without evidence or control.",
      "This is the strongest addition.\nIt makes the heritage rationale practical: the contractor can see what must be retained, protected or repaired compatibly, and when a decision needs referral before irreversible work.",
      "General material language does not identify the specific fabric, methods, junctions or decisions that matter in this project.",
      "The contractor needs concise, practical heritage information. Removing it creates ambiguity at the point where the work becomes irreversible.",
    ],
    recordEntries: [
      {
        heading: "Actions for delivery",
        entries: [
          "Identify retained timber, doors, finishes and evidence of earlier openings in details/specification.",
          "State agreed compatible repair methods and materials where they affect historic fabric, including plaster repairs.",
          "Set protection measures and hold points before irreversible work in areas of identified uncertainty.",
          "Refer any departure from approved retention, opening, repair, threshold or access approach through the agreed decision route.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "A detail can identify the retained timber, show new work stopping short of it, specify protection during construction, define the compatible plaster repair and require review before concealed fabric at the opening is cut or removed.",
      ],
    },
    comparisonCard: {
      heading: "If an Article 4 direction affected windows or doors",
      intro:
        "Carry the approved profiles, materials, glazing, fixings and installation details into procurement and site information. Do not allow an untested substitution to undo the response that supported the permission.",
    },
    whyThisMatters:
      "Technical design is where a heritage response stops being an intention and becomes an instruction. The Heritage Record ensures that reasoning, repair method and protection requirements are not lost between approval and construction.",
    continueLabel: "Continue: Respond to a material discovery or change",
    continueCue:
      "The contractor has clear instructions. Next, manage a discovery or proposed change that could alter the approved work and may require further formal agreement.",
  },

  // --- Page 3 - Respond to a material discovery or change ---
  {
    number: 3,
    title: "Respond to a material discovery or change",
    contentStatus: "draft",
    minutes: 3,
    projectMoment:
      "Opening-up at the proposed opening reveals a concealed timber member and earlier wall fabric. The contractor suggests a larger structural intervention or moving the opening to keep the programme moving.\nThe revised work may affect more historic fabric than shown in the approved proposal. It may also change the consent position.",
    task: "Identify the strongest response before irreversible work continues.",
    evidence: [SITE_DISCOVERY],
    alwaysAvailableEvidenceIds: [SITE_DISCOVERY.id],
    question: "What should happen before the change is agreed?",
    options: [
      "Move or enlarge the opening immediately if it keeps the programme on track.",
      "Hold the affected irreversible work; record and assess the discovery and credible responses; compare them with the approved drawings, conditions and consent rationale; obtain suitable design/specialist advice; confirm with the relevant authority whether the change can proceed under the existing approval, requires a condition discharge or other formal agreement, or requires a further application or consent; then issue a documented instruction.",
      "Continue the original work because the concealed fabric was not visible when consent was obtained.",
      "Assume every site change requires a new listed building consent and stop the whole project until this is obtained.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Programme pressure is real, but an unrecorded change can create a new heritage, consent, cost and delivery problem. The project needs enough information to choose a response deliberately.",
      "This is the strongest response.\nIt uses the Heritage Record as practical change control. Not every site change requires a new consent, but a material departure from the approved approach should be assessed against the approval and the relevant formal position confirmed before irreversible work proceeds.",
      "A concealed condition explains why it was not shown earlier; it does not remove the need to assess it once it is known.",
      "This is too absolute. The project should not assume every change requires additional consent, but it also should not rely on an informal decision where a material change may affect the approved heritage response.",
    ],
    recordEntries: [
      {
        heading: "Site change / consent check",
        entries: [
          "Discovery or proposed change: Concealed timber member and earlier wall fabric at proposed opening; potential relocation, reduction or larger structural intervention.",
          "Approved position affected: Limited intervention and opening strategy described in approved drawings and supporting heritage rationale.",
          "To establish: Extent, condition and significance of fabric; revised design options; effect on approved approach; required design/specialist advice; and, with the relevant authority, whether the change can proceed under the existing approval, requires a condition discharge or other formal agreement, or requires a further application or consent.",
          "Decision point: Do not proceed with irreversible work until the project and approval position are confirmed and a documented instruction is issued.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "The project may reduce and relocate the opening, retain the newly discovered timber, adjust the kitchen layout and confirm the revised position with the relevant authority where required. The learning point is not that every change needs a new consent; it is that material departures are not authorised by a hurried site conversation.",
      ],
    },
    comparisonCard: {
      // Replaced 5 Oct 2026 (associated features amendments): the
      // boundary wall is not part of the current delivery story.
      heading: "If a future or amended proposal affects the boundary wall, gate piers or former coach house",
      intro:
        "If a future or amended proposal affects the boundary wall, gate piers or former coach house, treat that as a separate project question: record the proposed works, verify relevant status and significance, assess effects and confirm the appropriate approval route before irreversible work proceeds.",
    },
    whyThisMatters:
      "Unexpected fabric is normal in historic buildings. The risk is not discovery itself; it is allowing time pressure to turn discovery into informal, irreversible design drift or an untested departure from the approved position.",
    continueLabel: "Continue: Complete Chapter 6",
    continueCue:
      "The material change has been managed. Review what must be recorded at completion so future care and change begin from evidence.",
  },

  // --- Page 4 - Chapter 6 complete ---
  {
    number: 4,
    title: "Chapter 6 complete",
    contentStatus: "draft",
    minutes: 2,
    projectMoment:
      "The works are complete. The opening location changed after discovery; exposed timber and early doors were retained; compatible plaster repair was carried out; services and threshold details were adjusted. The client needs information that shows what was actually built, not only what was originally intended.",
    task: "Identify the heritage information that belongs in the completion record.",
    evidence: [COMPLETION_SUMMARY],
    alwaysAvailableEvidenceIds: [COMPLETION_SUMMARY.id],
    question: "What should be added to the completion record?",
    options: [
      "Only the final account and warranties.",
      "What was approved, what was built, material changes and their reasons, retained/repaired fabric, useful photographs and drawings, repair materials/methods, and information needed for care or future alteration.",
      "Only the original consent drawings.",
      "A general note that the project was completed in accordance with the contract.",
    ],
    expectedIndex: 1,
    optionFeedback: [
      "Commercial records are important, but they do not explain the heritage-relevant decisions, discoveries, repair methods and retained fabric that future teams may need to understand.",
      "This is the strongest completion record.\nIt distinguishes the approved intention from the built outcome and preserves the reasons for material changes and the information needed to care for the completed work.",
      "Original drawings do not show discoveries, agreed changes, repair methods or final built details.",
      "A general completion statement does not provide the building knowledge needed for later maintenance, repair, consent discussions or design work.",
    ],
    recordEntries: [
      {
        heading: "Completion record",
        entries: [
          "Approved approach and final built works recorded.",
          "Discovery and revised opening location recorded, with reason for change and any formal approval position.",
          "Retained timber, early doors and relevant repaired fabric identified.",
          "Compatible plaster repair method/material recorded.",
          "Materials, junctions, service routes and threshold detail recorded where useful.",
          "Boundary wall unchanged in this phase; future work remains an open item.",
        ],
      },
    ],
    workedExample: {
      paragraphs: [
        "A future project should be able to see that the opening moved because concealed timber was discovered, where that timber was retained, how plaster was repaired and how the kitchen/services were adapted around it.",
      ],
    },
    whyThisMatters:
      "Construction creates new knowledge about a historic building. If it is not recorded, the next owner or project team begins again with avoidable uncertainty.",
    continueLabel: "Begin Chapter 7: Handover and the next change",
    continueCue:
      "The built work is recorded. Next, keep the essential information for care and the next project without turning handover into an archive exercise.",
  },
];

const chapter = buildChapter(
  "Chapter 6 · Detailing and delivering work",
  RECORD_AFTER_CHAPTER_5,
  DRAFTS
);

export const CHAPTER_6_PAGES = chapter.pages;
export const RECORD_AFTER_CHAPTER_6 = chapter.groupsAfter;
