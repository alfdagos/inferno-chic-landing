/**
 * DevilV — A capital "V" rendered as inline SVG with a devil-tail arrow
 * extending up-right from the right serif, mirroring the central logo.
 *
 * - Uses `currentColor` so it inherits the parent text color (blood red).
 * - `1em` square so it scales with surrounding font-size.
 * - Glyph drawn in Cinzel-style serif proportions to blend with the headline.
 */
const DevilV = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={`inline-block align-baseline ${className}`}
      style={{
        width: "0.78em",
        height: "1em",
        // Optical alignment: nudge down so the V baseline sits with siblings
        verticalAlign: "-0.08em",
        overflow: "visible",
        fill: "currentColor",
      }}
    >
      {/* The V — serif, slight contrast in stroke weights to match Cinzel */}
      <path
        d="
          M 4 8
          L 22 8
          L 28 12
          L 50 78
          L 72 12
          L 78 8
          L 96 8
          L 96 11
          L 90 13
          L 86 18
          L 60 92
          L 40 92
          L 14 18
          L 10 13
          L 4 11
          Z
        "
      />

      {/* Devil arrow rising from the right serif tip — shaft */}
      <path
        d="
          M 90 9
          L 104 -7
        "
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Arrow head — sharp triangular spear point */}
      <path
        d="
          M 104 -7
          L 96 -6
          L 100 -2
          L 92 2
          L 100 6
          L 109 1
          Z
        "
      />

      {/* Tail barb — small forked detail near the base, evoking the trident */}
      <path
        d="
          M 93 6
          L 99 0
          L 97 8
          Z
        "
      />
    </svg>
  );
};

export default DevilV;
