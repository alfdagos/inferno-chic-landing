---
description: "Use when creating, editing, or reviewing CFLM page section components. Covers brand utility classes, glitch effect, scroll animations, typography, and CTA patterns for the inferno-chic design system."
applyTo: "src/components/cflm/**"
---

# CFLM Section Components

## Brand Utilities — always use, never bypass

- Colors: `text-blood`, `bg-blood`, `bg-hellfire`, `bg-void`, `bg-vignette` — never raw Tailwind colors like `text-red-500`.
- Semantic tokens: `text-foreground`, `bg-background`, `text-muted-foreground`.
- Class merging: always `cn()` from `@/lib/utils`. Never string concatenation.
- No `rounded-*` — `--radius` is intentionally `0`.

## Glitch Effect

Every element with the `glitch` class **must** have a `data-text` attribute whose value exactly matches the element's visible text content:

```tsx
<span data-text="CFLM" className="glitch">CFLM</span>
```

Omitting or mismatching `data-text` breaks the CSS `::before`/`::after` pseudo-elements.

## Scroll Reveal Animation

Use `reveal` + `reveal.in` for scroll-triggered fade-ups. Toggle `.in` via `IntersectionObserver`, not CSS `:hover` or manual class setting:

```tsx
useEffect(() => {
  const el = ref.current;
  const observer = new IntersectionObserver(
    ([entry]) => entry.isIntersecting && el?.classList.add("in"),
    { threshold: 0.15 }
  );
  if (el) observer.observe(el);
  return () => observer.disconnect();
}, []);

<div ref={ref} className="reveal">…</div>
```

The `Reveal` wrapper component in `src/components/cflm/Reveal.tsx` already encapsulates this — prefer it over re-implementing.

## Typography

| Class | Use for |
|---|---|
| `font-logo` | Main headings, logo wordmark (Cinzel) |
| `font-display` | Sub-headings, editorial text (Playfair Display) |
| `font-bodoni` | Decorative accents (Bodoni Moda) |
| `font-body` | Body copy, default (Inter) |

Never use `font-sans`, `font-serif`, or other generic Tailwind font classes.

## CTA / RSVP Scroll Target

All CTA buttons that scroll to the RSVP form must target `#rsvp`:

```tsx
document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
```

## Other Animations

- `flicker` — neon flicker loop (standalone `className`, no JS needed)
- `float-slow` — gentle float loop
- `hover-tilt` — lift + tilt on hover
- `pulse-blood` — pulsing red box-shadow
- `underline-tempt` — animated blood-red underline on hover (use on inline elements)

## Adding a New Section

1. Create `src/components/cflm/MySectionName.tsx`.
2. Import and add it to `src/pages/Index.tsx` in the desired order.
3. Wrap the section root in `<section>` (or `<article>`) with at minimum `bg-background text-foreground`.
4. Apply `grain` + `bg-hellfire` (or `bg-void`) at the section level for consistent texture.
