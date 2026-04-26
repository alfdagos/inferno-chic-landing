interface MarqueeProps {
  items: string[];
  className?: string;
  slow?: boolean;
}

const Marquee = ({ items, className = "", slow }: MarqueeProps) => {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`marquee-track ${slow ? "marquee-track-slow" : ""}`}>
        {loop.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8">
            <span className="font-display italic text-5xl md:text-7xl tracking-tight">{t}</span>
            <span aria-hidden className="text-blood text-5xl md:text-7xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
