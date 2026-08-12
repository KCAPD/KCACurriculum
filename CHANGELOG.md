# Changelog

## v3.30 — Remove residual Nursery–Year 4 curriculum data
- Removed residual Nursery–Year 4 curriculum data from the shared homepage JavaScript.
- Added a runtime safeguard so lower-year curriculum units cannot repopulate from legacy data.
- Re-cleaned Nursery, Reception and Years 1–4 pages to the single placeholder message.
- Year 1 and Year 3 no longer surface old curriculum content anywhere.
- Year 5 and Year 6 remain the only live, populated curriculum maps.

## v3.29 — Remove Nursery–Year 4 value placeholders
- Removed any remaining value placeholders from Nursery, Reception and Years 1–4.
- Those six pages now contain only the clean final-overview message until their final curriculum maps are supplied.
- No unit cards, values, Explore buttons or mobile unit scripts are present on Nursery–Year 4.
- Year 5 and Year 6 remain fully populated and unchanged in content/design.

## v3.28 — Clean Nursery–Year 4 placeholders
- Standardised Nursery, Reception and Years 1–4 to one clean unpublished curriculum state.
- Each page now shows only: “The detailed curriculum map for this year group will be added when the final overview is available.”
- Removed all unit cards and all “Explore this unit” controls from Nursery–Year 4.
- Removed the mobile unit-popup script from Nursery–Year 4 until their final maps are added.
- Year 5 and Year 6 remain the only fully populated curriculum-map pages.
- Restored Nursery–Year 4 homepage cards to link to their clean placeholder pages while retaining their Coming Soon status.
- Year 5/6 mobile design remains the template for future finalised maps.

## v3.27 — Finalised years only + centred mobile pills
- Centred every mobile “Explore this unit” pill within its unit card.
- Confirmed the Year 5/6 mobile treatment as the standard template for future year-group maps.
- Removed the existing Nursery–Year 4 curriculum-map content from publication.
- Nursery–Year 4 direct pages now show a clean “Coming soon” state rather than draft curriculum content.
- Homepage year-group links for Nursery–Year 4 are marked as coming soon and are not live.
- Year 5 and Year 6 remain the only published, finalised curriculum maps.
- Withheld Nursery–Year 4 map-specific Experience Library entries while retaining shared/whole-school entitlements and Year 5/6 experiences.
- Desktop and mobile Year 5/6 curriculum content remains unchanged apart from the centred mobile pill.

## v3.26 — Explore pill inside every mobile unit card
- Corrected the remaining visual mismatch between Nursery/Reception and Years 1–6.
- On mobile, the topic and “Explore this unit” pill now sit inside one shared coloured card.
- The pill remains technically outside the HTML summary element, preserving the Safari/iPhone popup fix.
- Retained two complete units per row.
- Applied consistently from Nursery through Year 6.
- Desktop behaviour remains unchanged.

## v3.25 — Unified year-group card design
- Standardised Years 1–6 to the cleaner, brighter Nursery/Reception visual language.
- Kept the richer curriculum detail and learning-journey narratives in the mobile popup rather than crowding the card face.
- Preserved the two-units-per-row mobile layout and compact Explore pill.
- Added brighter year-colour accents, softer tinted card backgrounds and cleaner term labels.
- Preserved desktop expand/collapse behaviour and all existing curriculum content.
- Nursery and Reception remain visually consistent with their existing design.

## v3.24 — Unified mobile pill buttons
- Standardised the mobile “Explore this unit” control across Nursery to Year 6.
- Replaced the larger dark buttons with the cleaner compact white pill style used in Nursery/Reception.
- Kept the two-units-per-row mobile layout unchanged.
- Kept all mobile popup functionality unchanged.
- Desktop layout and styling remain unchanged.

## v3.23 — Mobile two-column unit layout
- Grouped each curriculum topic card with its own “Explore this unit” button.
- On mobile, each button now sits directly underneath the topic it belongs to.
- Mobile year-group pages now display two complete curriculum units per row.
- Reduced mobile card typography slightly so two-column layouts remain readable.
- Applied consistently from Nursery through Year 6.
- Desktop layout remains unchanged.

## v3.22 — All mobile unit buttons + brighter Year 5/6 colours
- Fixed the mobile unit button issue: each “Explore this unit” button now sits outside its closed details card, so all six units can display a button on mobile.
- Applied the button fix across Nursery, Reception and Years 1–6 wherever detailed units are available.
- Restored a bright curriculum-book identity to the final Year 5 and Year 6 pages.
- Year 5 now uses a bright rose/coral accent.
- Year 6 now uses a bright teal accent.
- Kept all Year 5/6 narratives, final curriculum content, experiences and subject mappings unchanged.
- Desktop unit behaviour remains unchanged.

## v3.21 — iPhone mobile popup fix
- Fixed the mobile “Explore this unit” interaction for Safari/iPhone.
- Moved the Explore button outside the HTML summary element so Safari no longer swallows the tap.
- Added a direct, explicit modal click handler and focus return on close.
- Added safe-area spacing for iPhones with a home indicator.
- Applied the fix to Nursery, Reception and Years 1–6.
- Desktop behaviour remains unchanged.

## v3.20 — Mobile unit popups and distinct value emojis
- Added a different emoji to each KCA value marker on the homepage:
  Integrity ⚖️, Respect 🤝, Endurance 🏔️, Kindness 💛, Courage 🦁, Aspiration ⭐.
- Added mobile-only curriculum unit popups to every year-group page from Nursery to Year 6.
- On phones, unit cards now remain compact and open into a near-full-screen bottom sheet for the detailed curriculum content.
- Desktop year-group behaviour remains unchanged.
- Retained the Year 5 and Year 6 narrative learning journeys from v3.19.
- Retained removal of the Year 6 Crumbles trip.

## v3.19 — Values and curriculum narratives
- Removed Crumbles from the Year 6 detailed curriculum and Experience Library.
- Added compact value-character markers to populated homepage curriculum cards.
- Added a short narrative learning journey to every Year 5 and Year 6 half-term.
- Added responsive mobile styling for both the value markers and narratives.
- Retained all v3.18 curriculum map, experience and subject-mapping updates.

## v3.18 — Final Year 5 and Year 6 curriculum maps
- Replaced Year 5 and Year 6 homepage topics with the final 2026–2027 Big Questions and Learning Presentations.
- Rebuilt the Year 5 and Year 6 digital curriculum books from the final yearly overviews.
- Added the final Year 5 and Year 6 PDF maps as downloadable files.
- Replaced older map-driven Year 5/6 experience entries with the final trips, workshops and initial experiences.
- Mapped every new experience to relevant subject pages so subject experience sections update automatically.
- Retained wider Year 5/6 entitlements such as LAMDA, instrumental tuition, swimming, Bright Futures Academy, France residential and the Year 6 production.

## v3.17 — Maths home-learning styling fix
- Corrected the Maths home-learning card in the stylesheet actually used by subject pages (`subjects/subject.css`).
- Matched the existing subject-page white card, border, radius, shadow and typography.
- Added responsive mobile styling and a full-width mobile button.
- Verified the White Rose link still opens in a new tab.

## v3.14 — Phonics subject template
- Rebuilt Phonics & Early Reading using the same subject-page template as English and the other subjects.
- Retained the same site navigation, layout, section styling and page structure.
- Added placeholder copy only where the final KCA phonics documentation is still to come.
- Retained all v3.13 content and functionality.

## v3.13 — Phonics & Early Reading
- Added Phonics & Early Reading as the 15th card in the Subject Library.
- Added a dedicated Phonics & Early Reading page ready for KCA's scheme-specific information.
- Retained all v3.12 changes.

## v3.12 — Visible draft launch banner
- Changed the launch label to “Draft – Launching in September 2026”.
- Increased contrast so the pre-launch status is clearly visible in the hero.
- Kept the banner compact on mobile.

## v3.11 — Pre-launch status
- Added a subtle “Launching September 2026” status badge to the homepage hero.
- Kept it visually secondary so visitors understand the site is still being completed without distracting from the curriculum.
- Added responsive mobile sizing.

## v3.10 — Year-group card spacing
- Improved vertical spacing and alignment on populated year-group cards.
- Restored “Explore this unit →” to every populated unit card.
- Anchored the explore links to the relevant unit section where available.
- Kept the cleaner Nursery/Reception-inspired visual style.

## v3.9 — Pillar repair + cleaner year cards
- Fixed the Explore this pillar pop-ups after the v3.8 clean-up.
- Removed the stale JavaScript reference to the deleted pillar-links block.
- Removed malformed leftover dialog markup.
- Restyled populated year-group cards to match the cleaner Nursery/Reception format.
- Kept the real Big Questions and Learning Presentations on populated year cards.
- Full curriculum detail remains available through the digital curriculum book button.

## v3.8 — Pillar pop-up clean-up
- Removed the “You will see this pillar through…” section from all pillar pop-ups.
- Removed the associated Art Week, Bright Futures Festival, Clubs and enrichment, and Trips and partnerships links/tags.
- Kept the rest of each pillar panel unchanged.

## v3.7 — Header refinement
- Reduced navigation font size and spacing to make the top menu calmer.
- Reduced header vertical padding.
- Changed “← Return to KCA website” to a dark text link visible by default.
- Removed the outlined pill treatment from the return link.
- Added a simple underline hover state.
- Kept the mobile header compact.

## v3.6 — KCA return link
- Added a pill-style “← Return to KCA website” link to the top header.
- Links to https://www.kingscrossacademy.org.uk.
- Added responsive styling so the link remains compact on phones.

# Version 3.4 — Mobile framework navigation

- Rebuilt the Vision → Pillars → Skills → Values → Big Questions → Learning Presentations strip as a two-column tappable navigator on phones.
- Removed arrows on mobile while retaining the original desktop flow.
- Added smooth scrolling and reliable section anchor targets.

# Changelog

## 3.3
- Added full phone optimisation while retaining the desktop design.
- Reworked major mobile sections into compact two- or three-column layouts.
- Improved mobile navigation, tap targets, spacing and modal sizing.
- Optimised the two-row experience gallery for phone browsing.
- Added responsive year-group and subject-page layouts.

## Version 3.5
- Moved the mobile curriculum framework navigator directly below Our Vision.
- Made the mobile navigator sticky while visitors move through the curriculum framework.
- Retained the original desktop arrow journey beneath the five pillars.
