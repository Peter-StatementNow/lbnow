import type { Metadata } from "next";
import { PolicyPageLayout } from "@/components/PolicyPageLayout";
import { PRIVACY_POLICY } from "@/lib/content/policy-pages";

export const metadata: Metadata = {
  title: "Privacy Policy | Training by Recept Heritage",
};

export default function PrivacyPolicyPage() {
  return <PolicyPageLayout policy={PRIVACY_POLICY} />;
}
