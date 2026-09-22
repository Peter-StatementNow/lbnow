import "server-only";

/**
 * Sends a referral straight to Recept Heritage's inbox via Resend's
 * HTTP API - the same "plain fetch, no SDK, inert until configured"
 * pattern Statement Now uses for its own admin notifications
 * (lib/notifications/admin-email.ts), reimplemented here rather than
 * shared, since these are two separate apps/repos (see the
 * design-parameters note on deliberately not coupling them yet).
 *
 * Phase 1 has no database yet, so this email IS the referral record -
 * there is nowhere else it is saved. A missing/failed send is
 * reported back to the caller (unlike Statement Now's "never blocks
 * the real state change" notifications, there is no other state change
 * here for this to avoid blocking) so the visitor can be told to try
 * again or email directly, rather than believing a referral went
 * through when it did not.
 */

export type ReferralSubmission = {
  referrerName: string;
  referrerEmail: string;
  referrerProfession: string;
  projectAddress: string;
  designationInfo: string;
  clientContext: string;
  briefOrIssue: string;
  questionAndUrgency: string;
  sourceCourseSlug: string | null;
};

export type ReferralEmailResult =
  | { status: "sent" }
  | { status: "not_configured" }
  | { status: "failed"; errorCode: string };

function resolveConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.REFERRAL_NOTIFICATION_EMAIL;
  const sender = process.env.REFERRAL_NOTIFICATION_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return null;
  }

  return { apiKey, recipient, sender };
}

function buildEmailText(submission: ReferralSubmission): string {
  return [
    "New referral from Training by Recept Heritage:",
    "",
    `Name: ${submission.referrerName}`,
    `Email: ${submission.referrerEmail}`,
    `Profession: ${submission.referrerProfession}`,
    `Project/property address: ${submission.projectAddress}`,
    `Designation/listing info: ${submission.designationInfo || "Not provided"}`,
    `Client, context and timescale: ${submission.clientContext}`,
    `Brief, transaction issue or intended works: ${submission.briefOrIssue}`,
    `Specific question and urgency: ${submission.questionAndUrgency}`,
    `Source course: ${submission.sourceCourseSlug ?? "Not provided (referral page)"}`,
  ].join("\n");
}

export async function sendReferralNotification(
  submission: ReferralSubmission
): Promise<ReferralEmailResult> {
  const config = resolveConfig();

  if (!config) {
    return { status: "not_configured" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.sender,
        to: [config.recipient],
        reply_to: submission.referrerEmail,
        subject: `[Training referral] ${submission.projectAddress}`,
        text: buildEmailText(submission),
      }),
    });

    return response.ok
      ? { status: "sent" }
      : { status: "failed", errorCode: `resend_http_${response.status}` };
  } catch {
    return { status: "failed", errorCode: "resend_network_error" };
  }
}
