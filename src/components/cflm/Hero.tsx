import logo from "@/assets/cflm-logo.png";
import devilWoman from "@/assets/devil-woman-1.jpg";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-hellfire grain">
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-vignette" />

      {/* Top bar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <span className="font-display text-xl tracking-[0.3em] text-foreground">CFLM</span>
        <span className="hidden md:block text-xs tracking-[0.4em] uppercase text-foreground/70">
          Summer · MMXXVI
        </span>
        <button
          onClick={scrollToCTA}
          className="text-xs tracking-[0.3em] uppercase text-foreground hover:text-blood transition-colors underline-tempt"
        >
          RSVP
        </button>
      </nav>

      {/* Main grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 pt-8 md:grid-cols-12 md:px-12 md:pt-16">
        {/* Left: text */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-foreground/80 animate-fade-up">
            <span className="inline-block h-px w-10 bg-foreground/60" />
            Invito · 01 · 08 · 2026
          </p>

          <h1 className="font-display font-black leading-[0.85] tracking-tight animate-fade-up" style={{ animationDelay: ".15s" }}>
            <span className="block text-[18vw] md:text-[10vw] text-foreground glow-text">CFLM</span>
            <span className="block text-[14vw] md:text-[7.5vw] text-foreground italic">
              BE<span className="text-blood not-italic">V</span>E
            </span>
            <span className="block text-[8vw] md:text-[4.4vw] text-foreground/95 mt-2">
              Comunque <span className="italic">Vada</span>
            </span>
          </h1>

          <p
            className="mt-10 max-w-md text-base md:text-lg text-foreground/85 leading-relaxed animate-fade-up"
            style={{ animationDelay: ".4s" }}
          >
            Se devi chiedere cos'è,
            <br />
            <span className="text-foreground font-medium">forse non è roba per te.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: ".6s" }}>
            <button
              onClick={scrollToCTA}
              className="group relative inline-flex items-center gap-3 bg-foreground px-8 py-5 text-xs uppercase tracking-[0.35em] text-background pulse-blood hover:bg-blood hover:text-foreground transition-colors duration-500"
            >
              Segnatelo. O pentitene.
              <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
            </button>
            <span className="text-xs uppercase tracking-[0.35em] text-foreground/50">
              Posti? Non sono affari tuoi.
            </span>
          </div>
        </div>

        {/* Right: logo + image */}
        <div className="md:col-span-5 relative flex items-center justify-center">
          <div className="absolute -right-10 -top-10 h-[420px] w-[320px] md:h-[640px] md:w-[460px] overflow-hidden float-slow shadow-deep">
            <img
              src={devilWoman}
              alt="Eleganza diabolica"
              className="h-full w-full object-cover grayscale-0"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <img
            src={logo}
            alt="CFLM Beve Comunque Vada"
            className="relative z-10 mt-10 w-72 md:w-[26rem] mix-blend-screen invert flicker drop-shadow-[0_20px_60px_hsl(var(--blood)/.6)]"
            width={520}
            height={520}
          />
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-foreground/15 bg-background/40 backdrop-blur-sm py-4">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee-track text-foreground/80 text-xs tracking-[0.45em] uppercase">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="px-8 inline-flex items-center gap-6">
                Beve Comunque Vada
                <span className="text-blood">●</span>
                01 · 08 · 2026
                <span className="text-blood">●</span>
                Chiedi in giro
                <span className="text-blood">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
