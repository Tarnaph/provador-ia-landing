# Provador IA — Landing Page UI Design Contract
> Visual and interaction contract for a complete redesign of the sales landing page.

**Status:** draft  
**Created:** 2026-04 (via direct /gsd-ui-phase invocation)  
**Context:** Standalone landing page project (no full GSD roadmap/phases). This spec was created in response to explicit user feedback that the current layout is "muito comum" and fails to properly value the videos and images.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | None (vanilla HTML + Tailwind CDN or minimal Vite + Tailwind for production) |
| Component library | None (custom components only) |
| Icon library | Minimal inline SVGs only (heroicons or custom) |
| Font (Headings) | Playfair Display or similar high-contrast editorial serif (or switch to a more modern editorial serif like Cormorant, Cinzel, or a premium variable serif) |
| Font (Body/UI) | Inter or a slightly more refined sans (e.g. Satoshi, Neue Haas Grotesk, or system-ui with optical sizing) |
| Motion | Subtle, purposeful, cinematic (no bouncy micro-interactions) |

**Core Philosophy:**  
This is **not** a SaaS tool landing. This is a **visual transformation product**. The images and especially the videos *are* the product and the primary sales argument. Every major section must be visually led.

---

## Visual Direction (Most Important Section)

**New Aesthetic:** Cinematic Editorial Luxury — Fashion Brand Sales Experience

The page must feel like a high-end fashion editorial or luxury brand lookbook mixed with the emotional directness of a direct-response sales page. Think: modern equivalents of high-fashion campaign sites, premium e-commerce lookbooks (e.g. The Row, Toteme, or strong Brazilian references like high-end brands that sell aspiration through imagery), combined with strong conversion architecture.

**Key Shifts from Current State:**
- Remove dense card grids and text-first sections as the dominant pattern.
- Large breathing room around imagery and video.
- Darker, richer, more photographic background (#050505 or #0A0A0A base, with very subtle texture or gradient only where it helps photos pop).
- Accent color (#BE185D or a more sophisticated deep raspberry/crimson) used **very strategically** as highlight only (never as full button backgrounds everywhere).
- Typography becomes more confident and editorial — larger sizes, better contrast, generous leading.
- Motion serves storytelling (video reveals, cinematic before/after transitions, scroll-triggered playback).

**Primary Visual Hierarchy Rule:**  
On every scroll section, the eye should land first on a powerful image or video frame. Text supports the visual, never the other way around.

---

## Spacing Scale

Standard 8-point scale with generous exceptions for visual sections:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Fine details |
| sm | 8px | Icon gaps, tight elements |
| md | 16px | Default UI spacing |
| lg | 24px | Card/element internal padding |
| xl | 32px | Section internal rhythm |
| 2xl | 48px | Major breathing between elements |
| 3xl | 64px | Section padding (default) |
| 4xl | 80–96px | Hero and major visual sections (generous) |
| 5xl | 120px+ | Between major visual blocks when needed |

**Critical:** Visual-first sections (Hero, Transformation, Video Feature, Gallery) must have significantly more vertical breathing room than the current design. White space is part of the luxury.

---

## Typography

| Role | Size (desktop) | Weight | Line Height | Notes |
|------|----------------|--------|-------------|-------|
| Display / Hero | 64–80px | 700 | 0.95–1.0 | Editorial, confident |
| Heading 1 | 48–56px | 700 | 1.05 | Section titles |
| Heading 2 | 32–36px | 600 | 1.1 | Sub-section |
| Heading 3 | 22–24px | 600 | 1.2 | Supporting |
| Body | 16–17px | 400 | 1.55 | Generous for readability |
| Small / Caption | 13–14px | 400 | 1.4 | Image captions, legal, secondary |

**Rule:** Maximum 5 type sizes total. No font size between 17px and 22px except in very specific cases.

---

## Color

| Role | Value | Usage |
|------|-------|-------|
| Dominant (60%) | #050505 or #0A0A0A | Background, deep surfaces |
| Secondary (25%) | #111111 / #1A1A1A | Cards, overlays, video containers (very subtle elevation) |
| Accent (8–10%) | #BE185D (or refined deep raspberry #9F174E) | Only for: primary CTAs, active states, key highlights, "DEPOIS" labels, price emphasis |
| Photographic Neutral | #F5F3EE or warm off-white | Text on dark photo overlays when needed |
| Destructive / Warning | #B91C1C | Only for true destructive actions (none expected on this page) |

**Accent Rule (strict):** Accent is **reserved** for:
- Primary conversion CTAs ("Quero amostra grátis", "Escolher pacote")
- The word "DEPOIS" or transformation indicators
- Very subtle active states
- Price highlights

It is **not** used for decorative lines, icons, or secondary buttons.

---

## Copywriting Contract

| Element | Copy (examples — refine with brand voice) |
|---------|-------------------------------------------|
| Primary Hero CTA | "Quero ver minha peça com modelo profissional" |
| Secondary Hero CTA | "Ver 8 segundos de vídeo real" |
| Transformation Section Headline | "De foto simples para ensaio de marca em minutos" |
| Video Section Headline | "Veja o movimento. Veja a diferença." |
| Gallery Section Headline | "Resultados reais para lojas reais" |
| Empty state (if any future app UI) | Not applicable for this marketing site |
| Error state | "Algo deu errado ao carregar o vídeo. Tente recarregar a página." |

All CTAs must be **verb + benefit** or **verb + outcome**. Never generic ("Enviar", "Saiba mais").

---

## Key Section Treatments (Prescriptive)

### 1. Hero (Highest Priority)
- Must be **visually dominant** — 80%+ of the viewport on load should be powerful imagery or video.
- Recommended direction: Full-bleed muted looping video (one of the existing model videos or a new hero compilation) with strong dark gradient overlay + centered headline + two CTAs.
- Alternative strong option: Large cinematic before/after with a prominent "Ver em movimento" button that opens a lightbox video.
- Headline must be shorter and more emotional than current ("Sua loja merece fotos que vendem sozinhas" or similar).
- Scroll indicator must be minimal and elegant.

### 2. Transformation / Before × After (Core Emotional Section)
- This is the **most important commercial section** after the hero.
- Must feel cinematic, not like two static photos side by side.
- Options to define in implementation:
  - Large split view with a draggable or click-to-reveal "cortina" (curtain) interaction.
  - Stacked vertical with scroll-triggered video reveal on the "DEPOIS" side.
  - Full-width video of the transformation process (if new asset is created).
- Always include a clear "ANTES" vs "DEPOIS" label treatment that feels editorial, not like a badge.

### 3. Video Showcase (New Dedicated Section — Required)
- Videos can no longer live inside the gallery grid.
- Create a dedicated, prominent "Em movimento" or "Veja como fica na vida real" section.
- Treatments:
  - One large featured video (the best one) with custom play button, minimal controls, and large caption.
  - Two smaller supporting videos beside or below in an editorial layout.
  - All videos should feel like fashion film stills when paused (good poster frames are mandatory).
  - Muted by default, click or tap to play with sound.
  - Consider lightbox expansion for the best video.
- This section should make the visitor **feel** the quality of the deliverable.

### 4. Gallery / Exemplos (Portfolio)
- Replace the current 6-column responsive grid with a more curated, editorial presentation.
- Recommended: Masonry or 2–3 column editorial grid with generous spacing.
- Every image must have a subtle caption (peça + estilo + vibe).
- Click opens a clean lightbox with larger view + "Quero isso na minha peça" CTA.
- Consider a "Ver mais resultados" that expands or links to a dedicated portfolio page later.
- Prioritize quality and storytelling over showing many images.

### 5. How it Works
- Can stay as 4 steps, but must be visually lighter.
- Use large numbered typography + one small supporting image or icon per step.
- Or collapse into a horizontal timeline on desktop if it serves the visual flow better.
- Text must be reduced dramatically.

### 6. Pricing
- Keep the 4 tiers but present them more elegantly (less "feature checklist" density).
- The "Mais Escolhido" badge on Essencial must feel premium, not salesy.
- Consider a visual treatment where the most popular plan has a subtle larger photo treatment or model context if assets allow.

### 7. FAQ
- Keep the accordion pattern (it works).
- Make questions more benefit-oriented and less defensive.

---

## Interaction & Motion Rules

- All image hovers: very subtle scale (1.015–1.025) + slight brightness lift. No heavy shadows.
- Video playback: Always muted on autoplay. Custom elegant play icon. Once user interacts with sound, respect that choice.
- Lightbox: Fast, clean, dark background, minimal chrome. Close with ESC or click outside.
- Scroll-triggered video playback (optional but recommended for one of the videos): Video plays when ~60% visible, pauses when out of view.
- No parallax (performance + taste).
- All transitions: 200–300ms ease-out. Never bouncy or springy.

---

## Registry Safety

Not applicable. No third-party component registries will be used.

---

## Technical Notes

- Current single-file `index.html` + Tailwind CDN approach can continue for speed of iteration.
- For production launch, strongly recommend moving to a minimal Vite + Tailwind setup (or similar) for:
  - Better video optimization and poster image handling
  - Easier maintenance of multiple sections
  - Proper asset hashing
- All video files must have high-quality poster frames extracted (the current posters are acceptable but can be improved).
- Performance target: Largest Contentful Paint under 2.5s on 4G. This means hero video must be heavily optimized (compressed, possibly multiple resolutions or WebM fallback).

---

## Success Criteria for the Redesign

When the new design is implemented, a visitor should be able to:
1. Land on the page and **immediately feel** the quality of the output from the hero visual alone.
2. Scroll and have at least two "wow" moments triggered by video or large photography before reaching pricing.
3. Understand the transformation in under 8 seconds of scrolling.
4. Feel that this is a premium, desirable service — not "just another AI tool".

---

## Checker Sign-Off (to be filled by gsd-ui-checker)

- [ ] Dimension 1 Copywriting: 
- [ ] Dimension 2 Visuals: 
- [ ] Dimension 3 Color: 
- [ ] Dimension 4 Typography: 
- [ ] Dimension 5 Spacing: 
- [ ] Dimension 6 Registry Safety: 

**Overall Status:** pending review

---

*This UI-SPEC.md was generated directly in response to a user request on a standalone landing page project. It intentionally takes a strong opinionated stance because the current design was explicitly called out as too generic for a visual product.*