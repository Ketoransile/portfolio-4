# Portfolio Redesign (Monochrome & Compact) — Task Tracker

## Global Setup
- `[x]` Update `src/app/globals.css` with monochrome design tokens (pure black & white)
- `[x]` Update `src/app/layout.tsx` (ensure clean font variables, remove extra spacing variables)

## Layout Refactor
- `[x]` Refactor `src/app/page.tsx` to center and constrain width to `max-w-3xl` or `max-w-4xl`
- `[x]` Remove edge-to-edge line dividers between sections

## Component Refactors
- `[x]` `src/components/Navbar.tsx` (attach directly to top-0 borderless glass, remove logo icon, keep text name, simplify links, remove duplicate right side Contact CTA)
- `[x]` `src/components/Hero.tsx` (integrate borderless vertical editorial photo frame with monospace label tag, simplify stats as a clean borderless inline text row, remove inner labels and boxes, place CTA buttons and socials inline on one row, clarify ASTU name, sharp corners)
- `[x]` `src/components/ThemeToggle.tsx` (remove toggle borders, use transparent backgrounds)
- `[x]` `src/components/About.tsx` (clean text paragraphs, sharp corners)
- `[x]` `src/components/Projects.tsx` (transform cards grid to clean list-row details, sharp corners)
- `[x]` `src/components/Skills.tsx` (convert chips to clean text tags lists, sharp corners)
- `[x]` `src/components/Experience.tsx` (switch vertical lines/logos to resume style blocks, sharp corners)
- `[x]` `src/components/Education.tsx` (simplify course grid and degree details, sharp corners)
- `[x]` `src/components/Contact.tsx` (minimal bottom-border input fields, monochrome CTAs, sharp corners)
- `[x]` `src/components/Footer.tsx` (minimal footer block, remove edge-to-edge borders)

## Verification
- `[x]` Verify successful compilation with `npm run build`
- `[x]` Verify responsiveness and style details on the development server
