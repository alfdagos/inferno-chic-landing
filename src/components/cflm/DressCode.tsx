import Reveal from "./Reveal";
import heels from "@/assets/heels-devil.jpg";

const DressCode = () => (
  <section className="relative bg-void py-32 md:py-48 overflow-hidden border-y border-foreground/10">
    <div className="absolute inset-0 opacity-40">
      <img src={heels} alt="" className="w-full h-full object-cover" loading="lazy" width={1280} height={1024} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
    </div>

    <div className="relative mx-auto max-w-6xl px-6 md:px-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.5em] text-blood mb-8">§ Dress Code</p>
      </Reveal>
      <Reveal delay={150}>
        <h2 className="font-logo text-5xl md:text-8xl text-foreground leading-[0.95] tracking-tight max-w-3xl">
          <span data-text="Vestiti" className="glitch">Vestiti</span> <span className="italic text-blood">bene</span>.
        </h2>
      </Reveal>
      <Reveal delay={350}>
        <p className="mt-10 font-logo italic text-2xl md:text-4xl text-foreground/75 max-w-2xl">
          O almeno prova a non rovinare le foto.
        </p>
      </Reveal>
      <Reveal delay={550}>
        <div className="mt-12 flex flex-wrap gap-3">
          {["Tacchi", "Seta", "Pelle", "Nero", "Rosso sangue", "Niente sneakers", "No felpe", "Profumo costoso"].map((t) => (
            <span
              key={t}
              className="badge-aggressive border border-foreground/30 px-5 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 hover:bg-blood hover:border-blood hover:text-foreground cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default DressCode;
