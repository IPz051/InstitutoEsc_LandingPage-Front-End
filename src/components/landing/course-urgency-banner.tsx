import { ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";

type CourseUrgencyBannerProps = {
  label: string;
  title: string;
  ctaLabel: string;
};

export function CourseUrgencyBanner({
  label,
  title,
  ctaLabel,
}: CourseUrgencyBannerProps) {
  return (
    <div className="mb-8 rounded-b-[28px] border-x border-b border-[#f1d596] bg-[linear-gradient(135deg,rgba(255,251,238,0.98)_0%,rgba(255,244,214,0.98)_100%)] p-4 shadow-[0_18px_40px_rgba(186,140,31,0.14)] sm:mb-10 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[760px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#11172f] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ffe7a3]">
            <Clock3 className="h-4 w-4" />
            {label}
          </div>

          <p className="mt-3 text-lg font-extrabold leading-tight tracking-[-0.03em] text-[#11172f] sm:text-[1.4rem]">
            {title}
          </p>
        </div>

        <Link
          href="/cadastro"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-base font-semibold !text-white shadow-[0_16px_32px_rgba(46,79,190,0.22)] transition hover:bg-[#2845a8] hover:!text-white visited:!text-white"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
