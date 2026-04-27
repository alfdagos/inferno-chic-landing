import { useState } from "react";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

const FinalCTA = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <section id="rsvp" className="relative bg-blood-grad grain overflow-hidden">
      <div className="py-10 border-b border-background/20">
        <Marquee items={["Io vengo", "Poi si vede", "CFLM", "01.08.2026", "Beve comunque vada"]} />
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-12 py-32 md:py-48 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-background/70 mb-10">§ Ultima chiamata</p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-logo text-5xl md:text-8xl leading-[0.95] tracking-tight text-background">
            <span data-text="Puoi restare" className="glitch">Puoi restare</span>
            <br />
            a <span className="italic">casa</span>.
          </h2>
        </Reveal>
        <Reveal delay={350}>
          <p className="mt-10 font-logo italic text-2xl md:text-4xl text-background/85 max-w-2xl mx-auto">
            Oppure avere una storia da raccontare <br/><span className="not-italic underline decoration-2 underline-offset-4">male</span>.
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
                <>Annotato. Non deluderci. <span className="text-blood">●</span></>
              ) : (
                <>
                  Io vengo. Poi si vede.
                  <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                </>
              )}
            </button>
            <span className="text-xs uppercase tracking-[0.4em] text-background/60">
              Nessuna conferma. Nessuna lista. Solo presenza.
            </span>
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-background/20 bg-background py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-logo text-xl tracking-[0.3em] text-foreground">CFLM</span>
          <span className="text-xs uppercase tracking-[0.4em] text-foreground/40">
            Summer MMXXVI · Beve Comunque Vada
          </span>
          <span className="text-xs uppercase tracking-[0.4em] text-foreground/40">
            Bevi responsabilmente. <span className="italic">Forse.</span>
          </span>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTA;
