import { Check } from "lucide-react";

const EBOOK_FEATURES = [
  "Chapter navigation and table of contents",
  "Full-text search within titles",
  "Bookmarks, highlights, and note-taking",
  "Reading progress sync across devices",
  "Day, night, and sepia reading modes",
  "Adjustable font size, type, and line spacing",
  "Offline download with DRM protection",
  "Fixed-layout EPUB for illustrated titles",
];

const AUDIO_FEATURES = [
  "Download-first architecture for uninterrupted listening",
  "Variable playback speed (0.5× to 2×)",
  "Configurable skip forward / back (15 or 30 seconds)",
  "Chapter and track navigation",
  "Sleep timer (15, 30, 60 min, or end of chapter)",
  "Background playback with screen off",
  "Resume from last position",
  "Access to supplementary PDFs within the same title",
];

export function P360ReaderExperience() {
  return (
    <section className="border-y border-p360-border bg-p360-panel py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
            The reader experience
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-p360-ink sm:text-4xl">
            Technology that gets out of the way and lets readers read
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-p360-muted">
            The eBook reader and audiobook player are the core of the platform. Both are
            designed to be invisible — professional-grade features without the friction.
            eBooks and audiobooks appear together in a single{" "}
            <em className="not-italic font-medium text-p360-ink">My Library</em> — cover art, progress,
            and download status visible at a glance.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* eBooks */}
          <div className="rounded-2xl border border-p360-border bg-p360-surface p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-p360-accent text-p360-brand">
                <span className="text-xs font-bold">eB</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
                  eBooks
                </p>
                <h3 className="font-serif text-xl font-semibold text-p360-ink">
                  EPUB &amp; PDF reader
                </h3>
              </div>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {EBOOK_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-p360-accent text-p360-brand">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-p360-muted">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Audiobooks */}
          <div className="rounded-2xl border border-p360-border bg-p360-surface p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-p360-accent text-p360-brand">
                <span className="text-xs font-bold">AB</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-p360-brand">
                  Audiobooks
                </p>
                <h3 className="font-serif text-xl font-semibold text-p360-ink">
                  Download-first player
                </h3>
              </div>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {AUDIO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-p360-accent text-p360-brand">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-p360-muted">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offline badge */}
        <div className="mt-8 rounded-2xl border border-p360-border bg-p360-surface px-8 py-6 text-center">
          <p className="font-semibold text-p360-ink">
            Offline-first architecture across iOS, Android, and web
          </p>
          <p className="mt-2 text-sm leading-relaxed text-p360-muted">
            Content downloads to device. Notes sync when connectivity returns. Configurable
            device limits (typically three) reduce account sharing.
          </p>
        </div>
      </div>
    </section>
  );
}
