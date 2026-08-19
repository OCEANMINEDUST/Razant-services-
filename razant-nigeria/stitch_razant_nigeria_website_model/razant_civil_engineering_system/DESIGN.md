---
name: Razant Civil Engineering System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  metric-display:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin: 32px
  container-max: 1280px
---

## Brand & Style
The design system is engineered to project the scale, precision, and reliability inherent in heavy infrastructure projects. It draws inspiration from modern architectural blueprints and high-visibility industrial environments. 

The aesthetic is **Corporate / Modern** with a focus on structural integrity. It balances the weight of civil engineering with the clarity of a modern technology firm. Every element is aligned to a strict grid to evoke a sense of "planned perfection," ensuring the user feels the brand's capability in handling large-scale, complex logistics and construction.

- **Target Audience:** Government agencies, private developers, and industrial partners.
- **Emotional Response:** Stability, technical expertise, and safety.
- **Visual Motif:** Subtle use of 1px grid lines and hairline borders to mimic CAD software and architectural drawings.

## Colors
The palette is rooted in the "Safety & Steel" dichotomy. 

- **Primary (Deep Navy):** Represents authority, structural depth, and long-term stability. Used for headers, navigation, and primary text.
- **Secondary (Safety Orange):** Pulled directly from high-visibility gear and construction machinery. Reserved for critical calls to action (CTAs), status indicators, and highlights.
- **Tertiary (Slate Blue):** Acts as a bridge between the deep navy and white, used for secondary information and iconography.
- **Backgrounds:** Utilizes a "Cool Studio" white (`#F8FAFC`) to maintain a clean, professional environment that allows technical diagrams and photographs of projects to stand out.

## Typography
The typographic hierarchy is designed for maximum legibility of technical data and bold brand statements.

- **Headlines (Montserrat):** A geometric sans-serif that feels constructed and urban. Used for page titles and section headers to convey strength.
- **Body (Inter):** A highly functional font used for all descriptive text. It maintains clarity even in dense project specifications.
- **Data & Metadata (JetBrains Mono):** A monospaced font used for "spec sheets," technical measurements, and small labels. This adds an engineering-specific technicality to the UI, mimicking the look of terminal readouts or blueprint annotations.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model to mirror the rigidity of physical structures. 

- **Grid:** A 12-column layout on desktop with 24px gutters. Content should be contained within a 1280px max-width container to ensure readability on ultra-wide monitors.
- **Rhythm:** An 8px linear scale (8, 16, 24, 32, 48, 64) is used for all padding and margins. 
- **Mobile Adaption:** On mobile, the margin shrinks to 16px and the grid collapses to a single column. Horizontal padding within cards is reduced to 16px to maximize screen real estate for technical charts.

## Elevation & Depth
In alignment with the "Blueprint" motif, depth is conveyed through **Low-Contrast Outlines** and **Tonal Layers** rather than soft, fuzzy shadows. 

- **Surfaces:** Use `#FFFFFF` for the highest level (active cards/modals) and `#F1F5F9` for the background canvas.
- **Borders:** All containers use a 1px solid border (`#E2E8F0`). This creates a "technical drawing" feel where every component has a defined edge.
- **Shadows:** When necessary (e.g., a modal or a floating action button), use a "Technical Shadow": a sharp, low-blur offset shadow (`4px 4px 0px rgba(15, 23, 42, 0.05)`) that feels more like a structural offset than an ambient light source.

## Shapes
The shape language is **Soft (0.25rem)**. 

While the brand is industrial, completely sharp corners can feel aggressive or dated. A minimal radius (4px) provides a modern, engineered finish—similar to the chamfered edges of high-quality machinery or architectural steel.

- **Standard Elements:** 4px radius (Inputs, Buttons, Cards).
- **Interactive States:** Maintain the same radius; do not use pills or circles for buttons to keep the "block-like" structural aesthetic.

## Components
- **Buttons:** Large, block-style with `label-caps` typography. Primary buttons are solid Deep Navy or Safety Orange. Ghost buttons use 1px borders with heavy-weight text.
- **Inputs:** Square-shouldered fields with a 1px border. Focus state uses a 2px Safety Orange border to signify an "active" field, mirroring site-safety visual cues.
- **Cards:** Used for project showcases. They feature a 1px border and no shadow. The header of the card should use a subtle background tint (`#F1F5F9`) to separate it from the body.
- **Status Chips:** High-contrast labels for "In Progress," "Completed," or "Surveying." Use `JetBrains Mono` for the text to imply these are official project statuses.
- **Progress Bars:** Thick, industrial bars using the Safety Orange accent. For "Danger" or "Delayed" states, use a striped "hazard" pattern (diagonal lines) within the bar.
- **Data Tables:** Heavy emphasis on the header row with a Deep Navy background and White text. Vertical borders are omitted to keep the focus on the data rows.