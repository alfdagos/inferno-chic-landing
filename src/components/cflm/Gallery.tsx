import Reveal from "./Reveal";
import cocktail from "@/assets/night-cocktail.jpg";
import toast from "@/assets/night-toast.jpg";
import crowd from "@/assets/night-crowd.jpg";
import handDrink from "@/assets/night-hand-drink.jpg";
import bar from "@/assets/night-bar.jpg";
import lights from "@/assets/night-lights.jpg";

interface Tile {
  src: string;
  alt: string;
  className: string; // grid placement + aspect
  caption?: string;
  w: number;
  h: number;
}

const tiles: Tile[] = [
  {
    src: lights,
    alt: "Luci rosse e folla in penombra in un club esclusivo",
    className: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:h-[640px]",
    caption: "22:22 — entri.",
    w: 1024,
    h: 1280,
  },
  {
    src: handDrink,
    alt: "Mano elegante che regge un cocktail rosso",
    className: "md:col-span-5 aspect-square md:h-[310px]",
    caption: "22:23 — il primo sorso.",
    w: 1024,
    h: 1024,
  },
  {
    src: toast,
    alt: "Brindisi con calici di champagne sotto luci rosse",
    className: "md:col-span-5 aspect-[4/3] md:h-[310px]",
    caption: "23:00 — il brindisi.",
    w: 1280,
    h: 1024,
  },
  {
    src: cocktail,
    alt: "Cocktail rosso illuminato in un lounge buio",
    className: "md:col-span-4 aspect-[3/4] md:h-[460px]",
    caption: "1.43 — Rosso. Solo rosso.",
    w: 1024,
    h: 1280,
  },
  {
    src: bar,
    alt: "Bancone bar con file di cocktail rossi e fumo",
    className: "md:col-span-8 aspect-[16/10] md:h-[460px]",
    caption: "3.13 - Il bar non chiude.",
    w: 1280,
    h: 1024,
  },
];

const Gallery = () => (
  <section className="relative bg-background py-32 md:py-44 overflow-hidden">
    <div className="pointer-events-none absolute right-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-blood/15 blur-[140px]" />
    <div className="pointer-events-none absolute left-[-10%] bottom-20 h-[360px] w-[360px] rounded-full bg-blood/10 blur-[120px]" />

    <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        {tiles.map((t, i) => (
          <Reveal key={i} delay={i * 90} className={t.className}>
            <figure className="group relative h-full w-full overflow-hidden bg-void">
              <img
                src={t.src}
                alt={t.alt}
                width={t.w}
                height={t.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.08] will-change-transform"
              />
              {/* red unifying overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--void)/0.55)_100%)]" />
              <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-[linear-gradient(180deg,hsl(var(--blood)/0.18)_0%,hsl(var(--blood-deep)/0.28)_100%)] opacity-80 transition-opacity duration-700 group-hover:opacity-50" />
              {/* grain */}
              <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay grain" />
              {/* caption */}
              {t.caption && (
                <figcaption className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
                  <span className="font-bodoni italic text-sm md:text-base text-ivory/90 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t.caption}
                  </span>
                  <span className="font-logo text-[10px] tracking-[0.4em] text-blood opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    01.08.26
                  </span>
                </figcaption>
              )}
              {/* corner ticks */}
              <span className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t border-l border-blood/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-blood/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-16 md:mt-24 text-center font-bodoni italic text-xl md:text-3xl text-foreground/70">
          Questa è solo un'anteprima.{" "}
          <span className="text-blood not-italic">Il resto, il 1° Agosto.</span>
        </p>
      </Reveal>
    </div>
  </section>
);

export default Gallery;
