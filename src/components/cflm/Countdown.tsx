import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const TARGET = new Date("2026-08-01T22:00:00+02:00").getTime();

const calc = () => {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

const Countdown = () => {
  const [t, setT] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Giorni", value: pad(t.days, 3) },
    { label: "Ore", value: pad(t.hours) },
    { label: "Minuti", value: pad(t.minutes) },
    { label: "Secondi", value: pad(t.seconds) },
  ];

  return (
    <section className="relative bg-background py-28 md:py-40 overflow-hidden border-t border-blood/15">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-blood/15 blur-[140px]" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-blood mb-6">§ Countdown</p>
          <h2 className="font-logo text-4xl md:text-6xl leading-[0.95] tracking-tight text-foreground mb-4">
            Manca <span className="italic text-blood">poco</span>.
            <br />
            E tu non sei <span className="italic">ancora</span> pronto.
          </h2>
          <p className="font-bodoni italic text-base md:text-lg text-foreground/55 mb-16 md:mb-20">
            01 Agosto 2026 — il tempo non aspetta nemmeno te.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {items.map((it) => (
              <div
                key={it.label}
                className="group relative border border-blood/30 bg-void/40 backdrop-blur-sm py-8 md:py-12 px-4 transition-colors duration-500 hover:border-blood"
              >
                <span
                  className="font-logo block text-5xl md:text-7xl lg:text-8xl text-foreground tabular-nums tracking-tight leading-none"
                  aria-live="polite"
                >
                  {it.value}
                </span>
                <span className="mt-4 block text-[10px] md:text-xs uppercase tracking-[0.5em] text-foreground/50 group-hover:text-blood transition-colors">
                  {it.label}
                </span>
                <span className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t border-l border-blood/60" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-blood/60" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Countdown;
