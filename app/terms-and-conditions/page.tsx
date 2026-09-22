import type { Metadata } from "next";
import { PolicyPageLayout } from "@/components/PolicyPageLayout";
import { TERMS_AND_CONDITIONS } from "@/lib/content/policy-pages";

export const metadata: Metadata = {
  title: "Terms and Conditions | Training by Recept Heritage",
};

export default function TermsAndConditionsPage() {
  return <PolicyPageLayout policy={TERMS_AND_CONDITIONS} />;
}
