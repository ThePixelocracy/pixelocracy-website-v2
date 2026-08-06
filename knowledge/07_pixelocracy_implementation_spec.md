# Pixelocracy Website — Complete Implementation Handoff Specification

**Source:** Figma file "PIX Website" (fileKey `Ya8WfjI58jnFDHpEgXzM55`), canvas `231:2` ("FInal Mockups"). This document covers every approved page and its corresponding Mobile frame, plus a shared-components section synthesized from patterns that recur across pages.

**Methodology and ground rules applied throughout this document:**

- Values read directly from Figma node metadata, a fill, or a bound style/variable are labeled **"Measured from the design."** (for coordinates, sizes, hex values) or **"From Figma style."** (for a named bound text or color style).
- Elements that are visibly present on the rendered Figma canvas but have no retrievable node metadata are labeled exactly: **"Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP."** A missing MCP node is never treated as proof that an element does not exist, and no visible element is recommended for removal on that basis.
- Where a Mobile frame or a specific sub-element genuinely could not be located anywhere in the file after a direct search (rather than merely being absent from one metadata call), this is stated as: "Not defined in the Figma design."
- This document contains no code, no redesign proposals, and no recommendations to change, remove, or improve anything. It is a factual record of what exists in the Figma file, organized for implementation reference.

**Known file-wide limitation:** across nearly every page in this file, the primary navigation bar and the footer are frequently implemented as a single flattened raster image (often named `screencapture-thepixelocracy-...`) rather than as decomposed, editable Figma layers. Where this is the case, the nav/footer content (wordmark, link labels, tagline, copyright line, icons) is documented from the rendered screenshot only, per the labeling rule above. A small number of pages expose partial live nav/footer nodes (e.g. a nav-link vector, or the EUROCERT certification badge group) — these are noted individually per page.

**Pages covered, in order:** Homepage, About, Contact, Blog / Insights, Pillar Page Template, Case Studies Archive, Wired Case Study, Updated Wired Case Study, Cardom Case Study, Apeiron Case Study, Mini Landing / Agency — each with its Desktop and Mobile documentation, followed by a Shared Components section.

---

## Homepage

### Desktop

#### Navigation Bar
- Exact visible structure: "PIXELOCRACY" wordmark at far left, a pill-shaped nav-item group containing four items, and a standalone "Contact" link at the far right edge of the header, all on a single header row.
- Position and alignment: Header row spans the full 1920px width, top-aligned to the frame (y=0–~90). Wordmark left-aligned, pill group centered-left, "Contact" right-aligned.
- Width and height: Nav pill background `231:51`: x=449, y=22, w=361, h=37 (Measured from the design.). Nav item vector `248:360`: x=466.52, y=31.8, w=445.96, h=18.36 (Measured from the design.) — note the vector's width (445.96px) exceeds the pill's width (361px), i.e. the vector bounding box extends past the pill container on both sides.
- Grid and container behavior: Not derivable from metadata (no auto-layout/constraints data returned for these nodes); pill is horizontally centered within the 1920px frame.
- Typography: Nav item text rendered via vector `248:360` (outlined/converted text, no retrievable font/string metadata). Visually confirmed in the live Figma canvas: reads "Home", "Expertise", "Work", "About" inside/near the pill, with "Contact" as a separate link outside the pill at the far right. (This differs from an earlier reading of this vector as "Home Services▾ Work About Insights"; the reading above reflects direct visual inspection of the rendered screenshot in this pass.)
- Colors: Pill fill `#DAE1FC` (Measured from the design.).
- Borders: None retrievable on the pill node.
- Radius: Not returned in node metadata; pill silhouette in the rendered screenshot is fully rounded (stadium/pill shape).
- Shadows: None observed.
- Spacing: Pill sits ~449px from the left edge, ~22px from the top.
- Images and required assets: None (vector/text based).
- Reusable components: The nav pill/wordmark/Contact-link pattern is Visually confirmed in the live Figma canvas as a shared header used identically (same logo/menu proportions) across other pages in the file.
- Elements with unavailable metadata: "PIXELOCRACY" wordmark styling (color, font) and "Contact" link — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Hero Section
- Exact visible structure: Full-width gradient background panel; centered headline; centered paragraph beneath two soft decorative tint rectangles; two centered CTA buttons; a "Trusted by…" pill with trust copy beneath.
- Position and alignment: All hero content is horizontally centered within the 1920px frame; background panel spans x=0 to x=1920.
- Width and height: Hero background `231:44`: x=0, y=0, w=1920, h=1226 (Measured from the design.). Headline `231:60`: x=454, y=200, w=1012, h=96 (Measured from the design.). Paragraph `231:49`: x=518, y=346, w=885, h=60 (Measured from the design.). Decorative tint `231:48`: x=491, y=183, w=945, h=157 (Measured from the design.). Decorative tint `231:47`: x=527, y=378, w=885, h=55 (Measured from the design.). Trust pill `231:45`: x=795, y=746, w=331, h=54 (Measured from the design.). Trust text `231:46`: x=776, y=756, w=368, h=24 (Measured from the design.).
- Grid and container behavior: Not derivable from metadata; all elements use fixed absolute x/y within the 1920px frame.
- Typography: Headline — From Figma style: `Desktop/H1` (Sharp Grotesk Medium 25, size 48, weight 500, line-height 48), color `#000000`, center-aligned. Paragraph — From Figma style: `Desktop/H4` (Montserrat Regular, size 24, weight 400, line-height 30), color `#000000`, center-aligned. Trust text — From Figma style: `Desktop/Body` (Montserrat Regular, size 18, weight 400, line-height 24), color `#000000`.
- Colors: Decorative tint `231:48` fill `#E3E8FD` (Measured from the design.). Decorative tint `231:47` fill `#EEF1FE` (Measured from the design.). Trust pill `231:45` fill `#FEFEFE` (Measured from the design.). Global text color token `Text` = `#000826` (From Figma style.).
- Borders: None retrievable on hero elements.
- Radius: Not returned for tint rectangles or trust pill; screenshot shows soft-rounded corners on both.
- Shadows: None on the tint/trust nodes; the primary CTA button (below) does carry an offset shadow.
- Spacing: ~146px between headline bottom (y=296) and paragraph top (y=346); ~400px between paragraph and trust pill.
- Images and required assets: Hero background `231:44` is an image asset named "screencapture-thepixelocracy-2026-06-24-10_53_28 1" (Measured from the design., i.e. a captured screenshot of the live site used as a background layer). Note: when this image node is rendered in isolation, it displays a different headline ("Get more done in less time with top experts"), a different tagline ("Business, design, & engineering, combined to deliver excellence."), a different trust line ("Trusted by 100+ organisations"), and a nav reading "Home / Expertise / Work / About" plus "Contact" — all of which is superseded in the full composited frame by the live text nodes documented above (`231:60`, `231:49`, `231:46`), which render the current copy on top of this background image. This is a factual observation from isolating node `231:44` versus viewing the full composited frame; it is reported as-is without any recommendation.
- Reusable components: Two CTA buttons ("Book a discovery call" — white fill, black text, blue `#4467F6`-colored hard offset drop-shadow; "See our work" — transparent fill, blue `#4467F6` outline and text) — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Elements with unavailable metadata: "PIXELOCRACY" wordmark, "Contact" link, both CTA buttons — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Client Logo Strip & Wave Divider
- Exact visible structure: A centered line of small trust copy, a horizontal row of five client/partner logos, followed by a multi-line wavy divider graphic separating the hero from the "What we do" section.
- Position and alignment: Positioned below the hero CTA buttons and above the "What we do" heading (`231:61` at y=1366), i.e. inside the lower portion of the same y=0–1226 hero background image span. Logos and divider are horizontally centered/full-bleed across the 1920px width.
- Width and height: No independent node dimensions are retrievable; this content is part of image node `231:44` (x=0, y=0, w=1920, h=1226) (Measured from the design.).
- Grid and container behavior: Not derivable — content is raster, not a layout construct.
- Typography: Small caption above the logos reading "Trusted by 100+ organisations" is baked into the same image and is distinct from the live "Trusted by Greece's largest organisations" trust-pill text documented in the Hero section above. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Colors: Logos render in grayscale/monochrome; wave-divider lines render in varying opacities of blue on a white background. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Borders: None observed.
- Radius: Not applicable (raster content).
- Shadows: None observed.
- Spacing: Logos are evenly spaced in a single row; two of the five logos (leftmost and rightmost) are cropped by the frame edge in the rendered screenshot.
- Images and required assets: Five client/partner logos are visible: a partially cropped mark at the far left, "AVIS", "hygeia" (hospital, with a circular emblem), "vodafone" (with speech-mark icon), and a further partially cropped circular mark at the far right. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP. The wave-divider graphic (multiple overlapping sine-wave strokes in blue tones) is likewise Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Reusable components: None identified as distinct components; entire strip and divider are part of the flattened background image `231:44`.
- Elements with unavailable metadata: Client logo row and wave-divider graphic in full — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### What We Do
- Exact visible structure: Centered section heading, centered subheading paragraph, and a bordered white card containing five numbered rows (01–05), each with a left-column number, a line-art icon, a heading, a two-line description, and a "Learn more →" link; thin horizontal divider lines separate consecutive rows.
- Position and alignment: Heading `231:61` at x=832, y=1366, w=255, h=48 (Measured from the design.), centered. Subheading `231:50` at x=518, y=1444, w=885, h=60 (Measured from the design.), centered. Card `231:83` at x=320, y=1584, w=1280, h=1155 (Measured from the design.).
- Width and height: Row container `231:75` (row 1, "Strategy & Advisory"): x=917, y=1664, w=613, h=134 (Measured from the design.). Row headings/descriptions/links (rows 2–5) positioned at x=917, w=613 or w=281–307 for the headings, y = 1879, 2094, 2309, 2524 respectively (Measured from the design.). Row numbers ("02."–"05.") at x=390, w=~31–33, h=24, same y-values (Measured from the design.); row 1's number ("01.") is a separate node at x=390, y=1664, w=27, h=24 (Measured from the design.). Icons at x=708–717, w≈180–189, h≈175–215 per row (Measured from the design.).
- Grid and container behavior: Fixed absolute positioning; icon column (~x=708–717), number column (x=390), text column (x=917) form three consistent vertical lanes across all five rows.
- Typography: Section heading — From Figma style: `Desktop/H2` (Montserrat Bold, size 40, weight 700, line-height 48), color `#000000`, centered ("What we do"). Row numbers — From Figma style: `Desktop/H5` base (Montserrat, size 20, line-height 24) rendered with a bold weight override, color `#000826`. Row headings (e.g. "Strategy & Advisory") — From Figma style: `Desktop/H4` base (Montserrat, size 24, line-height 30) rendered bold, color `#000826`. Row descriptions — From Figma style: `Desktop/Body` (Montserrat Regular, size 18, weight 400, line-height 24), color `#000826`. "Learn more →" links — From Figma style: `Desktop/Body Small` (Montserrat, size 16, line-height 24) rendered bold, color `#000826`.
- Colors: Card border `#DCE3FF` (From Figma style/design context.); text color `#000826` throughout (From Figma style.).
- Borders: Card `231:83` — 1px solid `#DCE3FF` (Measured from the design.).
- Radius: Not returned in metadata for the card; screenshot shows a subtle rounded corner.
- Shadows: None observed on the card or rows.
- Spacing: Divider lines `231:84`–`231:86` (x=390, w=1140) sit at y=1839, 2054, 2269 (Measured from the design.); divider `231:87` before row 5 differs slightly in position/width (x=380, w=1160, y=2484) (Measured from the design.) — a factual variance from the other three dividers, not evaluated further.
- Images and required assets: Five line-art icons — row 1: telescope (`257:1578`/`231:41`, ~180×196), row 2: molecular/atom shape (`231:180` mask group, 189×175), row 3: engineering blueprint (`231:183` mask group, 189×175), row 4: connected-dot network (`231:186` mask group, 189×175), row 5: plant/sprout (`231:189` vector, 180×215) (Measured from the design. for positions/sizes; icon imagery itself is Visually confirmed in the live Figma canvas).
- Reusable components: The five-row list item pattern (number + icon + heading + description + link) repeats identically across all five rows.
- Elements with unavailable metadata: None beyond the icon rasters noted above, which have node IDs but minimal further style metadata (fills/strokes not retrievable through MCP for the mask-group icons).

#### Tools We Build With
- Exact visible structure: Section heading and paragraph on a light-blue background band, three bullet claims in a horizontal row beneath, and a row of five grayscale technology/tool logos beneath that.
- Position and alignment: Heading `231:93` at x=655, y=3125, w=610, h=48, centered (Measured from the design.). Paragraph `231:91` at x=518, y=3203, w=885, h=90, centered (Measured from the design.).
- Width and height: Background transition image `231:89`: x=0, y=2839, w=1920, h=313 (Measured from the design.). Main section background `231:88`: x=0, y=3152, w=1920, h=533 (Measured from the design.). Logo-row background image `231:90`: x=0, y=3432, w=1920, h=141 (Measured from the design.). Bullet groups `231:95`/`231:98`/`231:101`: x=320/773/1225, y=3333, w=375, h=48 each (Measured from the design.).
- Grid and container behavior: Three bullet groups are evenly spaced in a single row (x=320, 773, 1225), each 375px wide with ~78px gaps.
- Typography: Heading — From Figma style: `Desktop/H2` (Montserrat Bold, 40/48/700), color `#000000`. Paragraph — From Figma style: `Desktop/H4`-scale text, centered, color `#000000`. Bullet claim text — From Figma style: `Desktop/Body` (Montserrat, size 18, line-height 24), with a bold lead-in phrase followed by regular-weight continuation (e.g. "**AI native by design** — not a bolt-on feature added at the end"), color `#000000`.
- Colors: Section background `231:88` fill `#EFF2FF` (From Figma style/design context.). Bullet marker: blue ellipse icon (`231:96`, 15×15) (Measured from the design.).
- Borders: None observed.
- Radius: Not returned in metadata for background rectangles.
- Shadows: None observed.
- Spacing: Bullet row sits ~208px below the paragraph; logo row sits directly beneath the bullet row.
- Images and required assets: Background images `231:89` and `231:90` are named "screencapture-thepixelocracy-2026-06-24-10_53_28" derivatives (Measured from the design., i.e. captured-screenshot image assets). Five tool/platform logos confirmed via isolated screenshot of `231:90`: a Figma icon (multi-dot mark), an Adobe-style triangular "A" mark, an atomic/orbit icon, a black circular "N" monogram, and a wave/ribbon glyph — all rendered in grayscale. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP (logos are part of the flattened background image, not separate vector nodes).
- Reusable components: Bullet-claim component (ellipse + two-weight text) repeats 3×, structurally identical to the pattern.
- Elements with unavailable metadata: The five tool/platform logos themselves — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Some of What We've Shipped (Case Studies)
- Exact visible structure: Centered heading and paragraph, three case-study cards in a row (colored logo header + white/tinted body with title and description), and a centered outline "View all Case Studies" link beneath.
- Position and alignment: Heading `231:94` at x=492, y=3825, w=936, h=48, centered (Measured from the design.). Paragraph `231:92` at x=518, y=3903, w=885, h=60, centered (Measured from the design.). Three cards at x=320, 760, 1200, y=4033, w=400, h=372 each (Measured from the design.). Link `231:178` at x=843, y=4455.5, w=234, h=56, centered (Measured from the design.).
- Width and height: Each card: 400×372, split into a 400×170 logo header and a 400×132 text body with 40px horizontal padding (Measured from the design.).
- Grid and container behavior: Three cards in a fixed row, 440px apart center-to-center (320, 760, 1200), no responsive grid metadata retrievable.
- Typography: Card titles ("Greek e-Government Platform" `231:148`, "WIRED Greece" `231:164`, "Apeiron Ventures" `231:176`) — From Figma style: `Desktop/H5` base (Montserrat, size 20, line-height 24) rendered bold, color `#000826`. Card body copy — From Figma style: `Desktop/Body` (Montserrat Regular, size 18, weight 400, line-height 24), color `#000826`. Link text "View all Case Studies" — From Figma style: `Desktop/CTA` (Mabry Pro Regular, size 16, weight 400, line-height 24), color `#4467F6`.
- Colors: Card 1 (`231:104`) body background `#E8ECFD`, logo header background `#003375` (navy, govgr wordmark) (Measured from the design.). Card 2 (`231:150`) logo header black, WIRED wordmark. Card 3 (`231:166`) logo header red, Apeiron Ventures logomark. Link border/text `#4467F6` (Measured from the design.).
- Borders: Link `231:178` — 1px solid `#4467F6` (Measured from the design.).
- Radius: Not returned for cards or link; screenshot shows squared/near-zero corner radius on the case-study cards.
- Shadows: Each card carries a hard offset drop-shadow, `6px 6px 0px #4467F6` (From Figma style/design context — Tailwind `drop-shadow-[6px_6px_0px_#4467f6]`), matching the primary CTA button's shadow treatment.
- Spacing: 40px horizontal gap between cards (760−320−400=40, 1200−760−400=40); link centered ~83px below the cards.
- Images and required assets: govgr logo mark (`231:107`, composed of multiple SVG glyph paths) (Measured from the design.); WIRED wordmark (`231:153`, "WIRED_Logo_Black 1", 130×26) (Measured from the design.); Apeiron Ventures logomark (`231:169`, "Group 1", ~90×38.5) (Measured from the design.).
- Reusable components: Case-study card component repeats 3× with identical structure (logo header + text body).
- Elements with unavailable metadata: None significant beyond internal logo-mark sub-path styling.

#### Get in Touch (CTA Banner)
- Exact visible structure: Full-width dark blue-to-navy gradient panel containing a centered white heading, two lines of centered white body copy, and a centered white button with a blue offset shadow.
- Position and alignment: Entire banner is part of background image node `231:191` (x=0, y=4672, w=1920, h=1435) (Measured from the design.), which spans from the case-study section's end down through the footer (ending at y=6107, the bottom of the frame).
- Width and height: Banner visually occupies roughly the first third of `231:191`'s 1435px height, with the footer occupying the remainder. Exact independent banner height is not retrievable since it is flattened into one image node.
- Grid and container behavior: Not derivable — raster content.
- Typography: "Get in touch" heading — large, bold, white, centered. Body copy — two centered white lines ("Looking for a reliable partner to design, build, or support your next project? We'd be happy to hear more!" / "Share a few details with us, and someone from our team will get back to you promptly and professionally. We treat every inquiry with care - and every project with clarity."). Button label "Talk to our team" — bold, dark text on white. All Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Colors: Banner background is a diagonal blue-to-navy gradient (lighter blue upper-left transitioning to dark navy lower-right); exact hex stops are not retrievable since this is baked into the flattened image `231:191`. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Borders: None observed on the panel itself.
- Radius: Panel appears rectangular with no corner radius in the screenshot.
- Shadows: The white button carries the same hard blue offset drop-shadow pattern (`#4467F6`-toned) used elsewhere on the page. Visually confirmed in the live Figma canvas.
- Spacing: Heading, two paragraph lines, and button are vertically stacked and centered with even spacing within the panel.
- Images and required assets: Entire banner is image node `231:191`, named "screencapture-thepixelocracy-2026-06-24-10_53_28 3" (Measured from the design., i.e. a captured-screenshot-derived background asset).
- Reusable components: Button follows the same white-fill/blue-offset-shadow pattern as the hero's "Book a discovery call" button.
- Elements with unavailable metadata: Heading, body copy, and button — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP (all baked into image `231:191`).

#### Footer
- Exact visible structure: Three-column layout — (1) "PIXELOCRACY" wordmark + three-line tagline, (2) a vertical nav-link list plus a LinkedIn icon, (3) an ISO/EUROCERT certification block with logo, descriptive text, and two round certification badges — followed by a faint wave-divider graphic and a copyright line at the very bottom.
- Position and alignment: Footer occupies the lower portion of background image `231:191` (y=4672–6107 span) (Measured from the design.). Certification block sits at the right, with real (non-baked) node IDs: `231:192` group at x=1318, y=5425, w=444.12, h=60.17 (Measured from the design.); ISO 9001 badge `261:1735`/`261:1737` at x=1318, y=5526, w=100, h=49 container (inner vector 113.51×68.32) (Measured from the design.); ISO 27001 badge `261:1732`/`261:1734` at x=1438, y=5526.58, w=100, h=47.46 container (inner vector 98.35×47.46) (Measured from the design.).
- Width and height: Eurocert logo image `231:193`: 60×60 at x=1318, y=5425 (Measured from the design.). Certification descriptor vector `248:392`: x=1394.72, y=5428.64, w=367.4, h=56.53 (Measured from the design.).
- Grid and container behavior: Three-column fixed layout; not derivable as a true responsive grid from metadata.
- Typography: Certification text ("Certified Information Security Management System / EN ISO/IEC 27001:2023 / Certified by EUROCERT") is a vector graphic (outlined text), no font/size metadata retrievable (Measured from the design. for its bounding box only). "PIXELOCRACY" footer wordmark, tagline, nav links ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), and copyright text ("Pixelocracy © 2026, All rights reserved.") — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Colors: "PIXELOCRACY" wordmark rendered in blue (matching the header wordmark treatment); nav links in dark/black bold text; copyright text in a muted gray/dark tone. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Borders: None observed.
- Radius: Certification badges appear as circular/round stamp graphics in the screenshot.
- Shadows: None observed in the footer.
- Spacing: Certification block right-aligned near x=1318–1762; nav-link column centered around x=1360 (approximate, based on screenshot proportions since these specific text nodes are unavailable through metadata).
- Images and required assets: Eurocert logo (`231:193`, 60×60 raster) (Measured from the design.); EN ISO/IEC 27001:2023 descriptor graphic (`248:392`) (Measured from the design.); ISO 9001 and ISO 27001 round badge stamps (`261:1732`–`261:1737`) (Measured from the design.); a faint wave-divider line graphic above the copyright line and a small circular "back to top" button (blue circle with upward chevron) in the bottom-right corner — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Reusable components: "Back to top" circular button is a common cross-page utility element (Visually confirmed in the live Figma canvas).
- Elements with unavailable metadata: Wordmark, tagline, nav-link list, LinkedIn icon, wave-divider, copyright line, "back to top" button — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

---

### Mobile

Two frames share the name "NEW Homepage - Mobile": `257:1388` (420×6229) contains content that structurally matches the Desktop Homepage (`231:40`); `261:1739` (420×7330) contains content that does not match the Desktop Homepage or `257:1388` beyond a shared header component — it is documented separately at the end of this section as a factual discrepancy, per instructions not to guess which is "correct."

#### Header & Hero — Mobile (`257:1388`)
- Exact visible structure: Fixed header band with logo + hamburger icon; hero background image; centered headline, paragraph, two CTA buttons, and trust pill beneath.
- Position and alignment: All content centered within the 420px-wide frame.
- Width and height: Nav background `257:1560` ("Rectangle 3368"): x=0, y=0, w=420, h=174 (Measured from the design.). Logo `257:1548` ("pix-logo-800 2"): x=16, y=21, w=160, h=17 (Measured from the design.). Menu icon `257:1551` ("Group 1672"): x=376, y=23.5, w=28.5, h=11.5 (Measured from the design.). Hero background image `257:1558` ("image 76"): x=0, y=174, w=420, h=862 (Measured from the design.). Headline `257:1562`: x=16, y=108, w=388, h=152, "From national infrastructure to early-stage products" (Measured from the design.) — matches the Desktop headline copy. Decorative tint `257:1561` ("Rectangle 4"): x=16, y=221, w=388, h=176 (Measured from the design.). Paragraph `257:1563`: x=15, y=280, w=387, h=104, "Strategy, engineering, data, design and capability combined in one team. Built for organizations that need more than a vendor." (Measured from the design.) — matches Desktop copy. Trust pill `257:1569` ("Rectangle 1"): x=43, y=738, w=331, h=54 (Measured from the design.). Trust text `257:1565`: x=46, y=756, w=328, h=24, "Trusted by Greece's largest organisations" (Measured from the design.) — matches Desktop copy.
- Grid and container behavior: Single-column, fixed absolute positioning within 420px width; content margins of 16px on each side (388px content width) are consistent throughout the mobile frame.
- Typography: Headline — From Figma style: `Mobile/H1 Mobile` (Sharp Grotesk Medium 25, size 30, weight 500, line-height 38). Paragraph — consistent in size/role with `Mobile/H4 Mobile` (Montserrat Regular, 20/26/400) per the known mobile type scale. Trust text — From Figma style: `Mobile/Body Mobile` (Montserrat Regular, size 16, weight 400, line-height 24).
- Colors: Not independently re-verified for this frame's tint/pill fills in this session; visually consistent with the Desktop equivalents (`#E3E8FD`/`#FEFEFE`-family light tints).
- Borders: None retrievable.
- Radius: Not returned in metadata; screenshot shows rounded pill/tint shapes, consistent with Desktop.
- Shadows: CTA button shadow pattern is Visually confirmed in the live Figma canvas, consistent with Desktop (white button with blue offset shadow); not independently re-measured this session.
- Spacing: Header band height 174px versus a 17px-tall logo — indicates additional top/bottom padding around the logo row not broken into separate spacing nodes.
- Images and required assets: Hero background `257:1558` ("image 76") — an image asset analogous in role to the Desktop hero background `231:44`; not independently isolated/screenshotted this session for internal baked-copy comparison.
- Reusable components: Header (logo + hamburger) is identical in position/size to the header in `261:1739` (see Mismatch Notice below), confirming it is a shared component across mobile frames.
- Elements with unavailable metadata: "PIXELOCRACY" logo internal styling, hamburger icon internal styling, and both CTA buttons ("Book a discovery call", "See our work") — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### What We Do — Mobile (`257:1388`)
- Exact visible structure: Same as Desktop — heading, subheading paragraph, then a bordered card with five numbered rows (icon, heading, description, "Learn more →"), separated by hairline dividers.
- Position and alignment: Single-column, stacked vertically, full content width (388px) minus 16px side margins.
- Width and height: Heading `257:1571`: x=120, y=1136, w=179, h=34, "What we do" (Measured from the design.). Subheading `257:1570`: x=16, y=1194, w=388, h=104 (Measured from the design.). Card `257:1572` ("Rectangle 5"): x=16, y=1368, w=388, h=1773 (Measured from the design.). Five row frames (`257:1573`, `258:1583`, `258:1596`, `258:1609`, `258:1625`): each x=46, w=328, h=194, at y=1398, 1742, 2086, 2430, 2774 respectively (Measured from the design.).
- Grid and container behavior: Rows stack vertically with a consistent 344px pitch (1742−1398=344, repeating).
- Typography: Heading — From Figma style: `Mobile/Η2 Mobile` (Montserrat Bold, size 28, weight 700, line-height 34). Row titles/numbers/descriptions/links — consistent in role with `Mobile/H5 Mobile` (20/24/400) and `Mobile/Body Mobile`/`Mobile/Body Small Mobile` per the known mobile type scale; not individually re-verified per node this session.
- Colors: Not independently re-verified for this frame; visually consistent with Desktop (`#000826` text, `#DCE3FF`-family border).
- Borders: Card border — not independently re-measured this session; visually consistent with Desktop's `#DCE3FF` 1px border.
- Radius: Not returned in metadata.
- Shadows: None observed.
- Spacing: Divider lines `258:1582`, `258:1591`, `258:1604`, `258:1614` at x=46, w=328, y=1712, 2056, 2400, 2744 respectively (Measured from the design.) — one divider before each of rows 2–5, matching the Desktop pattern.
- Images and required assets: Row icons — telescope (`231:41`, x=194, y=1516, w=180, h=195.95), mask-group icons for rows 2–4 (`258:1592`, `258:1606`, `258:1621`), and a plant/sprout vector for row 5 (`258:1634`, x=198, y=2927, w=180, h=215) (Measured from the design. for positions; imagery Visually confirmed).
- Reusable components: Same five-row list-item component pattern as Desktop, restacked into a single mobile column instead of a two-column (number/icon | text) layout.
- Elements with unavailable metadata: None beyond icon internal styling (same limitation as Desktop).

#### Tools We Build With — Mobile (`257:1388`)
- Exact visible structure: Section heading and paragraph on a light-blue band, three stacked bullet claims (one per row instead of Desktop's horizontal row), and a single flattened image containing all tool logos.
- Position and alignment: Single column, 16px side margins.
- Width and height: Background `258:1636` ("Rectangle 2"): x=0, y=3311, w=420, h=658 (Measured from the design.). Transition image `258:1637`: x=0, y=3242, w=420, h=69 (Measured from the design.). Heading `258:1639`: x=16, y=3361, w=388, h=34 (Measured from the design.). Paragraph `258:1638`: x=16, y=3419, w=388, h=104 (Measured from the design.). Bullet groups `258:1640`/`258:1643`/`258:1646`: x=16, w=388/387, h=48, y=3571, 3659, 3747 respectively (Measured from the design.). Logo image `258:1655` ("image 77"): x=16, y=3843, w=388, h=86 (Measured from the design.).
- Grid and container behavior: Bullets stack vertically (88px pitch) rather than Desktop's horizontal 3-across row — a structural difference from Desktop for this breakpoint.
- Typography: Heading — From Figma style: `Mobile/Η2 Mobile` (28/34/700). Bullet text — mixed bold lead-in + regular continuation, consistent in role with `Mobile/Body Mobile` (16/24/400), matching the Desktop bullet pattern's structure.
- Colors: Bullet marker ellipses ~15.26×15.26px (Measured from the design.), blue-toned, matching the Desktop bullet dot treatment.
- Borders: None observed.
- Radius: Not returned in metadata.
- Shadows: None observed.
- Spacing: 88px vertical pitch between bullet groups.
- Images and required assets: `258:1655` ("image 77") is a single flattened raster containing the tool/platform logo row (Figma, Adobe-style, atom/React, "N" monogram, wave glyph, per Desktop's equivalent logo set) — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for individual logos (they are not separated into distinct nodes on mobile, unlike the isolable background-image crop available on Desktop).
- Reusable components: Bullet-claim component pattern matches Desktop; layout direction (stacked vs. row) differs.
- Elements with unavailable metadata: Individual tool/platform logos within `258:1655` — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Some of What We've Shipped — Mobile (`257:1388`)
- Exact visible structure: Heading and paragraph, a single fully-detailed case-study card (Greek e-Government Platform), a row of carousel pagination dots, a "View all Case Studies" link, and a large flattened image beneath that occupies the space where additional carousel cards would appear.
- Position and alignment: Single column, 16px side margins; card and link centered.
- Width and height: Heading `261:1658`: x=16, y=4069, w=388, h=68 (Measured from the design.). Paragraph `261:1657`: x=16, y=4161, w=388, h=78 (Measured from the design.). Card `261:1659` ("Overlay+Border+OverlayBlur"): x=16, y=4309, w=388, h=372, split into a 388×170 logo header and a 388×132 text body (Measured from the design.). Pagination dots `261:1710`: x=185, y=4701, w=50, h=10, three 10×10 ellipses (Measured from the design.). Link `261:1705`: x=93, y=4751, w=234, h=56 (Measured from the design.). Trailing image `261:1720` ("image 78"): x=16, y=4907, w=388, h=598 (Measured from the design.).
- Grid and container behavior: A single card node exists at this breakpoint with metadata (`261:1659`, containing "Greek e-Government Platform"), alongside three pagination dots — Measured from the design., indicating a swipeable/carousel presentation is intended for three cards, but only one card is present as a distinct, style-inspectable node; the other two cards (WIRED Greece, Apeiron Ventures, as seen on Desktop) are not represented as separate nodes in this frame's metadata. Whether their content appears within the flattened `261:1720` ("image 78") beneath, or is otherwise handled by the carousel mechanism, is not determinable through MCP.
- Typography: Card title/body — consistent in role with `Mobile/H5 Mobile` (20/24/400 base, bold override on title) and `Mobile/Body Mobile` (16/24/400), matching Desktop's card typography pattern.
- Colors: Card header navy background and body tint — not independently re-verified this session; visually consistent with Desktop's `#003375`/`#E8ECFD` card treatment.
- Borders: Link `261:1705` — visually consistent with Desktop's `#4467F6` outline pattern; not independently re-measured this session.
- Radius: Not returned in metadata.
- Shadows: Card drop-shadow — Visually confirmed in the live Figma canvas, consistent with Desktop's `6px 6px 0px #4467F6` pattern; not independently re-measured this session.
- Spacing: ~50px gap between card bottom (4309+372=4681) and pagination dots (4701); ~50px gap between dots and link (4751).
- Images and required assets: govgr logo mark within the card (`261:1662`, 129×37.8 approx.) (Measured from the design.). Trailing image `261:1720` ("image 78") — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Reusable components: Card component structurally identical to Desktop's case-study card; pagination-dot component is a mobile-only addition not present on Desktop (Desktop shows all three cards side-by-side with no carousel indicator).
- Elements with unavailable metadata: WIRED Greece and Apeiron Ventures card content on mobile — not present as distinct nodes; content of "image 78" — Visually confirmed only as a large placeholder-style image in the region following the pagination dots. Exact node metadata unavailable through MCP.

#### Get in Touch + Footer — Mobile (`257:1388`)
- Exact visible structure: Same content set as Desktop (CTA banner heading/copy/button, then footer wordmark/tagline/nav-links/LinkedIn icon/certifications/wave-divider/copyright), entirely flattened into one image for this breakpoint.
- Position and alignment: Single image, full frame width.
- Width and height: `261:1723` ("image 79"): x=0, y=5655, w=420, h=574 (Measured from the design.) — this spans exactly to the bottom of the frame (5655+574=6229), confirming the CTA banner and entire footer are combined into one flattened raster asset for this mobile frame, with no separate live text/button nodes surfaced through MCP.
- Grid and container behavior: Not applicable — single flattened image.
- Typography: "Get in touch" heading, body copy, "Talk to our team" button label, "PIXELOCRACY" footer wordmark, tagline, nav links, and copyright line — Visually confirmed in the live Figma canvas (content matches Desktop's footer/banner copy). Exact node metadata unavailable through MCP.
- Colors: Blue-to-navy gradient banner and light footer background — Visually confirmed in the live Figma canvas, consistent with Desktop. Exact node metadata unavailable through MCP.
- Borders: None observed.
- Radius: None observed.
- Shadows: Button shadow — Visually confirmed in the live Figma canvas, consistent with Desktop's blue offset-shadow pattern.
- Spacing: Not derivable — flattened image.
- Images and required assets: `261:1723` ("image 79") is the sole asset for this entire section.
- Reusable components: Same CTA-banner + footer content as Desktop, condensed into a single mobile-width column.
- Elements with unavailable metadata: The entire CTA banner and footer for this mobile frame — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP (fully flattened into `261:1723`).

#### Mobile Frame `261:1739` — Content Mismatch Notice
- Exact visible structure: This frame (420×7330) is named "NEW Homepage - Mobile" in the Figma layer list, identical to `257:1388`. Its header (logo `261:1745` at x=16, y=21, w=160, h=17; menu icon `261:1746` at x=376, y=23.5, w=28.5, h=11.5 — Measured from the design.) is positioned and sized identically to the header in `257:1388` and matches the Desktop header's role, confirming a shared header component. Beneath the header, however, this frame's body content is a "Strategy & Advisory" service/pillar detail page, not Homepage content. This is reported as a direct factual observation from both `get_metadata` and rendered screenshots; no determination is made as to which of the two "NEW Homepage - Mobile" frames is the intended Homepage — both are documented as they exist in the file.
- Position and alignment / Width and height (body content, Measured from the design.): A pillar hero block "PILLAR 01 / Strategy & Advisory / Strategy that moves to execution." (`261:1875`, x=16, y=120, w=388, h=386); a meta-info block "Pillar / Works best with / Typical engagement" (`261:1877`, x=16, y=566, w=386, h=212); an expertise image (`261:1887`, x=16, y=838, w=389, h=204); a "WHY US / Strategy rooted in delivery" narrative block (`261:1893`, x=16, y=1146, w=388, h=298); a highlighted "01 / From insight to execution" card (`261:1895`, x=16, y=1514, w=388, h=308); carousel dots (`261:1901`, x=185, y=1852, w=50, h=10); a "We've heard this before" block (`261:1917`, x=16, y=1962, w=388, h=282) followed by four speech-bubble-style quote/testimonial cards (`261:1918`, `261:1924`, `261:1939`, `261:1945`, x=16, w=388, various heights, y=2314–3189); a "Work that went all the way" selected-experience block (`261:1961`, x=16, y=3381, w=388, h=202) with three case entries — eGovernance, Mobility, Tobacco/FMCG (`261:1962`, x=16, y=3653, w=388, h=814); a "What a strategy engagement looks like" block (`261:1984`, x=40, y=4678, w=340, h=330) leading into a "Discovery & Diagnosis" accordion-style list with five bullet sub-items (`261:2052`, x=64, y=5118, w=292, h=454) and pagination dots (`261:2083`); a "The Pixelocracy difference" side-note block (`261:2088`, x=40, y=5762, w=340, h=218); a closing CTA "Ready to move from roadmap to reality?" (`261:2095`, x=16, y=6180, w=388, h=176) with a "Book a discovery call" link (`261:2096`, x=16, y=6396, w=234, h=64); an "other Pillars" nav row listing all five pillar names (`261:2098`, x=16, y=6540, w=388, h=66); and a closing footer image (`261:2111`, "image 80", x=0, y=6756, w=420, h=574).
- Typography: Overline-style labels ("PILLAR 01", "WHY US", "TYPICAL SITUATIONS WE SOLVE", etc.) are consistent in role with a newly-observed style `Mobile/Overline Mobile` (Sharp Grotesk Medium 25, size 14, weight 500, line-height 16) (From Figma style.). A further style `Mobile/H3 Mobile` (Sharp Grotesk Medium 25, size 24, weight 500, line-height 32) (From Figma style.) is also defined within this frame's scope, extending the previously known mobile type scale (H1, Η2, H4, H5, Body, Body Small).
- Colors / Borders / Radius / Shadows / Spacing / Images / Reusable components: Testimonial cards use a quotation-mark glyph plus a polygon "speech-bubble tail" shape (Measured from the design. for bounding boxes, e.g. `261:1921` "\"" vector 12×11; `261:1923` "Polygon 1" 23×16.43); this pattern does not appear anywhere in the Desktop Homepage (`231:40`) or the other Mobile Homepage frame (`257:1388`).
- Elements with unavailable metadata: Most descriptive body copy in this frame is present as real text nodes (unlike the heavily-flattened footer/CTA regions of `257:1388`), but detailed color/border/shadow styling for the individual quote cards and accordion rows was not independently pulled in this session, since this content falls outside the Homepage content this frame's shared name would suggest, and the assignment's scope is the Homepage.
- Summary of the discrepancy: Node `261:1739` carries the Figma layer name "NEW Homepage - Mobile" and the dimensions cited for this assignment (420×7330), but its rendered content — confirmed via both `get_metadata` and screenshot — is a "Strategy & Advisory" pillar/service detail page. It shares only the header component (logo + hamburger, identical position/size) with the Desktop Homepage and with `257:1388`. No guess is made here as to which of the two "Mobile" frames represents the intended Homepage; both are reported factually as they exist in the Figma file.

## About

### Desktop

#### Top Navigation Bar
- Exact visible structure: Full-width bar with "PIXELOCRACY" wordmark logo at left, a nav group at center-right containing "Services" (with a small downward-pointing polygon/chevron suggesting a dropdown), and additional nav items rendered as a single flattened vector shape (visually reads as "Work", "About", "Insights"), plus a "Contact" label at the far right edge of the bar (visible in the screenshot render but not resolved as separate text nodes).
- Position and alignment: Fixed/sticky-style bar spanning the full frame width at the very top, y = 0. Logo left-aligned; nav group horizontally centered-right; "Contact" right-aligned. Measured from the design.
- Width and height: Bar background ("image 4" / node `231:1278`, `231:1391`) is 1920 × 75 px. Measured from the design. Nav content group ("Frame 1", node `231:1279`) is 471.29 × 14.4 px positioned at x=596, y=27. Measured from the design.
- Grid and container behavior: Bar spans full 1920px frame width; nav-item cluster is horizontally centered within that band.
- Typography: Nav label "Services" is a vector shape (`248:411`), not editable text metadata; visually reads as a small, bold sans caption (~14–16px). Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for the remaining nav labels ("Work", "About", "Insights", "Contact") and the "PIXELOCRACY" logotype.
- Colors: Bar background is a raster PNG image (not a native Figma fill) — confirmed via design context: node `231:1391` renders as `<img>` covering the bar, meaning the bar background is a flattened image asset, not a solid fill or gradient token. Measured from the design (structure only; the image's internal colors were not sampled).
- Borders: None visibly detected in the render.
- Radius: None detected.
- Shadows: None detected.
- Spacing: Nav group begins at x=596 (roughly centered given 1920px width), with "Services" cluster (96.15px wide) followed by a 30px gap before the remaining nav vector (345.14px wide) at x=126.15 relative to the nav frame. Measured from the design.
- Images and required assets: Background bar image (`231:1391`, "image 4", raster PNG, oversized/cropped via `absolute h-[213.33%] w-[100.32%]` — indicates the source asset is larger than the bar and is being cropped/positioned, consistent with a shared site-wide header background asset). "PIXELOCRACY" wordmark logo — visually confirmed in the live Figma canvas, exact node metadata unavailable through MCP.
- Reusable components: This nav bar construction (logo left, "Services" dropdown, flattened nav-links vector, background image bar) is visually identical in structure to what would be expected as a shared site-wide header, reused across other pages of the site.
- Elements with unavailable metadata: "PIXELOCRACY" logotype, "Work"/"About"/"Insights"/"Contact" individual text nodes, dropdown behavior of "Services." All visually confirmed in the live Figma canvas only.

#### Hero / Page Intro ("About Pixelocracy")
- Exact visible structure: Centered H1 "About Pixelocracy," a subheading "Built for organisations that need more than a vendor," and a centered body paragraph describing Pixelocracy as a technology and design company.
- Position and alignment: All three text blocks are horizontally centered on the page. Heading at y=180, subheading at y=260, paragraph at y=322 (all in frame-local coordinates). Measured from the design.
- Width and height: H1 "About Pixelocracy" (node `231:1274`): 578 × 48 px at x=671, y=180. Subheading (node `231:1269`): 633 × 30 px at x=644, y=260. Paragraph (node `231:1270`): 860 × 96 px at x=530, y=322. Measured from the design.
- Grid and container behavior: All copy is centered within the 1920px frame, with the paragraph capped at 860px width for line-length control.
- Typography: H1 — Sharp Grotesk Medium, 48px/48 line-height, color black, text-centered (confirmed via design context on node `231:1274`); matches From Figma style "Desktop/H1." Subheading — sized consistent with "Desktop/H4" (Montserrat Regular, 24/30). Paragraph — Montserrat Regular, 18px/24, color black, centered (confirmed via design context on node `231:1270`); matches From Figma style "Desktop/Body."
- Colors: Heading and paragraph text: black (`#000000`, "text-black" per design context). Measured from the design.
- Borders: None.
- Radius: None.
- Shadows: None.
- Spacing: ~80px gap between heading and subheading blocks; ~62px between subheading and paragraph. Measured from the design (from y-coordinates).
- Images and required assets: None in this text block; hero images are a separate section below.
- Reusable components: Centered H1 + subhead + paragraph intro pattern is a common page-header construction likely reused on other top-level pages of the site.
- Elements with unavailable metadata: None — all three text nodes resolved cleanly in metadata.

#### Hero Image Pair
- Exact visible structure: Two side-by-side black-and-white photographs in rounded-rectangle masks: a narrower image on the left ("hero-about-01") and a wider image on the right ("aboutus"), each with a decorative bottom-edge vector (a subtle scalloped/wave overlay at the base of each image).
- Position and alignment: Left mask group (node `231:1288`) at x=180, y=498, 513 × 615 px. Right mask group (node `231:1293`) at x=715, y=498, 1025 × 615 px. Both share the same y-position, side by side with a small gap. Measured from the design.
- Width and height: Left image 512 × 615 px; right image 1025 × 684 px (clipped to the 615px mask height). Measured from the design.
- Grid and container behavior: Two-column image layout within the 1920px frame, left column narrower than right column, both bottom-aligned at y=498+615=1113.
- Typography: N/A (no text).
- Colors: Images are monochrome/black-and-white photography; no flat fills to report beyond the mask rounded-rectangle base ("Rectangle 3358").
- Borders: None detected.
- Radius: Rounded-rectangle mask corners on both images (exact radius value not retrieved; visually a moderate/soft corner radius). Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for the radius value itself.
- Shadows: None detected.
- Spacing: ~22px horizontal gap between the two image masks (715 − (180+513) = 22px). Measured from the design.
- Images and required assets: "hero-about-01 1" (office/workspace interior photo) and "aboutus 1" (overhead shot of people at a table with laptops), both black-and-white treatment. Each has an associated small decorative "Vector" shape at its base (wave/scallop divider, ~100px tall).
- Reusable components: Rounded-mask dual-image hero pattern; the wave-edge vector is a recurring decorative motif seen again at the transition into and out of the navy "Who we are" band below.
- Elements with unavailable metadata: None structurally; fine detail of the wave vector geometry not decoded.

#### Trusted-by Logo Strip
- Exact visible structure: A centered caption ("Trusted by 100+ organisations") above a horizontal row of grayscale/monochrome client logos, including recognizable marks resembling "COSMOTE," "AVIS," "hygeia," and a partially visible fifth logo.
- Position and alignment: Centered horizontally, sitting directly beneath the hero image pair, roughly at y≈1193–1444 in frame coordinates (inferred from the enclosing background asset "screencapture-thepixelocracy-about-2026-07-01-15_11_07 2," node `231:1298`, which spans x=0,y=1193, 1920×251px).
- Width and height: Enclosing asset 1920 × 251 px. Measured from the design (as a flattened image asset boundary — see note below).
- Grid and container behavior: Full-width band, logos evenly spaced in a single row.
- Typography: Caption text style not resolvable as a separate node; visually a small centered caption similar in weight/size to the "Overline" or "Body Small" style. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Colors: Logos rendered in grayscale/desaturated tone against a white background.
- Borders: None.
- Radius: None.
- Shadows: None.
- Spacing: Logos are evenly distributed across the row with consistent horizontal gaps. Visually confirmed in the live Figma canvas.
- Images and required assets: This entire strip (caption + logo row) appears to be contained within a single flattened screenshot/image asset ("screencapture-thepixelocracy-about-2026-07-01-15_11_07 2," node `231:1298`) rather than individual editable Figma text/logo layers — i.e., the caption and logos are baked into one raster image rather than existing as separate nodes.
- Reusable components: A "trusted-by" logo band is a common cross-page pattern (e.g., homepage) reusing the same style of grayscale logo strip.
- Elements with unavailable metadata: Individual logo marks and the caption text are not separately addressable node IDs — the whole strip is one image asset. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### "One team. Five disciplines. No handoffs." (Mission / Who We Are band)
- Exact visible structure: Full-bleed navy band containing a centered overline "Who we are," a centered H2 "One team. Five disciplines. No handoffs.," and two centered body paragraphs describing Pixelocracy's integrated-team model and systems-thinking approach. This band also contains the "Results, not claims" stats sub-section (documented separately below) and is edged top and bottom by wave-shaped vector dividers.
- Position and alignment: Band background (node `231:1264`, "Rectangle 3357") spans x=0, y=1476, 1920 × 1071 px, full width. All text centered within it. Measured from the design.
- Width and height: 1920 × 1071 px. Measured from the design.
- Grid and container behavior: Full-bleed band; text content constrained to an ~800–860px centered column (overline at x=897, heading at x=542 width 837, paragraphs at x=560 width 800).
- Typography: Overline "Who we are" — Sharp Grotesk Medium, 15px/20, uppercase, color `#dbe1fc`, matches From Figma style "Desktop/Overline" (confirmed via design context on node `231:1265`). H2 "One team. Five disciplines. No handoffs." — sized consistent with "Desktop/H2" (Montserrat Bold, 40/48); node `231:1276`, 837×48px, centered. Body paragraphs (nodes `231:1272`, `231:1273`) — 800×72px each, consistent with "Desktop/Body" (18/24, 3 lines).
- Colors: Band background `#071d7b` (measured from the design, via design context on node `231:1264`). Overline text `#dbe1fc` (measured from the design). Heading/body text color not independently queried for this band but visually confirmed as white against the navy background.
- Borders: None.
- Radius: None (band is a plain rectangle, not rounded, despite the "rounded-rectangle" node type label).
- Shadows: None.
- Spacing: Overline at y=1626 (frame-local), heading at y=1652, first paragraph at y=1730, second paragraph at y=1826 — roughly 26px, 78px, 96px gaps respectively. Measured from the design.
- Images and required assets: Decorative wave-shaped vector dividers at the top and bottom transition edges of the band (visually confirmed; one such vector at node `231:1327`, 1920×154px, positioned at the transition out of this section toward "The way we show up").
- Reusable components: Full-bleed dark "mission statement" band with overline + H2 + supporting copy is a pattern that may recur on other pages (e.g., homepage) with the same navy/overline treatment.
- Elements with unavailable metadata: Exact heading/body text color hex not independently confirmed (visually white, not measured directly for this specific band).

#### "Results, not claims" (Stats / Metrics band)
- Exact visible structure: A sub-band nested within the navy mission section, containing a centered overline "Results, not claims" above a horizontal row of five stat blocks, each with a large number/metric, a descriptive sentence, and a small bold category label, separated by thin vertical divider lines.
- Position and alignment: Stats row container (node `231:1301`, "Frame 3378") at x=320, y=2018, 1280 × 225 px, horizontally centered within the 1920px frame. Overline "Results, not claims" (node `231:1326`) at x=853, y=1978, centered above it. Measured from the design.
- Width and height: 1280 × 225 px overall row; each of the 5 stat cells is ~210–226px wide × 168px tall, separated by 1px-wide divider lines. Measured from the design.
- Grid and container behavior: Flex row, `justify-between`, items vertically centered, with thin vertical rule dividers between each of the 5 columns (confirmed via design context on node `231:1301`).
- Typography: Metric number (e.g., "9M," "€400M," "95%," "60%," "0") — Sharp Grotesk Medium, 32px/32, white, matches From Figma style "Desktop/H3" (confirmed via design context). Description sentence — Montserrat Regular, 18px/24, white, matches "Desktop/Body." Category label (e.g., "DIGITAL PRODUCTS," "ENGINEERING & STRATEGY," "DATA & AI") — Montserrat Bold, 16px/24, uppercase, color `#4467f6`, matches "Desktop/Body Small" with a bold override (all confirmed via design context on node `231:1301`).
- Colors: Sub-band background `#061868` (measured from the design — distinct, slightly different navy from the outer band's `#071d7b`). Category-label text `#4467f6` (measured from the design). Numbers and descriptions: white.
- Borders: None on the outer band; thin 1px vertical divider lines between stat columns (SVG line assets, e.g. node `231:1306`).
- Radius: None.
- Shadows: None.
- Spacing: 20px vertical gap between number/description/label within each stat block (confirmed via design context). ~19px horizontal padding around the row (`px-24` per design context, i.e. 24px).
- Images and required assets: Vertical divider line SVG asset reused 4 times between the 5 stat columns.
- Reusable components: This 5-column stat/metric band with divider rules and category tags is a distinct reusable "proof band" component; the category labels ("DIGITAL PRODUCTS," "ENGINEERING & STRATEGY," "DATA & AI") correspond to service-line taxonomy likely reused elsewhere (e.g., a Services page).
- Elements with unavailable metadata: None — this whole component resolved cleanly via design context.
- Stat content: 9M "Users on a platform we designed and built from scratch" (DIGITAL PRODUCTS); €400M "In yearly operational savings delivered for a national platform" (ENGINEERING & STRATEGY); 95% "Product adoption rate in month one (industry average is 20–30%)" (DIGITAL PRODUCTS); 60% "Reduction in operational costs through AI automation" (DATA & AI); 0 "Security breaches in 2 years on mission-critical infrastructure" (ENGINEERING & STRATEGY). Measured from the design.

#### "The way we show up" (How We Work — values grid)
- Exact visible structure: Overline "How we work," H2 "The way we show up," a supporting paragraph, followed by a 2×2 grid of four value cards, each with a two-digit index ("01"–"04"), a bold title, a horizontal divider line, and a description sentence. Cards alternate visually between a solid brand-blue fill (cards 01 and 04, diagonal) and a lighter/outlined treatment (cards 02 and 03).
- Position and alignment: Overline (node `231:1266`) at x=320, y=2647. H2 (node `231:1329`) at x=320, y=2673, 438×48px. Paragraph (node `231:1328`) at x=320, y=2751, 600×96px. Card grid: card 01 (node `231:1330`) at x=320,y=2927; card 02 (node `231:1342`) at x=980,y=2927; card 03 (node `231:1348`) at x=320,y=3213; card 04 (node `231:1336`) at x=980,y=3213. All measured from the design. Left-aligned heading block; 2-column, 2-row card grid.
- Width and height: Each card 620 × 260 px. Measured from the design.
- Grid and container behavior: 2-column × 2-row CSS-grid-like layout, cards spaced with a visible gutter (980 − (320+620) = 40px horizontal gap; 3213 − (2927+260) = 26px vertical gap). Measured from the design.
- Typography: Card index ("01," etc.) — Sharp Grotesk Medium, 32px/32, white, matches "Desktop/H3" (confirmed via design context on node `231:1330`). Card title (e.g., "We embed, not consult") — Montserrat Bold, 20px/24, white (confirmed via design context). Card body text — Montserrat Regular, 18px/24, white, matches "Desktop/Body" (confirmed via design context). Section H2 "The way we show up" and paragraph sized consistent with "Desktop/H2" and "Desktop/Body" respectively.
- Colors: Card 01 fill `#4467f6` (measured from the design, via design context). Cards 02/03 visually render as white/light background with a blue border rather than solid fill — visually confirmed in the live Figma canvas (alternation pattern), exact fill hex for cards 02/03 not independently queried. Card divider line color not sampled (renders white-on-blue for card 01).
- Borders: Cards 02/03 show a visible border outline in the brand blue; exact stroke width/color not independently measured — visually confirmed in the live Figma canvas.
- Radius: None detected on cards (square corners in the render).
- Shadows: Card 01 (and by the drop-shadow token pattern, likely all four cards) uses an offset drop-shadow: `6px 6px 0px #cccccc` (measured from the design, via design context on node `231:1330`) — a hard-edged, non-blurred "sticker" shadow style with a gray offset.
- Spacing: Card internal padding 40px, internal gap 20px between index and content block, and 16px gap between title/divider/description within the content block (all confirmed via design context on node `231:1330`).
- Images and required assets: None (no photography in this section, only vector divider lines within each card, e.g., "Line 297").
- Reusable components: Numbered value-card grid with index + title + divider + description is a distinct reusable "principles/values" card component; the alternating fill pattern and offset-shadow "sticker" style match the button treatment described in the CTA section below (same `#4467f6` + hard-shadow visual language).
- Elements with unavailable metadata: Exact fill/border color for cards 02 and 03 (visually white/light with blue border, not independently queried via design context).
- Card content: 01 "We embed, not consult"; 02 "We start with the outcome"; 03 "We adapt without losing rigour"; 04 "We build your independence." Measured from the design.

#### "The people behind the work" (Leadership team grid)
- Exact visible structure: Overline "The leadership team," H2 "The people behind the work," a supporting paragraph, followed by two rows of team-member cards, each with a black-and-white portrait photo, a bold name, and a role/title. Row 1 shows 3 cards (Chris Andreikos, Filippos Zakopoulos, Michael Petychakis); row 2 shows 4 cards repeating the same three people (Filippos Zakopoulos, Michael Petychakis, Chris Andreikos, Chris Andreikos again), with the row-2 cards visibly offset and one card in a taller frame with additional text height.
- Position and alignment: Overline (node `231:1267`) at x=848,y=3623. H2 (node `231:1275`) at x=663,y=3649. Paragraph (node `231:1271`) at x=659,y=3727. Row 1 cards at y=3879 (nodes `231:1354`, `231:1364`, `231:1374`, x = 480, 810, 1140). Row 2 cards at y=4369 (nodes `231:1359`, `231:1369`, `231:1379`, `231:1384`, x = 320, 647, 974, 1301). Measured from the design.
- Width and height: Each card 300 × 468 px (row 1) or 300 × 468–492 px (row 2, last card taller at 492px). Photo itself is 300 × 400 px within each card. Measured from the design.
- Grid and container behavior: Row 1 is a 3-card centered cluster; row 2 is a 4-card cluster shifted left relative to row 1, suggesting a masonry/offset grid rather than a strict fixed grid. Measured from the design.
- Typography: Name (e.g., "Chris Andreikos") — Montserrat Bold, 16px/24, black, matches "Desktop/Body Small" with bold override (confirmed via design context on node `231:1354`). Role (e.g., "General Manager") — Montserrat Regular, 16px/24, black, matches "Desktop/Body Small" (confirmed via design context).
- Colors: Name/role text: black. Photos: black-and-white treatment (`object-cover`, confirmed via design context).
- Borders: None detected.
- Radius: None detected on photo frames (square corners in the render).
- Shadows: None detected.
- Spacing: 16px gap between photo and name/role text block within each card (confirmed via design context on node `231:1354`).
- Images and required assets: Portrait photographs "christos-andreikos 1," "filippos-zakopoulos 1," "michalis-petychakis 1" (each reused twice across the two rows).
- Reusable components: Photo-card team-member component (photo + bold name + role) is a standard, reusable people-grid pattern.
- Elements with unavailable metadata: None structurally — all card and text nodes resolved; the reason for the repeated/offset second row (3 people appearing across 7 card instances) is not determinable from metadata and is reported as observed, not interpreted.

#### "We're always looking for people who think in systems." (Join Us CTA band)
- Exact visible structure: Full-bleed light-lavender band containing a centered overline "Join us," a centered H2 "We're always looking for people who think in systems.," a centered supporting paragraph, and a centered button/link "See open positions."
- Position and alignment: Band background (node `231:1268`, "Rectangle 3359") at x=-1, y=4979, 1920 × 590 px, full width. Overline (node `231:1389`) at x=921,y=5073. H2 (node `231:1300`) at x=641,y=5099, 639×96px. Paragraph (node `231:1299`) at x=560,y=5225, 800×90px. Button (node `231:1286`, "Link") at x=835,y=5385, 251×64px. All centered, measured from the design.
- Width and height: Band 1920 × 590 px. Button 251 × 64 px. Measured from the design.
- Grid and container behavior: Full-bleed band; all content in a single centered column.
- Typography: Overline "Join us" sized consistent with "Desktop/Overline." H2 sized consistent with "Desktop/H2" (40/48, 2 lines). Paragraph sized consistent with "Desktop/Body." Button label "See open positions" — Montserrat Regular, 18px/24, color `#1b1b1b`, matches "Desktop/Body" (confirmed via design context on node `231:1286`).
- Colors: Band background `#eaedff` (measured from the design, via design context on node `231:1268`). Button background: white (measured from the design). Button text `#1b1b1b`.
- Borders: None visible on the band. Button has no visible border, only a shadow (see below).
- Radius: None detected (square corners).
- Shadows: Button uses an offset drop-shadow `6px 6px 0px #4467f6` (measured from the design, via design context on node `231:1286`) — the same hard-edged "sticker" shadow language seen in the values-grid cards, here rendered in brand blue against the white button.
- Spacing: Button internal padding 40px horizontal / 20px vertical (confirmed via design context).
- Images and required assets: None (no photography in this band).
- Reusable components: This overline + H2 + paragraph + shadow-button CTA construction is a reusable "final CTA" band pattern; the button's white-fill + blue-offset-shadow style matches a site-wide primary button component.
- Elements with unavailable metadata: Exact overline/heading text color not independently queried for this band (visually confirmed as brand blue overline / black heading against the light-lavender background, consistent with the pattern established elsewhere).

#### Footer
- Exact visible structure: A large, mostly flattened footer region showing the "PIXELOCRACY" wordmark and a short tagline ("We transform the industries of the present, with the technologies of the future.") at left; a link column ("Expertise," "Work," "About," "Cookie Policy," "Privacy Policy") in the middle; a small social icon (resembling LinkedIn); an ISO 27001 security-certification badge with "EUROCERT" branding at right; and a copyright line ("Pixelocracy © 2026. All rights reserved.") at the bottom. A wave-shaped divider separates the footer from the CTA band above.
- Position and alignment: Footer background (node `231:1277`, "screencapture-thepixelocracy-2026-06-24-10_53_28 3") spans x=-1, y=5669, 1920 × 813 px, full width, running to the bottom of the frame (5669+813=6482, matching the frame's total height). The EUROCERT badge (node `231:1400`, "Group 1649") is a separately positioned overlay at x=1316, y=5794, 444.12 × 60.17 px. Measured from the design.
- Width and height: Footer band 1920 × 813 px. EUROCERT badge group 444.12 × 60.17 px (icon 60×60 + certification text 367.4×56.5). Measured from the design.
- Grid and container behavior: Full-bleed footer; content columns visually distributed left (brand/tagline), center (nav links), right (certification badge).
- Typography: Not resolvable as discrete text nodes for most footer content (wordmark, tagline, link list, copyright) — these are baked into the flattened footer image. The EUROCERT certification text ("Certified Information Security Management System EN ISO/IEC 27001:2023 Certified by EUROCERT") is a real vector node (`248:399`) but rendered as outlined vector art rather than editable text, so no bound type style is retrievable.
- Colors: Not independently sampled; footer band appears to sit on a very light background matching the page's light palette, based on the screenshot render.
- Borders: None detected.
- Radius: None detected.
- Shadows: None detected.
- Spacing: Not measurable — content is part of a flattened image.
- Images and required assets: The entire footer content area (wordmark, tagline, link list, social icon, copyright line) is contained within a single flattened screenshot/image asset ("screencapture-thepixelocracy-2026-06-24-10_53_28 3," node `231:1277`) rather than existing as individual editable layers. The only genuinely separate, addressable elements in this region are the "eurocert-logo 1" icon (node `231:1401`) and its accompanying certification vector text (node `248:399`), both nested in "Group 1649" (node `231:1400`), which sits as an overlay on top of the flattened footer image.
- Reusable components: A global site footer (brand block, link columns, legal links, copyright, certification badge) is a standard cross-page component; here it is captured as a static image reference rather than live Figma layers.
- Elements with unavailable metadata: "PIXELOCRACY" footer wordmark, tagline text, "Expertise/Work/About/Insights" link column, "Cookie Policy"/"Privacy Policy" links, social icon, and "Pixelocracy © 2026. All rights reserved." copyright line — all visually confirmed in the live Figma canvas only; exact node metadata unavailable through MCP because this entire region is a flattened image asset.

#### Floating Chat/Help Button (global overlay)
- Exact visible structure: A small circular button in brand blue fixed in the bottom-right corner of the viewport, visible in the screenshot render across the full scroll length of the page (appears anchored, not scrolling with content).
- Position and alignment: Bottom-right corner of the viewport. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Width and height: Small circular element, approximate diameter consistent with a standard floating-action-button size (visually estimated, not measured).
- Grid and container behavior: Fixed-position overlay, independent of page scroll/content flow.
- Typography: An icon (not text) is visible inside the circle; icon type not resolvable from the render at this resolution.
- Colors: Brand blue fill, consistent with the `#4467f6` accent color used elsewhere on the page (visually confirmed, not independently measured for this element).
- Borders: None detected.
- Radius: Fully circular (visually confirmed).
- Shadows: Not resolvable at this resolution.
- Spacing: N/A.
- Images and required assets: Icon glyph inside the circle — visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Reusable components: This is consistent with a site-wide floating chat/help widget that would be expected to recur identically across every page.
- Elements with unavailable metadata: The entire element — no corresponding node was returned in the metadata walk of the About Desktop frame. Visually confirmed in the live Figma canvas only.

---

### Mobile

#### Top Navigation Bar — Mobile
- Exact visible structure: Simplified header with the "PIXELOCRACY" wordmark/logo at top-left and a hamburger-menu icon (three short lines) at top-right, replacing the full inline nav-link row seen on Desktop.
- Position and alignment: Logo (node `281:3316`, "pix-logo-800 2") at x=16, y=21, 160×17px. Hamburger icon group (node `281:3317`, "Group 1672") at x=376, y=23.5, 28.5×11.5px. Measured from the design.
- Width and height: Frame total width 420px; logo and icon sit within a compact top band (~16–40px tall visible content).
- Grid and container behavior: Two-element flex row, logo left / icon right, replacing Desktop's multi-item horizontal nav — the "Services," "Work," "About," "Insights," "Contact" links are collapsed behind the hamburger icon rather than shown inline.
- Typography: No visible nav-link text on the mobile bar itself (links are presumably revealed inside the collapsed menu, not visible in this frame). Visually confirmed in the live Figma canvas.
- Colors: Not independently sampled for this frame.
- Borders: None detected.
- Radius: None detected.
- Shadows: None detected.
- Spacing: Logo starts at x=16 (16px left margin); hamburger icon at x=376 (14px from the 420px right edge, i.e. right-aligned with a small margin). Measured from the design.
- Images and required assets: Logo image asset ("pix-logo-800 2"); hamburger icon group.
- Reusable components: Same header component as Desktop, in its collapsed/mobile state (logo + hamburger vs. logo + inline nav).
- Elements with unavailable metadata: Internal contents of the hamburger menu (dropdown/drawer) are not present in this static frame's metadata.

#### Hero / Page Intro — Mobile
- Exact visible structure: Same content as Desktop — H1 "About Pixelocracy," subheading "Built for organisations that need more than a vendor," and a body paragraph — but left-aligned and stacked full-width instead of centered.
- Position and alignment: Contained in "Frame 3426" (node `281:3320`) at x=16, y=120, 388×342px, left-aligned (differs from Desktop's centered alignment). Heading sub-frame "Frame 3424" (node `281:3321`) 388×110px; paragraph sub-frame "Frame 3425" (node `281:3325`) 388×192px, offset y=150 within the parent. Measured from the design.
- Width and height: Heading text (node `281:3323`) 388×38px (shorter box height than Desktop's 48px H1 box, suggesting a reduced mobile type scale). Subheading (node `281:3324`) 388×52px. Paragraph (node `281:3326`) 388×192px. Measured from the design.
- Grid and container behavior: Single-column, full-width (388px within a 420px frame, i.e. 16px side margins) stacked block — differs from Desktop's centered 860px-max column.
- Typography: Not independently queried for exact mobile point sizes; the shorter heading box height (38px vs Desktop's 48px) visually indicates a smaller heading scale than Desktop's "H1" token. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for the specific mobile type scale/token name.
- Colors: Not independently sampled for this frame; visually consistent with Desktop's black text on white.
- Borders: None.
- Radius: None.
- Shadows: None.
- Spacing: 30px gap between heading sub-frame (ends y=110) and paragraph sub-frame (starts y=150). Measured from the design.
- Images and required assets: None in this text block.
- Reusable components: Same intro-copy component as Desktop, restyled for a single-column left-aligned mobile layout.
- Elements with unavailable metadata: Exact mobile font-size/line-height tokens (no "Mobile/H1" style definition was retrieved in this session).

#### Hero Image — Mobile
- Exact visible structure: A single black-and-white photograph (the "aboutus" image only) in a rounded mask, differing from Desktop's side-by-side two-image layout — the "hero-about-01" image is not present on Mobile.
- Position and alignment: Mask group "Mask group" (node `282:3466`) at x=16, y=532, 388×232.8px. Measured from the design.
- Width and height: 388 × 232.8px (mask), inner image "aboutus 1" 388.08 × 258.92px. Measured from the design.
- Grid and container behavior: Single full-width (388px within 420px frame) image block, replacing Desktop's two-column image pair.
- Typography: N/A.
- Colors: Black-and-white photography, same asset as Desktop's right-hand hero image.
- Borders: None detected.
- Radius: Rounded mask corners, visually confirmed, exact radius value not retrieved.
- Shadows: None detected.
- Spacing: 16px side margins (388px content within 420px frame).
- Images and required assets: "aboutus 1" image (same source asset as Desktop's right image); a small wave-shaped vector at its base (node `282:3470`).
- Reusable components: Same masked-image + wave-divider pattern as Desktop, reduced to a single image.
- Elements with unavailable metadata: None structurally for this element.

#### Trusted-by Section — Mobile
- Exact visible structure: A centered caption reading "Trusted by Greece's largest organisations" (different wording from the Desktop screenshot's "Trusted by 100+ organisations") above a logo-row image.
- Position and alignment: Caption (node `282:3471`) at x=46, y=865, 328×24px, centered within the 420px frame. Logo-row image ("image 81," node `294:5`) at x=0, y=905, 420×121px, full width. Measured from the design.
- Width and height: Caption 328×24px; logo image 420×121px. Measured from the design.
- Grid and container behavior: Caption centered above a full-bleed logo image band.
- Typography: Caption text is a real node on Mobile (unlike Desktop, where the equivalent copy is baked into a flattened image) — exact bound style/size not independently queried, but the box height (24px) is consistent with a small caption/overline-scale text.
- Colors: Not independently sampled.
- Borders: None.
- Radius: None.
- Shadows: None.
- Spacing: Caption sits ~40px above the logo image band (905−865=40, accounting for text height).
- Images and required assets: "image 81" — a flattened logo-row image (logos not individually addressable, similar to Desktop's approach for the whole strip, but here isolated only to the logos, not the caption).
- Reusable components: Same "trusted-by" pattern as Desktop, but with the caption re-exposed as live text on Mobile and different copy content ("Greece's largest organisations" vs. Desktop's "100+ organisations") — a genuine content difference between breakpoints, not just a layout difference.
- Elements with unavailable metadata: Individual logos within "image 81" (flattened image, not separate nodes).

#### Mission / "Who We Are" Band — Mobile
- Exact visible structure: Same content as Desktop — overline "Who we are," H2 "One team. Five disciplines. No handoffs.," and two body paragraphs — restacked full-width on a navy band, followed immediately by the "Results, not claims" stats block within the same enclosing background rectangle.
- Position and alignment: Band background ("Rectangle 3357," node `294:8`) at x=0, y=1126, 420×1581px, full width — notably taller relative to content than Desktop's band because the stats block is stacked vertically beneath the text rather than beside it. Overline (node `294:9`) at x=152,y=1226 (centered). H2 (node `294:10`) at x=16,y=1248, 388×68px (left-aligned, full width). Paragraphs (nodes `294:11`, `294:12`) at x=16, y=1356 and y=1500, both 388px wide. Measured from the design.
- Width and height: Band 420×1581px. Measured from the design.
- Grid and container behavior: Single-column, full-width (388px content within 420px frame) stacked layout — heading/paragraphs left-aligned (differs from Desktop's centered alignment).
- Typography: Not independently re-queried for Mobile-specific hex/point sizes; structurally the same copy and heading/body hierarchy as Desktop.
- Colors: Same navy band treatment as Desktop is visually confirmed; exact hex not independently re-measured on this Mobile node (Desktop equivalent measured as `#071d7b`).
- Borders: None.
- Radius: None.
- Shadows: None.
- Spacing: Overline-to-heading gap ~22px (1248−1226); heading-to-paragraph gap ~108px (1356−1248−68); between paragraphs ~44px (1500−1356−120... paragraph 1 box is 120 tall). Measured from the design.
- Images and required assets: None additional beyond the band background.
- Reusable components: Same mission-band component as Desktop, restacked to single column.
- Elements with unavailable metadata: Exact text colors not independently re-queried for the Mobile instance.

#### "Results, not claims" — Mobile
- Exact visible structure: Same overline and 5 stat blocks as Desktop, but stacked vertically in a single column with horizontal divider lines between each stat (instead of Desktop's horizontal row with vertical dividers).
- Position and alignment: Stats container ("Frame 3378," node `299:2`) at x=16, y=1750, 388×908px. Each stat sub-frame (e.g., "Frame 3372," node `299:3`) is 340×124px, stacked with horizontal divider lines (e.g., node `299:7`, 340px wide, 0px tall) between them. Measured from the design.
- Width and height: Container 388×908px; each stat block 340×124px. Measured from the design.
- Grid and container behavior: Single-column vertical stack, full-width dividers between each of the 5 stat entries — a clear layout inversion from Desktop's horizontal row (Desktop uses vertical divider lines between side-by-side columns; Mobile uses horizontal divider lines between stacked rows).
- Typography: Same content and apparent type hierarchy as Desktop (large metric number, description sentence, bold category label); not independently re-queried for Mobile-specific values.
- Colors: Same navy background and brand-blue category-label color visually confirmed as continuing from Desktop; not independently re-measured on this Mobile node.
- Borders: Horizontal divider lines between stat blocks (vs. Desktop's vertical dividers).
- Radius: None.
- Shadows: None.
- Spacing: ~30px gap between the bottom of one stat block and the divider line before the next (e.g., 208−178=30 for the first gap). Measured from the design.
- Images and required assets: Horizontal divider line assets (reused per stat block).
- Reusable components: Same stat/metric component as Desktop, in a vertically-stacked responsive configuration.
- Elements with unavailable metadata: None structurally — the section resolved fully in metadata.

#### "The way we show up" — Mobile
- Exact visible structure: Same overline, H2, and paragraph as Desktop, followed by value cards stacked full-width; the render shows only card "01" ("We embed, not consult") with a small dot-pagination indicator (4 dots) beneath the card cluster, suggesting the four value cards are presented as a horizontally swipeable carousel on Mobile rather than Desktop's static 2×2 grid.
- Position and alignment: Overline (node `302:32`) at x=16,y=2838. H2 (node `302:34`) at x=16,y=2860, 307×34px. Paragraph (node `302:33`) at x=16,y=2934, 388×144px. Card "01" (node `302:39`, "Overlay+Border+OverlayBlur") at x=16,y=3148, 388×264px. Dot-pagination group (node `302:35`, "Frame 3449") at x=175,y=3432, 70×10px, containing 4 ellipse nodes. Measured from the design.
- Width and height: Card 388×264px (vs. Desktop's 620×260px — Mobile card is narrower/full-width and slightly taller). Dot-pagination row 70×10px with 4 dots of 10px diameter each, 20px apart. Measured from the design.
- Grid and container behavior: Single-column, full-width card layout with carousel/dot-pagination navigation — a clear structural difference from Desktop's fixed 2×2 card grid with no pagination controls.
- Typography: Same content hierarchy as Desktop (index number, bold title, divider, description); not independently re-queried for Mobile-specific point sizes on this pass.
- Colors: Same brand-blue card-01 treatment visually confirmed as continuing from Desktop; not independently re-measured on this Mobile node.
- Borders: Same pattern as Desktop (alternating filled/outlined cards) is expected but only card "01" is present in this frame's metadata at this scroll position.
- Radius: None detected.
- Shadows: Visually consistent with Desktop's offset "sticker" shadow style; not independently re-measured for this Mobile node.
- Spacing: Card padding visually similar to Desktop (30px inset elements at x=30,y=30 for the index, per metadata coordinates within node `302:39`).
- Images and required assets: None beyond internal divider line.
- Reusable components: Same numbered value-card component as Desktop, now paired with a dot-pagination carousel control that has no counterpart visible in the Desktop metadata.
- Elements with unavailable metadata: Cards "02," "03," "04" are not present as separate nodes in this Mobile metadata pull at this scroll position — only card "01" and the pagination dots were returned, even though the dot indicator implies 4 total slides. Visually confirmed in the live Figma canvas that a carousel mechanism exists; exact node metadata for the other 3 cards unavailable through MCP in this pass.

#### "The people behind the work" — Mobile
- Exact visible structure: Overline "The leadership team," H2 "The people behind the work," supporting paragraph, followed by a first row of 3 large team-member cards (Chris Andreikos, Filippos Zakopoulos, Michael Petychakis) stacked vertically full-width, and then a second, visually distinct row of smaller side-by-side cards (Chris Andreikos, Filippos Zakopoulos again) further down the frame — mirroring Desktop's repeated-card pattern but in a different arrangement.
- Position and alignment: Overline (node `302:48`) at x=106,y=3542 (centered). H2 (node `302:50`) at x=16,y=3564, 388×68px. Paragraph (node `302:49`) at x=16,y=3672, 388×72px. Large cards (nodes `302:51`, `302:56`, `302:62`) at x=60, y=3814/4304/4800, each 300×460–466px, horizontally centered within the 420px frame (60px margins each side). Smaller cards (nodes `302:67`, `302:72`) at x=16 and x=236, y=5336, each 200×327px, side by side. Measured from the design.
- Width and height: Large cards 300×460–466px (photo 300×400px). Small cards 200×327px (photo 200×267px). Measured from the design.
- Grid and container behavior: Large cards are stacked vertically, one per row, centered. Small cards appear in a 2-across row much further down the frame (y=5336) — a large vertical gap (5336−(4800+466)=70px only, so actually fairly close) between the last large card and the small-card pair, suggesting these may represent an additional/alternate grouping rather than a simple continuation.
- Typography: Name — Montserrat Bold, 16px, black (consistent with Desktop's "Desktop/Body Small" bold treatment). Role — Montserrat Regular, 16px, black. Not independently re-measured for exact hex on Mobile but visually and structurally identical to Desktop's confirmed values.
- Colors: Black text, black-and-white photography — consistent with Desktop.
- Borders: None detected.
- Radius: None detected on photo frames.
- Shadows: None detected.
- Spacing: 10px gap between photo and text block in small cards (277 vs. photo height 267); similar proportional gap in large cards.
- Images and required assets: Same three portrait photographs reused as on Desktop ("christos-andreikos 1," "filippos-zakopoulos 1," "michalis-petychakis 1"), each appearing twice.
- Reusable components: Same team-card component as Desktop, restacked into a single-column arrangement for the primary 3 cards, with a secondary smaller 2-card row lower on the page whose relationship to the primary row (e.g., duplicate/carousel/alternate breakpoint state) is not determinable from metadata alone.
- Elements with unavailable metadata: The relationship/purpose of the second smaller card pair relative to the first large-card row is not resolvable from available metadata; reported as visually observed only.

#### "We're always looking for people who think in systems." — Mobile
- Exact visible structure: Same content as Desktop — overline "Join us," H2, supporting paragraph, and "See open positions" button — restacked full-width and left/center-aligned per mobile conventions.
- Position and alignment: Band background ("Rectangle 3359," node `343:98`) at x=0, y=5763, 420×598px, full width. Overline (node `343:103`) at x=171,y=5863 (centered). H2 (node `343:102`) at x=16,y=5885, 388×102px. Paragraph (node `343:101`) at x=16,y=6027, 388×130px. Button "Link" (node `343:99`) at x=103,y=6197, 215×64px, horizontally centered. Measured from the design.
- Width and height: Band 420×598px. Button 215×64px (narrower than Desktop's 251×64px, reflecting shorter available width). Measured from the design.
- Grid and container behavior: Single-column, full-width (388px content within 420px frame) stacked layout; button centered.
- Typography: Same content and apparent hierarchy as Desktop's CTA band; not independently re-measured for Mobile-specific hex on this pass, but the same layer name ("Rectangle 3359") as the Desktop CTA background strongly indicates a shared/reused background token.
- Colors: Visually consistent with Desktop's light-lavender CTA band; not independently re-measured on this Mobile node (Desktop equivalent measured as `#eaedff`).
- Borders: None.
- Radius: None.
- Shadows: Button shadow style visually consistent with Desktop's offset "sticker" shadow; not independently re-measured for this Mobile node.
- Spacing: H2-to-paragraph gap ~40px (6027−5885−102); paragraph-to-button gap ~40px (6197−6027−130). Measured from the design.
- Images and required assets: None additional.
- Reusable components: Same CTA band component as Desktop, reused with a narrower button and full-width stacked text.
- Elements with unavailable metadata: Exact text/background color hex not independently re-queried for this Mobile instance.

#### Footer — Mobile
- Exact visible structure: A large flattened footer image, matching Desktop's approach of baking the wordmark, tagline, link list, social icon, and copyright into a single raster asset.
- Position and alignment: Footer image ("image 80," node `281:3465`) at x=0, y=6511, 420×574px, running to the bottom of the 7085px-tall frame (6511+574=7085). Measured from the design.
- Width and height: 420 × 574px. Measured from the design.
- Grid and container behavior: Full-bleed footer image at the base of the page.
- Typography: Not resolvable — content is baked into the image, same limitation as Desktop.
- Colors: Not independently sampled.
- Borders: None detected.
- Radius: None detected.
- Shadows: None detected.
- Spacing: Not measurable (flattened image).
- Images and required assets: "image 80" — flattened footer screenshot asset, structurally equivalent to Desktop's "screencapture-thepixelocracy-2026-06-24-10_53_28 3" but without a separately-overlaid EUROCERT certification badge node visible in this Mobile metadata pull (unlike Desktop, where the badge is a distinct overlay group).
- Reusable components: Same global footer component as Desktop, rendered as a flattened image asset in both breakpoints.
- Elements with unavailable metadata: All footer content (wordmark, tagline, links, social icon, copyright, and any certification badge) — visually confirmed in the live Figma canvas only; exact node metadata unavailable through MCP because the footer is a flattened image on Mobile as well as Desktop.

#### Floating Chat/Help Button — Mobile
- Exact visible structure: Same fixed-position circular brand-blue button in the bottom-right corner, visible in the Mobile screenshot render at the same relative position as on Desktop.
- Position and alignment: Bottom-right corner of the viewport. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Width and height: Small circular element, visually similar proportion to the Desktop version.
- Grid and container behavior: Fixed-position overlay, independent of scroll.
- Typography: Icon-only, not text.
- Colors: Brand blue, visually consistent with Desktop.
- Borders: None detected.
- Radius: Fully circular.
- Shadows: Not resolvable at this resolution.
- Spacing: N/A.
- Images and required assets: Icon glyph — visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Reusable components: Same global floating chat/help widget as Desktop.
- Elements with unavailable metadata: The entire element — no corresponding node was returned in the metadata walk of the About Mobile frame.

## Contact

### Desktop

#### Navigation Bar
- Exact visible structure: Logo mark on the far left, a horizontal primary‑nav cluster left‑of‑center ("Home", "Services ▾", "Work", "About", "Insights"), and an isolated "Contact" label at the far right (current‑page item, rendered in black while the rest of the nav renders in a blue tone in the screenshot).
- Position and alignment: Logo placeholder "pix-logo-800 1" (id `231:1041`) x=329, y=27, width=203, height=21 (Measured from the design.). Nav cluster "Frame 3387" (`248:383`) x=596, y=27, width=445.96, height=18.36, containing a single flattened vector `248:384` of the same bounds (Measured from the design.). "Contact" nav item is a flattened vector `248:406` x=1524.9, y=28.8, width=74.8, height=14.4 (Measured from the design.).
- Width and height: Nav row occupies the top ~46px of the 1920×2373 frame (y=27 to ~41).
- Grid and container behavior: Logo and "Contact" sit at the outer edges; the nav cluster is a single flattened vector rather than individual text nodes (background is continuous with the hero section, no separate nav bar fill).
- Typography: The nav cluster and "Contact" label are vector shapes (converted from text to outlines) — no text-node/style binding is retrievable for them via metadata. Visible letterforms are consistent with the frame's Montserrat body styles by eye only.
- Colors: Not retrievable — these nodes are vectors with no fill data returned by `get_metadata`. Visually the nav cluster reads blue and "Contact" reads near-black.
- Borders: None visible.
- Radius: N/A.
- Shadows: None visible.
- Spacing: Gap between "Insights" (end of nav cluster ≈ x=1042) and "Contact" (x=1524.9) is roughly 483px (Measured from the design.).
- Images and required assets: Logo asset "pix-logo-800 1" (rounded-rectangle placeholder in metadata; actual logo mark visually confirmed in the render).
- Reusable components: Nav bar pattern (logo left, links center, "Contact"/CTA right) is a repeating site pattern referenced elsewhere in the file.
- Elements with unavailable metadata: The individual nav labels ("Home", "Services ▾", "Work", "About", "Insights") are not separately retrievable — the whole cluster is a single flattened vector node `248:384`. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Hero / Intro Heading
- Exact visible structure: Large heading "Start a conversation" above a two-line supporting paragraph, both horizontally centered, sitting on a pale lavender background with a decorative wave shape beneath.
- Position and alignment: Heading text `231:969` x=630, y=180, width=660, height=48 (Measured from the design.) — centered (630+660/2=960=frame center). Paragraph text `231:967` x=530, y=260, width=860, height=48 (Measured from the design.) — also centered (530+860/2=960).
- Width and height: Heading box 660×48; paragraph box 860×48 (two lines).
- Grid and container behavior: Both elements centered on the 1920px-wide frame; content sits above the wave divider vector `231:964` (x=0, y=664, width=1920, height=669.5) which forms the curved lower edge of the tinted hero/form zone (Measured from the design.).
- Typography: Frame's bound style set includes `Desktop/H1` = Sharp Grotesk, Medium 25, 48px, weight 500, line-height 48 (From Figma style.) — visually matches the heading. `Desktop/Body` = Montserrat Regular 18px, weight 400, line-height 24 (From Figma style.) — visually matches the paragraph.
- Colors: Prior lookup found a bound color variable named `Text` = `#000826` on this frame (From Figma style. — reported per known prior finding; independent `get_variable_defs` calls on node `231:963` in this session returned only the five typography Font variables and did not surface a color variable, so the `Text`/`#000826` binding could not be independently re-confirmed in this session). Background is a pale lavender tone, exact hex not retrievable via MCP.
- Borders: None.
- Radius: N/A.
- Shadows: None visible.
- Spacing: 80px vertical gap between end of heading (y=228) and start of paragraph (y=260) approximately (Measured from the design.).
- Images and required assets: None beyond the background wave vector.
- Reusable components: Wave-shaped section background is a recurring decorative device seen elsewhere in the file.
- Elements with unavailable metadata: None beyond styling detail noted above.

#### Contact Form + "What Happens Next" Panel
- Exact visible structure: A single bordered card split into two panels — left panel: contact form (Full Name*, Your Email*, Phone Number, Subject, Your Message textarea, "I'm not a robot" reCAPTCHA widget, "Send Message" button, "Or drop us a message via email." line with an inline "email" hyperlink); right panel: "What happens next" heading, a 4-item bulleted list, a divider, and a closing paragraph.
- Position and alignment: Outer card "Rectangle 3360" (`231:983`) x=320, y=356, width=1280, height=651 (Measured from the design.) — centered with 320px side margins ((1920-1280)/2=320). Left panel background "Rectangle 3364" (`231:966`) x=320, y=356, width=742, height=651. Right panel background "Rectangle 3363" (`231:965`) x=1062, y=356, width=538, height=651. Vertical divider "Line 311" (`231:1021`) at x=1062, height=651, separating the two panels (Measured from the design.).
- Width and height: Card 1280×651 total; left panel 742×651; right panel 538×651.
- Grid and container behavior: Two-column split within a single rounded, bordered card; right column has a tinted (light lavender) background versus the left column's plain background.
- Typography: "What happens next" heading text `231:1023` (0,0 within its 418×480 frame `231:1022`, at abs x=1122, y=416); list items (`231:1027`, `231:1030`, `231:1033`, `231:1036`) each 390.13px wide text blocks spaced 72px apart vertically (Measured from the design.); closing paragraph `231:1038` at y=408 (relative), width=418, height=72. These sizes are consistent with `Desktop/Body` (18px/24 line-height, From Figma style.) for list items and closing paragraph, and a smaller heading style for "What happens next" (visually ~20px bold, consistent with `Desktop/H5` 20px in scale though H5 is defined as Regular weight — the rendered heading appears bold, so the exact style binding for this specific text node could not be confirmed, only the frame's available style set).
- Colors: Right panel background reads as light lavender in the render; bullets ("Ellipse 1", 14×14, at `231:1026/1029/1032/1035`) read solid blue; divider line `231:1037` reads pale gray. Exact hex values not retrievable via MCP (no fill data returned by `get_metadata`); the "Text" `#000826` variable applies per the prior finding noted above.
- Borders: Outer card `231:983` renders with a visible thin border/outline in the screenshot; exact border color/weight not retrievable via MCP.
- Radius: Card, both panel backgrounds, and the "Send Message" button are `rounded-rectangle` node types (rounded corners confirmed by node type), but exact corner-radius values are not returned by `get_metadata`.
- Shadows: None clearly visible in the render.
- Spacing: List items spaced 72px apart (`y=0, 72, 144, 216` inside `Frame 3385`, `231:1024`) (Measured from the design.); divider `231:1037` at y=368; closing paragraph at y=408.
- Images and required assets: A "Mask group" node (`231:1018`, x=380, y=416, width=622, height=375) contains a rounded-rectangle (`231:1019`) and an embedded raster image asset named "screencapture-thepixelocracy-contact-2026-07-02-12_14_36 2" (`231:1020`, oversized at 1920×2817, clipped to the mask window). This node's metadata bounding box overlaps the region where the render shows the "Full Name/Your Email/Phone Number/Subject/Your Message" form fields — the individual field boxes and labels themselves have no separate node entries in `get_metadata` output.
- Reusable components: Form field styling (bordered rounded input boxes with placeholder text), the reCAPTCHA widget, and the solid-blue rounded "Send Message" button (`231:1039`/`231:1040`, x=380, y=835, width=195, height=64) (Measured from the design.) are patterns expected to reuse elsewhere in the site (e.g., other form/CTA instances).
- Elements with unavailable metadata: The individual form fields (Full Name*, Your Email*, Phone Number, Subject, Your Message textarea) and the reCAPTCHA checkbox widget. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Find Us Section
- Exact visible structure: Centered "Find us" heading above a tinted, bordered info bar split into three columns: Location, Email, Social — each with a small icon, an uppercase label, and two lines of supporting text.
- Position and alignment: Heading `231:1017` x=883, y=1147, width=154, height=48 (Measured from the design.) — centered (883+154/2=960). Info bar "Frame 3378" (`231:984`) x=320, y=1237, width=1280, height=183 (Measured from the design.) — same 320px side margins as the form card above.
- Width and height: Info bar 1280×183; each column ~318–347px wide.
- Grid and container behavior: Three equal-ish columns separated by two vertical divider lines ("Line 310" `231:994` at x=417 relative; "Line 309" `231:1004` at x=882 relative), each spanning the full 183px height.
- Typography: Heading size/box (154×48) is consistent with `Desktop/H2` (Montserrat Bold, 40px, line-height 48, From Figma style.). Column labels ("LOCATION", "EMAIL", "SOCIAL") and body copy ("Evristheos 2 Athens, Greece", "Working with clients across Europe", "hello@thepixelocracy.com", "Usually responds within 1 business day", "LinkedIn", "Follow for updates and new work") match the frame's `Desktop/Body Small` (16px/24, From Figma style.) by size.
- Colors: Info bar background reads light lavender in the render; column labels read blue/muted-blue; "LinkedIn" renders as a hyperlink-blue text. Exact hex values not retrievable via MCP.
- Borders: Info bar renders with a visible border/outline in the screenshot; exact color/weight not retrievable via MCP.
- Radius: Info bar background is a `rounded-rectangle`-family container; exact radius value not returned by `get_metadata`.
- Shadows: None clearly visible.
- Spacing: Each column's header-to-body gap is 34px (e.g. `Frame 3383` at y=0, `Frame 3384` at y=34) (Measured from the design.); two body lines within each column are separated by 29px (y=0 and y=29).
- Images and required assets: Three icons — map-pin ("Group 1643", `231:987`, 18×22), envelope ("Group 1645", `231:997`, 20×16), and LinkedIn "in" glyph ("Group 1646", `231:1007`, 24×24) (Measured from the design., bounding boxes only — internal vector paths not itemized).
- Reusable components: Icon + uppercase-label + two-line-body pattern is a repeating "info card" component structure.
- Elements with unavailable metadata: Internal vector paths of the three icons are grouped but not individually broken out in `get_metadata`.

#### Footer
- Exact visible structure: Full-width footer band containing (top to bottom / left to right): "PIXELOCRACY" wordmark logo, tagline ("We transform the industries of the present, with the technologies of the future"), a vertical link list ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), a LinkedIn icon, an EuroCert certification badge with three lines of certification text, a faint wavy divider line, a bottom-left copyright line ("Pixelocracy © 2026, All rights reserved."), and a circular blue "scroll to top" button at bottom-right.
- Position and alignment: Footer background rounded-rectangle "screencapture-thepixelocracy-2026-06-24-10_53_28 3" (`231:970`) x=-1, y=1560, width=1920, height=813 (Measured from the design.) — spans to the frame's bottom edge (1560+813=2373). EuroCert badge group "Group 1649" (`231:971`) x=1317, y=1687, width=444.12, height=60.17, containing badge icon "eurocert-logo 1" (`231:972`, 60×60 at x=1317, y=1687) and certification text vector `248:397` (x=1393.7, y=1690.6, width=367.4, height=56.5) (Measured from the design.) — positioned right-of-center within the footer band.
- Width and height: Footer band 1920×813.
- Grid and container behavior: Wordmark/tagline block left-aligned; link list center-left; EuroCert badge right side; copyright bottom-left; scroll-to-top button bottom-right corner (per screenshot).
- Typography: Not individually retrievable for footer text (wordmark, tagline, links, copyright) — only the EuroCert badge text vector has a node entry, and it is a flattened vector (no text-style binding retrievable).
- Colors: "PIXELOCRACY" wordmark reads blue in the render; link list reads dark navy/near-black; body/tagline reads dark. Exact hex values not retrievable via MCP.
- Borders: None clearly visible other than the faint wavy divider above the copyright row.
- Radius: N/A for footer text; EuroCert badge icon appears as a small rounded square.
- Shadows: None visible.
- Spacing: Not individually measurable beyond the overall footer band bounds, since most footer elements lack node metadata.
- Images and required assets: Footer background is named as a "screencapture" image asset in the layer tree, suggesting the footer visual may be sourced from/reference a captured screenshot of the live site rather than discrete vector/text layers; EuroCert badge icon asset ("eurocert-logo 1").
- Reusable components: Footer link-list and wordmark/tagline pattern, and the EuroCert badge, are expected to repeat identically across other pages of the site.
- Elements with unavailable metadata: "PIXELOCRACY" footer wordmark, tagline text, link list ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), LinkedIn icon, wavy divider line, copyright text, and the circular scroll-to-top button. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

---

### Mobile

#### Navigation Bar — Mobile
- Exact visible structure: Logo on the left, a hamburger-style menu icon (stacked lines) on the right — differs from Desktop's inline text-link nav, which is collapsed to a single menu icon on Mobile.
- Position and alignment: Logo "pix-logo-800 2" (`343:5`) x=16, y=21, width=160, height=17 (Measured from the design.). Menu icon "Group 1672" (`343:6`) x=376, y=23.5, width=28.5, height=11.5 (Measured from the design.) — right-aligned near the frame's right edge (420px wide frame).
- Width and height: Nav row occupies roughly the top 21–35px.
- Grid and container behavior: 16px left margin for the logo mirrors the Desktop pattern of consistent side margins; the nav cluster of five text links seen on Desktop is not present as separate elements on Mobile — replaced by the single menu icon.
- Typography: No text-node metadata for nav on Mobile (logo and icon are graphical elements only).
- Colors: Not retrievable via MCP; logo reads blue, menu icon reads dark, matching Desktop's palette by eye.
- Borders / Radius / Shadows: None visible.
- Spacing: 16px left margin, ~16px right margin (376+28.5=404.5, frame width 420) (Measured from the design.).
- Images and required assets: Logo mark, hamburger icon.
- Reusable components: Collapsed hamburger nav is the Mobile equivalent of the Desktop link-cluster nav pattern.
- Elements with unavailable metadata: None additional beyond icon internal paths.

#### Hero / Intro Heading — Mobile
- Exact visible structure: Same copy as Desktop ("Start a conversation" heading + supporting paragraph) but left-aligned instead of centered, and stacked with a larger vertical footprint due to text wrapping at narrow width.
- Position and alignment: Heading `343:106` x=16, y=121, width=388, height=76 (Measured from the design.) — left-aligned at the 16px margin (differs from Desktop's centered alignment). Paragraph `343:105` x=16, y=229, width=388, height=96 (Measured from the design.) — also left-aligned, wraps to more lines (height 96 vs Desktop's 48).
- Width and height: Heading box 388×76 (vs Desktop 660×48); paragraph box 388×96 (vs Desktop 860×48).
- Grid and container behavior: Full content width is 388px within the 420px frame (16px margins each side), versus Desktop's 1280px content width within 1920px (320px margins) — same margin-based centering logic, different alignment (left vs center) for this section's text.
- Typography: Frame's bound style set includes `Mobile/H1 Mobile` = Sharp Grotesk, Medium 25, 30px, weight 500, line-height 38 (From Figma style.) for the heading, and `Mobile/Body Mobile` = Montserrat Regular 16px, weight 400, line-height 24 (From Figma style.) for the paragraph — both reduced from the Desktop equivalents (H1 48px, Body 18px).
- Colors: Same as Desktop by visual appearance; exact hex not retrievable via MCP.
- Borders / Radius / Shadows: None.
- Spacing: Heading-to-paragraph vertical gap reduced relative to Desktop given the taller wrapped heading (y=121→229 vs Desktop y=180→260).
- Images and required assets: Decorative wave vector "Vector" (`343:104`) x=0, y=409, width=420, height=408.5 (Measured from the design.) — Mobile equivalent of Desktop's wave `231:964`, repositioned lower to accommodate stacked content.
- Reusable components: Same wave-background device as Desktop, resized/repositioned for the narrower viewport.
- Elements with unavailable metadata: None additional.

#### Contact Form Section — Mobile
- Exact visible structure: Same field set as Desktop (Full Name*, Your Email*, Phone Number, Subject, Your Message textarea, reCAPTCHA widget, submit button, "Or drop us a message via email." line) but stacked in a single full-width column, and the button label reads "Submit Message" on Mobile versus "Send Message" on Desktop (per the rendered screenshots).
- Position and alignment: Form container "image 82" (`343:108`) x=16, y=373, width=388, height=619 (Measured from the design.) — full-width single-column card (vs Desktop's left-half of a two-column card).
- Width and height: 388×619, within the 420px-wide frame (16px margins).
- Grid and container behavior: Single-column stack; all fields full width (no side-by-side Full Name/Email pairing as seen on Desktop, per the Mobile screenshot render).
- Typography: Field labels/placeholder text sized consistent with `Mobile/Body Small Mobile` (14px/24, From Figma style.) or `Mobile/Body Mobile` (16px/24) by visual scale; not individually bound per node in retrieved metadata.
- Colors: Same blue submit-button fill and bordered white field styling as Desktop by visual appearance; exact hex not retrievable via MCP.
- Borders: Card and fields render with visible thin borders in the screenshot, consistent with Desktop.
- Radius: Rounded corners on card and fields, consistent with Desktop; exact radius values not returned by `get_metadata`.
- Shadows: None clearly visible.
- Spacing: Not individually measurable per field since fields are not separate metadata nodes.
- Images and required assets: Same reCAPTCHA widget as Desktop.
- Reusable components: Same form-field and button component pattern as Desktop, restacked into a single column and using the button label "Submit Message" instead of "Send Message" (a wording difference between the two frames, per the rendered screenshots).
- Elements with unavailable metadata: All individual form fields, labels, the reCAPTCHA widget, and the submit button. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### "What Happens Next" Panel — Mobile
- Exact visible structure: Same heading, 4-item bulleted list, divider, and closing paragraph as Desktop, but presented as its own full-width card stacked BELOW the form card rather than beside it in a two-column layout.
- Position and alignment: Panel container "Rectangle 3363" (`343:110`) x=16, y=991, width=388, height=554 (Measured from the design.) — directly below the form container (ends at y=992). Content frame "Frame 3386" (`343:111`) x=46, y=1021, width=328, height=474 (Measured from the design.).
- Width and height: Panel 388×554 (vs Desktop's 538×651 side panel); content column 328px wide (vs Desktop's 418px).
- Grid and container behavior: Full-width single card stacked in the vertical flow (Desktop places this as the right column of a two-column card at the same vertical position as the form).
- Typography: List items and closing paragraph text sized consistent with `Mobile/Body Mobile` (16px/24, From Figma style.); heading consistent with a Mobile heading style by visual scale.
- Colors: Same light-lavender tinted background and blue bullet dots as Desktop by visual appearance.
- Borders: Card renders with a visible border, consistent with Desktop.
- Radius: Rounded-rectangle container, consistent with Desktop; exact radius not returned by metadata.
- Shadows: None visible.
- Spacing: List items spaced 72px apart (y=0, 72, 144, 216 within `Frame 3385`, `343:113`), identical vertical rhythm to Desktop (Measured from the design.). Divider "Line 312" (`343:126`) at y=348; closing paragraph at y=378, height=96 (taller than Desktop's 72 due to text wrap at narrower width).
- Images and required assets: None beyond the ellipse bullets (14×14 each, `343:115/118/121/124`).
- Reusable components: Identical bullet-list pattern to Desktop, same 4 copy items, restacked below the form instead of beside it.
- Elements with unavailable metadata: None additional beyond icon/bullet internal paths.

#### Find Us Section — Mobile
- Exact visible structure: Centered "Find us" heading above a tinted, bordered info card containing the same three info blocks (Location, Email, Social) as Desktop, but stacked vertically as three rows separated by horizontal divider lines instead of three columns separated by vertical lines.
- Position and alignment: Heading `343:128` x=156, y=1645, width=108, height=34 (Measured from the design.) — centered (156+108/2=210=420/2). Info card "Frame 3378" (`343:129`) x=16, y=1719, width=388, height=481 (Measured from the design.).
- Width and height: Heading box 108×34 (vs Desktop 154×48); info card 388×481 (vs Desktop 1280×183 — Mobile is much taller/narrower due to vertical stacking).
- Grid and container behavior: Three rows stacked vertically inside the card (Row 1 "Frame 3372" `343:130` at y=30 relative; Row 2 "Frame 3378" `343:140` at y=197 relative; Row 3 "Frame 3379" `343:150` at y=364 relative), each 328×87, separated by full-width horizontal dividers "Line 310" (`343:139`, y=157 relative, width=328) and "Line 309" (`343:149`, y=324 relative, width=328) — confirms the column-to-row layout change from Desktop, where the equivalent lines run vertically instead (Measured from the design.).
- Typography: Heading size/box (108×34) is consistent with the frame's `Mobile/Η2 Mobile` style (Montserrat Bold, 28px, line-height 34, From Figma style.) — reduced from Desktop's H2 (40px/48). Labels and body copy sized consistent with `Mobile/Body Small Mobile` (14px/24) or `Mobile/Body Mobile` (16px/24) by visual scale.
- Colors: Same light-lavender background, blue labels, and blue "LinkedIn" hyperlink text as Desktop by visual appearance.
- Borders: Card renders with a visible border, consistent with Desktop.
- Radius: Rounded-rectangle container, consistent with Desktop.
- Shadows: None visible.
- Spacing: Row-to-row spacing follows the 167px row pitch (30→197→364, each row 87 tall plus divider gap) (Measured from the design.).
- Images and required assets: Same three icons as Desktop — map-pin ("Group 1643", `343:132`, 18×22), envelope ("Group 1645", `343:142`, 20×16), LinkedIn "in" glyph ("Group 1646", `343:152`, 20×20, note: slightly different bounding box than Desktop's 24×24) (Measured from the design.).
- Reusable components: Same icon+label+body pattern as Desktop, restacked from a 3-column to a 3-row layout.
- Elements with unavailable metadata: Internal icon vector paths not itemized, consistent with Desktop.

#### Footer — Mobile
- Exact visible structure: Same content set as the Desktop footer — "PIXELOCRACY" wordmark, tagline, vertical link list ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), LinkedIn icon, decorative dot-pattern texture, copyright line, and circular blue scroll-to-top button — all restacked into a single full-width column. The EuroCert certification badge visible in the Desktop footer render is not visible within the captured Mobile screenshot render, and no corresponding node was found in the Mobile frame's `get_metadata` output.
- Position and alignment: Footer background rounded-rectangle "image 80" (`343:15`) x=0, y=2350, width=420, height=574 (Measured from the design.) — spans to the frame's bottom edge (2350+574=2924).
- Width and height: Footer band 420×574.
- Grid and container behavior: Single-column vertical stack (wordmark → tagline → link list → LinkedIn icon → copyright/scroll-to-top), versus Desktop's multi-column layout (wordmark/tagline block, link list, EuroCert badge side by side).
- Typography: Not individually retrievable — no footer text nodes returned by `get_metadata` for this frame.
- Colors: Same blue wordmark and dark navy link-list text as Desktop by visual appearance; a visible dot-grid texture pattern appears more prominent in the Mobile footer render than in the Desktop footer render.
- Borders / Radius: N/A for text elements.
- Shadows: None visible.
- Spacing: Not individually measurable — footer content lacks node-level metadata.
- Images and required assets: Footer background named as an image asset ("image 80"), consistent with the Desktop pattern of a raster/screencapture-style footer background.
- Reusable components: Same footer content pattern as Desktop (wordmark, tagline, link list, social icon, copyright, scroll-to-top button), restacked for the narrow viewport.
- Elements with unavailable metadata: "PIXELOCRACY" wordmark, tagline text, link list, LinkedIn icon, dot-pattern texture, copyright text, and scroll-to-top button. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP. The EuroCert certification badge present on Desktop is not visually confirmed in the Mobile screenshot render and has no corresponding metadata node in this frame.

## Blog / Insights

### Desktop

#### Top Navigation Bar
- Exact visible structure: Left-aligned "PIXELOCRACY" wordmark logo in brand blue, followed by a horizontal text nav row; a "Contact" label sits at the far right edge of the bar.
- Position and alignment: Full-width bar pinned to the top of the frame, content vertically centered within the bar.
- Width and height: Bar (node `231:1593`, "image 4") — Measured from the design: x=0, y=0, width=1920, height=75.
- Grid and container behavior: Logo left-aligned at the container's left inset; nav item cluster centered-left; "Contact" right-aligned at the container's right inset. Full-bleed width, no visible max-width constraint on the bar itself.
- Typography: Logo is a wordmark image/vector, not text (see below). Nav items and "Contact" are visually confirmed as short text labels; no bound style name was retrievable for the exact nav-label node used in the composited render.
- Colors: Logo renders in brand blue. Nav item text and "Contact" render in dark near-black. Bar background is white/transparent. Visually confirmed in the live Figma canvas; exact hex not retrieved through MCP for this specific text node.
- Borders: None visible on the bar itself. "Contact" is visually confirmed in the live Figma canvas as a right-aligned label; exact node metadata unavailable through MCP, so border/pill treatment on "Contact" cannot be confirmed from metadata.
- Radius: Not applicable to the bar; not determinable for "Contact" without metadata.
- Shadows: None visible.
- Spacing: Logo begins at x≈320 (aligned to the page's 320px side inset used elsewhere on this frame); nav cluster begins at x≈596 (node `248:386` frame position, Measured from the design: x=596, y=27, width=445.96, height=18.36).
- Images and required assets: Wordmark/logo asset (image or vector, not decomposed by metadata).
- Reusable components: This is the same global site header pattern that appears across other pages in this file (logo + horizontal nav + Contact), not unique to the Blog page.
- Elements with unavailable metadata: A rendered, isolated screenshot of the full-width bar node (`231:1593`) shows composited nav text reading **"Home / Expertise / Work / About"** plus **"Contact"** at the far right — Visually confirmed in the live Figma canvas. Separately, the metadata tree contains a sibling node `248:386` ("Frame 3417") holding a single flattened `vector` node (`248:387`, name "Vector") at the same page region; rendering that vector node in isolation shows text reading "Home / Services ▾ / Work / About / Insights" (with a dropdown chevron after "Services"). Both are present in the file; the composited full-bar screenshot is the version actually visible on the canvas at this frame's current state. Exact node-level decomposition of the individual nav words (as separate text nodes) is unavailable through MCP for either version.

#### Hero Banner (full-bleed photo)
- Exact visible structure: A single full-width black-and-white photographic image (overhead shot of hands with laptop, tablets, phone on a dark desk) directly below the nav bar.
- Position and alignment: Full width, flush below the nav bar.
- Width and height: Node `231:1626` ("aboutus 1") — Measured from the design: x=0, y=75, width=1920, height=400.
- Grid and container behavior: Full-bleed, no side gutters/insets.
- Typography: None (image only).
- Colors: Not applicable (photographic fill). Rendered in monochrome/desaturated tone. Visually confirmed in the live Figma canvas.
- Borders: None visible.
- Radius: Node type is "rounded-rectangle" — Measured from the design: corner radius present per node type, exact radius value not retrieved.
- Shadows: None visible.
- Spacing: Sits directly under the 75px nav bar with no gap; article title block begins 60px below the image's bottom edge (image ends y=475, title starts y=535).
- Images and required assets: Hero/banner photograph (same image asset reused later at smaller scale inside the article body, see below).
- Reusable components: This hero banner slot follows the same full-bleed-photo-under-nav pattern used on other content/detail pages in this file.
- Elements with unavailable metadata: None beyond standard photo-fill decomposition (fill image itself is not extracted by metadata, only the container geometry).

#### Article Title & Intro
- Exact visible structure: A large page/article H1 title ("Lorem ipsum dolor sit amet" — placeholder Lorem Ipsum text standing in for the real post title), followed below by an intro/dek paragraph. Two small circular share icons sit to the right of this block.
- Position and alignment: Left-aligned within the 1280px content column (x=320 to x=1600).
- Width and height: Title node `231:1587` — Measured from the design: x=320, y=535, width=860, height=48. Intro paragraph node `231:1586` — Measured from the design: x=320, y=615, width=1047, height=90.
- Grid and container behavior: Both blocks sit inside the shared 1280px-wide centered content container (320px side insets against the 1920px frame).
- Typography: Title — From Figma style: Desktop/H1 — Sharp Grotesk, Medium 25, 48px size, weight 500, line-height 48, letter-spacing 0. Intro paragraph — From Figma style: Desktop/H4 — Montserrat Regular, 24px size, weight 400, line-height 30, letter-spacing 0.
- Colors: Title text color — Measured from the design: `#000000` (black). Intro paragraph text color — Measured from the design: `#000000` (black).
- Borders: None.
- Radius: Not applicable (text nodes).
- Shadows: None.
- Spacing: 80px gap between hero image bottom (y=475) and title (y=535); title-to-intro gap effectively 32px (title ends y≈583, intro starts y=615).
- Images and required assets: Two small circular icon frames to the right of this block — node `231:1633` ("Group 1663") Measured from the design: x=1560, y=615, width=40, height=40, and node `231:1628` ("Group 1664") Measured from the design: x=1560, y=670, width=40, height=40. Visually confirmed in the live Figma canvas as a LinkedIn-share icon (top) and a link/copy icon (bottom), both on blue circular badges; exact vector/icon metadata unavailable through MCP.
- Reusable components: Title + intro + share-icon pairing is a pattern that would repeat on any long-form content/article detail page in this site (e.g., case-study or expertise detail pages), not unique to Blog.
- Elements with unavailable metadata: The two share-icon glyphs themselves (LinkedIn mark, link/copy mark) are not decomposed into named vector paths in metadata — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Category Tags Row + Published Meta
- Exact visible structure: A horizontal row of three pill-shaped category tag chips ("Data, AI & Automation", "Engineering & Security", "Digital Products & UI/UX"), with a "Published 10/07/2026 · 3 minute read" meta line right-aligned on the same row.
- Position and alignment: Tags left-aligned starting at the content column's left edge (x=320); meta text right-aligned near the column's right edge.
- Width and height: Tag chip 1 (`231:1657`, "Frame 3368") — Measured from the design: x=320, y=779, width=218, height=44. Tag chip 2 (`231:1659`, "Frame 3369") — Measured from the design: x=554, y=779, width=223, height=44. Tag chip 3 (`231:1661`, "Frame 3370") — Measured from the design: x=793, y=779, width=235, height=44. Meta text (`231:1639`) — Measured from the design: x=1306, y=798, width=294, height=24.
- Grid and container behavior: Chips laid out left-to-right in a single row with fixed gaps (~16px between chips: 320+218=538 vs. next chip start 554, gap 16; 554+223=777 vs. next chip start 793, gap 16).
- Typography: Chip label — From Figma style: Desktop/Body Small — Montserrat Regular, 16px, weight 400, line-height 24, letter-spacing 0. Meta text uses the same Desktop/Body Small style (Montserrat Regular 16/24).
- Colors: Chip text and chip border — Measured from the design: `#000826` (near-black navy), taken from node `231:1657`/`231:1658`. Meta text color — Measured from the design: `#6d6d6d` (mid gray), taken from node `231:1639`.
- Borders: Chip border — Measured from the design: 1px solid `#000826`.
- Radius: Chip corner radius — Measured from the design: 25px (fully pill-shaped given the 44px height).
- Shadows: None visible.
- Spacing: Chip internal padding — Measured from the design: 20px horizontal / 10px vertical (from node `231:1657`'s layout).
- Images and required assets: None (text-only chips).
- Reusable components: This pill-tag chip construction (border `#000826`, 25px radius, Body Small type) is the same tag/category-chip pattern that would recur on other listing/detail pages sharing this design system.
- Elements with unavailable metadata: None beyond standard text/frame decomposition — this row was fully resolved via metadata and design-context calls.

#### Divider Line (below tags/meta row)
- Exact visible structure: A thin horizontal rule spanning the content column width, separating the article header block from the two-column body below.
- Position and alignment: Centered within the 1280px content column.
- Width and height: Node `231:1627` ("Line 326") — Measured from the design: x=320, y=839, width=1280, height≈0 (hairline).
- Grid and container behavior: Matches the 1280px content-column width used throughout the page.
- Typography: Not applicable.
- Colors: Visually confirmed in the live Figma canvas as a light gray hairline; exact hex not retrieved through MCP.
- Borders: The line itself functions as a border/rule; no additional border.
- Radius: Not applicable.
- Shadows: None.
- Spacing: 16px below the tag row (tag row bottom y=823, line at y=839); 100px above the two-column body block (body starts y=939).
- Images and required assets: None.
- Reusable components: Same hairline-divider pattern reused lower on the page (see "Divider Line (above prev/next)") and consistent with rule styling elsewhere in the file.
- Elements with unavailable metadata: None.

#### Two-Column Article Body (Contents/TOC sidebar + Article Content)
- Exact visible structure: A left sidebar with an uppercase "Contents" label above a numbered (01–05) table-of-contents list, and a right-hand article-content column containing three repeated heading/body blocks, each with an intro paragraph, a bolded sub-line, a long body paragraph, and a closing paragraph — with a single inline photograph placed after the first content block.
- Position and alignment: Sidebar left-aligned at x=320; article content right-aligned column starting at x=800, both within the 1280px content container (which spans x=320 to x=1600).
- Width and height: Sidebar/"Contents" frame (`231:1640`, "Frame 3416") — Measured from the design: x=320, y=939, width=350, height=410. Article content frame (`231:1602`, "Frame 3412") — Measured from the design: x=800, y=939, width=800, height=2098.
- Grid and container behavior: Two-column layout — a fixed 350px-wide sidebar and an 800px-wide content column, with a gap between them (670 to 800 = 130px gutter). The article content column contains three stacked sub-blocks each 456px tall (heading + 4 text nodes), separated by section-heading text nodes and, after the first sub-block, an inline image.
- Typography: "Contents" label — From Figma style: Desktop/Overline — Sharp Grotesk Medium 25, 15px, weight 500, line-height 20, uppercase, letter-spacing 0. TOC list items ("01"–"05" plus their link text, nodes `231:1643`–`231:1656`) are visually confirmed as similarly small uppercase/sans labels; item "01" ("Nam libero tempore, cum soluta") renders in the brand-blue accent color while items 02–05 render in a darker neutral — Visually confirmed in the live Figma canvas. Section headings inside the article body (e.g., "Nam libero tempore, cum soluta", "Ut enim ad minima veniam, quis nostrum exercitationem ullam", "Quis autem vel eum iure reprehenderit qui in ea voluptate") are visually bold and larger than body copy — Visually confirmed in the live Figma canvas; exact bound style name not retrieved for these specific heading nodes. Body paragraphs (e.g., node `231:1605`) — From Figma style: Desktop/Body — Montserrat Regular, 18px, weight 400, line-height 24. A bolded one-line sub-heading appears between the first paragraph and the long paragraph in each block (e.g., "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.") — Visually confirmed in the live Figma canvas as bold weight; exact style binding not retrieved.
- Colors: "Contents" label — Measured from the design: `#4467f6` (brand blue). Body paragraph text — Measured from the design: `#000000` (black, consistent with node `231:1605`).
- Borders: None visible on this section.
- Radius: Inline image uses a "rounded-rectangle" node type (see below).
- Shadows: None visible.
- Spacing: Each of the three content sub-blocks is 456px tall internally (paragraph → bold sub-line → long paragraph → closing paragraph, at y-offsets 0/72/168/216/384 within each 456px block). Section heading text sits 30px tall directly above each sub-block with a small gap. The inline photo sits between sub-block 1 and section heading 2, with roughly 40–46px of breathing room above/below it.
- Images and required assets: One inline photograph, node `231:1610` ("aboutus 1") — Measured from the design: x=0 (relative to content column, i.e., absolute x=800), y=566, width=800, height=400. This appears to reuse the same hero photograph asset seen at the top of the page, at a smaller/cropped scale.
- Reusable components: The TOC-sidebar-plus-long-form-body layout is the standard long-form article/detail page pattern in this file (would also apply to case-study/expertise detail pages). The heading/paragraph/paragraph/inline-image rhythm repeats identically three times within this one article.
- Elements with unavailable metadata: The bold sub-heading lines within each content block, and the larger section-heading lines ("Nam libero tempore...", etc.) have visible bold/larger treatment in the render but no distinctly named bound text style was retrieved for them beyond the generic Desktop/Body and Desktop/H4 tokens already documented elsewhere on the page. The TOC's active-item blue highlight (item "01") is Visually confirmed in the live Figma canvas; exact fill/text-color value for that specific active state was not retrieved through MCP.

#### Divider Line (above prev/next)
- Exact visible structure: A second thin horizontal rule spanning the content column, separating the article body from the previous/next post navigation.
- Position and alignment: Centered within the 1280px content column.
- Width and height: Node `231:1625` ("Line 327") — Measured from the design: x=320, y=3137, width=1280, height≈0 (hairline).
- Grid and container behavior: Matches the 1280px content-column width.
- Typography: Not applicable.
- Colors: Visually confirmed in the live Figma canvas as a light gray hairline; exact hex not retrieved through MCP.
- Borders: Functions as a rule/border itself.
- Radius: Not applicable.
- Shadows: None.
- Spacing: 100px below the article body (body ends y=939+2098=3037; line at y=3137); 100px above the prev/next row (prev/next starts y=3237).
- Images and required assets: None.
- Reusable components: Same hairline pattern as the divider above the TOC/body section.
- Elements with unavailable metadata: None.

#### Previous / Next Post Navigation
- Exact visible structure: Two side-by-side cards. Left card = "Previous" — a small square thumbnail image on the outer-left edge, with a "Previous" label above a post-title line to its right. Right card = "Next" — mirrored: a "Next" label above a post-title line on the left, with a small square thumbnail on the outer-right edge.
- Position and alignment: Both cards sit within the 1280px content container, split left/right.
- Width and height: "Previous" group (`231:1663`, "Group 1665") — Measured from the design: x=320, y=3237, width=501, height=100 (thumbnail sub-node `231:1666` "expertise_img 1": x=320, y=3237, width=100, height=100; title text `231:1664`: x=440, y=3280, width=381, height=48; label text `231:1665` "Previous": x=440, y=3246, width=69, height=24). "Next" group (`231:1667`, "Group 1666") — Measured from the design: x=1099, y=3237, width=501, height=100 (title text `231:1668`: x=1099, y=3280, width=381, height=48; label text `231:1669` "Next": x=1442, y=3246, width=38, height=24; thumbnail `231:1670` "expertise_img 1": x=1500, y=3237, width=100, height=100).
- Grid and container behavior: Two equal-width (501px) cards with a gap between them (820 to 1099 = 279px gap), each 100px tall, thumbnails always oriented toward the outer page edge (left card's image on the far left, right card's image on the far right).
- Typography: "Previous"/"Next" labels are visually confirmed as small caption-weight text (consistent scale with Desktop/Body Small). Post-title lines ("Quis autem vel eum iure reprehenderit qui in ea voluptate") are visually confirmed as bold, larger than the label — consistent with an H4-scale bold treatment. Exact bound style names for these two text roles were not individually retrieved.
- Colors: Thumbnail is a dark, high-contrast black-and-white photographic tile (visually confirmed). Label and title colors were not individually retrieved via design-context in this pass; visually the label reads lighter/gray and the title reads black.
- Borders: None visible around the cards.
- Radius: Thumbnail node type is "rounded-rectangle" — Measured from the design: corner radius present per node type; exact value not retrieved.
- Shadows: None visible.
- Spacing: 100px below the divider line (line y=3137, cards start y=3237); 40px gap between label and title within each card (label ends y=3270, title starts y=3280, ~10px; label height 24 at y=3246, title at y=3280 → 10px gap).
- Images and required assets: Two thumbnail images (node name "expertise_img 1" for both), reused image-fill pattern.
- Reusable components: This Previous/Next card construction (thumbnail + label + title) mirrors a "related item" card pattern also seen in the site's expertise/case-study contexts (image + eyebrow label + title), based on the shared "expertise_img" naming.
- Elements with unavailable metadata: None beyond bold/label color specifics noted above.

#### Footer
- Exact visible structure: A wide footer band containing: "PIXELOCRACY" wordmark, a short tagline ("We transform the industries of the present, with the technologies of the future"), a link column ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), a LinkedIn icon, an EUROCERT certification badge with the text "Certified Information Security Management System EN ISO/IEC 27001:2023 Certified by EUROCERT", a decorative wavy line, a copyright line ("Pixelocracy © 2026, All rights reserved."), and a circular "scroll to top" button in the bottom-right corner.
- Position and alignment: Full-width band; wordmark/tagline left-aligned, link column centered-left, EUROCERT badge right-of-center, copyright bottom-left, scroll-to-top button bottom-right.
- Width and height: Footer container (`231:1588`, "Group 1658") — Measured from the design: x=0, y=3537, width=1920, height=813. EUROCERT badge group (`231:1590`, "Group 1649") — Measured from the design: x=1318, y=3667, width=444.12, height=60.17 (badge icon `231:1591`: x=1318, y=3667, width=60, height=60).
- Grid and container behavior: Full-bleed background spanning the full 1920px frame width, with content aligned inside the standard side insets.
- Typography: "PIXELOCRACY" wordmark and the five link labels are visually confirmed as bold; tagline and EUROCERT caption are visually confirmed as regular weight, smaller size. Exact bound style names were not retrieved for these footer text nodes.
- Colors: Wordmark renders in brand blue (consistent with the same blue used elsewhere, e.g. `#4467f6`) — Visually confirmed in the live Figma canvas. Tagline, link labels, and copyright render in dark navy/near-black text. Footer background is a light lavender-to-white gradient — Visually confirmed in the live Figma canvas; exact hex values not retrieved through MCP.
- Borders: None visible.
- Radius: Not applicable to text; scroll-to-top button is circular.
- Shadows: None strongly visible; scroll-to-top button appears to have a soft shadow — Visually confirmed in the live Figma canvas.
- Spacing: Footer band begins 200px below the previous/next row (prev/next ends y=3337, footer starts y=3537).
- Images and required assets: EUROCERT certification badge/logo image; LinkedIn icon; decorative wavy divider line graphic; circular scroll-to-top button/icon.
- Reusable components: This is the same global site footer used across other pages in the file (wordmark + tagline + link column + certification badge + wavy divider + copyright + scroll-to-top), not unique to the Blog page.
- Elements with unavailable metadata: Only the background container (`231:1589`, "screencapture-thepixelocracy... 3") and the EUROCERT badge group (`231:1590`/`231:1591`/`248:401`) are present in metadata. The "PIXELOCRACY" wordmark, tagline, all five link labels, the LinkedIn icon, the wavy divider graphic, the copyright line, and the scroll-to-top button are **not** present as individually addressable nodes in the metadata walk. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

---

### Mobile

#### Top Navigation Bar — Mobile
- Difference from Desktop: The horizontal text nav (Home/Expertise/Work/About + Contact) is replaced by a compact header containing only the logo and a hamburger menu icon; no visible inline nav links or "Contact" label.
- Exact visible structure: "PIXELOCRACY" logo at the left; a small 3-line hamburger icon at the right.
- Position and alignment: Logo left-aligned, hamburger right-aligned, both vertically centered in a slim top bar.
- Width and height: Logo (`343:166`, "pix-logo-800 2") — Measured from the design: x=16, y=21, width=160, height=17. Hamburger icon frame (`343:167`, "Group 1672") — Measured from the design: x=376, y=23.5, width=28.5, height=11.5.
- Grid and container behavior: Frame width is 420px total; 16px side inset used consistently (logo starts at x=16; content column elsewhere on this frame also starts at x=16).
- Typography: Logo is an image/vector asset, not text.
- Colors: Logo visually confirmed in brand blue, consistent with Desktop.
- Borders: None visible.
- Radius: Not applicable.
- Shadows: None.
- Spacing: N/A beyond stated inset.
- Images and required assets: Logo image asset; hamburger icon graphic.
- Reusable components: Same collapsed mobile-header pattern (logo + hamburger) expected across other pages in this file.
- Elements with unavailable metadata: The hamburger icon's three line-strokes are grouped under `343:167` with no further sub-node breakdown retrieved; Visually confirmed in the live Figma canvas as a standard 3-line menu icon.

#### Hero Banner — Mobile
- Difference from Desktop: Same photographic hero image, now constrained to the 420px mobile width and a taller aspect ratio.
- Exact visible structure: Full-width black-and-white photograph directly below the header.
- Position and alignment: Full width, flush below header.
- Width and height: Node `343:226` ("aboutus 1") — Measured from the design: x=0, y=59, width=420, height=400.
- Grid and container behavior: Full-bleed, no side insets.
- Typography: Not applicable.
- Colors: Visually confirmed monochrome/desaturated tone, consistent with Desktop.
- Borders: None visible.
- Radius: Node type "rounded-rectangle" — Measured from the design.
- Shadows: None.
- Spacing: Header ends ~y=38–40 area; hero starts y=59.
- Images and required assets: Same hero photograph asset as Desktop.
- Reusable components: Same hero-banner pattern as Desktop, reflowed to full mobile width.
- Elements with unavailable metadata: None beyond standard photo-fill decomposition.

#### Share Icons Row — Mobile
- Difference from Desktop: On Desktop the two share icons are stacked vertically at the far right of the title/intro block. On Mobile they are relocated directly below the hero image (above the title) and arranged horizontally side by side.
- Exact visible structure: Two circular icon badges (LinkedIn icon, link/copy icon) placed side by side.
- Position and alignment: Left-aligned near the 16px content inset, directly under the hero image.
- Width and height: Node `345:245` ("Group 1663") — Measured from the design: x=16, y=499, width=40, height=40. Node `345:240` ("Group 1664") — Measured from the design: x=72, y=499, width=40, height=40.
- Grid and container behavior: Horizontal pair, 16px gap between the two 40×40 badges (16+40=56 vs. next badge start 72).
- Typography: Not applicable.
- Colors: Visually confirmed as blue circular badges, consistent with Desktop's icon color treatment.
- Borders: None additional.
- Radius: Circular badges.
- Shadows: None visible.
- Spacing: 40px gap below hero image bottom (hero ends y=459, icons start y=499).
- Images and required assets: Same LinkedIn and link/copy icon assets as Desktop.
- Reusable components: Same icon-badge component as Desktop, repositioned in the mobile flow.
- Elements with unavailable metadata: Icon glyphs themselves are not decomposed into named vector paths — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Article Title & Intro — Mobile
- Difference from Desktop: Same H1 title and intro paragraph copy, reflowed to the 420px mobile column width, positioned below the share-icon row instead of alongside it.
- Exact visible structure: Title line, followed by intro paragraph.
- Position and alignment: Left-aligned at the 16px content inset.
- Width and height: Title node `343:228` — Measured from the design: x=16, y=571, width=389, height=76. Intro paragraph node `343:227` — Measured from the design: x=16, y=679, width=389, height=182.
- Grid and container behavior: Both blocks occupy the 388px content column (420px frame minus 2×16px insets).
- Typography: Consistent with Desktop's bound styles (Desktop/H1 for title, Desktop/H4 for intro), reflowed to wrap across more lines at the narrower width.
- Colors: Same black text color as Desktop (not independently re-measured on Mobile nodes, but visually identical).
- Borders: None.
- Radius: Not applicable.
- Shadows: None.
- Spacing: 72px gap between share-icon row (ends y=539) and title (starts y=571).
- Images and required assets: None.
- Reusable components: Same title/intro component as Desktop.
- Elements with unavailable metadata: None.

#### Category Tags + Divider + Published Meta — Mobile
- Difference from Desktop: The three category chips wrap onto two rows instead of one row (two chips on row 1, one chip on row 2), and the divider/meta line sit directly below the wrapped tag block.
- Exact visible structure: Row 1 — "Data, AI & Automation" and "Engineering & Security" chips side by side; Row 2 — "Digital Products & UI/UX" chip alone; then a hairline divider; then the "Published 10/07/2026 · 3 minute read" meta line.
- Position and alignment: Left-aligned at the 16px inset.
- Width and height: Tags wrapper (`345:238`, "Frame 3454") — Measured from the design: x=16, y=941, width=388, height=94. Chip 1 (`343:230`): x=0 (rel.), width=184, height=40. Chip 2 (`343:232`): x=194 (rel.), width=188, height=40. Chip 3 (`343:234`): x=0 (rel.), y=54 (rel.), width=198, height=40. Divider (`343:229`, "Line 326") — Measured from the design: x=16, y=1051, width=388, height≈0. Meta text (`345:239`) — Measured from the design: x=16, y=1067, width=257, height=24.
- Grid and container behavior: Two-row wrap flow within the 388px content column, ~10px gap between chip 1 and chip 2 horizontally (184 to 194), and ~14px vertical gap between row 1 and row 2 (40 to 54).
- Typography: Same Desktop/Body Small style used for chip labels and meta text, consistent with Desktop.
- Colors: Consistent border/text color pattern as Desktop chips (near-black navy border/text); meta text in gray, consistent with Desktop's `#6d6d6d`.
- Borders: Same 1px solid chip border treatment as Desktop.
- Radius: Chip height reduced to 40px (vs. Desktop's 44px) — Measured from the design; still fully pill-shaped.
- Shadows: None.
- Spacing: Meta line sits 16px below the divider (divider y=1051, meta y=1067).
- Images and required assets: None.
- Reusable components: Same pill-chip component as Desktop, reflowed to a wrapping mobile layout.
- Elements with unavailable metadata: None beyond what's already noted for the Desktop equivalent.

#### Article Body — Mobile (single column, no Contents/TOC sidebar)
- Difference from Desktop: The two-column layout (Contents sidebar + article content) collapses to a single full-width column on Mobile. No "Contents"/TOC block is present in either the mobile metadata tree or the mobile screenshot render — the numbered 01–05 jump-list visible on Desktop does not appear on Mobile.
- Exact visible structure: Three stacked heading/body blocks (heading, intro paragraph, bold sub-line, long paragraph, closing paragraph), with one inline photograph placed after the first block — same content rhythm as Desktop, single column.
- Position and alignment: Left-aligned at the 16px inset, full 388px content width.
- Width and height: Article frame (`345:269`, "Frame 3412") — Measured from the design: x=16, y=1191, width=388, height=3146. Sub-block 1 (`345:271`, "Frame 3410") — Measured from the design: width=388, height=792. Inline image (`345:277`, "aboutus 1") — Measured from the design: width=388, height=400, at y=898 (relative to article frame, i.e., absolute y=1191+898=2089).
- Grid and container behavior: Single-column stack; each of the three sub-blocks is 792px tall (roughly 1.74× the Desktop sub-block height of 456px, reflecting text reflow to more lines at the narrower 388px width).
- Typography: Same bound styles as Desktop (Desktop/Body for paragraphs; heading/bold-subline treatments visually consistent with Desktop, bold and larger than body copy).
- Colors: Same black body text color as Desktop (not independently re-measured on Mobile nodes).
- Borders: None.
- Radius: Inline image is a "rounded-rectangle" node type, consistent with Desktop.
- Shadows: None.
- Spacing: Article frame starts 124px below the meta line (meta ends y=1091, article starts y=1191).
- Images and required assets: Same inline photograph asset as Desktop's mid-article image.
- Reusable components: Same heading/paragraph/paragraph/inline-image rhythm as Desktop, repeated three times, single-column.
- Elements with unavailable metadata: No "Contents" label or numbered TOC list (01–05) exists as a node in the mobile metadata tree, and none is visible in the mobile screenshot render either — this section of the Desktop layout has no Mobile counterpart node or visual presence found in this pass.

#### Divider Line (above prev/next) — Mobile
- Difference from Desktop: Same divider pattern, positioned after the reflowed single-column article body.
- Exact visible structure: Thin horizontal rule spanning the content column.
- Position and alignment: Left-aligned at the 16px inset, full 388px width.
- Width and height: Node `345:292` ("Line 327") — Measured from the design: x=16, y=4397, width=388, height≈0.
- Grid and container behavior: Matches the 388px mobile content column.
- Typography: Not applicable.
- Colors: Visually confirmed as a light gray hairline, consistent with Desktop.
- Borders: Functions as the rule itself.
- Radius: Not applicable.
- Shadows: None.
- Spacing: Sits directly below the end of the article body frame (body ends y=1191+3146=4337; divider at y=4397, 60px gap).
- Images and required assets: None.
- Reusable components: Same hairline pattern as Desktop.
- Elements with unavailable metadata: None.

#### Previous / Next Post Navigation — Mobile
- Difference from Desktop: The two cards stack vertically (full-width, one above the other) instead of sitting side by side; each card keeps the same internal thumbnail/label/title construction and thumbnail-toward-outer-edge logic as Desktop (Previous = thumbnail left, Next = thumbnail right).
- Exact visible structure: "Previous" card (thumbnail left, label + title right) directly above a "Next" card (label + title left, thumbnail right).
- Position and alignment: Both full-width within the 388px content column, left-aligned at the 16px inset.
- Width and height: "Previous" group (`345:293`, "Group 1665") — Measured from the design: x=16, y=4497, width=388, height=100 (thumbnail `345:296`: x=16, y=4497, width=100, height=100; label `345:295` "Previous": x=136, y=4497, width=60, height=24; title `345:294`: x=136, y=4525, width=268, height=72). "Next" group (`345:297`, "Group 1666") — Measured from the design: x=16, y=4637, width=388, height=100 (title `345:298`: x=16, y=4665, width=268, height=72; label `345:299` "Next": x=251, y=4637, width=33, height=24; thumbnail `345:300`: x=304, y=4637, width=100, height=100).
- Grid and container behavior: Two 100px-tall cards stacked with a 40px vertical gap (4497+100=4597 vs. next card start 4637).
- Typography: Same visual treatment as Desktop (label smaller/lighter, title bold/larger); exact bound style names not individually retrieved.
- Colors: Same dark photographic thumbnail treatment as Desktop.
- Borders: None visible.
- Radius: Thumbnail nodes are "rounded-rectangle" type, consistent with Desktop.
- Shadows: None.
- Spacing: 100px below the divider (divider y=4397, "Previous" card starts y=4497).
- Images and required assets: Same "expertise_img 1" thumbnail image pattern as Desktop.
- Reusable components: Same Previous/Next card component as Desktop, reflowed to a stacked single-column arrangement.
- Elements with unavailable metadata: None beyond what's already noted for the Desktop equivalent.

#### Footer — Mobile
- Difference from Desktop: No footer text/logo/link nodes are present in the mobile metadata tree at all (not even the background container and EUROCERT badge that Desktop's metadata does expose). Only a single large image node is present in the region where the footer visually sits.
- Exact visible structure: Visually confirmed in the live Figma canvas — the mobile screenshot shows the same footer content as Desktop: "PIXELOCRACY" wordmark, tagline, stacked link list ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), LinkedIn icon, decorative wavy line, and a copyright line ("Pixelocracy © 2026, All rights reserved."), plus a circular scroll-to-top button in the bottom-right. No EUROCERT badge is visible within the mobile frame's visible screenshot crop.
- Position and alignment: Full width; content left-aligned at the 16px inset; scroll-to-top button bottom-right.
- Width and height: The only metadata-visible node in this region is `343:170` ("image 80") — Measured from the design: x=0, y=4887, width=420, height=574, ending at y=5461 (the frame's total height), consistent with a full-bleed footer background/photo panel.
- Grid and container behavior: Full-bleed width (420px), content reflowed to a single stacked column instead of Desktop's multi-column footer arrangement.
- Typography: Visually confirmed consistent with Desktop's wordmark/link/tagline weight treatments; no bound style names retrieved for mobile footer text since no corresponding text nodes exist in the metadata tree.
- Colors: Visually confirmed light lavender-to-white gradient background and brand-blue wordmark, consistent with Desktop; no hex values retrieved for Mobile nodes specifically.
- Borders: None visible.
- Radius: Scroll-to-top button is circular, consistent with Desktop.
- Shadows: Visually confirmed soft shadow on the scroll-to-top button, consistent with Desktop.
- Spacing: Footer/image region starts 150px below the end of the "Next" card (Next ends y=4637+100=4737; image 80 starts y=4887).
- Images and required assets: One large background image/photo asset ("image 80"); wordmark logo; LinkedIn icon; wavy divider graphic; scroll-to-top icon — same asset set as Desktop's footer.
- Reusable components: Same global site footer component as Desktop, reflowed to a mobile single-column stack.
- Elements with unavailable metadata: The entire footer's text content (wordmark, tagline, five link labels, LinkedIn icon, wavy divider, copyright line, scroll-to-top button) and the EUROCERT certification badge have no corresponding nodes in the mobile metadata tree at all — only the single "image 80" node is exposed. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

## Pillar Page Template

### Desktop

#### Top Navigation Bar
- Exact visible structure: Full-width white bar containing the "PIXELOCRACY" wordmark/logo on the left, a horizontal nav link row (Home, Expertise, Work, About) to its right, and a single "Contact" link at the far right.
- Position and alignment: Fixed-appearing header at the very top of the frame, spanning the full 1920px width; logo and nav links are left-aligned as a group, "Contact" is right-aligned.
- Width and height: Background bar (node "image 4", id 231:1422): x=0, y=0, width=1920, height=75. Measured from the design.
- Grid and container behavior: Full-bleed background bar; logo/nav cluster and "Contact" link sit inside with horizontal padding, leaving large empty white space between the nav cluster and "Contact" at this 1920px width.
- Typography: Nav link text and "Contact" text are visible in the render but carry no retrievable text-node metadata (see below). The logo is a vector graphic, not text.
- Colors: Bar background is white. Logo reads as brand blue, visually matching the same blue accent used elsewhere on the page (#4467f6, measured from the design in other nodes). Nav link text and "Contact" render as near-black. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Borders: None visible.
- Radius: None visible (square-edged bar).
- Shadows: None visible.
- Spacing: Logo sits approximately 320px from the left edge (aligned with the main content column start used throughout the page); nav links are grouped tightly together with small gaps; "Contact" sits near the right edge.
- Images and required assets: Logo vector graphic (node "Vector", id 248:363, inside frame "Frame 1" id 231:1423, x=596, y=27, width≈446, height≈18.36 — measured from the design, but this vector's exact visual role, e.g. whether it is only the wordmark or wordmark+nav underline, could not be fully confirmed from metadata alone).
- Reusable components: This bar is the same site-wide primary navigation pattern expected to repeat on every page template ("Home / Expertise / Work / About" + "Contact").
- Elements with unavailable metadata: The nav link labels "Home," "Expertise," "Work," "About," and "Contact," as well as the logo's text rendering, have no individual text-node metadata in `get_metadata` output — they sit inside grouped/vector layers. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Hero / Page Header
- Exact visible structure: Left column stack — small uppercase eyebrow label ("PILLAR 01"), large page title ("Strategy & Advisory"), a subheading ("Strategy that moves to execution."), and two body paragraphs. Right column — a compact info panel with three stacked label/value pairs: "Pillar" → "Strategy & Advisory," "Works best with" → "Data & AI · Engineering · Digital Products," "Typical engagement" → "3–12 months."
- Position and alignment: Left text column begins at x=320 (the page's consistent left content margin). Right info panel ("Frame 3360," id 231:1431) sits at x=1232, y=229, top-aligned with the eyebrow label/title block, right-aligned toward the page's right margin.
- Width and height: Eyebrow "PILLAR 01": x=320, y=188, w=99, h=20. Title "Strategy & Advisory": x=320, y=228, w=638, h=48. Subheading "Strategy that moves to execution.": x=320, y=296, w=403, h=30. Paragraph 1: x=320, y=366, w=638, h=48. Paragraph 2: x=320, y=430, w=638, h=72. Info panel: x=1232, y=229, w=368, h=244. All measured from the design.
- Grid and container behavior: Two-column layout — a ~638px-wide left text column and a ~368px-wide right info panel, separated by open space; both are pinned to fixed x-positions rather than a fluid grid at this fixed 1920px frame width.
- Typography: Eyebrow "PILLAR 01" uses Desktop/Overline (Sharp Grotesk Medium 25, 15px/20px line-height, uppercase). Title "Strategy & Advisory" uses Desktop/H1 (Sharp Grotesk Medium 25, 48px/48px). Subheading uses Desktop/H4 (Montserrat Regular, 24px/30px). Both paragraphs use Desktop/Body (Montserrat Regular, 18px/24px). Info panel labels ("Pillar," "Works best with," "Typical engagement") use Desktop/Overline; values ("Strategy & Advisory," "Data & AI · Engineering · Digital Products," "3–12 months") use a 16px/24px Montserrat Regular style (Desktop/Body Small). From Figma style.
- Colors: Eyebrow text color #4467f6. Title text color black (#000000). Paragraph text color black (#000000). Measured from the design (read via design context on nodes 231:1414, 231:1411, 231:1409). Info panel label/value text renders in gray tones in the screenshot; exact hex not retrieved. Visually confirmed in the live Figma canvas for the gray tone specifically.
- Borders: None visible on either column.
- Radius: Not applicable (text-only content).
- Shadows: None.
- Spacing: Eyebrow-to-title gap ≈40px (188→228). Title-to-subheading gap ≈18px (228+48=276→296). Subheading-to-paragraph1 gap ≈40px. Paragraph1-to-paragraph2 gap ≈16px. Within the info panel, the three label/value groups are stacked with an 88px cadence (blocks at y=0, y=88, y=176 within the panel).
- Images and required assets: None in this specific block (image sits directly below, see next section).
- Reusable components: The right-side "Pillar / Works best with / Typical engagement" info panel is a metadata-card pattern that other Pillar Page instances on this site (Data, AI & Automation; Engineering & Security; Digital Products & UI/UX; Capability Building — named as "other Pillars" later on this same page) would reuse with different values.
- Elements with unavailable metadata: None beyond what is noted above; all hero text nodes returned metadata successfully.

#### Hero Image Band
- Exact visible structure: A large full-width photographic image (a dark, tech/network-style visual with light particle/connection-line graphics) positioned below the hero text, with a wavy horizontal vector shape overlapping its lower edge to create a scalloped transition into the next section.
- Position and alignment: Centered within the 320–1600px content column (below the hero text/info-panel row), full width of that column.
- Width and height: Image ("expertise_img 1", id 231:1489): x=320, y=602, width=1280, height=420. Wave overlay vector (id 231:1490): x=320, y=922, width=1280, height≈100. Measured from the design.
- Grid and container behavior: Fixed position/size within the 1280px content column; the wave vector is anchored to the image's bottom edge and does not extend beyond the image's horizontal bounds.
- Typography: None (image-only section).
- Colors: Image is a dark, mostly black/navy photographic asset with light cyan/white particle-network graphic overlays (visually confirmed in the render). The wave vector's fill color was not individually queried; it visually reads as white/very light, matching the page background above it. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for the wave's precise fill hex.
- Borders: None detected in the extracted node code (despite the node being named a "rounded-rectangle" in `get_metadata`, no corner-radius or border class was present when queried).
- Radius: Not confirmed via metadata for this node; screenshot shows squared corners at the top edge with the wavy cut only at the bottom.
- Shadows: None.
- Spacing: Image begins 306px below the hero title's baseline area; wave overlay overlaps the final ~100px of the image height.
- Images and required assets: Raster image asset "expertise_img 1" (PNG), rendered with `object-cover`, id 231:1489. Measured from the design (retrieved via design context, exact byte asset available only via the short-lived Figma export URL).
- Reusable components: A full-width "hero band photograph with wave-cut bottom edge" pattern that other Pillar Page instances would reuse with a different photograph.
- Elements with unavailable metadata: None significant; both the image and wave vector returned metadata, though the wave's fill color was not individually confirmed.

#### "Why Us" — Strategy Rooted in Delivery
- Exact visible structure: Section eyebrow ("WHY US"), heading ("Strategy rooted in delivery"), a body paragraph, then a row of three equal-width numbered cards ("01 From insight to execution," "02 Business-first thinking," "03 Cross-sector credibility"), each with a divider line and supporting paragraph. A small italic caption ("What sets our approach apart") sits below the cards, aligned to the right.
- Position and alignment: Eyebrow/heading/paragraph left-aligned at x=320. The three cards form a single row starting at x=320, each 400px wide with 40px gaps (320→720, 760→1160, 1200→1600). Caption sits at x=1271, right-aligned under the card row.
- Width and height: Eyebrow "WHY US": x=320, y=1142, w=76, h=20. Heading "Strategy rooted in delivery": x=320, y=1172, w=566, h=32. Paragraph: x=320, y=1244, w=700, h=96. Card 1: x=320, y=1420, w=400, h=332. Card 2: x=760, y=1420, w=400, h=332. Card 3: x=1200, y=1420, w=400, h=332. Caption: x=1271, y=1766, w=329, h=20. All measured from the design.
- Grid and container behavior: Fixed 3-column card row at 400px each with a consistent 40px gutter; each card is a self-contained padded box (40px internal padding, 20px internal vertical gap between number/heading-block, 16px gap within the heading-block between title, divider line, and paragraph).
- Typography: Eyebrow and caption use Desktop/Overline (15px/20px, uppercase; caption additionally renders italicized in the screenshot). Heading uses Desktop/H3 (Sharp Grotesk Medium 25, 32px/32px). Section paragraph uses Desktop/Body (18px/24px). Inside each card: the number ("01"/"02"/"03") uses Desktop/H3 (32px/32px); the card title ("From insight to execution," etc.) uses Montserrat Bold 20px/24px (not a separately named bound style in the returned data — an override on top of Desktop/H5); the card body copy uses Desktop/Body (18px/24px). From Figma style / Measured from the design.
- Colors: Card 1 background #4467f6 (brand blue) with white number/title/body text. Card 2 background #f1f4ff (very light blue/near-white) with #000826 (near-black navy) number/title/body text. Card 3 visually matches Card 1's blue treatment (white-on-blue) in the render; its exact hex was not individually queried. Measured from the design for Cards 1 and 2 (via design context on nodes 231:1442 and 231:1448); visually confirmed for Card 3.
- Borders: None; cards rely on a hard offset drop-shadow instead of a border.
- Radius: Node names for the card containers reference "Overlay+Border+OverlayBlur," but no corner-radius class was present in the extracted code for Cards 1–2; corners render as square in the screenshot.
- Shadows: Card 1 has a hard drop-shadow `6px 6px 0px #ccc` (light gray). Card 2 has a hard drop-shadow `6px 6px 0px #4467f6` (brand blue) — i.e., the two card variants use opposite shadow-color logic (gray shadow on a blue card, blue shadow on a light card). Card 3's shadow color was not individually confirmed but visually matches Card 1's treatment. Measured from the design for Cards 1–2.
- Spacing: 40px internal card padding on all sides; 20px vertical gap between the number and the title block; 16px vertical gap between title, divider line, and body copy within that block; 40px horizontal gutter between cards.
- Images and required assets: A thin horizontal divider-line SVG ("Line 297") inside each card, between the card title and body copy.
- Reusable components: The numbered "01/02/03" feature-card pattern with alternating solid/light background treatment and inverted hard-shadow color is a distinct reusable card component that could recur elsewhere on the site wherever three-up feature call-outs are used.
- Elements with unavailable metadata: None significant for this section; Card 3's exact fill/shadow hex was visually read from the screenshot rather than confirmed via a design-context call, but the node itself (id 231:1483) does have metadata coordinates.

#### "We've Heard This Before" — Objection/FAQ Accordion
- Exact visible structure: Centered eyebrow ("TYPICAL SITUATIONS WE SOLVE"), heading ("We've heard this before"), a two-line intro paragraph, and a 2×2 grid of accordion-style cards, each presenting a quoted client objection in italics with a quotation-mark icon and a triangular expand/collapse indicator. One card (bottom-right) is shown in its expanded state, revealing a checkmark icon and a bold answer paragraph beneath the quoted objection.
- Position and alignment: Eyebrow/heading/paragraph are centered around x≈642–1015 (offset right of the page's usual x=320 margin, appearing more centered in the viewport). The four cards form a 2-column grid: left column at x=319, right column at x=981; row 1 at y=2270, row 2 at y=2430.
- Width and height: Eyebrow "Typical situations we solve": x=807, y=1952, w=308, h=20. Heading "We've heard this before": x=712, y=1982, w=498, h=32. Paragraph block: x=641–642, y=2054–2142, w=638 each. Collapsed cards (top-right, bottom-left): 620×112. Expanded card (bottom-right, id 231:1460): 620×274. All measured from the design.
- Grid and container behavior: 2×2 card grid, each card 620px wide with a visible horizontal/vertical gutter (top row at y=2270, bottom row at y=2430, i.e., a 160px row-to-row gap accounting for the shorter collapsed card height); columns separated by a 42px gutter (319+620=939 → 981).
- Typography: Eyebrow uses Desktop/Overline. Heading uses Desktop/H3. Intro paragraphs use Desktop/Body. Quoted objection text uses Montserrat Medium Italic, 18px/24px (a local override, not a named bound style in the returned data). The expanded answer text is bold, matching the same 18px scale visually. From Figma style / Measured from the design (quote-card typography measured via design context on node 231:1454).
- Colors: Cards have a white background. Quoted objection text color #000826. Quotation-mark icon and expand triangle render in brand blue, matching #4467f6 used elsewhere; the checkmark icon on the expanded card also reads as brand blue. Measured from the design for the white background and #000826 text; visually confirmed for the icon colors.
- Borders: No border class was returned for the queried card (231:1454); the card appears to rely on plain white fill with no stroke, contrary to what its layer name ("Overlay+Border+OverlayBlur") would suggest.
- Radius: None detected in the returned code; corners render square in the screenshot.
- Shadows: None detected in the returned code for this card variant.
- Spacing: 32px internal card padding; 20px gap between the quote-mark icon and the objection text; 12px gap between quote icon and text within their row; in the expanded card, 36px gap between the objection block and the checkmark/answer block below it.
- Images and required assets: A quotation-mark SVG icon per card; a triangular expand/collapse indicator SVG (rotated 180° when expanded vs. collapsed, i.e., pointing up when open, down when closed); a checkmark SVG icon shown only in the expanded state.
- Reusable components: This is a reusable FAQ/accordion card component (quote-icon + italic question + toggle triangle + conditional checkmark/answer reveal) that could recur on other pages using an objection-handling or FAQ pattern.
- Elements with unavailable metadata: None significant; all four cards and their child text/icon nodes returned metadata.

#### "Selected Experience" — Case Studies
- Exact visible structure: A soft gradient background band containing a section eyebrow ("SELECTED EXPERIENCE"), heading ("Work that went all the way"), an intro paragraph, and a row of three case-study cards ("eGovernance," "Mobility," "Tobacco / FMCG"), each with a title, descriptive paragraph, and a bold blue result/metric line, separated by thin vertical divider lines.
- Position and alignment: Background gradient rectangle spans the full frame width (x=-1, w≈1922) behind this section. Eyebrow/heading/paragraph are left-aligned at x=320. The three-card row ("Frame 3379," id 231:1570) sits at x=320, y=3290, spanning 1280px width, with internal card content starting at x=40/460/880 within that frame.
- Width and height: Background gradient (id 231:1405): x=-1, y=2766, w=1922, h=938. Eyebrow: x=320, y=3060, w=229, h=20. Heading: x=320, y=3090, w=554, h=32. Paragraph: x=320, y=3162, w=600, h=48. Card row container: x=320, y=3290, w=1280, h=292. Each card content block ≈360px wide. Measured from the design.
- Grid and container behavior: 3-column card layout inside a 1280px-wide row, with thin vertical divider lines (not gutters/whitespace) separating the three columns at x=430 and x=850 (relative to the row).
- Typography: Eyebrow uses Desktop/Overline. Heading uses Desktop/H3. Intro paragraph uses Desktop/Body. Card titles ("eGovernance," "Mobility," "Tobacco / FMCG") render as bold headings; card body copy is regular weight; the closing metric line ("2nd strongest brand in Greece · €400M yearly savings," etc.) renders bold and in brand blue. From Figma style for eyebrow/heading/paragraph; visually confirmed for the card-internal type styling specifics (weight/color of title vs. metric line) since those child text nodes were not individually queried via design context.
- Colors: Section background is a vertical gradient from #d7defc (light lavender-blue) at the top fading to transparent by 64.24% of the band's height. Card titles and body copy render in near-black. Metric/result lines render in bold brand blue, visually matching #4467f6 used elsewhere. Measured from the design for the gradient (via design context on node 231:1405); visually confirmed for the card text colors.
- Borders: None on the cards themselves; thin vertical lines act as column dividers only.
- Radius: None visible.
- Shadows: None visible.
- Spacing: Card content blocks are ~360px wide with roughly 30px of extra clearance before the next divider line; each card's internal stack has a title, then a gap (~54px) to the paragraph, then a further gap (~120px down from paragraph start) to the bold metric line.
- Images and required assets: None (text-only cards).
- Reusable components: This 3-up case-study/testimonial card pattern (title + paragraph + bold blue metric line + vertical dividers) is a reusable "selected work" component that would recur on other Pillar Page instances with different case studies.
- Elements with unavailable metadata: None significant for the section frame and its direct text children; the precise bound style names for the card title/metric text specifically were not retrieved.

#### "What a Strategy Engagement Looks Like" — Dark Panel
- Exact visible structure: A full-bleed dark navy panel containing, top to bottom: a centered eyebrow ("WHAT'S INCLUDED"), heading ("What a strategy engagement looks like"), an intro paragraph, a two-column content box on a slightly darker navy card (left column "Discovery & Diagnosis" with a bulleted list and a summary line beneath a divider; right column "Planning, Execution & Governance" with its own bulleted list and summary line beneath a divider; a vertical divider line separates the two columns), and finally a callout row ("The Pixelocracy difference") with a vertical accent line, an eyebrow label, and a paragraph of body copy.
- Position and alignment: Outer panel background rectangle: x=60, y=3876, w=1800, h=1338 (this sits inset from the very edges of the 1920px frame, i.e., the panel does not run full-bleed to the frame edges but is inset by 60px on each side based on this rectangle's x-position, though other full-width vectors around y=2910–3876 suggest additional edge-to-edge wave transitions bracket it). Heading/eyebrow/intro paragraph are centered around x≈563–1383. The two-column content card ("Rectangle 5," id 231:1520) sits at x=339, y=4228, w=1280, h=576. The difference callout ("Group 1640," id 231:1566) sits at x=339, y=4954, w=1280, h=110.
- Width and height: Outer panel: 1800×1338 (measured from the design, id 231:1404). Content card: 1280×576 (id 231:1520). Left column list block: x=399, y=4348, w=520, h=200 (id 231:1545). Right column list block: x=1039, y=4348, w=520, h=288 (id 231:1523). All measured from the design.
- Grid and container behavior: Two-column layout inside the content card, split by a vertical divider line at x=979 (relative to the frame); left column ("Discovery & Diagnosis") has 5 bullet items, right column ("Planning, Execution & Governance") has 6 bullet items; each column has its own horizontal divider line separating the bullet list from a one-line summary sentence beneath it.
- Typography: Eyebrow ("WHAT'S INCLUDED," "THE PIXELOCRACY DIFFERENCE") uses Desktop/Overline, color #dbe1fc on the dark background (measured from the design via node 231:1569). Section heading uses Desktop/H3. Intro paragraph and difference-callout paragraph use Desktop/H4 (24px/30px) — the difference-callout paragraph was confirmed at Desktop/H4 via design context on node 231:1567. Column headings ("Discovery & Diagnosis," "Planning, Execution & Governance") use Desktop/H4 (24px/30px, matching their 30px node height). Bullet items and column summary lines render at Desktop/Body scale. From Figma style / Measured from the design.
- Colors: Outer panel background #071d7b. Inner content card background #061868 (bound to the "Dark Shade 2" variable). Body/heading text on this panel is white; eyebrow text is #dbe1fc (light lavender-blue); bullet markers are small filled circles rendering in a lighter blue/white tone. Measured from the design (via design context on nodes 231:1404, 231:1520, 231:1566).
- Borders: None on the panel or card; the two-column split and list/summary split are achieved with thin 1px divider lines, not borders/boxes.
- Radius: Layer names use "Rectangle 3357"/"Rectangle 5" but no corner-radius class was present in the extracted code for either background; corners render square in the screenshot despite `get_metadata` labeling them "rounded-rectangle."
- Shadows: None detected.
- Spacing: Vertical divider between columns spans the full 576px card height. Horizontal divider lines sit at y=4578 (left column) and y=4666 (right column), directly beneath each bullet list, with the summary sentence beneath each. Bullet items within each column are spaced in a 44px vertical cadence. The difference-callout row sits 324px below the bottom of the content card, separated by its own vertical accent line rotated 90°.
- Images and required assets: Small filled-circle (ellipse) bullet-point icons preceding each list item, one per bullet (10 total across both columns).
- Reusable components: The light-on-dark "included/scope" two-column bulleted comparison card is a distinct content pattern; the eyebrow-label + vertical-accent-line "difference" callout at the end is a second reusable pattern that could recur across other Pillar Page instances (each with its own scope items and difference statement).
- Elements with unavailable metadata: None significant; all text, list, and divider nodes in this panel returned usable metadata.

#### CTA — "Ready to Move from Roadmap to Reality?"
- Exact visible structure: A centered-left heading ("Ready to move from roadmap to reality?") and supporting paragraph, a "Book a discovery call" button aligned to the right of the heading/paragraph block, and below that an "other Pillars" label with a row of five rounded pill links, one of which ("Strategy & Advisory") is shown in an active/filled state.
- Position and alignment: Heading: x=343, y=5364, w=639, h=96. Paragraph: x=343, y=5490, w=600, h=90. Button ("Link," id 231:1501): x=1343, y=5412, w=234, h=64 (right-aligned, vertically centered against the heading/paragraph block). Pill nav ("Frame 3357," id 231:1503): x=343, y=5638, w=1234, h=70, left-aligned beneath the heading.
- Width and height: As listed above; all measured from the design.
- Grid and container behavior: Heading/paragraph column is ~600–639px wide on the left; button sits in the remaining right-hand space of the same row; pill nav row spans the full 1234px content width beneath, wrapping five pills left to right with fixed gaps.
- Typography: Heading uses Desktop/H2 (Montserrat Bold, 40px/48px, matching its 96px two-line height). Paragraph uses Desktop/Body (18px/24px). Button label ("Book a discovery call") uses Desktop/CTA (Mabry Pro Regular, 16px/24px). "other Pillars" label uses Desktop/Overline, uppercase. Pill labels use Desktop/Body (18px/24px). Measured from the design (button and pill-nav typography confirmed via design context on nodes 231:1501 and 231:1503).
- Colors: Heading/paragraph text renders black on the page's white background. Button background is white with text color #1b1b1b. The active pill ("Strategy & Advisory") has background #4467f6 with white text; the four inactive pills ("Data, AI & Automation," "Engineering & Security," "Digital Products & UI/UX," "Capability Building") have a 1px solid #000826 border with #000826 text on a transparent/white fill. "other Pillars" label color #656565. Measured from the design (via design context on nodes 231:1501 and 231:1503).
- Borders: Button has no border (shadow-only treatment). Inactive pills each have a 1px solid #000826 border. Active pill has no border (filled background instead).
- Radius: Pills use a 25px corner radius (fully rounded/pill shape). Button's corner radius was not present in its extracted code (renders square in the screenshot). Measured from the design for the pills.
- Shadows: Button has a hard drop-shadow `6px 6px 0px #4467f6` (brand blue), echoing the same hard-shadow-in-brand-color pattern seen on the light "02" card earlier in the page.
- Spacing: Pills have 20px horizontal / 10px vertical internal padding and a 16px gap between each pill; the "other Pillars" label sits 6px above the pill row.
- Images and required assets: None (text/shape-only elements).
- Reusable components: The rounded-pill "other Pillars" navigation row is a reusable cross-linking component expected to repeat, with a different pill marked active, on each of the site's other Pillar pages (Data, AI & Automation; Engineering & Security; Digital Products & UI/UX; Capability Building). The white button with colored hard-shadow is the same CTA-button pattern used site-wide.
- Elements with unavailable metadata: None significant for this section.

#### Footer
- Exact visible structure: A single placed image asset spanning the bottom of the page, depicting: the "PIXELOCRACY" logo and a three-line tagline ("We transform the industries of the present, with the technologies of the future") on the left; a link column (Expertise, Work, About, Cookie Policy, Privacy Policy) and a LinkedIn icon on the right; a thin wavy horizontal divider line beneath; and a copyright line ("Pixelocracy © 2026, All rights reserved.") at the very bottom.
- Position and alignment: Full width of the frame. Node ("screencapture-thepixelocracy-2026-06-24-10_53_28 3," id 231:1500): x=0, y=5862, width=1920, height=813. Measured from the design.
- Grid and container behavior: This entire footer region is a single flattened image node with no child layers in `get_metadata` — it is a placed screenshot/capture of the live site's footer rather than native, decomposed Figma text/shape layers.
- Typography: Not retrievable as bound text styles, since the footer is a raster image, not live text. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Colors: Background is a very light lavender/off-white gradient tone; logo renders in brand blue; body/link text renders in dark navy/near-black; the wavy divider line renders as a faint light-gray/lavender stroke. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Borders: None visible beyond the single wavy divider line.
- Radius: The node is named "screencapture..." and tagged as a "rounded-rectangle" in `get_metadata`, but visually the image renders as a plain rectangular image with no visible corner rounding.
- Shadows: None visible.
- Spacing: Not measurable at the sub-element level since this is a flattened image; overall image height is 813px within the frame's remaining 805px (5862 to 6667), i.e., it occupies effectively the entire remaining bottom of the page.
- Images and required assets: One large raster/screen-capture image asset (PNG) serving as the entire footer, id 231:1500. Because this is a screenshot placeholder rather than native layers, no individual logo/icon/text assets are separately available through this node.
- Reusable components: The footer is the standard site-wide footer pattern (logo + tagline, link column, social icon, wavy divider, copyright line) expected to repeat identically across all page templates on this site; on this specific page it has been inserted as a flattened reference image rather than built from native components.
- Elements with unavailable metadata: The entire footer's internal structure — logo, tagline, each link ("Expertise," "Work," "About," "Cookie Policy," "Privacy Policy"), the LinkedIn icon, the wavy divider, and the copyright line — has no individual node metadata; it exists only as pixels inside one flattened image node. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Floating Scroll-to-Top Button
- Exact visible structure: A small circular button with an upward-pointing chevron icon, fixed to the bottom-right corner of the viewport, overlapping the footer image.
- Position and alignment: Bottom-right corner of the frame, overlapping the footer region.
- Width and height: Not present in `get_metadata`'s node tree; approximate visual size is a small circle (roughly 50–60px diameter based on its proportion to the surrounding footer content in the screenshot).
- Grid and container behavior: Appears to float independently of the footer's layout grid, positioned as an overlay in the corner.
- Typography: Not applicable (icon only).
- Colors: Circular background renders in brand blue, with a white chevron icon. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Borders: None visible.
- Radius: Fully circular.
- Shadows: A soft drop-shadow is visible beneath the circle in the screenshot.
- Spacing: Sits with a small margin from the bottom-right corner of the frame.
- Images and required assets: A chevron/arrow-up icon inside the circular button.
- Reusable components: This is the standard "back to top" utility control that would recur, in the same fixed position, on any sufficiently long page template on this site.
- Elements with unavailable metadata: This entire button — and even its presence — is not represented anywhere in the `get_metadata` output for this frame; it was found only by visual inspection of the rendered screenshot. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

### Mobile

A prior exhaustive enumeration of every top-level frame on this file's parent canvas (`231:2`, "FInal Mockups") found no frame named or resembling a Mobile version of this specific page. Not defined in the Figma design.

## Case Studies Archive

### Desktop

**General note on data availability:** The Desktop frame (`231:195`, "Case Studies Archive - Desktop", 1920×3878 px — Measured from the design) is built almost entirely from a single flattened raster layer named `screencapture-thepixelocracy-work-2026-07-02-12_10_50 1` (node `231:196`, x=0 y=0, 1920×3878 — Measured from the design). This one image node is the entire visible page background (hero, all four case-study cards, the "trusted by" strip, the CTA banner, and the footer body copy). Only two small groups exist as separate overlay nodes on top of that raster: the top navigation bar (`231:200`) and the EUROCERT certification badge (`231:197`) in the footer. `get_design_context` on both confirms they are themselves image/vector asset references (an `<img>`/SVG source), not editable text or fill nodes — so even for these two, no bound font, color, or style properties are retrievable. `get_variable_defs` on the frame returned no bound variables. Consequently, per the section-by-section breakdown below, dimensions/positions are labeled "Measured from the design" only where a real node exists; all other visual detail is labeled per the required screenshot-only phrasing.

#### Top Navigation Bar
- Exact visible structure: "PIXELOCRACY" wordmark logo at far left; centered nav links "Home", "Services" (with a dropdown chevron), "Work", "About", "Insights"; a "Contact" text link at far right.
- Position and alignment: Full-width bar pinned to the top of the frame; logo left-aligned, nav links centered, "Contact" right-aligned. Measured from the design (node `231:200`/`231:201`, x=0 y=0).
- Width and height: 1920×75 px — Measured from the design (node `231:201`, "image 4"). A child node `248:365` ("Frame 2", a vector/SVG asset) sits at x=596 y=27, 445.96×18.36 px — Measured from the design — overlaying the nav-link area.
- Grid and container behavior: Single horizontal row, full frame width, no wrapping.
- Typography: The bar itself and its "Frame 2" child are image/vector asset references (confirmed via `get_design_context`), not text nodes — no font family, size, weight, or line-height metadata is exposed. Visually confirmed in the live Figma canvas: sans-serif nav labels, small/medium weight, dark gray/near-black; "PIXELOCRACY" logo is bold, condensed, blue. Exact font metadata unavailable through MCP.
- Colors: Bar background is white/near-white. "PIXELOCRACY" wordmark is a vivid blue. Nav link text is dark gray/near-black; "Contact" appears in the same dark tone as the other links. Visually confirmed in the live Figma canvas. Exact fill metadata unavailable through MCP (no color/fill properties are exposed for image/vector asset nodes).
- Borders: None visible.
- Radius: None visible (flat rectangular bar).
- Shadows: None visible; bar sits flush against the white page background with no visible drop shadow or separating line.
- Spacing: Nav items are evenly spaced in a horizontal row; comfortable left/right margins from the frame edges. Visually confirmed in the live Figma canvas. Exact spacing metadata unavailable through MCP.
- Images and required assets: The entire bar is exported as a single PNG asset ("image 4") plus a separate SVG asset ("Frame 2") per `get_design_context`.
- Reusable components: This nav bar pattern (logo left / links center / Contact right) is a sitewide navigation component and would be expected to recur identically on other pages of the site.
- Elements with unavailable metadata: Individual nav link labels ("Home", "Services", dropdown chevron, "Work", "About", "Insights", "Contact") have no separate node IDs, text properties, or styles — visually confirmed in the live Figma canvas only.

#### Page Header / Hero
- Exact visible structure: Large bold black heading "What We've Built" centered below the nav bar; smaller bold subheading "Selected cases studies for your consideration" centered directly beneath it.
- Position and alignment: Centered horizontally in the frame, positioned in the upper portion of the page below the nav bar, with generous vertical whitespace above and below. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Width and height: No separate node exists for this text; it is part of the flattened raster (`231:196`, 1920×3878 — Measured from the design, for the frame as a whole). Individual text-block dimensions are unavailable.
- Grid and container behavior: Single centered text block, not part of a multi-column grid.
- Typography: Heading appears as a large, bold, black/near-black sans-serif display face; subheading is smaller, bold, and slightly muted (dark gray). Visually confirmed in the live Figma canvas. Exact font family, size, weight, and line-height metadata unavailable through MCP.
- Colors: Heading near-black; subheading dark gray. Visually confirmed in the live Figma canvas. Exact hex values unavailable through MCP (no fill metadata retrievable for raster content).
- Borders: None visible.
- Radius: Not applicable (text only).
- Shadows: None visible.
- Spacing: Clear vertical gap between heading and subheading, and a larger gap between the nav bar and the heading, and between the subheading and the first case-study card. Visually confirmed in the live Figma canvas. Exact spacing metadata unavailable through MCP.
- Images and required assets: None (text only).
- Reusable components: This "page title + one-line subtitle" pattern is visually consistent with a page-header component that would be expected on other listing/archive-style pages of the site.
- Elements with unavailable metadata: Both heading and subheading text — visually confirmed in the live Figma canvas only, no node IDs retrievable.

#### Case Study Cards List (4 items)
- Exact visible structure: A single vertical stack of four case-study rows, each row split into two halves: a left text panel (small blue numeral label "01."/"02."/"03."/"04.", a bold blue heading, a short dark-gray descriptive paragraph, and a blue "Learn More →" text link with an arrow glyph) and a right-hand full-bleed photographic image with a white client-logo wordmark overlaid on the photo. Card contents, top to bottom:
  - **01.** Heading "A 100% digital Marketplace for used cars"; copy "A fully digital marketplace for certified used cars offering transparent vehicle history, secure checkout, and door-to-door delivery across Greece."; image of a car exterior close-up with white "CARDOM" logo.
  - **02.** Heading "Integrated E-Booking System for Medical Consultations"; copy "A healthcare platform connecting patients with certified specialists for real-time appointment scheduling, secure messaging, and seamless digital consultations."; image of a stethoscope on medical paperwork with white "HHG" (Hellenic Healthcare Group) logo.
  - **03.** Heading "The Central Hub for Motorway Commuters"; copy "A digital platform for the Aegean Motorway delivering real-time traffic updates, live alerts, and reliable information for thousands of daily commuters."; aerial night photo of a curved highway/bridge with a white triangular-icon logo reading "ΑΥΤΟΚΙΝΗΤΟΔΡΟΜΟΣ ΑΙΓΑΙΟΥ" (Aegean Motorway).
  - **04.** Heading "The Official Greek e-Government Platform"; copy "Greece's official digital government platform - one place for certificates, permits, and public services, without visiting offices."; photo of classical columned government architecture in warm light with a white circular-icon "govgr" logo.
  - Each row repeats "Learn More →" as its call-to-action link.
- Position and alignment: The whole four-row stack is centered horizontally on the page as a single narrow column (not a full-width, multi-card grid) — visually the block occupies roughly the middle third of the 1920 px page width, with large equal margins left and right. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Width and height: No individual node IDs exist; entire card stack is part of the flattened raster (`231:196`). Exact per-card pixel dimensions unavailable through MCP.
- Grid and container behavior: One card per row, stacked vertically (single column, no side-by-side multi-card grid). Within each row, content splits into two roughly equal sub-columns: text panel (left) and image (right). This alternation/split is identical across all four rows (no left/right alternation between rows — text is always left, image always right).
- Typography: Numeral labels ("01." etc.) are small, bold, blue. Card headings are large, bold, blue, wrapping to 2–3 lines. Body copy is smaller, regular weight, dark gray, wrapping to 3–4 lines. "Learn More" link text is blue, medium weight, with a trailing arrow glyph. Visually confirmed in the live Figma canvas. Exact font family, size, weight, and line-height metadata unavailable through MCP.
- Colors: Text panel background is a very light lavender/periwinkle tint (visually distinct from the surrounding white page background). Numeral label, heading, and "Learn More" link all use the same vivid blue as the "PIXELOCRACY" logo. Body copy is dark gray/near-black. Photographs on the right have a dark overlay/gradient sufficient to keep the white logo wordmark legible. Visually confirmed in the live Figma canvas. Exact hex values unavailable through MCP.
- Borders: None visible on the panels or images.
- Radius: None visible; panel and image edges appear square/flat, meeting at a hard seam between text and image halves.
- Shadows: None visible.
- Spacing: A consistent visible gap separates each of the four rows from the next; padding exists inside each text panel around the numeral/heading/copy/link stack. Visually confirmed in the live Figma canvas. Exact spacing metadata unavailable through MCP.
- Images and required assets: Four distinct photographic images (car exterior, medical/stethoscope scene, aerial motorway/bridge at night, columned government building), each with a distinct white client-logo wordmark/icon baked into the image.
- Reusable components: This is a single repeating "case-study card" component used four times with different copy, image, and logo — the same construction (numeral + heading + copy + "Learn More" link + logo-on-photo) would be expected to recur on other case-study or work-listing sections of the site.
- Elements with unavailable metadata: All four cards' headings, body copy, numerals, "Learn More" links, images, and overlaid client logos — visually confirmed in the live Figma canvas only; no node IDs are retrievable for any of this content.

#### "Trusted by 100+ organisations" Logo Strip
- Exact visible structure: Small centered caption "Trusted by 100+ organisations" above a single horizontal row of five grayscale/muted client logos: a partially cropped logo reading "...nsport ...athens", an "HHG" (Hellenic Healthcare Group) logo, a logo reading "ΦΥΣΙΚΟ ΑΕΡΙΟ" with a small torch/flame icon, an "Attico" logo with a small arrow-like icon, and a faint, low-opacity capital "J" logo at the right edge.
- Position and alignment: Centered horizontally, positioned below the fourth case-study card and above the CTA banner. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Width and height: No node ID exists; part of the flattened raster. Unavailable through MCP.
- Grid and container behavior: Single horizontal row of five logos, evenly spaced, no wrapping.
- Typography: Caption text is small, centered, medium weight, dark gray. Visually confirmed in the live Figma canvas. Exact font metadata unavailable through MCP.
- Colors: All logos rendered in muted grayscale/low-contrast tones; the right-most "J" mark appears notably lower-opacity/faded compared to the other four. Visually confirmed in the live Figma canvas. Exact hex values unavailable through MCP.
- Borders: None visible.
- Radius: Not applicable.
- Shadows: None visible.
- Spacing: Even horizontal gaps between the five logos. Visually confirmed in the live Figma canvas. Exact spacing metadata unavailable through MCP.
- Images and required assets: Five separate client-logo graphics.
- Reusable components: A logo-strip / social-proof pattern; the "HHG" logo also reused as a client photo overlay in Card 02 above.
- Elements with unavailable metadata: Caption text and all five logos — visually confirmed in the live Figma canvas only.

#### CTA Banner ("Get in touch")
- Exact visible structure: A large rounded rectangular banner containing a centered white heading "Get in touch", a bold white subheading "Looking for a reliable partner to design, build, or support your next digital project? We'd be happy to hear more!", a lighter-weight white paragraph "Share a few details with us, and someone from our team will get back to you promptly and professionally. We treat every inquiry with care - and every project with clarity.", and a white rectangular button labeled "Talk to our team" in dark text.
- Position and alignment: Centered horizontally, all internal content centered; positioned below the logo strip and above the footer. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Width and height: No node ID exists; part of the flattened raster. The banner visually spans a wide centered block (narrower than the full 1920 px frame width, with margins left and right) and has a visibly tall vertical extent to accommodate heading, subheading, paragraph, and button. Exact pixel dimensions unavailable through MCP.
- Grid and container behavior: Single centered content block; heading, subheading, paragraph, and button stacked vertically in one column.
- Typography: "Get in touch" is large, bold, white. Subheading is medium/bold weight, white. Paragraph is smaller, regular weight, white with slightly reduced emphasis. Button label is medium/bold weight, dark text. Visually confirmed in the live Figma canvas. Exact font metadata unavailable through MCP.
- Colors: Banner background is a diagonal blue gradient, lighter blue/periwinkle toward the top-left corner transitioning to a deep navy blue toward the bottom-right corner. Button background is white/near-white with dark text. Visually confirmed in the live Figma canvas. Exact hex values unavailable through MCP.
- Borders: None visible on the banner or button.
- Radius: The banner has visibly rounded corners (soft rounded-rectangle silhouette). The button also has a visible rounded-rectangle shape. Visually confirmed in the live Figma canvas. Exact radius value unavailable through MCP.
- Shadows: None clearly visible.
- Spacing: Generous internal padding around all banner content; clear vertical gaps between heading, subheading, paragraph, and button. Visually confirmed in the live Figma canvas. Exact spacing metadata unavailable through MCP.
- Images and required assets: No photographic image; gradient background only.
- Reusable components: This "Get in touch" banner with a "Talk to our team" button is a CTA-banner pattern that would be expected to recur, in the same visual language, on other pages of the site.
- Elements with unavailable metadata: Heading, subheading, paragraph, and button (including its label text) — visually confirmed in the live Figma canvas only.

#### Footer
- Exact visible structure: Left column with "PIXELOCRACY" logo (blue) and tagline "We transform the industries of the present, with the technologies of the future"; a middle link column listing "Expertise", "Work", "About", "Cookie Policy", "Privacy Policy" (stacked, bold); a small square LinkedIn icon button below the links; a right-side EUROCERT certification badge (small blue/red/gold badge icon plus the text "Certified Information Security Management System / EN ISO/IEC 27001:2023 / Certified by EUROCERT"); a bottom bar with copyright text "Pixelocracy © 2026, All rights reserved." at left and a circular blue "back to top" button (white up-chevron) at the far bottom-right; the footer's lower background transitions into a light lavender tint with a subtle wavy decorative line pattern.
- Position and alignment: Full-width footer at the very bottom of the frame; content arranged in horizontally distributed columns (logo/tagline left, links center-left, cert badge right), with the copyright/back-to-top bar beneath. Visually confirmed in the live Figma canvas, except for the EUROCERT badge group described below.
- Width and height: Overall frame is 1920×3878 px — Measured from the design. The EUROCERT badge group (`231:197`, "Group 1649") is a real node at x=1318 y=3331, 444.12×60.17 px — Measured from the design — containing the badge icon (`231:198`, "eurocert-logo 1", x=1318 y=3331, 60×60 px — Measured from the design) and the certification text rendered as a vector (`248:393`, x=1394.72 y=3334.64, 367.4×56.53 px — Measured from the design). All other footer content has no separate node and is part of the flattened raster.
- Grid and container behavior: Multi-column footer layout (logo/tagline, link list, cert badge) sitting above a single-row bottom bar (copyright + back-to-top button).
- Typography: "PIXELOCRACY" logo is bold, blue. Tagline is regular weight, dark gray. Link list items are bold, dark/near-black. Copyright text is small, regular weight, dark gray. The EUROCERT text is rendered as a vector graphic (per `get_design_context`), not editable text — no font metadata exposed for it. Visually confirmed in the live Figma canvas for all other text. Exact font metadata unavailable through MCP.
- Colors: Footer background is white transitioning to a light lavender tint toward the bottom. "PIXELOCRACY" logo blue matches the nav-bar logo and card-heading blue used elsewhere on the page. Link text and copyright text are dark gray/near-black. Back-to-top button is a filled blue circle with a white icon. EUROCERT badge uses its own multi-color (blue/red/gold) mark. Visually confirmed in the live Figma canvas. Exact hex values unavailable through MCP.
- Borders: None visible.
- Radius: The back-to-top button is circular. No other radius observed.
- Shadows: None clearly visible.
- Spacing: Comfortable vertical spacing between the link-list items; clear separation between the main footer content block and the bottom copyright bar. Visually confirmed in the live Figma canvas. Exact spacing metadata unavailable through MCP.
- Images and required assets: "PIXELOCRACY" logo mark, LinkedIn icon, EUROCERT badge icon (PNG asset per `get_design_context`) and its accompanying certification text (SVG asset), back-to-top icon, and the decorative wavy-line background graphic.
- Reusable components: This footer (logo/tagline, link list, social icon, EUROCERT badge, copyright bar, back-to-top button) is a sitewide footer component; the EUROCERT badge in particular is a discrete, reusable certification-badge component that would be expected to appear identically in other pages' footers.
- Elements with unavailable metadata: "PIXELOCRACY" logo, tagline, all five footer links, LinkedIn icon, copyright text, back-to-top button, and decorative wavy-line pattern — visually confirmed in the live Figma canvas only. (The EUROCERT badge's position/size is measured from real node metadata as noted above, but its icon/text content itself is delivered only as image/vector asset references with no further style metadata.)

### Mobile

**General note on data availability:** The Mobile frame (`271:2490`, "Case Studies Archive - Mobile", 420×4700 px — Measured from the design) contains a single child node: the flattened raster `screencapture-thepixelocracy-work-2026-07-27-11_34_29 1` (node `271:2647`, x=0 y=0, 420×4700 — Measured from the design), which is the entire visible page. Unlike Desktop, Mobile has **no separate overlay nodes at all** — not even for the nav bar or the certification badge equivalents. Every element described below, including the nav bar and footer, is therefore visually confirmed in the live Figma canvas only, with no retrievable node metadata, except for the frame's own overall dimensions.

#### Top Navigation Bar — Mobile
- Exact visible structure: "PIXELOCRACY" logo at top-left; a small multi-line icon (hamburger-style menu control) at top-right in place of Desktop's full horizontal link list. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Position and alignment: Full-width bar at the very top of the frame; logo left-aligned, menu icon right-aligned.
- Width and height: Part of the single full-frame raster (420×4700 — Measured from the design, for the frame as a whole); no separate bar node exists (unlike Desktop, which has a dedicated nav-bar overlay group).
- Grid and container behavior: Single horizontal row, condensed to two elements (logo + menu icon) versus Desktop's five spelled-out nav links plus "Contact".
- Typography/Colors/Borders/Radius/Shadows/Spacing: Visually consistent with Desktop's blue "PIXELOCRACY" wordmark styling; the individual "Home/Services/Work/About/Insights/Contact" links seen on Desktop are not spelled out on Mobile and are instead condensed into the menu icon. Visually confirmed in the live Figma canvas. Exact metadata unavailable through MCP.
- Images and required assets: Logo mark and menu icon.
- Reusable components: Same sitewide nav pattern as Desktop, collapsed to a mobile-menu variant.
- Elements with unavailable metadata: Logo, menu icon — no node IDs exist on Mobile for this bar at all (Desktop at least has overlay node IDs `231:200`/`231:201`/`248:365`; Mobile has none).

#### Page Header / Hero — Mobile
- Exact visible structure: Same "What We've Built" heading and "Selected cases studies for your consideration" subheading as Desktop, centered.
- Position and alignment: Centered, same relative position (below nav, above the first card) as Desktop.
- Width and height: Part of the single full-frame raster; no separate node. Text wraps across more lines than on Desktop due to the 420 px viewport width — visually confirmed in the live Figma canvas.
- Grid and container behavior: Single centered column, same as Desktop, but narrower.
- Typography: Same visual heading/subheading hierarchy as Desktop (bold black heading, bold gray subheading), rendered at a reduced type scale relative to the narrower viewport. Visually confirmed in the live Figma canvas. Exact font metadata unavailable through MCP.
- Colors: Same near-black heading / dark-gray subheading as Desktop. Visually confirmed in the live Figma canvas.
- Borders/Radius/Shadows: None visible, matching Desktop.
- Spacing: Comparable vertical rhythm to Desktop but compressed for the narrower frame. Visually confirmed in the live Figma canvas.
- Images and required assets: None.
- Reusable components: Same page-header pattern as Desktop.
- Elements with unavailable metadata: Heading and subheading text — no node IDs on Mobile.

#### Case Study Cards List (4 items) — Mobile
- Exact visible structure: Same four cards and same copy/logos as Desktop (Cardom, HHG, Aegean Motorway, gov.gr), but each card's internal layout is **stacked vertically instead of side-by-side**: full-width photo with the white logo overlay on top, followed directly beneath by the light-lavender text panel (numeral, heading, copy, "Learn More →" link).
- Position and alignment: Single centered full-width column; cards stacked top to bottom in the same 01→04 order as Desktop.
- Width and height: Each card's image and text panel span the full 420 px frame width; part of the single full-frame raster, no separate node metadata available.
- Grid and container behavior: Single column, single card per row (matching Desktop's single-column stacking), but each card's two halves (image/text) are stacked vertically rather than split into left/right sub-columns as on Desktop — this is the primary Desktop-to-Mobile layout difference for this section.
- Typography: Same heading/copy/numeral/link hierarchy as Desktop, at a mobile-appropriate reduced scale; headings wrap across more lines given the narrower column. Visually confirmed in the live Figma canvas. Exact font metadata unavailable through MCP.
- Colors: Same light-lavender panel background, blue numerals/headings/links, dark-gray body copy, and white logo-on-photo treatment as Desktop. Visually confirmed in the live Figma canvas.
- Borders/Radius: None visible, matching Desktop.
- Shadows: None visible.
- Spacing: Vertical gaps between the four cards are preserved; internal panel padding is compressed relative to Desktop's wider layout. Visually confirmed in the live Figma canvas.
- Images and required assets: Same four photographs and four client logos as Desktop.
- Reusable components: Same repeating case-study card component as Desktop, in its stacked (image-over-text) mobile arrangement rather than Desktop's side-by-side arrangement.
- Elements with unavailable metadata: All four cards' text and images — no node IDs on Mobile.

#### "Trusted by 100+ organisations" Logo Strip — Mobile
- Exact visible structure: Same centered caption as Desktop; the logo row below it shows fewer logos legible within the 420 px width than Desktop's five — visually, three grayscale logos are distinguishable (a "transport/athens"-style mark, the "HHG" logo, and one further dark mark) at this render's native resolution.
- Position and alignment: Centered, same relative position between the last card and the CTA banner as on Desktop.
- Width and height: Part of the single full-frame raster; no separate node.
- Grid and container behavior: Single horizontal row, compressed for mobile width.
- Typography/Colors: Same small centered caption style and muted grayscale logo treatment as Desktop. Visually confirmed in the live Figma canvas.
- Borders/Radius/Shadows: None visible.
- Spacing: Logos appear closer together than on Desktop, consistent with the narrower row. Visually confirmed in the live Figma canvas.
- Images and required assets: Client logo graphics (fewer clearly distinguishable at this render's resolution than the five visible on Desktop).
- Reusable components: Same logo-strip pattern as Desktop.
- Elements with unavailable metadata: Caption and all visible logos — no node IDs on Mobile. Note: whether all five Desktop logos are present but simply too small to distinguish at native mobile resolution, versus fewer being shown, cannot be determined with certainty from the available render.

#### CTA Banner ("Get in touch") — Mobile
- Exact visible structure: Same heading "Get in touch", bold subheading, paragraph, and "Talk to our team" white button as Desktop, stacked in a full-width rounded panel.
- Position and alignment: Centered, full mobile width (with side margins), same relative position between logo strip and footer as Desktop.
- Width and height: Part of the single full-frame raster; no separate node. Panel spans most of the 420 px frame width with visible side margins; taller relative to its width than the Desktop version due to text reflow. Visually confirmed in the live Figma canvas.
- Grid and container behavior: Single centered column, same stacking order (heading → subheading → paragraph → button) as Desktop.
- Typography: Same white heading/subheading/paragraph hierarchy as Desktop, reduced in scale; text wraps across more lines. Visually confirmed in the live Figma canvas. Exact font metadata unavailable through MCP.
- Colors: Same diagonal blue-to-navy gradient background and white button as Desktop. Visually confirmed in the live Figma canvas.
- Borders: None visible.
- Radius: Same rounded-rectangle banner and button shape as Desktop. Visually confirmed in the live Figma canvas.
- Shadows: None visible.
- Spacing: Internal padding is compressed relative to Desktop but preserves the same content order and relative gaps. Visually confirmed in the live Figma canvas.
- Images and required assets: None (gradient only), matching Desktop.
- Reusable components: Same CTA-banner component as Desktop, reflowed for mobile width.
- Elements with unavailable metadata: Heading, subheading, paragraph, button — no node IDs on Mobile.

#### Footer — Mobile
- Exact visible structure: Same content set as Desktop but arranged in a single stacked column instead of Desktop's multi-column layout: "PIXELOCRACY" logo, tagline, then the link list ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy") stacked below it, then the LinkedIn icon, then the decorative wavy-line background, then the bottom bar with "Pixelocracy © 2026, All rights reserved." and the circular blue back-to-top button.
- Position and alignment: Full-width, single centered/left-aligned column at the very bottom of the frame, stacked vertically top to bottom.
- Width and height: Part of the single full-frame raster (no separate nodes at all on Mobile — this differs from Desktop, where the EUROCERT badge exists as a real node `231:197`/`231:198`/`248:393`).
- Grid and container behavior: Single-column stacked layout, replacing Desktop's side-by-side logo/links/badge columns.
- Typography: Same "PIXELOCRACY" blue wordmark, gray tagline, bold dark link list, and small gray copyright text as Desktop, at mobile scale. Visually confirmed in the live Figma canvas. Exact font metadata unavailable through MCP.
- Colors: Same white-to-light-lavender footer background and blue/dark-gray text treatment as Desktop. Visually confirmed in the live Figma canvas.
- Borders: None visible.
- Radius: Back-to-top button remains circular.
- Shadows: None visible.
- Spacing: Links are stacked with visible vertical gaps between each item, consistent with a single-column reflow of Desktop's link list. Visually confirmed in the live Figma canvas.
- Images and required assets: Logo mark, LinkedIn icon, decorative wavy-line background graphic, back-to-top icon.
- Reusable components: Same sitewide footer component as Desktop, reflowed to a single column for mobile.
- Elements with unavailable metadata: All footer text and icons — no node IDs on Mobile. Additionally, the EUROCERT certification badge and its accompanying text, clearly present as a distinct element in the Desktop footer, is not distinguishable in the Mobile render at this resolution — its presence or absence on the Mobile page cannot be confirmed from the available screenshot or metadata.

## Wired Case Study

### Desktop

#### Global Site Navigation Bar (header)
- Exact visible structure: Full-width utility bar sitting above the case-study content: "PIXELOCRACY" logo (left, bold condensed lettering in blue), primary nav links "Home / Services (with a dropdown caret) / Work / About / Insights" (left-center), and a "Contact" link (far right).
- Position and alignment: Spans the full frame width at the very top of the page, before the hero. Logo left-aligned, nav items centered-left, Contact right-aligned.
- Width and height: Container "Group 1647" (node `231:380`), x=0 y=0, width 1920, height 75. Measured from the design.
- Grid and container behavior: Full-bleed bar (background rectangle "image 4", node `231:381`, 1920×75) with an inner nav-item cluster (node `248:368`) roughly horizontally centered.
- Typography: Nav link labels and logo wordmark are rendered as vector/graphic content in this frame — no bound text style could be read from metadata for this bar. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for individual link text.
- Colors: Bar background is white/near-white; logo and "Services" caret render in the site's blue accent; nav text renders in dark near-black. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Borders: None visibly on the bar itself; a thin rule appears to sit just under the "TODAY'S PICKS" strip inside the hero mockup image (not part of this bar).
- Radius: None observed.
- Shadows: None observed.
- Spacing: Logo sits near the left edge; nav cluster is offset toward center-left; "Contact" sits near the right edge with a wide gap between it and the nav cluster.
- Images and required assets: Background rectangle "image 4" (node `231:381`) and an internal vector group "Vector" (node `248:369`) forming the nav item glyphs/underline. Images and required assets: this vector rendering could not be decomposed into individual named links via metadata.
- Reusable components: This is the site-wide global header, expected to repeat identically across all other case-study pages and the rest of the Pixelocracy site.
- Elements with unavailable metadata: Individual nav-link text nodes ("Home", "Services", "Work", "About", "Insights", "Contact") are not separately named/typed in `get_metadata` — they are packed inside a single vector group. Visually confirmed in the live Figma canvas.

#### Case Study Hero ("Magazine Cover Hero Section")
- Exact visible structure: Two-column hero. Left column: rounded pill badge "CASE STUDY 2025", two-line headline "WIRED" / "GREECE", a body paragraph ("A digital rebirth of a technological icon. We engineered the Greek edition of WIRED magazine to bridge international standards with local cultural nuances, maintaining the publication's signature clinical aesthetic."), and a "Check it out" CTA link with a blue offset shadow. Right column: a large device/browser mockup showing the live WIRED Greece homepage (browser chrome bar "WIRED" masthead, "TODAY'S PICKS" strip, hero photo, headline "Πώς η Τουρκία κατέκτησε τον κλάδο της μεταμόσχευσης μαλλιών", and a secondary "AGI" story block).
- Position and alignment: Frame "Magazine Cover Hero Section" (node `231:312`), x=0 y=74, width 1920, height 805. Inner "Container" (node `231:313`) x=320 y=60 (i.e., 320px side margin), width 1280, height 685 — a centered 1280px content column inside the 1920px frame. Left text column ("Container", node `231:314`) width 628; right mockup ("Background+Border+Shadow", node `231:325`) width ≈525, positioned at x=784 within the container (right-aligned).
- Width and height: Section 1920×805. Left column 628×492. Right mockup ≈525×687. Measured from the design.
- Grid and container behavior: Standard 320px-margin / 1280px-content desktop container reused across the page's sections.
- Typography: Badge text "CASE STUDY 2025" — From Figma style: Desktop/Body Small (Montserrat Regular 16/24). Heading "WIRED GREECE" — From Figma style: Desktop/H1 special (Sharp Grotesk Book 25, 80px, line-height 76). CTA "Check it out" — From Figma style: Desktop/CTA (Mabry Pro Regular 16/24). Body paragraph — From Figma style: Desktop/Body (Montserrat Regular 18/24).
- Colors: Badge background `#d7defc`, badge text `#234cdc` (Measured from the design). Heading line 1 "WIRED" solid `#000826`; heading line 2 "GREECE" is a linear gradient 129.75° from `rgb(35,76,220)` (`#234cdc`) to `rgb(68,103,246)` (`#4467f6`) (Measured from the design). CTA button: white background, text `#1b1b1b` (Measured from the design).
- Borders: CTA button has no stroke; the mockup frame ("Background+Border+Shadow") is named as having a border/shadow treatment framing the screenshot.
- Radius: Badge pill is fully rounded (`rounded-[9999px]`). Mockup image corners are rounded rectangles.
- Shadows: CTA button has a hard, non-blurred drop shadow `6px 6px 0px #4467f6` (Measured from the design) — a flat "brutalist" offset-shadow style. The hero mockup frame carries a drop/border shadow per its layer name "Background+Border+Shadow".
- Spacing: Badge sits above headline with a gap; headline sits above body paragraph (paragraph container starts at y=252 relative to left column, i.e. ~184px below top of heading block); CTA sits below paragraph with ~32px top padding before the button.
- Images and required assets: Two stacked bitmap screenshots inside the mockup — "screencapture-wired-gr-2026-06-08-10_27_13 1" (main page capture) and "screencapture-wired-gr-2026-06-08-10_27_13 2" (top browser-chrome strip), nodes `231:327` / `231:328`.
- Reusable components: The badge, "Check it out" link/button pattern, and the browser-mockup frame are all patterns that recur later in this same page (rules-section cards reuse the identical hard-shadow card style; the component gallery reuses the browser-mockup pattern) and are expected to reuse across the other 4 case-study pages in this file.
- Elements with unavailable metadata: None beyond standard bitmap screenshots; all key elements resolved via metadata plus screenshot.

#### Section 01 — The Brief ("Joining a Legacy")
- Exact visible structure: Overline label "01 — THE BRIEF", heading "JOINING A LEGACY", two body paragraphs (WIRED's 30-year legacy under Condé Nast; the mandate to extend rather than reimagine it for Greece). Below the copy, two side-by-side full-browser mockup screenshots: a tall portrait mockup of the WIRED Greece homepage captioned "GREECE" above it, and a smaller landscape mockup of the global WIRED.com homepage (a WWDC26 story) captioned "GLOBAL" below it.
- Position and alignment: Overline at x=320 y=1033; heading at x=320 y=1063; paragraphs at x=936 y=1029 and y=1125 (right-aligned copy block, width 664, sitting to the right of/below the heading). "GREECE" mockup group ("Group 417", node `231:329`) x=320 y=1328, width 660, height 805. "GLOBAL" mockup group ("Group 418", node `231:333`) x=1013 y=1328, width 587, height 400. "GREECE" caption at x=331 y=1301 (above its mockup); "GLOBAL" caption at x=1517 y=1735 (below its mockup).
- Width and height: Measured from the design (see coordinates above).
- Grid and container behavior: Sits within the same 320–1600px content column as the hero; heading/overline left-aligned at x=320, paragraph copy offset further right at x=936 (asymmetric two-column reading pattern), then the two mockups return to spanning the full 320–1600 column width.
- Typography: Overline "01 — THE BRIEF" — From Figma style: Desktop/Overline (Sharp Grotesk Medium 25, 15px, line-height 20, uppercase), color `#4467f6` (Measured from the design). Heading "JOINING A LEGACY" — visually a large bold headline consistent with the page's H3-scale pattern; exact bound style not individually confirmed for this specific text node. Body paragraphs — From Figma style: Desktop/Body (Montserrat Regular 18/24).
- Colors: Overline blue `#4467f6`; body copy dark `#000826`/near-black. "GREECE"/"GLOBAL" captions render as small bold caption labels. Visually confirmed in the live Figma canvas for exact caption color; not independently pulled from a fill value.
- Borders: Mockup frames have rounded-rectangle image masks (node type "rounded-rectangle" in metadata) simulating a browser window border.
- Radius: Rounded corners on both mockup screenshots (rounded-rectangle nodes `231:330`–`231:332` and `231:334`–`231:335`).
- Shadows: None distinctly called out for this section's mockups beyond the rounded-rectangle image masks.
- Spacing: ~100px vertical gap between the two-paragraph copy block and the mockup row; the two mockups are vertically offset from each other (GREECE mockup taller/extends lower than GLOBAL mockup) rather than bottom- or top-aligned as a pair.
- Images and required assets: "screencapture-wired-gr-2026-06-09-10_54_59 1" (full GREECE homepage screenshot) and its browser-chrome strip "image 62"; "screencapture-wired-2026-06-09-11_22_49 1" (WIRED.com WWDC26 homepage screenshot) with its own rounded frame "image 61".
- Reusable components: The "browser mockup" screenshot-in-rounded-frame pattern reappears in the hero and again in Section 04's gallery — a recurring case-study component for showing live site screenshots.
- Elements with unavailable metadata: There is no wrapping frame/group tying the overline, heading, two paragraphs, and "GREECE"/"GLOBAL" captions together as a single "section" node — each exists as a loose top-level text node in the frame. Positions were confirmed via metadata coordinates; there is no single node ID representing "Section 01" as a whole.

#### Section 02 — The Rules ("Adapting an Existing Design System")
- Exact visible structure: Centered overline "02 — THE RULES" and two-line centered heading "ADAPTIN AN EXISTING DESIGN SYSTEM" (note: "ADAPTIN" appears to be missing a trailing "G" in the source copy). Below, two centered paragraphs about Condé Nast's non-negotiable brand standards and the narrow room for local adaptation. Below that, two side-by-side cards: "FIXED NON-NEGOTIABLE" (white card, bulleted list of 6 items — WIRED masthead/logo, black/white colour system, navigation structure/categories, grid proportions/spacing logic, article layout hierarchy, typographic scale relationships) and "FLEXIBLE ADAPTABLE" (solid blue card, bulleted list of 6 items — Greek typeface selection, headline rhythm/line length, navigation label translations, new page types, subscription flow/UI copy, footer structure/local links).
- Position and alignment: Overline "02 — THE RULES" at x=883.5 y=2288 (centered); heading at x=725 y=2318, width 471 (centered, two lines). Paragraphs at x=602 y=2422 (width 716) and x=605 y=2490 (width 711), centered block. Card "FIXED NON-NEGOTIABLE" (node `231:253`) at x=507 y=2642, width 429, height 318. Card "FLEXIBLE ADAPTABLE" (node `231:275`) at x=982 y=2642, width 428, height 318 — the two cards sit edge-to-edge, centered as a pair within the 1280px column.
- Width and height: Section background rectangle "Rectangle 2" (node `231:224`) 1920×779 at x=1 y=2202; decorative gradient overlay "Rectangle 81" (node `231:214`) 1922×1505 at x=-1 y=2303. Measured from the design.
- Grid and container behavior: Content is centered (not left-aligned like Section 01), reflecting a "manifesto/rules" visual treatment distinct from the rest of the page.
- Typography: Overline — From Figma style: Desktop/Overline (Sharp Grotesk Medium 25, 15/20, uppercase, `#4467f6`). Card titles "FIXED NON-NEGOTIABLE" / "FLEXIBLE ADAPTABLE" — From Figma style: Desktop/H5 base with a Montserrat Bold 20px override, line-height 24. Card list items — From Figma style: Desktop/Body (Montserrat 18/24), with bold spans on key terms ("logo", "colour system", "Navigation", "Grid", "Typographic scale").
- Colors: Section background `#f0f3fe` (Measured from the design). "FIXED NON-NEGOTIABLE" card: white background, heading/body text `#000826`/black. "FLEXIBLE ADAPTABLE" card: background `#4467f6` (Measured from the design), all text white.
- Borders: No strokes on cards; card boundary defined by fill + shadow only.
- Radius: Cards appear to have square/near-square corners in the rendered screenshot (no rounded-rectangle node type used for these cards).
- Shadows: "FIXED NON-NEGOTIABLE" card: hard offset drop shadow `6px 6px 0px #4467f6` (Measured from the design). "FLEXIBLE ADAPTABLE" card: hard offset drop shadow `6px 6px 0px #ccc` (Measured from the design) — same "brutalist" flat-shadow token as the hero CTA, color-adapted per card background for contrast.
- Spacing: 40px internal card padding, 20px gap between card title and list, 10px gap between list rows (Measured from the design, node `231:253`/`231:275` padding/gap values).
- Images and required assets: Each list bullet is a small (8×8) ellipse icon asset (e.g. `imgEllipse1` SVG) rather than a text bullet character.
- Reusable components: The "Overlay+Border+OverlayBlur" card component (white/blue variant with hard offset shadow) is a distinct, named reusable component in this file and is a strong candidate to reuse on other case-study pages for comparison/feature-list callouts. The centered section-title pattern (overline + two-line heading + intro paragraphs) also recurs for Sections 03–06.
- Elements with unavailable metadata: The decorative gradient shape "Rectangle 81" spans from this section into Section 03's area (y=2303–3807); its exact purpose (ambient background wash vs. distinct band) is inferred from position/gradient rendering rather than an explicit "background of section X" label.

#### Section 03 — The Typeface Problem ("Greek Has No WIRED Typeface")
- Exact visible structure: Overline "03 — THE TYPEFACE PROBLEM" and two-line heading "GREEK HAS NO WIRED TYPEFACE" on the left, followed by two paragraphs (Latin typefaces lack Greek support; the resulting typeface combination), a three-item plain list ("Fira Sans Extra Condensed for headings," "JetBrains Mono for labels," "Source Serif 4 for body text") and a closing line "Set at headline scale, it reads as WIRED." On the right, a stacked before/after comparison: "WIRED GLOBAL" label + headline "Meet the sad wives of AI" + strapline, directly above "WIRED GREECE" label + Greek headline "Ασπίδα του Αχιλλέα: Η φηφιακή φάλαγγα κατά των drones" + Greek strapline, rendered as graphic/vector artwork rather than live text.
- Position and alignment: Whole section wrapped in group "Group 420" (node `231:231`), x=320 y=3259, width 1277, height 556. Left column text block starts x=320; right comparison graphics ("Vector" nodes `248:351` and `248:353`) at x≈1024, y≈3404 and y≈3596 respectively — a two-column layout within the same 1280px content width.
- Width and height: Group 420: 1277×556 (Measured from the design). Right-hand vector graphics: `248:351` ≈511×153; `248:353` ≈574×219.
- Grid and container behavior: Two-column split within the standard 1280px container — left ~600px text column, right ~600px graphic comparison column.
- Typography: Overline — From Figma style: Desktop/Overline (Sharp Grotesk Medium 25, 15/20, uppercase, `#4467f6`). Heading — Desktop/H3-scale (Sharp Grotesk Medium 25, 32/32) two-line bold display type. Body copy and the three-item list — From Figma style: Desktop/Body (Montserrat 18/24). The right-side comparison graphic renders "WIRED GLOBAL"/"WIRED GREECE" small bold caps labels, large serif-condensed display headlines, and a serif body strapline — these are baked into a vector/image asset, not live text.
- Colors: Left-column text in `#000826`/black on white background. Right-column comparison graphic renders in black text on white, visually confirmed in the screenshot.
- Borders: None observed.
- Radius: None observed on this section's elements.
- Shadows: None observed.
- Spacing: Paragraph-to-list gap and list-to-closing-line gap follow the section's standard body rhythm (~72–96px paragraph blocks).
- Images and required assets: Two vector graphics (`248:351`, `248:353`) depicting the WIRED Global vs. WIRED Greece headline-style comparison — these are flattened vector artwork, not editable text nodes.
- Reusable components: The overline + two-line heading pattern matches Sections 02, 04, 05, 06, confirming a repeating "numbered section header" component used consistently down the page (and expected on the other 4 case-study pages).
- Elements with unavailable metadata: The comparison headline graphics ("Meet the sad wives of AI" / "Ασπίδα του Αχιλλέα...") exist only as vector artwork; no live text node carries this copy in `get_metadata`. Visually confirmed in the live Figma canvas. Exact node metadata (font, color per character) unavailable through MCP.

#### Section 04 — Component by Component
- Exact visible structure: Dark full-bleed band containing centered overline "04 — THE BUILT" and two-line heading "COMPONENT BY COMPONENT", two body paragraphs (about mapping the system and building Greek-specific components inside existing system logic), followed by a staggered, asymmetric gallery of six website-screenshot mockups at varying sizes: (1) an AI-generation article screenshot, (2) an author-profile screenshot ("Celia"), (3) a film-festival article screenshot ("image 60"), (4) a tall data-centers article screenshot, (5) a tech category-listing screenshot ("image 58"), (6) a wide tech category/grid screenshot ("image 56").
- Position and alignment: Dark background rectangle "Rectangle 79" (node `231:211`) x=0 y=3967, width 1920, height 4448 — spans this section and continues into Section 05. Heading/overline centered at x≈664–887, y=4121–4183. Gallery images positioned at: `231:296` x=320 y=4511 (782×932); `231:297` x=1235 y=5018 (365×700); `231:298` x=453 y=5588 (515×777); `231:299` x=1102 y=6073 (498×1476); `231:300` x=320 y=6751 (710×628); `231:301` x=320 y=7694 (1280×571).
- Width and height: Section background 1920×4448 (Measured from the design); individual images per coordinates above.
- Grid and container behavior: Images are freely (not grid-) positioned in an editorial collage/masonry arrangement across the 1280px content column plus some bleed toward the frame edges (e.g., image at x=1102 extends to x=1600, near the 1600 right-margin boundary).
- Typography: Overline "04 — THE BUILT" — From Figma style: Desktop/Overline (Sharp Grotesk Medium 25, 15/20, uppercase, `#4467f6`). Heading "COMPONENT BY COMPONENT" — Desktop/H3-scale two-line bold display. Body paragraphs — From Figma style: Desktop/Body (Montserrat 18/24), rendered in light/white text against the dark background.
- Colors: Section background `#000826` (Measured from the design, same token as page-wide "Text" color repurposed as a dark fill). Body copy renders in white/light gray against this dark background (visually confirmed; exact text fill hex for this specific paragraph not independently pulled).
- Borders: Two secondary rectangles "Rectangle 82" (node `231:212`, 1920×817 at y=7598) and "Rectangle 83" (node `231:213`, ≈1920×817 at y=4784) sit within this dark band — likely alternate-shade panel accents layered behind parts of the gallery; exact shade not independently confirmed.
- Radius: Gallery screenshots use rounded-rectangle image masks (all six are typed "rounded-rectangle" in metadata).
- Shadows: Not explicitly confirmed for gallery images beyond the browser-mockup convention used elsewhere.
- Spacing: Images overlap in a staggered collage rather than a fixed grid gutter; vertical span of the gallery runs from y=4511 to y=8265 (roughly 3,754px tall).
- Images and required assets: Six named screenshot assets — "screencapture-wired-gr-article-i-genia-tou-ai-dinei-panellinies...", "screencapture-wired-gr-author-celia...", "image 60", "screencapture-wired-gr-article-data-centers-kai-to-timima-tis-anaptyxis...", "image 58", "image 56" — all live WIRED Greece site screenshots (article page, author bio, article w/ image, data-centers article, category page, category grid).
- Reusable components: The dark full-bleed "editorial proof" band with a numbered section header and a staggered browser-mockup gallery is a distinct pattern that could recur on other case-study pages that also showcase live screenshots.
- Elements with unavailable metadata: None of the gallery images lack metadata; all six are resolvable rounded-rectangle nodes with explicit coordinates.

#### Section 05 — One Platform, Every Channel
- Exact visible structure: Continuing on the same dark band as Section 04. Centered overline "05 — WEB DEVELOPEMNT" (note: contains a typo, missing an "N," reading "DEVELOPEMNT" in the source) and two-line heading "ONE PLATFROM, EVERY CHANNEL" (note: "PLATFROM" appears to be a typo for "PLATFORM" in the source copy), followed by three body paragraphs (single-ecosystem platform built on WordPress/Elementor/WooCommerce/WooCommerce Subscriptions; subscription/e-commerce/events flows; performance/accessibility built in). Below the copy: a three-column feature-card row — "Editorial" (news/features/author profiles), "Subscriptions" (recurring billing/member access/invoicing), "Monetisation" (Google Ads/sponsored content/e-commerce) — each with a small icon, bold title, and lighter body copy. Below that: a "BUILD WITH" label followed by five rounded pill chips: WordPress, Elementor, WooCommerce, Google Ads, WP RESI API.
- Position and alignment: Wrapping frame "Frame 3340" (node `231:336`) x=320 y=8937, width 1280, height 417. Inner card row "Frame 3339" (node `231:337`) x=143.5 y=60 (relative), width 993, height 247 — centered within the 1280 column. Cards are 311px wide each with gaps between (x offsets 0, 341, 682 within Frame 3339). Tech-stack row "Frame 3338" (node `231:362`) x=144 y=317, width 992, height 40.
- Width and height: Section frame 1280×417 (Measured from the design); individual cards ≈311×(221–247) each.
- Grid and container behavior: Three-column equal-width card grid, centered; tech-pill row is a left-aligned horizontal flex row of five pills with a "BUILD WITH" label preceding them.
- Typography: Overline/heading — same Desktop/Overline + H3-scale pattern as prior sections. Card titles ("Editorial," "Subscriptions," "Monetisation") — From Figma style: Desktop/H4 with Montserrat Bold 24px/30 override. Card body copy — From Figma style: Desktop/Body (Montserrat 18/24). Pill labels ("WordPress," etc.) — From Figma style: Desktop/Body Small with Montserrat Bold 16px/24 override. "BUILD WITH" label typography not independently confirmed beyond visual caps styling.
- Colors: Card titles render in white; card body copy renders at `rgba(226,226,226,0.7)` (Measured from the design) for reduced-emphasis supporting text. Pill chips: background `#dbe1fc`, text `#000826` (Measured from the design), both Bold Montserrat.
- Borders: No strokes on feature cards (icon + heading + copy sit directly on the dark section background with no card boundary); pill chips have no stroke, relying on the light-lavender fill for contrast against the dark section.
- Radius: Pill chips are fully rounded (`rounded-[40px]`, effectively pill-shaped at 40px height).
- Shadows: None observed on cards or pills in this section.
- Spacing: Card content uses a 20px vertical gap between icon/title group and body copy (Measured from the design, node `231:338` gap value); pills are laid out with roughly 24–28px horizontal gaps between them (per x-offsets in metadata).
- Images and required assets: Each feature card has a small line-icon asset (document icon for Editorial, people icon for Subscriptions, euro-sign icon for Monetisation) — vector assets `Group 421`, `Group 422`, and an inline vector for the euro icon.
- Reusable components: The three-column icon-feature-card row and the "BUILD WITH" tech-stack pill row are both patterns likely to recur on other case-study pages describing platform capabilities and technology stacks.
- Elements with unavailable metadata: None significant; card and pill structure is fully resolvable via metadata.

#### Section 06 — The Result ("Where WIRED Greece Now Lives")
- Exact visible structure: Back on a light background. Centered overline "06 — THE RESULT" and centered heading "WHERE WIRED GREECE NOW LIVES", followed by a centered closing paragraph (Greek-speaking audience now has access to a world-class tech-media brand; built from observation, craft, and respect for source material). Below the paragraph, a small "Live at wired.com.gr" link with a leading dot bullet and a trailing external-link icon. Below that, a very large light-lavender outline/watermark wordmark "WIRED GREECE" spanning most of the content width, functioning as a decorative closing graphic.
- Position and alignment: Overline at x=879 y=9579 (centered); heading at x=600 y=9609, width 720 (centered). Paragraph at x=563 y=9681, width 795 (centered). "Live at wired.com.gr" link frame (node `231:215`) at x=808.5 y=9793, width 302, height 56 (centered). Watermark vector "WIRED GREECE" (node `231:311`) at x=320 y=9888, width 1280, height 204 (full content-width, centered).
- Width and height: Measured from the design (coordinates above).
- Grid and container behavior: Fully centered single-column layout, consistent with Section 02's centered "manifesto" treatment.
- Typography: Overline — From Figma style: Desktop/Overline (Sharp Grotesk Medium 25, 15/20, uppercase, `#4467f6`). Heading — Desktop/H3-scale bold display. Paragraph — Desktop/Body (Montserrat 18/24). Link text "Live at wired.com.gr" rendered in a small link-style label with a filled circular bullet and an external-link glyph.
- Colors: Overline blue `#4467f6`; body copy dark `#000826`. Link text and bullet render in the same blue accent, visually confirmed in the screenshot. The watermark "WIRED GREECE" wordmark renders in a very light lavender/near-white tone (visually confirmed; exact fill hex not independently pulled via design-context call).
- Borders: None observed.
- Radius: None observed.
- Shadows: None observed.
- Spacing: ~50–70px gaps between overline/heading/paragraph/link, consistent with the page's standard section rhythm; the watermark logo sits with a visible gap below the link before the pagination row.
- Images and required assets: Watermark logo is a vector asset (node `231:311`), not editable text.
- Reusable components: The centered "closing statement + live-site link + watermark logotype" pattern is a strong candidate for a reusable "case study conclusion" component across the other case-study pages in this file (each would presumably swap in its own client wordmark and URL).
- Elements with unavailable metadata: A partially off-canvas decorative vector (node `231:223`, x=1600 y=9425, width 1280, extending past the 1920px right edge) appears to be a thin wavy divider line associated with this section; only ~320px of its width falls within the visible frame bounds. Visually confirmed in the live Figma canvas as a faint wavy rule near this section; its full extent and purpose are not resolvable from metadata alone.

#### Case-Study Pagination ("Previous work" / "Next work")
- Exact visible structure: A left-pointing arrow icon plus "Previous work" label at the left edge of the content column, and "Next work" label plus a right-pointing arrow icon at the right edge — a footer-adjacent case-study-to-case-study navigation row.
- Position and alignment: "Previous work" frame (node `231:374`) at x=320 y=10080, width 135, height 24 (left-aligned to content column). "Next work" frame (node `231:377`) at x=1493 y=10080, width 107, height 24 (right-aligned to content column, near x=1600 right margin).
- Width and height: Measured from the design (see above).
- Grid and container behavior: Two elements anchored to the left and right edges of the standard 1280px content column, on the same horizontal baseline.
- Typography: Labels render in a small link-style text; exact bound style not independently confirmed for these two specific nodes, but sizing/weight matches the page's small-link convention (comparable to the "Live at wired.com.gr" link).
- Colors: Blue accent arrows/text consistent with the page's link color, visually confirmed in the screenshot.
- Borders: None.
- Radius: N/A (icon-based arrows, no container).
- Shadows: None.
- Spacing: The pair sits ~10902px (10080+24 relative) above the footer's top edge, effectively forming a thin navigation strip between Section 06 and the global footer.
- Images and required assets: Two triangular "Polygon 1" vector arrow icons (nodes within `231:374`/`231:377`).
- Reusable components: This prev/next case-study navigation row is expected to be a shared component across all 5 case-study pages in this file (each pointing to the adjacent case study).
- Elements with unavailable metadata: None; both nodes and their icon/text children are fully resolvable via metadata.

#### Global Site Footer (Pixelocracy)
- Exact visible structure: Full-width footer with "PIXELOCRACY" wordmark logo and a two-line tagline ("We transform the industries of the present, with the technologies of the future") on the left; a link column on the right ("Expertise," "Work," "About," "Cookie Policy," "Privacy Policy") plus a LinkedIn icon below the links; a thin wavy divider rule; and a bottom-left copyright line "Pixelocracy © 2026, All rights reserved." An EUROCERT ISO/IEC 27001:2023 information-security certification badge sits near the bottom-right of the footer area, overlapping this same region.
- Position and alignment: Named "image 1" in metadata (node `231:302`), x≈1.19 y=10102, width ≈1918, height 787 — spans nearly the full 1920px frame width. EUROCERT badge group "Group 1649" (node `231:390`) at x=1316 y=10342, width 444, height 60, sitting inside the footer's lower band, right-of-center.
- Width and height: Footer block ≈1918×787 (Measured from the design); cert badge 444×60.
- Grid and container behavior: Footer content (logo/tagline left, link list right) sits within the same 320-margin content column convention used throughout the page; the wavy divider and copyright line run closer to full width.
- Typography: "PIXELOCRACY" wordmark renders in the same bold blue lettering style as the page-top header logo. Tagline and link-list items render in a smaller sans-serif body/label style; exact bound style names not independently pulled for this specific node (rendered as part of a flattened composite image node named "image 1" rather than discrete text nodes).
- Colors: Wordmark in the page's blue accent; body/tagline text dark near-black; link labels bold dark; background is a soft white-to-lavender gradient wash, visually consistent with the light gradient backgrounds used in Sections 02/06. Exact hex values not independently pulled for this composite node.
- Borders: None observed.
- Radius: A small circular "scroll to top" button (blue, with an up-chevron) sits at the bottom-right corner of the footer, partially cropped at the frame edge in the screenshot.
- Shadows: None distinctly observed beyond the scroll-to-top button's implied elevation.
- Spacing: Generous top padding before the logo/tagline block; the wavy divider separates the link/logo block from the copyright line near the very bottom.
- Images and required assets: This entire footer is captured in metadata as a single flattened node named "image 1" (a rounded-rectangle/image type), suggesting it is a rasterized or heavily composited copy of the shared site footer rather than a live component instance within this specific frame.
- Reusable components: This is unambiguously the shared global site footer, expected to be pixel-identical across every page and case study in the Pixelocracy site, including the other 4 case-study pages.
- Elements with unavailable metadata: Because the footer is represented as one composite "image 1" node, its internal elements (logo, tagline, individual link labels, LinkedIn icon, copyright text, scroll-to-top button) are not separately typed/named in `get_metadata`. Visually confirmed in the live Figma canvas; exact per-element node metadata unavailable through MCP. Separately, the EUROCERT certification badge group (node `231:390`) IS independently resolvable in metadata with named children (badge mark + certification text), unlike the rest of the footer.

---

### Mobile

#### Global Site Navigation Bar (header) — Mobile
- Exact visible structure: Same "PIXELOCRACY" logo appears at the very top; the desktop's expanded nav links collapse to a condensed top bar in the mobile overview render (consistent with a hamburger-style mobile header pattern).
- Position and alignment: Background bar "image 65" (node `257:1232`), x=0 y=0, width 420, height 58 — full mobile frame width.
- Width and height: 420×58 (Measured from the design), versus Desktop's 1920×75 — proportionally shorter bar.
- Grid and container behavior: Full-bleed bar at mobile width (420px) instead of desktop's 1920px.
- Typography: Not independently resolvable; this node is a flattened bar image like several other mobile composite nodes.
- Colors: Same white/near-white bar treatment as desktop, visually confirmed in the mobile overview screenshot.
- Borders: None observed. Radius: None observed. Shadows: None observed.
- Spacing: N/A (single bar element).
- Images and required assets: "image 65" (node `257:1232`).
- Reusable components: Same global header component, mobile breakpoint.
- Elements with unavailable metadata: Individual mobile nav items (hamburger icon, logo) are not separately resolvable in metadata for this node — flattened into one image reference. Visually confirmed in the live Figma canvas.

#### Case Study Hero — Mobile
- Exact visible structure: Matches Desktop's copy (badge "CASE STUDY 2025," heading "WIRED / GREECE," body paragraph) but stacked into a single column, and — as a real content difference from Desktop — **no "Check it out" CTA link/button is present** in the mobile hero container. Below the text block, a single framed device mockup of the WIRED Greece homepage (same screenshot content as Desktop's primary mockup) appears full-width; Desktop's second, smaller "GLOBAL" comparison mockup does not appear in the hero on mobile.
- Position and alignment: "Container" (node `257:1233`) x=16 y=118, width 388, height 288 (16px side margins on the 420px frame). Mockup frame "Background+Border+Shadow" (node `257:1238`) x=36 y=438, width 381, height 498, centered below the text block.
- Width and height: Text container 388×288; mockup 381×498 (Measured from the design) — versus Desktop's 628×492 text column + 525×687 mockup side-by-side.
- Grid and container behavior: Single-column stack replacing Desktop's two-column layout; 16px gutter margin (420 − 2×16 = 388) versus Desktop's 320px margin.
- Typography: Badge — From Figma style: Mobile/Body Small Mobile (Montserrat 14/24). Heading "WIRED GREECE" — From Figma style: Mobile/H1 special Mobile (Sharp Grotesk Book 25, 40px, line-height 48) — exactly half the desktop point size (80→40) with a taller relative line-height (76→48 in absolute terms, but proportionally increased). Body paragraph — From Figma style: Mobile/Body Mobile (Montserrat 16/24).
- Colors: Same badge (`#d7defc` bg / `#234cdc` text pattern expected) and gradient heading treatment as Desktop, visually confirmed in the mobile screenshot (heading renders "WIRED" dark, "GREECE" in blue).
- Borders: None on text; mockup frame carries the same border/shadow naming convention as Desktop's hero mockup.
- Radius: Mockup image corners rounded, matching Desktop's rounded-rectangle mockup treatment.
- Shadows: Mockup frame named "Background+Border+Shadow," consistent with Desktop.
- Spacing: Badge-to-heading and heading-to-paragraph spacing compress proportionally versus Desktop; no CTA means the vertical stack ends directly after the paragraph, with the mockup image sitting further down as a separate block rather than immediately adjacent.
- Images and required assets: Same two-part screenshot pairing as Desktop's primary mockup ("screencapture-wired-gr-2026-06-08-10_27_13 1" and "...2").
- Reusable components: Confirms the hero component adapts responsively but drops the CTA link on the mobile breakpoint — this is a genuine content/behavior difference from Desktop, not a metadata gap (verified absent in both metadata and screenshot for node `257:1233`).
- Elements with unavailable metadata: None; the absence of the CTA and the second mockup were confirmed by both metadata (no matching child nodes) and direct screenshot render.

#### Section 01 — The Brief — Mobile
- Exact visible structure: Same overline "01 — THE BRIEF," heading "JOINING A LEGACY," and two body paragraphs as Desktop, stacked full-width. Below the copy, only a single "GREECE" homepage mockup screenshot appears (Group 417 equivalent) — Desktop's second "GLOBAL" comparison mockup and its "GREECE"/"GLOBAL" caption labels do **not** appear on mobile.
- Position and alignment: Overline at x=16 y=1036, heading at x=16 y=1062 (width 295), paragraphs at x=16 y=1134 and y=1254 (all full 388px mobile column width, left-aligned — no asymmetric right-offset copy block as on Desktop). Mockup group ("Group 417," node `257:1246`) at x=16 y=1468, width 388, height 473.
- Width and height: Measured from the design (coordinates above) — single mockup at 388×473 versus Desktop's two mockups (660×805 and 587×400).
- Grid and container behavior: Full 388px-wide single column, left-aligned, replacing Desktop's asymmetric two-column arrangement.
- Typography: Overline — From Figma style: Mobile/Overline Mobile (Sharp Grotesk Medium 25, 14px, line-height 16, uppercase). Heading — Mobile/H3 Mobile-scale (24px/32). Paragraphs — Mobile/Body Mobile (Montserrat 16/24).
- Colors: Same blue overline / dark body text pattern as Desktop.
- Borders: Mockup uses the same rounded-rectangle browser-frame convention.
- Radius: Rounded corners on mockup image, matching Desktop.
- Shadows: Not distinctly separated from the rounded-rectangle mask in metadata.
- Spacing: Tighter vertical rhythm than Desktop, consistent with the smaller mobile type scale.
- Images and required assets: "screencapture-wired-gr-2026-06-09-10_54_59 1" and its chrome strip "image 62" — same asset as Desktop's GREECE mockup, single-column only.
- Reusable components: Confirms the "single comparison mockup" is the mobile-adapted version of Desktop's two-mockup comparison — a genuine layout simplification rather than a metadata gap (no "GLOBAL" mockup or caption nodes exist anywhere in the mobile frame's metadata, and none appear in the mobile overview screenshot at this position).
- Elements with unavailable metadata: None; absence of the second mockup and captions is corroborated by both metadata search and screenshot.

#### Section 02 — The Rules — Mobile
- Exact visible structure: Overline "02 — THE RULES" and heading "ADAPTIN AN EXISTING DESIGN SYSTEM" (same typo preserved), two body paragraphs, and — as a real content difference from Desktop — **only the "FIXED NON-NEGOTIABLE" card appears; the "FLEXIBLE ADAPTABLE" (blue) card is not present** on mobile.
- Position and alignment: Overline at x=139 y=2042 (roughly centered on the 420px frame); heading at x=16 y=2068 (full-width, width 388); paragraphs in "Frame 3341" (node `257:1251`) x=16 y=2172, width 388, height 240. Card "Overlay+Border+OverlayBlur" (node `257:1256`) at x=16 y=2483, width 388, height 298.
- Width and height: Single card 388×298 versus Desktop's two cards at 429×318 and 428×318 side by side.
- Grid and container behavior: Full-width single-column card, replacing Desktop's two-column card row.
- Typography: Overline — Mobile/Overline Mobile (14/16, uppercase). Heading — Mobile/H3 Mobile (24/32). Card title "FIXED NON-NEGOTIABLE" — Mobile equivalent of Desktop/H5 with bold override. List items — Mobile/Body Mobile (16/24) with bold spans on key terms, matching Desktop's emphasis pattern.
- Colors: White card background, `#000826`/black text, matching Desktop's "FIXED NON-NEGOTIABLE" card exactly (same content, same six bullet items).
- Borders: None (shadow-only edge treatment, consistent with Desktop).
- Radius: Square/near-square corners, matching Desktop.
- Shadows: Same hard offset drop-shadow convention (blue accent) used on Desktop's equivalent card; exact color not independently re-confirmed for the mobile node but visually consistent in the screenshot.
- Spacing: 30px internal padding (reduced from Desktop's 40px), 10px list-row gaps — Measured from the design (node `257:1258` offsets).
- Images and required assets: Same 8×8 ellipse bullet icon asset as Desktop.
- Reusable components: Confirms the two-card rules comparison collapses to a single card on mobile — this is a genuine content omission (the "FLEXIBLE ADAPTABLE" card and its six list items do not exist anywhere in the mobile frame's metadata, and the mobile overview screenshot shows the typography section heading immediately following this single card, with no second card in between).
- Elements with unavailable metadata: None; the omission was verified by both metadata search and direct screenshot render of the surrounding region.

#### Section 03 — The Typeface Problem — Mobile
- Exact visible structure: Overline "03 — THE TYPEFACE PROBLEM" and heading "GREEK HAS NO WIRED TYPEFACE," followed by the same two paragraphs, three-item typeface list, and closing line as Desktop — but the right-column "WIRED GLOBAL" vs. "WIRED GREECE" headline-comparison graphic is moved below the text block and **stacked vertically** (WIRED GLOBAL sample on top, WIRED GREECE sample below) rather than displayed side-by-side as on Desktop.
- Position and alignment: Section wrapper "Frame 3440" (node `265:2131`) x=16 y=2988, width 388, height 490, containing heading frame "Frame 3439" (node `265:2130`) and text frame "Frame 3344" (node `257:1305`). Comparison graphics appear as separate top-level vectors: "WIRED GLOBAL" sample (node `265:2129`) x=16 y=3548, width 388, height 134; "WIRED GREECE" sample (node `265:2127`) x=16 y=3733, width 388, height 187 — positioned directly beneath the text block, full mobile-column width.
- Width and height: Text block 388×490; comparison graphics 388×134 and 388×187 (Measured from the design) — versus Desktop's side-by-side ≈511×153 and ≈574×219 graphics positioned beside (not below) the text column.
- Grid and container behavior: Single-column stack: heading/copy first, then both comparison samples stacked full-width below — a straightforward reflow of Desktop's two-column layout into one column, in reading order (global sample, then Greek sample).
- Typography: Overline — Mobile/Overline Mobile (14/16, uppercase). Heading — Mobile/H3 Mobile (24/32). Body copy and list — Mobile/Body Mobile (16/24). The comparison graphics render "WIRED GLOBAL"/"WIRED GREECE" caption labels and headline samples identically to Desktop, at full mobile width.
- Colors: Same black-on-white treatment as Desktop for both the text block and the comparison graphics.
- Borders: None. Radius: None. Shadows: None observed.
- Spacing: Comparison graphics sit with a visible gap between the end of the text block (y≈3478) and the first sample (y=3548), and a smaller gap between the two stacked samples (y=3682 end to y=3733 start).
- Images and required assets: Same two vector comparison-graphic assets as Desktop, repositioned/reflowed rather than resized in place.
- Reusable components: Confirms the two-column "before/after" comparison pattern reflows to a stacked single column on mobile — consistent, predictable responsive behavior (not a metadata gap; both vectors are fully present and positioned in mobile metadata).
- Elements with unavailable metadata: None; both comparison graphics are independently resolvable mobile nodes.

#### Section 04 — Component by Component — Mobile
- Exact visible structure: Same dark band, overline "04 — THE BUILT," heading "COMPONENT BY COMPONENT," and two body paragraphs as Desktop, followed by the same six gallery screenshots, reflowed from Desktop's staggered collage into a mobile-width single/near-single column with some 2-across pairing (author-profile and data-centers screenshots sit side-by-side as two narrower columns; the remaining four images run full mobile width).
- Position and alignment: Dark background "Rectangle 79" (node `257:1229`) x=0 y=4020, width 420, height 3061. Heading frame "Frame 3441" (node `265:2132`) x=16 y=4120. Body copy "Frame 3342" (node `257:1321`) x=16 y=4250, width 388, height 312. Gallery images: `257:1326` x=16 y=4632 (388×462); `257:1327` x=16 y=5154 (388×585); `257:1328` x=16 y=5773 (185×355, left half); `257:1329` x=219 y=5799 (185×549, right half); `257:1330` x=16 y=6408 (388×344); `257:1331` x=16 y=6812 (388×173).
- Width and height: Section background 420×3061 (Measured from the design) versus Desktop's 1920×4448 — proportionally much shorter due to narrower single-column reflow.
- Grid and container behavior: Predominantly single-column full-width (388px) image stacking, with one adjacent pair (author-profile / data-centers screenshots) placed side-by-side at half-width (185px each) — the only two-up pairing in this section on mobile.
- Typography: Overline — Mobile/Overline Mobile (14/16, uppercase). Heading — Mobile/H3 Mobile (24/32). Body copy — Mobile/Body Mobile (16/24), white/light text on dark background matching Desktop's treatment.
- Colors: Same dark `#000826`-family background as Desktop; light body text, visually confirmed.
- Borders: None distinct beyond rounded-rectangle image masks.
- Radius: Rounded corners on all six gallery images, matching Desktop's convention.
- Shadows: Not independently confirmed beyond the rounded-rectangle mask convention.
- Spacing: Images stack with small consistent gaps (roughly 40–100px) rather than Desktop's large staggered overlaps.
- Images and required assets: Same six screenshot assets as Desktop, reflowed to mobile column widths.
- Reusable components: Confirms the staggered desktop collage reflows into a mostly single-column mobile gallery with one paired exception — a standard responsive gallery adaptation.
- Elements with unavailable metadata: None; all six images are resolvable mobile nodes with explicit coordinates.

#### Section 05 — One Platform, Every Channel — Mobile
- Exact visible structure: Same overline "05 — WEB DEVELOPEMNT" (typo preserved) and heading "ONE PLATFORM, EVERY CHANNEL" (note: unlike Desktop's "ONE PLATFROM, EVERY CHANNEL," the mobile heading text is spelled correctly as "PLATFORM" — a wording discrepancy between the two breakpoints), same three body paragraphs, then the three feature cards ("Editorial," "Subscriptions," "Monetisation") stacked **vertically** instead of Desktop's three-column row, followed by the "BUILD WITH" label and the same five tech-stack pills (WordPress, Elementor, WooCommerce, Google Ads, WP RESI API) reflowed into a two-column wrapped grid instead of Desktop's single horizontal row.
- Position and alignment: Wrapping frame "Frame 3341" (node `257:1332`) x=16 y=7841, width 388, height 1012. Inner card stack "Frame 3339" (node `257:1333`) x=40 y=40 (relative), width 308, height ≈712, with each card full-width (308px) and stacked with ~249px vertical offsets between cards. Tech-pill block "Frame 3338" (node `257:1358`) x=40 y=762 (relative), width 308, height 210, containing a 2-column pill grid "Frame 3343" (node `257:1360`).
- Width and height: Section frame 388×1012 (Measured from the design) versus Desktop's 1280×417 — much taller due to vertical card stacking instead of a 3-column row.
- Grid and container behavior: Cards stack vertically (single column); tech pills wrap into 2 columns per row (WordPress/Elementor, WooCommerce/Google Ads, WP RESI API on its own row) rather than Desktop's single unbroken row of 5.
- Typography: Card titles — Mobile equivalent of Desktop/H4 with bold override (visually ~20/26 per Mobile/H4 Mobile token). Card body — Mobile/Body Mobile (16/24). Pill labels — Mobile/Body Small Mobile with bold override.
- Colors: Same white card titles, `rgba(226,226,226,0.7)`-style muted body text, and `#dbe1fc`/`#000826` pill treatment as Desktop, visually confirmed in the mobile screenshot.
- Borders: None on cards or pills, matching Desktop.
- Radius: Pills remain fully rounded, matching Desktop's pill shape.
- Shadows: None observed, matching Desktop.
- Spacing: Cards separated by ~249px increments (icon+heading+body block height); pill grid uses a 2-column wrap with row gaps (Measured from the design, node `257:1360` child offsets).
- Images and required assets: Same three feature icons (document, people, euro-sign) as Desktop.
- Reusable components: Confirms the 3-column desktop card row and single-row pill list both reflow to mobile-appropriate stacked/wrapped layouts — standard responsive behavior for this component.
- Elements with unavailable metadata: None; all cards and pills are resolvable mobile nodes.

#### Section 06 — The Result — Mobile
- Exact visible structure: Same overline "06 — THE RESULT," heading "WHERE WIRED GREECE NOW LIVES," closing paragraph, "Live at wired.com.gr" link, and large watermark "WIRED GREECE" wordmark as Desktop, all reflowed to full mobile width.
- Position and alignment: Heading/overline frame "Frame 3444" (node `266:2135`) x=16 y=8984, width 388, height 90. Closing paragraph at x=16 y=9114, width 388, height 144. Link frame (node `257:1372`) x=59 y=9298, width 302, height 56 (roughly centered on the 420px frame, same absolute width as Desktop's link). Watermark vector "WIRED GREECE" (node `257:1379`) x=16 y=9394, width 388, height 62.
- Width and height: Measured from the design (coordinates above) — watermark is proportionally much shorter (62px tall vs. Desktop's 204px) since it must fit the narrower 388px column at a smaller relative scale.
- Grid and container behavior: Fully centered/full-width single column, matching Desktop's centered treatment at the mobile breakpoint.
- Typography: Overline — Mobile/Overline Mobile (14/16, uppercase). Heading — Mobile/H3 Mobile (24/32). Paragraph — Mobile/Body Mobile (16/24).
- Colors: Same blue overline/link accent and light-lavender watermark treatment as Desktop, visually confirmed.
- Borders: None. Radius: None. Shadows: None observed.
- Spacing: Compressed vertical rhythm consistent with the mobile type scale throughout this section.
- Images and required assets: Same watermark vector asset as Desktop, rescaled to mobile width.
- Reusable components: Same "case study conclusion" component pattern as Desktop, confirmed responsive.
- Elements with unavailable metadata: A partially off-canvas decorative vector (node `257:1371`, x=404 y=8884, width 388) extends past the 420px right edge similarly to Desktop's equivalent divider vector; only a small sliver falls within visible frame bounds. Visually confirmed in the live Figma canvas; full extent not resolvable from metadata alone.

#### Case-Study Pagination — Mobile
- Exact visible structure: Same "Previous work" / "Next work" pairing as Desktop, positioned closer together given the narrower frame.
- Position and alignment: "Previous work" frame (node `257:1381`) x=16 y=9443.9, width 122, height 24. "Next work" frame (node `257:1384`) x=310 y=9443.9, width 94, height 24 — both on the same row, left- and right-aligned to the 388px mobile column.
- Width and height: Measured from the design (coordinates above).
- Grid and container behavior: Same left/right-anchored pairing pattern as Desktop, scaled to the mobile column width.
- Typography/Colors/Borders/Radius/Shadows: Same visual treatment as Desktop's equivalent component (small blue link text with triangular arrow icons), visually confirmed in the screenshot.
- Spacing: Sits directly above the mobile footer image, mirroring Desktop's position relative to the footer.
- Images and required assets: Two "Polygon 1" arrow vector icons, matching Desktop.
- Reusable components: Same shared prev/next case-study navigation component, mobile breakpoint.
- Elements with unavailable metadata: None.

#### Global Site Footer (Pixelocracy) — Mobile
- Exact visible structure: Same footer content as Desktop — "PIXELOCRACY" logo and tagline, link list ("Expertise," "Work," "About," "Cookie Policy," "Privacy Policy"), LinkedIn icon, wavy divider, and "Pixelocracy © 2026, All rights reserved" copyright line — reflowed to a single stacked column (logo/tagline block, then link list, then divider, then copyright) instead of Desktop's two-column (logo left / links right) layout. A circular blue "scroll to top" button appears at the bottom-right, partially cropped in the render, matching Desktop.
- Position and alignment: Footer image "image 80" (node `266:2136`) x=0 y=9618, width 420, height 574 — spans the full mobile frame width and reaches the very bottom of the 10192px-tall mobile frame (leaving no room below it for any additional element).
- Width and height: 420×574 (Measured from the design) versus Desktop's ≈1918×787.
- Grid and container behavior: Single stacked column instead of Desktop's two-column (logo+tagline / link list) split; links stack vertically at full mobile width.
- Typography: Same logo/tagline/link-list styling convention as Desktop, rendered within this composite node; exact bound style names not independently pulled (same composite-image caveat as Desktop's footer node).
- Colors: Same blue wordmark, dark tagline/link text, and light gradient background wash as Desktop.
- Borders: None. Radius: Scroll-to-top button is circular. Shadows: Not distinctly observed beyond the implied button elevation.
- Spacing: Comfortable stacked spacing between logo/tagline, link list, divider, and copyright line, reflowed for single-column mobile reading.
- Images and required assets: Composite footer image "image 80," equivalent to Desktop's "image 1."
- Reusable components: Same shared global footer component, mobile breakpoint.
- Elements with unavailable metadata: As on Desktop, internal footer elements are not separately resolvable in `get_metadata` (flattened composite node). Visually confirmed in the live Figma canvas. **A notable, confirmed difference from Desktop: no EUROCERT ISO/IEC 27001:2023 certification badge equivalent node exists anywhere in the mobile frame's metadata, and the footer image (node `266:2136`) extends to y=10192 — the exact bottom edge of the 10192px-tall mobile frame — leaving no visible space for a separately positioned badge as seen on Desktop at y=10342–10402.** This omission was verified by both a metadata search across the full mobile frame and a direct screenshot of the footer node, which shows no certification badge present.
## Updated Wired Case Study

### Desktop

#### Site Navigation Bar
- Exact visible structure: Full-width bar at the very top of the page. Left: "PIXELOCRACY" wordmark logo in bold blue. Center-right: horizontal nav links "Home", "Services" (with a dropdown chevron), "Work", "About", "Insights". Far right: "Contact" link in bold. This is the sitewide header, identical in structure to what would appear on any other Pixelocracy page.
- Position and alignment: Node `231:1847` ("Group 1647"), x=0, y=0, spans full frame width. Logo left-aligned, nav items centered/right of center, "Contact" right-aligned.
- Width and height: 1920 × 75 px (Measured from the design.)
- Grid and container behavior: Full-bleed bar; nav content sits inside the same 1280px/320px-margin content grid used elsewhere on the page.
- Typography: Nav item text rendered in a sans-serif; exact bound style not retrieved for this element specifically.
- Colors: "PIXELOCRACY" logo and "Contact" render in the page's blue accent; "Home/Services/Work/About/Insights" render in dark near-black. Background is white/off-white.
- Borders: A thin horizontal rule/underline element (vector, node `248:372`) sits beneath the nav group.
- Radius: None observed.
- Shadows: None observed.
- Spacing: N/A (single row bar).
- Images and required assets: "PIXELOCRACY" logo as a text/vector lockup.
- Reusable components: This is the same global site-navigation component expected across every page of the site, not specific to this case study.
- Elements with unavailable metadata: The dropdown caret on "Services" and the exact underline vector geometry — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Hero — "Magazine Cover Hero Section"
- Exact visible structure: Two-column hero. Left column: small pill badge "CASE STUDY 2025", large two-line heading "WIRED" (line 1) / "GREECE" (line 2, gradient blue), a two-sentence intro paragraph, and a "Check it out" CTA button. Right column: a stacked device/browser mockup showing a screenshot of the WIRED Greece homepage ("screencapture-wired-gr-2026-06-08-10_27_13") inside a rounded card with a top browser-chrome strip.
- Position and alignment: Node `231:1779` ("Magazine Cover Hero Section"), x=0, y=74. Inner "Container" (`231:1780`) x=320, y=60 inside the hero, i.e. content inset 320px from each side of the 1920px frame. Left text block (`231:1781`) width 628px; right mockup (`231:1792`) width ~525px, right-aligned within the 1280px container.
- Width and height: Section 1920 × 805 px; inner container 1280 × 685 px (Measured from the design.)
- Grid and container behavior: Content constrained to a 1280px-wide centered container (320px side margins on the 1920px canvas), two-column split within it.
- Typography: Pill label "CASE STUDY 2025" — Montserrat Regular 16/24, color `#234cdc` (From Figma style: Desktop/Body Small, Measured from the design for color). Heading "WIRED" / "GREECE" — Sharp Grotesk Book 25, 80px/76 line-height (From Figma style: Desktop/H1 special); "WIRED" fill `#000826`, "GREECE" fill is a linear gradient `129.75deg, #234cdc 0% → #4467f6 100%` (Measured from the design.). Body paragraph — Montserrat Regular 16/24, color `#000826` (Measured from the design.). CTA "Check it out" — Mabry Pro Regular 16/24, color `#1b1b1b` (From Figma style: Desktop/CTA for font; Measured from the design for color).
- Colors: Pill background `#d7defc`; CTA button background white (Measured from the design.).
- Borders: None on the pill/heading; CTA button has a hard offset drop-shadow acting as a border-like accent (see Shadows).
- Radius: Pill badge fully rounded (`rounded-[9999px]`); mockup screenshot card has rounded corners (Measured from the design.).
- Shadows: CTA button — `drop-shadow(6px 6px 0px #4467f6)`, a flat/hard offset shadow, no blur (Measured from the design.). The mockup card frame is named "Background+Border+Shadow" (`231:1792`), indicating a border+shadow treatment consistent with the rest of the page's card style.
- Spacing: Left column stack uses 32px gaps between the pill, heading, paragraph, and CTA row (Measured from the design.).
- Images and required assets: Screenshot image "screencapture-wired-gr-2026-06-08-10_27_13" (WIRED Greece homepage) plus a smaller top strip image representing a browser bar, both masked into rounded rectangles.
- Reusable components: The "Background+Border+Shadow" device-mockup wrapper and the hard-offset-shadow CTA button both recur later in the same page (typeface-problem mockups, "Check it out"-style link elsewhere) — this is a page-wide component pattern, not unique to the hero.
- Elements with unavailable metadata: none beyond standard leaf text/image nodes, all captured in metadata.

#### Section 01 — "Joining a Legacy" (The Brief)
- Exact visible structure: Overline label "01 — THE BRIEF", heading "JOINING A LEGACY", two body paragraphs (about WIRED's 30-year legacy, and the brief to extend rather than reimagine it), followed below by two side-by-side screenshot mockups captioned "GREECE" (left) and "GLOBAL" (right) — the left mockup shows the WIRED Greece homepage in a full browser-chrome mock (masthead, "TODAY'S PICKS", hero photo, Greek-language headlines); the right mockup shows a WIRED.com-style page ("Everything Apple Announced Today at WWDC 2026").
- Position and alignment: Overline `231:1706` at x=320,y=1033; heading `249:436` at x=320,y=1063; body text `231:1689`/`231:1688` at x=936 (right-aligned column, width 664); image group "Group 417" (`231:1796`) at x=320,y=1331, width 660; image group "Group 418" (`231:1800`) at x=1013,y=1331, width 587; caption labels "GREECE" (`231:1709`, x=331,y=1304) and "GLOBAL" (`231:1710`, x=1517,y=1738).
- Width and height: Overall section spans roughly y=1029 to y=2136 (≈1107px tall) within the 1280px content container (Measured from the design.).
- Grid and container behavior: Text split into a left overline/heading column and a right-aligned 664px-wide body-copy column at the top; the two image mockups sit below in a two-up row, left mockup taller/narrower (660×450 visible photo area, extending to ~805 with the "screencapture" panel beneath) and right mockup wider/shorter (587×400).
- Typography: Overline — Sharp Grotesk Medium 25, 15px (From Figma style: Desktop/Overline). Heading "JOINING A LEGACY" — matches Desktop/H3 scale (32px, two-line height=32 for a single line here). Body paragraphs — Montserrat Regular 18/24 (From Figma style: Desktop/Body).
- Colors: Overline in blue (consistent with the page's `#4467f6`/`#234cdc` blues measured elsewhere); heading and body in `#000826`/near-black (consistent with Text variable `#000826`).
- Borders: Each screenshot mockup is presented inside a rounded card with a distinct top "browser bar" strip image, giving the appearance of a bordered browser frame.
- Radius: Rounded corners on both mockup image cards (Measured from the design.).
- Shadows: None distinctly separate from the mockup's browser-chrome framing.
- Spacing: The two mockups sit in the same row with a visible gap between the 660px-wide left card (ending x≈980) and the 587px-wide right card (starting x=1013).
- Images and required assets: "image 61"/"image 62"/"screencapture-wired-gr-2026-06-09-10_54_59" (left mockup, Greek site); "image 61"/"screencapture-wired-2026-06-09-11_22_49" (right mockup, global WIRED site). Both are real product screenshots, not placeholder art.
- Reusable components: The bordered "browser mockup" card pattern recurs in the hero and again in Section 03 headline-comparison graphics.
- Elements with unavailable metadata: none of significance; captured via metadata.

#### Section 02 — "Adapting an Existing Design System" (The Rules)
- Exact visible structure: Overline "02 — THE RULES", heading "ADAPTIN AN EXISTING DESIGN SYSTEM" (note: heading text itself reads "ADAPTIN", missing the letter G — Measured from the design.), two body paragraphs about Condé Nast's brand constraints, and two side-by-side comparison cards below: a white card "FIXED NON-NEGOTIABLE" with six bullet points (WIRED masthead and logo; Black/white colour system; Navigation structure and categories; Grid proportions and spacing logic; Article layout hierarchy; Typographic scale relationships) and a solid-blue card "FLEXIBLE ADAPTABLE" with six bullet points (Greek typeface selection; Headline rhythm and line length; Navigation label translations; New page types (Events, Newsletter); Subscription flow and UI copy; Footer structure and local links).
- Position and alignment: Section background rectangles `231:1686` ("Rectangle 2") x=1,y=2136, and a decorative radial-gradient glow `231:1676` ("Rectangle 81") x=-1,y=2202. Heading `231:1711` centered around x=725–1196,y=2321. Cards `247:283` ("Fixed…") at x=509,y=2605, width 425; `247:306` ("Flexible…") at x=982,y=2605, width 428.
- Width and height: Section background 1920×808 (Rectangle 2) plus a 1920×1404 decorative glow layer beneath it; each comparison card ≈425–428 × 318 px (Measured from the design.).
- Grid and container behavior: The two cards are laid out side by side, centered as a pair within the 1280px content container, each roughly equal width with a ~25–30px gap between them.
- Typography: Card heading ("FIXED NON-NEGOTIABLE" / "FLEXIBLE ADAPTABLE") — Montserrat Bold 20/24 (Measured from the design.). Bullet body text — Montserrat Regular 18/24 (From Figma style: Desktop/Body). Section heading "ADAPTIN…" scaled to Desktop/H3-type proportions (64px height across 2 lines = 32px/line).
- Colors: Fixed card — background `#ffffff`, heading/body text `#000826`/black (Measured from the design.). Flexible card — background `#4467f6`, heading/body text white (Measured from the design.). Section background `#f0f3fe` (Measured from the design.); decorative glow radial gradient from `rgba(215,222,252,1)` to transparent (Measured from the design.).
- Borders: Neither card has a stroke border; the visual "border" effect comes from the offset drop-shadow (below).
- Radius: No rounded corners on either card (sharp/rectangular corners per the exported code) — Measured from the design.
- Shadows: Fixed card — `drop-shadow(6px 6px 0px #4467f6)` (blue hard shadow on a white card). Flexible card — `drop-shadow(6px 6px 0px #ccc)` (light-gray hard shadow on the blue card). Both are flat, non-blurred offset shadows (Measured from the design.).
- Spacing: Card internal padding 40px on all sides, with a 20px gap between the card heading and its bullet list, and 10px gap between bullet rows, 12px gap between each bullet dot and its label (Measured from the design.).
- Images and required assets: Small circular bullet-point icon (8×8 ellipse, reused per bullet — 6 per card, 12 total).
- Reusable components: This "Overlay+Border+OverlayBlur" card component (white-bg-with-colored-shadow vs. colored-bg-with-gray-shadow) is a distinct, reusable comparison-card pattern seen again in Section 05's "Editorial / Subscriptions / Monetisation" cards and the "BUILD WITH" technology pills.
- Elements with unavailable metadata: none of note; fully captured.

#### Section 03 — "Greek Has No WIRED Typeface" (The Typeface Problem)
- Exact visible structure: Overline "03 — THE TYPEFACE PROBLEM", two-line heading "GREEK HAS NO WIRED TYPEFACE", three body paragraphs on the left (typography problem statement; the selected typeface combination — "Fira Sans Extra Condensed for headings, JetBrains Mono for labels, Source Serif 4 for body text"; closing line "Set at headline scale, it reads as WIRED."). On the right, two stacked headline-mockup graphics: "WIRED GLOBAL — Meet the sad wives of AI" (English headline + deck) and "WIRED GREECE — Ασπίδα του Αχιλλέα: Η ψηφιακή φάλαγγα κατά των drones" (Greek headline + deck), demonstrating the typeface pairing applied to an English vs. Greek headline.
- Position and alignment: Group `231:1692` ("Group 420") x=320,y=3222, width 1278, height 550. Left text column starts x=320; right mockup vectors (`248:355`, `248:358`) start x=1024.
- Width and height: 1277.7 × 550 px overall group (Measured from the design.).
- Grid and container behavior: Two-column split inside the 1280px container — left column ≈600px of body copy, right column ≈510–574px of headline-comparison graphics stacked vertically.
- Typography: Overline "03 — THE TYPEFACE PROBLEM" — Desktop/Overline (Sharp Grotesk Medium 25, 15px). Heading "GREEK HAS NO WIRED TYPEFACE" — two lines at 32px each (consistent with Desktop/H3 scale). Body paragraphs — Montserrat Regular 18/24 (Desktop/Body) and one shorter line "Set at headline scale…" at Desktop/Body Small proportions. Right-side mockups use a condensed geometric display face for the large headline ("Meet the sad wives of AI" / the Greek headline) and a serif face for the deck copy beneath each — consistent with the "Fira Sans Extra Condensed" heading + "Source Serif 4" body pairing described in the adjacent body copy. "WIRED GLOBAL" / "WIRED GREECE" small caption labels sit above each headline in a bold sans caps style.
- Colors: Text in `#000826`/black on white; no colored fills observed in this mockup pair beyond standard black text.
- Borders: None distinctly framing the two mockups (unlike the browser-chrome cards in Section 01) — they read as plain headline/deck compositions.
- Radius: N/A.
- Shadows: None observed on this pair.
- Spacing: The two mockups stack vertically with a visible gap; each mockup block is roughly 150–220px tall.
- Images and required assets: Two vector graphics (`248:355` "Meet the sad wives of AI" mockup, `248:358` "Ασπίδα του Αχιλλέα…" mockup) rendering real editorial headline/deck typography samples in both languages.
- Reusable components: This is a bespoke content block for this case study (a live demonstration of the typeface decision), not a component reused elsewhere on the page.
- Elements with unavailable metadata: none; captured via metadata and confirmed visually.

#### Section 04 — "Build to Last" (The Build / Stats)
- Exact visible structure: Full-width dark navy band. Centered overline "04 — THE BUILT" and heading "BUILD TO LAST", followed by an intro paragraph on infrastructure/timeline constraints, then a four-stat metrics grid: "70% — Infrastructure cost reduction" (large), "2wks — Time to go-live" with an adjacent "8x faster" pill badge, "7 — Article hero variants", "15+ — Page types designed", separated by thin dividing lines in a 2×2-ish arrangement.
- Position and alignment: Background `231:1672` ("Rectangle 79") x=0,y=3930, full width; inner dark card `231:1675` ("Rectangle 5") x=320,y=4362, width 1280, height 682. Overline `231:1712` x=887,y=4084 (centered); heading `231:1713` x=808,y=4114 (centered). Stat groups: "70%" block (`231:1714`) x=410,y=4462; "2wks/8x faster" block (`231:1860`) x=1107,y=4452; "7" block (`231:1718`) x=410,y=4850; "15+" block (`231:1722`) x=1107,y=4792. Divider lines at x=1017/y=4702 (horizontal, 583px), x=320/y=4760 (horizontal, 697px), and x=1017/y=4362 (vertical, 682px tall) splitting the grid into quadrants.
- Width and height: Section band 1920×1264 px; inner stat card 1280×682 px (Measured from the design.).
- Grid and container behavior: A 2-column × 2-row stat grid inside the 1280px card, split by one vertical divider (at the horizontal midpoint) and two horizontal dividers, producing four unequal-height quadrants (top row taller, containing the 70% and 2wks stats; bottom row shorter, containing 7 and 15+).
- Typography: Overline/heading centered, matching Desktop/Overline and Desktop/H3 scale respectively, in white. "70%" — Sharp Grotesk Medium 25, 80px/76 (From Figma style: Desktop/H1 special), color `#4467f6` (Measured from the design.). "Infrastructure cost reduction" label — Montserrat Bold 24/30 white (Desktop/H4 scale). Descriptive line beneath each stat — Montserrat Regular 18/24 white (Desktop/Body). "2wks" — sized to Desktop/H1 scale (48px/48) based on measured node height. "7" and "15+" — sized to Desktop/H3 scale (32px/32) based on measured node height, i.e. deliberately smaller than "70%" and "2wks" to create a visual hierarchy among the four stats.
- Colors: Section/card background `#000826` (Measured from the design., both "Rectangle 79" and "Rectangle 5" resolve to this same hex). Stat numbers in brand blue `#4467f6`; all supporting text in white.
- Borders: None; separation achieved purely via thin divider lines.
- Radius: Both background rectangles are defined as rounded-rectangles in the node tree, though the rounding is not visually perceptible at this scale in the render.
- Shadows: None observed.
- Spacing: Divider-defined quadrants with generous internal padding around each stat block (Measured from the design., exact px gaps between label/number/description lines: ~38–48px per row within each stat block based on child y-offsets).
- Images and required assets: Small pill badge "8x faster" (`231:1864`, a "Link"-style component) placed inline next to the "2wks" figure.
- Reusable components: The "8x faster" pill reuses the same rounded-badge/link visual treatment as other small tag components on the page (e.g., "BUILD WITH" tech pills in Section 05).
- Elements with unavailable metadata: none of note; fully captured via metadata.

#### Section 05 — "One Platform, Every Channel" (Web Development)
- Exact visible structure: Overline "05 — WEB DEVELOPEMENT" (note: contains a typo, "DEVELOPEMENT" — Measured from the design.), heading "ONE PLATFROM, EVERY CHANNEL" (note: heading itself is misspelled "PLATFROM" — Measured from the design.), followed by three body paragraphs (platform overview: WordPress/Elementor/WooCommerce/WooCommerce Subscriptions stack; subscription/e-commerce/events features; performance/accessibility note). Below that, a full-width dark wavy-topped panel containing three feature cards — "Editorial" (document icon), "Subscriptions" (people icon), "Monetisation" (euro icon), each with a heading and description — followed by a "BUILD WITH" row of five technology pill badges: WordPress, Elementor, WooCommerce, Google Ads, WP RESI API.
- Position and alignment: Overline `231:1774` x=320,y=5348; heading `231:1775` x=320,y=5378; body paragraphs x=936 (right column, width 664), y=5344–5656. Dark panel `231:1803` ("Frame 3340") x=320,y=5716, width 1280, height 417; feature cards row `231:1804` x=143.5 (relative),y=60; tech pills row `247:175` y=317 (relative).
- Width and height: Panel 1280×417 px; each feature card ≈311×247 px; each tech pill 40px tall, variable widths (121–179px) sized to label length (Measured from the design.).
- Grid and container behavior: Three feature cards laid out in an even row with ~30px gaps (341px column pitch for 311px-wide cards); tech pills laid out in a single horizontal row with small gaps, left-anchored after the "BUILD WITH" label.
- Typography: Overline/heading same treatment as prior sections (Desktop/Overline, Desktop/H3 two-line). Body copy — Montserrat Regular 18/24 (Desktop/Body), right-column width 664px matching Section 01/03. Card headings ("Editorial", "Subscriptions", "Monetisation") — bold white, ~30px line-height. Card descriptions — Montserrat Regular, muted/lighter white-on-navy. "BUILD WITH" label — bold caps white. Tech pill labels — bold white, centered in each pill.
- Colors: Dark panel background matches the `#000826` navy used in Section 04. Icons rendered in the brand blue outline style. Tech pills use a light lavender fill with dark bold text (visually consistent with the `#d7defc`/dark-text pill pattern used for the "CASE STUDY 2025" hero badge, though this specific fill was not individually queried) — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for the pill fill's exact hex.
- Borders: None on the feature cards; tech pills appear as filled rounded pills, no stroke observed.
- Radius: Tech pills are fully rounded; the dark panel has a distinctive wavy/curved top edge (a custom vector shape, not a simple rectangle corner radius).
- Shadows: None observed on the cards or pills.
- Spacing: 10px gap between card icon and heading; ~10–20px between heading and description within each card (Measured from the design.); "BUILD WITH" row sits below the three cards with a clear vertical gap (~317px offset within the panel, i.e. after the cards' 247px height plus spacing).
- Images and required assets: Three line icons (document/file icon for Editorial, two-person icon for Subscriptions, euro-sign icon for Monetisation).
- Reusable components: The three-card layout and pill-badge row reuse the same visual language (icon + bold heading + muted description, pill tags) as Section 02's comparison cards and Section 04's "8x faster" badge — a consistent card/tag system used throughout this case-study page.
- Elements with unavailable metadata: The wavy top-edge shape of the dark panel and the exact fill values of the "BUILD WITH" pills — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Section 06 — "Where WIRED Greece Now Lives" (The Result)
- Exact visible structure: Centered overline "06 — THE RESULT", centered heading "WHERE WIRED GREECE NOW LIVES", a centered closing paragraph about the outcome, a "Live at wired.com.gr" link (with a small live-status dot and an arrow icon), and beneath that a very large, pale/ghost-toned "WIRED GREECE" wordmark graphic spanning the full content width, sitting on a soft gradient background panel.
- Position and alignment: Heading `231:1777` x=600,y=6388 (centered, width 720). Paragraph `231:1773` x=563,y=6460 (centered, width 795). Link `231:1677` ("Link") x=808.5,y=6572, width 302, height 56 (centered). Wordmark vector `231:1778` x=320,y=6667, width 1280, height 204 (full content width).
- Width and height: Content column widths 664–795px, centered within the 1280px container; wordmark spans the full 1280px container width.
- Grid and container behavior: Fully centered, single-column layout — the narrowest text-column pattern on the page (720–795px vs. 1280 elsewhere), used to create a closing/summary emphasis.
- Typography: Overline/heading — Desktop/Overline and Desktop/H3 scale, centered. Paragraph — Montserrat Regular 18/24 (Desktop/Body), centered. Link text "Live at wired.com.gr" — Montserrat-style link text with a small dot/status indicator and trailing arrow icon.
- Colors: Text in `#000826`/black; the ghost "WIRED GREECE" wordmark renders in a very light/pale tint against the background gradient (low-contrast, decorative treatment) — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for the wordmark's exact opacity/hex.
- Borders: None.
- Radius: N/A.
- Shadows: None observed.
- Spacing: Generous vertical spacing between heading, paragraph, link, and the large wordmark graphic beneath (roughly 80–200px between elements based on measured y-offsets).
- Images and required assets: Large "WIRED GREECE" wordmark vector graphic (`231:1778`); small ellipse "live" status dot and arrow icon within the link component.
- Reusable components: The "Live at [url]" link pattern (status dot + label + arrow) is a distinct small component that reappears identically on Mobile in the same relative position, suggesting a shared component used to link out to the live client site — a pattern expected to recur on other case-study pages in this file.
- Elements with unavailable metadata: Arrow icon and status-dot fill colors inside the "Link" component — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Previous / Next Work Navigation
- Exact visible structure: A bottom-of-page pagination row: "◂ Previous work" on the left, "Next work ▸" on the right, each with a triangular arrow/polygon icon.
- Position and alignment: "Previous work" (`231:1841`, "Frame 3387") x=320,y=6859; "Next work" (`231:1844`, "Frame 3388") x=1433,y=6859 — flush to the left and right edges of the 1280px content container respectively.
- Width and height: "Previous work" block 173.4×24 px; "Next work" block 134.4×24 px (Measured from the design.).
- Grid and container behavior: Anchored to the outer edges of the same 1280px container used throughout the page.
- Typography: Both labels rendered in a bold sans style, ~24px line-height, consistent with the page's link typography.
- Colors: Standard dark text color, matching `#000826`.
- Borders: None.
- Radius: N/A.
- Shadows: None observed.
- Spacing: N/A (single-line row).
- Images and required assets: Two triangular arrow/polygon icons (one per link, pointing left and right respectively).
- Reusable components: Standard case-study prev/next pagination pattern, expected to be shared across all case-study pages in this file (including the original, non-"Updated" Wired Case Study page).
- Elements with unavailable metadata: none; fully captured.

#### Footer
- Exact visible structure: A pale gradient panel containing an EUROCERT certification badge ("Certified Information Security Management System EN ISO/IEC 27001:2023 — Certified by EUROCERT" with a small circular EU-star crest icon), followed by a wavy divider line, then a standard site footer: "PIXELOCRACY" logo, tagline "We transform the industries of the present, with the technologies of the future", a link column ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), a LinkedIn icon, and a copyright line "Pixelocracy © 2026, All rights reserved." A circular scroll-to-top button (up-arrow in a blue circle) sits in the bottom-right corner.
- Position and alignment: EUROCERT badge (`231:1857`, "Group 1649") x=1316,y=7121, width 444, height 60 — a genuine child node of this frame per its own metadata (Measured from the design.). The "PIXELOCRACY" logo/tagline/links/copyright block was not present in the metadata walk of node `231:1671` at all — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP. It renders in the same canvas region as the trailing background rectangle "image 1" (`231:1769`, x≈1,y=6881, width 1918, height 787).
- Width and height: Overall footer visual region ≈1918×787 px based on the enclosing background rectangle (Measured from the design.).
- Grid and container behavior: Footer content splits into a left block (logo + tagline) and a right block (link list + social icon), both inset within the same 320px page margins; copyright line sits below a full-width wavy divider.
- Typography: "PIXELOCRACY" logo in bold blue display type; tagline in regular dark sans; footer link labels in bold dark sans; copyright line in regular dark sans, smaller size.
- Colors: Background is a soft white-to-light-lavender vertical gradient; "PIXELOCRACY" logo in brand blue; body/link text in dark navy/black; scroll-to-top button is a solid blue filled circle with a white chevron.
- Borders: None observed.
- Radius: Scroll-to-top button is fully circular.
- Shadows: None distinctly observed on footer text; the scroll-to-top button appears to float above the content (implying a subtle elevation, not confirmed via metadata).
- Spacing: Generous vertical spacing between the EUROCERT badge and the logo/tagline block, and between the link items (roughly 30–40px per link row based on the rendered proportions).
- Images and required assets: EUROCERT crest icon (small circular EU-star badge), LinkedIn social icon, up-arrow scroll-to-top icon.
- Reusable components: This entire lower block (EUROCERT badge + Pixelocracy global footer + scroll-to-top button) reads as a sitewide/global footer shared across pages, appearing here because it sits directly below this case-study frame in the canvas — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP for the footer text block specifically; the EUROCERT badge itself is confirmed via metadata as a true child of this frame.
- Elements with unavailable metadata: The entire "PIXELOCRACY" branded footer block (logo, tagline, link list, LinkedIn icon, copyright line, scroll-to-top button) — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

---

### Mobile

#### Site Navigation Bar — Mobile
- Exact visible structure: Same "PIXELOCRACY" logo top-left; a hamburger-menu icon (two horizontal bars) replaces the full text nav on the right.
- Position and alignment: Node `266:2144` ("image 65"), x=0,y=0, full frame width.
- Width and height: 420 × 58 px (Measured from the design.). Shorter height than Desktop's 75px bar.
- Grid and container behavior: Full-bleed bar; logo and hamburger inset from the frame edges.
- Typography: Logo typography unchanged from Desktop.
- Colors: Same blue logo on white/off-white background.
- Borders: Not distinctly visible at this crop.
- Radius: None.
- Shadows: None observed.
- Spacing: N/A.
- Images and required assets: Hamburger icon (two-bar glyph) replacing Desktop's expanded text links.
- Reusable components: Standard responsive collapse of the global nav component from a text-link row (Desktop) to a hamburger icon (Mobile).
- Elements with unavailable metadata: Hamburger icon geometry — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Hero — Mobile
- Exact visible structure: Same content as Desktop but stacked in a single column: "CASE STUDY 2025" pill, "WIRED GREECE" two-line heading, intro paragraph, then (unlike Desktop, where the mockup sits beside the text) the device-mockup screenshot card is stacked below the text block rather than beside it. Note: the "Check it out" CTA button visible on Desktop was not found in the Mobile metadata for this region.
- Position and alignment: Container `266:2145` x=16,y=118, width 388, height 288 (pill+heading+paragraph). Mockup card `266:2150` ("Background+Border+Shadow") x=36.16,y=438, width 381, height 498.
- Width and height: Text container 388×288 px; mockup card 381×498 px (Measured from the design.) — both scaled down from Desktop's 628×468 (text) and 525×687 (mockup).
- Grid and container behavior: Single-column stack, full content width = 388px inside the 420px frame (16px margins each side, vs. Desktop's 320px margins on a 1920px frame).
- Typography: "CASE STUDY 2025" pill — smaller mobile body-small style. Heading "WIRED GREECE" — From Figma style: Mobile/H1 special (Sharp Grotesk Book 25, 40px/48), notably a different size/line-height ratio than Desktop's H1 special (80px/76) — proportionally more line-height relative to size on Mobile. Paragraph — Mobile/Body scale.
- Colors: Same blue/navy palette as Desktop (pill `#d7defc`-style, "GREECE" gradient blue, `#000826` text) — colors not independently re-measured for Mobile but visually consistent with Desktop's confirmed hex values.
- Borders: Mockup card retains the "Background+Border+Shadow" treatment seen on Desktop.
- Radius: Rounded corners on the mockup card, consistent with Desktop.
- Shadows: Same hard-offset shadow language as Desktop, scaled down.
- Spacing: Tighter vertical rhythm than Desktop given the narrower frame.
- Images and required assets: Same WIRED Greece homepage screenshot asset as Desktop's hero mockup.
- Reusable components: Same hero component as Desktop, in a stacked mobile arrangement.
- Elements with unavailable metadata: The "Check it out" CTA button present in Desktop's hero was not retrievable in the Mobile metadata for this section — its presence or absence on Mobile could not be confirmed either way through metadata; no assumption is made.

#### Section 01 — "Joining a Legacy" — Mobile
- Exact visible structure: Same overline/heading/two-paragraph structure as Desktop, followed by the two image mockups — but on Mobile they are stacked vertically in a single group rather than presented side by side.
- Position and alignment: Overline `266:2154` x=16,y=1036; heading `266:2155` x=16,y=1062; body paragraphs `266:2157`/`266:2156` x=16, full 388px width; image group `266:2158` ("Group 417") x=16,y=1468, width 388, height 473.
- Width and height: Text column full 388px width (vs. Desktop's narrower 664px right-aligned column — Mobile runs full-width instead of a right-aligned partial column).
- Grid and container behavior: Single-column, 16px side margins (vs. Desktop's two-column split with a 664px body-copy column and 320px margins).
- Typography: Mobile/Overline (14px), Mobile/H3-style two-line heading (24px), Mobile/Body (16px) — smaller scale than the Desktop equivalents, consistent with the Mobile type-scale variable set.
- Colors: Same dark-navy text and blue overline treatment as Desktop.
- Borders: Mockup card retains rounded/bordered treatment.
- Radius: Consistent rounded corners on the screenshot mockup.
- Shadows: Not independently re-verified for this specific mockup on Mobile; visually consistent with Desktop's card style.
- Spacing: Single stacked flow rather than Desktop's two-up row; the second ("GLOBAL") mockup and its "GREECE"/"GLOBAL" captions were not found in the Mobile metadata for this exact region.
- Images and required assets: Same WIRED Greece screenshot assets referenced on Desktop (image 61/62, "screencapture-wired-gr-2026-06-09-10_54_59").
- Reusable components: Same content block as Desktop, restructured from a two-column to a single-column layout.
- Elements with unavailable metadata: The second "WIRED GLOBAL" mockup (Desktop's "Group 418") and its "GREECE"/"GLOBAL" captions were not retrievable in the Mobile metadata dump for this section — Visually confirmed in the live Figma canvas is not separately verified for this specific element; its presence/absence on Mobile is not asserted either way.

#### Section 02 — "Adapting an Existing Design System" — Mobile
- Exact visible structure: Same overline/heading/two-paragraph structure as Desktop. Below that, only the "FIXED NON-NEGOTIABLE" card was retrievable in metadata, immediately followed by a small two-dot indicator row.
- Position and alignment: Background `266:2162` ("Rectangle 2") x=0,y=1978, width 420, height 883. Heading `266:2170` x=16,y=2068. Body copy `266:2166` ("Frame 3341") x=16,y=2172, width 388, height 240. Card `266:2171` x=16,y=2483, width 388, height 298. Two-dot indicator `266:2163` ("Frame 3423") x=195,y=2801, width 30, height 10, containing two 10×10 ellipses (`266:2164`, `266:2165`) spaced 20px apart.
- Width and height: Card is a single full-width (388px) stacked card, taller (298px) than each of Desktop's two side-by-side 425px-wide/318px-tall cards, to accommodate full-width bullet text wrapping.
- Grid and container behavior: Single-column stack, 16px margins, vs. Desktop's two-card side-by-side row.
- Typography: Card heading and bullets scaled to Mobile type variables; overline/heading match Mobile/Overline and Mobile/H3 Mobile scale.
- Colors: Same white-card/blue-shadow treatment retrievable for the "Fixed" card; not independently re-confirmed for a "Flexible" counterpart on Mobile.
- Borders: Same offset-shadow "border" language as Desktop's Fixed card.
- Radius: No rounded corners, consistent with Desktop.
- Shadows: Same hard-offset shadow style expected, not independently re-measured for Mobile.
- Spacing: Card padding and bullet spacing scaled down from Desktop's 40px/20px/10px pattern.
- Images and required assets: Same bullet-point ellipse icon used per list item.
- Reusable components: Same "Overlay+Border+OverlayBlur" card component as Desktop.
- Elements with unavailable metadata: A "FLEXIBLE ADAPTABLE" counterpart card (present and fully described on Desktop as `247:306`) does not appear anywhere in the Mobile metadata dump. Directly beneath the one retrievable card is a two-dot pagination-style indicator (`266:2163`) that is itself present in metadata (Measured from the design., two 10px ellipses at x=195 and x=215). Given the missing-metadata caveat, the second card's presence in the live canvas was not independently re-screenshotted; its existence is not asserted either way, but the two-dot indicator itself is a confirmed, measured mobile-only element with no Desktop counterpart in metadata.

#### Section 03 — "Greek Has No WIRED Typeface" — Mobile
- Exact visible structure: Same overline/heading/three-paragraph structure as Desktop, stacked in a single column. Below the text, two vector graphics stack vertically (the same "WIRED GLOBAL / Meet the sad wives of AI" and "WIRED GREECE / Ασπίδα του Αχιλλέα…" headline-comparison mockups seen on Desktop), rather than sitting beside the text in a two-column layout.
- Position and alignment: Frame `266:2201` ("Frame 3440") x=16,y=2992, width 388, height 490 (header + body copy). Headline-mockup vectors `266:2213`/`266:2214` x=16,y=3552 and x=16,y=3737, width 388 each.
- Width and height: Text block 388×490; each mockup vector 388px wide, 134px and 187px tall respectively (vs. Desktop's side-by-side 510×153 / 574×219 vectors) — Mobile mockups are set to a narrower, full-width single column.
- Grid and container behavior: Fully stacked single column: heading block, then body copy, then both headline-mockups one after another — a linear reading order, versus Desktop's left-text/right-mockup two-column split.
- Typography: Mobile/Overline, Mobile/H3 Mobile (two-line heading), Mobile/Body scale for paragraphs.
- Colors: Same black-on-white treatment as Desktop for both the body copy and the headline mockups.
- Borders: None on the mockups, consistent with Desktop.
- Radius: N/A.
- Shadows: None observed.
- Spacing: Mockups stacked directly beneath the body copy with a visible gap (body copy ends ~y3482, first mockup starts y3552).
- Images and required assets: Same two headline-comparison vector graphics as Desktop.
- Reusable components: Same bespoke content block as Desktop, restacked for a single-column mobile layout.
- Elements with unavailable metadata: none beyond what's noted; captured via metadata.

#### Section 04 — "Component By Component" — Mobile (content differs from Desktop's "Build to Last")
- Exact visible structure: Overline "04 — THE BUILT" (same overline text as Desktop) but the heading text reads "COMPONENT BY COMPONENT" — this differs from the Desktop heading text "BUILD TO LAST" for the same section (Measured from the design., both headings read directly from their respective frame's node text). Below the heading, the same intro paragraph on infrastructure/timeline constraints appears, followed by a dark navy card containing the same four stats (70%, 2wks/8x faster, 7, 15+), stacked vertically instead of Desktop's 2×2 grid.
- Position and alignment: Header `266:2219` ("Frame 3441") x=16,y=4124. Body paragraph `266:2217` x=16,y=4254. Stats card background `266:2283` ("Rectangle 5") x=40,y=4468, width 340, height 1158. Individual stat blocks: "70%" (`266:2288`) x=80,y=4528; "2wks/8x faster" (`266:2290`) x=80,y=4876; "7" (`266:2301`) x=80,y=5170; "15+" (`266:2308`) x=80,y=5428. Divider lines at y=4816, 5110, 5164, 5368 (all x=40, width 340).
- Width and height: Stats card 340×1158 px (Measured from the design.) — a single tall column, versus Desktop's wide 1280×682 2×2 grid.
- Grid and container behavior: Single-column stacked stat list, each stat block full-width within the 340px card, separated by thin horizontal divider lines (four dividers producing four stacked rows, rather than Desktop's one vertical + two horizontal dividers producing a 2×2 grid).
- Typography: "70%" — same Sharp Grotesk Medium 25 treatment, confirmed as its own text node (`266:2287`). Supporting labels and descriptions scaled to Mobile/H4 Mobile, Mobile/Body Mobile styles.
- Colors: Card background `#000826` consistent with Desktop's measured hex; "70%" numeral in brand blue, consistent with Desktop.
- Borders: None; separation via divider lines only, same pattern as Desktop.
- Radius: Rounded-rectangle card, consistent with Desktop.
- Shadows: None observed.
- Spacing: Each stat block is separated by consistent divider-line spacing (~294–304px between successive stat block start y-positions).
- Images and required assets: "8x faster" pill badge (`266:2297`, "Link") reused inline next to "2wks", matching Desktop.
- Reusable components: Same stat-card and pill-badge components as Desktop, restacked into a single column.
- Elements with unavailable metadata: none beyond what's noted. The heading-text discrepancy versus Desktop ("COMPONENT BY COMPONENT" vs. "BUILD TO LAST") is a directly measured, factual difference between the two frames' node text, not a metadata gap.

#### Section 05 — "One Platform, Every Channel" — Mobile (heading spelling differs from Desktop)
- Exact visible structure: Overline "05 — WEB DEVELOPEMNT" (same misspelling pattern as Desktop's "DEVELOPEMENT", here rendered as "DEVELOPEMNT" — Measured from the design., read directly from node text) and heading "ONE PLATFORM, EVERY CHANNEL" — notably spelled correctly ("PLATFORM") on Mobile, unlike Desktop's "ONE PLATFROM, EVERY CHANNEL" (Measured from the design., both headings read directly from their respective frame's node text — this is a direct textual difference between the two frames, not an interpretation). Followed by three body paragraphs (same platform/feature/performance copy as Desktop), then the same three feature cards (Editorial, Subscriptions, Monetisation) and "BUILD WITH" tech-pill row, restacked for mobile.
- Position and alignment: Header `266:2210` ("Frame 3443") x=16,y=5766. Body copy `266:2193` ("Frame 3442") x=16,y=5896, width 388, height 456. Feature-cards/tech-pills group `266:2228` ("Frame 3341") x=16,y=6422, width 388, height 1012.
- Width and height: Feature-cards block 308×712 (inner "Frame 3339" at x=40,y=40 relative) — each card full 308px width, stacked vertically (vs. Desktop's three-across 311px-wide row). Tech-pills grid ("Frame 3343") arranged 2-per-row instead of Desktop's single 5-across row.
- Grid and container behavior: Feature cards stack vertically at full column width; tech pills wrap into a 2-column grid (WordPress/Elementor row, WooCommerce/Google Ads row, WP RESI API on its own row) rather than Desktop's single horizontal row of five.
- Typography: Same Mobile-scale overline/heading/body styles as other Mobile sections; card headings and descriptions scaled to Mobile Body/H4 styles.
- Colors: Same dark-navy panel and icon-blue treatment as Desktop.
- Borders: None on cards; pills same fill-only style as Desktop.
- Radius: Same rounded pill and card treatment as Desktop.
- Shadows: None observed.
- Spacing: Cards separated by ~249px vertical pitch (219px card height + gap); tech pills separated by small horizontal/vertical gaps within the 2-column wrap.
- Images and required assets: Same three feature icons and five tech-provider pill labels as Desktop.
- Reusable components: Same card/pill component system as Desktop and Section 02/04, reflowed for narrow viewport.
- Elements with unavailable metadata: none beyond what's noted. The overline/heading spelling differences versus Desktop are directly measured textual facts, not metadata gaps.

#### Section 06 — "Where WIRED Greece Now Lives" — Mobile
- Exact visible structure: Same overline/heading/paragraph/link/wordmark structure as Desktop, fully stacked in a single column.
- Position and alignment: Header `266:2198` ("Frame 3444") x=16,y=7565. Closing paragraph `266:2197` x=16,y=7695, width 388. Link `266:2268` x=59,y=7879, width 302, height 56 (same 302×56 size as Desktop, but centered within the narrower 420px frame rather than the 1920px frame). Wordmark `266:2275` x=16,y=7975, width 388, height 62.
- Width and height: Text column full 388px width; wordmark scaled to 388px wide × 62px tall (vs. Desktop's 1280×204), preserving the same aspect ratio (≈6.27:1 on both).
- Grid and container behavior: Single-column stack with 16px margins, same relative vertical order as Desktop (heading → paragraph → link → wordmark).
- Typography: Mobile/Overline, Mobile/H3 Mobile heading, Mobile/Body paragraph — same content, smaller mobile type scale.
- Colors: Same palette as Desktop; wordmark rendered in the same pale/ghost tone.
- Borders: None.
- Radius: N/A.
- Shadows: None observed.
- Spacing: Consistent stacked spacing matching the proportional rhythm of Desktop's equivalent section.
- Images and required assets: Same "Live at wired.com.gr" link component (status dot + label + arrow) and "WIRED GREECE" wordmark vector as Desktop, both re-confirmed present in Mobile metadata at their own coordinates.
- Reusable components: Same "Live at [url]" link component as Desktop, present in both breakpoints — supporting that this is a shared component pattern.
- Elements with unavailable metadata: none beyond standard leaf assets; fully captured.

#### Previous / Next Work Navigation — Mobile
- Exact visible structure: Same "◂ Previous work" / "Next work ▸" pattern as Desktop.
- Position and alignment: "Previous work" (`266:2277`) x=16,y=8025; "Next work" (`266:2280`) x=310,y=8025 — flush to the 16px content margins (vs. Desktop's 320px container edges).
- Width and height: "Previous work" block 122.4×24; "Next work" block 94.4×24 (Measured from the design.) — smaller footprint than Desktop's 173×24 / 134×24, consistent with shorter Mobile label rendering at smaller type size.
- Grid and container behavior: Same edge-anchored pagination row pattern as Desktop, scaled to the 420px frame.
- Typography: Same bold sans link style, smaller Mobile type scale.
- Colors: Same dark text color as Desktop.
- Borders: None.
- Radius: N/A.
- Shadows: None observed.
- Spacing: N/A (single row).
- Images and required assets: Same two triangular arrow icons as Desktop.
- Reusable components: Same prev/next pagination component as Desktop.
- Elements with unavailable metadata: none; fully captured.

#### Footer — Mobile
- Exact visible structure: A large rounded rectangle ("image 80") followed by the same global Pixelocracy footer content as Desktop: "PIXELOCRACY" logo, tagline "We transform the industries of the present, with the technologies of the future", a stacked link list ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), a LinkedIn icon, a wavy divider, and a copyright line "Pixelocracy © 2026, All rights reserved.", plus a circular scroll-to-top button in the bottom-right corner.
- Position and alignment: Background `266:2276` ("image 80") x=0,y=8199, width 420, height 574. The branded footer text block itself (logo/tagline/links/copyright) was not present anywhere in the Mobile metadata dump, matching the same gap observed on Desktop.
- Width and height: Background panel 420×574 px (Measured from the design.).
- Grid and container behavior: Single-column stack — logo/tagline block, then link list, then LinkedIn icon, then divider and copyright — rather than Desktop's side-by-side logo/tagline-vs-links two-column layout.
- Typography: Same "PIXELOCRACY" bold-blue logo type and dark-sans body/link type as Desktop, at a mobile-appropriate scale.
- Colors: Same soft white-to-lavender gradient background, brand-blue logo, dark navy link/copy text, and blue circular scroll-to-top button as Desktop.
- Borders: None observed.
- Radius: Scroll-to-top button fully circular, consistent with Desktop.
- Shadows: Not independently confirmed for Mobile; visually consistent with Desktop.
- Spacing: Vertically stacked list items with consistent row spacing, narrower than Desktop's two-column arrangement.
- Images and required assets: Same LinkedIn icon and scroll-to-top up-arrow icon as Desktop. Note: no EUROCERT certification badge equivalent to Desktop's `231:1857` was found in the Mobile metadata dump for this or any nearby region.
- Reusable components: Same global/shared footer component as Desktop, reflowed to a single mobile column.
- Elements with unavailable metadata: The entire "PIXELOCRACY" branded footer text block — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP. The EUROCERT badge present in Desktop's metadata (`231:1857`) has no corresponding node found in the Mobile metadata dump; its presence or absence in the Mobile canvas was not independently re-screenshotted, so this is noted as a metadata gap only and not asserted as confirmed absence.

## Cardom Case Study

### Desktop

#### Global Navigation Bar
- Exact visible structure: Full-width top bar containing the "PIXELOCRACY" wordmark logo (left), a horizontal nav menu with items "Home", "Services" (with a dropdown chevron), "Work", "About", "Insights" (center-left), and a "Contact" text link (right). A thin rounded background band sits behind the bar.
- Position and alignment: Node `231:772` ("Group 1647") at x=0, y=0, width=1920, height=75 — Measured from the design. Logo left-aligned, nav items centered-left, Contact right-aligned. Visually confirmed in the live Figma canvas.
- Width and height: 1920×75 px — Measured from the design (background rectangle `231:773` "image 4", same bounds).
- Grid and container behavior: Full-bleed width matching frame width (1920 px); content sits within the same horizontal padding used by the hero/content sections below.
- Typography: Nav labels and logo render in a bold condensed display face for "PIXELOCRACY" and a standard sans for menu items. No bound text-style name was retrievable for these nodes via `get_variable_defs`. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Colors: Logo appears in a bright blue/indigo tone; nav text in dark navy; background white. No exact hex was retrievable (not bound to a Figma variable). Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Borders: None visually confirmed on the bar itself.
- Radius: Background element `231:773` is a "rounded-rectangle" node — Measured from the design (node type), exact radius value not returned by metadata.
- Shadows: None visually confirmed.
- Spacing: Nav item group `248:377`/`248:378` (an underline/vector element under "Services") positioned at x=596, y=27, width≈446 — Measured from the design.
- Images and required assets: "PIXELOCRACY" logo mark (vector), dropdown chevron icon next to "Services".
- Reusable components: This is a site-wide navigation bar; identical placement/structure would be expected on other case-study pages (not confirmed by walking those pages in this assignment, noted only as a cross-page pattern).
- Elements with unavailable metadata: Dropdown chevron icon on "Services"; exact logo vector paths. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Hero / Header
- Exact visible structure: Left column with a rounded pill badge "CASE STUDY 2023", a large two-line headline "Cardom" (styled in a purple script/rounded display face) / "AVIS" (bold dark caps), a body paragraph ("The car dealership, reinvented...Cardom transforms one of Greece's most friction-heavy purchases into a seamless digital experience with certified vehicles, transparent pricing, and door-to-door delivery, entirely online."), and a "Check it out" link with a vertical blue accent bar to its right. Right column shows a framed browser/device mockup of the live Cardom vehicle-detail page (car photo, "-10%" price badge, "BMW X1 xDrive 25e Business Advanced" listing, price €30.780 / financing "από 460 €/μήνα").
- Position and alignment: Left text block `231:664` ("Container") at x=320, y=323, width=628, height=460 — Measured from the design. Right mockup `231:674` ("Background+Border+Shadow") at x=1109.59, y=134, width=530.61, height=845.67 — Measured from the design. Two-column layout, text left/mockup right.
- Width and height: Badge container `231:665` 176×36; Heading block `231:668` 628×152; Paragraph container `231:670` 512×120; Link `231:672` 170×56 — all Measured from the design.
- Grid and container behavior: Content constrained to a left column starting at x=320 (matching the 320 px left margin used throughout the page); mockup column is right-aligned and overlaps the top of the following section vertically (extends to y≈980, while section 01 heading starts at y=1134).
- Typography: Badge text "CASE STUDY 2023" (`231:667`); Heading "Cardom AVIS" (`231:669`) — large display size, matching the file's "H1 special" scale (Desktop/H1 special = Sharp Grotesk, Book 25, 80/76 — From Figma style, bound at document level though exact per-node binding wasn't individually confirmable for this text run); paragraph text likely "Desktop/Body" (Montserrat Regular 18/24 — From Figma style); link text "Check it out" (`231:673`).
- Colors: "Cardom" word renders in a purple/violet tone, "AVIS" in dark navy (consistent with Text = #000826 — Measured from the design, variable "Text"). Badge pill has a light lavender fill with blue text. CTA accent bar is bright blue.
- Borders: Device mockup frame `231:674` is literally named "Background+Border+Shadow", indicating a bordered container — Measured from the design (node name).
- Radius: Mockup outer/inner rectangles (`231:676`, `231:677`, `231:678`) are "rounded-rectangle" node types — Measured from the design (node type).
- Shadows: Implied by the frame name "Background+Border+Shadow" on node `231:674` — Measured from the design (node name); exact shadow blur/spread values not returned by metadata.
- Spacing: Badge-to-heading gap 68 px (y=68 within container); heading-to-paragraph gap: paragraph container starts at y=252 vs heading block ends near y=220; paragraph-to-link gap: link starts y=404 — Measured from the design.
- Images and required assets: Cropped screenshot of the live cardom.gr vehicle detail page ("screencapture-cardom-gr-car-...jpg", node `231:677`/`231:678`), small logo/nav vector inside the mockup header bar (`231:681`), small icon group (`231:682`).
- Reusable components: The "Background+Border+Shadow" browser-mockup frame is a repeated component pattern (also used deeper in the page, e.g. node `271:2831` on mobile) — likely the standard "device mockup" component used across other case-study pages.
- Elements with unavailable metadata: Fine detail of the car-listing UI captured inside the screenshot (heart/wishlist icon, "-10%" badge, carousel arrows, "Δες την τεχνική αναφορά" pink pill) is baked into a flat screenshot image, not separate Figma nodes. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Section 01 — "A Broken Way to Buy" (The Market)
- Exact visible structure: Overline label "01 — THE MARKET" above headline "A BROKEN WAY TO BUY"; body copy describing the old offline car-buying process, followed by a closing sentence; below, a two-card side-by-side comparison: left card "TRADITIONAL MARKET" (white/outlined card with 5 bulleted pain points, each preceded by a small dot) and right card "CARDOM" (solid blue-filled card with 5 bulleted advantages, each preceded by a dot).
- Position and alignment: Overline `231:607` x=319, y=1134; Headline `231:609` x=319, y=1164, width=455, height=32; Paragraph `231:570` x=936, y=1130, width=665, height=96; Paragraph `231:569` x=936, y=1250, width=664, height=48 — Measured from the design. Left/right text arrangement: label+headline on the left column (x≈319), supporting paragraphs shifted right (x≈936), i.e. an offset two-column text layout rather than a stacked single column.
- Width and height: Traditional Market card `231:613` x=516, y=1358, width=419, height=284. Cardom card `231:632` x=987, y=1358, width=424, height=284 — Measured from the design.
- Grid and container behavior: Two cards sit side by side with a small gap (987−516−419=52 px gap) — Measured from the design. Cards are same height (284 px), roughly matching widths (419/424 px).
- Typography: Card titles "TRADITIONAL MARKET" / "CARDOM" (`231:615`, `231:633`) — overline-weight caps label; bullet items in body-small size text (each bullet text frame is 24 px tall, consistent with a ~16 px line-height text style, i.e. Desktop/Body Small class — From Figma style pattern, exact binding not confirmed per node).
- Colors: Left card — white/light background with dark navy border accent on the right edge (visually confirmed, blue vertical rule down the right side of the card). Right card — solid royal-blue fill with white text and white bullet dots. Text color for dark elements consistent with Text = #000826 — Measured from the design (variable).
- Borders: Left card shows a visible blue vertical border/rule on its right edge (visually confirmed in screenshot). Right card has no visible border (blue fill instead).
- Radius: Both cards are "Overlay+Border+OverlayBlur" component frames — Measured from the design (node name pattern used across the file for bordered/blurred card components); corner rounding visually confirmed as soft/rounded corners.
- Shadows: Soft drop shadow / blur implied by the "OverlayBlur" naming convention on both card frames — Measured from the design (node name).
- Spacing: Bullet rows spaced in ~34 px increments vertically (0, 34, 68, 102, 136 relative y offsets across the 5 bullet frames) — Measured from the design. Bullet dot to text gap = 20 px (text frame starts at x=20 relative to each row) — Measured from the design.
- Images and required assets: None (text-only cards); small circular bullet-point ellipses (`231:618`, `231:621`, etc., each 8×8 px) — Measured from the design.
- Reusable components: The "Overlay+Border+OverlayBlur" card component recurs at least 8 times across this page (comparison cards, the 3 feature cards in Section 03, the 4 feature-grid cards and 5 tech-stack pills in Section 05) — a single reusable card/chip component used site-wide.
- Elements with unavailable metadata: None beyond standard bullet iconography, all captured in metadata for this section.

#### Section 02 — "AVIS Puts Its Name on a New Idea" (The Bet)
- Exact visible structure: Overline "02 — THE BET" and headline "AVIS PUTS ITS NAME ON A NEW IDEA", followed by two paragraphs of body copy. Below the text, a two-image visual: a wide desktop/website mockup screenshot on the left and a tall smartphone-shaped mockup screenshot on the right, both set against a soft purple-to-white gradient background band.
- Position and alignment: Overline `231:608` x=897, y=1796; Headline `231:610` x=732, y=1826, width=457, height=64 — Measured from the design (right-of-center alignment, unlike Section 01's left-aligned label). Paragraphs `231:571` (x=602, y=1930, width=716, height=72) and `231:606` (x=605, y=2022, width=711, height=48) — Measured from the design, centered around x≈600–1318.
- Width and height: Website mockup group `231:728` ("Group 417") x=423, y=2163, width=660, height=761. Phone mockup group `231:731` ("Group 423") x=1163, y=2163, width=223, height=840 — Measured from the design.
- Grid and container behavior: Background gradient bands `231:567` (x=1, y=2237, width=1920, height=808) and `231:557` (x=1, y=2359, width=1922, height=1229) sit behind the two image groups, extending full page width — Measured from the design.
- Typography: Headline and paragraphs follow the same overline/H3/body pattern established in Section 01.
- Colors: Background band transitions from a light purple/violet at the top to white/light lavender toward the bottom edge (visually confirmed gradient). Website-mockup screenshot shows a deep purple gradient backdrop within the site itself.
- Borders: Website mockup outer rectangle `231:729` "image 61" behind inner screenshot `231:730` suggests a framed/bordered treatment — Measured from the design (layered rounded-rectangle structure).
- Radius: Both mockup groups use "rounded-rectangle" node types for their frame/backing shapes (`231:729`, `231:732`) — Measured from the design (node type).
- Shadows: Not explicitly named on these nodes, but visually a soft shadow is confirmed beneath both mockups in the screenshot. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Spacing: Gap between website mockup (ends x=423+660=1083) and phone mockup (starts x=1163) ≈ 80 px — Measured from the design.
- Images and required assets: "screencapture-cardom-gr-2026-06-12-12_17_42" (homepage screenshot, `231:730`), "screencapture-cardom-gr-car-71474a55...-2026-06-12-12_29_48" (vehicle detail page screenshot inside phone frame, `231:733`).
- Reusable components: None specific to this section beyond the recurring screenshot-in-frame pattern.
- Elements with unavailable metadata: Phone-frame bezel/notch graphic (if any) is baked into the flat screenshot rather than a distinct node.

#### Section 03 — "Every Screen Answers a Doubt" (Design for Trust)
- Exact visible structure: Overline "03 — DESIGN FOR TRUST" and headline "EVERY SCREEN ANSWERS A DOUBT", with two supporting paragraphs to the right. Below, a horizontal 5-step process row with a connecting line, each step showing a numbered circle (01–05, circle "01" filled solid blue/active, others outlined) plus a title ("Search", "Verify", "Purchase", "Finance", "Deliver") and a short description line, and a decorative underline squiggle beneath each step. Further below, three feature cards in a row: "CERTIFICATION", "TRANSPARENCY", "CONTROL", each with an icon, title, and short description, on solid blue card backgrounds.
- Position and alignment: Overline `231:575` x=320, y=3323; Headline `231:576` x=320, y=3353, width=399, height=64; Paragraph `231:573` x=936, y=3319, width=600, height=72; Sentence `231:574` x=936, y=3415, width=600, height=24 — Measured from the design (left label, right-shifted paragraph, mirroring Section 01's layout).
- Width and height: Process row group `231:577` ("Group 424") x=320, y=3539, width=1280, height=151.03 — Measured from the design. Five step sub-frames each ~200 px wide, evenly spaced starting at x=320, 590, 860, 1130, 1400 (270 px pitch) — Measured from the design. Feature cards `231:734`/`231:744`/`231:754` each 250×240 px, positioned at x=535/835/1135, y=3762 — Measured from the design (300 px pitch, 50 px gaps).
- Grid and container behavior: Process row spans the standard 1280 px content width (x=320 to x=1600, matching the 320 px side margins seen elsewhere); connecting horizontal line `231:578` runs the full 1280 px width behind the circles.
- Typography: Step numbers ("01"–"05") in a bold numeral style inside circles; step titles ("Search", "Verify", "Purchase", "Finance", "Deliver") in a medium-weight sans (consistent with an H5/H4-class style); step descriptions in small body text.
- Colors: Step "01" circle filled solid blue with white numeral; steps 02–05 circles outlined blue on white with dark numerals. Feature cards (`231:734`, `231:744`, `231:754`) use solid blue fills with white icon/title/body text, matching the "CARDOM" comparison card's blue from Section 01.
- Borders: Step circles 02–05 have a visible blue outline/stroke (visually confirmed); feature cards show no separate border beyond their fill.
- Radius: Step circles are fully rounded (circular); feature cards are "Overlay+Border+OverlayBlur" components — Measured from the design (node name) — same reusable card component as Section 01.
- Shadows: Soft shadow beneath feature cards implied by "OverlayBlur" naming — Measured from the design (node name).
- Spacing: Feature-card icon-to-title gap = 50 px (title y=50 within a 74 px-tall header frame); title-to-body gap = 104 px from card top (body text y=104 within 240 px card) — Measured from the design (from `231:734`/`231:744`/`231:754` sub-frame offsets).
- Images and required assets: Decorative underline squiggle vectors under each process step (`247:248`–`247:252`); icon glyphs for Certification (`231:736`), Transparency (`231:746`), Control/"truck" (`231:756`).
- Reusable components: Feature cards reuse the same "Overlay+Border+OverlayBlur" component as the comparison cards in Section 01 and the feature-grid cards in Section 05. The numbered horizontal process stepper is a distinct reusable pattern likely appearing on other process-oriented case-study pages.
- Elements with unavailable metadata: Exact SVG path detail of the icon glyphs (certification badge, shield/lock, truck) is only visible as rendered vector shapes, not decomposed metadata beyond bounding boxes.

#### Section 04 — "Component by Component" (The Built)
- Exact visible structure: Overline "04 — THE BUILT" and headline "COMPONENT BY COMPONENT" at top, with a body paragraph to the right describing the build ("Every screen was built around a single interaction..."). Below, an asymmetric collage of six framed screenshots of the live Cardom product across the full section: a tall vehicle-detail screenshot, a narrower phone-shaped blog/article screenshot, a "garage"/dashboard screenshot, a "buy"/checkout screenshot, a mid-size promotional image, and a large full-width search/listing-grid screenshot at the bottom, all set over a dark-navy full-bleed background band that begins mid-section.
- Position and alignment: Overline `231:611` x=887, y=4294; Headline `231:612` x=664, y=4324, width=592, height=32; Paragraph `231:572` x=610, y=4396, width=700, height=96 — Measured from the design (right-shifted heading/paragraph pairing, consistent with prior sections).
- Width and height: Background band `231:553` x=0, y=4140, width=1920, height=4183 (the large dark section background spanning Sections 04–05) — Measured from the design. Screenshot images: `231:650`/`231:761` (782×932) at x=320/319, y=4592; `231:651`/`231:762` (365×700) at x=1235, y=5099; `231:764` "garage" (498×1010) at x=1102, y=5979; `231:765` "buy" (686×548) at x=319, y=5704; `231:763` "image 67" (710×427) at x=320, y=6432; `231:554` "search" (1282×1004) at x=319, y=7169 — all Measured from the design.
- Grid and container behavior: Images are absolutely positioned in a staggered, non-uniform collage (not a regular grid) across the 1920 px width, bounded within the standard 320 px side margins for most items; the "search" screenshot at the bottom is the widest (1282 px, nearly full content width).
- Typography: Section heading/paragraph follow the same overline/H3/body pattern as prior sections.
- Colors: Section background is a solid dark navy (matching the tone used later in Section 05's feature-grid background) — visually confirmed. Screenshot content itself shows the live white-UI Cardom product against this dark backdrop, creating contrast.
- Borders: Each screenshot sits in a "rounded-rectangle" frame — Measured from the design (repeated node type across `231:650/651/554/763/764/765`).
- Radius: Rounded corners on all screenshot containers — Measured from the design (node type).
- Shadows: Not explicitly named on these nodes; soft shadow around each floating screenshot is visually confirmed in the render. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Spacing: Vertical rhythm between staggered images ranges roughly 300–500 px depending on pairing (e.g., `231:651` starts y=5099 while `231:650` starts y=4592, a 507 px vertical offset creating the staggered collage effect) — Measured from the design.
- Images and required assets: Six screenshots — vehicle detail page ("...a12225b2-72a8-4964...-14_53_01"), blog author page ("...author-celia..."), garage/dashboard ("...garage-2026-06-15-14_40_16"), buy/checkout flow ("...buy-b492fbf7...-14_38_19"), a WIRED.gr article screenshot ("screencapture-wired-gr-article...") noted twice under two different node IDs (`231:650` and `231:761` share the same bounds, likely a duplicate/overlapping node pair), and the search/listing grid ("...search-2026-06-15-13_56_46").
- Reusable components: The framed-screenshot pattern (rounded-rectangle container holding a cropped browser screenshot) recurs across Sections 02 and 04, suggesting a shared "product screenshot" treatment used across case-study pages.
- Elements with unavailable metadata: Note that nodes `231:650`/`231:761` and `231:651`/`231:762` occupy identical or near-identical bounding boxes with different names — this may indicate a duplicated/overlapping layer; both are documented as-is since metadata does not resolve which is authoritative.

#### Section 05 — "One Platform, the Full Transaction" (The Development)
- Exact visible structure: Overline "05 — THE DEVELOPEMNT" [sic, as named in the Figma text layer] and headline "ONE PLATFORM, THE FULL TRANSACTION" with a paragraph to the right, all sitting on the continuation of the dark-navy background band. Below, a dark rounded panel contains a 4-column feature grid — "Marketplace" (magnifier icon), "Transactions" (shield-check icon), "Logistics" (truck icon), "Backend" (gear icon) — each with a title and description, followed by a "BUILD WITH" label and five rounded technology pills: "WordPress", "Elementor", "WooCommerce", "Google Ads", "WP RESI API".
- Position and alignment: Overline `231:659` x=320, y=8477; Headline `231:660` x=320, y=8507, width=497, height=64; Paragraph `231:656` x=936, y=8473, width=664, height=72 — Measured from the design. Feature-grid+tech-stack container `231:686` ("Frame 3341") x=320, y=8721, width=1280, height=385.1 — Measured from the design.
- Width and height: Inner feature row `231:687` ("Frame 3339") x=95, y=60 (relative), width=1090, height=225.1, containing 4 cards of 250×225 px each at 280 px pitch (0, 280, 560, 840) — Measured from the design. Tech-stack row `247:201` x=144, y=285.1 (relative), width=992, height=40, with 5 pills of varying width (140, 136, 179, 144, 155 px) — Measured from the design.
- Grid and container behavior: 4-column equal-width grid for feature cards; tech-stack pills flow left-to-right in a single row with variable widths sized to content.
- Typography: Card titles ("Marketplace", "Transactions", "Logistics", "Backend") in bold white text; descriptions in lighter/muted body text; "BUILD WITH" label in small caps; pill labels in bold text on light pill backgrounds.
- Colors: Panel background solid dark navy; icons rendered in blue outline; card titles white; description text light gray/muted; tech pills have light lavender/white fill with dark navy bold text — all visually confirmed in the render.
- Borders: No visible card borders (background-differentiated only); pills have no visible border, relying on fill contrast.
- Radius: Pills are fully rounded (pill/capsule shape) — visually confirmed; feature cards have no visible rounded container (borderless on dark background).
- Shadows: None strongly visible on this dark panel.
- Spacing: Card icon-to-title gap = 47 px (title at y=47 within 77 px header sub-frame); title-to-description gap = 97 px from card top — Measured from the design (from `231:688`–`231:709` sub-frame structure). "BUILD WITH" label positioned 285.1 px below the feature row start, i.e. roughly 60 px below the row's bottom edge — Measured from the design.
- Images and required assets: Four icon glyphs (magnifier/search `231:690`, shield-check `231:697`, truck `231:704`, gear `231:711`).
- Reusable components: The pill/chip shape used for "BUILD WITH" tags is the same "Overlay+Border+OverlayBlur" family used for cards elsewhere on the page (per node naming `247:203`–`247:211`).
- Elements with unavailable metadata: Precise icon vector paths (magnifier, shield, truck, gear) are rendered shapes without further metadata decomposition.

#### Section 06 — "Greece's First Fully Digital Car Purchase" (The Result)
- Exact visible structure: Overline "06 — THE RESULT" and headline "GREECE'S FIRST FULLY DIGITAL CAR PURCHASE", centered, followed by two centered paragraphs of closing copy ("Buyers across Greece can now complete a full vehicle purchase entirely online..." and "When trust is designed into every step, it stops being a feature. It becomes the product."). Below the text, a "Live at cardom.gr" link (small dot + underlined text + external-link icon) sits above a giant outlined/watermark-style "CARDOM" wordmark spanning most of the section width, set against a light lavender background with a wavy divider shape beneath it leading into the footer.
- Position and alignment: Overline `231:661` x=879, y=9363; Headline `231:662` x=633, y=9393, width=655, height=64 — Measured from the design, horizontally centered within the 1280 px content column (x=320–1600). Paragraphs `231:657` (x=563, y=9497, width=795, height=72) and `231:658` (x=563, y=9593, width=795, height=24) — centered, Measured from the design.
- Width and height: Link `231:558` x=820.5, y=9657, width=278, height=56 — Measured from the design, centered. "CARDOM" watermark vector `231:663` x=320, y=9753, width=1280, height=222 — Measured from the design, spanning the full 1280 px content width.
- Grid and container behavior: All content in this section is horizontally centered rather than the left/right offset pattern used in Sections 01–05.
- Typography: Headline/paragraphs follow the overline/H3/body pattern; the "CARDOM" watermark is an outlined large display wordmark rendered as a vector shape rather than editable text.
- Colors: Watermark rendered in a very light lavender/white tone (low-contrast, decorative), background transitions to light lavender/periwinkle gradient (visually confirmed, matching Section 02's gradient family). Wavy divider `231:566` at x=1600, y=9208, width=1280, height=102 sits above this section as a transition shape — Measured from the design.
- Borders: None on this section's text/watermark elements.
- Radius: N/A (text and vector shapes).
- Shadows: None visually confirmed.
- Spacing: Link sits 264 px below the second closing paragraph's end (paragraph ends ~y9617, link starts y9657, so a 40 px gap) — Measured from the design. Watermark starts 96 px below the link (link ends y9713, watermark starts y9753) — Measured from the design.
- Images and required assets: "CARDOM" wordmark vector graphic; external-link icon and small dot bullet within the "Live at cardom.gr" link (`231:559`, `231:561`).
- Reusable components: The "Live at cardom.gr" link component (dot + text + icon) is a distinct reusable "visit live site" CTA pattern, matched structurally on Mobile (`281:3278`, same 278×56 size).
- Elements with unavailable metadata: External-link icon glyph inside `231:561` ("Group 411") has no further path-level metadata.

#### Footer Band (Case-Study Pagination, Certification Badge, Site Footer)
- Exact visible structure: A "‹ Previous work" link (left) and "Next work ›" link (right) sit at the very top edge of the footer band, each with an arrow/chevron glyph. Below, a full-width footer background image contains: the "PIXELOCRACY" logo, tagline "We transform the industries of the present, with the technologies of the future", a footer nav column ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), a LinkedIn social icon, a wavy divider line, a copyright line "Pixelocracy © 2026, All rights reserved.", a round blue scroll-to-top button (bottom right), and — positioned mid-height on the right side of the footer — an "EUROCERT" certification badge reading "Certified Information Security Management System / EN ISO/IEC 27001:2023 / Certified by EUROCERT" next to a small red/blue/yellow circular EUROCERT logo mark.
- Position and alignment: Previous-work link `231:766` ("Frame 3387") x=320, y=9963, width=173.4, height=24; Next-work link `231:769` ("Frame 3388") x=1433, y=9963, width=134.4, height=24 — Measured from the design, at the two outer content margins. Footer background image `231:652` x=1.19, y=9963, width=1917.6, height=787 — Measured from the design, full-bleed. EUROCERT badge `231:653` ("Group 1649") x=1316, y=10197, width=444.1, height=60.2 — Measured from the design.
- Width and height: See above; footer band total height ≈787 px (y=9963 to y=10750, i.e. to the bottom of the frame).
- Grid and container behavior: Footer content (logo block left, nav-links column right-of-center) mirrors the same 320 px left-margin convention as the rest of the page; EUROCERT badge sits further right, independent of the nav column.
- Typography: "PIXELOCRACY" logo in the same bold display face as the top nav; tagline and nav links in body/label text; copyright line in small body text; EUROCERT badge text in small multi-line caption text.
- Colors: Footer background transitions from white at top to light lavender/periwinkle at bottom (gradient, visually confirmed, consistent with the Section 06 background). "PIXELOCRACY" logo in bright blue; nav links and tagline in dark navy; scroll-to-top button is a solid blue filled circle with a white chevron icon; EUROCERT logo mark uses red, dark navy, and yellow/gold color blocks.
- Borders: None strongly visible; wavy divider line acts as a thin decorative separator (visually confirmed, thin gray/light stroke).
- Radius: Scroll-to-top button is fully circular — visually confirmed.
- Shadows: None strongly visible on the footer band overall.
- Spacing: Previous/Next-work links sit at the same y=9963 baseline, at opposite horizontal extremes (x=320 and x=1433) — Measured from the design.
- Images and required assets: "PIXELOCRACY" logo mark; LinkedIn icon; scroll-to-top chevron icon; EUROCERT circular logo mark (`231:654`) and its accompanying descriptive vector text (`248:395`).
- Reusable components: The Previous-work/Next-work case-study pagination pair, the "PIXELOCRACY" site footer block, and the EUROCERT badge are all site-wide/global components expected to repeat identically across other case-study pages in this file.
- Elements with unavailable metadata: None significant; this band was well captured in metadata, though exact hex values for the gradient and button colors were not retrievable via `get_variable_defs` (only the "Text" = #000826 variable was bound and returned).

---

### Mobile

#### Global Navigation Bar — Mobile
- Exact visible structure: Not present as a distinct node within the Mobile frame's own metadata bounds walked for this page (the frame starts directly with the hero background rectangle at y=0). A thin image band (`271:2655`, "image 65", x=0, y=0, width=420, height=58) occupies the very top and is consistent with a compact mobile nav bar (likely holding a hamburger menu and logo, per the desktop pattern), but individual nav item nodes (logo mark, menu icon) were not returned by `get_metadata`. Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Position and alignment: Band `271:2655` x=0, y=0, width=420, height=58 — Measured from the design.
- Width and height: 420×58 px — Measured from the design.
- Grid and container behavior: Full-bleed width matching the 420 px mobile frame.
- Typography: Not retrievable for this band specifically.
- Colors: Not retrievable for this band specifically.
- Borders / Radius / Shadows: Not retrievable.
- Spacing: N/A.
- Images and required assets: Likely a logo mark and menu/hamburger icon (per desktop equivalent), not resolvable to individual nodes here.
- Reusable components: Expected to correspond to the same global nav component seen on Desktop, collapsed to a mobile header pattern.
- Elements with unavailable metadata: Entire nav bar's internal content (logo, hamburger icon). Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

#### Hero / Header — Mobile
- Exact visible structure: Single stacked column: pill badge "CASE STUDY 2025" (differs from Desktop's "CASE STUDY 2023" — Measured from the design, text node `271:2658` vs Desktop `231:667`), headline "Cardom" / "AVIS" (same two-tone purple/navy styling, smaller scale), body paragraph (identical copy to Desktop), and below the text a full-width framed browser/device mockup of the vehicle-detail page (same screenshots as Desktop, reflowed narrower). No visible "Check it out" link/CTA button was found in the Mobile hero metadata (Desktop has `231:672`/`231:673`); this may be present but not captured by metadata. Visually confirmed in the live Figma canvas for badge/headline/paragraph/mockup only; CTA link presence/absence not confirmable.
- Position and alignment: Hero container `271:2656` x=16, y=118, width=388, height=312 — Measured from the design (16 px side margins vs Desktop's 320 px). Device mockup `271:2831` ("Background+Border+Shadow") x=38.37, y=460, width=384.77, height=613.74 — Measured from the design, full column width below the text.
- Width and height: Badge `271:2657` 150×32; Heading text 388×96 (relative y=52); Paragraph text 388×144 (relative y=168) — Measured from the design.
- Grid and container behavior: Single-column stack (text above, mockup below) versus Desktop's two-column side-by-side layout — a clear reflow difference. Content width reduced from Desktop's 628 px text column to 388 px, and margins reduced from 320 px to 16 px.
- Typography: Uses Mobile-scale styles — Mobile/H1 special Mobile (Sharp Grotesk, Book 25, 40/48 — From Figma style) for the headline versus Desktop's 80/76; Mobile/Body Mobile (Montserrat Regular 16/24 — From Figma style) for paragraph versus Desktop's 18/24; Mobile/Overline Mobile (Sharp Grotesk Medium 25, 14/16) for the badge/labels versus Desktop's 15/20.
- Colors: Same purple/navy heading treatment and badge coloring as Desktop, visually confirmed.
- Borders / Radius / Shadows: Same "Background+Border+Shadow" mockup frame naming as Desktop — Measured from the design (node name), same rounded-rectangle nesting structure.
- Spacing: Badge-to-heading gap reduced proportionally; heading-to-paragraph gap = 168−(52+96)=20 px — Measured from the design (tighter than Desktop's 32 px gap).
- Images and required assets: Same vehicle-detail screenshots as Desktop, reflowed to a narrower 372–380 px wide frame instead of Desktop's ~515–524 px.
- Reusable components: Same device-mockup component as Desktop, and same badge/heading/paragraph text-block component, both reflowed for a single-column mobile layout.
- Elements with unavailable metadata: The "Check it out" CTA link visible in Desktop's hero has no corresponding node found in the Mobile frame's metadata for this section. Per instructions, this is not evidence it is absent from the design — it may exist and not have been surfaced by `get_metadata`.

#### Section 01 — "A Broken Way to Buy" (The Market) — Mobile
- Exact visible structure: Overline "01 — THE MARKET" and headline "A BROKEN WAY TO BUY" stacked (no longer offset left/right as on Desktop — both start at x=16), followed by the body paragraph and closing sentence, both full mobile-column width. Below, a single "TRADITIONAL MARKET" card matching Desktop's left card content exactly (same 5 bullet points), and a small two-dot pagination control beneath it (`278:3013`, two 10×10 px ellipses spaced 20 px apart). The Desktop "CARDOM" advantage card has no corresponding node in the Mobile metadata for this section.
- Position and alignment: Overline `278:3008` x=16, y=1134; Headline `278:3009` x=16, y=1159.9, width=388, height=32; Paragraph `278:3010` x=16, y=1232, width=388, height=144; Sentence `278:3012` x=16, y=1400, width=388, height=72 — Measured from the design, all left-aligned at the standard 16 px mobile margin (single-column stack vs Desktop's offset two-column layout).
- Width and height: Comparison card `278:3016` x=16, y=1542, width=388, height=264 — Measured from the design (full mobile-column width vs Desktop's fixed 419/424 px card width).
- Grid and container behavior: Single card shown at a time with a 2-dot pagination indicator (`278:3013`, x=195, y=1826, width=30, height=10) directly below it — strongly indicating a swipeable/carousel behavior on mobile between "Traditional Market" and "Cardom" states, replacing Desktop's simultaneous side-by-side display.
- Typography: Same Mobile-scale text styles as the hero (Mobile/Overline Mobile, Mobile/H3 Mobile for the headline, Mobile/Body Mobile for paragraphs).
- Colors: Card visually matches Desktop's "TRADITIONAL MARKET" card (white background, blue accent rule, dark bullet text).
- Borders: Same right-edge accent rule as Desktop's left card, visually confirmed.
- Radius: Same "Overlay+Border+OverlayBlur" component type as Desktop (`278:3016`) — Measured from the design (node name).
- Shadows: Same "OverlayBlur" naming convention — Measured from the design (node name).
- Spacing: Bullet rows spaced similarly to Desktop, reflowed to the 388 px card width (bullet frames ~24 px tall, rows at 0/34/68/102/136 relative y) — Measured from the design.
- Images and required assets: Same bullet-point ellipse icons as Desktop.
- Reusable components: Same "Overlay+Border+OverlayBlur" card component as Desktop, reused in a single-card carousel pattern instead of a static two-card row.
- Elements with unavailable metadata: The second carousel slide (the "CARDOM" advantage card equivalent to Desktop's `231:632`) has no corresponding node in the Mobile frame's `get_metadata` walk. Its existence is inferred from the two-dot pagination control and the fact that a directly analogous "Cardom" card exists on Desktop; per instructions, this absence from metadata is not treated as evidence the card doesn't exist in the live file. Visually confirmed in the live Figma canvas: only dots and one card are visible in the reviewed screenshot region; the second slide's content was not independently visually confirmed within this assignment's screenshot passes.

#### Section 02 — "AVIS Puts Its Name on a New Idea" (The Bet) — Mobile
- Exact visible structure: Body copy from Desktop's two paragraphs (`231:571`, `231:606`) is consolidated into a single text frame ("Frame 3341", `278:3037`) stacked above the section's overline/headline instead of below it as on Desktop — a reordering of content flow. Overline "02 — THE BET" and headline "AVIS PUTS ITS NAME ON A NEW IDEA" follow. Below, the website-mockup and phone-mockup images from Desktop are stacked into a single tall vertical group rather than shown side by side.
- Position and alignment: Text block `278:3037` x=16, y=2066, width=388, height=192 (containing both paragraphs, at relative y=0 and y=120) — Measured from the design. Overline `278:3040` x=151, y=1936 (centered, unlike Desktop's left-shifted `231:608`); Headline `278:3041` x=16, y=1962, width=388, height=64 — Measured from the design.
- Width and height: Combined image group `278:3042` ("Group 423") x=60.5, y=2328, width=300, height=1130 — Measured from the design (a single narrow column vs Desktop's two side-by-side groups spanning 660+223=883+ px combined width).
- Grid and container behavior: Single-column stacked image treatment; the website-mockup screenshot and phone-mockup screenshot from Desktop appear consolidated into overlapping/stacked rounded-rectangle layers within this one group.
- Typography: Mobile-scale overline/H3/body styles, same as prior mobile sections.
- Colors: Same purple gradient background context as Desktop, reflowed.
- Borders / Radius: Same rounded-rectangle image containers (`278:3043`, `278:3044`) as Desktop's equivalents.
- Shadows: Not distinctly named; visually consistent soft shadow treatment expected per the shared component pattern.
- Spacing: Text-block-to-image gap: text ends y≈2258, image group starts y=2328 (≈70 px gap) — Measured from the design.
- Images and required assets: Same two screenshots as Desktop, reflowed into a single narrower stacked column.
- Reusable components: Same underlying image-mockup component as Desktop, restructured for vertical mobile flow.
- Elements with unavailable metadata: The exact visual separation between the "website mockup" and "phone mockup" images within the single stacked mobile group (`278:3042`) was not independently distinguishable from metadata bounding boxes alone.

#### Section 03 — "Every Screen Answers a Doubt" (Design for Trust) — Mobile
- Exact visible structure: Overline "03 — DESIGN FOR TRUST" and headline "EVERY SCREEN ANSWERS A DOUBT" stacked above the two supporting paragraphs (reordered vs Desktop, where the paragraph sits beside rather than below the heading) — matches Desktop content but in single-column order. Below, the 5-step process row ("Search" through "Deliver") is rendered as a horizontally wider strip (845 px) than the 388 px mobile viewport, confirmed via screenshot to overflow/scroll horizontally (the "Purchase" step is visibly cropped at the right edge in the captured render). Below that, the three feature cards (Certification, Transparency, Control) are stacked vertically full-width instead of Desktop's horizontal row.
- Position and alignment: Heading block `278:3047` ("Frame 3440") x=16, y=3643, width=388, height=298, containing overline/headline sub-frame `278:3048` (y=0–90 relative) and body sub-frame `278:3051` (y=130–298 relative) — Measured from the design. Process-row group `278:3149` x=16, y=4011, width=1280, height=109.55 — Measured from the design (note: width 1280 px far exceeds the 420 px mobile frame width, confirming horizontal overflow).
- Width and height: Feature cards `278:3174` (388×196), `278:3184` (389×162.7), `278:3194` (388×192.1), stacked at y=4191, 4417, 4609.7 respectively — Measured from the design.
- Grid and container behavior: Process-row: horizontally scrollable strip wider than the viewport (metadata width 1280 px inside a 420 px frame) — Measured from the design, confirming overflow/scroll behavior rather than reflow into a stacked list. Feature cards: single-column vertical stack, each full mobile-column width (388 px) vs Desktop's fixed 250 px width in a 3-up row.
- Typography: Mobile-scale styles throughout (Mobile/Overline Mobile, Mobile/H3 Mobile, Mobile/Body Mobile).
- Colors: Same blue-filled card treatment as Desktop for the three feature cards; same step-circle coloring (01 filled blue/active, 02–05 outlined).
- Borders: Same outlined step circles (02–05) as Desktop.
- Radius: Step circles fully rounded; feature cards use the same "Overlay+Border+OverlayBlur" component.
- Shadows: Same "OverlayBlur" naming convention as Desktop equivalents.
- Spacing: Feature cards stacked with a 26 px gap (4417−(4191+196)=30 px; 4609.7−(4417+162.7)=30 px, approximately) — Measured from the design.
- Images and required assets: Same step-underline squiggle vectors and feature-card icon glyphs as Desktop, reflowed to mobile card widths (348 px description text width vs Desktop's 210 px).
- Reusable components: Same numbered-stepper and blue feature-card components as Desktop; the stepper's mobile treatment (horizontal overflow strip) differs functionally from Desktop's fixed within-viewport row.
- Elements with unavailable metadata: None significant; this section's metadata closely mirrors Desktop's structure.

#### Section 04 — "Component by Component" (The Built) — Mobile
- Exact visible structure: Overline "04 — THE BUILT" and headline "COMPONENT BY COMPONENT" stacked, followed immediately below by the body paragraph (reordered to a single stacked flow, matching Section 03's mobile pattern) — versus Desktop's side-by-side heading/paragraph. Below, six screenshots reflow into a single column with one exception: the "garage" dashboard screenshot and a blog-article screenshot are placed side by side as a two-up pair; all other screenshots (vehicle detail, buy/checkout, promotional image, search/listing grid) stack full-width, one below another.
- Position and alignment: Heading block `278:3212` ("Frame 3441") x=16, y=5002, width=388, height=90 — Measured from the design. Paragraph `278:3211` x=16, y=5132, width=388, height=144 — Measured from the design, directly below the heading block (Desktop places this paragraph beside the heading instead).
- Width and height: Vehicle-detail screenshot `278:3215` 388×462 at y=5346; buy/checkout screenshot `278:3216` 388×310 at y=5878; garage screenshot `278:3219` 185×375 at x=16, y=6258; blog screenshot `278:3218` 185×355 at x=219, y=6358 (the two-up pair); promotional image `278:3220` 388×233 at y=6783; search/listing screenshot `278:3221` 388×304 at y=7086 — all Measured from the design.
- Grid and container behavior: Predominantly single-column full-width stack, with one explicit two-column pairing (garage + blog screenshots side by side at roughly half width each) — a distinct reflow pattern from Desktop's asymmetric staggered collage.
- Typography: Mobile-scale heading/body styles, consistent with other mobile sections.
- Colors: Same dark-navy section background as Desktop (background rectangle `278:3209` x=0, y=4902, width=420, height=2588) — Measured from the design.
- Borders / Radius: Same rounded-rectangle screenshot containers as Desktop.
- Shadows: Same implied soft-shadow treatment as Desktop's screenshot collage.
- Spacing: Vertical gaps between stacked screenshots range roughly 20–100 px depending on pairing (e.g., garage/blog pair starts y=6258, preceding buy screenshot ends y=6188, an ≈70 px gap) — Measured from the design.
- Images and required assets: Same six screenshots as Desktop, reflowed to mobile widths (388 px full-width or 185 px half-width for the paired items).
- Reusable components: Same framed-screenshot component as Desktop, restructured into a mostly single-column mobile flow with one two-up exception.
- Elements with unavailable metadata: None significant beyond the general note that mobile image crops/aspect ratios differ from Desktop's; exact source-image identity is inferred from matching file-name strings in node names.

#### Section 05 — "One Platform, the Full Transaction" (The Development) — Mobile
- Exact visible structure: Overline "05 — THE DEVELOPEMNT" and headline "ONE PLATFORM, THE FULL TRANSACTION" stacked above the body paragraph (`281:3224`, "We built the complete platform..."), all in a single-column flow — versus Desktop's side-by-side heading/paragraph arrangement. Below, the 4 feature cards (Marketplace, Transactions, Logistics, Backend) are stacked in a single vertical column instead of Desktop's 4-column row, followed by the "BUILD WITH" label and the 5 technology pills, which wrap onto two rows of two plus a final single pill, rather than Desktop's single horizontal row.
- Position and alignment: Heading block `281:3231` ("Frame 3443") x=16, y=7590, width=388, height=90; Paragraph block `281:3224` ("Frame 3442") x=16, y=7720, width=388, height=96 — Measured from the design. Feature-grid + tech-stack container `281:3234` ("Frame 3445") x=16, y=7886, width=388, height=1178.1 — Measured from the design (vs Desktop's 1280×385.1 wide-and-short container — a clear column-vs-row reflow).
- Width and height: Each feature card `281:3236`/`281:3243`/`281:3250`/`281:3257` is 308×197 px, stacked vertically at y=0, 227, 454, 681.1 (relative) — Measured from the design (vs Desktop's 250×225 px cards in a horizontal row).
- Grid and container behavior: Single-column vertical stack for feature cards; tech-stack pills (`281:3267`–`281:3275`) arranged in a 2-column wrapping grid (pill pairs at x=0/143 and x=0/177, then a final single pill at x=0, y=124 relative) rather than Desktop's single horizontal row of 5.
- Typography: Mobile-scale styles throughout.
- Colors: Same dark-navy panel background as Desktop; same blue icon outlines, white titles, muted description text, light pill fills with dark bold pill text.
- Borders / Radius / Shadows: Same visual treatment as Desktop equivalents (borderless cards on dark background; rounded/capsule pills).
- Spacing: Feature cards stacked with a 30 px gap (227−197=30; 454−(227+197)=30; 681.1−(454+197)=30.1) — Measured from the design, consistent 30 px rhythm. Tech-stack section starts 928.1 px below the feature-card group start (`281:3264` "Frame 3338" at relative y=928.1) — Measured from the design.
- Images and required assets: Same four icon glyphs (magnifier, shield-check, truck, gear) as Desktop.
- Reusable components: Same feature-card and tech-pill components as Desktop, reflowed to a single-column/wrapping-grid mobile arrangement.
- Elements with unavailable metadata: None significant; structure closely mirrors Desktop with clear reflow differences captured in metadata.

#### Section 06 — "Greece's First Fully Digital Car Purchase" (The Result) — Mobile
- Exact visible structure: Overline "06 — THE RESULT" and headline "GREECE'S FIRST FULLY DIGITAL CAR PURCHASE" stacked above the two closing paragraphs (same copy as Desktop), all left-aligned at the mobile margin rather than Desktop's centered treatment. Below, a "Live at cardom.gr" link and a large outlined "CARDOM" watermark wordmark, consistent with Desktop but scaled to mobile width.
- Position and alignment: Heading block `281:3228` ("Frame 3444") x=16, y=9195, width=388, height=90 — Measured from the design, left-aligned (vs Desktop's centered heading at x=633). Paragraphs `281:3226` (x=16, y=9325, width=388, height=120) and `281:3227` (x=16, y=9469, width=388, height=48) — Measured from the design, left-aligned.
- Width and height: Link `281:3278` x=71, y=9557, width=278, height=56 (same dimensions as Desktop's `231:558`, but horizontally centered within the narrower 420 px frame rather than under a centered heading) — Measured from the design. "CARDOM" watermark `281:3309` x=16, y=9653.4, width=388, height=68 — Measured from the design (much shorter/more compressed than Desktop's 1280×222, reflecting the narrower mobile column).
- Grid and container behavior: Left-aligned single-column text block, differing from Desktop's centered treatment; link and watermark remain roughly centered within the column.
- Typography: Mobile-scale overline/H3/body styles.
- Colors: Same light lavender watermark/background treatment as Desktop.
- Borders / Radius / Shadows: N/A (text and vector shapes).
- Spacing: Heading-to-paragraph gap and paragraph-to-link gap follow a similarly tight mobile rhythm as other sections (link starts y=9557, second paragraph ends y≈9517, ≈40 px gap) — Measured from the design.
- Images and required assets: Same "CARDOM" watermark vector and link icon/dot as Desktop, reflowed to mobile scale. A decorative vector divider (`281:3277`, x=404, y=9094.7, width=388, height=30.7) sits above this section — Measured from the design.
- Reusable components: Same "Live at cardom.gr" link component and watermark treatment as Desktop.
- Elements with unavailable metadata: None significant for this section.

#### Footer Band (Case-Study Pagination, Certification Badge, Site Footer) — Mobile
- Exact visible structure: "‹ Previous work" and "Next work ›" links appear near the bottom, above a full-width footer image containing the "PIXELOCRACY" logo and tagline, a footer nav list ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), a LinkedIn icon, a wavy divider, a copyright line "Pixelocracy © 2026, All rights reserved.", and a round blue scroll-to-top button — all stacked vertically full-width. No EUROCERT certification badge node was found in the Mobile frame's metadata anywhere in the footer region.
- Position and alignment: Previous-work link `281:3302` ("Frame 3387") x=16, y=9702.9, width=122.4, height=24; Next-work link `281:3305` ("Frame 3389") x=310, y=9702.9, width=94.4, height=24 — Measured from the design, at the two outer mobile margins (16 px and up to 420−16=404 px), same y-baseline as each other, matching Desktop's paired left/right pagination pattern. Footer image `281:3301` ("image 80") x=0, y=9877, width=420, height=574 — Measured from the design, full-bleed.
- Width and height: See above; footer band height ≈574 px (vs Desktop's 787 px), reflecting a more compact mobile footer layout.
- Grid and container behavior: All footer content (logo, tagline, nav list, social icon, copyright, scroll-to-top button) stacks in a single vertical column at the 16 px mobile margin, replacing Desktop's two-column layout (logo/tagline block left, nav column right).
- Typography: Same logo/tagline/nav/copyright text treatment as Desktop, at mobile type scale.
- Colors: Same white-to-lavender gradient background, blue logo, dark navy nav text, blue scroll-to-top button as Desktop.
- Borders: None strongly visible; same thin wavy divider line as Desktop.
- Radius: Scroll-to-top button fully circular, matching Desktop.
- Shadows: None strongly visible.
- Spacing: Previous/Next-work links sit at the same y=9702.9 baseline on opposite horizontal extremes, mirroring Desktop's structural pattern at mobile scale.
- Images and required assets: Same "PIXELOCRACY" logo, LinkedIn icon, and scroll-to-top chevron icon as Desktop.
- Reusable components: Same global footer, pagination-link, and scroll-to-top components as Desktop, restructured into a single-column mobile stack.
- Elements with unavailable metadata: The EUROCERT certification badge, clearly present and directly screenshotted on Desktop (node `231:653`), has no corresponding node listed anywhere in the Mobile frame's `get_metadata` output, and its presence could not be visually confirmed within the mobile screenshots reviewed for this assignment. Per instructions, this absence from metadata and from the reviewed screenshots is not treated as evidence that the badge does not exist in the live Figma file — it may be present in the canvas and not fully surfaced by the tools used here.
## Apeiron Case Study

### Desktop

#### Top Navigation Bar
- Exact visible structure: Full-width nav strip. A flat image asset (node `231:954`, "image 4") forms the nav background across the entire top edge; a separate vector logo group (node `248:374`, "Frame 2") sits centered on top of it. The rendered screenshot additionally shows "PIXELOCRACY" wordmark at the far left and nav items "Home / Services˚ / Work / Insights" at the far right — these are visible in the render but were not surfaced as separate text nodes by `get_metadata`.
- Position and alignment: Fixed at top, x=0, y=0. Measured from the design.
- Width and height: 1920 × 75 px. Measured from the design.
- Grid and container behavior: Full-bleed, spans entire frame width; logo group centered horizontally at x=596, y=27, 445.96 × 18.36 px. Measured from the design.
- Typography: Nav text/logo not resolvable as a text node (image + vector construction). Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.
- Colors: Background image asset — exact fill hex not resolvable (raster/image fill). Measured from the design (fill type only; color values embedded in the image asset).
- Borders: None observed.
- Radius: None observed.
- Shadows: None observed.
- Spacing: N/A (image-based bar).
- Images and required assets: Background raster "image 4" (`231:954`); logo vector "Frame 2" (`248:374`).
- Reusable components: This nav bar pattern (flat image strip + centered logo) is the same construction referenced elsewhere in the file's case-study pages.
- Elements with unavailable metadata: Nav link text ("Home", "Services", "Work", "Insights") and "PIXELOCRACY" wordmark at left — visually confirmed in the live Figma canvas; exact node metadata unavailable through MCP.

#### Hero / Header
- Exact visible structure: Two-column hero. Left column (`231:830` "Container"): pill badge "CASE STUDY 2025" → heading "Apeiron Ventures" (with "Apeiron" in red) → paragraph description → CTA link "Check it out". Right column (`231:840` "Background+Border+Shadow"): a bordered/shadowed browser-style mockup card containing a screenshot of the Apeiron site ("A Growing Portfolio of Ambitious Ventures" map graphic), with a white gradient fade near the bottom edge of the image.
- Position and alignment: Left container at x=320, y=315; right mockup at x=1105.55, y=134. Measured from the design.
- Width and height: Left container 628 × 436 px; badge 176×36; heading block 628×152; description block 512×96 (max-width 512px); CTA link 170×56. Right mockup card 528.47 × 773.36 px; inner screenshot 526.02 × 771.28 px (image itself rendered at 500×754.29 within a 500-wide slot, ~193% scaled/cropped); bottom fade overlay 500 × 110.43 px. Measured from the design.
- Grid and container behavior: Left column is a vertical flex stack (gap 32px). Right mockup is absolutely positioned relative to the hero, overlapping the vertical space of both hero and the "01 — The Client" section below it (mockup extends to y≈907 while hero container ends ≈y=751).
- Typography: Badge text "CASE STUDY 2025" — Montserrat Regular 16px/24px, color `#234cdc`. Heading "Apeiron Ventures" — From Figma style: Desktop/H1 special (Sharp Grotesk Book 25, 80px/76px); "Apeiron" colored `#ed1c24`, " Ventures" colored inherits default text `#000826`. Description paragraph — From Figma style: Desktop/Body (Montserrat Regular 18px/24px), color `#000826`. CTA "Check it out" — From Figma style: Desktop/CTA (Mabry Pro Regular 16px/24px), color `#1b1b1b`. All measured/style values from the design.
- Colors: Badge background `#d7defc`, badge text `#234cdc`; heading accent `#ed1c24`; heading/body text `#000826`; CTA button background white, text `#1b1b1b`; mockup card background `#eeeeee`, border `rgba(0,8,38,0.05)`. Measured from the design.
- Borders: Mockup card has a 1px solid border, `rgba(0,8,38,0.05)`. Measured from the design.
- Radius: Badge pill uses `rounded-[9999px]` (fully rounded/pill). No radius on CTA button or mockup card observed (square corners). Measured from the design.
- Shadows: CTA button — drop-shadow `6px 6px 0px #4467f6` (hard offset shadow, no blur). Mockup card — shadow `0px 25px 50px -12px rgba(0,0,0,0.25)`. Measured from the design.
- Spacing: Left container stack gap = 32px between badge/heading/description/CTA. Measured from the design.
- Images and required assets: Mockup screenshot "screencapture-apeiron-vc-portfolio…" (`231:842`); white-to-transparent gradient overlay (`231:843`).
- Reusable components: The badge pill + red-accent H1 + CTA pattern and the bordered/shadowed browser-mockup card are consistent with hero patterns expected on other case-study pages in this file.
- Elements with unavailable metadata: None beyond nav (see above); this section's layers were fully retrievable via metadata/design context.

#### Section 01 — The Client
- Exact visible structure: Overline label "01 — THE CLIENT", heading "INVESTING IN WHAT COMES NEXT", two body paragraphs (client description, then contrast/positioning statement), followed by a row of five partner/press logo marks ("40kft", "plugsecure", "atlaares", "Superlist", "circuland").
- Position and alignment: Overline at x=319, y=1062; heading x=319, y=1092; first paragraph x=936, y=1058; second paragraph x=936, y=1178; logo row (`231:892` "Frame 3357") at x=936, y=1300. Measured from the design.
- Width and height: Overline 159×20; heading 395×64; paragraph 1: 664×96; paragraph 2: 664×72; logo row 664×40 (logos: 40kft 105×40, plugsecure 140×28, atlaares 175×28, Superlist 40×40, circuland 73×40). Measured from the design.
- Grid and container behavior: Left-aligned label/heading block sits in the left half of the 1920px canvas (x≈320); paragraph text and logo row sit in the right column (x≈936), forming an asymmetric two-column text layout under the hero.
- Typography: Overline — From Figma style: Desktop/Overline (Sharp Grotesk Medium 25, 15px/20). Heading — likely Desktop/H3-family sizing based on visual weight; exact bound style not individually pulled for this node. Body paragraphs — From Figma style: Desktop/Body (Montserrat Regular 18px/24). 
- Colors: Body text color consistent with `#000826` (measured elsewhere in file for same style). Overline/heading color not individually pulled for this node — visually confirmed as a saturated accent tone (red/blue family) in the live Figma canvas; exact hex unavailable through MCP for this specific instance.
- Borders: None.
- Radius: Logo marks are vector/rounded-rect placeholders (e.g., `231:893` "40kft-logo 1" is a rounded-rectangle) — radius value not individually measured.
- Shadows: None observed.
- Spacing: Paragraph 1 to paragraph 2 vertical gap ≈120px (1058→1178+96=1274, gap ≈ −96 overlap avoided by column offset — paragraphs are stacked with ~24px gap after accounting for line-height).
- Images and required assets: Five logo vector/rounded-rect assets (`231:893`–`231:901`).
- Reusable components: The "logo strip" pattern (as-seen-in/press-mentions row) is a component pattern reusable across other case studies.
- Elements with unavailable metadata: Exact heading type style binding for "INVESTING IN WHAT COMES NEXT" — visually confirmed in the live Figma canvas; not individually confirmed via `get_design_context` in this pass.

#### Section 02 — Three Directions (Concept Exploration)
- Exact visible structure: Overline "02 — THREE DIRECTIONS", heading "EVERY BRIEF STARTS WITH EXPLORATION", two body paragraphs, then a row of three concept preview images ("image 68", "image 69", "image 74") each with a numbered/lettered caption below: "1. VC Behind the Founders", "2. Futuristic & Bold", "3. Infinite by Nature" (each with its own descriptive caption), and a "SELECTED" pill badge positioned over the third (rightmost) concept.
- Position and alignment: Overline x=841, y=1544; heading x=732, y=1574; paragraph 1 x=602, y=1678; paragraph 2 x=605, y=1770; image row y=1922 (image 68 at x=320, image 69 at x=770, image 74 at x=1220); caption labels at y=2491 (x=320/770/1220); caption descriptions at y=2525; "SELECTED" badge at x=1487.5, y=2486. Measured from the design.
- Width and height: Each concept image 380 × 545 px; caption label blocks ~258/185/193 px wide, 24px tall; description blocks 380×72; "SELECTED" badge 118×34. Measured from the design.
- Grid and container behavior: Three-column grid, each column 380px wide with a 70px gap (770−320−380=70), aligned to the same 320px left margin used in Section 01.
- Typography: Overline — From Figma style: Desktop/Overline. Heading — visual heading style (H3/H4 family). Captions/labels — From Figma style: Desktop/Body Small (Montserrat Regular 16px/24) for column labels; Desktop/Body (18px/24) for descriptions. "SELECTED" badge text — Montserrat Bold 16px/24, color `#234cdc`.
- Colors: "SELECTED" badge background `#b2c1ff`, text `#234cdc`, with a small dot indicator icon. Measured from the design. Section background at this point transitions via a radial gradient rounded-rectangle (`231:786`, 1920×1459 at y=2507) — gradient center color `rgba(215,222,252,1)` fading to `rgba(215,222,252,0)`, i.e. light lavender-blue glow fading to transparent over a white page background. Measured from the design.
- Borders: None on the three images (plain rounded-rectangle image fills).
- Radius: Images are "rounded-rectangle" node type — corner radius present but not individually measured in this pass; visually a small/medium radius consistent with other image cards in the file.
- Shadows: None observed on the three concept images.
- Spacing: 70px horizontal gutter between the three image columns; ~34px between each image and its caption label.
- Images and required assets: `231:888` "image 68", `231:886` "image 69", `231:887` "image 74" (three concept mockup screenshots).
- Reusable components: The badge-pill "SELECTED" marker is the same component construction as the "CASE STUDY 2025" hero badge (pill shape, light-tint background, saturated-blue text, small dot icon) — a reusable tag/badge component.
- Elements with unavailable metadata: None additional; all listed elements were present in `get_metadata`.

#### Section 03 — Why This Is The One (+ Reasons Concept C Won)
- Exact visible structure: Overline "03 — WHY THIS IS THE ONE", heading "THE NAME SAID IT ALL", two supporting paragraphs. Below, a secondary overline "reasons Concept C won" introduces a row of three equal-width cards, each with a large number ("01", "02", "03"), a divider line, a bold title (BRAND ALIGNMENT / VISUAL UNIQUENESS / CONSTRAINT AS ASSET), and a body paragraph.
- Position and alignment: Overline x=320, y=2943; heading x=320, y=2973; paragraph 1 x=936, y=2939; paragraph 2 x=936, y=3059; "reasons Concept C won" label x=320, y=3263; three cards at y=3299, x=320 / 760 / 1200. Measured from the design.
- Width and height: Overline 257×20; heading 459×32; paragraph 1: 600×96; paragraph 2: 600×144; card 1: 400×298; card 2: 400×308; card 3: 400×298 (each with 40px internal padding, inner text block 320px wide). Measured from the design.
- Grid and container behavior: Three-column card row, each card 400px wide with a 40px gap (760−320−400=40), left-aligned to the 320px margin.
- Typography: Card numbers ("01"/"02"/"03") — From Figma style: Desktop/H3 (Sharp Grotesk Medium 25, 32px/32), color white. Card titles — Montserrat Bold 20px/24 (Desktop/H5 family), color white. Card body — From Figma style: Desktop/Body (Montserrat Regular 18px/24), color white.
- Colors: Card background `#4467f6` (solid blue). Divider line rendered via an inline SVG asset ("Line 297"). Measured from the design.
- Borders: None (solid fill, no stroke observed on the card itself).
- Radius: Not observed (square corners on the card container based on design-context output).
- Shadows: Card drop-shadow `6px 6px 0px #cccccc` (hard offset, no blur). Measured from the design.
- Spacing: Internal card padding 40px; internal gap between number/title-block 20px; gap between title, divider, and paragraph 16px within the text sub-block.
- Images and required assets: Divider line SVG ("Line 297", reused identically in all three cards).
- Reusable components: This numbered-reason card is a distinct reusable card component (blue fill, white text, hard offset shadow, number + title + divider + body) — the same construction (`Overlay+Border+OverlayBlur` frame naming) recurs in the platform-feature cards later in the page, indicating a shared card component across the design system.
- Elements with unavailable metadata: None; all three cards and their text children were retrievable via metadata.

#### Section 04 — The Built / Designed To Move (Dark Showcase)
- Exact visible structure: A large dark full-bleed background panel begins here (rounded-rectangle `231:783`, "Rectangle 79") containing: overline "04 — THE BUILT", heading "DESIGNED TO MOVE", one long body paragraph, followed by a sequence of browser/site-screenshot mockups presented at varying sizes and alignments (an "About Us" page capture, a full-height site capture, a "fund of funds" page capture, a portfolio page capture inside a rounded browser-frame component with a bottom fade mask, a further site capture, and a two-part "news & insights" capture group) arranged in a staggered, non-uniform grid suggesting a scroll-driven showcase.
- Position and alignment: Dark background panel `231:783` at x=0, y=3747, spanning to y=8033 (height 4286). Heading block at x=759–887, y=3901–3963; paragraph at x=610, y=4003. Mockups: "FireShot Capture…About Us" at x=320, y=4223 (782×965); "screencapture-apeiron-vc" at x=1235, y=4730 (365×700); "fund-of-funds" at x=320, y=5368 (686×419); portfolio browser-frame group (`231:941`) at x=1102, y=5612 (498×1008, containing screenshot 497×1008 plus a bottom fade rectangle 497×109.77); "screencapture…14_27_41" at x=320, y=5967 (710×370); news-insights group (`231:944`) at x=321, y=6800 (1279×1081.89, composed of two stacked captures 1279×346.75 and 1279×736.14). Measured from the design.
- Width and height: See above per asset; dark panel overall 1920×4286. A second dark rounded-rectangle (`231:784`, "Rectangle 82") at x=0, y=7216, 1920×817 sits layered within/after this panel (ends at y=8033, matching the end of `231:783`), reinforcing the dark background through this whole span.
- Grid and container behavior: Assets are absolutely positioned/staggered rather than in a strict grid — a deliberate offset/masonry-style layout typical of a "site showcase" scroll section. A rounded-rectangle (`231:785`, "Rectangle 83", 1920×817.0) is positioned at x=1920, y=4564 — i.e., entirely outside the visible 0–1920 canvas of this frame. Measured from the design.
- Typography: Overline — From Figma style: Desktop/Overline. Heading — heading-scale text, color white (against dark panel). Paragraph — From Figma style: Desktop/Body (18px/24), color white/light on dark background (inferred from contrast against `#000826` panel fill; not individually re-measured for this text node).
- Colors: Panel background `#000826` (measured from the design via `get_design_context` on node `231:783`).
- Borders: None on the panel; individual mockup screenshots use rounded-rectangle fills (image content).
- Radius: Mockup image containers are rounded-rectangle node types (radius present, not individually re-measured per asset in this pass).
- Shadows: None additionally observed beyond the fade-mask treatment on the portfolio browser-frame group (bottom fade rectangle).
- Spacing: Non-uniform / staggered — no consistent grid gutter; vertical overlap between some assets (e.g., portfolio group 5612–6620 overlaps vertically with the "screencapture 14_27_41" asset at 5967–6337 and "fund of funds" 5368–5787), consistent with a layered/parallax showcase composition.
- Images and required assets: `231:937` "FireShot Capture 001 - About Us - Apeiron VC"; `231:938` "screencapture-apeiron-vc-2026-07-01-14_25_15"; `231:940` "screencapture-apeiron-vc-fund-of-funds-2026-07-01-14_34_57"; `231:941`/`231:942`/`231:943` portfolio browser-frame group with fade mask; `231:939` "screencapture-apeiron-vc-2026-07-01-14_27_41"; `231:944`/`231:945`/`231:946` news-insights two-part capture group.
- Reusable components: The rounded-browser-frame-with-bottom-fade construction (Group 1640, seen here and reused identically as the hero mockup in the header section) is a reusable "site screenshot" component pattern.
- Elements with unavailable metadata: Decorative vector `231:794` ("Vector", x=1912, y=2799, 1920×154, positioned mostly off-canvas to the right) and `231:795` ("Vector", x=1600, y=8918, 1280×102, also extending off-canvas) — both are visually confirmed in the live Figma canvas as thin diagonal/wave divider lines; their exact rendered appearance and role could not be further resolved through MCP.

#### Section 05 — The Development / One Platform, The Full Transaction
- Exact visible structure: Overline "05 — THE DEVELOPEMNT" (sic, spelled as designed), heading "ONE PLATFORM, THE FULL TRANSACTION", body paragraph, followed by a dark card (`231:844`, "Frame 3341") containing: a 4-column row of feature cards (Marketplace, Transactions, Logistics, Backend — each with an icon, bold title, and description), and below that a "BUILD WITH" label plus five technology pill tags (WordPress, Elementor, WooCommerce, Google Ads, WP RESI API).
- Position and alignment: Overline x=320, y=8187; heading x=320, y=8217; paragraph x=936, y=8183; dark card `231:844` at x=320, y=8431. Feature-card row (`231:845`) at x=95, y=60 (relative to card, i.e. x=415, y=8491 absolute); tech-pill row (`247:188`) at x=144, y=285.1 (relative, i.e. x=464, y=8716.1 absolute). Measured from the design.
- Width and height: Dark card 1280 × 385.1 px. Each feature card 250px wide (icon+title block 250×77, description 250×96), with 30px gaps between the 4 cards (total row 1090px: 250×4 + 30×3 = 1090). Tech-pill row 992px wide; pills: WordPress 140×40, Elementor 136×40, WooCommerce 179×40, Google Ads 144×40, WP RESI API 155×40. Measured from the design.
- Grid and container behavior: Dark card uses a centered flex column (60px internal padding) containing a horizontally centered 4-item flex row (gap 30px) and a full-width flex row for the tech pills (justify-between).
- Typography: Overline/heading on white background above the card — From Figma style: Desktop/Overline and heading scale. Feature card titles — Montserrat Bold 24px/30 (Desktop/H4), color white. Feature card descriptions — From Figma style: Desktop/Body (18px/24), color `rgba(226,226,226,0.7)`. "BUILD WITH" label — Montserrat Medium 16px/24, color white. Tech pill labels — Montserrat Bold 16px/24, color `#000826`. All measured from the design.
- Colors: Dark card background `#081440`. Tech pill background `#dbe1fc`. Feature description text `rgba(226,226,226,0.7)` (white at 70% opacity). Measured from the design.
- Borders: None observed on feature cards; tech pills have no stroke (solid fill only, per design context).
- Radius: Tech pills use `rounded-[40px]` (fully rounded pill shape). Measured from the design.
- Shadows: None observed.
- Spacing: 30px gap between the 4 feature cards; 20px internal gap between icon/title and title/description within each card; 32px bottom padding per card; tech-pill row spaced via `justify-between` across 992px.
- Images and required assets: Four feature icons — `231:848` "Group 1632" (Marketplace), `231:855` "Group 1633" (Transactions), `231:862` "truck" (Logistics), `231:869` "Group 1631" (Backend) — all SVG vector icons ~27–40px square.
- Reusable components: The feature-card construction ("Overlay+Border+OverlayBlur" frame naming) and the pill-tag construction are the same reusable card/pill components seen in Section 03's reason cards and the hero/SELECTED badges respectively — confirming a shared component library across the page.
- Elements with unavailable metadata: None; full structure and colors were retrievable via `get_design_context`.

#### Section 06 — The Result
- Exact visible structure: Overline "06 — THE RESULT", heading "RECOFNISED. LIVE. BOUNDLESS." (sic, spelled as designed), followed by two body paragraphs (Awwwards nomination mention; closing statement about founders/LPs).
- Position and alignment: Overline x=879, y=9071; heading x=633, y=9103; paragraph 1 x=563, y=9207; paragraph 2 x=563, y=9303. Measured from the design.
- Width and height: Overline 162×20; heading 655×64; paragraph 1: 795×72; paragraph 2: 795×72. Measured from the design.
- Grid and container behavior: Centered block (heading centered around x≈633–1288 of the 1920px canvas; paragraphs share the same 795px-wide centered column).
- Typography: Overline — From Figma style: Desktop/Overline. Heading — heading-scale text. Paragraphs — From Figma style: Desktop/Body (18px/24).
- Colors: On white/light background (no background rectangle covers this y-range); text color consistent with the file's dark text token `#000826` (not individually re-measured for this specific node in this pass — consistent with the same style used in Section 01/02).
- Borders: None.
- Radius: N/A.
- Shadows: None.
- Spacing: ~96px gap between heading and first paragraph; paragraphs stacked with a small gap (9303−9207−72=24px).
- Images and required assets: None in this text block.
- Reusable components: Overline + centered heading + centered body-paragraph pattern matches the "closing statement" pattern likely reused on other case-study pages.
- Elements with unavailable metadata: None; fully retrievable via metadata.

#### "Live at apeiron.vc" Link Badge
- Exact visible structure: A pill-shaped link containing a small dot icon, the label "Live at apeiron.vc", and a trailing arrow/external-link icon.
- Position and alignment: x=821.5, y=9415, positioned centered above the wordmark band. Measured from the design.
- Width and height: 276 × 56 px. Measured from the design.
- Typography: From Figma style: Desktop/Body (Montserrat Regular 18px/24), color `#234cdc`.
- Colors: Background `#d7defc`, text/icon `#234cdc`. Measured from the design.
- Borders: None observed.
- Radius: Full pill (per design-context class naming, though exact radius value not individually reconfirmed — consistent with other pill components at `rounded-[9999px]`).
- Shadows: None observed.
- Spacing: Internal padding 40px horizontal / 16px vertical; 8px gap between dot icon, text, and trailing icon.
- Images and required assets: Dot icon (`231:788`/`231:789` ellipse SVG), trailing icon group (`231:790` "Group 411").
- Reusable components: Same pill-link component construction as the "SELECTED" and "CASE STUDY 2025" badges (light-blue tint + saturated-blue text/icon), confirming a single reusable "tag/link" component reused across the page.
- Elements with unavailable metadata: None.

#### Apeiron Ventures Wordmark Watermark
- Exact visible structure: A large decorative typographic watermark spelling "APEIRON VENTURES" in a bold serif/pixel-adjacent display face, rendered as 15 individual vector paths (one grouping per letter/word segment), in a very light near-white/lavender tone, spanning nearly the full page width as a background-style graphic element beneath the "Live at apeiron.vc" badge and above the footer.
- Position and alignment: Group (`231:902`) at x=320, y=9511, full width relative to content column. Measured from the design.
- Width and height: 1279.999 × 134.316 px overall; individual letter-vectors range roughly 28.9–81.9px wide × ~130.5px tall. Measured from the design.
- Typography: Not a text node — constructed entirely from vector paths (no bound text style).
- Colors: Rendered as a very pale/near-white tone against the light background, visually confirmed in the live Figma canvas (exact hex not resolvable since it is vector-fill data not captured in this pass).
- Borders: None.
- Radius: N/A (typographic vector shapes).
- Shadows: None observed.
- Spacing: N/A.
- Images and required assets: 15 vector paths (`231:903`–`231:917`, all named "Vector").
- Reusable components: This "giant faint wordmark above the footer" is a decorative pattern likely reused (with the respective client name) across other case-study pages in this file.
- Elements with unavailable metadata: The exact fill color/opacity value of the wordmark — visually confirmed in the live Figma canvas as a pale off-white/lavender tint; exact node fill metadata unavailable through MCP in this pass.

#### Previous Work / Next Work Navigation
- Exact visible structure: Two navigation links flanking the footer transition — "Previous work" (left, with a leftward triangular/arrow icon) and "Next work" (right, with a rightward triangular/arrow icon).
- Position and alignment: "Previous work" (`231:947`) at x=320, y=9634; "Next work" (`231:950`) at x=1433, y=9634 — both at the same vertical position, left and right aligned to the page's content margins. Measured from the design.
- Width and height: "Previous work" block 173.43 × 24 px (arrow 16.43×23, label 141×24); "Next work" block 134.43 × 24 px (label 102×24, arrow 16.43×23). Measured from the design.
- Typography: Labels use body-small scale text (consistent with Desktop/Body Small, 16px/24) — not individually re-confirmed via design context in this pass.
- Colors: Not individually re-measured in this pass; visually confirmed in the live Figma canvas as dark text consistent with `#000826` on the light background at this point in the page.
- Borders: None.
- Radius: N/A.
- Shadows: None.
- Spacing: Arrow-to-label gap ≈16px (32.43−16.43).
- Images and required assets: Two "Polygon 1" arrow/triangle vector icons.
- Reusable components: This prev/next case-study pagination pattern is a component expected to be reused identically across every other case-study page in the file (only the label position/arrow direction mirrors).
- Elements with unavailable metadata: Exact text color hex for "Previous work"/"Next work" — visually confirmed in the live Figma canvas; not individually re-measured through MCP in this pass.

#### Global Site Footer (with EUROCERT Certification Badge)
- Exact visible structure: A large flat raster image (`231:819`, "image 1") forms the entire footer band, containing (baked into the image): the "PIXELOCRACY" wordmark in blue, a three-line tagline ("We transform the industries of the present, with the technologies of the future"), a footer nav column ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), a LinkedIn icon, a thin wavy horizontal divider line, a copyright line ("Pixelocracy © 2026, All rights reserved."), and a circular blue "scroll to top" button (up-chevron icon) fixed at the bottom-right. Overlaid on top of this image, as separate editable layers, is the EUROCERT ISO/IEC 27001:2023 certification badge (logo mark + certification text).
- Position and alignment: Footer image at x≈1.19, y=9634, spanning to the bottom of the frame (y=10421). EUROCERT badge group (`231:820`) at x=1316, y=9868, right-aligned within the footer band. Measured from the design.
- Width and height: Footer image 1917.62 × 787 px. EUROCERT logo mark 60×60 px; certification text SVG 367.4 × 56.53 px. Measured from the design.
- Grid and container behavior: Footer content (wordmark, tagline, nav column, copyright, scroll-to-top button) is baked as a single flat image rather than live layout nodes; only the EUROCERT badge is a separate, independently positioned overlay group.
- Typography: All footer text (wordmark, tagline, nav links, copyright) is part of the flat raster image — no live text nodes/styles retrievable for this content. Visually confirmed in the live Figma canvas: "PIXELOCRACY" appears in a bold condensed display face; nav links and copyright appear in a standard sans body face.
- Colors: "PIXELOCRACY" wordmark renders in a saturated blue (visually consistent with the file's `#234cdc`/`#4467f6` blue family); background is a soft white-to-light-lavender vertical gradient; scroll-to-top button is a solid blue circle with a white chevron. Visually confirmed in the live Figma canvas; exact hex values not individually measurable since this content is a flattened raster image rather than editable fills.
- Borders: None observed.
- Radius: Scroll-to-top button is fully circular.
- Shadows: None strongly observed beyond a subtle button shadow, visually confirmed in the live Figma canvas.
- Spacing: Not measurable at the layer level (flattened image); visual spacing between wordmark/tagline/nav column/copyright is proportionally even as rendered.
- Images and required assets: Footer raster image (`231:819`, "image 1"); EUROCERT logo mark (`231:821`, "eurocert-logo 1"); EUROCERT certification text SVG (`248:396`).
- Reusable components: This is the site-wide global footer, and — aside from the EUROCERT badge — is expected to be the same flattened footer asset reused across every page/case study in the file.
- Elements with unavailable metadata: All footer text content (wordmark, tagline, "Expertise/Work/About/Cookie Policy/Privacy Policy" links, LinkedIn icon, copyright line, scroll-to-top button) — visually confirmed in the live Figma canvas via the rendered screenshot; exact node metadata unavailable through MCP because this content is baked into a single flattened image asset rather than exposed as individual layers.

---

### Mobile

#### Top Navigation Bar — Mobile
- Exact visible structure: Same flat-image + logo construction as Desktop, condensed to mobile width. Node `266:2318` "image 65" forms the nav background.
- Position and alignment: x=0, y=0. Measured from the design.
- Width and height: 420 × 58 px (vs. Desktop's 1920 × 75 px — noticeably shorter bar on mobile). Measured from the design.
- Grid and container behavior: Full-bleed across the 420px mobile canvas.
- Typography/Colors/Borders/Radius/Shadows/Spacing: Same construction as Desktop (flat image asset); values not individually re-measured for the mobile instance in this pass.
- Images and required assets: `266:2318` background image (mobile-specific asset, distinct from Desktop's `231:954`).
- Reusable components: Same nav-bar pattern as Desktop, scaled down.
- Elements with unavailable metadata: Nav content is visually confirmed in the live Figma canvas (via the mobile overview screenshot) but not resolvable to individual text/logo nodes through MCP, same limitation as Desktop.

#### Hero / Header — Mobile
- Exact visible structure: Single-column stack: pill badge "CASE STUDY 2025" → heading "Apeiron Ventures" → paragraph description, followed immediately below by the bordered/shadowed mockup card (screenshot of the Apeiron site). Differs from Desktop: **no visible "Check it out" CTA link/button is present in the mobile hero** — the metadata for the mobile `Container` (`266:2319`) lists only the badge, heading, and description as children, and no CTA equivalent to Desktop's `231:838` "Link" appears in the mobile frame's metadata or in the rendered screenshot at this position.
- Position and alignment: Container (`266:2319`) at x=16, y=118; mockup card (`266:2485`) at x=37.46, y=412. Measured from the design.
- Width and height: Container 388 × 264 px; badge 150×32; mockup card 382.95 × 561.71 px (inner screenshot 382.09 × 560.24 px). Measured from the design.
- Grid and container behavior: Full single-column stack, no side-by-side layout (unlike Desktop's two-column hero); mockup card sits directly beneath the text block rather than beside it.
- Typography: Badge — Montserrat Regular 14px/24, color `#234cdc` (From Figma style / measured: Mobile uses a smaller 14px badge text vs. Desktop's 16px). Heading — From Figma style: Mobile/H1 special Mobile (Sharp Grotesk Book 25, 40px/48 — roughly half of Desktop's 80px/76 H1 special), "Apeiron" in `#ed1c24`, " Ventures" in `#000826`. Description — From Figma style: Mobile/Body Mobile (Montserrat Regular 16px/24), color `#000826` (vs. Desktop's 18px/24). Measured from the design.
- Colors: Badge background `#d7defc`; identical color palette to Desktop (`#234cdc`, `#ed1c24`, `#000826`) — confirmed to be shared design tokens across breakpoints. Measured from the design.
- Borders: Mockup card border/background consistent with Desktop's construction (not individually re-confirmed but same "Background+Border+Shadow" frame naming, `266:2485`).
- Radius: Badge is a full pill, matching Desktop.
- Shadows: Not individually re-measured for mobile in this pass; frame naming ("Background+Border+Shadow") indicates the same shadow treatment as Desktop is present.
- Spacing: Container internal gap = 20px (vs. Desktop's 32px) between badge/heading/description.
- Images and required assets: Mobile-specific screenshot asset within `266:2487`.
- Reusable components: Same badge + heading + mockup-card component pattern as Desktop, using the dedicated Mobile typography tokens.
- Elements with unavailable metadata: The CTA "Check it out" link seen on Desktop is not present as a child of the mobile hero `Container` in metadata and was not visually identified in the mobile hero region of the rendered screenshot — its absence at this position is noted as a structural difference from Desktop, not asserted as confirmed nonexistence elsewhere on the page.

#### Section 01 — The Client — Mobile
- Exact visible structure: Same content as Desktop (overline, heading, two paragraphs, five-logo row) restacked into a single column below the hero mockup.
- Position and alignment: Overline (`266:2328`) x=16, y=1036.09; heading (`266:2329`) x=16, y=1062; logo row (`271:2844`) x=16, y=1494; paragraph 1 (`266:2331`) x=16, y=1166.09; paragraph 2 (`266:2330`) x=16, y=1310. Measured from the design. Note the mobile order is overline → heading → logo row → paragraph 1 → paragraph 2 (logo row appears mid-stack, between heading and body copy, rather than after both paragraphs as on Desktop).
- Width and height: Overline 148×16; heading 388×64; logo row 388×111 (two-row wrapped logo layout: 40kft, plugsecure, Superlist on row 1; atlaares, circuland on row 2); paragraph 1: 388×120; paragraph 2: 388×144. Measured from the design.
- Grid and container behavior: Full single-column stack, all elements at consistent 16px left margin, 388px content width (420px canvas − 16px margins each side).
- Typography: Overline — From Figma style: Mobile/Overline Mobile (Sharp Grotesk Medium 25, 14px/16 — vs. Desktop's 15px/20). Body paragraphs — From Figma style: Mobile/Body Mobile (16px/24) or Mobile/Body Small Mobile (14px/24) depending on instance.
- Colors: Consistent with Desktop's shared tokens (`#000826` body text) — not individually re-measured for this instance.
- Borders/Radius/Shadows: Same as Desktop equivalents (logos as rounded-rectangle/vector placeholders).
- Spacing: 388px content width vs. Desktop's 664px column — logo row wraps to two rows on mobile (40kft/plugsecure/Superlist at y=0; atlaares/circuland at y=71/77) instead of Desktop's single row of five.
- Images and required assets: Same five logo assets, mobile-scaled and repositioned (`271:2845`–`271:2853`).
- Reusable components: Same logo-strip component, re-flowed to two rows for narrow viewport.
- Elements with unavailable metadata: None; fully retrievable.

#### Section 02 — Three Directions — Mobile (Carousel)
- Exact visible structure: Overline "02 — THREE DIRECTIONS", heading "EVERY BRIEF STARTS WITH EXPLORATION", two paragraphs (`266:2340` "Frame 3341"), followed by a **single concept card shown at a time** — specifically the "Infinite by Nature" (winning/selected) concept image, its label, "SELECTED" badge, and description — with a 3-dot pagination control (`266:2337` "Frame 3423") beneath the image. This differs structurally from Desktop, which displays all three concepts side by side simultaneously; the mobile version is a swipeable single-item carousel (evidenced by the 3-dot indicator matching the 3 concepts) rather than a static 3-column grid.
- Position and alignment: Overline (`266:2343`) x=99, y=1705; heading (`266:2344`) x=16, y=1731; text frame (`266:2340`) x=16, y=1835; concept image (`273:2857`, "image 74") x=16, y=2135; dot pagination (`266:2337`) x=185, y=2847; label "Infinite by Nature" (`273:2858`) x=16, y=2721; "SELECTED" link (`273:2860`) x=297, y=2716; description (`273:2859`) x=16, y=2755. Measured from the design.
- Width and height: Concept image 388 × 557 px (vs. Desktop's 380×545 per-column image); dot row 50 × 10 px, three 10×10 dots spaced 20px apart; "SELECTED" badge 107 × 34 px. Measured from the design.
- Grid and container behavior: Single-column, full-width (388px) card per slide; dot pagination centered beneath the image.
- Typography: Overline — From Figma style: Mobile/Overline Mobile. Heading — From Figma style: Mobile/H3 Mobile (24px/32) sizing family. Label — Desktop/Body Small-equivalent styling; description — Mobile/Body Mobile.
- Colors: "SELECTED" badge consistent with Desktop's `#b2c1ff` background / `#234cdc` text pattern (not individually re-measured for the mobile instance, but same component/frame naming `Link`).
- Borders/Radius/Shadows: Same rounded-rectangle image construction as Desktop.
- Spacing: 112px gap between text block and image; dots positioned 112px below the image bottom edge start (2847 vs image end 2692).
- Images and required assets: `273:2857` "image 74" (mobile-scaled concept screenshot); dot indicator ellipses (`266:2338`, `266:2339`, `273:2855`).
- Reusable components: Carousel/slider component with dot pagination — a mobile-specific reusable pattern not present on Desktop for this content type.
- Elements with unavailable metadata: The other two carousel slides ("VC Behind the Founders" / "Futuristic & Bold") are not present as nodes in the mobile frame's metadata and were not visible in the static mobile screenshot render (only the active/selected slide renders in a static capture of a carousel). Their existence is inferred from the 3-dot pagination control and from the equivalent Desktop content, but they are not directly visually confirmed in this mobile capture.

#### Section 03 — Why This Is The One (+ Reasons Concept C Won) — Mobile (Carousel)
- Exact visible structure: Overline "03 — WHY THIS IS THE ONE" and heading "THE NAME SAID IT ALL" (`266:2376` "Frame 3439"), two paragraphs (`266:2379` "Frame 3344"), then secondary label "reasons Concept C won" (`273:2869`) followed by a single visible reason card — card "01", "BRAND ALIGNMENT" (`273:2863`) — and a second 3-dot pagination control (`273:2870` "Frame 3449") beneath it, again indicating a single-slide-at-a-time carousel for the three reason cards shown together on Desktop.
- Position and alignment: Heading group at x=16/0, y=3038 (outer frame `266:2375`); reason card (`273:2863`) at x=16, y=3574; dot pagination (`273:2870`) at x=185, y=3858. Measured from the design.
- Width and height: Outer text frame 388 × 434 px; reason card 388 × 264 px (vs. Desktop's 400×298 per card); dot row 50 × 10 px. Measured from the design.
- Grid and container behavior: Single-column stack; card is full-width (388px) rather than Desktop's fixed 400px in a 3-up row.
- Typography: Card number "01" — Sharp Grotesk styling (Mobile/H3 Mobile family, 24px/32, vs. Desktop's 32px/32). Card title "BRAND ALIGNMENT" — bold Montserrat. Card body — Mobile/Body Mobile or equivalent.
- Colors: Card background consistent with Desktop's `#4467f6` (same frame/component naming "Overlay+Border+OverlayBlur"), not individually re-measured for the mobile instance.
- Borders/Radius/Shadows: Same hard-offset drop-shadow construction as Desktop's reason cards (not individually re-confirmed for mobile).
- Spacing: Card internal padding 30px (vs. Desktop's 40px).
- Images and required assets: Divider line asset within the card, matching Desktop's "Line 297" pattern.
- Reusable components: Same carousel-with-dots pattern as Section 02, reused here for the reason cards.
- Elements with unavailable metadata: Reason cards "02 — VISUAL UNIQUENESS" and "03 — CONSTRAINT AS ASSET" are not present in the mobile frame's metadata and were not visible in the static mobile screenshot (consistent with a single-slide carousel capture); their existence is inferred from the 3-dot pagination and Desktop's equivalent content but not directly visually confirmed in this mobile capture.

#### Section 04 — The Built / Designed To Move — Mobile
- Exact visible structure: Same dark-panel showcase pattern as Desktop, restacked vertically: overline "04 — THE BUILT" and heading "DESIGNED TO MOVE" (`266:2391`), body paragraph (`266:2390`), then a vertical sequence of site-screenshot mockups: "About Us" capture, "fund of funds" capture, a side-by-side pairing of a narrower site capture and a bordered/shadowed portfolio browser-frame mockup (with the same bottom-fade-mask treatment as Desktop's hero/showcase mockups), a further site capture, and the two-part news-insights capture group — separated by four thin horizontal divider lines (`266:2469`–`266:2472`) not present as distinct elements in the Desktop metadata.
- Position and alignment: Dark background panel (`266:2315` "Rectangle 79") at x=0, y=3968, 420 × 2546 px (vs. Desktop's 1920×4286 — proportionally shorter since content restacks vertically with less staggering). Heading block x=16, y=4068; paragraph x=16, y=4166. Mockups: "About Us" capture (`273:2877`) x=16, y=4404 (388×479); "fund of funds" (`273:2878`) x=16, y=4943 (388×237); narrow capture (`273:2879`) x=16, y=5240 (185×355) beside portfolio browser-frame group (`273:2880`) x=219, y=5389 (185×374.46); further capture (`273:2884`) x=16, y=5823 (388×202); news-insights group (`273:2885`) x=16, y=6085 (388×328.2). Divider lines at y=4760, 5054, 5108, 5312 (each 340px wide, x=40). Measured from the design.
- Width and height: See above per asset. Second dark panel (`266:2316` "Rectangle 82") at x=0, y=6141, 420×373. Measured from the design.
- Grid and container behavior: Vertical single-column stack with one side-by-side pairing (narrow capture + portfolio browser-frame, placed at the same y-range) — the only two-up moment in the otherwise single-column mobile layout.
- Typography: Overline — Mobile/Overline Mobile. Heading — Mobile/H3 Mobile family. Paragraph — Mobile/Body Mobile, color white on dark panel (same as Desktop pattern, not individually re-measured).
- Colors: Dark panel background consistent with Desktop's `#000826` (same "Rectangle 79" naming/reuse), not individually re-measured for the mobile node.
- Borders: Portfolio browser-frame mockup includes the same bottom-fade-mask rectangle as Desktop's equivalent groups.
- Radius: Mockup images are rounded-rectangle node types, consistent with Desktop.
- Shadows: Not individually re-measured for mobile; frame/component naming matches Desktop's shadowed mockup pattern.
- Spacing: Four horizontal divider lines spaced at approximately 294–304px intervals within the showcase sequence — a mobile-specific visual separator not identified in the Desktop metadata for this section.
- Images and required assets: `273:2877`, `273:2878`, `273:2879`, `273:2880`/`273:2881`/`273:2882`, `273:2884`, `273:2885`/`273:2886`/`273:2887` — mobile-scaled equivalents of the Desktop showcase captures.
- Reusable components: Same "site screenshot with optional fade-mask" component as Desktop, restacked for narrow viewport.
- Elements with unavailable metadata: The four divider lines' color/weight were not individually queried via `get_design_context` in this pass — visually confirmed in the live Figma canvas as thin horizontal rules; exact hex/stroke-weight unavailable through MCP in this pass.

#### Section 05 — The Development / One Platform, The Full Transaction — Mobile
- Exact visible structure: Overline "05 — THE DEVELOPEMNT" and heading "ONE PLATFORM, THE FULL TRANSACTION" (`266:2384`), paragraph (`266:2367`), then a dark card (`266:2394` "Frame 3341") containing the four feature cards (Marketplace, Transactions, Logistics, Backend) stacked **vertically in a single column** (vs. Desktop's 4-across row), followed by "BUILD WITH" and the five tech pills wrapped into a **2-column tag grid** (vs. Desktop's single horizontal row).
- Position and alignment: Overline/heading frame x=16, y=6614; paragraph frame x=16, y=6744; dark card x=16, y=6910. Feature-card stack (`266:2395`) x=40, y=40 relative (i.e., x=56, y=6950 absolute), each card 308px wide, stacked with y-offsets 0, 227, 454, 681.1 (i.e., ~227px row height including gap). Tech-pill block (`266:2420`) at x=40, y=928.1 relative; pill grid 2 columns × 3 rows (WordPress/Elementor row 1, WooCommerce/Google Ads row 2, WP RESI API row 3). Measured from the design.
- Width and height: Dark card 388 × 1178.1 px (vs. Desktop's 1280×385.1 — mobile is much taller/narrower due to vertical stacking). Each feature card 308 × 197–197.1 px. Tech pills: WordPress 121×40, Elementor 117×40, WooCommerce 155×40, Google Ads 124×40, WP RESI API 133×40. Measured from the design.
- Grid and container behavior: Single-column vertical stack for feature cards (vs. Desktop's horizontal row); 2-column wrap for tech pills (vs. Desktop's single row of 5).
- Typography: Feature titles — Montserrat Bold, mobile H4/H5-equivalent sizing (26px line-height noted vs. Desktop's 30px). Descriptions — Mobile/Body Mobile equivalent, same `rgba(226,226,226,0.7)` white-70% color pattern as Desktop (component reused, not individually re-measured for mobile).
- Colors: Dark card background consistent with Desktop's `#081440` (same "Frame 3341" naming/reuse). Tech pill background consistent with Desktop's `#dbe1fc`. Not individually re-measured for the mobile instance in this pass.
- Borders: None observed, consistent with Desktop.
- Radius: Tech pills fully rounded, consistent with Desktop's `rounded-[40px]`.
- Shadows: None observed.
- Spacing: 227px vertical gap between stacked feature cards (vs. Desktop's 30px horizontal gap in a single row); tech-pill grid uses a 46px offset from the "BUILD WITH" label, with pills wrapped at row heights of 0/62/124px.
- Images and required assets: Same four feature icons as Desktop, mobile-repositioned (`273:2890`, `273:2898`, `273:2921`, `273:2928`).
- Reusable components: Same feature-card and tech-pill components as Desktop, re-flowed from horizontal to vertical/wrapped layouts for the narrow viewport.
- Elements with unavailable metadata: None; fully retrievable via metadata.

#### Section 06 — The Result — Mobile
- Exact visible structure: Overline "06 — THE RESULT" and heading "RECOFNISED. LIVE. BOUNDLESS." (`266:2372` "Frame 3444"), followed by two body paragraphs (Awwwards nomination; closing statement) — same copy as Desktop, restacked to single column.
- Position and alignment: Heading frame x=16, y=8219; paragraph 1 (`266:2371`) x=16, y=8349; paragraph 2 (`273:2934`) x=16, y=8493. Measured from the design.
- Width and height: Heading frame 388 × 90 px (overline 388×16, heading 388×64); paragraph 1: 388×120; paragraph 2: 388×120. Measured from the design.
- Grid and container behavior: Single-column, left-aligned (vs. Desktop's centered layout) — a notable alignment difference from Desktop's centered "06 — The Result" block.
- Typography: Overline — Mobile/Overline Mobile. Heading — Mobile/H3 Mobile family. Paragraphs — Mobile/Body Mobile.
- Colors: Consistent with Desktop's shared `#000826` text token (not individually re-measured for this mobile instance).
- Borders/Radius/Shadows: None observed.
- Spacing: 130px gap between heading and paragraph 1; 144px gap between paragraph 1 and paragraph 2.
- Images and required assets: None.
- Reusable components: Same overline/heading/paragraph pattern as Desktop, left-aligned instead of centered.
- Elements with unavailable metadata: None; fully retrievable.

#### "Live at apeiron.vc" Link Badge — Mobile
- Exact visible structure: Identical pill-link construction to Desktop (dot icon + "Live at apeiron.vc" label + trailing icon).
- Position and alignment: x=72, y=8653 — roughly horizontally centered within the 420px mobile canvas (vs. Desktop's centered position within the 1920px canvas). Measured from the design.
- Width and height: 276 × 56 px — identical dimensions to the Desktop badge (not re-scaled for mobile). Measured from the design.
- Typography/Colors: Same as Desktop (`#d7defc` background, `#234cdc` text), same component reused (`266:2434` "Link").
- Borders/Radius/Shadows: Same pill construction as Desktop.
- Spacing: Same internal padding/gaps as Desktop (component reuse).
- Images and required assets: Same dot icon and trailing icon group, reused (`266:2435`, `266:2437`).
- Reusable components: Identical reused component to Desktop's `231:787`.
- Elements with unavailable metadata: None.

#### Apeiron Ventures Wordmark Watermark — Mobile
- Exact visible structure: Same giant typographic "APEIRON VENTURES" watermark as Desktop, reconstructed from 15 vector paths, positioned above the footer.
- Position and alignment: Group (`273:2951`) at x=16, y=8749, spanning nearly the full 388px content width. Measured from the design.
- Width and height: 387.9996 × 40.714 px — proportionally much smaller than Desktop's 1279.999×134.316 (scaled down for the narrow viewport, but is a full second word-wrap width band rather than a taller single line — the letterforms are individually narrower, e.g. 8.76–24.81px wide vs. Desktop's 28.9–81.9px). Measured from the design.
- Typography: Not a text node — vector-constructed, same as Desktop.
- Colors: Visually confirmed in the live Figma canvas as the same pale/near-white tone as Desktop; exact hex not resolvable in this pass.
- Borders/Radius/Shadows: None.
- Spacing: N/A.
- Images and required assets: 15 vector paths (`273:2952`–`273:2966`).
- Reusable components: Same decorative wordmark pattern as Desktop, rescaled.
- Elements with unavailable metadata: Exact fill color/opacity — visually confirmed in the live Figma canvas; not resolvable through MCP in this pass.

#### Previous Work / Next Work Navigation — Mobile
- Exact visible structure: Same "Previous work" / "Next work" pagination links as Desktop, restacked closer together horizontally to fit the narrow viewport.
- Position and alignment: "Previous work" (`266:2443`) at x=16, y=8798.91; "Next work" (`266:2446`) at x=310, y=8798.91 — both at the same y, near the top and bottom of the 420px content width. Measured from the design.
- Width and height: "Previous work" block 122.43 × 24 px; "Next work" block 94.43 × 24 px (smaller than Desktop's 173.43/134.43, consistent with the mobile Overline/Body-Small type scale).
- Typography/Colors: Same construction as Desktop, not individually re-measured for mobile in this pass.
- Borders/Radius/Shadows: None.
- Spacing: Arrow-to-label gap ≈8px (19.43−11.43).
- Images and required assets: Two "Polygon 1" arrow icons, mobile-scaled.
- Reusable components: Same pagination component as Desktop.
- Elements with unavailable metadata: Text color — visually confirmed in the live Figma canvas; not individually re-measured through MCP in this pass.

#### Global Site Footer (with EUROCERT Certification Badge) — Mobile
- Exact visible structure: Same flat raster footer image approach as Desktop (`266:2442` "image 80"), containing the "PIXELOCRACY" wordmark, tagline, footer nav column, LinkedIn icon, wavy divider, copyright line, and scroll-to-top button, baked into a single image. No EUROCERT badge overlay group was found in the mobile frame's metadata (unlike Desktop's separate `231:820` group) — its presence/absence at this breakpoint could not be confirmed since it was not visible as a distinct node and the mobile screenshot's footer region was not captured at sufficient resolution in this pass to visually confirm or rule it out.
- Position and alignment: Footer image at x=0, y=8973. Measured from the design.
- Width and height: 420 × 574 px (vs. Desktop's 1917.62×787 — proportionally shorter, consistent with mobile footer content reflow). Measured from the design.
- Grid and container behavior: Same flattened-image approach as Desktop; no live layout nodes for the footer content itself.
- Typography/Colors/Borders/Radius/Shadows/Spacing: Same as Desktop's footer image construction — not individually re-measurable since content is a flattened raster asset.
- Images and required assets: `266:2442` "image 80" (mobile-specific footer raster asset, distinct from Desktop's `231:819`).
- Reusable components: Same global-footer pattern as Desktop, mobile-specific asset variant.
- Elements with unavailable metadata: All footer text/icon content — visually confirmed in the live Figma canvas via the mobile overview screenshot (wordmark, tagline, nav links, and social/copyright elements are visible in the same relative arrangement as Desktop) but not individually resolvable to nodes through MCP, same limitation as Desktop. The EUROCERT badge's presence on mobile is not confirmed either way — it was not found as a separate node in the mobile metadata walk, and this absence in the metadata should not be read as evidence the badge does not appear on the live mobile page.
## Mini Landing / Agency

### Desktop

#### Top Navigation
- Exact visible structure: Full-width bar containing "PIXELOCRACY" wordmark logo (blue) on the left, a center-left nav group — Home, Services (with a dropdown chevron), Work, About, Insights — and a "Contact" link on the far right.
- Position and alignment: Fixed-style bar at the very top of the frame, spanning the full canvas width, contents vertically centered.
- Width and height: Measured from the design. Bar 1920×75 px (node `231:1061`, "Group 1647"). Internal element "Frame 2" (the nav-link cluster) is 445.96×18.36 px positioned at x=596, y=27.
- Grid and container behavior: Logo sits at the left edge, nav links cluster horizontally centered-left, "Contact" pinned to the right edge — a standard three-zone header layout.
- Typography: Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP (the entire bar is a flattened raster image, so no per-item font/size data can be read).
- Colors: Logo renders in the site's primary blue; nav item labels render in dark navy/black. Exact hex values not retrievable (see below).
- Borders: None visible.
- Radius: None visible.
- Shadows: None visible.
- Spacing: Not measurable per item since the bar is a single flattened image.
- Images and required assets: The bar is composed of one raster image asset (node `231:1062`, "image 4", 1920×75) with a single small vector/text element ("Frame 2" / "Vector" `248:389`/`248:390`) layered on top, positioned at x=596, y=27, 445.96×18.36 px — this vector likely corresponds to the visible nav-link row or the "Contact" text.
- Reusable components: Visually confirmed in the live Figma canvas. This nav bar matches the structure of a global site header (logo + primary nav + Services dropdown + Contact) and is expected to be the same reusable header used across other pages of the site.
- Elements with unavailable metadata: The individual nav items ("Home," "Services" plus its dropdown chevron, "Work," "About," "Insights," "Contact") and the logo mark itself have no individually addressable node metadata — the whole bar is flattened into a single raster image (`231:1062`). Visually confirmed in the live Figma canvas only.

#### Hero
- Exact visible structure: Centered pill badge reading "For agencies & creative studios," a two-line H1 headline "Built to work with and behind great agencies.", a supporting paragraph, and a plain-text link "See how it works" below.
- Position and alignment: Centered column, node `231:1071` ("Container"), vertical stack with `gap: 32px`, all children horizontally centered.
- Width and height: Measured from the design. Container 714×324 px at x=603, y=155 (centered on the 1920 px canvas — 603 px margin on each side). Badge 279×36 px. Headline text box 747×96 px. Body paragraph 714×72 px. Link 122×24 px.
- Grid and container behavior: Fixed-width centered block; text wraps within the 714/747 px measured box.
- Typography: Badge text — From Figma style: Desktop/Body Small (Montserrat Regular, 16 px, line-height 24). Headline — From Figma style: Desktop/H1 (Sharp Grotesk Medium 25, 48 px, weight 500, line-height 48), center-aligned. Body paragraph — From Figma style: Desktop/Body (Montserrat Regular, 18 px, line-height 24), center-aligned. Link "See how it works" — From Figma style: Desktop/CTA (Mabry Pro Regular, 16 px, line-height 24).
- Colors: Measured from the design. Badge background `#d7defc`; badge text `#234cdc`; headline text `#000826`; body paragraph text `#444655`; link text `#1b1b1b`.
- Borders: None.
- Radius: Measured from the design. Badge radius `9999px` (full pill), padding `16px` horizontal / `6px` vertical.
- Shadows: None.
- Spacing: Measured from the design. 32 px vertical gap between badge, headline, paragraph, and link (node `231:1071` flex column, `gap: 32px`).
- Images and required assets: None (text-only section, badge and link have no icon).
- Reusable components: The pill badge (rounded-full, light-blue bg, blue text) matches the "Overlay+Border+OverlayBlur"-style pill pattern used elsewhere on the page (e.g., the "Most common" tag in the "How we show up" section), indicating a shared badge/pill component.
- Elements with unavailable metadata: None for this section — full node metadata and styles were retrievable.

#### Hero Image Banner
- Exact visible structure: A wide photographic/graphic banner depicting a dark, glowing circuit-board / network-node texture (white lines and light points on black), with a white wavy mask cutting across the bottom edge to blend into the page background below.
- Position and alignment: Centered, full content-width block. Node "Group 1650" `231:1158`.
- Width and height: Measured from the design. 1280×420 px at x=320, y=559 (rounded-rectangle `231:1159` "expertise_img 1"); an accompanying "Vector" `231:1160` (the wavy bottom mask) measures 1280×100 at x=320, y=879.
- Grid and container behavior: Sits within the same 1280 px content column used across the page (320 px side margins on the 1920 px canvas).
- Typography: None (image only).
- Colors: Predominantly black/near-black with white/light-gray line and glow detailing. Exact hex values not retrievable — image fill.
- Borders: None visible.
- Radius: Rounded-rectangle container per node type ("rounded-rectangle" `231:1159"), exact corner radius value not confirmed via metadata for this instance.
- Shadows: None visible.
- Spacing: Directly follows the hero text block above it with no additional named spacer node between them in the metadata.
- Images and required assets: One raster image asset fills the rounded-rectangle "expertise_img 1"; the bottom wave is a separate vector mask/shape ("Vector" `231:1160`).
- Reusable components: None identified as shared elsewhere on this page.
- Elements with unavailable metadata: The exact photographic asset source and its fill properties are not exposed through `get_metadata`; confirmed only visually via screenshot.

#### The Problem Section
- Exact visible structure: Small blue uppercase eyebrow "THE SITUATION," H3 heading "The problem every agency knows," and two paragraphs of body copy beneath it, left-aligned within the content column.
- Position and alignment: Left-aligned, starting at x=320 (same 1280 px content column as the rest of the page).
- Width and height: Measured from the design. Eyebrow text `231:1082` 149×20 px at y=1059. Heading `231:1081` 705×32 px at y=1085. First paragraph `231:1079` 638×72 px at y=1157. Second paragraph `231:1080` 638×48 px at y=1253.
- Grid and container behavior: Text column constrained to 638–705 px within the 1280 px content grid, left half of the section.
- Typography: Eyebrow — From Figma style: Desktop/Overline (Sharp Grotesk Medium 25, 15 px, line-height 20, uppercase). Heading — visual size/line-height (32/32) matches Desktop/H3 (Sharp Grotesk Medium 25, 32 px, weight 500, line-height 32); confirmed by measured box height matching the style's line-height exactly. Body paragraphs — visual size/line-height (measured box heights of 72 px = 3 lines and 48 px = 2 lines at 24 px line-height) match Desktop/Body (Montserrat Regular, 18 px, line-height 24).
- Colors: Measured from the design. Eyebrow text `#4467f6` (confirmed directly on this node). Heading and body colors visually consistent with the `#000826` (heading) / `#444655` (body) values confirmed elsewhere on this page but not individually re-queried for this specific instance.
- Borders: None.
- Radius: N/A (text only).
- Shadows: None.
- Spacing: Eyebrow to heading gap ≈26 px; heading to first paragraph gap ≈72 px (measured from y-coordinates in the metadata); paragraph-to-paragraph gap ≈48 px.
- Images and required assets: None.
- Reusable components: This eyebrow + H3 + body pattern (small blue overline label, bold headline, supporting paragraph) recurs identically for "How it works," "How we show up," "What we've built," and "Recognition" sections further down the page — a clear reusable "section header" component.
- Elements with unavailable metadata: None — all text nodes were retrievable.

#### Comparison Cards ("Without a Reliable Partner" / "With Pixelocracy")
- Exact visible structure: Two side-by-side cards. Left card: white background, heading "WITHOUT A RELIABLE PARTNER," five bulleted pain-point lines, each with a small round bullet dot. Right card: solid blue background, heading "WITH PIXELOCRACY," five bulleted benefit lines with round bullet dots.
- Position and alignment: Two-column row, left card at x=415, right card at x=976, both at y=1379, sitting side by side with a visible gap between them.
- Width and height: Measured from the design. Both cards 531×284 px (nodes `231:1083` and `231:1102`).
- Grid and container behavior: Equal-width two-column layout within the 1280 px content grid; each card's internal list wraps at ~446–451 px width.
- Typography: Card headings — Montserrat Bold, 20 px, line-height 24 (From Figma style: matches Desktop/H5 size but rendered bold). Bullet item text — From Figma style: Desktop/Body (Montserrat Regular, 18 px, line-height 24).
- Colors: Measured from the design. Left card: background white, heading and body text `#000826`/black. Right card: background `#4467f6`, heading and body text white. Bullet dot color visually matches each card's text color (dark on the white card, white on the blue card); exact fill hex for the ellipse markers not individually confirmed through metadata.
- Borders: None (card edges are defined by drop-shadow, not a stroke).
- Radius: None visible (square corners).
- Shadows: Measured from the design. Left card: drop-shadow `6px 6px 0px #4467f6` (hard-edged offset shadow, no blur). Right card: drop-shadow `6px 6px 0px #ccc`.
- Spacing: Measured from the design. Card padding `40px`; vertical gap between heading and list `20px`; gap between bullet rows `10px`; gap between bullet dot and its text `12px`.
- Images and required assets: Bullet markers are small 8×8 px ellipse vector assets (`imgEllipse1`), one per list row.
- Reusable components: Both cards use the same underlying component, named "Overlay+Border+OverlayBlur" in the Figma layer tree — this same component name recurs for the "How we show up" cards and the "Most common" tag pill, indicating a shared card/pill component used across this page.
- Elements with unavailable metadata: None — full structure and styling were retrievable for both cards.

#### Three Things That Make It Work
- Exact visible structure: Eyebrow "HOW IT WORKS," H3 heading "Three things that make it work," supporting paragraph, then three stacked rows each pairing a left-side line-art icon with a right-side heading, description, and small italic footnote, separated by thin horizontal divider lines. Icons observed: a flowing/hourglass-style line icon ("Fast response on scoping"), a calendar-with-arrow icon ("Next-day delivery when it counts"), and an envelope/paper-plane icon ("Direct client contact if needed").
- Position and alignment: Centered content block, heading/eyebrow centered; the three-row list (node `231:1128`, "Frame 3400") left-aligned within its own 920 px-wide container, itself centered on the page.
- Width and height: Measured from the design. Eyebrow `231:1127` 147×20 at y=1843. Heading `231:1126` 642×32 at y=1873. Paragraph `231:1125` 600×72 at y=1945. List container `231:1128` 920×608.85 at x=501, y=2075. Each row block is 920 px wide; row 1 height 134 px, divider, row 2 height ~140.85 px, divider, row 3 height 134 px.
- Grid and container behavior: Icon column fixed at ~150–180 px wide on alternating sides (icon left for rows 1 and 3, icon right for row 2), text column ~700 px wide.
- Typography: Row headings — size/line-height (30/30 for two rows measured at height 30) match Desktop/H4 pattern (Montserrat, 24 px, line-height 30). Row body copy — matches Desktop/Body (18 px/24). Footnote lines — smaller italic caption text (e.g., "Typically within a few hours," "* For current agency partners in critical situations") visually confirmed in the live Figma canvas as italicized, styled smaller/lighter than body copy; exact bound style name unavailable through MCP.
- Colors: Row headings dark navy, body copy dark gray/navy, footnotes appear in a muted dark tone — consistent with the `#000826`/`#444655` palette used elsewhere but not individually re-confirmed for this section's text nodes. Icons render as blue line-art matching the site's primary blue.
- Borders: None on the rows themselves; thin 1 px horizontal divider lines separate the three rows (nodes "Line 1" `231:1143`, "Line 2" `231:1151`).
- Radius: N/A.
- Shadows: None.
- Spacing: Divider-to-divider vertical rhythm ≈240–250 px per row.
- Images and required assets: Three custom line-art icon illustrations (hourglass/flow icon, calendar-with-arrow icon, envelope/paper-plane icon), each a vector group.
- Reusable components: The eyebrow + H3 + paragraph header repeats the same pattern used in "The Problem" section above.
- Elements with unavailable metadata: The three icon illustrations themselves ("Group" `231:1130`, "Layer 4" `231:1149`, "Vector" `231:1153`) resolve only to bounding boxes in metadata with no fill/stroke color data — visually confirmed in the live Figma canvas as blue outline icons; exact hex and icon vector detail unavailable through MCP. The italic footnote text style name is likewise unavailable through MCP.

#### We Work the Way You Need Us To
- Exact visible structure: Left column with eyebrow "HOW WE SHOW UP," H3 heading "We work the way you need us to," and two supporting paragraphs. Right column stacks three cards: "White label" (with icon and a "Most common" tag pill), "Co-branded" (with icon), and "Hybrid" (with icon), each with a one-paragraph description.
- Position and alignment: Two-column layout; text column left-aligned at x=320, card column right-aligned starting at x=1031.
- Width and height: Measured from the design. Eyebrow `231:1164` 176×20 at y=3030. Heading `231:1163` 371×64 at y=3060. Paragraphs `231:1161` 600×72 at y=3164 and `231:1162` 600×48 at y=3260. Cards: "White label" `231:1165` 569×192 at y=3030; "Co-branded" `231:1175` 569×180 at y=3248; "Hybrid" `231:1185` 569×180 at y=3464.
- Grid and container behavior: Cards are full-width within their 569 px column, stacked vertically with consistent gaps.
- Typography: Card titles — From Figma style: Desktop/H5-sized but bold (Montserrat Bold, 20 px, line-height 24), confirmed via design context on the "White label" card. "Most common" tag text — Montserrat Regular, 16 px. Card body copy — From Figma style: Desktop/Body Small (Montserrat Regular, 16 px, line-height 24).
- Colors: Measured from the design (confirmed on "White label" card, node `231:1165`). Card background `#f1f4ff`; title text `#000826`; body text `#000826`; "Most common" tag background `#d3dbff`, tag text `#4467f6`.
- Borders: None visible (cards are flat fills, no stroke).
- Radius: Tag pill radius `40px` (rounded-full). Card corner radius not explicitly confirmed but renders as a soft rounded rectangle in the screenshot.
- Shadows: None visible on these cards.
- Spacing: Measured from the design. Card internal padding `32px`; gap between icon/title row and description `20px`; gap between icon and title `12px`.
- Images and required assets: Each card has a small icon: a document/label icon for "White label," a two-tone badge icon for "Co-branded," and a grid/mixed icon for "Hybrid" — all vector groups.
- Reusable components: Uses the same "Overlay+Border+OverlayBlur" component pattern as the comparison cards above, confirming a shared card component with variant fills (white-shadow, blue-shadow, and light-lavender-flat versions).
- Elements with unavailable metadata: The three card icons (`Group 1651`, `Group 1652`, `Group 1653`) resolve only to bounding boxes with no color/vector detail in metadata. The "Co-branded" and "Hybrid" cards' icon fill colors are unavailable through MCP; visually confirmed as blue line icons in the live Figma canvas.

#### Work That Earned the Brief Again (Portfolio)
- Exact visible structure: Full-bleed dark navy section preceded by a light-to-dark wave transition. Contains eyebrow "WHAT WE'VE BUILT," H3 heading "Work that earned the brief again," a supporting paragraph, and a three-column card grid separated by thin vertical divider lines: "Vodafone / Oceanus Lab — Environmental awareness platform," "Apeiron Ventures — Award-winning digital presence," and "Technical Chamber of Greece — 100-year anniversary platform," each with a short description.
- Position and alignment: Full-width dark background block; text and cards centered within the standard 1280 px content column (x=320–1600 for the heading block, x=320–1600 for the card grid).
- Width and height: Measured from the design. Section background rounded-rectangle "Rectangle 3357" `231:1205` 1800×764 at x=60, y=3962. Wave transition vector `231:1207` 1800×144 at x=1860, y=3818 (rotated/positioned as a top border wave). Heading block "Group 1639" `231:1208` 683×174 at x=620, y=4012. Card grid "Group 1641" `231:1212` 1280×332 at x=320, y=4244; card background `231:1213` 1280×332.
- Grid and container behavior: Three-column grid, columns separated by vertical divider lines ("Line 305" at x=750, "Line 306" at x=1170), each column ≈372 px wide with card content starting at x=354/774/1194.
- Typography: Measured from the design. Project label (e.g., "Vodafone / Oceanus Lab") — Montserrat Regular, 16 px, line-height 24 (Desktop/Body Small). Project title (e.g., "Environmental awareness platform") — Montserrat Bold, 24 px, line-height 30 (Desktop/H4, bold). Card description — Montserrat Regular, 18 px, line-height 24 (Desktop/Body).
- Colors: Measured from the design. Section/card background `#061868`. Project label text `#5e7eff`. Project title and description text white.
- Borders: None on cards; thin vertical divider lines between the three columns.
- Radius: Section background is a rounded-rectangle node (radius value not individually confirmed).
- Shadows: None visible.
- Spacing: Measured from the design. Gap between label and title `10px`; gap between title block and description `30px` (per Group 1639 layout structure).
- Images and required assets: None — text-only cards on a solid color background; the top edge uses a decorative wave vector asset.
- Reusable components: This three-column, divider-separated project-summary card is a distinct component likely reused on a dedicated "Work" portfolio page elsewhere in the site.
- Elements with unavailable metadata: The exact corner radius of the section background and the precise geometry/fill of the top wave vector (`231:1207`) are not resolvable beyond bounding box and node type through `get_metadata`.

#### The Quality Your Clients Will Notice (Recognition Intro)
- Exact visible structure: Eyebrow "RECOGNITION," H3 heading "The quality your clients will notice," and a single supporting paragraph, centered.
- Position and alignment: Centered text block on a white background.
- Width and height: Measured from the design. Eyebrow `231:1238` 181×20 at y=4876. Heading `231:1237` 706×32 at y=4906. Paragraph `231:1236` 638×72 at y=4978.
- Grid and container behavior: Same centered single-column pattern as other section headers on the page.
- Typography: Eyebrow — Desktop/Overline pattern (visually confirmed uppercase blue small-caps, consistent with the confirmed `231:1082` instance). Heading — Desktop/H3 pattern (32/32). Paragraph — Desktop/Body pattern (18/24).
- Colors: Visually consistent with the `#4467f6` eyebrow / `#000826` heading / `#444655` body palette confirmed elsewhere on the page; not individually re-queried for this instance's specific nodes.
- Borders: None.
- Radius: N/A.
- Shadows: None.
- Spacing: Standard eyebrow-heading-paragraph rhythm matching other header blocks on the page.
- Images and required assets: None.
- Reusable components: Same reusable section-header pattern used four other times on this page.
- Elements with unavailable metadata: None — text nodes retrievable.

#### Awards Row
- Exact visible structure: A light-lavender full-width band containing three award callouts separated by thin vertical divider lines: a ribbon/medal icon paired with a bold title and a description line for "Awwwards," "CSS Design Awards," and "The Lovie Awards."
- Position and alignment: Full-width band, three items evenly distributed with generous horizontal padding, vertically centered.
- Width and height: Measured from the design. Band "Frame 3401" `231:1239` 1920×192 at y=5136. Each item block ("Frame 3407/3408/3409") 370×80. Icon 30×47.14 px each. Divider lines ("Line 311," "Line 310") 183 px tall, rotated 90°.
- Grid and container behavior: Three equal-width item slots (370 px each) with a `justify-between` style distribution and 320 px horizontal inset from the frame edges (confirmed via design context: `px-[320px]`).
- Typography: Measured from the design. Award name — Montserrat Bold, 20 px, line-height 24 (Desktop/H5, bold). Description — Montserrat Regular, 16 px, line-height 24 (Desktop/Body Small).
- Colors: Measured from the design. Band background `#eaedff`. Text color `#000826` for both name and description.
- Borders: None; thin vertical divider lines between the three items.
- Radius: N/A.
- Shadows: None.
- Spacing: Measured from the design. Gap between icon and text `30px`; gap between award name and description `8px`.
- Images and required assets: Three identical ribbon/medal outline icon assets (one per award).
- Reusable components: The icon + title + description pattern with vertical dividers mirrors the portfolio card layout above it, suggesting a shared "feature row" component used for both awards and case-study summaries.
- Elements with unavailable metadata: The ribbon icon's exact stroke color/fill is not individually confirmed via metadata; visually confirmed in the live Figma canvas as a blue outline ribbon icon consistent with the site's primary blue.

#### Final CTA — "Have a Brief That Needs a Reliable Pair of Hands?"
- Exact visible structure: Left-aligned two-line heading "Have a brief that needs a reliable pair of hands?" with a supporting paragraph below it; to the right, a solid blue button "Send us the brief," a text link "Or book a 20-min call →" beneath it, and a small note "NDA available before the first conversation" above/near the button.
- Position and alignment: Two-zone layout — text block left at x=320, button/link/note cluster right at x=1260–1595.
- Width and height: Measured from the design. Heading `231:1232` 639×96 at y=5474. Paragraph `231:1231` 655×90 at y=5600. Button "Link" `231:1233` 233×64 at x=1362, y=5522. Call-link text `231:1235` 171×24 at x=1429, y=5616. NDA note `231:1206` 347×24 at x=1260, y=5660.
- Grid and container behavior: No wrapping section container was surfaced by metadata — all elements are loose top-level nodes positioned within the standard 1280 px content grid, on what renders as a plain white background.
- Typography: Measured from the design. Heading size/line-height (96 px box ÷ 2 lines = 48 px line-height) matches Desktop/H2 (Montserrat Bold, 40 px, line-height 48). Paragraph matches Desktop/Body (18 px/24, wrapping to ~4 lines within a 90 px box). Button label — Montserrat Regular, 18 px, line-height 24 (confirmed via design context). Call-link and NDA note — visually smaller supporting text; exact bound style not individually confirmed.
- Colors: Measured from the design. Button background `#4467f6`, button text white. Heading/paragraph colors visually consistent with `#000826`/`#444655` used elsewhere, not individually re-confirmed for these specific nodes.
- Borders: None.
- Radius: None visible on the button (square corners in the render).
- Shadows: None visible.
- Spacing: Measured from the design. Button internal padding `40px` horizontal / `20px` vertical.
- Images and required assets: None (arrow in "Or book a 20-min call →" is likely part of the text glyph itself, per the visible "→" character).
- Reusable components: The "Send us the brief" button (`Link` node) is a flat solid-blue rectangular button with white text — a primary CTA button pattern likely reused as the site's standard primary button component elsewhere.
- Elements with unavailable metadata: No wrapping container/frame node groups these CTA elements together in metadata — each text/button node is a loose top-level sibling; the visual section grouping is confirmed only through the screenshot.

#### Footer
- Exact visible structure: Full-width dark navy band. Left side: "PIXELOCRACY" wordmark logo (blue) and tagline "We transform the industries of the present, with the technologies of the future." Center: a vertical link list — "Expertise," "Work," "About," "Cookie Policy," "Privacy Policy" — followed by a LinkedIn icon. Right side: an EUROCERT certification badge with the text "Certified Information Security Management System EN ISO/IEC 27001:2023 Certified by EUROCERT." Below the link list, a thin wavy horizontal divider line spans the width. Bottom-left: "Pixelocracy © 2026, All rights reserved." Bottom-right: a circular blue scroll-to-top button with an upward chevron, and a small dark rounded rectangle at the extreme bottom-right corner (partially cropped in the frame).
- Position and alignment: Full-width block at the very bottom of the page.
- Width and height: Measured from the design. Group "Group 1654" `231:1200` 1920×813 at y=5863. Background image `231:1201` 1920×813. Eurocert logo mark `231:1203` 60×60 at x=1318, y=5994. Eurocert certification text vector `248:398` 367.4×56.53 at x=1394.72, y=5997.64.
- Grid and container behavior: Three-zone horizontal layout (logo/tagline, link list, certification badge) within the dark band; content baked into a single raster image except for the certification text vector.
- Typography: Visually confirmed in the live Figma canvas: bold sans-serif for the link list and copyright, regular weight for the tagline, blue bold wordmark for the logo. Exact font family/size/line-height not retrievable — this content is part of a flattened screenshot image, not live Figma text.
- Colors: Logo renders in the site's primary blue; tagline, link list, and copyright render in dark navy; certification badge uses navy/red/white brand colors of the EUROCERT mark; scroll-to-top button is filled with the site's primary blue with a white chevron. Exact hex values not retrievable for any of this content beyond the general blue seen consistently elsewhere on the page (`#4467f6`).
- Borders: None visible.
- Radius: Scroll-to-top button appears fully circular.
- Shadows: None visible.
- Spacing: Not measurable — content is a flattened raster image.
- Images and required assets: The entire footer content (logo, tagline, nav links, LinkedIn icon, wavy divider, copyright text, scroll-to-top button) is baked into a single raster image asset named "screencapture-thepixelocracy-2026-06-24-10_53_28 3" (node `231:1201`), overlaid only by a separate EUROCERT certification logo image (`231:1203`) and its accompanying certification text vector (`248:398`).
- Reusable components: Visually confirmed in the live Figma canvas. This footer's structure (logo + tagline, link column, social icon, certification badge, copyright, scroll-to-top control) matches a standard global site footer and is expected to be the same footer reused across other pages of the site.
- Elements with unavailable metadata: The entire footer's textual and iconographic content (logo, tagline, "Expertise/Work/About/Cookie Policy/Privacy Policy" links, LinkedIn icon, wavy divider, copyright line, scroll-to-top button, and the small dark widget box at the bottom-right corner) has no individual node metadata — it is a single flattened screenshot image. Visually confirmed in the live Figma canvas only.

### Mobile

#### Top Navigation — Mobile
- Position and alignment: Logo left, hamburger-style menu icon right, both near the top of the frame.
- Width and height: Measured from the design. Logo "pix-logo-800 2" `345:304` 160×17 px at x=16, y=21. Menu icon group "Group 1672" `345:305` 28.5×11.5 px at x=376, y=23.5.
- Grid and container behavior: Same left-logo / right-control pattern as Desktop, collapsed to a single icon instead of a full text nav list.
- Typography, Colors, Borders, Radius, Shadows, Spacing: Not individually retrievable — differs from Desktop's raster nav bar in that the mobile version uses a discrete logo image node plus a separate small icon group rather than one full-width flattened image, but neither node exposes color/style metadata beyond bounding boxes.
- Images and required assets: Logo image asset (160×17). Menu icon rendered as a small vector group, visually a compact hamburger/menu glyph rather than Desktop's spelled-out link list.
- Reusable components: Same header component family as Desktop, collapsed to the mobile/responsive variant (logo + hamburger icon, no visible inline links).
- Elements with unavailable metadata: The menu icon's internal vector strokes and any dropdown/menu-open state are unavailable through MCP; visually confirmed only as a small closed icon in the static render.

#### Hero — Mobile
- Exact visible structure: Same badge, heading, paragraph, and "See how it works" link as Desktop, stacked full-width instead of in a fixed-width centered block.
- Position and alignment: Left-aligned container spanning the standard mobile content width, badge centered above the heading.
- Width and height: Measured from the design. Container `345:364` 389×390 at x=16, y=120. Badge background `345:365` 248×36 at x=70.5 (centered within the 389 px container). Heading text box 389×114 (taller than Desktop's 96 px due to text reflow at the narrower width). Paragraph 389×120 (vs. Desktop's 714×72 — more lines at mobile width). Link 122×24, horizontally centered at x=133.5.
- Grid and container behavior: Full-bleed 389 px column within the 420 px frame (16 px side margins), replacing Desktop's fixed 714 px centered block.
- Typography: Same style names as Desktop (Desktop/Body Small badge, Desktop/H1 heading, Desktop/Body paragraph, Desktop/CTA link) — text reflows to more lines at the narrower width, increasing box heights (114 px vs. 96 px for the heading; 120 px vs. 72 px for the paragraph).
- Colors: Same as Desktop (badge `#d7defc`/`#234cdc`, heading `#000826`, body `#444655`) — visually consistent, not re-confirmed per node for mobile.
- Borders, Radius, Shadows: Same as Desktop (pill radius on badge, no shadows).
- Spacing: Comparable relative spacing to Desktop, compressed vertically to fit the narrower column.
- Images and required assets: None.
- Reusable components: Same component as Desktop hero, in its mobile/responsive layout state.
- Elements with unavailable metadata: None additional beyond Desktop.

#### Hero Image Banner — Mobile
- Position and alignment: Same circuit-texture image with wavy bottom mask, full-width within the mobile content column.
- Width and height: Measured from the design. "Group 1650" `345:372` 388×191.48 at x=16, y=580.75 (image 388×190.49, wave vector 388×30.31) — a shorter aspect ratio than Desktop's 1280×420 (mobile crops to a shallower band relative to width).
- Other fields: Same visual treatment as Desktop, differing only in the compressed height/width ratio; no additional metadata retrievable.
- Elements with unavailable metadata: Same limitation as Desktop — image fill and wave vector properties not resolvable beyond bounding box.

#### The Problem Section — Mobile
- Position and alignment: Same eyebrow/heading/paragraph pattern, left-aligned, full mobile content width (388 px) instead of Desktop's 638–705 px within a wider canvas.
- Width and height: Measured from the design. Eyebrow `345:378` 139×16 at y=872 (smaller than Desktop's 149×20, consistent with a tighter mobile Overline size or scale). Heading `345:377` 388×64 at y=894 (taller box than Desktop's 705×32 — heading wraps to more lines at mobile width). Paragraph 1 `345:375` 388×120 at y=998. Paragraph 2 `345:376` 388×48 at y=1142.
- Other fields: Same styling intent as Desktop; type reflows to the 388 px column causing taller text boxes.
- Elements with unavailable metadata: None beyond the general limitation already noted for eyebrow color reuse.

#### Comparison Cards — Mobile (Carousel)
- Exact visible structure: Only the "WITHOUT A RELIABLE PARTNER" card is present as a full node in the mobile metadata, with the same five bulleted pain points. Below it sits a 2-dot pagination indicator.
- Position and alignment: Single full-width card, centered, with a 2-dot carousel indicator centered beneath it.
- Width and height: Measured from the design. Card "Overlay+Border+OverlayBlur" `347:2` 388×408 at x=16, y=1260 (taller than Desktop's 531×284 due to full-width text wrapping). Dot indicator "Frame 3449" `347:21` 30×10 at x=195, y=1688, containing two 10×10 ellipses.
- Grid and container behavior: This differs from Desktop, where both comparison cards ("Without" and "With Pixelocracy") display side by side simultaneously. On Mobile, only one card is retrievable via metadata and a 2-dot pagination control is visually present beneath it, indicating the two cards are presented as swipeable carousel slides rather than a fixed two-column row.
- Typography and Colors: Same as the Desktop "Without a Reliable Partner" card (white background, `#000826` heading, bullet list in Desktop/Body).
- Spacing: Padding and gaps visually consistent with Desktop's card, scaled to the taller 408 px box (five bullet rows now wrap to two lines each at 48 px row height instead of Desktop's single-line 24 px rows).
- Images and required assets: Same 8×8 px ellipse bullet markers as Desktop.
- Reusable components: Same "Overlay+Border+OverlayBlur" card component as Desktop, in a swipeable single-slide-at-a-time mobile presentation.
- Elements with unavailable metadata: The "WITH PIXELOCRACY" card content for Mobile is not surfaced anywhere in `get_metadata` output despite the 2-dot indicator implying a second slide exists. Visually confirmed in the live Figma canvas only as an inferred second carousel slide (not directly visible in the static render, since the canvas shows the first slide only); its exact layout and copy could not be confirmed through MCP for the mobile frame.

#### Three Things That Make It Work — Mobile
- Exact visible structure: Same eyebrow, heading, paragraph, and three icon+heading+description+footnote rows as Desktop, stacked full-width with icons above their corresponding text instead of beside it.
- Position and alignment: Full-width single column; icons appear above-left of each row's heading (row 1 and row 3) or above-right (row 2), based on measured x-offsets, rather than Desktop's side-by-side icon/text arrangement.
- Width and height: Measured from the design. List container "Frame 3400" `347:48` 388×857.3 at x=16, y=2066 (taller than Desktop's 920×608.85, since text and icons stack vertically instead of sitting side by side). Row 1 "Frame 3397" 388×236.5. Row 2 "Frame 3398" 388×239.12. Row 3 "Frame 3399" 388×261.68.
- Grid and container behavior: Icon groups ("Group" `347:50`, "Layer 4" `347:68`, "Vector" `347:72`) sit above their text blocks in a vertical stack rather than Desktop's horizontal icon-beside-text layout.
- Typography and Colors: Same style/color intent as Desktop, text reflows to more lines at 388 px width (e.g., row headings now measured at 26 px line-height boxes vs. Desktop's 30 px, description boxes taller).
- Spacing: Comparable divider-line pattern between rows ("Line 1" `347:62`, "Line 2" `347:70`).
- Images and required assets: Same three icon illustrations as Desktop, repositioned above the text.
- Reusable components: Same component as Desktop, mobile/vertical-stack variant.
- Elements with unavailable metadata: Same icon color/fill limitation as Desktop.

#### We Work the Way You Need Us To — Mobile (Carousel)
- Exact visible structure: Eyebrow, heading, and two paragraphs identical in content to Desktop, followed by a single "White label" card (with icon and "Most common" tag) and a 3-dot pagination indicator beneath it.
- Position and alignment: Full-width single column; card centered with 3-dot indicator centered beneath.
- Width and height: Measured from the design. Card "Overlay+Border+OverlayBlur" `347:82` 387×200 at x=16, y=3536. Dot indicator "Frame 3449" `347:92` 50×10 at x=185, y=3756, containing three 10×10 ellipses.
- Grid and container behavior: This differs from Desktop, where "White label," "Co-branded," and "Hybrid" all display simultaneously as three stacked cards in a right-hand column. On Mobile, only the "White label" card is retrievable via metadata, with a 3-dot pagination control beneath it — indicating "White label," "Co-branded," and "Hybrid" are presented as three swipeable carousel slides on mobile, one at a time.
- Typography and Colors: Same as Desktop's "White label" card (background `#f1f4ff`, title `#000826`, "Most common" tag background `#d3dbff`/text `#4467f6`).
- Spacing: Card padding `24px` (measured, slightly tighter than Desktop's `32px`).
- Images and required assets: Same icon and tag pill as Desktop's White label card.
- Reusable components: Same "Overlay+Border+OverlayBlur" component as Desktop, mobile carousel variant.
- Elements with unavailable metadata: The "Co-branded" and "Hybrid" card content for Mobile is not surfaced in `get_metadata` despite the 3-dot indicator implying three slides. Visually confirmed in the live Figma canvas only as inferred additional carousel slides; their mobile-specific layout and copy could not be confirmed through MCP.

#### Work That Earned the Brief Again / Recognition / Final CTA — Mobile
- Exact visible structure: Visually confirmed in the live Figma canvas: after the "White label" card and its 3-dot indicator, the mobile canvas shows a large solid dark-navy fill block with no legible text, card, icon, or button content visible within it at the inspected resolution, followed directly by the Footer.
- Position and alignment: Full-width block occupying the region between the "How we show up" carousel and the Footer.
- Width and height: Measured from the design. A small rounded-rectangle "Rectangle 3357" `347:98` 388×165 at x=16, y=3897 (fill color `#061868`, matching the Desktop portfolio-card background color) and a decorative "Vector" `347:99` 388×31 at x=404, y=3866 are the only named nodes metadata surfaces in this region; the full visually solid navy band spans a considerably larger vertical range than these two nodes account for.
- Grid and container behavior: On Desktop, this same vertical region contains three fully-built sections — the dark-navy "Work that earned the brief again" portfolio grid, the light-lavender "The quality your clients will notice" recognition intro plus the three-item awards row, and the white "Have a brief that needs a reliable pair of hands?" final CTA with its button and call-link. On Mobile, none of the corresponding text, card, icon, or button content for these three sections is visible in the rendered canvas or surfaced in `get_metadata`; only a solid dark-navy fill area is visually confirmed.
- Typography, Colors, Borders, Radius, Shadows, Spacing, Images: Not determinable — no readable text, imagery, or component content renders in this area in the current mobile canvas at the resolution inspected.
- Reusable components: Cannot be confirmed for this region on Mobile.
- Elements with unavailable metadata: The entire portfolio grid, recognition/awards row, and final CTA block that exist on Desktop between the "How we show up" section and the Footer have no retrievable node metadata and no visually legible content in the Mobile frame's rendered canvas at the resolution inspected. Per the stated methodology, this observation is reported strictly as what is visually confirmed (a solid navy fill with no legible content) — it is not asserted that this content has been removed or does not exist in the underlying file, only that it could not be confirmed through MCP for the Mobile frame.

#### Footer — Mobile
- Exact visible structure: Same content as Desktop — "PIXELOCRACY" logo, tagline "We transform the industries of the present, with the technologies of the future," vertical link list ("Expertise," "Work," "About," "Cookie Policy," "Privacy Policy"), LinkedIn icon, wavy divider, "Pixelocracy © 2026, All rights reserved." copyright line, and a circular blue scroll-to-top button — stacked vertically full-width instead of Desktop's three-zone horizontal layout.
- Position and alignment: Single-column, left-aligned stack; scroll-to-top button pinned bottom-right.
- Width and height: Measured from the design. Background image "image 80" `345:308` 420×574 at x=0, y=4887 (vs. Desktop's 1920×813 "Group 1654" — same content, different aspect/crop for the narrower frame).
- Grid and container behavior: Vertically stacked instead of Desktop's logo/links/badge horizontal split.
- Typography, Colors: Same visual treatment as Desktop (blue logo, dark navy text, blue scroll-to-top button).
- Borders, Radius, Shadows: Same as Desktop (circular scroll-to-top button, wavy divider line, no other borders/shadows).
- Spacing: Not measurable — content is a flattened raster image, as on Desktop.
- Images and required assets: Same flattened footer screenshot image asset approach as Desktop.
- Reusable components: Same global footer component as Desktop, mobile/stacked variant.
- Elements with unavailable metadata: Visually confirmed in the live Figma canvas: the EUROCERT certification badge visible on Desktop's footer is not visible anywhere in the Mobile footer screenshot. As with Desktop, all footer text/icon content (logo, tagline, links, LinkedIn icon, copyright, scroll-to-top button) has no individually retrievable node metadata — it is baked into a single raster image.

## Shared Components

The following patterns recur across multiple pages documented above. This section consolidates observations already made per-page; it does not introduce new claims beyond what is stated in the page-level sections, and it does not assert that any pattern is a formally-named Figma component/main-component instance unless stated — most are visual repetitions of the same construction across otherwise-independent nodes.

### Shared Navigation

- Exact visible structure: "PIXELOCRACY" wordmark at the far left, a horizontal nav-item cluster ("Home", "Services" with a dropdown chevron, "Work", "About", "Insights" — wording and count vary slightly by page render, e.g. some pages show "Home/Expertise/Work/About" instead), and a "Contact" link or label at the far right. Visually confirmed in the live Figma canvas across every Desktop page documented above (Homepage, About, Contact, Blog, Pillar Page Template, Case Studies Archive, Wired, Updated Wired, Cardom, Apeiron, Mini Landing/Agency).
- Position and alignment: Full-width bar pinned to the top of each Desktop frame, y=0. Logo left-aligned; nav cluster centered-left; "Contact" right-aligned.
- Width and height: 1920 × 75 px on every Desktop frame where a nav-bar background node exists. Measured from the design (confirmed identically on Homepage `231:51`-area, About `231:1278`/`231:1391`, Contact bar region, Blog `231:1593`, Pillar Page `231:1422`, Case Studies Archive `231:200`/`231:201`, Wired `231:380`/`231:381`, Updated Wired `231:1847`, Cardom `231:772`/`231:773`, Apeiron `231:954`, Mini Landing `231:1061`/`231:1062`).
- Grid and container behavior: Full-bleed 1920px-wide bar; nav content sits inside the same 1280px/320px-margin content grid used throughout each page.
- Typography: On most pages this bar (or its nav-link cluster specifically) is either a flattened raster image or a converted-to-outline vector, so no bound text style is retrievable for the individual nav words. Visually confirmed in the live Figma canvas as a small sans-serif label style (visually consistent across pages) for the link text, and a bold condensed display treatment for the "PIXELOCRACY" wordmark.
- Colors: "PIXELOCRACY" wordmark renders in the site's primary blue (visually matching the measured `#4467f6` brand blue used elsewhere) on every page. Nav-link text and "Contact" render in dark navy/near-black. Bar background is white/off-white. Exact hex values for the nav text itself are not retrievable through MCP on any page, since the bar is consistently either a raster image or an outlined vector.
- Borders: None visible on any page's nav bar.
- Radius: None visible on the bar itself on any page.
- Shadows: None visible on the bar itself on any page.
- Spacing: Nav-link cluster consistently begins around x=596 on Desktop frames where a cluster node exists (`248:360`, `248:363`, `248:365`, `248:372`, `248:374`, `248:386`, `248:389`, all at or near x=596, y=27, ~445.96×18.36 px — Measured from the design), suggesting a shared, reused nav-cluster component/asset placed at an identical position across pages.
- Images and required assets: Logo mark (vector or raster depending on the page); nav-cluster vector/raster; dropdown chevron on "Services" where present.
- Reusable components: This is the clearest sitewide shared component in the file — the same 1920×75px bar, same left-logo/center-links/right-contact structure, and same ~596,27 nav-cluster position recur on every Desktop page documented.
- Elements with unavailable metadata: The individual nav-link words and the "PIXELOCRACY" wordmark's internal styling are not retrievable as discrete text nodes on any page — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

**Mobile Navigation:** On every Mobile frame documented above, this bar collapses to a two-element header: the "PIXELOCRACY" logo image (consistently ~160×17 px, positioned at x=16, y=21 — Measured from the design, confirmed identically on Homepage `257:1548`, About `281:3316`, Contact `343:5`, Blog `343:166`, Mini Landing `345:304`) and a small hamburger/menu-icon group (consistently ~28.5×11.5 px at x=376, y=23.5 — Measured from the design, confirmed identically on the same set of pages, e.g. `257:1551`, `281:3317`, `343:6`, `343:167`, `345:305`). The full inline nav-link row seen on Desktop is not present on Mobile on any page; individual link labels are not visible outside of the collapsed menu, and the menu's open/expanded state is not present in any of the static Mobile frames reviewed.

### Shared Footer

- Exact visible structure: "PIXELOCRACY" wordmark + a short tagline ("We transform the industries of the present, with the technologies of the future"), a vertical link list ("Expertise", "Work", "About", "Cookie Policy", "Privacy Policy"), a LinkedIn icon, an EUROCERT certification badge (icon + "Certified Information Security Management System / EN ISO/IEC 27001:2023 / Certified by EUROCERT" text), a faint wavy divider line, a copyright line ("Pixelocracy © 2026, All rights reserved."), and a circular blue "scroll to top" button with a white chevron. Visually confirmed in the live Figma canvas as present, in this same content set, on every Desktop and Mobile page documented above.
- Position and alignment: Full-width band at the very bottom of each frame. On Desktop, content is distributed across left (logo/tagline), center (link list), and right (EUROCERT badge) zones, with the copyright line and scroll-to-top button forming a bottom row. On Mobile, the same content restacks into a single left-aligned column.
- Width and height: Footer band height is consistently ~813px on Desktop frames where a dedicated footer background node exists (Homepage `231:191` portion, About `231:1277` at 1920×813, Contact `231:970` at 1920×813, Blog `231:1588`/`231:1589` at 1920×813, Pillar Page `231:1500` at 1920×813, Mini Landing `231:1200`/`231:1201` at 1920×813, Wired-family footers at similar proportions) — Measured from the design. Mobile footer images are consistently 420×574 px (Homepage `261:1723`/`257:1388` region, About `281:3465`, Contact `343:15`, Blog `343:170`, Mini Landing `345:308`) — Measured from the design.
- Grid and container behavior: Full-bleed background spanning the frame's full width, with the EUROCERT badge (where it exists as a real node) right-of-center at a consistently similar offset (e.g. Homepage `231:192` x=1318, About `231:1400` x=1316, Contact `231:971` x=1317, Blog `231:1590` x=1318, Pillar Page `231:1500` region, Mini Landing `231:1200`-family x≈1318) — Measured from the design.
- Typography: On the large majority of pages, the wordmark, tagline, link list, and copyright line are baked into a single flattened raster image ("screencapture-thepixelocracy-..." or "image 80"/"image 4"-style asset names) and carry no retrievable bound text style. Visually confirmed in the live Figma canvas as bold sans-serif for the wordmark and link labels, and regular weight for the tagline and copyright line, consistently across every page. Exact node metadata unavailable through MCP for this text on every page checked.
- Colors: "PIXELOCRACY" wordmark renders in the site's primary blue on every page's footer, consistent with the nav-bar wordmark color. Link list and copyright render in dark navy/near-black. Footer background transitions from white/off-white to a light lavender tint toward the bottom on most pages. Scroll-to-top button is a filled blue circle with a white chevron on every page where visible. Exact hex values are not retrievable through MCP on any page (flattened raster content), except where separately measured (e.g. About's mission-band navy `#071d7b` is a distinct section above the footer, not the footer itself).
- Borders: None visible on any page's footer.
- Radius: Scroll-to-top button is fully circular on every page. EUROCERT badge icon renders as a small rounded-square/circular stamp on every page.
- Shadows: None strongly visible on any page's footer text; the scroll-to-top button appears to carry a soft shadow on several pages (Visually confirmed in the live Figma canvas, not independently measured).
- Spacing: Not independently measurable at the sub-element level on any page, since footer content is consistently flattened into a single raster image.
- Images and required assets: EUROCERT certification badge icon (60×60 px on every page where it exists as a real node — Measured from the design) plus its certification text (rendered as an outlined vector, not editable text, on every page where it is a real node); LinkedIn icon; scroll-to-top chevron icon; decorative wavy-divider line graphic.
- Reusable components: This is the second clearest sitewide shared component after the navigation bar — identical content set, identical relative layout, and (where measurable) an identically-positioned EUROCERT badge recur across every page documented.
- Elements with unavailable metadata: The wordmark, tagline, link list, LinkedIn icon, wavy divider, copyright line, and scroll-to-top button have no individually retrievable node metadata on the large majority of pages checked — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP. The EUROCERT badge is the one footer element with a consistently retrievable real node (icon + certification-text vector) on Homepage, About, Contact, Blog, and Mini Landing/Agency; it has no corresponding node in the Mobile metadata dump on any page checked, and its presence or absence specifically on Mobile could not be confirmed either way through the tools used in this pass.

### Shared Buttons

Three distinct button/link constructions recur across the pages documented above:

- **Primary "hard-shadow" button** (white fill, dark or black text, sharp/square corners, a flat non-blurred offset drop-shadow in brand blue `6px 6px 0px #4467f6`): confirmed with measured shadow values on the About "See open positions" button (`231:1286`), the Pillar Page "Book a discovery call" button (`231:1501`), the Updated Wired hero "Check it out" button, and visually confirmed with the same construction on the Homepage hero "Book a discovery call" button, the Homepage "Get in touch" banner's "Talk to our team" button, and the Case Studies Archive CTA banner's "Talk to our team" button (exact shadow values not independently re-measured on the latter three, since those buttons have no retrievable node ID).
- **Secondary outline button** (transparent fill, brand-blue border and text, sharp corners, no shadow): visually confirmed on the Homepage hero "See our work" button. No node ID is retrievable for this button on any page where it appears.
- **Solid-fill button with inverted shadow** (solid brand-blue or navy fill, white text, sharp corners, a flat offset drop-shadow in gray `6px 6px 0px #ccc` instead of blue): confirmed with measured values on the Updated Wired "Flexible Adaptable" card treatment and the Mini Landing/Agency "With Pixelocracy" comparison card, both of which pair a colored/blue background with a gray shadow rather than the white-background/blue-shadow pairing used elsewhere — this gray-on-blue vs. blue-on-white shadow inversion is a consistent, deliberate pattern across every card/button pair that uses this two-variant construction.

All three constructions use, where a bound text style is retrievable, `Desktop/CTA` (Mabry Pro Regular, 16px, weight 400, line-height 24) for the button label. From Figma style. Internal button padding, where measured, is consistently 40px horizontal / 20px vertical (Measured from the design, confirmed on About `231:1286` and Pillar Page `231:1501`).

### Shared Cards

A single underlying card construction, internally named "Overlay+Border+OverlayBlur" in the Figma layer tree on multiple pages, recurs with different fills and content across the file:

- Confirmed instances of this named construction: the Homepage case-study cards, the Updated Wired Section 02 comparison cards ("FIXED NON-NEGOTIABLE" / "FLEXIBLE ADAPTABLE"), the Pillar Page "01/02/03" feature cards and FAQ/accordion cards, the About "way we show up" value cards and "Mobile" carousel card, and the Mini Landing/Agency comparison cards and "How we show up" cards.
- Exact visible structure: A rectangular card with no stroke/border — the appearance of a border comes entirely from a flat, non-blurred offset drop-shadow (`6px 6px 0px`, either in brand blue `#4467f6` on a light/white card, or in gray `#ccc` on a colored/blue card — see Shared Buttons above for the same inversion logic). Corners render sharp/square on every confirmed instance (no radius class was present in the extracted code on any card checked, despite several being tagged "rounded-rectangle" by node type).
- Typography inside cards: card titles consistently use a bold weight at either `Desktop/H5` (20px) or `Desktop/H4` (24px) scale; card body copy consistently uses `Desktop/Body` (18px/24, Montserrat Regular). From Figma style, confirmed via design context on multiple card instances across pages.
- Colors: card fills observed across instances include white (`#ffffff`), brand blue (`#4467f6`), light lavender (`#f1f4ff`, `#e8ecfd`), and dark navy (`#061868`); text color pairs with each fill for contrast (dark navy/black text on light fills, white text on dark/blue fills). Measured from the design on each confirmed instance.
- Spacing: internal card padding is consistently 32px or 40px depending on the instance (Measured from the design, confirmed on multiple cards).
- Reusable components: this is the file's most consistently reused content-card pattern, appearing in comparison-card, feature-card, testimonial-card, and case-study-card roles across at least five different pages.
- Elements with unavailable metadata: exact corner-radius values (where the node type suggests rounding but the extracted styles show none) and the internal fill/stroke of small decorative icons inside several card instances — Visually confirmed in the live Figma canvas. Exact node metadata unavailable through MCP.

A second, distinct card pattern — the **case-study listing card** (numeral + heading + description + "Learn more/Learn More →" link, paired with a photograph or colored logo header) — recurs identically in construction (though with no shared internal component name confirmed) across the Homepage "Some of what we've shipped" section and the Case Studies Archive's four-item list, differing mainly in whether the image sits beside or as a header above the text panel.

### Shared Section Headers

An eyebrow/overline label (uppercase, small, brand-blue `#4467f6`, `Desktop/Overline` — Sharp Grotesk Medium 25, 15px, weight 500, line-height 20, uppercase) followed by a heading (`Desktop/H2` or `Desktop/H3` scale) and a supporting paragraph (`Desktop/Body`) is the single most repeated content pattern in the file. Confirmed instances: Homepage ("What we do", "Tools we build with", "Some of what we've shipped"), About ("Who we are", "How we work", "The leadership team", "Join us"), Pillar Page Template ("WHY US", "TYPICAL SITUATIONS WE SOLVE", "SELECTED EXPERIENCE", "WHAT'S INCLUDED"), Mini Landing/Agency ("THE SITUATION", "HOW IT WORKS", "HOW WE SHOW UP", "WHAT WE'VE BUILT", "RECOGNITION"), and the Wired/Updated Wired case-study section headers ("01 — THE BRIEF", "02 — THE RULES", etc., using the same overline+heading+paragraph structure with a numbered prefix). From Figma style, confirmed via design context on multiple instances across pages. On Mobile frames, the same pattern is retained but reflows to a narrower column and, on several pages, switches from centered to left-aligned text.

### Shared CTA Patterns

- **Pill badge** (rounded-full, light lavender-blue fill `#d7defc`, blue text `#234cdc`, ~9999px/25px radius): confirmed on the Mini Landing/Agency hero ("For agencies & creative studios") and the Updated Wired hero ("CASE STUDY 2025"). From Figma style / Measured from the design.
- **"Talk to our team" / "Get in touch" banner**: a full-width diagonal blue-to-navy gradient panel with centered white heading, white body copy, and a white hard-shadow button, confirmed on the Homepage and the Case Studies Archive, and visually consistent with the "Ready to move" CTA on the Pillar Page Template and the "Have a brief" CTA on Mini Landing/Agency (though those two use a white/light background rather than the dark gradient).
- **Text link with arrow** ("Learn more →", "View all Case Studies →", "Live at [url] →", "Or book a 20-min call →"): a short blue text label with a trailing arrow glyph, confirmed in this exact visual form across the Homepage, Case Studies Archive, Blog, Wired/Updated Wired, and Mini Landing/Agency pages.
- **Previous/Next pagination row**: a two-item row ("◂ Previous [item]" / "Next [item] ▸"), each with a thumbnail or arrow icon, anchored to the outer edges of the content container — confirmed on the Blog page (post pagination) and the Wired/Updated Wired case-study pages (work pagination), using the same left/right-anchored construction in both contexts.

### Shared Image Treatments

- **Monochrome/black-and-white photography**: used for the About page's hero image pair and team portraits, and the Blog page's hero banner and inline article photograph. Visually confirmed in the live Figma canvas as a deliberate, consistent desaturation treatment across every instance of "people/office" photography in the file (as distinct from the case-study screenshot/product-mockup imagery, which is shown in full color).
- **Rounded-rectangle mask with a wave/scallop bottom edge**: a photographic image clipped into a rounded-rectangle mask, with a separate wavy vector shape overlapping its lower edge to create a scalloped transition into the next section. Confirmed on the About hero images, the Pillar Page Template hero image band, and the Mini Landing/Agency hero image banner. Measured from the design on each confirmed instance (wave vector dimensions match the image's width in every case).
- **Hard offset drop-shadow (`6px 6px 0px`, no blur)**: the single most consistent depth treatment in the file, applied to buttons, cards, and case-study cards alike, always in either brand blue (on light backgrounds) or gray `#ccc` (on colored/blue backgrounds) — see Shared Buttons and Shared Cards above. No blurred/soft shadow was measured anywhere in the file across all pages reviewed.
- **Flattened "screencapture" background images**: nav bars and footers on the large majority of pages are built from a raster image literally named with a "screencapture-thepixelocracy-..." prefix, suggesting these sections were captured from a live/staging version of the site and placed into Figma as reference images rather than being rebuilt as native, decomposed layers. This is Visually confirmed in the live Figma canvas and Measured from the design (via each image node's own name and bounding box) consistently across Homepage, About, Contact, Blog, Pillar Page Template, Case Studies Archive, and Mini Landing/Agency.

### Shared Responsive Rules

- **Breakpoints:** Only two breakpoints exist anywhere in this file — Desktop frames are consistently 1920px wide; Mobile frames are consistently 420px wide. No tablet or other intermediate breakpoint frame exists anywhere in the file. Not defined in the Figma design.
- **Content columns:** Desktop pages consistently use a 1280px content column centered within the 1920px frame (320px side margins). Mobile pages consistently use a 388px content column within the 420px frame (16px side margins). Measured from the design, confirmed identically across every page documented above.
- **Navigation collapse:** every Desktop nav bar's inline text-link row collapses to a logo + hamburger-icon header on Mobile, with no visible inline links and no visible expanded-menu state captured in any of the static Mobile frames reviewed. Confirmed identically across every page pair documented above.
- **Multi-column-to-carousel collapse:** where Desktop shows multiple cards side by side (case-study cards, comparison cards, value-card grids), the corresponding Mobile frame frequently shows only the first card as a real, style-inspectable node, accompanied by a row of small dot-pagination indicators matching the total card count. Confirmed on the Homepage case-study section, the About "way we show up" section, and the Mini Landing/Agency comparison and "how we show up" sections. In every one of these cases, the additional cards' content could not be confirmed through MCP for the Mobile frame — this is reported as a metadata/visual-confirmation gap, not as evidence that the additional cards are absent from the design.
- **Multi-column-to-single-column stacking:** where Desktop uses a fixed two- or three-column layout with vertical divider lines (stat bands, info bars, feature grids), the Mobile equivalent consistently restacks the same content into a single column with horizontal divider lines in place of vertical ones. Confirmed on the About "Results, not claims" stat band and the Contact "Find us" info bar.
- **Typography scale-down:** every named Mobile text style measured in this file is smaller than its Desktop counterpart of the same role: `Desktop/H1` 48px → `Mobile/H1 Mobile` 30px; `Desktop/H2` 40px → `Mobile/Η2 Mobile` 28px (note: this Mobile style name uses a literal Greek capital "Η", not a Latin "H" — Measured from the design, i.e. read directly from the Figma style name); `Desktop/H4` 24px → `Mobile/H4 Mobile` 20px; `Desktop/Body` 18px → `Mobile/Body Mobile` 16px; `Desktop/Body Small` 16px → `Mobile/Body Small Mobile` 14px; `Desktop/Overline` 15px → `Mobile/Overline Mobile` 14px. From Figma style.
- **Pages with no confirmed Mobile frame:** the Pillar Page Template has no Mobile frame anywhere in the file's frame list. Not defined in the Figma design. The Homepage has two frames sharing the exact name "NEW Homepage - Mobile" (`257:1388` and `261:1739`); only one of them (`257:1388`) contains content structurally matching the Desktop Homepage — the other (`261:1739`) contains a "Strategy & Advisory" pillar/service detail page instead. This is reported factually per the Homepage section above; no determination is made as to which frame is the intended Mobile Homepage.

