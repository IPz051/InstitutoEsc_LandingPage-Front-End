"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

import type { LandingCopy } from "@/components/landing/content";

type Testimonial = {
  author: string;
  role: string;
  quote: string;
  result: string;
};

type TestimonialsSectionProps = {
  copy: LandingCopy["testimonials"];
};

export function TestimonialsSection({ copy }: TestimonialsSectionProps) {
  const testimonials: ReadonlyArray<Testimonial> = copy.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = Array.from({
    length: Math.min(3, testimonials.length),
  }).map((_, index) => testimonials[(activeIndex + index) % testimonials.length]);

  function handlePrevious() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  }

  function handleNext() {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
            {copy.eyebrow}
          </p>

          <h2 className="section-title mt-4 text-[2.45rem] font-extrabold leading-[1.02] tracking-[-0.06em] whitespace-pre-line text-[var(--foreground)] sm:text-[3.2rem] lg:text-[3.95rem]">
            {copy.title}
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            {copy.description}
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label={copy.previousAria}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(17,23,47,0.10)] bg-white text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${copy.previousAria} ${index + 1}`}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "w-8 bg-[var(--primary)]"
                    : "w-2.5 bg-[rgba(17,23,47,0.16)] hover:bg-[rgba(17,23,47,0.28)]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label={copy.nextAria}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(17,23,47,0.10)] bg-white text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.author}-${activeIndex + index}`}
              className="rounded-[24px] border border-[rgba(17,23,47,0.06)] bg-white px-5 py-5 shadow-[0_18px_44px_rgba(17,23,47,0.06)] sm:px-6 sm:py-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2ff] text-[var(--primary)]">
                <Quote className="h-4 w-4" />
              </div>

              <div className="mt-5 flex items-center gap-1 text-[var(--primary)]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>

              <blockquote className="mt-4 min-h-[144px] text-[1.05rem] leading-8 text-[var(--foreground)]">
                {testimonial.quote}
              </blockquote>

              <div className="mt-6 border-t border-[rgba(17,23,47,0.08)] pt-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
