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

  if (result.status === "sent") {
    return { success: true };
  }

  console.error("Referral notification not delivered:", result);

  return {
    success: false,
    error:
      "We couldn't send that just now. Please try again, or email Recept Heritage directly.",
  };
}
