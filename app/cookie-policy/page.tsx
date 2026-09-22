import type { Metadata } from "next";
import { PolicyPageLayout } from "@/components/PolicyPageLayout";
import { COOKIE_POLICY } from "@/lib/content/policy-pages";

export const metadata: Metadata = {
  title: "Cookie Policy | Training by Recept Heritage",
};

export default function CookiePolicyPage() {
  return <PolicyPageLayout policy={COOKIE_POLICY} />;
}
