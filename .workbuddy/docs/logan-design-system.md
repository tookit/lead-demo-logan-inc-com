# Logan Services — Design System Specification

**Project:** logan-inc.com Redesign
**Style Direction:** Classic Upgrade — "Worthy Local Experts, Not a Discount HVAC Site"
**Document Version:** 1.0
**Audience:** Design lead, marketing, web dev agency, brand reviewers
**Last Updated:** 2026-07-21

---

## 0. How to Read This Document

This spec defines the visual and structural redesign of `logan-inc.com`. It covers brand foundations, the visual system (color / type / spacing / iconography / photography), the component library, the page-by-page architecture, and the accessibility & motion rules. All assets referenced in this doc are bundled under `.workbuddy/assets/`.

**Reading order:** Brand foundation → Visual system → Components → Page architecture → Cross-cutting concerns (motion, a11y).

---

## 1. Brand Foundation

### 1.1 Brand Essence
> **"The home comfort company your neighbors have trusted since 1969."**

Logan Services is a family-owned HVAC, plumbing, sewer & drain, and indoor-air-quality provider serving Dayton, Columbus, Cincinnati, and Northern Kentucky. The site must read as a **local expert your family has known for generations**, not a national ad-driven HVAC chain.

### 1.2 Positioning
| Dimension | What we are | What we are NOT |
|---|---|---|
| Time on the job | 55+ years, three generations | A startup / discount brand |
| Tone of voice | Plain-spoken, neighborly, factual | Hype-driven, "BUY NOW" aggressive |
| Visual mood | Warm, confident, photo-driven | Cold corporate, slick SaaS, dark-tech |
| Primary CTA color | Brand blue `#0E6FB8` (see §3) | Brand red as a default CTA |
| Hero photography | Real technicians, real homes, warm light | Stock imagery, overly staged shots |

### 1.3 Visual Personality
- **Confident** — typography is bold, layout breathes, we don't shout.
- **Warm** — human photography, soft shadows, slightly warm color temperature.
- **Local** — references to the three cities show up in copy, in the locations strip, and in photography selection.
- **Trustworthy** — every claim ties to a certification badge or review.

### 1.4 Tagline Direction
Keep flexible; rotate per context. Approved directions:
1. **Primary:** *"Family-owned comfort since 1969."*
2. **Service-led:** *"Heating, cooling, plumbing — done right, by neighbors."*
3. **Trust-led:** *"The team 50,000+ Ohio Valley families have trusted since 1969."*

### 1.5 Logo Reference
- **Source asset:** `.workbuddy/assets/logo/logan-logo.png`
- **Lockup:** Mark (red "LO" with yellow cycle) + "Logan" red wordmark + "SERVICES" blue block + "AC & HEAT + PLUMBING" blue subline.
- The site must use the logo as-is for the public site; this spec does NOT redesign the mark.

---

## 2. Visual System

### 2.1 Color Palette

#### 2.1.1 Brand Colors (Primary)

| Token | Hex | RGB | HSL | Usage |
|---|---|---|---|---|
| `--brand-red` | `#E32227` | 227, 34, 39 | 359°, 77%, 51% | Logo, urgency accents, error states, "Hot Deal" badges |
| `--brand-blue` | `#0E6FB8` | 14, 111, 184 | 207°, 86%, 39% | **Primary CTA, links, focus ring, brand bars** |
| `--brand-blue-deep` | `#0A4A7C` | 10, 74, 124 | 207°, 84%, 26% | Header bar, dark hero overlays |
| `--accent-yellow` | `#FFC72C` | 255, 199, 44 | 45°, 100%, 59% | Trust badges, "Since 1969" callout, callout dividers, star ratings |

> **Why the blue is shifted darker from the original logo blue** (`#00A5E2` → `#0E6FB8`): the original cyan-blue reads as a tech / energy brand and fails WCAG AA contrast on white for text under 18pt. The deeper brand blue preserves the family resemblance while making the site work as a serious trust-building surface.

#### 2.1.2 Extended Palette

| Token | Hex | Usage |
|---|---|---|
| `--brand-red-soft` | `#FDECEC` | Sale badge backgrounds, urgency tinted surfaces |
| `--brand-blue-soft` | `#E8F2FB` | CTA hover surface, info banners, selected card border |
| `--brand-yellow-soft` | `#FFF7DD` | "Trusted Since 1969" highlight strip, testimonial card |
| `--cool-mist` | `#F4F7FA` | Section alternation, large card backgrounds |

#### 2.1.3 Neutral Scale

| Token | Hex | Usage |
|---|---|---|
| `--ink-900` | `#0F1A24` | Primary headings, body on light |
| `--ink-700` | `#2C3A48` | Secondary headings |
| `--ink-500` | `#5A6A7A` | Body text, captions |
| `--ink-300` | `#A8B2BD` | Disabled text, placeholders |
| `--ink-100` | `#DDE3EA` | Hairline dividers, table borders |
| `--ink-50`  | `#F2F4F7` | Card outlines, input borders |
| `--white`   | `#FFFFFF` | Page surface, card surface |
| `--black`   | `#000000` | Reserved (avoid for backgrounds) |

#### 2.1.4 Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--success` | `#1F8A4C` | Confirmation banners, "Available today" indicators |
| `--warning` | `#D08A1A` | "Service area notice", form warnings |
| `--danger`  | `#C81E22` | Form errors, system errors (slightly desaturated vs brand red) |
| `--info`    | `--brand-blue` | Info banners reuse brand blue |

#### 2.1.5 Color Usage Rules

1. **The 60-30-10 rule** — 60% neutral (white, ink-50, cool-mist), 30% brand blue (CTAs, links, section anchors), 10% brand red + accent yellow (emphasis only).
2. **Brand red is for emphasis only** — never a default CTA. Use it for: sale badges, "Limited time" pills, the brand wordmark, error states.
3. **Accent yellow is for trust signals only** — never large surfaces, never for body text (fails contrast). Use it for: certification badges, "Since 1969" divider, star ratings on review cards.
4. **Never combine brand red text on a yellow background** (fails contrast and looks like a hazard sign).
5. **Dark sections** use `--brand-blue-deep` (not pure black) to keep the brand on the surface.

#### 2.1.6 Contrast Compliance (WCAG 2.1 AA)
| Pair | Ratio | Status |
|---|---|---|
| `--ink-900` on `--white` | 17.4:1 | AAA |
| `--ink-700` on `--white` | 11.2:1 | AAA |
| `--ink-500` on `--white` | 6.5:1 | AA |
| `--brand-blue` on `--white` | 4.9:1 | AA (text ≥14pt ok at AA Large) |
| `--white` on `--brand-blue` | 4.9:1 | AA (text ≥14pt ok at AA Large) |
| `--white` on `--brand-blue-deep` | 8.2:1 | AAA |
| `--white` on `--brand-red` | 4.7:1 | AA Large only — never use red for small text |
| `--ink-900` on `--brand-yellow` | 13.8:1 | AAA (used for "Since 1969" stamp) |

---

### 2.2 Typography

#### 2.2.1 Type Families
- **Display & UI:** `Inter` — same family already in production at `wp-content/uploads/2024/08/Inter-*.svg`. No new font license required.
- **Body & UI:** `Inter` — single family for the whole site, varied by weight.
- **Numerals:** `Inter` with `font-variant-numeric: tabular-nums` for phone numbers, prices, hours.

#### 2.2.2 Type Scale (Desktop)

| Token | Size / Line-Height | Weight | Letter-Spacing | Usage |
|---|---|---|---|---|
| `display-1` | 72 / 80 | ExtraBold (800) | -0.02em | Hero headline (desktop only) |
| `display-2` | 56 / 64 | Bold (700) | -0.015em | Hero headline (tablet) |
| `h1` | 40 / 48 | Bold (700) | -0.01em | Page title |
| `h2` | 32 / 40 | Bold (700) | -0.01em | Section title |
| `h3` | 24 / 32 | Bold (700) | -0.005em | Subsection, card title |
| `h4` | 20 / 28 | SemiBold (600) | 0 | Card title (compact) |
| `body-lg` | 18 / 28 | Regular (400) | 0 | Lead paragraph |
| `body` | 16 / 26 | Regular (400) | 0 | Default body |
| `body-sm` | 14 / 22 | Regular (400) | 0 | Helper text, captions |
| `label` | 14 / 20 | SemiBold (600) | 0.02em (UPPERCASE) | Eyebrow above section title, form labels |
| `caption` | 12 / 18 | Medium (500) | 0.01em | Footnote, fine print |
| `cta` | 16 / 20 | Bold (700) | 0.01em | Button text |

#### 2.2.3 Mobile Type Scale
Same tokens, sizes capped:
- `display-1` → 44 / 52
- `display-2` → 36 / 44
- `h1` → 32 / 40
- `h2` → 26 / 34
- `h3` → 22 / 30
- `body-lg` → 17 / 28

#### 2.2.4 Typography Rules
1. **One family, six weights** — Resist the urge to add a serif. The brand is sans-serif and confident; serif would feel like a law firm.
2. **Headlines are ExtraBold / Bold, body is Regular** — this gives a strong editorial rhythm.
3. **Eyebrow + Headline + Subhead** — every major section opens with: `label` (UPPERCASE, brand-blue) → `h2` (ink-900) → `body-lg` (ink-500). Example:
   > **FAMILY-OWNED SINCE 1969** *(eyebrow, brand-blue)*
   > **Comfort you can count on, neighbors you can trust.** *(h2, ink-900)*
   > *Three generations of HVAC and plumbing service across the Ohio Valley.* *(body-lg, ink-500)*
4. **Phone numbers and prices always tabular** — `font-variant-numeric: tabular-nums`.
5. **No italics for emphasis** — use weight or color, never `font-style: italic` (looks like a footnote).

---

### 2.3 Spacing, Grid & Layout

#### 2.3.1 Spacing Scale (4pt base)
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192`

| Token | Value | Common Use |
|---|---|---|
| `space-1` | 4px | Inline icon gap |
| `space-2` | 8px | Tight stack, button internal padding |
| `space-3` | 12px | Input padding, list gap |
| `space-4` | 16px | Default component gap |
| `space-6` | 24px | Card internal padding, form row gap |
| `space-8` | 32px | Section internal padding |
| `space-12` | 48px | Card-to-card gap |
| `space-16` | 64px | Section padding (vertical) |
| `space-24` | 96px | Hero section padding (vertical) |
| `space-32` | 128px | Above-the-fold breathing room |
| `space-48` | 192px | Reserved for desktop hero top padding |

#### 2.3.2 Container Width
- `max-width: 1200px` for the main page container.
- `max-width: 960px` for content-heavy pages (about, blog post).
- `max-width: 720px` for form / article reading width.
- Side gutter: 24px (mobile), 48px (tablet), 64px (desktop ≥1024).

#### 2.3.3 Breakpoints
| Name | Range | Container |
|---|---|---|
| Mobile | < 640px | Full-bleed with 24px gutter |
| Tablet | 640 – 1023px | 12-col grid, 32px gutter |
| Desktop | ≥ 1024px | 12-col grid, 48px gutter |
| Wide | ≥ 1440px | 1200px max-width centered |

#### 2.3.4 Grid
- **12-column grid** with 24px column gap.
- Card row = 3-up on desktop (4-col span each), 2-up on tablet (6-col), 1-up on mobile (12-col).
- Service section is 3-up × 2-row on desktop, 2-up × 3-row on tablet, 1-up on mobile.

#### 2.3.5 Section Vertical Rhythm
- Default section padding: 96px top, 96px bottom on desktop; 64px top, 64px bottom on tablet; 48px top, 48px bottom on mobile.
- Alternating section background: `white` ↔ `--cool-mist` to create rhythm without heavy dividers.

---

### 2.4 Iconography

#### 2.4.1 Style
- **2px stroke, rounded caps, geometric** — matches Lucide / Heroicons outline family.
- **Outline by default**, filled variant for active / selected states.
- **No skeuomorphism, no 3D, no gradient fills** in icons.
- Color: `currentColor` (inherits text color).

#### 2.4.2 Sizing
| Size | Usage |
|---|---|
| 16px | Inline with body text, table cell leading icons |
| 20px | Form field leading icons, list bullets |
| 24px | Default UI icon (nav, button) |
| 32px | Card leading icon (service cards) |
| 48px | Section feature icon, empty state |
| 64px | Hero feature highlight |

#### 2.4.3 Service Category Icons
The 12 service icons from the original site (`.workbuddy/assets/icons/*.png`) are flat, brand-blue PNG illustrations. **Reinterpret them as outline icons in the new design** — the color illustrations feel out of place with the Classic Upgrade tone. Suggested mapping:

| Old PNG Icon | New Outline Icon | Notes |
|---|---|---|
| `cooling.png` | Snowflake | Universal cooling cue |
| `heating.png` | Flame | Fire icon, slightly rounded |
| `plumbing.png` | Wrench / pipe | Single tool, not crossed |
| `sewer-drains.png` | Droplet with arrow | Drainage cue |
| `air-quality.png` | Wind / leaf | Airflow + cleanliness |
| `coupons.png` | Ticket | Tag or ticket outline |
| `about-us.png` | Home outline | Family / business |
| `financing.png` | Dollar in circle | Currency |
| `reviews.png` | Star | 5-star |
| `careers.png` | Hard hat | Trade / tools |
| `filter-store.png` | Filter funnel | Air filter |
| `locations.png` | Map pin | Location |

#### 2.4.4 Iconography Don'ts
- ❌ Emoji as icons (looks cheap, breaks the editorial tone).
- ❌ Mixing icon families (all Lucide OR all Heroicons, never both).
- ❌ Color-filled icons next to outline icons in the same row.

---

### 2.5 Photography

#### 2.5.1 Style Direction
- **Real technicians, real homes, real equipment** — the original site already has this asset pool (`.workbuddy/assets/hero/`). Build the redesign on top of it.
- **Warm color temperature** (slight +5K shift in grading) — Ohio homes, family mood.
- **No heavy filters, no duotone** — the only brand-grade tint is a subtle warm overlay on the dark hero (see §3.5).
- **People-first framing** — when a technician is in the frame, the face or hands are the focal point, not the equipment.

#### 2.5.2 Photo Categories
| Category | Source Asset | Suggested Use |
|---|---|---|
| Hero (technician at work) | `hero/furnace-repair.jpg` | Hero, About section, "Why Logan" |
| Hero (technician + van) | `hero/installer-van.webp` | Service cards, careers |
| Hero (kitchen plumbing) | `hero/drain-cleaning.webp` | Plumbing / drain service card |
| Brand vehicle | `hero/blue-van.webp` | Locations / "Local" strip |
| Location photos | `locations/{dayton,columbus,cincinnati}.{webp,png}` | Locations section cards |

#### 2.5.3 Treatment Rules
1. **Hero image** — full-bleed, dark brand-blue overlay at 30% opacity, white text on top.
2. **Card image** — 16:9 crop, no overlay, gentle shadow underneath card.
3. **Service category cards** — no photograph, use the outline icon at 32px + bold label. Reserve photography for emotional hero / "family" / "careers" sections.
4. **Location cards** — use the actual location photo with subtle dark gradient at the bottom for the location name overlay.
5. **Always provide alt text** that describes the action, not just the subject:
   - ❌ "HVAC technician"
   - ✅ "Logan Services technician inspecting a residential furnace in a Dayton home."

#### 2.5.4 Stock Photography Policy
If a real Logan photo is not available, do NOT use generic stock. Instead:
1. Use the original Logan photo library (`.workbuddy/assets/`).
2. Or commission a new shoot — flag the gap clearly in the asset checklist (§10).
3. Last resort: tightly-cropped, license-cleared Unsplash images of "home interior" or "tradesperson at work" — no smiling handshakes, no business people in suits.

---

### 2.6 Trust Signals (Badges & Awards)

Use the awards as monochrome silhouette versions on a `--cool-mist` circle, with the brand color applied to a subtle outer ring. Never as raw full-color PNGs floating in the layout.

| Source Asset | New Treatment |
|---|---|
| `awards/nate.png` | NATE Certified (NATE ring) — top of "Why Logan" |
| `awards/google-guaranteed.png` | Google Guaranteed — footer trust row |
| `awards/trane-dealer.png` | #1 Trane Dealer — hero badge + locations section |
| `awards/trane-comfort.png` | Trane Comfort Specialist — about section |
| `awards/diamond.png` | Trane Diamond Contractor — about section |
| `awards/daikin-pro.png` | Daikin Comfort Pro — brand partner strip |

---

## 3. Page Architecture (Homepage)

### 3.1 Section Map (top to bottom)

| # | Section | Background | Purpose | Primary CTA |
|---|---|---|---|---|
| 1 | Top utility bar | `--brand-blue-deep` | Phone number, locations link, "Schedule Service" | "Call (800) 564-2611" |
| 2 | Header / Nav | `--white` | Logo, primary nav, search, "Book Online" | "Book Online" |
| 3 | Hero | `hero/furnace-repair.jpg` + dark overlay | Brand promise + 1 primary action | "Get a Free Estimate" |
| 4 | Trust strip | `--cool-mist` | 4 micro-credibility points | — |
| 5 | Services grid | `--white` | 6 service categories | "View All Services" |
| 6 | Family-owned story | `--brand-yellow-soft` | "Since 1969" narrative | "Our Story" |
| 7 | Offer cards | `--white` | 3 active offers ($79, financing, $99) | Per-card |
| 8 | Brand partners | `--cool-mist` | 6 brand logos + intro line | — |
| 9 | Reviews | `--white` | Google + BBB rating, 3 testimonials | "Read All Reviews" |
| 10 | Locations | `--white` | 3 city cards | Per-city "View Offers" |
| 11 | Careers CTA | `--brand-blue-deep` | Dark band, "Join the team" | "View Open Roles" |
| 12 | Contact / Form | `--white` | Lead form + map | "Submit" |
| 13 | Footer | `--ink-900` | Site map, social, legal, certifications | — |

### 3.2 Top Utility Bar
- Height: 40px
- Background: `--brand-blue-deep`
- Text: `--white`, 14px
- Left: phone numbers per region, set in `body-sm`, with a small phone icon.
- Right: "Schedule Service" link (white, underline on hover), "Pay Online" link.
- Hidden on `< 640px`, replaced by a sticky phone CTA.

### 3.3 Header / Nav
- Height: 80px desktop, 64px mobile
- Background: `--white`, 1px bottom hairline (`--ink-100`)
- Logo (left): `.workbuddy/assets/logo/logan-logo.png` at height 48px (desktop), 40px (mobile).
- Primary nav (center, on desktop): Services | Heating | Cooling | Plumbing | Sewer & Drain | Air Quality | About | Reviews
- "Book Online" button (right): filled `--brand-blue`, `--white` text, height 44px, 16px horizontal padding, 8px radius.
- Search icon (right of button): outline 24px, links to `/search`.
- Mobile: hamburger toggles a full-screen sheet with the 12 service icons in a 2-column grid (using the new outline icons from §2.4.3).

### 3.4 Hero
- **Height:** 640px desktop, 560px tablet, 480px mobile.
- **Layout:** Two-column on desktop — left 50% text, right 50% full-bleed photo. Single column stacked on mobile.
- **Background photo:** `.workbuddy/assets/hero/furnace-repair.jpg` with 30% `--brand-blue-deep` overlay.
- **Content:**
  - **Eyebrow:** "FAMILY-OWNED SINCE 1969" (label, `--white`, 80% opacity).
  - **Headline:** "Comfort you can count on, neighbors you can trust." (`display-1`, `--white`).
  - **Subhead:** "Free same-day estimates, next-day installation across the Ohio Valley." (`body-lg`, `--white`, 85% opacity).
  - **Primary CTA:** "Get a Free Estimate" — height 56px, `--brand-blue` fill, `--white` text, 12px radius, 24px horizontal padding.
  - **Secondary CTA:** "(800) 564-2611" — ghost button, `--white` border, `--white` text, leading phone icon.
  - **Below CTAs:** "No money down. 0% APR financing available." (`caption`, `--white`, 75% opacity).
- **Right column:** subtle "Since 1969" stamp at top-right corner (24px circle with `--accent-yellow` background, `--ink-900` text "EST. 1969").

### 3.5 Trust Strip
- 4-column grid on desktop, 2-up on tablet, stacked on mobile.
- Each column: outline 24px icon + bold 16px label + 14px descriptor.
- Columns:
  1. **Licensed & Insured** — shield icon — "EPA-certified technicians, fully background-checked."
  2. **Same-Day Estimates** — clock icon — "Free in-home quote, scheduled the same day you call."
  3. **60-Month Financing** — dollar icon — "0% APR on qualifying Trane systems. Subject to credit approval."
  4. **55+ Years Local** — pin icon — "Three generations serving Dayton, Columbus & Cincinnati."

### 3.6 Services Grid
- **Eyebrow:** "WHAT WE DO"
- **Headline (h2):** "Heating, cooling, plumbing — and everything in between."
- **Subhead (body-lg):** "From a clogged drain to a full HVAC replacement, our team brings 55+ years of expertise to your home."
- **Grid:** 3-up on desktop, 2-up on tablet, 1-up on mobile. 6 cards: A/C, Heating, Heat Pump, Plumbing, Sewer & Drain, Water Heater.
- **Card structure:**
  - Outline icon (32px, `--brand-blue`) top-left.
  - Title (`h4`, `--ink-900`).
  - Description (`body-sm`, `--ink-500`, 2-line clamp).
  - Sub-link list (5 items, `--body-sm`, `--brand-blue` link, hover underline).
  - "View Details" arrow link (right-aligned, `--brand-blue`).
- **Below grid:** "View All Services →" (centered, `h4` weight, `--brand-blue`).

### 3.7 Family-Owned Story
- **Background:** `--brand-yellow-soft` (full-bleed).
- **Layout:** Two-column — left photo (`hero/installer-van.webp`, 4:5 portrait), right copy.
- **Eyebrow:** "FAMILY-OWNED & LOCALLY TRUSTED"
- **Headline (h2):** "Three generations of Logan family service."
- **Body:** 6-7 lines of copy covering: founding year (1969), family history, current ownership, training center, awards.
- **Inline stats row (3 stats):**
  - "55+ Years in Business"
  - "50,000+ Homes Served"
  - "200+ Local Technicians"
  - Numbers in `display-2`, labels in `body-sm` caps.

### 3.8 Offer Cards
- **Eyebrow:** "SPECIAL OFFERS"
- **Headline:** "Save on heating, cooling, and plumbing service."
- **Grid:** 3-up desktop, stacked mobile. Each card is `--white` surface with a 1px `--ink-100` border and `--brand-red-soft` accent strip on top.
- **Cards:**
  1. **$79 Service Calls** — emergency repair intro.
  2. **0% APR for 60 Months** — financing intro.
  3. **$99 Drain Cleaning** — drain service intro.
- **Each card:** price in `display-2` `--brand-red`, short title (`h4`), 2-line description, "Book Now" link.

### 3.9 Brand Partners
- **Eyebrow:** "OUR TRUSTED BRAND PARTNERS"
- **Headline:** "We're certified to install and service the brands you trust."
- **Subhead:** "As the nation's #1 volume residential Trane dealer, we lead with the industry's most reliable equipment."
- **Logo grid:** 6 logos in a single row on desktop (3 on tablet, 2 on mobile), 24px height each, `--ink-700` monochrome treatment (filter the brand-color logos to a unified neutral).
  - Sources: `.workbuddy/assets/brands/{trane-equivalent, mitsubishi, daikin, runtru, navien, zoeller, aprilaire}.{png,webp}`

### 3.10 Reviews
- **Eyebrow:** "WHAT HOMEOWNERS SAY"
- **Headline:** "4.8 stars across 6,000+ Google reviews."
- **Layout:** Featured review (large card, left) + 2 stacked review cards (right) on desktop; stacked on mobile.
- **Review card:** 5-star rating (`--accent-yellow` filled stars, 16px), 4-5 line quote (`body-lg`), customer name + city + service date (`body-sm`, `--ink-500`).
- **Below:** Google + BBB trust badges (`.workbuddy/assets/awards/google-guaranteed.png` and a BBB mark placeholder).
- **Footer link:** "Read All Reviews →".

### 3.11 Locations
- **Eyebrow:** "OUR SERVICE AREA"
- **Headline:** "Proudly serving Ohio Valley & Northern Kentucky."
- **Layout:** 3-up grid (Dayton, Columbus, Cincinnati + NKY), 1-up mobile.
- **Location card:**
  - Photo (`.workbuddy/assets/locations/{city}.{webp,png}`) at 4:3 crop.
  - Bottom gradient overlay (transparent → `--ink-900` 70% at the bottom 40%).
  - City name (`h3`, `--white`) at bottom-left.
  - Phone number (`body`, `--white` 90% opacity) below.
  - "View Offers →" (`body-sm`, `--accent-yellow`) at bottom-right.

### 3.12 Careers CTA (Dark Band)
- **Background:** `--brand-blue-deep` (full-bleed).
- **Height:** 320px desktop, auto mobile.
- **Layout:** Centered single column.
- **Eyebrow:** "JOIN OUR TEAM" (label, `--accent-yellow`).
- **Headline (display-2, `--white`):** "Build a career. Build a community."
- **Subhead (body-lg, `--white` 80%):** "HVAC technicians, plumbers, installers, and comfort consultants — paid apprenticeships and clear growth paths."
- **CTA:** "View Open Roles" — filled `--accent-yellow` background, `--ink-900` text, height 56px.

### 3.13 Contact / Form
- **Eyebrow:** "GET IN TOUCH"
- **Headline:** "Schedule your free in-home estimate."
- **Subhead:** "Or call us directly at (800) 564-2611 — we're available 24/7 for emergencies."
- **Layout:** Two-column — left 60% form, right 40% location info card.
- **Form fields:** First Name, Last Name, Phone, Email, Service Type (select), ZIP Code, Message (textarea). Submit button at the bottom.
- **Right card:** 3 location blocks (Dayton, Columbus, Cincinnati) with hours, phone, "Get Directions" link, and a static map thumbnail.

### 3.14 Footer
- **Background:** `--ink-900`.
- **Top row:** Logo (white version), short tagline, social icons (Facebook, Instagram, YouTube, X/Twitter, LinkedIn).
- **Middle:** 4-column site map — Services | Company | Resources | Service Areas.
- **Bottom row:** copyright, "Privacy Policy", "Terms & Conditions", certification badges (NATE, Google Guaranteed, Trane) at far right.
- **All text:** `--white` at 80% opacity; links at 100% on hover.

---

## 4. Component Library

### 4.1 Buttons

| Variant | Background | Text | Border | Height | Radius | Use |
|---|---|---|---|---|---|---|
| Primary (default) | `--brand-blue` | `--white` | none | 48px (md) / 56px (lg) | 8px | All primary CTAs |
| Primary hover | `#0B5C9C` (darker brand-blue) | `--white` | none | same | same | Hover |
| Primary active | `#08487B` | `--white` | none | same | same | Active/pressed |
| Secondary (ghost) | `--white` | `--brand-blue` | 1.5px `--brand-blue` | same | same | Secondary actions on light surfaces |
| Secondary on dark | transparent | `--white` | 1.5px `--white` 60% | same | same | On hero, careers band |
| On yellow | `--brand-blue` | `--white` | none | same | same | On Careers band only |
| Danger | `--danger` | `--white` | none | same | same | Destructive actions only |
| Link | transparent | `--brand-blue` | none | auto | n/a | "Read more", "View details" |

**Button structure:**
- Icon (optional, 20px) + Label (`cta` style, 16px Bold).
- Horizontal padding: 16px (sm), 24px (md), 32px (lg).
- Minimum width: 120px for `md`, 160px for `lg`.
- Focus state: 3px outline at `--accent-yellow` with 2px offset.

### 4.2 Form Fields

| Field | Height | Radius | Border | Focus border | Background |
|---|---|---|---|---|---|
| Text input | 48px | 8px | 1px `--ink-100` | 2px `--brand-blue` | `--white` |
| Textarea | auto, min 120px | 8px | 1px `--ink-100` | 2px `--brand-blue` | `--white` |
| Select | 48px | 8px | 1px `--ink-100` | 2px `--brand-blue` | `--white` |
| Radio / Checkbox | 20px | 4px (checkbox) / full (radio) | 1.5px `--ink-500` | 2px `--brand-blue` fill | `--white` (off) / `--brand-blue` (on) |
| Phone input | 48px with country code prefix | 8px | 1px `--ink-100` | 2px `--brand-blue` | `--white` |

- Labels: above the field, 14px SemiBold, `--ink-700`.
- Helper text: below the field, 12px Regular, `--ink-500`.
- Error state: 2px `--danger` border, error text below in `--danger`.
- Required indicator: `--brand-red` asterisk.

### 4.3 Cards

**Service card** (used in Services grid)
- Background: `--white`, 1px `--ink-100` border, 8px radius, 24px padding.
- Hover: 1px `--brand-blue` border, soft shadow `0 8px 24px rgba(15, 26, 36, 0.08)`, icon turns `--brand-blue-deep`, translateY(-2px).
- Internal layout: icon top-left, title below, description below, sub-link list below, "View Details" arrow link at bottom-right.

**Offer card** (used in Special Offers)
- Background: `--white`, 1px `--ink-100` border, 8px radius, 24px padding.
- Top accent: 4px `--brand-red-soft` strip across the top edge.
- Price: `display-2` `--brand-red` at top.
- Title: `h4` `--ink-900`.
- Description: `body-sm` `--ink-500`.
- CTA: "Book Now" link bottom-right.

**Review card** (used in Reviews)
- Background: `--white`, 1px `--ink-100` border, 8px radius, 24px padding.
- 5-star rating row (16px, `--accent-yellow`) at top.
- Quote: `body-lg` `--ink-900` (2-line clamp on the smaller cards).
- Footer: name + city + date row in `body-sm` `--ink-500`.

**Location card** (used in Locations)
- Photo with bottom gradient overlay, 4:3 aspect, 8px radius.
- City name `h3` white at bottom-left.
- Phone + "View Offers" link at the very bottom.

### 4.4 Navigation

**Desktop header:** see §3.3.

**Mobile sheet (drawer):**
- Full-height, slides in from the right, `--white` background, 320px width.
- Top: close (X) icon + "Logan Services" small logo.
- 12 service categories as a 2-col grid, each with a 24px outline icon + label.
- Below: phone CTA, "Book Online" CTA, social links.

**Footer nav:**
- 4 columns of link lists, `body-sm` `--white` 80% opacity, hover 100%.
- Stacks to single column on mobile, accordion-style expand/collapse per column header.

### 4.5 Trust / Certification Strip
- Background: `--cool-mist`.
- Single row of 4-6 monochrome certification badges at 48px height, evenly spaced.
- Optional: a 1-line intro label above the row (e.g., "Licensed, certified, and trusted since 1969.").

### 4.6 Statistics Block
- 3-stat row, used in Family-Owned section.
- Number: `display-2` `--brand-blue-deep`.
- Label: `body-sm` caps, `--ink-500`.
- Vertical divider between stats (1px `--ink-100`).

---

## 5. Motion & Interaction

### 5.1 Page Transitions
- Standard 200ms `ease-out` for fades and slides.
- No "loading spinners" on the public site — pages should feel instant. If a long fetch is unavoidable, use a skeleton loader at 100% opacity of `--cool-mist`.

### 5.2 Hover & Active States
- **Buttons:** color shift + 1px translateY, 150ms.
- **Cards:** border + shadow + translateY(-2px), 200ms.
- **Links:** underline from left to right, 200ms — never instant.

### 5.3 Micro-interactions
- Star ratings: subtle scale-up on hover (1.0 → 1.05).
- Phone number in header: subtle pulse animation every 8 seconds (very subtle, only the dot icon, not the number itself).
- Form field focus: 200ms border color transition.

### 5.4 Scroll
- Subtle fade-in-up on section entry (24px translate, 300ms, staggered 80ms between children). Use Intersection Observer.
- Sticky header with `box-shadow: 0 1px 0 var(--ink-100)` on scroll-down.

### 5.5 Reduced Motion
- All motion wrapped in `@media (prefers-reduced-motion: no-preference)`.
- For users with `reduce`, replace all transitions with instant state changes.

---

## 6. Accessibility

### 6.1 Standards
- **WCAG 2.1 Level AA** minimum. Aim for AAA on text contrast where feasible (see §2.1.6).
- Keyboard navigation: every interactive element reachable via Tab; focus order matches visual order.
- Screen reader: semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>`, `<a>`); ARIA only when HTML can't express the relationship.

### 6.2 Focus
- Focus ring: 3px solid `--accent-yellow`, 2px offset, on every focusable element.
- Never `outline: none` without a replacement.

### 6.3 Color
- All text/background pairs verified against AA (see §2.1.6).
- Never use color alone to convey information (e.g., error state must also have a text label or icon).

### 6.4 Forms
- Every input has a visible `<label>`.
- Error messages are announced via `aria-live="polite"` and `aria-describedby` on the input.
- Required fields marked with both visual `*` and `aria-required="true"`.

### 6.5 Images
- All `<img>` have descriptive `alt` (see §2.5.3 example).
- Decorative images use `alt=""` and `aria-hidden="true"`.

### 6.6 Skip Link
- First focusable element on every page: "Skip to main content" — visually hidden until focused.

---

## 7. Responsive Behavior

### 7.1 Breakpoints (recap)
- Mobile: < 640px
- Tablet: 640 – 1023px
- Desktop: ≥ 1024px
- Wide: ≥ 1440px

### 7.2 Mobile Adjustments
- Hero stacks vertically (photo first, then text overlay card at the bottom 40%).
- Services grid → 1-up stacked, full-width cards.
- Reviews → single column, 1 featured + 2 stacked.
- Locations → 1-up stacked with full-width image.
- Footer → accordion nav, single column.
- Header collapses to: logo (left), hamburger (right), sticky phone CTA at the very bottom of the viewport.

### 7.3 Tablet Adjustments
- 2-column hero (text | photo), Services 2-up grid, Locations 2-up + 1 full-width, Reviews 1-up stacked.

### 7.4 Performance
- LCP target: < 2.5s on 4G mobile.
- Images: AVIF/WebP with JPEG fallback; `srcset` for retina; lazy-load below the fold.
- Fonts: `font-display: swap`, preload `Inter-Bold` and `Inter-Regular`.
- JS budget: < 100KB compressed for the homepage.

---

## 8. Brand Voice & Copy

### 8.1 Voice Principles
1. **Plain-spoken** — short sentences, common words. No jargon.
2. **Confident, not boastful** — say what we do, don't brag about it.
3. **Local-first** — name the cities. Say "neighbors", not "customers".
4. **Helpful, not pushy** — explain the offer, then stop.

### 8.2 Voice Don'ts
- ❌ "BEST IN OHIO!!! 🔥🔥🔥 Limited time only, call NOW!"
- ❌ "We are a leading provider of comprehensive HVAC solutions tailored to your needs."
- ❌ "Don't miss out!" / "Act fast!" / "Hurry!"

### 8.3 Voice Dos
- ✅ "Family-owned since 1969."
- ✅ "Free in-home estimate, scheduled the same day you call."
- ✅ "Three generations of Logan family service across the Ohio Valley."
- ✅ "Our technicians are EPA-certified, background-checked, and trained in our own facility."

### 8.4 CTA Vocabulary
Use the same verbs across the site for consistency:
- **Primary:** "Get a Free Estimate" / "Book Online" / "Schedule Service"
- **Secondary:** "Call (800) 564-2611" / "View Details" / "Read All Reviews"
- **Tertiary:** "Learn more" / "View all" / "Get Directions"

Never mix: don't use "Sign Up" on one form and "Get Started" on another for the same action.

---

## 9. Implementation Tokens (CSS Variables)

```css
:root {
  /* Brand */
  --brand-red: #E32227;
  --brand-red-soft: #FDECEC;
  --brand-blue: #0E6FB8;
  --brand-blue-hover: #0B5C9C;
  --brand-blue-active: #08487B;
  --brand-blue-deep: #0A4A7C;
  --brand-blue-soft: #E8F2FB;
  --accent-yellow: #FFC72C;
  --accent-yellow-soft: #FFF7DD;

  /* Neutral */
  --ink-900: #0F1A24;
  --ink-700: #2C3A48;
  --ink-500: #5A6A7A;
  --ink-300: #A8B2BD;
  --ink-100: #DDE3EA;
  --ink-50: #F2F4F7;
  --cool-mist: #F4F7FA;
  --white: #FFFFFF;
  --black: #000000;

  /* Semantic */
  --success: #1F8A4C;
  --warning: #D08A1A;
  --danger: #C81E22;
  --info: var(--brand-blue);

  /* Spacing (4pt) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;
  --space-48: 192px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;

  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(15, 26, 36, 0.06);
  --shadow-md: 0 4px 12px rgba(15, 26, 36, 0.08);
  --shadow-lg: 0 8px 24px rgba(15, 26, 36, 0.10);

  /* Container */
  --container-max: 1200px;
  --container-narrow: 960px;
  --container-reading: 720px;
  --gutter: 24px;

  /* Type */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

@media (min-width: 1024px) {
  :root { --gutter: 48px; }
}
@media (min-width: 1440px) {
  :root { --gutter: 64px; }
}
```

---

## 10. Asset Checklist

All assets live under `.workbuddy/assets/`. Status legend: ✅ in use · 🟡 reinterpret · ⚠️ not used · ❌ needs new shoot.

### 10.1 Logo
| Asset | Path | Status | Notes |
|---|---|---|---|
| Primary lockup (color) | `logo/logan-logo.png` | ✅ | Header, footer (white), Hero stamp |
| White version | — | ❌ | Need to derive from the primary or commission |

### 10.2 Hero / Lifestyle Photography
| Asset | Path | Status | Use |
|---|---|---|---|
| Furnace repair | `hero/furnace-repair.jpg` | ✅ | Hero, "Family" section |
| Installer + van | `hero/installer-van.webp` | ✅ | "Family" section, Careers |
| Drain cleaning | `hero/drain-cleaning.webp` | ✅ | Plumbing service card |
| Blue van profile | `hero/blue-van.webp` | ✅ | "Local" strip, Locations |

### 10.3 Brand Partner Logos
| Asset | Path | Status | Use |
|---|---|---|---|
| Trane | (download as `brands/trane.png`) | 🟡 | Convert to monochrome |
| Mitsubishi | `brands/mitsubishi.png` | 🟡 | Convert to monochrome |
| Daikin | `brands/daikin.png` | 🟡 | Convert to monochrome |
| RunTru | `brands/runtru.png` | 🟡 | Convert to monochrome |
| Navien | `brands/navien.png` | 🟡 | Convert to monochrome |
| Zoeller | `brands/zoeller.webp` | 🟡 | Convert to monochrome |
| Aprilaire | `brands/aprilaire.webp` | 🟡 | Convert to monochrome |

### 10.4 Service Icons
| Asset | Path | Status | Use |
|---|---|---|---|
| 12 service icons | `icons/*.png` | 🟡 | Reinterpret as outline icons (see §2.4.3) |

### 10.5 Awards & Certifications
| Asset | Path | Status | Use |
|---|---|---|---|
| NATE | `awards/nate.png` | 🟡 | Monochrome circle treatment |
| Google Guaranteed | `awards/google-guaranteed.png` | 🟡 | Footer trust row |
| Trane Dealer | `awards/trane-dealer.png` | 🟡 | Hero badge |
| Trane Comfort | `awards/trane-comfort.png` | 🟡 | About section |
| Trane Diamond | `awards/diamond.png` | 🟡 | About section |
| Daikin Comfort Pro | `awards/daikin-pro.png` | 🟡 | Brand partner strip |

### 10.6 Locations
| Asset | Path | Status | Use |
|---|---|---|---|
| Dayton | `locations/dayton.webp` | ✅ | Location card |
| Columbus | `locations/columbus.webp` | ✅ | Location card |
| Cincinnati | `locations/cincinnati.png` | ✅ | Location card |

### 10.7 Gap List
- ❌ White version of the Logan logo (for dark surfaces).
- ❌ Monochrome / outline version of brand partner logos.
- ❌ A video or 360° of a service visit (optional, for the About page).
- ❌ Real employee headshots for the Careers section.

---

## 11. Next Steps (recommended rollout)

1. **Phase 1 — Foundations (week 1):**
   - Figma file with this design system set up as styles & variables.
   - Build the homepage in HTML/CSS based on §3.
2. **Phase 2 — Core pages (week 2):**
   - About, Reviews, Contact, Services overview, single Service page.
3. **Phase 3 — Long tail (week 3):**
   - Coupons, Careers, Financing, Service Area, individual city pages.
4. **Phase 4 — QA & launch (week 4):**
   - Accessibility audit (axe + manual screen reader pass).
   - Performance budget verification.
   - SEO meta + structured data (LocalBusiness schema per city).

---

## Appendix A — Inspiration & Anti-Inspirations

**Inspirations** (to study, not copy):
- Blakeslee & Sons (regional HVAC, strong trust signals)
- Patterson Heating & Air (clean service-card layout)
- Trane Residential (brand partner reference, for partner strip rhythm)

**Anti-inspirations** (to deliberately avoid):
- National HVAC chains with rotating offer carousels at the top of every page.
- "24/7 EMERGENCY?" red flashing banners.
- Stock photos of smiling technicians giving thumbs-up.

---

*End of specification v1.0.*
