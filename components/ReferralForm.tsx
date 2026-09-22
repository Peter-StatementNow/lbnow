"use client";

import { useId, useState, useTransition } from "react";
import { submitReferral } from "@/app/actions/submit-referral";
import { REFERRAL_FORM } from "@/lib/content/referral";

type FormState = {
  referrerName: string;
  referrerEmail: string;
  referrerProfession: string;
  projectAddress: string;
  designationInfo: string;
  clientContext: string;
  briefOrIssue: string;
  questionAndUrgency: string;
};

const EMPTY_FORM: FormState = {
  referrerName: "",
  referrerEmail: "",
  referrerProfession: REFERRAL_FORM.referrerProfession.options[0],
  projectAddress: "",
  designationInfo: "",
  clientContext: "",
  briefOrIssue: "",
  questionAndUrgency: "",
};

const inputClassName =
  "w-full border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none";
const labelClassName = "block text-sm font-medium text-neutral-800";

export function ReferralForm({
  sourceCourseSlug = null,
}: {
  sourceCourseSlug?: string | null;
}) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(
    null
  );
  const [isPending, startTransition] = useTransition();
  const ids = {
    name: useId(),
    email: useId(),
    profession: useId(),
    address: useId(),
    designation: useId(),
    context: useId(),
    brief: useId(),
    question: useId(),
  };

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      const outcome = await submitReferral({ ...form, sourceCourseSlug });
      setResult(outcome.success ? { success: true } : { success: false, error: outcome.error });

      if (outcome.success) {
        setForm(EMPTY_FORM);
      }
    });
  }

  if (result?.success) {
    return (
      <div className="border border-neutral-300 bg-neutral-50 px-6 py-8">
        <p className="text-base font-semibold text-neutral-900">
          {REFERRAL_FORM.successHeading}
        </p>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {REFERRAL_FORM.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={ids.name} className={labelClassName}>
            {REFERRAL_FORM.referrerName.label}
          </label>
          <input
            id={ids.name}
            type="text"
            required
            lang="en-GB"
            spellCheck
            value={form.referrerName}
            onChange={(event) => updateField("referrerName", event.target.value)}
            placeholder={REFERRAL_FORM.referrerName.placeholder}
            className={`mt-1.5 ${inputClassName}`}
          />
        </div>

        <div>
          <label htmlFor={ids.email} className={labelClassName}>
            {REFERRAL_FORM.referrerEmail.label}
          </label>
          <input
            id={ids.email}
            type="email"
            required
            value={form.referrerEmail}
            onChange={(event) => updateField("referrerEmail", event.target.value)}
            placeholder={REFERRAL_FORM.referrerEmail.placeholder}
            className={`mt-1.5 ${inputClassName}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor={ids.profession} className={labelClassName}>
          {REFERRAL_FORM.referrerProfession.label}
        </label>
        <select
          id={ids.profession}
          required
          value={form.referrerProfession}
          onChange={(event) => updateField("referrerProfession", event.target.value)}
          className={`mt-1.5 ${inputClassName}`}
        >
          {REFERRAL_FORM.referrerProfession.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={ids.address} className={labelClassName}>
          {REFERRAL_FORM.projectAddress.label}
        </label>
        <input
          id={ids.address}
          type="text"
          required
          lang="en-GB"
          spellCheck
          value={form.projectAddress}
          onChange={(event) => updateField("projectAddress", event.target.value)}
          placeholder={REFERRAL_FORM.projectAddress.placeholder}
          className={`mt-1.5 ${inputClassName}`}
        />
      </div>

      <div>
        <label htmlFor={ids.designation} className={labelClassName}>
          {REFERRAL_FORM.designationInfo.label}
        </label>
        <input
          id={ids.designation}
          type="text"
          lang="en-GB"
          spellCheck
          value={form.designationInfo}
          onChange={(event) => updateField("designationInfo", event.target.value)}
          placeholder={REFERRAL_FORM.designationInfo.placeholder}
          className={`mt-1.5 ${inputClassName}`}
        />
      </div>

      <div>
        <label htmlFor={ids.context} className={labelClassName}>
          {REFERRAL_FORM.clientContext.label}
        </label>
        <textarea
          id={ids.context}
          required
          rows={3}
          lang="en-GB"
          spellCheck
          value={form.clientContext}
          onChange={(event) => updateField("clientContext", event.target.value)}
          placeholder={REFERRAL_FORM.clientContext.placeholder}
          className={`mt-1.5 resize-y ${inputClassName}`}
        />
      </div>

      <div>
        <label htmlFor={ids.brief} className={labelClassName}>
          {REFERRAL_FORM.briefOrIssue.label}
        </label>
        <textarea
          id={ids.brief}
          required
          rows={3}
          lang="en-GB"
          spellCheck
          value={form.briefOrIssue}
          onChange={(event) => updateField("briefOrIssue", event.target.value)}
          placeholder={REFERRAL_FORM.briefOrIssue.placeholder}
          className={`mt-1.5 resize-y ${inputClassName}`}
        />
      </div>

      <div>
        <label htmlFor={ids.question} className={labelClassName}>
          {REFERRAL_FORM.questionAndUrgency.label}
        </label>
        <textarea
          id={ids.question}
          required
          rows={3}
          lang="en-GB"
          spellCheck
          value={form.questionAndUrgency}
          onChange={(event) => updateField("questionAndUrgency", event.target.value)}
          placeholder={REFERRAL_FORM.questionAndUrgency.placeholder}
          className={`mt-1.5 resize-y ${inputClassName}`}
        />
      </div>

      <p className="text-xs leading-5 text-neutral-500">
        {REFERRAL_FORM.recordsNote}
      </p>

      {result && !result.success && (
        <p className="text-sm font-medium text-red-700">{result.error}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-400"
        >
          {isPending ? REFERRAL_FORM.sendingLabel : REFERRAL_FORM.submitLabel}
        </button>
      </div>
    </form>
  );
}
