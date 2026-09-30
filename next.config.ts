import type { NextConfig } from "next";

const COURSE = "/courses/heritage-design-risk-for-architects";

const nextConfig: NextConfig = {
  // The course's seven parts were renamed from "modules" to "chapters"
  // (30 Sep 2026); keep old /module-N links working.
  redirects() {
    return [
      {
        source: `${COURSE}/module-:number(\\d+)`,
        destination: `${COURSE}/chapter-:number`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
