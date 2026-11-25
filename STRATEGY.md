# Strategy — news-image-20261125 round 2

## Judge (from this competition's RULES.txt, in order)

The judge is an AI picture editor (z-ai/glm-5.3-flash) with no news feed and no
knowledge of the contest day. It weighs, most important first: (1) one day's
news that names its day, with specific recognisable events, and not about a day
before 13 Nov 2026; (2) selection and breadth — the most consequential stories
across regions and fields; (3) readability — a viewer who missed the day can
tell what happened from the image alone; (4) faithfulness — as reported, no
hype or speculation as fact; (5) craft — one clear composition, legible at
~300 px, no smears or garbled text. It judges pairwise, no ties; a margin of
1–5 per call. Dev heat: 12 games against the seven house images (13 Nov).

## Why round 1 sits at 8W / 3D / 1L (rank 1358)

Round 1 is a good broadsheet — clean, legible, accurate — but it carries 10
stories. The live leaderboard (read 2026-11-25 ~19:00 WIB) shows the field
moved to story-count: #1 36 stories, #2 35, #3 35, #5 35, #6 50, #7 25, #8 29,
#10 33, #11 35, #13 34, #15 37, #18 36, #21 44, #25 40. A 10-story page loses
criterion 2 against nearly every rival in the final heat, and the dev heat's
house images are themselves dense digests. Round 1 also leads with Tuesday's
news (the Riyadh strike was reported Tuesday 24 Nov); by Wednesday evening the
day has 12 more first-reported stories round 1 cannot carry.

## How round 2 answers each criterion

1. **Names the day:** navy masthead band "THE WORLD IN ONE DAY" +
   "WEDNESDAY 25 NOVEMBER 2026 · 28 STORIES · 6 CONTINENTS" in gold; three of
   the four photo stories carry a "— WEDNESDAY" kicker; the footer runs a DATE
   CHECK ("every story reported 24–25 Nov 2026"). Nothing predates 13 Nov 2026.
2. **Breadth:** 28 stories, 6 continents, 11 fields. Twelve stories were
   first reported on Wednesday 25 Nov itself (Hormuz mines, Houthi Ras Tanura
   claim, Jeddah threat, Gaza strike, Sudan drones, Puigdemont, Merz, Colombia
   siege, Murmansk governor, Shenzhou-24, WHO Ebola evacuation, Sooryavanshi).
   No single country or beat dominates: the four photo stories span the Middle
   East, the Gulf, the US and space.
3. **Reads:** four photo stories with picture + headline + one-line sub; 24
   numbered briefs, each a bold head plus one fact line; a markets strip with
   five numbers. At 1024 px everything is legible (verified by viewing). At
   300 px the masthead, date, hero headlines, section header and markets read;
   the 12 px briefs do not — the same trade-off every 25–50-story entry at the
   top of the board makes, and the price of closing the breadth gap.
4. **Faithful:** every headline is a reported fact (see README for the story
   list and sources). Single-sourced items are attributed in the image:
   "Iran says" (Hormuz), "Houthis claim" (Ras Tanura), "analysis finds"
   (700,000 dead). No invented numbers; the markets strip uses Reuters'
   Wednesday figures (Kospi −5.3%, Brent $90.97, Bitcoin $59,258).
5. **Craft:** one composition — navy band, two photo rows, brief grid, footer.
   All text drawn with PIL (DejaVu) — zero AI-rendered lettering. The composer
   asserts no headline wraps past 2 lines and no brief detail past 2 lines;
   two build failures (3-line headline, briefs overflowing the footer) were
   fixed by shortening copy, not by shrinking type. File 247,907 bytes —
   smaller than round 1's 257,514, so it also wins the size tie-break.

## Blind pairwise self-test vs round 1 (structured, my own judgement)

Both images viewed at full size and at 300 px, scored against the judge's
criteria in order:

| Criterion | Round 1 | Round 2 | Winner |
|---|---|---|---|
| 1. Names the day | masthead + date line | masthead band + date + 3× "WEDNESDAY" kickers + DATE CHECK footer | Round 2 (narrow) |
| 2. Selection & breadth | 10 stories, 5 fields | 28 stories, 11 fields, 12 Wednesday-fresh | **Round 2 (clear)** |
| 3. Reads | every story picture + headline, legible at 300 px | 4 photo stories + 24 briefs; briefs unreadable at 300 px, but far more of the day is told | Round 2 (narrow; volume over small type) |
| 4. Faithful | verified, 2 in-image attributions | verified, 4 in-image attributions | Round 2 (narrow) |
| 5. Craft | clean broadsheet, no flaws | clean after two fixes; courthouse strip is a tight crop | Round 1 |

**Self-test: round 2 wins 4–1.** This is my structured judgement, not the
house judge's verdict — no one can measure the house judge without submitting.
The honest risk: if the judge weighs 300 px legibility (criterion 5) above
breadth (criterion 2), round 2's briefs cost it; but the judge's own order
puts breadth second and craft fifth, and the live top 10 is unanimous that
story count is what the field rewards. The final heat judges entries against
each other, not against house images — that is where 28 vs 10 stories matters.

## What was deliberately left out

- The Ecuador joint-ops pause and the Myanmar landmine toll (1,891): both
  surfaced only in a second-hand briefing summary, not in a wire I could
  verify directly — dropped rather than risk a false fact.
- COP31, the Banten/Cikande factory fire toll as a lead, the ICJ Myanmar
  ruling: yesterday's stories or weaker than the 28 chosen.
- A fifth photo story: four photos keep the brief grid at 24 items; a fifth
  would have forced 8 px brief type.
