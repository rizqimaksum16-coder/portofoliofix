---
name: Organic Tech Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#515f73'
  primary: '#182637'
  on-primary: '#ffffff'
  primary-container: '#2e3c4e'
  on-primary-container: '#98a6bc'
  inverse-primary: '#b9c8de'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#222627'
  on-tertiary: '#ffffff'
  tertiary-container: '#383b3d'
  on-tertiary-container: '#a2a5a7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e4fb'
  primary-fixed-dim: '#b9c8de'
  on-primary-fixed: '#0e1c2d'
  on-primary-fixed-variant: '#3a485a'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  section-gap: 8rem
  element-gap: 1.5rem
  margin-page: 2rem
  gutter: 1.5rem
---

## Brand & Style

This design system embodies "Organic Tech"—a bridge between the rigorous world of software engineering and a breathable, human-centric aesthetic. It moves away from the cold, industrial brutalism of traditional developer portfolios toward a sophisticated, airy minimalism.

The visual language is defined by expansive white space, soft-focus depth, and a high degree of "finish." It avoids the stiffness of terminal-inspired grids in favor of a fluid, rhythmic layout that feels alive yet disciplined. The goal is to evoke a sense of calm competence, precision without aggression, and modern professionality.

**Key Visual Principles:**
- **Atmospheric Depth:** Using layered translucency and wide-radius shadows to create a tactile, physical quality.
- **Fluid Motion:** Interactions should feel viscous and intentional, using ease-in-out curves for all state transitions.
- **Micro-Detail:** Small, high-fidelity touches (like 1px borders with 50% opacity) signal attention to detail.

## Colors

The palette is anchored in a serene "Off-White" environment that provides a gallery-like backdrop for project work. 

- **Primary (Slate Gray):** Used for primary headings and high-contrast text. It provides the grounding force for the design.
- **Secondary (Electric Blue):** A focused accent color used sparingly for interactive cues, progress indicators, and subtle highlights. It should feel like a "pulse" within the interface.
- **Neutral (Muted Slate):** Used for secondary text, metadata, and supporting iconography to maintain a low-noise environment.
- **Surface (Off-White/Zinc):** Multi-layered background shades that differentiate content sections without the need for heavy borders.

## Typography

The typography system relies on **Hanken Grotesk** for its exceptional clarity and contemporary "tech" personality that remains approachable. It is paired with **Geist** for labels and technical data to provide a subtle nod to developer culture without overwhelming the minimalist aesthetic.

**Hierarchy Rules:**
- **Optical Kerning:** Headlines use negative letter spacing to create a tight, professional "locked-in" feel.
- **Line Length:** Body text should be constrained to a maximum of 65 characters per line to ensure high readability in long-form "About" or "Project" descriptions.
- **Monospace Integration:** Use Geist sparingly for version numbers, tech stacks, or timestamps to signal the "Software Engineer" identity in a refined way.

## Layout & Spacing

The layout utilizes a **fluid grid system** that emphasizes breathability and visual balance. Instead of rigid columns, content is organized into logical "flow blocks" that expand and contract based on viewport width.

**Layout Strategy:**
- **Centered Content:** For desktop viewports, the primary content is centered within a 1200px container to maintain focus.
- **Generous Vertical Spacing:** Use `8rem` (128px) between major sections to prevent the design from feeling cluttered.
- **Mobile Reflow:** On mobile devices, margins scale down to `1.5rem`, and multi-column project grids collapse into a single-column stacked view.
- **Alignment:** Use a "soft" alignment approach—while elements are technically on a grid, varying padding and whitespace make the layout feel organic rather than "stiff."

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. This design avoids high-contrast borders, favoring soft shadows that suggest physical height above the page.

- **The Ground Plane:** The base background is the lightest shade of off-white.
- **The Surface Layer:** Cards and interactive elements sit on a pure white surface with a very subtle, wide-spread shadow (`box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05)`).
- **Glass Accents:** For navigation bars or floating elements, use a 12px backdrop blur with 80% opacity to maintain the sense of depth while scrolling.
- **Soft Outlines:** Where separation is needed, use a 1px solid border colored slightly darker than the surface it sits on, rather than a high-contrast line.

## Shapes

The shape language is consistently **Rounded**. This choice removes the "sharpness" associated with corporate software and aligns with the "Organic Tech" theme.

- **Standard Radius:** Apply `0.5rem` (8px) to smaller elements like input fields and chips.
- **Large Radius:** Use `1rem` (16px) for project cards and main containers to emphasize their status as primary content vessels.
- **Interactive States:** When hovered, elements can subtly increase their roundedness or expand slightly to provide tactile feedback.

## Components

### Buttons
- **Primary:** Filled with Slate Gray, Hanken Grotesk Medium, with a subtle 4px lift on hover.
- **Secondary:** Ghost style with a 1px Slate Gray border (30% opacity) that becomes 100% on hover.
- **Interaction:** All buttons use a `0.3s cubic-bezier(0.4, 0, 0.2, 1)` transition for background and transform properties.

### Project Cards
- **Structure:** A large image/video area with a 16px corner radius, followed by a title in Headline-LG and a list of tech-stack chips.
- **Hover State:** The card should subtly scale (1.02x) and the ambient shadow should deepen to signify interactivity.

### Tech Stack Chips
- **Style:** Small, pill-shaped elements using Geist 13px text. Background is a very faint Slate Gray (5% opacity) with the text color being slightly more saturated.
- **Utility:** These provide a high-density way to show technical proficiency without cluttering the layout.

### Input Fields
- **Style:** Minimalist borders (bottom only or very light all-around). Use Electric Blue for the focus ring—but keep the ring soft and slightly blurred to maintain the "Organic" feel.

### Lists
- **Style:** Unordered lists should use custom Electric Blue dots rather than standard bullets. Increase the vertical spacing between list items to `0.75rem` for better legibility.