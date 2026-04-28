/**
 * DevilV — A capital "V" rendered in the parent font (Cinzel),
 * with a small red devil arrow rising from the right tip — exactly
 * like the central CFLM logo.
 *
 * The V itself stays the parent text color (white). Only the arrow
 * is red, drawn as an absolutely-positioned inline SVG sized in `em`
 * so it scales with the surrounding font-size.
 */
const DevilV = () => {
  return (
    <span
      className="relative inline-block"
      style={{ lineHeight: 1 }}
      aria-label="V"
    >
      V
      {/* Devil arrow — rises up-right from the V's right tip */}
      <svg
        viewBox="0 0 40 60"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{
          position: "absolute",
          // Anchored to the top-right vertex of the V
          right: "-0.18em",
          top: "-0.55em",
          width: "0.45em",
          height: "0.7em",
          color: "hsl(var(--blood))",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        {/* Shaft — thin, slightly tapered, leaning up-right */}
        <path
          d="M 8 56 L 26 8"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead — sharp triangular spear point at the top */}
        <path
          d="M 26 8 L 18 14 L 22 18 L 14 24 L 32 16 Z"
          fill="currentColor"
        />
        {/* Small barb on the shaft — trident-like detail */}
        <path
          d="M 18 30 L 26 22 L 22 34 Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default DevilV;
