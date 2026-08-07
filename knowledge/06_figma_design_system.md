# Pixelocracy Website — Canonical Design Specification

> **⚠️ Supporting reference only, superseded by V4 for visual decisions.** This is a raw Figma measurement dump for the **pre-V4** reference designs. Current visual, typography, motion, and component authority is **[`knowledge/08_v4_design_system.md`](./08_v4_design_system.md)**. Use this document only for historical values (e.g. confirming the brand blue `#4467F6` or the original type families) that `08` doesn't already restate, never as layout/component direction for a new page.

Source: Figma file "PIX Website" (`Ya8WfjI58jnFDHpEgXzM55`), page "FInal Mockups" (node `231:2`), plus page "Cover" (node `0:1`).

Nodes directly reviewed: `231:1585` (Blog - Desktop), `343:162` reference only via sitemap listing (Blog - Mobile, not opened), `231:40` (NEW Homepage - Desktop), `257:1388` (NEW Homepage - Mobile), `231:963` (Contact - Desktop), and sub-nodes within these frames listed by ID throughout this document.

# Typography

## From Figma style — Desktop

| Style name | Font family | Style | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| Desktop/H1 | Sharp Grotesk | Medium 25 | 48 | 500 | 48 | 0 |
| Desktop/H4 | Montserrat | Regular | 24 | 400 | 30 | 0 |
| Desktop/H5 | Montserrat | Regular | 20 | 400 | 24 | 0 |
| Desktop/Body | Montserrat | Regular | 18 | 400 | 24 | 0 |
| Desktop/Body Small | Montserrat | Regular | 16 | 400 | 24 | 0 |
| Desktop/Overline | Sharp Grotesk | Medium 25 | 15 | 500 | 20 | 0 |
| Desktop/CTA | Mabry Pro | Regular | 16 | 400 | 24 | 0 |

Desktop/CTA is bound within node `257:1388`.

Desktop/H1, Desktop/H4, Desktop/Body, Desktop/Body Small, Desktop/Overline are bound within node `231:1585`.

## From Figma style — Mobile

| Style name | Font family | Style | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| Mobile/H1 Mobile | Sharp Grotesk | Medium 25 | 30 | 500 | 38 | 0 |
| Mobile/Η2 Mobile | Montserrat | Bold | 28 | 700 | 34 | 0 |
| Mobile/H4 Mobile | Montserrat | Regular | 20 | 400 | 26 | 0 |
| Mobile/H5 Mobile | Montserrat | Regular | 20 | 400 | 24 | 0 |
| Mobile/Body Mobile | Montserrat | Regular | 16 | 400 | 24 | 0 |
| Mobile/Body Small Mobile | Montserrat | Regular | 14 | 400 | 24 | 0 |

All Mobile styles above are bound within node `257:1388`. The style name "Mobile/Η2 Mobile" contains the character "Η" (Greek capital eta) as it exists in the Figma file.

## Measured from the design — specific text nodes

| Node ID | Frame | Font | Size | Weight | Line height | Text align | Text transform | Matched Figma style |
|---|---|---|---|---|---|---|---|---|
| 231:60 | NEW Homepage - Desktop | Sharp Grotesk Medium 25 | 48 | 500 | 48 | center | none | Desktop/H1 |
| 257:1562 | NEW Homepage - Mobile | Sharp Grotesk Medium 25 | 30 | 500 | 38 | center | none | Mobile/H1 Mobile |
| 231:1607 | Blog - Desktop | Montserrat SemiBold | 20 | 600 | 24 | left | none | none returned |
| 231:148 | NEW Homepage - Desktop (node 231:104) | Montserrat Bold | 20 | 700 | 24 | left | none | Desktop/H5 |
| 231:1658 | Blog - Desktop | Montserrat Regular | 16 | 400 | 24 | left | none | Desktop/Body Small |
| 231:1641 | Blog - Desktop | Sharp Grotesk Medium 25 | 15 | 500 | 20 | left | uppercase | Desktop/Overline |
| 231:1040 | Contact - Desktop | Montserrat Regular | 18 | 400 | 24 | left | none | Desktop/Body |
| 231:97 | NEW Homepage - Desktop | Montserrat, mixed: "AI native by design" Bold, remainder Regular | 18 | 700 / 400 | 24 | left | none | Desktop/Body |

Desktop H2 style: Not defined in the Figma design.
Desktop H3 style: Not defined in the Figma design.

# Colors

No color styles or color variables were returned for any node reviewed. All values below are fill or text colors read directly from individual nodes.

| Hex | Node ID | Property | Frame |
|---|---|---|---|
| #4467F6 | 231:1039 | background fill | Contact - Desktop |
| #4467F6 | 231:1641 | text color | Blog - Desktop |
| #4467F6 | 231:1642 (text 231:1643/231:1644) | text color | Blog - Desktop |
| #4467F6 | 231:104 | shadow color | NEW Homepage - Desktop |
| #000826 | 231:1657 / 231:1658 | border color / text color | Blog - Desktop |
| #000826 | 231:147 | text color | NEW Homepage - Desktop |
| #000000 | 231:1605, 231:1606, 231:1608, 231:1609 | text color | Blog - Desktop |
| #000000 | 231:1645, 231:1648, 231:1651, 231:1654 | text color | Blog - Desktop |
| #000000 | 231:60, 257:1562 | text color | NEW Homepage - Desktop / Mobile |
| #003375 | 231:106 | background fill | NEW Homepage - Desktop |
| #E8ECFD | 231:104 | background fill | NEW Homepage - Desktop |
| #DCE3FF | 231:83 | border color | NEW Homepage - Desktop |
| #656565 | 231:1665 | text color | Blog - Desktop |
| #FFFFFF | 231:1040 | text color | Contact - Desktop |

Color styles/variables (bound): Not defined in the Figma design.
Error, warning, or success colors: Not defined in the Figma design.

# Spacing

All values measured from the design (auto-layout gap/padding values and coordinate differences read from the nodes listed).

| Value | Property | Node ID | Frame |
|---|---|---|---|
| 10px | vertical padding | 231:1657 | Blog - Desktop |
| 20px | horizontal padding | 231:1657 | Blog - Desktop |
| 20px | vertical padding | 231:1039 | Contact - Desktop |
| 32px | horizontal padding | 231:1039 | Contact - Desktop |
| 24px | gap between child elements | 231:1604 | Blog - Desktop |
| 16px | gap between child elements | 231:1642 | Blog - Desktop |
| 16px | left/right offset from frame edge | 257:1561 | NEW Homepage - Mobile |
| 30px | gap between child elements | 231:1640 | Blog - Desktop |
| 30px | gap between child elements | 231:104 | NEW Homepage - Desktop |
| 12px | gap between child elements | 231:147 | NEW Homepage - Desktop |
| 40px | horizontal padding | 231:147 | NEW Homepage - Desktop |
| 40px | bottom padding | 231:104 | NEW Homepage - Desktop |
| 40px | x-distance between node 231:104 (ends x=720) and node 231:150 (starts x=760) | 231:104 / 231:150 | NEW Homepage - Desktop |
| 25px | x-distance between node 231:345 gap value not applicable — see bullet spacing below | — | — |

Bullet-item spacing: text node 231:97 begins at x=345; icon node 231:96 begins at x=320 with width 15. Distance between icon left edge and text left edge: 25px. Measured from the design.

# Border Radius

| Node ID | Frame | Radius value |
|---|---|---|
| 231:1657 | Blog - Desktop | 25px |
| 231:1039 | Contact - Desktop | no radius value returned |
| 231:104 | NEW Homepage - Desktop | no radius value returned |
| 231:106 | NEW Homepage - Desktop | no radius value returned |
| 231:83 | NEW Homepage - Desktop | no radius value returned |
| 231:1666 | Blog - Desktop | no radius value returned |
| 231:1591 | Blog - Desktop | no radius value returned |

All values measured from the design.

# Shadows

| Node ID | Frame | Shadow value |
|---|---|---|
| 231:104 | NEW Homepage - Desktop | drop-shadow, offset-x 6px, offset-y 6px, blur 0px, color #4467F6 |
| 231:1039 | Contact - Desktop | no shadow value returned |
| 231:1657 | Blog - Desktop | no shadow value returned |

All values measured from the design.

# Containers & Grid

All values measured from the design (node x, y, width, height).

| Frame | Node ID | x | y | width | height |
|---|---|---|---|---|---|
| Blog - Desktop | 231:1585 | 31745 | 5819 | 1920 | 4350 |
| Blog - Desktop content container (line) | 231:1625 | 320 | 3137 | 1280 | — |
| Blog - Desktop content container (line) | 231:1627 | 320 | 839 | 1280 | — |
| Blog - Desktop sidebar | 231:1640 | 320 | 939 | 350 | 410 |
| Blog - Desktop article column | 231:1602 | 800 | 939 | 800 | 2098 |
| NEW Homepage - Desktop | 231:40 | -5825 | 5819 | 1920 | 6107 |
| NEW Homepage - Desktop section container | 231:83 | 320 | 1584 | 1280 | 1155 |
| NEW Homepage - Desktop feature column 1 | 231:95 | 320 | 3333 | 375 | 48 |
| NEW Homepage - Desktop feature column 2 | 231:98 | 773 | 3333 | 375 | 48 |
| NEW Homepage - Desktop feature column 3 | 231:101 | 1225 | 3333 | 375 | 48 |
| NEW Homepage - Desktop card column 1 | 231:104 | 320 | 4033 | 400 | 372 |
| NEW Homepage - Desktop card column 2 | 231:150 | 760 | 4033 | 400 | 372 |
| NEW Homepage - Desktop card column 3 | 231:166 | 1200 | 4033 | 400 | 372 |
| NEW Homepage - Mobile | 257:1388 | -6445 | 5819 | 420 | 6229 |
| NEW Homepage - Mobile content rectangle | 257:1561 | 16 | 221 | 388 | 176 |
| Contact - Desktop | 231:963 | 26085 | 5819 | 1920 | 2373 |
| Contact - Desktop container | 231:983 | 320 | 356 | 1280 | 651 |
| Cover | 3:2 | 0 | 0 | 737 | 398 |

# Components

Each entry lists the node ID(s), frame, and structural facts measured from the design or from a Figma style, with no additional description.

**Node 231:1657/231:1658 — Blog - Desktop.** Border 1px solid #000826. Radius 25px. Padding: 20px horizontal, 10px vertical. Text: "Data, AI & Automation", color #000826, Desktop/Body Small style.

**Node 231:1039/231:1040 — Contact - Desktop.** Background #4467F6. Padding: 32px horizontal, 20px vertical. Text: "Send Message", color #FFFFFF, Desktop/Body style. No radius value returned. No shadow value returned.

**Node 231:1640 through 231:1656 — Blog - Desktop.** Gap between rows: 30px. Row 231:1642: gap 16px, text color #4467F6, contents "01" and "Nam libero tempore, cum soluta". Rows 231:1645, 231:1648, 231:1651, 231:1654: text color #000000. Label node 231:1641: text "Contents", color #4467F6, uppercase, Desktop/Overline style.

**Node 231:104/231:150/231:166 — NEW Homepage - Desktop.** Background #E8ECFD. Shadow: 6px/6px/0px, #4467F6. Gap 30px. Bottom padding 40px. Child node 231:106: background #003375, width 400, height 170. Child node 231:147: padding 40px horizontal, gap 12px, text color #000826. Title text (e.g. node 231:148): Montserrat Bold, size 20. Body text (e.g. node 231:149): Montserrat Regular, size 18, Desktop/Body style.

**Node 231:95/231:98/231:101 — NEW Homepage - Desktop.** Ellipse icon: size 15px×15px. Text left edge offset from icon left edge: 25px. Text content includes one Montserrat Bold span and one Montserrat Regular span, both size 18.

**Node 231:1590/231:1591 — Blog - Desktop / Contact - Desktop (node 231:971 on Contact).** Logo image, size 60px×60px. No radius value returned. Adjacent SVG caption image, width 367.399px, height 56.532px.

**Node 231:1663/231:1666 — Blog - Desktop.** Thumbnail image, size 100px×100px. No radius value returned. Label text "Previous", color #656565, size 16, Montserrat Regular. Title text, color #000000, size 20, Montserrat SemiBold.

**Node 231:1585 header, image node 231:1593 — Blog - Desktop.** Fill: single image asset. No separate text nodes returned for nav items within this node.

**Node 231:1039 button — Contact - Desktop.** Also present as text-only node "Learn more →" (e.g. node 231:79, 231:80, 231:81, 231:82 — NEW Homepage - Desktop). No background, border, or padding values returned for these text-only nodes.

**Node 231:83 — NEW Homepage - Desktop.** Border 1px solid #DCE3FF. No background fill value returned. No radius value returned.

# Responsive Behaviour

Two frame widths exist in the file: 1920px and 420px. No other frame width was found in the sitemap listing under node `231:2`.

| Property | Desktop value | Node ID | Mobile value | Node ID |
|---|---|---|---|---|
| Frame width | 1920px | 231:1585 / 231:40 | 420px | 343:162 (listed) / 257:1388 |
| H1 size / line height | 48 / 48 | Desktop/H1 | 30 / 38 | Mobile/H1 Mobile |
| Body size / line height | 18 / 24 | Desktop/Body | 16 / 24 | Mobile/Body Mobile |
| Body Small size / line height | 16 / 24 | Desktop/Body Small | 14 / 24 | Mobile/Body Small Mobile |
| H4 size / line height | 24 / 30 | Desktop/H4 | 20 / 26 | Mobile/H4 Mobile |
| H5 size / line height | 20 / 24 | Desktop/H5 | 20 / 24 | Mobile/H5 Mobile |
| Content edge offset | 320px (node 231:1640 x=320) | 231:1640 | 16px (node 257:1561 x=16) | 257:1561 |
| Feature/card column count on this frame | 3 (nodes 231:95, 231:98, 231:101 at distinct x values) | 231:40 | 1 (nodes 257:1573, 258:1583, 258:1596, 258:1609, 258:1625 all at x=46) | 257:1388 |

Tablet frame width: Not defined in the Figma design.

# Interaction States

| Node ID | Frame | State | Text color |
|---|---|---|---|
| 231:1642 (231:1643/231:1644) | Blog - Desktop | current item | #4467F6 |
| 231:1645, 231:1648, 231:1651, 231:1654 | Blog - Desktop | non-current items | #000000 |

Hover state: Not defined in the Figma design.
Focus state: Not defined in the Figma design.
Active/pressed state: Not defined in the Figma design.
Disabled state: Not defined in the Figma design.

# Existing Pages

Frames present directly under canvas node `231:2` ("FInal Mockups"), measured from the design:

| Frame name | Node ID | x | y | width | height |
|---|---|---|---|---|---|
| NEW Homepage - Desktop | 231:40 | -5825 | 5819 | 1920 | 6107 |
| Case Studies Archive - Desktop | 231:195 | 4950 | 5819 | 1920 | 3878 |
| Wired Case Study - Desktop | 231:210 | 8565 | 5819 | 1920 | 10852 |
| UPDATED Wired Case Study - Desktop | 231:1671 | 11305 | 5819 | 1920 | 7668 |
| Cardom Case Study - Desktop | 231:552 | 14045 | 5819 | 1920 | 10750 |
| Apeiron Case Study - Desktop | 231:782 | 16785 | 5819 | 1920 | 10421 |
| UPDATED Pillar Page Template - Desktop | 231:1403 | 585 | 5819 | 1920 | 6667 |
| About - Desktop | 231:1263 | 20325 | 5818 | 1920 | 6482 |
| Contact - Desktop | 231:963 | 26085 | 5819 | 1920 | 2373 |
| Blog - Desktop | 231:1585 | 31745 | 5819 | 1920 | 4350 |
| Mini Landing_Agency - Desktop | 231:1058 | 37705 | 5819 | 1920 | 6676 |
| NEW Homepage - Mobile | 257:1388 | -6445 | 5819 | 420 | 6229 |
| NEW Homepage - Mobile | 261:1739 | -35 | 5819 | 420 | 7330 |
| Case Studies Archive - Mobile | 271:2490 | 4330 | 5819 | 420 | 4700 |
| Wired Case Study - Mobile | 257:1228 | 7945 | 5819 | 420 | 10192 |
| UPDATED Wired Case Study - Mobile | 266:2138 | 10685 | 5819 | 420 | 8773 |
| Cardom Case Study - Mobile | 271:2649 | 13425 | 5819 | 420 | 10451 |
| Apeiron Case Study - Mobile | 266:2312 | 16165 | 5819 | 420 | 9547 |
| About - Mobile | 281:3311 | 19705 | 5819 | 420 | 7085 |
| Contact - Mobile | 343:2 | 25465 | 5819 | 420 | 2924 |
| Blog - Mobile | 343:162 | 31125 | 5819 | 420 | 5461 |
| Mini Landing_Agency - Mobile | 345:301 | 37085 | 5819 | 420 | 5461 |

Additional top-level nodes on canvas `231:2`: section `231:3` ("NEW SITEMAP"), section `231:1870` ("NEXT STEPS").

Page "Cover" (canvas `0:1`) contains frame `3:2` ("Cover"), width 737, height 398.

# Design Gaps

- Tablet breakpoint frame: Not defined in the Figma design.
- Hover state for buttons, links, pills, and navigation items: Not defined in the Figma design.
- Focus state for any component: Not defined in the Figma design.
- Active/pressed state for any component: Not defined in the Figma design.
- Disabled state for any component: Not defined in the Figma design.
- Form input field components (text field, textarea, select, checkbox, radio) on Contact - Desktop: Not defined in the Figma design.
- Bound color styles or color variables: Not defined in the Figma design.
- Desktop H2 text style: Not defined in the Figma design.
- Desktop H3 text style: Not defined in the Figma design.
- Error, warning, or success color values: Not defined in the Figma design.
- Spacing styles or spacing variables: Not defined in the Figma design.
- Radius styles or radius variables: Not defined in the Figma design.
- Shadow/effect styles or effect variables: Not defined in the Figma design.
