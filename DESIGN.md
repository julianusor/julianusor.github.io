---
version: alpha
name: julianusor.github.io
description: "A warm, editorial personal site: paper background, espresso text, one terracotta accent, serif headlines, mono uppercase labels. Structure comes from 1px hairlines, never from shadows or rounded corners."
colors:
  primary: "#B4532A"
  primary-soft: "#D98E5F"
  canvas: "#FBF8F3"
  surface: "#F4EDE2"
  hairline: "#E7D9C4"
  ink: "#201B15"
  ink-muted: "#72614A"
  ink-subtle: "#98805D"
  on-ink: "#FBF8F3"
  canvas-dark: "#161310"
  surface-dark: "#201B15"
  hairline-dark: "#2E2820"
typography:
  display:
    fontFamily: Fraunces
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.025em
  heading:
    fontFamily: Fraunces
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.025em
  body:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 400
    letterSpacing: 0.14em
  tag:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 400
    letterSpacing: 0.12em
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 12px 20px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.tag}"
    rounded: "{rounded.none}"
    padding: 4px 10px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 32px
  card-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  link:
    textColor: "{colors.primary}"
---

## Overview

A personal site for essays and data projects. It should read like a well-set printed page: warm paper, dark espresso ink, and one terracotta accent. Restraint carries the identity — few colors, no decoration, generous vertical rhythm.

## Colors

- **Canvas (#FBF8F3)** is the page. **Surface (#F4EDE2)** is only for hover states and inline code.
- **Ink (#201B15)** is for headlines and body. **Ink-muted (#72614A)** is for metadata and tags.
- **Primary (#B4532A)** is the only chromatic color. It appears on links and hover, never as a fill for large areas. In dark mode it lightens to **primary-soft (#D98E5F)**.
- **Hairline (#E7D9C4)** draws every border and grid line.

Dark mode inverts to canvas-dark (#161310), surface-dark (#201B15), and hairline-dark (#2E2820), with canvas as text.

## Typography

Three families, each with one job: Fraunces for headlines, Inter for reading, JetBrains Mono for anything that is metadata (dates, categories, eyebrows, buttons). Mono text is always uppercase with wide tracking.

## Layout

Left-aligned content in a 72rem column. Card grids are built as `gap-px` grids over the hairline color, so the background shows through as 1px lines between cells instead of each card having its own border. Sections are separated by a hairline and 80px of space.

## Elevation & Depth

None. Hierarchy comes from type size, ink weight, and hairlines. Hover is a background shift to surface, not a lift.

## Shapes

Square corners everywhere, including buttons, tags, code blocks, and images.

## Components

- **Primary button:** an ink block with a mono uppercase label. It turns terracotta on hover. Use at most one per view.
- **Secondary action:** a text link with an arrow, not a second button.
- **Tag:** a 1px hairline box with a 10px mono label.
- **Card:** a cell in a hairline grid. Its title turns terracotta on hover.

## Do's and Don'ts

- Do use hairlines for structure and the accent only for interaction.
- Don't use rounded corners, shadows, gradients, or blurred backgrounds.
- Don't use emoji or decorative icons in the UI.
- Don't add a second accent color.
