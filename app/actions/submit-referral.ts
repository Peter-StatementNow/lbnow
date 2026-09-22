"use server";

import {
  sendReferralNotification,
  type ReferralSubmission,
} from "@/lib/email/send-referral-notification";

export type SubmitReferralResult =
  | { success: true }
  | { success: false; error: string };

const REQUIRED_FIELDS: (keyof ReferralSubmission)[] = [
  "referrerName",
  "referrerEmail",
  "referrerProfession",
  "projectAddress",
  "clientContext",
  "briefOrIssue",
  "questionAndUrgency",
];

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitReferral(
  input: ReferralSubmission
): Promise<SubmitReferralResult> {
  for (const field of REQUIRED_FIELDS) {
    if (!input[field]?.trim()) {
      return { success: false, error: "Please fill in every required field." };
    }
  }

  if (!isValidEmail(input.referrerEmail.trim())) {
    return { success: false, error: "Enter a valid email address." };
  }

  const result = await sendReferralNotification({
    ...input,
    referrerName: input.referrerName.trim(),
    referrerEmail: input.referrerEmail.trim(),
    projectAddress: input.projectAddress.trim(),
    designationInfo: input.designationInfo.trim(),
    clientContext: input.clientContext.trim(),
    briefOrIssue: input.briefOrIssue.trim(),
    questionAndUrgency: input.questionAndUrgency.trim(),
  });

  // 22 Sep 2026: email delivery (Resend, via Vercel's integration) is not
  // reliably working yet and is being debugged separately - see this
  // repo's own history for the in-progress investigation. Until that is
  // resolved, a delivery failure is deliberately NOT shown to the
  // visitor as an error (validation failures above still are - those
  // are real, useful feedback). This is a conscious, temporary trade-off
  // agreed with the site owner: a referral could currently be silently
  // lost rather than delivered, so check this log line's output
  // (or wherever it ends up in the hosting platform's logs) until
  // sendReferralNotification is confirmed working end-to-end, then
  // remove this comment - the success path does not need to change.
  if (result.status !== "sent") {
    console.error("Referral notification not delivered:", result);
  }

  return { success: true };
}
