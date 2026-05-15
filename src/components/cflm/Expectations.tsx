import Reveal from "./Reveal";
import content from "@/content/expectations.json";


const Expectations = () => (
  <section className="relative bg-background py-32 md:py-48 overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-blood mb-6">{content.section_label}</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-logo text-5xl md:text-7xl text-foreground tracking-tight max-w-4xl">
          {content.heading} <span className="italic text-foreground/50">{content.heading_italic}</span>
        </h2>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
        {content.items.map((th, i) => (
          <Reveal key={th.number} delay={i * 100}>
            <article className="group relative bg-background p-10 md:p-14 h-full overflow-hidden transition-colors duration-500 hover:bg-blood">
              <div className="flex items-start justify-between mb-10">
                <span className="font-logo italic text-foreground/30 group-hover:text-foreground/80 text-2xl transition-colors">
                  {th.number}
                </span>
                <span className="text-blood group-hover:text-foreground text-2xl transition-colors">✦</span>
              </div>
              <h3 className="font-logo text-3xl md:text-5xl leading-[1.05] text-foreground">
                {th.title}
              </h3>
              <p className="mt-4 text-foreground/60 group-hover:text-foreground/90 italic">
                {th.subtitle}
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-foreground text-xs uppercase tracking-[0.4em]">
                ↗ Inevitabile
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Expectations;
