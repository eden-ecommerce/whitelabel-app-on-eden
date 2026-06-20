import { P360Hero } from "@components/publish360/P360Hero";
import { P360Problem } from "@components/publish360/P360Problem";
import { P360WhatIsIt } from "@components/publish360/P360WhatIsIt";
import { P360Guarantee } from "@components/publish360/P360Guarantee";
import { P360Formats } from "@components/publish360/P360Formats";
import { P360ReaderExperience } from "@components/publish360/P360ReaderExperience";
import { P360Drm } from "@components/publish360/P360Drm";
import { P360Monetisation } from "@components/publish360/P360Monetisation";
import { P360Analytics } from "@components/publish360/P360Analytics";
import { P360Comparison } from "@components/publish360/P360Comparison";
import { P360WhoIsItFor } from "@components/publish360/P360WhoIsItFor";
import { P360Faq } from "@components/publish360/P360Faq";
import { P360Cta } from "@components/publish360/P360Cta";

export default function Publish360Page() {
  return (
    <main>
      <P360Hero />
      <P360Problem />
      <P360WhatIsIt />
      <P360Guarantee />
      <P360Formats />
      <P360ReaderExperience />
      <P360Drm />
      <P360Monetisation />
      <P360Analytics />
      <P360Comparison />
      <P360WhoIsItFor />
      <P360Faq />
      <P360Cta />
    </main>
  );
}
