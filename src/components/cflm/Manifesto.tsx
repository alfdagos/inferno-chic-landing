import Reveal from "./Reveal";

const Manifesto = () => (
  <section className="relative bg-background py-32 md:py-48 overflow-hidden">
    <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] rounded-full bg-blood/20 blur-[120px]" />

    <div className="relative mx-auto max-w-5xl px-6 md:px-12">
      <Reveal>
        <p className="mb-10 text-xs uppercase tracking-[0.5em] text-blood">§ Manifesto</p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="font-logo text-5xl md:text-8xl leading-[1] tracking-tight text-foreground">
          Non è una <span className="italic text-blood">festa</span>.
          <br />
          Non è un <span className="italic">evento</span>.
        </h2>
      </Reveal>
      <Reveal delay={300}>
        <p className="mt-12 max-w-3xl font-logo italic text-2xl md:text-4xl text-foreground/80 leading-snug">
          È quello che succede
          <br />
          quando smetti di fare <span className="text-blood not-italic font-bold">il bravo</span>.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Manifesto;
