# Roadmap

Each phase starts only when the previous gate is passed. The full reasoning is in the "Building Regs Lab: review and plan" doc.

| Phase                                              | What                                                                                                                                                                                                                                  | Gate                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 0. Safe copy (**done**)                            | Lab folder, own name, icon and storage; switches; tools and tests saved                                                                                                                                                               | Both apps installed side by side, separate progress, both work offline |
| 1. Reference foundations (**done**)                | Bookmarks; a status panel per document (edition, amendments, jurisdiction, last checked, not yet in force); content badges (Law, Statutory guidance, Explanation, Fictional); Report-a-problem link; answer checker for rebuilt packs | Every result shows its edition and label; the answer checker passes    |
| 2. Regulation Hunter pilot (**built, in testing**) | 15 hunts across AD K and AD B Vol 1, marked by paragraph, hints, no timer, bonus XP for thoroughness                                                                                                                                  | You and two others finish all 15, most in under three minutes each     |
| 3. Confidence check (**built, in testing**)        | Sure / Think so / Not sure: let me check. Checking never costs a heart. Rework number-recall questions (done automatically for 64 of 159: "Where would you check?")                                                                   | Lessons still finished at the same rate; the sure-and-right stat works |
| 4. Case files pilot                                | Loft conversion, four-storey flats, office fit-out, each with a missing-information step                                                                                                                                              | An experienced reviewer signs off every answer key                     |
| 5. Tester comparison                               | 6 to 10 testers, swapping between the original and the Lab after a week                                                                                                                                                               | Success criteria agreed in advance are met                             |
| 6. Decide and extend                               | Move what worked into the original, or keep both. Then: house cut-away, more Approved Documents                                                                                                                                       | n/a                                                                    |

## Code health

- Done (Lab 0.5): code split into readable files, Prettier, ESLint, GitHub Actions on every pull request.
- Later: replace the older quiz-driving tests' helper so they can join the automatic set.

## Teaching (from the teaching system plan)

| Phase                      | What                                                                                                                           | Exit check                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| T1 (**built, in testing**) | Lesson player, lesson files, preview mode, Lessons 1 (Understanding the Building Regulations) and 2 (Understanding staircases) | You and two beginners finish both and say what worked |
| T2                         | Lesson 3 (fire compartmentation) and its experiment; fixes from T1; independent review of all three                            | All three marked Reviewed                             |
| T3                         | Lessons inside the path before section quizzes, with Skip to quiz; element tags; finishing a lesson opens its hunts            | Lesson, then quiz, then hunt, works end to end        |

## Parked

- Build a building: merge with the interactive house later.
- Career mode: dropped for now. Group case files by project type instead.
