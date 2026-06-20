"use client";

import { useState } from "react";
import { cn } from "@lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const CATALOGUE_OPTIONS = [
  "eBooks only",
  "Audiobooks only",
  "eBooks & audiobooks",
  "Video / courses",
  "Mixed catalogue",
];

export function P360DemoForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/publish360", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="mt-8 rounded-xl border border-p360-brand/30 bg-p360-accent px-8 py-10 text-center">
        <p className="font-serif text-xl font-semibold text-p360-ink">
          Request received — thank you.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-p360-muted">
          A member of the Publish360 team will be in touch within one working day to arrange
          your free demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      {/* Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="first_name" required autoComplete="given-name" />
        <Field label="Last name" name="last_name" required autoComplete="family-name" />
      </div>

      {/* Contact */}
      <Field
        label="Work email address"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field label="Organisation / publisher name" name="organisation" required />

      {/* Role */}
      <Field
        label="Your role (optional)"
        name="role"
        placeholder="e.g. Digital Director, Head of Publishing"
        autoComplete="organization-title"
      />

      {/* Catalogue type */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-p360-ink">
          Catalogue type
        </label>
        <select
          name="catalogue_type"
          defaultValue=""
          className="rounded-lg border border-p360-border bg-p360-surface px-3.5 py-2.5 text-sm text-p360-ink focus:border-p360-brand focus:outline-none focus:ring-2 focus:ring-p360-brand/20"
        >
          <option value="" disabled>
            Select catalogue type
          </option>
          {CATALOGUE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Catalogue size */}
      <Field
        label="Approximate catalogue size (optional)"
        name="catalogue_size"
        placeholder="e.g. 200 titles, 50 audiobooks"
      />

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-p360-ink">
          Anything else you would like us to know? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Current distribution channels, specific requirements, timelines..."
          className="rounded-lg border border-p360-border bg-p360-surface px-3.5 py-2.5 text-sm text-p360-ink placeholder:text-p360-muted/60 focus:border-p360-brand focus:outline-none focus:ring-2 focus:ring-p360-brand/20 resize-none"
        />
      </div>

      {state === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong — please try again or email us directly at{" "}
          <a
            href="mailto:publish360@edeninteractive.com"
            className="underline underline-offset-2"
          >
            publish360@edeninteractive.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className={cn(
          "mt-2 inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-colors",
          state === "submitting"
            ? "cursor-not-allowed bg-p360-brand/60"
            : "bg-p360-brand hover:bg-p360-brand/90",
        )}
      >
        {state === "submitting" ? "Sending..." : "Request your free demo"}
      </button>

      <p className="text-center text-xs text-p360-muted">
        No commercial commitment required. We will be in touch within one working day.
      </p>
    </form>
  );
}

// ── Reusable field ────────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: FieldProps) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-p360-ink">
        {label}
        {required && <span className="ml-1 text-p360-brand" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded-lg border border-p360-border bg-p360-surface px-3.5 py-2.5 text-sm text-p360-ink placeholder:text-p360-muted/60 focus:border-p360-brand focus:outline-none focus:ring-2 focus:ring-p360-brand/20"
      />
    </div>
  );
}
