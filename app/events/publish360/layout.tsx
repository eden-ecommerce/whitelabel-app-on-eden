import type { Metadata } from "next";
import { P360_PATH } from "@components/publish360/p360-config";
import { P360SubNav } from "@components/publish360/P360SubNav";

export const metadata: Metadata = {
  title: "Publish360 — White Label Digital Publishing Platform",
  description:
    "Your own branded app for eBooks, audiobooks, video, and courses. Professional DRM, chapter-level analytics, and direct-to-reader distribution. Live in 18–22 weeks. No revenue share. No-commitment demo.",
  alternates: { canonical: `https://www.eden.co.uk${P360_PATH}` },
  openGraph: {
    title: "Publish360 — Your readers. Your data. Your margin.",
    description:
      "A white-label digital publishing platform for independent publishers. eBooks, audiobooks, video, courses. Readium LCP DRM. Chapter-level analytics. Live in 18–22 weeks.",
    url: `https://www.eden.co.uk${P360_PATH}`,
    type: "website",
  },
};

export default function Publish360Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <P360SubNav />
      {children}
    </>
  );
}
