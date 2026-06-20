import { Quote } from "lucide-react";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <figure className="text-center">
      <Quote className="mx-auto size-8 text-primary" aria-hidden />
      <blockquote className="mt-6 text-balance font-serif text-2xl font-medium leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold text-foreground">{author}</span>
        <span className="text-muted-foreground"> &mdash; {role}</span>
      </figcaption>
    </figure>
  );
}
