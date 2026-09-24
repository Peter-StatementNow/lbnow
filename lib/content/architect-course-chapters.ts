/**
 * Chapters 2-7 of Heritage Design Risk for Architects - a content-light
 * navigable framework (24 Sep 2026), built to preserve the seven-stage
 * structure and test whether the core case holds together end to end.
 * Placeholder wording throughout: one task per chapter, not the fully
 * realised three-activity treatment Module 1 has. Not final guidance -
 * see PROTOTYPE_NOTICE.
 *
 * Case arc: 42 Church Street is introduced in Module 1 as a house the
 * client believes is "not listed". Chapter 2 reveals that belief was
 * wrong - the house is confirmed Grade II listed - which is what gives
 * every later chapter genuine stakes (a real listed building consent
 * route, real conditions a site discovery can breach, a real
 * designated asset to hand over). Do not resolve the case any other
 * way without re-checking the later chapters still have real stakes.
 */

import {
  HERITAGE_RECORD_AFTER_ACTIVITY_3,
  PROJECT_CONTEXT,
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
  comparisonCard?: ComparisonCardContent;
  scopeBoundaryCard?: ScopeBoundaryCardContent;
  nextStageHeading: string;
  nextStageBody: string;
};

// --- Chapter 2: Understanding the existing building and place -------------

const LIST_ENTRY_EXTRACT: EvidenceItem = {
  id: "list-entry-extract",
  label: "Statutory list entry (extract)",
  body: [
    "Grade: II",
    "42 Church Street. House, early C19, rendered brick with slate roof. Included for group and historic interest with the adjoining former school.",
    "(Prototype content - illustrative wording, not a real list entry.)",
  ],
};

const SITE_VISIT_NOTE: EvidenceItem = {
  id: "site-visit-note",
  label: "Site visit note",
  body: [
    "Rendered principal elevation to the street; rear elevation partly rendered, partly exposed brick.",
    "Rear outbuilding appears contemporary with the house; boundary wall in mixed brick, possibly rebuilt in part.",
    "No obvious later interventions visible from the outside; internal inspection not yet carried out.",
  ],
};

export const CHAPTER_2: ChapterActivityContent = {
  chapterNumber: 2,
  stageLabel: "2. Understanding the existing building and place",
  projectMoment:
    "Further checks have been carried out ahead of a site visit. A search of the statutory list has returned a result for 42 Church Street itself - something the client's own enquiry did not anticipate.",
  task: "Establish what the listing means for this project, before design assumptions are made.",
  predictionPrompt: "Which is the safest next step?",
  predictionOptions: [
    "Tell the client the project cannot proceed as planned.",
    "Confirm the listing, then establish what it covers and what that means for the proposed works before design assumptions are made.",
    "Treat the list entry as probably an error and continue as before.",
    "Wait until the planning application stage to raise it with the client.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "A listing changes the information required, not the outcome. The next step is to understand what it covers and what it means for consent - not to assume the project is blocked, or let it pass unremarked.",
  evidence: [LIST_ENTRY_EXTRACT, SITE_VISIT_NOTE],
  recordAfter: {
    completed: [...HERITAGE_RECORD_AFTER_ACTIVITY_3.completed, "Statutory listing confirmed"],
    known:
      "The house is a Grade II listed building; the list entry covers the principal elevations and historic plan form, and references the adjoining former school for group interest",
    toEstablish:
      "Which features contribute to significance, whether visible later alterations already affect it, and what a listed building consent application will need to demonstrate",
    keepUnderReview: "Effects on significance as the design develops",
    decisionPoints:
      "A listed building consent route now applies alongside planning; design options must be tested against significance before a route is confirmed",
  },
  workedExample:
    "A confirmed listing does not, by itself, tell you what matters about the building. The proportionate next step is a significance-led look at the fabric and plan form - not a blanket assumption that everything, or nothing, is significant.",
  whyThisMatters:
    "This is the moment the project's real heritage position becomes clear. Everything from here - design testing, cost and programme, the consent route, site discoveries, the eventual handover record - depends on treating this as a genuine listed building, not a technicality to work around.",
  saveLabel: "Save updated heritage baseline",
  comparisonCard: {
    heading: "If the heritage trigger were different",
    courseCase: "42 Church Street is confirmed as a Grade II listed building.",
    comparable:
      "The house is not listed, but sits within a conservation area, or the proposal may affect the setting of a nearby listed building.",
    whatMayChange: [
      "Listed building consent would not apply to the house itself.",
      "Conservation-area character, local validation requirements and any Article 4 direction may still affect the project route.",
      "Internal works are less likely to raise the same consent questions, but external works and setting effects may still need assessment.",
    ],
    whatStaysSame: [
      "Identify the heritage trigger before assuming a route.",
      "Establish proportionate evidence for the trigger actually present.",
      "Do not assume the consent or information route from one fact alone.",
    ],
  },
  scopeBoundaryCard: {
    heading: "A list entry does not, by itself, establish full significance.",
    covers: ["Recognising that a listing changes the information and consent route needed."],
    doesNotCover: [
      "Preparing a full significance assessment or heritage statement.",
      "Determining which later or associated features are curtilage-listed.",
    ],
    nextAction:
      "Commission a proportionate significance assessment, or specialist heritage input, before finalising design options.",
  },
  nextStageHeading: "Next: Developing the design",
  nextStageBody:
    "The heritage baseline is now confirmed. Next, test an emerging design option against it before treating anything as a preferred approach.",
};

// --- Chapter 3: Developing the design --------------------------------------

const DESIGN_OPTION_NOTE: EvidenceItem = {
  id: "design-option-note",
  label: "Design option note",
  body: [
    `Emerging option: single-storey rear extension to ${PROJECT_CONTEXT.project}, replacing the existing lean-to and reconfiguring the kitchen/garden relationship.`,
    "Exact form, materials and junction with the historic rear elevation not yet resolved.",
  ],
};

export const CHAPTER_3: ChapterActivityContent = {
  chapterNumber: 3,
  stageLabel: "3. Developing the design",
  projectMoment:
    "Initial design options are being sketched for the rear extension. The listing is confirmed, but no significance assessment has yet tested which features actually matter.",
  task: "Test the emerging design option against the heritage baseline before it becomes the preferred option.",
  predictionPrompt: "What is the safest way to test the option?",
  predictionOptions: [
    "Proceed with the preferred option and address heritage comments if the planning authority raises them.",
    "Assess how the option affects the features and character identified as contributing to significance, before treating it as preferred.",
    "Avoid any visible change to the rear elevation, since that is the safest general rule.",
    "Ask the client which option they prefer and defer the heritage view until later.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "Testing an option against significance before it becomes 'preferred' keeps heritage part of the design process, rather than a late compliance check on a decision already made.",
  evidence: [DESIGN_OPTION_NOTE, initialHeritagePositionEvidence(CHAPTER_2.recordAfter)],
  recordAfter: {
    ...CHAPTER_2.recordAfter,
    completed: [...CHAPTER_2.recordAfter.completed, "Design option tested against significance"],
    toEstablish:
      "Whether the junction between new and historic fabric needs specialist detailing input",
    keepUnderReview: "Whether later design development changes the assessed effect on significance",
  },
  workedExample:
    "A proportionate test asks what the option removes, alters or obscures that contributes to significance - and whether a different form, position or material choice would reduce that effect without abandoning the client's brief.",
  whyThisMatters:
    "Options tested against significance early are far easier to adjust than a scheme redesigned after a late heritage objection - for the client's cost and programme as much as for the building.",
  saveLabel: "Save design-option assessment",
  nextStageHeading: "Next: Managing client, cost and programme",
  nextStageBody:
    "The design option has been tested against significance. Next, make sure the client understands what that means for cost, programme and the information still needed.",
};

// --- Chapter 4: Managing client, cost and programme ------------------------

const PROGRAMME_UPDATE_NOTE: EvidenceItem = {
  id: "programme-update-note",
  label: "Programme update note",
  body: [
    "Client originally budgeted for a single planning application and a spring start on site.",
    "Client has not yet been told that a listed building consent application is also required.",
  ],
};

export const CHAPTER_4: ChapterActivityContent = {
  chapterNumber: 4,
  stageLabel: "4. Managing client, cost and programme",
  projectMoment:
    "The client is expecting a fee and programme that assumed a straightforward planning route. That assumption no longer holds.",
  task: "Explain the heritage-driven cost and programme implications honestly.",
  predictionPrompt: "What is the safest way to communicate this to the client?",
  predictionOptions: [
    "Avoid raising it until the planning application is submitted, to keep the client positive.",
    "Explain plainly that listed building consent is now part of the route, with its likely effect on cost, programme and the information required.",
    "Advise the client that the project is now much more expensive and may not be viable.",
    "Say nothing changes, since the extension itself is unlikely to be refused.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "Calibrated honesty protects the client's decision-making and the architect's position. Overstating or understating the implications both create problems later.",
  evidence: [PROGRAMME_UPDATE_NOTE],
  recordAfter: {
    ...CHAPTER_3.recordAfter,
    completed: [...CHAPTER_3.recordAfter.completed, "Client briefed on heritage-driven programme risk"],
  },
  workedExample:
    "State plainly what has changed, what it is likely to mean for programme and fee, and what remains uncertain until the consent application is prepared - without presenting an estimate as a guarantee.",
  whyThisMatters:
    "A client who understands the heritage-driven risk early can make an informed decision. A client who discovers it late loses trust in the advice, not just the timescale.",
  saveLabel: "Save client briefing note",
  nextStageHeading: "Next: Gaining consent",
  nextStageBody:
    "The client has been briefed. Next, identify what needs to be evidenced for the consent route the heritage baseline now implies.",
};

// --- Chapter 5: Gaining consent ---------------------------------------------

const CONSENT_ROUTE_NOTE: EvidenceItem = {
  id: "consent-route-note",
  label: "Consent route note",
  body: [
    "Planning permission required for the extension in the usual way.",
    "Listed building consent additionally required for any works affecting the character of the listed building, inside or out.",
  ],
};

export const CHAPTER_5: ChapterActivityContent = {
  chapterNumber: 5,
  stageLabel: "5. Gaining consent",
  projectMoment:
    "Design options are settling. The application route now needs confirming, alongside what must be submitted to explain the proposal's effect on significance.",
  task: "Identify what the application route requires, beyond planning permission.",
  predictionPrompt: "What does the route now require, in addition to planning permission?",
  predictionOptions: [
    "Nothing further; the works are minor.",
    "A listed building consent application, supported by a proportionate description of significance and effect.",
    "A full heritage impact assessment regardless of the works proposed.",
    "Consent is only needed if the local planning authority requests it after submission.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "Listed building consent is required by the works affecting the building, not by whether the authority happens to ask. What is submitted alongside it should be proportionate to the works, not maximal by default.",
  evidence: [CONSENT_ROUTE_NOTE],
  recordAfter: {
    ...CHAPTER_4.recordAfter,
    completed: [...CHAPTER_4.recordAfter.completed, "Consent route confirmed"],
    decisionPoints:
      "Planning and listed building consent applications to be prepared together, with a proportionate description of effect on significance",
  },
  workedExample:
    "A proportionate submission explains what is proposed, what it affects, and why the effect on significance is acceptable - scaled to the scope of works, not written as if for a major scheme.",
  whyThisMatters:
    "Getting the consent route right the first time avoids an invalid application, a stalled programme, or unauthorised works if the wrong assumption is only discovered on site.",
  saveLabel: "Save consent-route record",
  nextStageHeading: "Next: Detailing and delivering work",
  nextStageBody:
    "Consent has been confirmed. Next, recognise what to do if something on site doesn't match what was assumed at consent stage.",
};

// --- Chapter 6: Detailing and delivering work -------------------------------

const SITE_DISCOVERY_NOTE: EvidenceItem = {
  id: "site-discovery-note",
  label: "Site discovery note",
  body: [
    "Contractor has removed later render from part of the rear wall as part of the consented works.",
    "This has revealed older brickwork and a blocked window opening that were not visible or recorded at consent stage.",
  ],
};

export const CHAPTER_6: ChapterActivityContent = {
  chapterNumber: 6,
  stageLabel: "6. Detailing and delivering work",
  projectMoment:
    "Consent has been granted and work is underway. Removing later render from part of the rear wall has revealed older brickwork and a blocked opening that were not visible or recorded before.",
  task: "Recognise what a site discovery like this means for the consented scheme.",
  predictionPrompt: "What is the correct next step?",
  predictionOptions: [
    "Continue, since the works are already consented.",
    "Stop work in that area and establish whether the discovery affects the consented scheme or needs further heritage input, before proceeding.",
    "Cover the finding back up and proceed as drawn.",
    "Make a note for the completion report and continue working.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "A discovery that wasn't recorded at consent stage may mean the consented description of the building - and therefore the consent itself - no longer matches what is actually there. That has to be established before work continues in that area, not after.",
  evidence: [SITE_DISCOVERY_NOTE],
  recordAfter: {
    ...CHAPTER_5.recordAfter,
    completed: [...CHAPTER_5.recordAfter.completed, "Site discovery recorded and escalated"],
    keepUnderReview: "Whether the discovery changes the assessed significance or the scope already consented",
  },
  workedExample:
    "Photograph and record the discovery, pause work in the immediate area, and establish - with specialist input if needed - whether it affects the consented scheme before instructing the contractor to proceed.",
  whyThisMatters:
    "This is where an early, careful heritage record earns its keep: it gives you something to check the discovery against, rather than making a judgement call on site with no baseline.",
  saveLabel: "Save discovery record",
  scopeBoundaryCard: {
    heading: "Assessing the discovered fabric is not something to resolve on site.",
    covers: ["Recognising that a site discovery may reopen a heritage question already thought settled."],
    doesNotCover: [
      "Assessing the significance of newly discovered historic fabric.",
      "Advising whether further listed building consent is required for a specific discovery.",
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
    "The project is complete. The building is a designated heritage asset, and future work - even work that feels minor - will need the same proportionate consideration.",
  task: "Decide what to leave behind at handover.",
  predictionPrompt: "What is the most useful thing to leave behind?",
  predictionOptions: [
    "Nothing further; the current works are finished and consented.",
    "A concise heritage record summarising what was established, what was consented, and what to check before any future change.",
    "A full conservation management plan, regardless of the scale of the project.",
    "Advice that future minor works will not need any further consideration.",
  ],
  predictionExpectedIndex: 1,
  predictionFeedback:
    "A proportionate, durable record is more useful to a future owner or architect than either silence or a document heavier than the project justified.",
  evidence: [initialHeritagePositionEvidence(CHAPTER_6.recordAfter)],
  recordAfter: {
    ...CHAPTER_6.recordAfter,
    completed: [...CHAPTER_6.recordAfter.completed, "Heritage record handed over for future change"],
    decisionPoints: "No decision outstanding for this project phase; record established for future reference",
  },
  workedExample:
    "Summarise what is known about significance, what was consented and why, and what any future change should check first - in language a future owner, not just another architect, can use.",
  whyThisMatters:
    "This is the course's central idea in its final form: the Heritage Record isn't paperwork for this project alone. It's what makes the next change - by anyone - start from an informed position instead of a guess.",
  saveLabel: "Save handover heritage record",
  nextStageHeading: "Course complete",
  nextStageBody:
    "You have carried a heritage consideration through a full project lifecycle, from an ordinary enquiry to a durable record for whoever changes the building next.",
};

export const CHAPTERS: ChapterActivityContent[] = [
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
];
