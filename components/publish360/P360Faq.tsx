"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@lib/utils";

const FAQS = [
  {
    q: "We already sell through Amazon and it is working fine. Why change?",
    a: "Amazon is working fine for Amazon. Amazon knows your readers, markets to them across its entire platform, and takes a substantial share of the revenue on every sale. You get a royalty report. Publish360 does not replace marketplace distribution — publishers can sell through both simultaneously. What it adds is a direct channel that you control: reader data, direct marketing capability, zero commission, and analytics that tell you what readers actually do with your content.",
  },
  {
    q: "A custom build would give us more control, wouldn't it?",
    a: "A custom build gives you exactly what you specify at the point of signing. Eighteen months later, when iOS releases a new version or Apple changes an app store policy, you need to go back to the agency. And again the following year. Publish360 includes ongoing maintenance, OS updates, DRM management, and security patching in the platform licence. The investment continues to be maintained and improved — not frozen at the point of launch.",
  },
  {
    q: "We have had bad experiences with DRM before.",
    a: "Adobe Digital Editions was a bad experience. It frustrated legitimate customers and created support overhead. Readium LCP was built to solve exactly that problem — by the same open standards body that the publishing industry founded to replace ADE. LCP operates silently. Readers who have paid for content never encounter a DRM prompt. Files are protected without the protection being visible.",
  },
  {
    q: "Our ecommerce system is custom-built — can you integrate with it?",
    a: "Yes. Publish360 integrates via a documented REST API and webhook schema. When a reader purchases on your website, your system communicates that entitlement to Publish360 via webhook. The content appears in their library within seconds. Eden provides API documentation, endpoint specifications, and a sandbox environment. Most integrations are straightforward for a developer familiar with REST APIs.",
  },
  {
    q: "What happens to our data if we ever leave?",
    a: "All data is exportable. User accounts, purchase history, entitlement mappings, and reading and listening progress are all available in standard formats. Eden Interactive will provide up to 30 days of transition cooperation. The platform is deliberately designed to avoid technical lock-in — we believe publishers should stay because the platform delivers value, not because leaving is painful.",
  },
  {
    q: "Is this only for large publishers?",
    a: "No. Publish360's setup fee and monthly licence structure are designed to be accessible to independent publishers of any size. The platform scales from hundreds of users to hundreds of thousands without architectural change, so publishers can start small and grow without replatforming. The no-commitment guarantee means you can see a demo of your actual app before committing any budget.",
  },
  {
    q: "How does the free demo actually work?",
    a: "Eden Interactive builds a working demo of your branded app — populated with a sample of your actual catalogue and applying your branding — before any commercial agreement is signed. You see your app, in your colours, with your content, on your phone. If it is not what you expected, you walk away without having paid anything. If it is, the implementation begins.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-p360-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-p360-ink">{q}</span>
        <ChevronDown
          className={cn(
            "mt-0.5 size-5 shrink-0 text-p360-muted transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "overflow-hidden text-sm leading-relaxed text-p360-muted transition-all duration-300",
          open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {a}
      </div>
    </div>
  );
}

export function P360Faq() {
  return (
    <section className="bg-p360-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            FAQ
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-12 divide-y-0 rounded-2xl border border-p360-border bg-p360-panel px-8">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
