/**
 * Chapters 2-7 of Heritage Design Risk for Architects - a content-light
 * navigable framework, rebuilt 24 Sep 2026 from the actual agreed
 * source (course-design-discussion-from-2026-09-24-1034.md), after two
 * earlier attempts built content from lossy paraphrases of it instead.
 * Placeholder wording throughout: one task per chapter, not the fully
 * realised three-activity treatment Module 1 has. Not final guidance -
 * see PROTOTYPE_NOTICE.
 *
 * Case: The Old Vicarage, Church Lane, Ashcombe - Grade II listed,
 * confirmed from the client's own first email (see
 * architect-course-module-1.ts). There is no reveal anywhere in this
 * course - the source document states this explicitly:
 *
 *   "No false twist: the house does not suddenly become Grade II
 *   listed halfway through."
 *
 * Every chapter instead builds on a known listed asset: establishing
 * the baseline, testing design against it, communicating it honestly,
 * getting consent, handling a genuine site discovery (an unrecorded
 * fireplace/lintel behind later finishes - not a generic "old
 * brickwork" find), and handing over a durable record. The coach
 * house and boundary wall are flagged throughout (ScopeBoundaryCard),
 * never resolved - curtilage/associated-structure analysis is
 * explicitly reserved for a future advanced module, per the source
 * document's "flag, do not teach" rule.
 */

import {
  HERITAGE_RECORD_AFTER_ACTIVITY_3,
  TOTAL_COURSE_MINUTES,
  initialHeritagePositionEvidence,
  type EvidenceItem,
  type HeritageRecordState,
} from "@/lib/content/architect-course-module-1";
import type { ComparisonCardContent } from "@/components/course/ComparisonCard";
import type { ScopeBoundaryCardContent } from "@/components/course/ScopeBoundaryCard";

export const PROTOTYPE_NOTICE =
  "Prototype content. This chapter uses placeholder wording to test structure and flow - not final heritage guidance.";

/** Minutes per chapter; chapter 1 (7) plus chapters 2-7 sum to the course total. */
export const CHAPTER_MINUTES: Record<number, number> = {
  1: 7,
  2: 9,
  3: 8,
  4: 7,
  5: 8,
  6: 9,
  7: 8,
};

export function courseProgress(completedChapters: number[]) {
  const completedMinutes = completedChapters.reduce(
    (sum, chapter) => sum + (CHAPTER_MINUTES[chapter] ?? 0),
    0
  );
  return {
    percentComplete: Math.round((completedMinutes / TOTAL_COURSE_MINUTES) * 100),
    minutesLeft: Math.max(TOTAL_COURSE_MINUTES - completedMinutes, 0),
  };
}

export type ChapterActivityContent = {
  chapterNumber: number;
  stageLabel: string;
  projectMoment: string;
  task: string;
  predictionPrompt: string;
  predictionOptions: string[];
  predictionExpectedIndex: number;
  predictionFeedback: string;
  evidence: EvidenceItem[];
  recordAfter: HeritageRecordState;
  workedExample: string;
  whyThisMatters: string;
  saveLabel: string;
  comparisonCard: ComparisonCardContent;
  scopeBoundaryCard: ScopeBoundaryCardContent;
  nextStageHeading: string;
  nextStageBody: string;
};

// --- Chapter 2: Understanding the existing building and place -------------

const LIST_ENTRY_EXTRACT: EvidenceItem = {
  id: "list-entry-extract",
  label: "Statutory list entry (extract)",
  body: [
    "Grade: II",
    "The Old Vicarage. Early C19 former vicarage, rendered brick with slate roof, two storeys, symmetrical principal (street) elevation with later rear service wing.",
    "List description references the principal elevations and plan form; does not itemise the coach house or boundary wall by name.",
    "(Prototype content - illustrative wording, not a real list entry.)",
  ],
};

const SITE_VISIT_NOTE: EvidenceItem = {
  id: "site-visit-note",
  label: "Site visit note",
  body: [
    "Principal elevation to Church Lane largely unaltered; rear service wing shows several phases of later alteration.",
    "Coach house appears contemporary with the house; boundary wall in mixed brick, with one opening that may be a later insertion.",
    "Internal inspection not yet carried out; several later finishes visible that may conceal earlier fabric.",
  ],
};

export const CHAPTER_2: ChapterActivityContent = {
  chapterNumber: 2,
  stageLabel: "2. Understanding the existing building and place",
  projectMoment:
    "A site visit and initial research are underway. The Old Vicarage's listing is confirmed, but nothing yet establishes what it actually covers, how the building has changed over time, or what remains uncertain about the coach house, wall and previous alterations.",
  task: "Build a proportionate heritage baseline before design options are considered.",
  predictionPrompt: "Which is the safest way to approach the baseline?",
  predictionOptions: [
    "Treat the whole property, including the coach house and wall, as equally and fully protected until told otherwise.",
    "Establish what the list entry covers, what the fabric and plan form show, and what remains uncertain - proportionate to the scope proposed.",
    "Focus only on the elements visible from Church Lane, since that is what passers-by would notice.",
    "Wait for the planning authority to identify what matters once an application is submitted.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "A proportionate baseline is not maximal or minimal - it responds to what the project actually proposes, tested against what is actually known and still uncertain about the building and its setting.",
  evidence: [LIST_ENTRY_EXTRACT, SITE_VISIT_NOTE],
  recordAfter: {
    completed: [...HERITAGE_RECORD_AFTER_ACTIVITY_3.completed, "Proportionate baseline / information plan"],
    known:
      "The list entry covers the principal elevations and historic plan form of the house; the coach house and wall are not itemised and their status is not yet established",
    toEstablish:
      "Which internal features contribute to significance, whether the later rear-wing alterations affect it, and the status of the coach house and wall",
    keepUnderReview: "Effects on significance as design options develop",
    decisionPoints:
      "A proportionate significance assessment should inform design options before a preferred approach is fixed",
  },
  workedExample:
    "A proportionate baseline explains what is understood about the building's development and significance, identifies genuine gaps, and avoids treating every feature as equally protected or investigating detail the project doesn't need.",
  whyThisMatters:
    "Design options tested against a real baseline are far more defensible - and easier to adjust - than options tested against an assumption that turns out to be wrong once a conservation officer or heritage consultant looks at the same building.",
  saveLabel: "Save heritage baseline",
  comparisonCard: {
    heading: "If the proposal affected the setting of a nearby listed building",
    courseCase: "The Old Vicarage is itself the listed asset affected by these works.",
    comparable:
      "A different project, where the host building is unlisted but the proposal might affect the setting of a nearby listed building - the village church, say, or the former school.",
    whatMayChange: [
      "The heritage question becomes about setting and views, not the host building's own significance.",
      "Listed building consent would not apply to the unlisted host building itself.",
      "Effect on setting still needs proportionate assessment, particularly for visible or prominent changes.",
    ],
    whatStaysSame: [
      "Establish what the relevant designated asset's significance actually depends on.",
      "Test the proposal against that significance before it becomes the preferred option.",
      "Do not assume proximity alone settles the question, in either direction.",
    ],
  },
  scopeBoundaryCard: {
    heading: "A proportionate baseline is not a full significance assessment.",
    covers: ["Recognising what a baseline needs to establish before design options are tested."],
    doesNotCover: [
      "Preparing a full significance assessment.",
      "Determining the curtilage status of the coach house or wall.",
    ],
    nextAction:
      "Commission a proportionate significance assessment, or specialist heritage input, scaled to the works proposed.",
  },
  nextStageHeading: "Next: Developing the design",
  nextStageBody:
    "The heritage baseline is established. Next, test the kitchen extension and window options against it before treating anything as preferred.",
};

// --- Chapter 3: Developing the design --------------------------------------

const DESIGN_OPTION_NOTE: EvidenceItem = {
  id: "design-option-note",
  label: "Design option note",
  body: [
    "Option A: larger glazed rear extension, simplified rear elevation, replacement of all rear windows in matching new units.",
    "Option B: smaller extension retaining more of the historic rear fabric, repair-first approach to sound window frames, replacement only where condition requires it.",
  ],
};

export const CHAPTER_3: ChapterActivityContent = {
  chapterNumber: 3,
  stageLabel: "3. Developing the design",
  projectMoment:
    "Initial options are being sketched for the rear kitchen extension, ground-floor reconfiguration and window replacement/repair. The heritage baseline is established, but no option has yet been tested against it.",
  task: "Test the emerging design options against the heritage baseline before one becomes preferred.",
  predictionPrompt: "What is the safest way to test the options?",
  predictionOptions: [
    "Choose the option the client prefers and adjust for heritage comments if the conservation officer raises them.",
    "Assess how each option affects the features and character identified as contributing to significance, before treating any as preferred.",
    "Rule out replacement windows entirely, since repair is always the safer heritage choice.",
    "Defer heritage input until working drawings are prepared.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "Options tested against significance - including the windows and the rear elevation - before selection keeps heritage part of the design process, not a late check on a decision already made.",
  evidence: [DESIGN_OPTION_NOTE, initialHeritagePositionEvidence(CHAPTER_2.recordAfter)],
  recordAfter: {
    ...CHAPTER_2.recordAfter,
    completed: [...CHAPTER_2.recordAfter.completed, "Heritage design-response note"],
    toEstablish: "Whether the chosen option's junction with historic fabric needs specialist detailing input",
  },
  workedExample:
    "A useful comparison states what each option removes, alters or obscures that contributes to significance, and whether a different form, position, window strategy or material choice reduces that effect without abandoning the brief.",
  whyThisMatters:
    "A design tested against significance early costs far less to adjust than a scheme redesigned after a late heritage objection.",
  saveLabel: "Save design-option assessment",
  comparisonCard: {
    heading: "If the host building were unlisted but the proposal affected conservation-area character",
    courseCase: "The Old Vicarage's design options are tested against the significance of a listed building.",
    comparable:
      "A different project, where the host building is unlisted but visible external changes might affect conservation-area character.",
    whatMayChange: [
      "The test becomes about character and appearance, not the significance of protected fabric.",
      "Listed building consent would not apply; conservation-area policy and any Article 4 direction would govern the route.",
      "Internal changes are unlikely to need the same scrutiny.",
    ],
    whatStaysSame: [
      "Test options against the relevant heritage trigger before choosing one.",
      "Identify what a change actually affects, not just whether it is visible.",
      "Keep the comparison proportionate to what the project actually proposes.",
    ],
  },
  scopeBoundaryCard: {
    heading: "Detailed heritage impact methodology is not covered here.",
    covers: ["Recognising that options should be tested against significance before selection."],
    doesNotCover: [
      "A formal heritage impact assessment methodology.",
      "Detailed window investigation or repair specification.",
    ],
    nextAction:
      "Commission specialist input for a formal significance/impact assessment and detailed window investigation once an option is preferred.",
  },
  nextStageHeading: "Next: Managing client, cost and programme",
  nextStageBody:
    "An option has been tested against significance. Next, make sure the client understands what that means for cost, programme and the consent route.",
};

// --- Chapter 4: Managing client, cost and programme ------------------------

const PROGRAMME_UPDATE_NOTE: EvidenceItem = {
  id: "programme-update-note",
  label: "Programme update note",
  body: [
    "Client hopes to start on site next spring.",
    "Listed building consent, the associated-structure question and the missing consent history for earlier work have not yet been factored into the client's expectations.",
  ],
};

export const CHAPTER_4: ChapterActivityContent = {
  chapterNumber: 4,
  stageLabel: "4. Managing client, cost and programme",
  projectMoment:
    "The client is expecting a fee and programme that assumed a straightforward process. Listed building consent, the coach house and wall, and the missing consent history for previous work all affect that.",
  task: "Explain the heritage-driven cost and programme implications honestly.",
  predictionPrompt: "What is the safest way to communicate this to the client?",
  predictionOptions: [
    "Avoid raising it until the application stage, to keep the client positive.",
    "Explain plainly that listed building consent, the associated structures and the missing consent history all affect programme and information needs - without overstating the risk.",
    "Tell the client the project is now much more complicated and may not be viable.",
    "Say nothing changes, since the client already knew the house was listed.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "The client already knowing the house is listed is not the same as understanding what that means for programme, fee and the information still needed. Calibrated honesty protects both the client's decision-making and the architect's position.",
  evidence: [PROGRAMME_UPDATE_NOTE],
  recordAfter: {
    ...CHAPTER_3.recordAfter,
    completed: [...CHAPTER_3.recordAfter.completed, "Client / programme implications note"],
  },
  workedExample:
    "State plainly what has changed, what it's likely to mean for programme and fee, and what remains uncertain until the baseline and consent route are confirmed - without presenting an estimate as a guarantee.",
  whyThisMatters:
    "A client who understands the heritage-driven risk early can make an informed decision. A client who discovers it late loses trust in the advice, not just the timescale.",
  saveLabel: "Save client briefing note",
  comparisonCard: {
    heading: "If Article 4 changed the window/frontage assumption",
    courseCase: "The Old Vicarage's windows are being considered under listed building consent.",
    comparable:
      "A different, unlisted project where an Article 4 direction removes permitted-development rights for windows or frontage alterations.",
    whatMayChange: [
      "The consent trigger becomes the Article 4 direction, not listed building consent.",
      "The exact geography and scope of the direction must be checked, not assumed.",
      "Programme implications can be just as significant as a listed building consent route.",
    ],
    whatStaysSame: [
      "Communicate the implication honestly, calibrated to what's actually known.",
      "Do not assume the consent trigger from the type of property alone.",
      "Establish the exact scope of the control before advising the client.",
    ],
  },
  scopeBoundaryCard: {
    heading: "Detailed Article 4 interpretation is not covered here.",
    covers: [
      "Recognising that an Article 4 direction can change programme and consent assumptions as much as listing does.",
    ],
    doesNotCover: [
      "Interpreting the exact scope of a specific Article 4 direction.",
      "Advising on enforcement risk.",
    ],
    nextAction:
      "Check the adopted Article 4 direction and its exact geography/scope with the local planning authority before advising the client.",
  },
  nextStageHeading: "Next: Gaining consent",
  nextStageBody: "The client has been briefed. Next, identify what the consent route actually requires.",
};

// --- Chapter 5: Gaining consent ---------------------------------------------

const CONSENT_ROUTE_NOTE: EvidenceItem = {
  id: "consent-route-note",
  label: "Consent route note",
  body: [
    "Planning permission required for the extension in the usual way.",
    "Listed building consent additionally required for works affecting the character of the listed building, including internal reconfiguration and the boundary wall opening.",
    "Local validation list to be checked for the specific information required to accompany the application.",
  ],
};

export const CHAPTER_5: ChapterActivityContent = {
  chapterNumber: 5,
  stageLabel: "5. Gaining consent",
  projectMoment:
    "Design options are settling. The application route now needs confirming, alongside what must be submitted to explain the proposal's effect on significance - including the boundary wall opening and window strategy.",
  task: "Identify what the application route requires.",
  predictionPrompt: "What does the route require, beyond planning permission?",
  predictionOptions: [
    "Nothing further; the works are minor.",
    "A listed building consent application, supported by a proportionate description of significance and effect, alongside planning permission.",
    "A full heritage impact assessment regardless of the works proposed.",
    "Consent is only needed if the conservation officer requests it after submission.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "Listed building consent is required by the works affecting a listed building, not by whether an officer happens to ask. What's submitted alongside it should be proportionate to the works, not maximal by default.",
  evidence: [CONSENT_ROUTE_NOTE],
  recordAfter: {
    ...CHAPTER_4.recordAfter,
    completed: [...CHAPTER_4.recordAfter.completed, "Heritage consent-information strategy"],
    decisionPoints:
      "Planning and listed building consent applications to be prepared together, with a proportionate description of effect on significance",
  },
  workedExample:
    "A proportionate submission explains what is proposed, what it affects, and why the effect on significance is acceptable - scaled to the works, including the wall opening and window strategy, not written as if for a major scheme.",
  whyThisMatters:
    "Getting the consent route right first avoids an invalid application, a stalled programme, or unauthorised works discovered only once building starts.",
  saveLabel: "Save consent-route record",
  comparisonCard: {
    heading: "If no LBC were required but heritage effects remained",
    courseCase: "The Old Vicarage requires listed building consent alongside planning permission.",
    comparable:
      "An unlisted property in a conservation area, where no listed building consent is required but external works may still affect character and appearance.",
    whatMayChange: [
      "No listed building consent application is needed.",
      "Conservation-area character and appearance, local validation requirements and any Article 4 direction still shape what must be submitted.",
      "The proportionate description of effect still matters, even without a statutory listed building consent test.",
    ],
    whatStaysSame: [
      "Identify what the actual route requires before assuming it.",
      "Submit information proportionate to what is proposed.",
      "Do not treat 'no LBC needed' as 'no heritage information needed'.",
    ],
  },
  scopeBoundaryCard: {
    heading: "Detailed LBC application strategy is not covered here.",
    covers: ["Recognising what the consent route requires, in outline."],
    doesNotCover: [
      "Drafting a full listed building consent application or heritage statement.",
      "Statutory test interpretation.",
    ],
    nextAction:
      "Engage a heritage consultant or specialist input to prepare the application material once the route is confirmed.",
  },
  nextStageHeading: "Next: Detailing and delivering work",
  nextStageBody:
    "Consent has been confirmed. Next, recognise what to do if something on site doesn't match what was assumed at consent stage.",
};

// --- Chapter 6: Detailing and delivering work -------------------------------

const SITE_DISCOVERY_NOTE: EvidenceItem = {
  id: "site-discovery-note",
  label: "Site discovery note",
  body: [
    "Contractor opened up a later-lined internal wall as part of the consented reconfiguration.",
    "Discovery: an earlier fireplace opening and a surviving timber lintel, previously concealed behind later finishes.",
    "The approved detail assumed removal of the later lining only; it did not anticipate this fabric.",
  ],
};

export const CHAPTER_6: ChapterActivityContent = {
  chapterNumber: 6,
  stageLabel: "6. Detailing and delivering work",
  projectMoment:
    "Consent has been granted and work is underway. Opening up an internal wall as part of the consented works has revealed an earlier fireplace opening and a surviving timber lintel behind later finishes - neither recorded before.",
  task: "Recognise what this discovery means for the consented scheme.",
  predictionPrompt: "What is the correct next step?",
  predictionOptions: [
    "Continue, since the works in this room are already consented.",
    "Stop work in that area and establish whether the discovery affects the consented scheme or needs further heritage input, before proceeding.",
    "Remove the fireplace opening and lintel, since they were not part of the approved drawings.",
    "Make a note for the completion report and continue working.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "A discovery that wasn't recorded at consent stage may mean the consented description of the building - and therefore the consent itself - no longer matches what is actually there. That has to be established before work continues in that area, not after.",
  evidence: [SITE_DISCOVERY_NOTE],
  recordAfter: {
    ...CHAPTER_5.recordAfter,
    completed: [...CHAPTER_5.recordAfter.completed, "Site-change / unexpected-fabric note"],
    keepUnderReview: "Whether the discovery changes the assessed significance or the scope already consented",
  },
  workedExample:
    "Photograph and record the discovery, pause work in the immediate area, and establish - with specialist input if needed - whether it affects the consented scheme or requires a variation before instructing the contractor to proceed.",
  whyThisMatters:
    "This is where an early, careful heritage baseline earns its keep: it gives you something to check the discovery against, rather than making a judgement call on site with no reference point.",
  saveLabel: "Save discovery record",
  comparisonCard: {
    heading: "If external works to an unlisted conservation-area property changed character/appearance",
    courseCase: "A previously unrecorded fireplace and lintel are discovered inside a listed building, mid-consent.",
    comparable:
      "An unlisted conservation-area property, where external works during construction turn out to change the building's character or appearance more than assumed.",
    whatMayChange: [
      "The concern shifts from consented listed-building fabric to conservation-area character and appearance.",
      "There is no listed building consent to check the discovery against - but the works may still need reassessing against planning permission or conservation-area policy.",
      "Internal discoveries are far less likely to raise the same concern in an unlisted building.",
    ],
    whatStaysSame: [
      "An unrecorded change from what was assumed at consent/permission stage needs establishing before work continues.",
      "Stop, record and check - don't assume the original assessment still holds.",
      "Old fabric is not automatically heritage-significant fabric; establish its relevance to the actual designation and context.",
    ],
  },
  scopeBoundaryCard: {
    heading: "Assessing the discovered fabric is not something to resolve on site.",
    covers: ["Recognising that a site discovery may reopen a heritage question already thought settled."],
    doesNotCover: [
      "Assessing the significance of newly discovered historic fabric.",
      "Advising whether the discovery requires a variation to listed building consent.",
    ],
    nextAction:
      "Stop work in the affected area and seek proportionate specialist or conservation officer input before proceeding.",
  },
  nextStageHeading: "Next: Handover and the next change",
  nextStageBody:
    "The discovery has been recorded and escalated. Next, decide what should be left behind for whoever owns or changes the building next.",
};

// --- Chapter 7: Handover and the next change --------------------------------

export const CHAPTER_7: ChapterActivityContent = {
  chapterNumber: 7,
  stageLabel: "7. Handover and the next change",
  projectMoment:
    "The project is complete. The Old Vicarage remains a listed building, the coach house's future is still unresolved, and future work - even work that feels minor - will need the same proportionate consideration.",
  task: "Decide what to leave behind at handover.",
  predictionPrompt: "What is the most useful thing to leave behind?",
  predictionOptions: [
    "Nothing further; the current works are finished and consented.",
    "A concise heritage record summarising what was established, what was consented, and what to check before any future change - including the still-unresolved coach house.",
    "A full conservation management plan, regardless of the scale of the project.",
    "Advice that future minor works, including to the coach house, will not need any further consideration.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "A proportionate, durable record - naming what's still unresolved, not just what was done - is more useful to a future owner or architect than either silence or a document heavier than the project justified.",
  evidence: [initialHeritagePositionEvidence(CHAPTER_6.recordAfter)],
  recordAfter: {
    ...CHAPTER_6.recordAfter,
    completed: [...CHAPTER_6.recordAfter.completed, "Handover and future-works record"],
    decisionPoints:
      "No decision outstanding for this project phase; the coach house and wall remain unresolved and flagged for any future work",
  },
  workedExample:
    "Summarise what is known about significance, what was consented and why, what was discovered and how it was resolved, and what any future change - including to the coach house - should check first.",
  whyThisMatters:
    "This is the course's central idea in its final form: the Heritage Record isn't paperwork for this project alone. It's what makes the next change - by anyone, including to the coach house - start from an informed position instead of a guess.",
  saveLabel: "Save handover heritage record",
  comparisonCard: {
    heading: "If later work is proposed to an unlisted but heritage-sensitive property",
    courseCase: "The Old Vicarage's handover record covers a confirmed listed building, plus an unresolved associated structure.",
    comparable:
      "An unlisted but heritage-sensitive property (for example, in a conservation area), where a future owner proposes further work.",
    whatMayChange: [
      "There is no listed building consent history to hand over.",
      "The relevant record instead covers conservation-area status, any Article 4 direction and locally identified significance.",
      "Future permitted-development assumptions may need rechecking if circumstances - such as a new Article 4 direction - change.",
    ],
    whatStaysSame: [
      "Leave a proportionate, durable record - not silence, and not more than the project justified.",
      "Name what remains unresolved, not just what was completed.",
      "Assume the next person will not have the same context you do.",
    ],
  },
  scopeBoundaryCard: {
    heading: "Long-term conservation planning is not covered here.",
    covers: ["Recording what was established, consented and discovered, and what remains open."],
    doesNotCover: [
      "Preparing a long-term conservation management plan.",
      "Advising on the coach house's future conversion.",
    ],
    nextAction:
      "Commission a proportionate conservation/maintenance plan, or specialist input on the coach house, when that future work is actually being considered.",
  },
  nextStageHeading: "Course complete",
  nextStageBody:
    "You have carried a heritage consideration through a full project lifecycle, from a fee-proposal enquiry to a durable record for whoever changes the building next - including what still needs resolving.",
};

export const CHAPTERS: ChapterActivityContent[] = [
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
];
