import { BookOpen, Headphones, Video, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FormatCard = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  detail: string;
};

const FORMATS: FormatCard[] = [
  {
    icon: BookOpen,
    label: "eBooks",
    title: "EPUB & PDF",
    description:
      "Reflowable and fixed-layout EPUB, plus high-fidelity PDF — in a single unified reader. Adjustable font, night mode, full-text search, bookmarks, and offline download.",
    detail: "Readium LCP DRM included",
  },
  {
    icon: Headphones,
    label: "Audiobooks",
    title: "Download-first audio",
    description:
      "A first-class listening experience with variable speed, sleep timer, chapter navigation, and background playback. Download-first architecture guarantees uninterrupted listening anywhere.",
    detail: "AES-256 encrypted storage",
  },
  {
    icon: Video,
    label: "Video",
    title: "Author events & courses",
    description:
      "Conference recordings, author Q&As, instructional content, and book launches — all within the same app experience. Delivered via CDN with transparent monthly allowances.",
    detail: "Streaming & download delivery",
  },
  {
    icon: GraduationCap,
    label: "Courses",
    title: "Structured learning",
    description:
      "Modules, guided pathways, quizzes, flashcards with spaced repetition, and progress tracking — for publishers with professional development, academic, or training content.",
    detail: "Add-on module, scoped per client",
  },
];

export function P360Formats() {
  return (
    <section className="bg-p360-panel py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            What you can distribute
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
            One app. Every format your readers need.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-p360-muted">
            Most competing platforms specialise in a single format. Publish360 handles
            eBooks, audiobooks, video, and courses in a single branded app — and readers
            never need to think about which format they are using.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATS.map(({ icon: Icon, label, title, description, detail }) => (
            <div
              key={label}
              className="flex flex-col rounded-2xl border border-p360-border bg-p360-surface p-6 transition-colors hover:border-p360-brand/40"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-p360-accent text-p360-brand">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-p360-brand">
                {label}
              </span>
              <h3 className="mt-1 font-serif text-lg font-semibold text-p360-ink">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-p360-muted">
                {description}
              </p>
              <div className="mt-5 rounded-lg border border-p360-border bg-p360-panel px-3 py-2">
                <p className="text-xs font-medium text-p360-muted">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
