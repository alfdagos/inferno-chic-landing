import { useState } from "react";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import content from "@/content/final-cta.json";

const FinalCTA = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section id="rsvp" className="relative bg-blood-grad grain overflow-hidden">
      <div className="py-10 border-b border-background/20">
        <Marquee items={content.marquee_items} />
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-12 py-32 md:py-48 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-background/70 mb-10">{content.section_label}</p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-logo text-5xl md:text-8xl leading-[0.95] tracking-tight text-background">
            <span data-text={content.heading_line1} className="glitch">{content.heading_line1}</span>
            <br />
            a <span className="italic text-foreground">{content.heading_line2}</span>
          </h2>
        </Reveal>
        <Reveal delay={350}>
          <p className="mt-10 font-logo italic text-2xl md:text-4xl text-background/85 max-w-2xl mx-auto">
            {content.subtitle_line1} <br/>
            <span className="not-italic underline decoration-2 underline-offset-4 text-foreground">{content.subtitle_line2}</span>
          </p>
        </Reveal>

        <Reveal delay={550}>
          <div className="mt-16 flex flex-col items-center gap-5">
            <button
              onClick={() => setConfirmed(true)}
              disabled={confirmed}
              className="cta-aggressive group relative inline-flex items-center gap-4 bg-background px-12 py-7 text-sm md:text-base uppercase tracking-[0.35em] text-foreground hover:bg-foreground hover:text-background disabled:opacity-90"
            >
              {confirmed ? (
                <>{content.cta_confirmed} <span className="text-blood">●</span></>
              ) : (
                <>
                  {content.cta_default}
                  <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                </>
              )}
            </button>
            <span className="text-xs uppercase tracking-[0.4em] text-background/60">
              {content.cta_caption}
            </span>
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-background/20 bg-background py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-logo text-xl tracking-[0.3em] text-foreground">CFLM</span>
          <span className="text-xs uppercase tracking-[0.4em] text-foreground/40">
            {content.footer_tagline}
          </span>
          <span className="text-xs uppercase tracking-[0.4em] text-foreground/40">
            {content.footer_disclaimer}
          </span>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTA;
