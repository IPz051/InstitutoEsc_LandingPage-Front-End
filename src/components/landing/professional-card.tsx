import { ImageIcon } from "lucide-react";
import Image from "next/image";

export type ProfessionalCardData = {
  name: string;
  role: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
  imageScale?: number;
  imagePosition?: string;
  highlights?: ReadonlyArray<string>;
};

type ProfessionalCardProps = {
  professional: ProfessionalCardData;
  imageFallbackLabel: string;
};

export function ProfessionalCard({
  professional,
  imageFallbackLabel,
}: ProfessionalCardProps) {
  return (
    <article className="overflow-hidden rounded-[26px] border border-[rgba(17,23,47,0.08)] bg-white shadow-[0_14px_40px_rgba(17,23,47,0.05)]">
      <div className="relative aspect-[16/10] w-full bg-[linear-gradient(180deg,rgba(250,250,252,0.96),rgba(245,246,250,0.96))]">
        {professional.imageSrc ? (
          <Image
            src={professional.imageSrc}
            alt={professional.imageAlt ?? professional.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`object-cover ${professional.imageClassName ?? ""}`}
            style={{
              objectPosition: professional.imagePosition,
              transform: professional.imageScale
                ? `scale(${professional.imageScale})`
                : undefined,
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 rounded-2xl border border-[rgba(17,23,47,0.10)] bg-white/85 px-4 py-3 text-[var(--muted-foreground)]">
              <ImageIcon className="h-5 w-5" />
                <span className="text-sm font-medium">{imageFallbackLabel}</span>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 py-7 sm:px-7">
        <h3 className="section-title text-[1.9rem] font-bold tracking-[-0.05em] text-[var(--foreground)]">
          {professional.name}
        </h3>

        <p className="mt-2 text-base font-semibold text-[var(--primary)]">
          {professional.role}
        </p>

        <p className="mt-4 text-[1.02rem] leading-7 text-[var(--muted-foreground)]">
          {professional.description}
        </p>

        {professional.highlights?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {professional.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-[rgba(91,110,240,0.10)] px-4 py-2 text-sm font-semibold text-[var(--primary)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
