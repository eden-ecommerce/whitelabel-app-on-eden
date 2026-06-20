import Image from "next/image";
import { cn } from "@lib/utils";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

/** A realistic phone device frame wrapping a portrait app screenshot. */
export function PhoneMockup({ src, alt, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[280px]", className)}>
      <div className="relative aspect-[9/19] rounded-[2.5rem] border-[10px] border-foreground bg-foreground shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-foreground" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-card">
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            className="object-cover"
            sizes="280px"
          />
        </div>
      </div>
    </div>
  );
}
