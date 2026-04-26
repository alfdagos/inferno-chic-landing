import Reveal from "./Reveal";
import martini from "@/assets/martini-devil.jpg";

const items = [
  { k: "Data", v: "01.08.2026", note: "Sabato. Chiaro?" },
  { k: "Location", v: "Chiedi in giro", note: "Davvero. Non lo diciamo." },
  { k: "Orario", v: "22:00 → ?", note: "Finché reggi." },
];

const Details = () => (
  <section className="relative bg-void py-32 md:py-48 border-y border-foreground/10">
    <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5 order-2 md:order-1">
        <Reveal>
          <div className="relative overflow-hidden shadow-deep">
            <img src={martini} alt="Martini & tridente" className="w-full h-auto" loading="lazy" width={1280} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>

      <div className="md:col-span-7 order-1 md:order-2">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-blood mb-8">§ Dettagli (i pochi)</p>
        </Reveal>
        <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
          {items.map((it, i) => (
            <Reveal as="li" key={it.k} delay={i * 120}>
              <div className="grid grid-cols-12 items-baseline gap-4 py-8 group hover-tilt cursor-default">
                <span className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.4em] text-foreground/50">
                  {it.k}
                </span>
                <span className="col-span-8 md:col-span-6 font-logo text-3xl md:text-5xl text-foreground group-hover:text-blood transition-colors duration-500">
                  {it.v}
                </span>
                <span className="col-span-4 md:col-span-3 text-right text-xs uppercase tracking-[0.3em] text-foreground/40 italic">
                  {it.note}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Details;
