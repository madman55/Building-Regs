/* Building Regs Trainer — question bank (England, checked Nov 2026).
   Multiple choice: the correct option is listed first and shuffled on screen.
   build: tap tiles into the blanks (any:true = order doesn't matter). */
window.REG_UNITS=[
 {
  "k": "?",
  "name": "The Parts",
  "sub": "Learn the letters first",
  "lessons": [
   [
    {
     "t": "match",
     "q": "Match each Part to its subject",
     "p": [
      [
       "A",
       "Structure"
      ],
      [
       "B",
       "Fire safety"
      ],
      [
       "C",
       "Site preparation and moisture"
      ],
      [
       "D",
       "Toxic substances"
      ],
      [
       "E",
       "Resistance to sound"
      ]
     ]
    },
    {
     "t": "match",
     "q": "Match each Part to its subject",
     "p": [
      [
       "F",
       "Ventilation"
      ],
      [
       "G",
       "Sanitation, hot water and water efficiency"
      ],
      [
       "H",
       "Drainage and waste disposal"
      ],
      [
       "J",
       "Combustion appliances and fuel storage"
      ],
      [
       "K",
       "Protection from falling, collision and impact"
      ]
     ]
    },
    {
     "t": "match",
     "q": "Match each Part to its subject",
     "p": [
      [
       "L",
       "Energy (fuel and power)"
      ],
      [
       "M",
       "Access to and use of buildings"
      ],
      [
       "O",
       "Overheating"
      ],
      [
       "P",
       "Electrical safety in dwellings"
      ],
      [
       "Q",
       "Security in dwellings"
      ]
     ]
    },
    {
     "t": "match",
     "q": "Match each to its subject",
     "p": [
      [
       "R",
       "Gigabit broadband infrastructure"
      ],
      [
       "S",
       "Electric vehicle charging"
      ],
      [
       "T",
       "Toilet accommodation"
      ],
      [
       "Reg 7",
       "Materials and workmanship"
      ]
     ]
    },
    {
     "t": "mc",
     "q": "What is an Approved Document?",
     "o": [
      "Statutory guidance showing one way to comply with the Regulations",
      "The Building Regulations themselves",
      "A British Standard you must follow word for word",
      "A planning policy written by your council"
     ],
     "x": "The Regulations set the legal requirements. Approved Documents give practical guidance on common ways to meet them — you can comply another way if you can show it works, but following the guidance tends to show compliance.",
     "r": "Building Act 1984; Building Regulations 2010"
    },
    {
     "t": "tf",
     "q": "There is an Approved Document I and an Approved Document N.",
     "a": false,
     "x": "No Part I has ever existed, and Part N (glazing) was folded into Part K in 2013.",
     "r": "AD K, 2013 edition"
    }
   ]
  ],
  "intro": "The Building Regulations 2010 set the legal requirements for building work in England. They are split into Parts A to T (there is no Part I or N), plus Regulation 7. Each Part has an Approved Document: government guidance showing one way to comply.",
  "docs": [
   {
    "t": "All Approved Documents",
    "url": "https://www.gov.uk/government/collections/approved-documents"
   },
   {
    "t": "The Building Regulations 2010",
    "url": "https://www.legislation.gov.uk/uksi/2010/2214/contents/made"
   }
  ]
 },
 {
  "k": "A",
  "name": "Structure",
  "sub": "Loading, ground movement, collapse",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Requirement A3 deals with…",
     "o": [
      "Disproportionate collapse",
      "Loading",
      "Ground movement",
      "Roof coverings"
     ],
     "x": "A1 is loading, A2 is ground movement and A3 is disproportionate collapse — a building shouldn’t suffer collapse out of proportion to the cause (e.g. one damaged column).",
     "r": "AD A",
     "art": "collapse"
    },
    {
     "t": "build",
     "q": "Requirement A3 protects against ___ collapse.",
     "a": [
      "disproportionate"
     ],
     "d": [
      "total",
      "seasonal",
      "roof"
     ],
     "x": "A building shouldn’t collapse out of proportion to the cause, such as one damaged column.",
     "r": "AD A, Requirement A3",
     "art": "collapse"
    },
    {
     "t": "tf",
     "q": "Requirement A2 covers ground movement such as swelling, shrinkage or freezing of the subsoil, and landslip.",
     "a": true,
     "x": "A2 requires the building to be designed so ground movement from these causes won’t impair its stability.",
     "r": "AD A"
    },
    {
     "t": "mc",
     "q": "For disproportionate collapse, buildings are grouped into which consequence classes?",
     "o": [
      "1, 2A, 2B and 3",
      "Low, medium and high",
      "1 to 5",
      "A to D"
     ],
     "x": "Class 1 is lowest risk, Class 3 highest. The class sets which collapse measures are needed.",
     "r": "AD A, Requirement A3"
    },
    {
     "t": "mc",
     "q": "A typical two-storey house is in which consequence class?",
     "o": [
      "Class 1",
      "Class 2A",
      "Class 2B",
      "Class 3"
     ],
     "x": "Class 1 includes houses of up to four storeys, agricultural buildings and buildings people rarely enter.",
     "r": "AD A, Requirement A3"
    }
   ],
   [
    {
     "t": "mc",
     "q": "Requirement A1 is about…",
     "o": [
      "Carrying the combined dead, imposed and wind loads safely to the ground",
      "Ground movement",
      "Disproportionate collapse",
      "Fire resistance of structure"
     ],
     "x": "A1 is loading. A2 deals with ground movement and A3 with disproportionate collapse.",
     "r": "AD A, Requirement A1"
    },
    {
     "t": "mc",
     "q": "For a Class 2A building, the usual measure against disproportionate collapse is…",
     "o": [
      "Effective horizontal ties, or anchoring suspended floors to walls",
      "A full risk assessment",
      "Key element design for every column",
      "Nothing — Class 2A needs no measures"
     ],
     "x": "Class 2A needs horizontal ties (or floor anchorage). Class 2B adds vertical ties or checks for notional removal of elements; Class 3 needs a systematic risk assessment.",
     "r": "AD A, Requirement A3"
    },
    {
     "t": "mc",
     "q": "Which buildings fall into Consequence Class 3?",
     "o": [
      "Those beyond the Class 2B limits, and grandstands for over 5,000 spectators",
      "Houses of up to 4 storeys",
      "Agricultural buildings",
      "Single-storey shops"
     ],
     "x": "Class 3 is the highest-risk group, needing a systematic risk assessment.",
     "r": "AD A, Requirement A3"
    },
    {
     "t": "mc",
     "q": "Structural design under AD A is based mainly on…",
     "o": [
      "The Eurocodes (BS EN 1990 series) with UK National Annexes",
      "BS 5950 only",
      "The manufacturer’s brochure",
      "Local authority rules of thumb"
     ],
     "x": "AD A refers to the Eurocodes for structural design, with simpler rules for some masonry houses.",
     "r": "AD A"
    }
   ]
  ],
  "intro": "Part A makes sure buildings stand up. They must carry their loads safely to the ground, cope with ground movement, and not collapse out of proportion if one element fails.",
  "docs": [
   {
    "t": "Approved Document A",
    "url": "https://www.gov.uk/government/publications/structure-approved-document-a"
   }
  ]
 },
 {
  "k": "B",
  "name": "Fire safety",
  "sub": "The B1–B5 requirements and recent changes",
  "lessons": [
   {
    "id": "b1s0",
    "name": "How Part B works",
    "sec": "Section 0 and the requirements",
    "page": 1,
    "intro": "Volume 1 covers dwellings, including blocks of flats; Volume 2 covers every other building. Part B has five requirements, B1 to B5, plus Regulation 38 on handing over fire safety information. Dwellings are purpose group 1: 1(a) flats, 1(b) houses with a habitable storey 4.5m or more above ground, 1(c) houses without one.",
    "watch": [
     "Very large houses — over 18m tall or with a basement 10m deep — fall outside the dwellinghouse guidance.",
     "A surgery or office of up to 50m² inside a dwelling still counts as part of the dwelling.",
     "Detached garages and open carports up to 40m² are in purpose group 1(c)."
    ],
    "qs": [
     {
      "t": "match",
      "q": "Match each requirement to its topic",
      "p": [
       [
        "B1",
        "Means of warning and escape"
       ],
       [
        "B2",
        "Internal fire spread — linings"
       ],
       [
        "B3",
        "Internal fire spread — structure"
       ],
       [
        "B4",
        "External fire spread"
       ],
       [
        "B5",
        "Access and facilities for the fire service"
       ]
      ],
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Which purpose group is a block of flats?",
      "o": [
       "1(a)",
       "1(b)",
       "1(c)",
       "2(b)"
      ],
      "x": "1(a) flats; 1(b) houses with a habitable storey at 4.5m or more; 1(c) houses without one.",
      "r": "AD B Vol 1, Table 0.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A house with a habitable storey 6m above ground is in purpose group…",
      "o": [
       "1(b)",
       "1(a)",
       "1(c)",
       "2(a)"
      ],
      "x": "1(b) covers houses with a habitable storey floor at least 4.5m (and up to 18m) above ground.",
      "r": "AD B Vol 1, Table 0.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "For flats, the B1 guidance supports a \"stay put\" strategy.",
      "a": true,
      "x": "Common escape routes are designed to stay relatively free of smoke and heat for longer, so residents in other flats can usually stay put.",
      "r": "AD B Vol 1, B1 Intention and para 3.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Which buildings does Volume 1 cover?",
      "o": [
       "Dwellings, including blocks of flats",
       "Only houses",
       "All residential buildings, including hotels",
       "Only buildings over 18m"
      ],
      "x": "Hotels, care homes and other buildings are in Volume 2.",
      "r": "AD B Vol 1, para 0.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s1",
    "name": "Smoke and heat alarms",
    "sec": "Section 1 · Fire detection and alarm systems",
    "page": 9,
    "intro": "Every dwelling needs fire detection and alarms to BS 5839-6. The minimum is Grade D2, Category LD3: mains-powered alarms with a standby supply, covering the escape route. Bigger houses step up to Grade A.",
    "watch": [
     "A \"large dwellinghouse\" has more than one storey with at least one storey over 200m².",
     "An extension needs alarms if it adds a habitable room above or below the ground storey, or a ground-storey room without a final exit.",
     "In blocks of flats, each flat has its own alarms — a communal system isn’t normally needed if compartmentation is effective."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Minimum fire detection standard for any dwelling?",
      "o": [
       "Grade D2, Category LD3",
       "Grade F, Category LD3",
       "Grade A, Category LD1",
       "Grade D1, Category LD2"
      ],
      "x": "To BS 5839-6, with smoke alarms to BS EN 14604 and heat alarms to BS 5446-2.",
      "r": "AD B Vol 1, para 1.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A large house of three or more storeys (excluding basements) needs…",
      "o": [
       "Grade A, Category LD2",
       "Grade D2, Category LD3",
       "Grade A, Category LD3",
       "Grade F, Category LD2"
      ],
      "x": "Two-storey large houses need Grade A LD3; three or more storeys need Grade A LD2.",
      "r": "AD B Vol 1, paras 1.6–1.7",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "A house counts as \"large\" when it has more than one storey and at least one storey exceeds how many m²?",
      "a": [
       "200"
      ],
      "u": "m²",
      "x": "Large houses need a Grade A system.",
      "r": "AD B Vol 1, para 1.5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Smoke alarms should be mains operated, with a standby power supply such as a battery or capacitor.",
      "a": true,
      "x": "See BS 5839-6 clause 15 for standby supplies.",
      "r": "AD B Vol 1, paras 1.2–1.4",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Where do smoke alarms go in a typical house?",
      "o": [
       "In the circulation spaces — the escape route",
       "Only in the kitchen",
       "Only in bedrooms",
       "Only in the loft"
      ],
      "x": "LD3 covers circulation spaces forming part of the escape route.",
      "r": "AD B Vol 1, para 1.9",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "A block of flats with effective compartmentation normally needs a communal fire alarm in the common parts.",
      "a": false,
      "x": "Each flat has its own alarms; a communal system isn’t normally needed.",
      "r": "AD B Vol 1, para 1.10",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s2a",
    "name": "Escape from houses: low storeys",
    "sec": "Section 2 · Means of escape, dwellinghouses (part 1)",
    "page": 11,
    "intro": "In houses with no storey above 4.5m, each habitable room needs a way out: onto a hall leading to a final exit, through an emergency escape window or door, or onto a protected stair. Escape windows have fixed minimum sizes, and inner rooms are only allowed in certain cases.",
    "watch": [
     "Kitchens are excluded from the ground-floor rule, and a kitchen can’t be one of the rooms you pass through to reach an \"inner inner\" room.",
     "Escape windows must stay open on their own, and any locks or stays need child-resistant releases.",
     "Replacing windows? Keep the existing escape opening, or reduce it no smaller than the minimum."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Emergency escape window: minimum unobstructed openable area?",
      "a": [
       "0.33"
      ],
      "u": "m²",
      "x": "It also needs a clear opening at least 450mm high and 450mm wide.",
      "r": "AD B Vol 1, para 2.10",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Escape window: minimum clear height and width of the opening?",
      "a": [
       "450"
      ],
      "u": "mm",
      "x": "Both height and width at least 450mm, with at least 0.33m² area.",
      "r": "AD B Vol 1, para 2.10",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Escape window: the bottom of the openable area should be no more than how far above the floor?",
      "a": [
       "1100"
      ],
      "u": "mm",
      "x": "Low enough to climb out of.",
      "r": "AD B Vol 1, para 2.10",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Which of these is NOT a permitted inner room?",
      "o": [
       "A bedroom on a storey 6m above ground with no escape window",
       "A kitchen",
       "A bathroom or WC",
       "A dressing room"
      ],
      "x": "Any room on a storey up to 4.5m with an escape window can be an inner room; above that, only kitchens, utility rooms, dressing rooms, bathrooms and qualifying galleries.",
      "r": "AD B Vol 1, para 2.11",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "One escape window can serve two rooms, if a door between them gives access without going through the stair enclosure.",
      "a": true,
      "x": "Both rooms then share the window.",
      "r": "AD B Vol 1, para 2.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "An escape window that has to be held open by hand is acceptable.",
      "a": false,
      "x": "Windows must stay open unaided.",
      "r": "AD B Vol 1, para 2.10(d)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s2b",
    "name": "Escape from houses: above 4.5m",
    "sec": "Section 2 · Means of escape, dwellinghouses (part 2)",
    "page": 13,
    "intro": "Once a storey is more than 4.5m above ground, escape windows aren’t enough. A single stair must become a protected stairway (REI 30) leading to a final exit. Above 7.5m you also need an alternative escape route — or sprinklers throughout instead.",
    "watch": [
     "The protected stair can end at two ground-floor final exits instead, if they’re separated by REI 30 construction and E 20 fire doors.",
     "A lift serving a storey above 4.5m must be inside the stair enclosure or in its own REI 30 shaft.",
     "No transfer grilles in the walls, doors, floor or ceiling of the stair enclosure."
    ],
    "qs": [
     {
      "t": "num",
      "q": "A house needs a protected stairway when a storey is more than how many metres above ground?",
      "a": [
       "4.5"
      ],
      "u": "m",
      "x": "The enclosure should be at least REI 30 at all storeys.",
      "r": "AD B Vol 1, paras 2.4–2.5",
      "art": "height",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Minimum fire resistance of a protected stairway enclosure in a house?",
      "o": [
       "REI 30",
       "REI 60",
       "E 20",
       "REI 15"
      ],
      "x": "Doors onto it need E 20 (FD 20).",
      "r": "AD B Vol 1, para 2.5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "With two or more storeys above 4.5m, which storeys need an alternative escape route? Those more than how many metres above ground?",
      "a": [
       "7.5"
      ],
      "u": "m",
      "x": "Or fit sprinklers throughout to BS 9251 instead.",
      "r": "AD B Vol 1, para 2.6",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Instead of an alternative escape route above 7.5m, a house can have…",
      "o": [
       "A sprinkler system throughout, to BS 9251",
       "A second smoke alarm",
       "A wider stair",
       "A fire blanket on each floor"
      ],
      "x": "Sprinklers are the alternative under para 2.6(b).",
      "r": "AD B Vol 1, para 2.6",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Fire doors onto a protected stairway in a house should achieve at least…",
      "o": [
       "E 20 (FD 20)",
       "E 30 Sa (FD 30S)",
       "E 60",
       "No rating needed"
      ],
      "x": "Table C1, item 11b: protected stairway in a single-family dwellinghouse.",
      "r": "AD B Vol 1, Table C1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "In a loft conversion above 4.5m, sprinklers to open-plan areas can be part of an alternative approach.",
      "a": true,
      "x": "Para 2.23 lists alternatives, including sprinklers to open-plan areas.",
      "r": "AD B Vol 1, para 2.23",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "An external escape stair from a house over how many metres high needs weather protection?",
      "a": [
       "6"
      ],
      "u": "m",
      "x": "Protection from the weather — not full enclosure.",
      "r": "AD B Vol 1, para 2.17",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s3a",
    "name": "Escape inside flats",
    "sec": "Section 3 · Means of escape, flats (within the flat)",
    "page": 19,
    "intro": "For flats with storeys above 4.5m, Volume 1 gives three layouts for escape inside a single-storey flat: a protected entrance hall, a short travel distance with the kitchen kept away from the entrance, or an alternative exit. Multi-storey flats have four set approaches.",
    "watch": [
     "Assumptions: the fire starts in a flat, there’s no rescue from outside, and everyone leaving at once is unlikely.",
     "Live/work units: maximum 18m travel from the working area to the flat entrance or an alternative exit.",
     "An alternative-exit balcony for a flat more than 4.5m up must be a common balcony."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "A single-storey flat above 4.5m can use which of these layouts?",
      "o": [
       "A protected entrance hall (REI 30)",
       "No protection, as long as alarms are fitted",
       "A spiral stair",
       "A rope ladder"
      ],
      "x": "The three options are a protected entrance hall, a 9m travel distance limit, or an alternative exit.",
      "r": "AD B Vol 1, para 3.18",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Open-plan flat option: maximum travel distance from the flat entrance door to any point in a habitable room?",
      "a": [
       "9"
      ],
      "u": "m",
      "x": "And the cooking area must be away from the entrance and not block escape.",
      "r": "AD B Vol 1, para 3.18(b)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Doors in the enclosure of a protected entrance hall in a flat should be at least…",
      "o": [
       "E 20 (FD 20)",
       "E 30 Sa",
       "E 60",
       "No rating needed"
      ],
      "x": "Table C1 item 9: E 20 / FD 20.",
      "r": "AD B Vol 1, Table C1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Live/work flats: maximum travel distance from any part of the working area to the flat entrance or an alternative exit?",
      "a": [
       "18"
      ],
      "u": "m",
      "x": "Windowless areas also need escape lighting.",
      "r": "AD B Vol 1, para 3.24",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Multi-storey flat, approach 4: the protected stair route works if the vertical distance to the entrance storey is at most…",
      "o": [
       "7.5m",
       "4.5m",
       "11m",
       "18m"
      ],
      "x": "Plus extra smoke alarms in all habitable rooms and a heat alarm in the kitchen.",
      "r": "AD B Vol 1, para 3.21",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Fire precautions for common parts don’t apply to flats whose top storey is no more than 4.5m above ground.",
      "a": true,
      "x": "Para 3.25: the common-part provisions start above 4.5m.",
      "r": "AD B Vol 1, para 3.25",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s3b",
    "name": "Common corridors and stairs",
    "sec": "Section 3 · Means of escape, flats (common parts)",
    "page": 22,
    "intro": "Once you leave the flat, escape relies on protected corridors, lobbies and stairs. Table 3.1 limits travel distance in common corridors. A single stair is only allowed under set conditions, and from September 2026 any block with a top storey of 18m or more needs more than one stair.",
    "watch": [
     "Interlocked stairs count as one escape route, not two.",
     "A route must not pass through one stair enclosure to reach another.",
     "Ancillary rooms can’t open off the only protected lobby or corridor on a storey."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Common corridor travel distance where escape is in one direction only?",
      "a": [
       "7.5"
      ],
      "u": "m",
      "x": "Reduced to 4.5m in small single-stair buildings.",
      "r": "AD B Vol 1, Table 3.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Common corridor travel distance where escape is possible in more than one direction?",
      "a": [
       "30"
      ],
      "u": "m",
      "x": "Sheltered housing may need shorter distances.",
      "r": "AD B Vol 1, Table 3.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "From 30 September 2026, a block of flats needs more than one common stair when its top storey is…",
      "o": [
       "18m or more in height",
       "More than 11m",
       "More than 30m",
       "More than 4.5m"
      ],
      "x": "Paragraph 3.30(b), from the 2026 amendments.",
      "r": "AD B Vol 1, para 3.30",
      "art": "height",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A \"small single-stair building\" can have no more than how many storeys above the ground storey?",
      "o": [
       "Three",
       "Two",
       "Four",
       "Six"
      ],
      "x": "Also: top storey no more than 11m above ground, plus conditions on ancillary rooms and a fire service vent.",
      "r": "AD B Vol 1, para 3.32",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Walls between flats and a common corridor, where the top storey is more than 5m above ground, should be…",
      "o": [
       "REI 60",
       "REI 30",
       "E 20",
       "REI 120"
      ],
      "x": "REI 30 is enough where the top storey is up to 5m above ground.",
      "r": "AD B Vol 1, para 3.38",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Doors dividing a common corridor between storey exits should be at least…",
      "o": [
       "E 30 Sa (self-closing)",
       "E 20",
       "E 60 S",
       "No rating needed"
      ],
      "x": "Positioned so smoke can’t affect access to more than one stair.",
      "r": "AD B Vol 1, para 3.39",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Two interlocked stairs count as alternative escape routes.",
      "a": false,
      "x": "Interlocked stairs are a single escape route.",
      "r": "AD B Vol 1, para 3.31",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s3c",
    "name": "Smoke control, stairs and lighting",
    "sec": "Section 3 · Smoke control, stairs, doors and lighting",
    "page": 30,
    "intro": "Common corridors and lobbies in flats need smoke vents, either on the external wall or into a smoke shaft. Escape stairs have minimum widths, external stairs have height limits, and escape routes need lighting that keeps working when the power fails.",
    "watch": [
     "Firefighting stairs, and common stairs in blocks with a storey of 18m or more, must be at least 1100mm wide.",
     "Doors must open in the direction of escape where more than 60 people might use them.",
     "A single step on an escape route must be clearly marked."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Natural smoke vent on an external wall of a common corridor: minimum free area?",
      "a": [
       "1.5"
      ],
      "u": "m²",
      "x": "The top edge should be at least as high as the top of the stair door.",
      "r": "AD B Vol 1, para 3.55(a)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A natural smoke shaft needs a minimum cross-section of…",
      "o": [
       "1.5m², at least 0.85m in each direction",
       "1m², at least 0.5m",
       "2m², at least 1m",
       "0.4m²"
      ],
      "x": "It also extends at least 2.5m above the highest storey ceiling.",
      "r": "AD B Vol 1, para 3.55(b)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Vent at the top of a common stair: minimum free area?",
      "a": [
       "1"
      ],
      "u": "m²",
      "x": "A vent to the outside from the top storey of the stair.",
      "r": "AD B Vol 1, para 3.56",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Firefighting stairs, and common stairs in blocks with a storey 18m or more, must be at least how wide?",
      "a": [
       "1100"
      ],
      "u": "mm",
      "x": "Measured between walls or balustrades; handrails up to 100mm each side can be ignored.",
      "r": "AD B Vol 1, para 3.63",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "A single external access stair is allowed if the storey it serves is no more than how many metres above ground?",
      "a": [
       "6"
      ],
      "u": "m",
      "x": "And it meets the protection rules in para 3.71.",
      "r": "AD B Vol 1, para 3.69",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Escape doors should open in the direction of escape when used by more than how many people?",
      "o": [
       "60",
       "30",
       "100",
       "10"
      ],
      "x": "And wherever reasonably practicable.",
      "r": "AD B Vol 1, para 3.97",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Escape route doors should open to at least how many degrees?",
      "a": [
       "90"
      ],
      "u": "°",
      "x": "The swing mustn’t reduce the effective width of a landing.",
      "r": "AD B Vol 1, para 3.98",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s4",
    "name": "Wall and ceiling linings",
    "sec": "Section 4 · Internal linings (B2)",
    "page": 44,
    "intro": "B2 controls how fast flame spreads across wall and ceiling surfaces — most critically in circulation spaces. Table 4.1 sets a minimum reaction-to-fire class depending on the room.",
    "watch": [
     "Doors, frames, skirtings, architraves and fitted furniture don’t count as \"walls\" for linings.",
     "Part of a wall can be lower performance (no worse than D-s3, d2), up to half the floor area and 20m² of wall.",
     "Plastic rooflights and diffusers have their own limits on size and spacing."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Minimum lining class in the common areas of a block of flats?",
      "o": [
       "B-s3, d2",
       "C-s3, d2",
       "D-s3, d2",
       "A1"
      ],
      "x": "Other circulation spaces, including common areas of flats: B-s3, d2.",
      "r": "AD B Vol 1, Table 4.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Minimum lining class for a small room of up to 4m²?",
      "o": [
       "D-s3, d2",
       "B-s3, d2",
       "C-s3, d2",
       "A2-s1, d0"
      ],
      "x": "Small rooms can use the lowest class in Table 4.1.",
      "r": "AD B Vol 1, Table 4.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Minimum lining class for an ordinary room (not small)?",
      "o": [
       "C-s3, d2",
       "D-s3, d2",
       "B-s3, d2",
       "A2-s3, d2"
      ],
      "x": "Other rooms, including garages: C-s3, d2.",
      "r": "AD B Vol 1, Table 4.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Skirting boards and door frames count as part of the wall for lining classification.",
      "a": false,
      "x": "They’re specifically excluded.",
      "r": "AD B Vol 1, para 4.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A sloping ceiling counts as a \"wall\" for linings when it’s at more than what angle to horizontal?",
      "o": [
       "70°",
       "45°",
       "30°",
       "60°"
      ],
      "x": "At 70° or less it counts as a ceiling.",
      "r": "AD B Vol 1, paras 4.2 and 4.5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s5",
    "name": "Houses: structure and garages",
    "sec": "Section 5 · Internal fire spread, dwellinghouses (B3)",
    "page": 51,
    "intro": "Section 5 covers loadbearing elements, separating walls between houses, integral garages and cavities in houses. Semi-detached and terraced houses are separate buildings, so every separating wall is a compartment wall that runs to the underside of the roof.",
    "watch": [
     "The lowest floor, and roofs that only support a roof, don’t need fire resistance.",
     "Don’t finish a compartment wall line with cavity barriers above it — take the wall up to the roof.",
     "Up to two meter cupboards can sit in a cavity wall without extra cavity barriers, within size limits."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "A door between a house and its integral garage should be…",
      "o": [
       "E 30 S, self-closing",
       "E 20, no closer needed",
       "E 60",
       "Any solid door"
      ],
      "x": "Table C1 item 11a: E 30 Sa (FD 30 S).",
      "r": "AD B Vol 1, para 5.7",
      "art": "firedoor",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Garage door option: the door opening threshold should be at least how far above the garage floor?",
      "a": [
       "100"
      ],
      "u": "mm",
      "x": "Or the garage floor should fall away from the door.",
      "r": "AD B Vol 1, para 5.7",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Wall and floor between a house and an integral garage should be at least…",
      "o": [
       "REI 30 (from the garage side)",
       "REI 60",
       "E 20",
       "No rating"
      ],
      "x": "Table B1 item 10.",
      "r": "AD B Vol 1, para 5.6",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Roof covering near a separating wall: how wide is the BROOF(t4) zone each side of the wall?",
      "a": [
       "1500"
      ],
      "u": "mm",
      "x": "On a substrate of A2-s3, d2 or better.",
      "r": "AD B Vol 1, para 5.12",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "If the wall instead goes through the roof, how far above the roof covering must it project where roof heights differ by less than 375mm?",
      "o": [
       "375mm",
       "200mm",
       "100mm",
       "500mm"
      ],
      "x": "200mm where the height difference is 375mm or more, or both roofs are BROOF(t4).",
      "r": "AD B Vol 1, para 5.15",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A cavity barrier must achieve at least…",
      "o": [
       "E 30 and I 15",
       "E 60 and I 60",
       "E 15 only",
       "E 20 and I 20"
      ],
      "x": "Tested from each side separately.",
      "r": "AD B Vol 1, para 5.20",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Timber at least 38mm thick can form a cavity barrier in a stud wall.",
      "a": true,
      "x": "Other options: 0.5mm steel, 12mm boards, or sleeved mineral wool.",
      "r": "AD B Vol 1, para 5.21",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s7",
    "name": "Flats: compartments and sprinklers",
    "sec": "Sections 6–7 · Loadbearing elements and compartmentation, flats",
    "page": 58,
    "intro": "In flats, every floor between dwellings and every wall separating a flat from another part of the building is a compartment wall or floor. Blocks with a top storey more than 11m above ground need sprinklers throughout the flats.",
    "watch": [
     "Sprinklers go in the flats — not in fire-sterile common stairs, corridors or landings.",
     "Protected shafts are only for stairs, lifts, chutes, ducts and pipes (and sanitary accommodation).",
     "Converted buildings of up to three storeys may be accepted at REI 30 if escape meets Section 3."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Blocks of flats need sprinklers when the top storey is more than how many metres above ground?",
      "a": [
       "11"
      ],
      "u": "m",
      "x": "Reduced from 30m in 2020.",
      "r": "AD B Vol 1, para 7.4",
      "art": "height",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Where sprinklers are needed, they must also cover fire-sterile common stairs and corridors.",
      "a": false,
      "x": "They’re needed in the flats, not in fire-sterile common areas.",
      "r": "AD B Vol 1, para 7.4 note",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Which must be a compartment wall?",
      "o": [
       "Any wall separating a flat from another part of the building",
       "Walls between bedrooms in the same flat",
       "Kitchen walls inside a flat",
       "Cupboard walls"
      ],
      "x": "Also every floor (except within one dwelling) and walls enclosing refuse stores.",
      "r": "AD B Vol 1, para 7.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Uninsulated glazed screens between a protected stair and its lobby are allowed if the screen achieves…",
      "o": [
       "E 30, and the stair needs no more than REI 60",
       "E 60 with insulation",
       "E 15",
       "Any glazing"
      ],
      "x": "The lobby or corridor must also be REI 30.",
      "r": "AD B Vol 1, para 7.24",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "For compartment walls under floors, allow for a floor deflection in fire of…",
      "o": [
       "40mm in the middle half of the span",
       "10mm",
       "100mm",
       "No allowance needed"
      ],
      "x": "Tapering to zero at the supports.",
      "r": "AD B Vol 1, para 7.14",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "A protected stairway shaft can contain a ventilating duct serving other parts of the building.",
      "a": false,
      "x": "Only a pressurisation duct or one ventilating just the stair.",
      "r": "AD B Vol 1, para 7.26",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s9",
    "name": "Cavities, pipes and fire-stopping",
    "sec": "Sections 8–9 · Cavities, openings and fire-stopping",
    "page": 66,
    "intro": "Concealed cavities let fire spread unseen, so cavity barriers divide them and close their edges. Every pipe, duct or joint passing through a fire-separating element needs fire-stopping, and pipe sizes are limited unless you use a tested seal or sleeve.",
    "watch": [
     "Kitchen extract ducts can’t rely on thermally activated dampers (grease build-up).",
     "Fire-stopping over 100mm unsupported span needs reinforcing with A2-s3, d2 material.",
     "A flue wall needs at least half the fire resistance of the compartment wall it passes through."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Pipes through a fire-separating element can use proprietary seals, a restricted diameter, or…",
      "o": [
       "A high-melting-point metal sleeve",
       "Expanding foam only",
       "Gaffer tape",
       "Nothing, if the pipe is plastic"
      ],
      "x": "Alternatives A, B and C in paras 9.3–9.5.",
      "r": "AD B Vol 1, para 9.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "A \"high-melting-point metal\" doesn’t soften or fracture at what temperature?",
      "a": [
       "800"
      ],
      "u": "°C",
      "x": "Used for sleeves and in Table 9.1 column (a).",
      "r": "AD B Vol 1, para 9.5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Restricted diameter: maximum nominal internal diameter for a uPVC branch pipe through a wall between flats?",
      "a": [
       "110"
      ],
      "u": "mm",
      "x": "Stack pipes can be 160mm if the drainage is enclosed as in Diagram 9.1.",
      "r": "AD B Vol 1, Table 9.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Fire dampers should achieve at least…",
      "o": [
       "E 60, or match the element if higher",
       "E 15",
       "E 30 only",
       "No rating"
      ],
      "x": "Fire and smoke dampers: ES 60 minimum.",
      "r": "AD B Vol 1, paras 9.20–9.21",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Fire-stopping needs reinforcing where the unsupported span is more than how many mm?",
      "a": [
       "100"
      ],
      "u": "mm",
      "x": "With A2-s3, d2 or better material.",
      "r": "AD B Vol 1, para 9.25",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "In flats, cavity barriers aren’t needed in double-skinned roof sheeting if the insulation touches both skins and the materials meet the set classes.",
      "a": true,
      "x": "Diagram 8.4 arrangement A.",
      "r": "AD B Vol 1, para 8.7",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s10",
    "name": "External walls and Regulation 7",
    "sec": "Section 10 · External walls (B4) and Regulation 7",
    "page": 77,
    "intro": "External walls must not help fire spread up or across the building. Regulation 7(2) bans combustible materials in external walls and specified attachments of \"relevant buildings\" — those with a storey 18m or more above ground containing dwellings, an institution or rooms for residential purposes. Table 10.1 sets surface classes for everything else.",
    "watch": [
     "Metal composite panels with a polyethylene-type core are banned on buildings of any height.",
     "Window frames, glass, door frames, seals, membranes and thermal breaks are among the Regulation 7(3) exemptions.",
     "Solar shading up to 4.5m above ground is exempt from Regulation 7(2)."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Materials in the external wall of a relevant building must be…",
      "o": [
       "A2-s1, d0 or A1",
       "B-s3, d2",
       "C-s3, d2",
       "Any class with sprinklers"
      ],
      "x": "Subject to the Regulation 7(3) exemptions.",
      "r": "AD B Vol 1, Regulation 7(2)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "A \"relevant building\" has a storey at least how many metres above ground?",
      "a": [
       "18"
      ],
      "u": "m",
      "x": "Containing dwellings, an institution, or rooms for residential purposes.",
      "r": "AD B Vol 1, Regulation 7(4)",
      "art": "height",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Residential building over 11m (not a relevant building): external surface class?",
      "o": [
       "A2-s1, d0 or better",
       "B-s3, d2",
       "C-s3, d2",
       "No provision"
      ],
      "x": "At 11m or less: B-s3, d2 within 1000mm of the boundary.",
      "r": "AD B Vol 1, Table 10.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Residential buildings with a storey of 11m or more: insulation and filler materials in the external wall should be…",
      "o": [
       "A2-s1, d0 or better",
       "B-s3, d2",
       "Any class",
       "A2-s3, d2"
      ],
      "x": "Masonry cavity walls meeting Diagram 8.2 are exempt.",
      "r": "AD B Vol 1, para 10.7",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Balconies on residential buildings of 11m or more can use an REI 30, A2-s1, d0 imperforate soffit as an alternative to all non-combustible materials.",
      "a": true,
      "x": "Option (b) in para 10.10.",
      "r": "AD B Vol 1, para 10.10",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Which is exempt from Regulation 7(2)?",
      "o": [
       "Window frames and glass",
       "Spandrel panels",
       "Insulation",
       "Cladding"
      ],
      "x": "Spandrel and infill panels must comply.",
      "r": "AD B Vol 1, Regulation 7(3)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Timber cladding of at least 9mm thickness can meet a C-s3, d2 requirement in Table 10.1.",
      "a": true,
      "x": "Note 3 to Table 10.1.",
      "r": "AD B Vol 1, Table 10.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s11",
    "name": "Space separation and roofs",
    "sec": "Sections 11–12 · Fire spread between buildings and roof coverings",
    "page": 85,
    "intro": "Openings and other \"unprotected areas\" in an external wall let heat radiate to the next building. The closer you are to the relevant boundary, the less unprotected area you’re allowed. Roof coverings are graded from BROOF(t4) (best) to FROOF(t4) by distance from the boundary.",
    "watch": [
     "Walls within 1000mm of the boundary must be fire resisting from both sides, with only small unprotected areas.",
     "Sprinklers let you halve the boundary distance (minimum 1m) or double the unprotected area.",
     "The relevant boundary can be the centre line of a road, railway, canal or river."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Method 1 (small houses and flats): at 1m from the boundary, maximum total unprotected area?",
      "o": [
       "5.6m²",
       "12m²",
       "1m²",
       "No limit"
      ],
      "x": "2m → 12m², 3m → 18m², 4m → 24m², 5m → 30m², 6m → no limit.",
      "r": "AD B Vol 1, Diagram 11.7",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Method 1: at what distance from the boundary is there no limit on unprotected area?",
      "a": [
       "6"
      ],
      "u": "m",
      "x": "Method 1 applies to buildings of up to three storeys or 24m long.",
      "r": "AD B Vol 1, Diagram 11.7",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "With sprinklers throughout, you can…",
      "o": [
       "Halve the boundary distance (minimum 1m) or double the unprotected area",
       "Ignore the boundary completely",
       "Add 50% more glazing only",
       "Nothing changes"
      ],
      "x": "Para 11.21.",
      "r": "AD B Vol 1, para 11.21",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Small unprotected areas can be ignored if, for example, each is up to 1m² and they’re at least how far apart?",
      "o": [
       "4000mm",
       "1000mm",
       "500mm",
       "10m"
      ],
      "x": "Diagram 11.5 sets the limits.",
      "r": "AD B Vol 1, Diagram 11.5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Which roof covering class is best?",
      "o": [
       "BROOF(t4)",
       "FROOF(t4)",
       "DROOF(t4)",
       "EROOF(t4)"
      ],
      "x": "B is the highest; F the lowest.",
      "r": "AD B Vol 1, Appendix B",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Plastic rooflights: maximum area of each rooflight (or group)?",
      "a": [
       "5"
      ],
      "u": "m²",
      "x": "At least 3m apart in any direction.",
      "r": "AD B Vol 1, Diagram 12.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Unwired glass at least 4mm thick in a rooflight can be regarded as BROOF(t4).",
      "a": true,
      "x": "Para 12.8.",
      "r": "AD B Vol 1, para 12.8",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s13",
    "name": "Fire service access and water",
    "sec": "Sections 13–14 · Vehicle access, fire mains and hydrants",
    "page": 99,
    "intro": "Fire engines must be able to get close enough to every dwelling, and taller blocks need fire mains so hoses can reach upper floors. Where there isn’t a hydrant nearby, private hydrants or a 45,000-litre water supply may be needed.",
    "watch": [
     "Fire vehicles shouldn’t have to reverse more than 20m — longer dead ends need a turning facility.",
     "Flats without fire mains need doors at least 750mm wide, no more than 60m apart along the elevation.",
     "Wet mains are needed above 50m; otherwise mains can be wet or dry."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Pump appliance access must reach within how many metres of all points inside a house?",
      "a": [
       "45"
      ],
      "u": "m",
      "x": "Every elevation with vehicle access needs a door at least 750mm wide.",
      "r": "AD B Vol 1, para 13.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Dead-end access routes longer than how many metres need turning facilities?",
      "a": [
       "20"
      ],
      "u": "m",
      "x": "Fire vehicles shouldn’t reverse more than 20m.",
      "r": "AD B Vol 1, para 13.4",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Typical access road width between kerbs for a pump appliance?",
      "o": [
       "3.7m",
       "2.5m",
       "5m",
       "3.1m"
      ],
      "x": "Gateways 3.1m; clearance height 3.7m; 12.5 tonnes carrying capacity.",
      "r": "AD B Vol 1, Table 13.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Dry fire main: the pump appliance must be within how many metres of each inlet?",
      "a": [
       "18"
      ],
      "u": "m",
      "x": "And the inlet must be visible from the parking position.",
      "r": "AD B Vol 1, para 13.5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Wet fire mains are needed when a storey is more than how many metres above fire service vehicle access level?",
      "a": [
       "50"
      ],
      "u": "m",
      "x": "Below that, wet or dry is fine.",
      "r": "AD B Vol 1, para 14.6",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Private hydrants should be within how far of a dry main inlet?",
      "o": [
       "90m",
       "45m",
       "18m",
       "150m"
      ],
      "x": "Without mains: within 90m of an entrance and no more than 90m apart.",
      "r": "AD B Vol 1, para 14.9",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "An alternative water supply such as a static tank should hold at least how many litres?",
      "a": [
       "45000"
      ],
      "u": "litres",
      "x": "Subject to consultation with the fire and rescue service.",
      "r": "AD B Vol 1, para 14.13",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s15",
    "name": "Firefighting shafts and wayfinding",
    "sec": "Sections 15–16 · Firefighting access and basement venting",
    "page": 103,
    "intro": "Tall blocks need firefighting shafts — a protected stair, a firefighting lift and lobbies — so firefighters can work safely from inside. Blocks over 11m also need wayfinding signs and a secure information box; over 18m, an evacuation alert system. Basements need smoke outlets.",
    "watch": [
     "Hose distance from a fire main outlet in a firefighting shaft: maximum 60m.",
     "Lift landing doors no more than 7.5m from the firefighting stair door.",
     "Basements of up to 200m² that are no more than 3m below ground don’t need smoke outlets."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Firefighting shafts (with a firefighting lift) are needed when a storey is more than how many metres above fire service access level?",
      "a": [
       "18"
      ],
      "u": "m",
      "x": "Or a basement more than 10m below access level.",
      "r": "AD B Vol 1, para 15.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Fire resistance of a firefighting shaft in a block of flats?",
      "o": [
       "REI 60 from both sides, with E 30 S doors",
       "REI 120 from the accommodation side",
       "REI 30",
       "E 20"
      ],
      "x": "Other buildings: REI 120 from the accommodation side.",
      "r": "AD B Vol 1, Diagram 15.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Wayfinding floor numbers on stair landings must be at least how tall?",
      "o": [
       "75mm (letters at least 50mm)",
       "25mm",
       "150mm",
       "300mm"
      ],
      "x": "Mounted 1.7m to 2m above floor level.",
      "r": "AD B Vol 1, para 15.14",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Evacuation alert systems (BS 8629) are needed in blocks of flats with a top storey…",
      "o": [
       "Over 18m above ground",
       "Over 11m",
       "Over 30m",
       "Over 4.5m"
      ],
      "x": "Lets the fire service alert residents to evacuate.",
      "r": "AD B Vol 1, para 15.17",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A secure information box is needed in blocks of flats with a top storey…",
      "o": [
       "More than 11m above ground",
       "More than 18m",
       "More than 30m",
       "In every block"
      ],
      "x": "It should be easy to find, secure, and protected from the weather.",
      "r": "AD B Vol 1, para 15.19",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Basement smoke outlets: combined clear area at least…",
      "o": [
       "1/40 of the storey floor area",
       "1/10 of the floor area",
       "1m² per storey",
       "1/100 of the floor area"
      ],
      "x": "Sited high and spread around the perimeter.",
      "r": "AD B Vol 1, para 16.6",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "Mechanical smoke extraction from a sprinklered basement: at least how many air changes per hour?",
      "a": [
       "10"
      ],
      "u": "ach",
      "x": "Rated for 300°C gas for at least one hour.",
      "r": "AD B Vol 1, para 16.12",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b1s17",
    "name": "Fire resistance, doors and handover",
    "sec": "Section 17 and Appendices B–D",
    "page": 112,
    "intro": "Appendix B sets fire resistance periods (Table B2) and specific provisions (Table B1). Appendix C sets fire door ratings (Table C1). Regulation 38 and Section 17 require fire safety information to be handed to the responsible person at completion or occupation.",
    "watch": [
     "Doors within flats and houses don’t need self-closers, or \"Fire door keep shut\" signs.",
     "Unsprinklered blocks of flats over 11m are \"not permitted\" in Table B2.",
     "Building height for these rules is measured to the top floor surface from the lowest ground level, excluding roof plant."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Flat entrance door onto a common corridor should be at least…",
      "o": [
       "E 30 Sa (FD 30 S)",
       "E 20",
       "E 60",
       "No rating"
      ],
      "x": "Table C1 item 2a.",
      "r": "AD B Vol 1, Table C1",
      "art": "firedoor",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Table B2: minimum fire resistance for a block of flats with top floor up to 11m?",
      "o": [
       "60 minutes",
       "30 minutes",
       "90 minutes",
       "120 minutes"
      ],
      "x": "With sprinklers: 60 min up to 18m, 90 min up to 30m, 120 min above.",
      "r": "AD B Vol 1, Table B2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Table B2 permits an unsprinklered block of flats with a top floor between 11m and 18m.",
      "a": false,
      "x": "It’s marked \"not permitted\" — sprinklers are needed above 11m.",
      "r": "AD B Vol 1, Table B2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Which doors don’t need self-closing devices?",
      "o": [
       "Doors within flats and dwellinghouses",
       "Flat entrance doors",
       "Doors onto protected stairs in flats",
       "Garage-to-house doors"
      ],
      "x": "Also cupboard and service duct doors kept locked shut.",
      "r": "AD B Vol 1, Appendix C, para C5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Under Regulation 38, fire safety information goes to the responsible person…",
      "o": [
       "By completion or first occupation, whichever is earlier",
       "Within a year of completion",
       "Only if they ask",
       "Before planning permission"
      ],
      "x": "They must confirm they’ve received it and that it’s enough.",
      "r": "AD B Vol 1, Regulation 38",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "num",
      "q": "A \"basement storey\" has its floor more than how many mm below the highest adjacent ground level?",
      "a": [
       "1200"
      ],
      "u": "mm",
      "x": "Appendix A key terms.",
      "r": "AD B Vol 1, Appendix A",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Fire resistance letters: what does \"E\" mean?",
      "o": [
       "Integrity",
       "Insulation",
       "Loadbearing capacity",
       "Escape"
      ],
      "x": "R = loadbearing, E = integrity, I = insulation.",
      "r": "AD B Vol 1, Appendix B",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
     }
    ],
    "vol": 1,
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "id": "b2s0",
    "vol": 2,
    "name": "Purpose groups and alarms",
    "sec": "Vol 2 Sections 0–1 · Purpose groups, fire detection and alarms",
    "page": 5,
    "intro": "Volume 2 covers every building that isn’t a dwelling. Buildings are sorted into purpose groups — 2(a) institutional, 2(b) other residential, 3 office, 4 shop and commercial, 5 assembly and recreation, 6 industrial, 7(a) storage and 7(b) car parks — and much of the guidance changes by group. Alarm systems follow BS 5839-1.",
    "watch": [
     "An ancillary use needs its own purpose group if the building or compartment is over 280m² and the use takes more than a fifth of the floor area (a third for storage in shops).",
     "Hospitals follow Firecode, schools Building Bulletin 100, and prisons are largely exempt from B1–B5.",
     "Student flats sharing a flat (up to six students, own entrance door) can have separate detection per flat."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "A hotel is in which purpose group?",
      "o": [
       "2(b) Residential (other)",
       "2(a) Residential (institutional)",
       "4 Shop and commercial",
       "5 Assembly and recreation"
      ],
      "x": "2(b) also covers boarding houses, halls of residence and hostels.",
      "r": "AD B Vol 2, Table 0.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A hospital or care home is in which purpose group?",
      "o": [
       "2(a) Residential (institutional)",
       "2(b) Residential (other)",
       "3 Office",
       "5 Assembly and recreation"
      ],
      "x": "2(a) is for places where people sleep and may need help, including schools with sleeping accommodation.",
      "r": "AD B Vol 2, Table 0.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Purpose group 7(b) car parks are for vehicles up to what gross weight?",
      "o": [
       "2500kg",
       "3500kg",
       "7500kg",
       "1500kg"
      ],
      "x": "Cars, motorcycles and light vehicles.",
      "r": "AD B Vol 2, Table 0.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Automatic fire detection and alarms are required in purpose groups 2(a) and 2(b).",
      "a": true,
      "x": "Residential buildings other than dwellings.",
      "r": "AD B Vol 2, para 1.4",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "BS 5839-1 alarm categories are…",
      "o": [
       "L (life), M (manual) and P (property)",
       "A, B and C",
       "LD1 to LD3",
       "Grade A to F"
      ],
      "x": "L1–L5 and P1–P2 sub-categories. LD grades are for dwellings (BS 5839-6).",
      "r": "AD B Vol 2, paras 1.8–1.9",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "A voice alarm (BS 5839-8) may be considered where people are unfamiliar with the building’s warnings.",
      "a": true,
      "x": "Useful where people may not respond quickly to a bell or sounder.",
      "r": "AD B Vol 2, para 1.11",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s2a",
    "vol": 2,
    "name": "Travel distances and number of exits",
    "sec": "Vol 2 Section 2 · Horizontal escape (part 1)",
    "page": 12,
    "intro": "Horizontal escape is about getting from any point on a storey to a storey exit. Table 2.1 limits travel distance by purpose group and whether escape is possible in one direction or more. Table 2.2 sets how many exits a room or storey needs based on how many people use it.",
    "watch": [
     "If the layout isn’t known yet, assume direct distance is two-thirds of travel distance.",
     "Alternative routes need to be at least 45° apart — or separated by fire-resisting construction.",
     "Keep escape routes at least 4.5m from openings between floors, unless travel is away from the opening."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Office: maximum travel distance where escape is possible in more than one direction?",
      "o": [
       "45m",
       "18m",
       "30m",
       "60m"
      ],
      "x": "One direction only: 18m. Shops have the same limits.",
      "r": "AD B Vol 2, Table 2.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Office or shop: maximum travel distance in one direction only?",
      "a": [
       "18"
      ],
      "u": "m",
      "x": "Two or more directions: 45m.",
      "r": "AD B Vol 2, Table 2.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Assembly areas with seating in rows: maximum travel distance in one direction?",
      "o": [
       "15m",
       "18m",
       "9m",
       "25m"
      ],
      "x": "More than one direction: 32m.",
      "r": "AD B Vol 2, Table 2.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Residential (institutional) buildings such as care homes: travel distance limits?",
      "o": [
       "9m one direction, 18m more than one",
       "18m and 45m",
       "25m and 45m",
       "15m and 32m"
      ],
      "x": "Some of the tightest limits in the table.",
      "r": "AD B Vol 2, Table 2.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Industrial, normal hazard: travel distance limits?",
      "o": [
       "25m one direction, 45m more than one",
       "12m and 25m",
       "18m and 45m",
       "9m and 18m"
      ],
      "x": "Higher hazard industrial: 12m and 25m.",
      "r": "AD B Vol 2, Table 2.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A room or storey for up to how many people can have a single exit?",
      "o": [
       "60",
       "30",
       "100",
       "600"
      ],
      "x": "Up to 600: two exits. More than 600: three.",
      "r": "AD B Vol 2, Table 2.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "More than how many people need at least three exits?",
      "a": [
       "600"
      ],
      "u": "people",
      "x": "61 to 600 need two.",
      "r": "AD B Vol 2, Table 2.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "An inner room can be a bedroom.",
      "a": false,
      "x": "Inner rooms can’t be bedrooms, and need detection, a vision panel or a partition stopping 500mm below the ceiling.",
      "r": "AD B Vol 2, para 2.11",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s2b",
    "vol": 2,
    "name": "Exit widths and corridors",
    "sec": "Vol 2 Section 2 · Horizontal escape (part 2)",
    "page": 18,
    "intro": "Exits must be wide enough for the people using them (Table 2.3), and you assume the largest exit is blocked by fire. Corridors serving bedrooms, dead ends and shared corridors must be protected, and long corridors are split by fire doors so smoke can’t fill them end to end.",
    "watch": [
     "Don’t interpolate widths below 1050mm — use the table bands.",
     "Gangways between fixed storage racking can drop to 530mm, but not in public areas of shops.",
     "Recesses and extensions up to 2m deep don’t count as dead ends."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Minimum width of an escape route or exit for up to 60 people?",
      "a": [
       "750"
      ],
      "u": "mm",
      "x": "Approved Document M may require more.",
      "r": "AD B Vol 2, Table 2.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Minimum width for up to 110 people?",
      "o": [
       "850mm",
       "750mm",
       "1050mm",
       "1000mm"
      ],
      "x": "Up to 220 people: 1050mm.",
      "r": "AD B Vol 2, Table 2.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Minimum width for up to 220 people?",
      "a": [
       "1050"
      ],
      "u": "mm",
      "x": "Above 220: 5mm per person.",
      "r": "AD B Vol 2, Table 2.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Above 220 people, exit width is calculated at…",
      "o": [
       "5mm per person",
       "3mm per person",
       "10mm per person",
       "1mm per person"
      ],
      "x": "Doesn’t apply to an opening serving fewer than 220 people.",
      "r": "AD B Vol 2, Table 2.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "When totalling exit capacity, you discount the largest exit.",
      "a": true,
      "x": "It’s assumed to be blocked by fire.",
      "r": "AD B Vol 2, para 2.21",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Corridors connecting two or more storey exits should be divided by fire doors when longer than how many metres?",
      "a": [
       "12"
      ],
      "u": "m",
      "x": "Roughly midway along.",
      "r": "AD B Vol 2, para 2.26",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Dead-end corridors longer than how many metres need self-closing fire doors (or pressurisation)?",
      "a": [
       "4.5"
      ],
      "u": "m",
      "x": "To stop smoke trapping people at the dead end.",
      "r": "AD B Vol 2, para 2.28",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "An external wall beside an external escape route must be fire-resisting within…",
      "o": [
       "1800mm of the route and up to 1100mm above it",
       "1m of the route",
       "3m of the route",
       "The whole wall"
      ],
      "x": "Doesn’t apply to external escape stairs, which have their own rule.",
      "r": "AD B Vol 2, para 2.30",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s2c",
    "vol": 2,
    "name": "Residential care homes",
    "sec": "Vol 2 Section 2 · Residential care homes",
    "page": 25,
    "intro": "Care homes for elderly people generally use progressive horizontal evacuation: residents are moved sideways into the next protected area rather than straight outside. Each storey is split into protected areas, bedrooms are fire-resisting, and the whole building is sprinklered.",
    "watch": [
     "A receiving protected area must hold its own occupants plus those from the largest adjoining area.",
     "No more than one single or double bed per bedroom.",
     "Ancillary rooms like kitchens, laundries and stores are enclosed in REI 30."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Care homes for elderly people should generally use…",
      "o": [
       "Progressive horizontal evacuation",
       "Simultaneous evacuation",
       "Stay put",
       "Phased evacuation by floor"
      ],
      "x": "Moving residents horizontally to the next protected area.",
      "r": "AD B Vol 2, para 2.34",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Each care storey should have at least how many protected areas?",
      "a": [
       "3"
      ],
      "u": "areas",
      "x": "Each with at least two exits to adjoining areas.",
      "r": "AD B Vol 2, para 2.36",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Maximum number of residents’ beds in one protected area?",
      "a": [
       "10"
      ],
      "u": "beds",
      "x": "Possibly fewer after assessment.",
      "r": "AD B Vol 2, para 2.39",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Maximum travel distance from any point to a storey exit or final exit in a care home?",
      "a": [
       "64"
      ],
      "u": "m",
      "x": "Travel to an adjoining protected area exit follows Table 2.1.",
      "r": "AD B Vol 2, para 2.37",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Fire detection and alarm in a care home should be…",
      "o": [
       "L1 to BS 5839-1",
       "L3",
       "M only",
       "LD3"
      ],
      "x": "Full coverage.",
      "r": "AD B Vol 2, para 2.41",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Care home bedrooms should be enclosed in…",
      "o": [
       "REI 30 construction with E 30 doors",
       "REI 60 with E 60 doors",
       "No fire resistance",
       "E 20 doors only"
      ],
      "x": "Corridors serving bedrooms must be protected.",
      "r": "AD B Vol 2, para 2.42",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "New care homes need sprinklers throughout.",
      "a": true,
      "x": "Since the 2025 amendments, to Appendix E.",
      "r": "AD B Vol 2, para 2.46",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s3a",
    "vol": 2,
    "name": "Escape stairs and refuges",
    "sec": "Vol 2 Section 3 · Vertical escape (stairs, refuges, widths)",
    "page": 28,
    "intro": "Most buildings need more than one escape stair. Single stairs are allowed only in set cases, such as buildings with no storey above 11m that only need a single route. Every protected stair needs a refuge on each storey for people who can’t use stairs, and Table 3.1 sets minimum stair widths.",
    "watch": [
     "Stairs over 30m high shouldn’t be wider than 1400mm unless there’s a central handrail.",
     "Public stairs wider than 2000mm need a central handrail.",
     "When there are two or more stairs, each is discounted in turn — unless they’re lobbied or have smoke control."
    ],
    "qs": [
     {
      "t": "num",
      "q": "A single escape stair is allowed in a building with no storey floor more than how many metres above ground (where one route per storey is enough)?",
      "a": [
       "11"
      ],
      "u": "m",
      "x": "Other cases include small premises and some offices.",
      "r": "AD B Vol 2, para 3.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "An office can have a single stair if it has no more than…",
      "o": [
       "Five storeys above ground, within one-direction travel limits",
       "Ten storeys",
       "Two storeys",
       "Any height with sprinklers"
      ],
      "x": "And an alternative means of escape from every storey above 11m.",
      "r": "AD B Vol 2, para 3.3(e)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Minimum size of a refuge?",
      "o": [
       "900 × 1400mm",
       "800 × 1200mm",
       "1000 × 1500mm",
       "1500 × 1500mm"
      ],
      "x": "Accessible by wheelchair, and not reducing the escape route width.",
      "r": "AD B Vol 2, para 3.6",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Refuges should be signed…",
      "o": [
       "\"Refuge – keep clear\" (blue mandatory sign)",
       "\"Fire exit\"",
       "\"Assembly point\"",
       "\"Lift\""
      ],
      "x": "And have emergency voice communication to BS 5839-9.",
      "r": "AD B Vol 2, paras 3.7–3.8",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Minimum width of a stair serving up to 50 people (not otherwise described)?",
      "o": [
       "800mm",
       "1000mm",
       "1100mm",
       "750mm"
      ],
      "x": "May need to be 1000mm under Approved Document M.",
      "r": "AD B Vol 2, Table 3.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A stair serving an assembly area (up to 220 people) should be at least…",
      "o": [
       "1100mm wide",
       "1000mm wide",
       "800mm wide",
       "1200mm wide"
      ],
      "x": "Unless the area is under 100m².",
      "r": "AD B Vol 2, Table 3.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Stairs over 30m high shouldn’t be wider than how many mm without a central handrail?",
      "a": [
       "1400"
      ],
      "u": "mm",
      "x": "Public stairs over 2000mm wide always need one.",
      "r": "AD B Vol 2, para 3.10",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s3b",
    "vol": 2,
    "name": "Stair capacity and phased evacuation",
    "sec": "Vol 2 Section 3 · Stair capacity, phased evacuation and stair protection",
    "page": 31,
    "intro": "For simultaneous evacuation, Table 3.2 gives how many people a stair can take for its width and the floors it serves. Phased evacuation lets you size stairs by the busiest single storey instead (Table 3.3), but needs lobbies, compartment floors, voice communication and — above 30m — sprinklers.",
    "watch": [
     "Above 30m, consult the fire and rescue service on phased evacuation; above 45m a stair may need discounting.",
     "Protected lobbies are needed for single stairs, stairs serving storeys 18m or more, phased evacuation and firefighting stairs (except at the top storey).",
     "A protected stairway can contain toilets, a lift well or a small reception desk (up to 10m²) — not much else."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Table 3.2: a 1000mm stair serving one floor can take how many people?",
      "o": [
       "150",
       "220",
       "100",
       "300"
      ],
      "x": "An 1100mm stair serving one floor: 220.",
      "r": "AD B Vol 2, Table 3.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "For stairs 1100mm or wider, capacity can be calculated as…",
      "o": [
       "P = 200W + 50(W − 0.3)(N − 1)",
       "P = 100W × N",
       "P = W ÷ 5",
       "P = 150N"
      ],
      "x": "P people, W width in metres, N storeys served.",
      "r": "AD B Vol 2, para 3.18",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Phased evacuation: a stair of 1000mm suits up to how many people on the busiest storey?",
      "o": [
       "100",
       "150",
       "60",
       "200"
      ],
      "x": "Or use (P × 10) − 100mm, with a 1000mm minimum.",
      "r": "AD B Vol 2, Table 3.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Phased evacuation buildings with any storey over 30m need sprinklers throughout.",
      "a": true,
      "x": "Plus compartment floors, lobbies, an L3 alarm and voice communication.",
      "r": "AD B Vol 2, para 3.21",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "A protected lobby between a stair and a place of special fire hazard needs at least how much permanent ventilation?",
      "a": [
       "0.4"
      ],
      "u": "m²",
      "x": "Or mechanical smoke control.",
      "r": "AD B Vol 2, para 3.35",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "A reception desk in a protected stairway can be up to how many m²?",
      "a": [
       "10"
      ],
      "u": "m²",
      "x": "At ground or access level, and only if it isn’t the only stair.",
      "r": "AD B Vol 2, para 3.38",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "An escape stair that is the only route from upper storeys can continue down to serve the basement.",
      "a": false,
      "x": "The basement needs its own escape stair.",
      "r": "AD B Vol 2, para 3.40",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s4",
    "vol": 2,
    "name": "Small premises",
    "sec": "Vol 2 Section 4 · Small premises",
    "page": 42,
    "intro": "Small shops, offices and similar premises can use simpler escape rules: no more than a basement, ground and first storey, no storey over 280m², and a single occupier. Table 4.1 gives their travel distances, and open stairs are allowed under strict conditions.",
    "watch": [
     "Doesn’t apply where highly flammable materials are sold, stored or used.",
     "Kitchens and open cooking must be at the far end of any dead end, away from exits.",
     "Bars and restaurants are limited to 30 people per storey (100 on the ground storey with an independent exit)."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Small premises: no storey can exceed how many m²?",
      "a": [
       "280"
      ],
      "u": "m²",
      "x": "With no more than basement, ground and first storeys.",
      "r": "AD B Vol 2, para 4.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Small premises, ground storey with a single exit: maximum travel distance?",
      "a": [
       "27"
      ],
      "u": "m",
      "x": "Basement or first storey with a single stair: 18m.",
      "r": "AD B Vol 2, Table 4.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Small premises, storey with more than one exit or stair: maximum travel distance?",
      "a": [
       "45"
      ],
      "u": "m",
      "x": "Two exits must give alternative directions.",
      "r": "AD B Vol 2, Table 4.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "An open stair in small premises must enter the ground storey within how far of the final exit?",
      "o": [
       "3m",
       "6m",
       "10m",
       "18m"
      ],
      "x": "And connect no more than two storeys, and not be in a bar or restaurant.",
      "r": "AD B Vol 2, para 4.8",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "With a single open stair, each storey must be no larger than…",
      "o": [
       "90m²",
       "280m²",
       "50m²",
       "200m²"
      ],
      "x": "Unless the storey is also served by a protected stairway.",
      "r": "AD B Vol 2, para 4.8",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Store rooms in small premises should be enclosed in…",
      "o": [
       "REI 30",
       "REI 60",
       "E 20",
       "Nothing"
      ],
      "x": "Floor areas otherwise stay open so exits are visible.",
      "r": "AD B Vol 2, para 4.5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s5",
    "vol": 2,
    "name": "Doors, lighting, lifts and refuse",
    "sec": "Vol 2 Section 5 · General provisions",
    "page": 47,
    "intro": "Section 5 covers details that apply to every escape route: how doors fasten and swing, headroom, final exits, escape lighting and signs, protected power circuits, lifts, refuse chutes and shop store rooms.",
    "watch": [
     "Hotel bedroom locks that need a key from outside but open by hand from inside are fine.",
     "Electric locks must unlock on fire detection, power loss or a manual override.",
     "Escape lighting is also needed in toilets of 8m² or more and in plant, generator and switch rooms."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "In shops and assembly buildings, doors from rooms holding more than 60 people must…",
      "o": [
       "Have no locks, or panic fastenings to BS EN 1125",
       "Be revolving doors",
       "Be kept locked during opening hours",
       "Have keypad locks"
      ],
      "x": "Simple, one-action opening without a key.",
      "r": "AD B Vol 2, para 5.9",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Escape doors must open in the direction of escape when used by more than…",
      "o": [
       "60 people",
       "30 people",
       "100 people",
       "10 people"
      ],
      "x": "Or where there’s a very high fire risk.",
      "r": "AD B Vol 2, para 5.11",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Minimum clear headroom on escape routes?",
      "a": [
       "2"
      ],
      "u": "m",
      "x": "Only door frames can project below it.",
      "r": "AD B Vol 2, para 5.16",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Escape lighting is needed in internal corridors longer than…",
      "o": [
       "30m",
       "10m",
       "60m",
       "18m"
      ],
      "x": "Also in open-plan areas over 60m² and stairs serving storeys over 18m.",
      "r": "AD B Vol 2, Table 5.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Cables for fire safety systems should achieve at least…",
      "o": [
       "PH 30 (BS EN 50200)",
       "PH 15",
       "No rating",
       "E 120"
      ],
      "x": "Routed through negligible fire risk areas, separate from other circuits.",
      "r": "AD B Vol 2, para 5.30",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Refuse chutes and storage rooms need REI 60 separation when the top storey is more than…",
      "o": [
       "5m above ground",
       "11m above ground",
       "18m above ground",
       "30m above ground"
      ],
      "x": "REI 30 if the top storey is 5m or less.",
      "r": "AD B Vol 2, para 5.43",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Walk-in store rooms in shops need REI 30 separation unless fitted with detection or sprinklers.",
      "a": true,
      "x": "Where they could affect escape.",
      "r": "AD B Vol 2, para 5.46",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s6",
    "vol": 2,
    "name": "Wall and ceiling linings",
    "sec": "Vol 2 Section 6 · Internal linings (B2)",
    "page": 55,
    "intro": "Volume 2 uses the same idea as Volume 1 — slower flame spread where it matters most — but its \"small room\" limit is bigger for non-residential buildings, and more lower-performance wall area is allowed.",
    "watch": [
     "A small room is up to 4m² in residential buildings but up to 30m² in non-residential ones.",
     "Lower-performance wall linings (no worse than D-s3, d2) can cover up to 60m² in non-residential rooms (20m² residential).",
     "In kitchens and other high fire-risk areas, insulating core panels must be class A1 cored."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "In a non-residential building, a \"small room\" for linings can be up to…",
      "o": [
       "30m²",
       "4m²",
       "10m²",
       "60m²"
      ],
      "x": "Small rooms can use D-s3, d2 linings.",
      "r": "AD B Vol 2, Table 6.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Minimum lining class in circulation spaces?",
      "o": [
       "B-s3, d2",
       "C-s3, d2",
       "D-s3, d2",
       "A1"
      ],
      "x": "Other rooms: C-s3, d2.",
      "r": "AD B Vol 2, Table 6.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Non-residential room: maximum area of lower-performance wall lining?",
      "a": [
       "60"
      ],
      "u": "m²",
      "x": "And less than half the room’s floor area.",
      "r": "AD B Vol 2, para 6.4",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "In a commercial kitchen, internal insulating core panels can have any core material if the joints are sealed.",
      "a": false,
      "x": "High fire-risk areas need class A1 cored panels.",
      "r": "AD B Vol 2, para 6.11",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "TP(b) or D-s3, d2 rooflights in circulation spaces: maximum total as a share of floor area?",
      "o": [
       "15%",
       "50%",
       "5%",
       "No limit"
      ],
      "x": "Each up to 5m², at least 3m apart.",
      "r": "AD B Vol 2, Table 6.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s8",
    "vol": 2,
    "name": "Structure and compartmentation",
    "sec": "Vol 2 Sections 7–8 · Loadbearing elements and compartmentation",
    "page": 63,
    "intro": "Compartments stop a fire growing beyond a set size. Table 8.1 caps compartment floor areas by purpose group — offices have no limit, shops are capped unless sprinklered — and some floors must always be compartment floors, such as every floor in a building over 30m.",
    "watch": [
     "In residential buildings (2(a) and 2(b)), every floor is a compartment floor.",
     "A raised storage platform can have reduced fire resistance if it’s small, storage-only, one tier and not used by the public.",
     "Purpose groups 3 to 7(a) need sprinklers when the top storey is over 30m."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Maximum compartment floor area for an unsprinklered shop?",
      "o": [
       "2000m²",
       "4000m²",
       "7000m²",
       "No limit"
      ],
      "x": "4000m² with sprinklers.",
      "r": "AD B Vol 2, Table 8.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Maximum compartment size for an office?",
      "o": [
       "No limit",
       "2000m²",
       "4000m²",
       "7000m²"
      ],
      "x": "Offices have no limit in Table 8.1.",
      "r": "AD B Vol 2, Table 8.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Unsprinklered industrial building with top storey up to 18m: maximum compartment floor area?",
      "o": [
       "7000m²",
       "2000m²",
       "14,000m²",
       "20,000m²"
      ],
      "x": "14,000m² with sprinklers.",
      "r": "AD B Vol 2, Table 8.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Every floor must be a compartment floor when the top storey is more than…",
      "o": [
       "30m above ground",
       "18m above ground",
       "11m above ground",
       "45m above ground"
      ],
      "x": "Also the ground floor where there’s a basement, and basement floors where the basement is more than 10m deep.",
      "r": "AD B Vol 2, para 8.11",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Offices, shops and industrial buildings with a top storey over 30m need sprinklers.",
      "a": true,
      "x": "Purpose groups 3 to 7(a), except light-vehicle car parks.",
      "r": "AD B Vol 2, para 8.14",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A raised storage area can have reduced fire resistance if it’s no more than…",
      "o": [
       "10m wide or long (20m with detection below)",
       "50m",
       "5m",
       "Any size"
      ],
      "x": "No size limit if sprinklered.",
      "r": "AD B Vol 2, para 7.7",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Places of special fire hazard are enclosed in at least…",
      "o": [
       "REI 30",
       "REI 60",
       "REI 120",
       "E 20"
      ],
      "x": "These enclosures aren’t compartment walls.",
      "r": "AD B Vol 2, para 8.7",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s9",
    "vol": 2,
    "name": "Cavities, ducts and fire-stopping",
    "sec": "Vol 2 Sections 9–10 · Cavities, openings and fire-stopping",
    "page": 76,
    "intro": "In buildings other than dwellings, large concealed spaces — above ceilings, under floors, behind cladding — must be divided by cavity barriers at set maximum spacings (Table 9.1). Pipes and ducts through fire-separating elements are limited in size or protected.",
    "watch": [
     "A cavity above a fire-resisting ceiling running through the whole compartment can go up to 30m.",
     "In buildings where people sleep, dampers need both smoke and thermal actuation (with set exceptions).",
     "Kitchen extract ducts can’t use thermal or smoke-detector dampers because of grease."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Cavity between roof and ceiling: maximum undivided dimension?",
      "a": [
       "20"
      ],
      "u": "m",
      "x": "Other cavities: 20m if surfaces are C-s3, d2 or better; 10m if worse.",
      "r": "AD B Vol 2, Table 9.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Other cavities with exposed surfaces worse than C-s3, d2: maximum undivided dimension?",
      "a": [
       "10"
      ],
      "u": "m",
      "x": "Better surfaces allow 20m.",
      "r": "AD B Vol 2, Table 9.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "A single room’s ceiling cavity can exceed Table 9.1 if barriers are on the room’s enclosure and no more than…",
      "o": [
       "40m apart",
       "20m apart",
       "10m apart",
       "100m apart"
      ],
      "x": "With C-s3, d2 exposed surfaces.",
      "r": "AD B Vol 2, para 9.11",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Restricted-diameter route: maximum uPVC pipe through a fire-separating element in \"any other situation\"?",
      "o": [
       "40mm",
       "110mm",
       "160mm",
       "75mm"
      ],
      "x": "110mm is allowed through the enclosure of a protected (non-stair, non-lift) shaft.",
      "r": "AD B Vol 2, Table 10.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "In buildings where people sleep, dampers should be actuated by…",
      "o": [
       "Both smoke detectors and thermal devices",
       "Thermal fusible links only",
       "Manual switches",
       "Nothing"
      ],
      "x": "Exceptions apply with an L1 system and immediate or compartment evacuation.",
      "r": "AD B Vol 2, para 10.22",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Cavity barriers must achieve at least E 30 and I 15.",
      "a": true,
      "x": "Tested from each side.",
      "r": "AD B Vol 2, para 9.13",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s11",
    "vol": 2,
    "name": "Car parks",
    "sec": "Vol 2 Section 11 · Car parks",
    "page": 89,
    "intro": "Well-ventilated car parks have a known fire load and fire rarely spreads between levels. Open-sided car parks can use much lower fire resistance (15 minutes in Table B2). Enclosed car parks need natural vents or a mechanical system.",
    "watch": [
     "Open-sided car parks can’t have basement storeys.",
     "Materials must be class A1, except surface finishes, fire doors, attendant kiosks up to 15m² and shop mobility facilities.",
     "Basement car parks meeting Section 11 also meet the basement smoke venting rules."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Open-sided car park: natural ventilation of at least…",
      "o": [
       "1/20 of floor area, half from two opposite walls (1/80 each)",
       "1/40 of floor area",
       "1/100 of floor area",
       "1m² per space"
      ],
      "x": "Each storey ventilated naturally.",
      "r": "AD B Vol 2, para 11.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Enclosed car park with natural ventilation: aggregate free vent area of at least…",
      "o": [
       "1/40 of floor area (1/160 on each of two opposite walls)",
       "1/20 of floor area",
       "1/10 of floor area",
       "1/80 of floor area"
      ],
      "x": "Otherwise, mechanical ventilation is needed.",
      "r": "AD B Vol 2, para 11.4",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Mechanical car park ventilation in a fire should give how many air changes per hour?",
      "a": [
       "10"
      ],
      "u": "ach",
      "x": "In two independent parts, each extracting 50%.",
      "r": "AD B Vol 2, Section 11",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Table B2: minimum fire resistance for an open-sided car park (light vehicles) up to 30m?",
      "o": [
       "15 minutes",
       "30 minutes",
       "60 minutes",
       "90 minutes"
      ],
      "x": "Increased to 30 minutes for elements protecting means of escape.",
      "r": "AD B Vol 2, Table B2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "An attendant’s kiosk in an open-sided car park can be up to how many m²?",
      "a": [
       "15"
      ],
      "u": "m²",
      "x": "An exception to the class A1 materials rule.",
      "r": "AD B Vol 2, para 11.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s12",
    "vol": 2,
    "name": "External walls and space separation",
    "sec": "Vol 2 Sections 12–14 · External walls, space separation and roofs",
    "page": 94,
    "intro": "External walls follow Regulation 7 and Table 12.1, with different classes for assembly and \"other\" buildings above and below 18m. Space separation uses radiation intensity by use: shops, industrial and storage burn hotter, so they need more separation for the same openings.",
    "watch": [
     "Parts of uncompartmented buildings more than 30m above mean ground level can be ignored for space separation.",
     "Free-standing canopies over a limited risk (like petrol pumps) and at least 1000mm from the boundary can be disregarded.",
     "Surfaces within 1000mm of the boundary must be B-s3, d2 or better."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Assembly building over 18m: external surface class within 1000mm of the boundary?",
      "o": [
       "B-s3, d2 or better",
       "A2-s1, d0",
       "C-s3, d2",
       "No provision"
      ],
      "x": "At 1000mm or more: C-s3, d2 up to 18m, B-s3, d2 above.",
      "r": "AD B Vol 2, Table 12.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "\"Any other building\" 18m or less, at 1000mm or more from the boundary: external surface class?",
      "o": [
       "No provisions",
       "B-s3, d2",
       "C-s3, d2",
       "A2-s1, d0"
      ],
      "x": "Within 1000mm it must be B-s3, d2 or better.",
      "r": "AD B Vol 2, Table 12.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Radiation intensity assumed for shops, industrial and storage buildings?",
      "o": [
       "168 kW/m²",
       "84 kW/m²",
       "42 kW/m²",
       "250 kW/m²"
      ],
      "x": "Residential, office, assembly and open-sided car parks: 84 kW/m².",
      "r": "AD B Vol 2, para 13.17",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "With sprinklers throughout, space separation lets you…",
      "o": [
       "Halve the boundary distance (minimum 1m) or double the unprotected area",
       "Ignore the boundary",
       "Use any roof covering",
       "Skip compartmentation"
      ],
      "x": "Same as Volume 1.",
      "r": "AD B Vol 2, para 13.22",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "A canopy attached to the building can be measured from the wall rather than its edge if its edges are at least 2m from the boundary.",
      "a": true,
      "x": "Para 13.13.",
      "r": "AD B Vol 2, para 13.13",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Metal composite panels with an unmodified polyethylene core are allowed on low-rise commercial buildings.",
      "a": false,
      "x": "Regulation 7(1A) bans them on buildings of any height.",
      "r": "AD B Vol 2, para 12.13 and Reg 7(1A)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s15",
    "vol": 2,
    "name": "Fire service access and firefighting shafts",
    "sec": "Vol 2 Sections 15–18 · Vehicle access, fire mains, shafts and basement venting",
    "page": 110,
    "intro": "Fire appliance access depends on the building’s floor area and height. High-reach appliances need hardstandings close to the building. Buildings with a storey over 18m need firefighting shafts with lifts, and big shops, assembly and industrial buildings need shafts at lower heights too.",
    "watch": [
     "Small buildings (up to 2000m², top storey up to 11m) need pump access to 15% of the perimeter or within 45m of every point of the footprint.",
     "Hardstandings for high-reach appliances should be no steeper than 1 in 12.",
     "Without sprinklers, hose distance from an outlet in a protected stair is limited to 45m (60m in a firefighting shaft)."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "A small building (up to 2000m², top storey up to 11m) needs pump access to…",
      "o": [
       "15% of the perimeter, or within 45m of every point of the footprint",
       "50% of the perimeter",
       "The whole perimeter",
       "One door only"
      ],
      "x": "Whichever is less onerous.",
      "r": "AD B Vol 2, para 15.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Turntable ladder hardstanding: near edge no more than how far from the building?",
      "o": [
       "4.9m",
       "2m",
       "10m",
       "7.5m"
      ],
      "x": "Width at least 5m. A hydraulic platform: near edge within 2m.",
      "r": "AD B Vol 2, Diagram 15.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "High-reach appliance access routes: carrying capacity?",
      "a": [
       "17"
      ],
      "u": "tonnes",
      "x": "Pump appliances: 12.5 tonnes.",
      "r": "AD B Vol 2, Table 15.2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "At least two firefighting shafts are needed when a storey is…",
      "o": [
       "900m² or more and 18m or more above access level",
       "Over 2000m²",
       "Over 11m",
       "Over 30m"
      ],
      "x": "Each shaft serves all storeys it passes through.",
      "r": "AD B Vol 2, para 17.5",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Shops, assembly and industrial buildings with a storey of 900m² or more need two firefighting shafts (no lifts) from what height?",
      "o": [
       "7.5m",
       "18m",
       "11m",
       "30m"
      ],
      "x": "Purpose groups 4, 5 and 6.",
      "r": "AD B Vol 2, para 17.6",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Firefighting shaft protection in non-residential buildings?",
      "o": [
       "REI 120 from the accommodation side, REI 60 from the shaft, E 60 S doors",
       "REI 30 and E 20 doors",
       "REI 60 both sides, E 30 S doors only",
       "No protection"
      ],
      "x": "Flats-only shafts can use REI 60 both sides with E 30 S doors.",
      "r": "AD B Vol 2, Diagram 17.1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "Basement storeys of up to 200m² that are no more than 3m below ground don’t need smoke outlets.",
      "a": true,
      "x": "Strong rooms are also exempt.",
      "r": "AD B Vol 2, para 18.3",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "id": "b2s19",
    "vol": 2,
    "name": "Fire resistance, occupancy and handover",
    "sec": "Vol 2 Section 19 and Appendices B–D",
    "page": 126,
    "intro": "Table B2 sets minimum fire resistance by purpose group and height; Table C1 rates fire doors; Table D1 gives floor space factors for working out how many people a space holds. Regulation 38 makes sure the fire safety information reaches whoever runs the building.",
    "watch": [
     "Unsprinklered offices, shops, assembly, industrial and storage buildings over 30m are \"not permitted\" in Table B2.",
     "Doors in compartment walls can take up no more than 25% of the wall’s length unless both integrity and insulation are met.",
     "The person carrying out the work must notify the authority within 5 days of handing over the information (30 days under a competent person scheme)."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Table B2: sprinklered office with top floor up to 18m — minimum fire resistance?",
      "o": [
       "30 minutes",
       "60 minutes",
       "90 minutes",
       "15 minutes"
      ],
      "x": "Unsprinklered: 60 minutes.",
      "r": "AD B Vol 2, Table B2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "tf",
      "q": "An unsprinklered shop with a top floor over 30m is permitted under Table B2.",
      "a": false,
      "x": "\"Not permitted\" — sprinklers are needed above 30m.",
      "r": "AD B Vol 2, Table B2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Unsprinklered industrial building with top floor up to 18m: minimum fire resistance?",
      "o": [
       "90 minutes",
       "60 minutes",
       "30 minutes",
       "120 minutes"
      ],
      "x": "60 minutes if sprinklered.",
      "r": "AD B Vol 2, Table B2",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Floor space factor for an office (Table D1)?",
      "o": [
       "6m² per person",
       "2m² per person",
       "10m² per person",
       "1m² per person"
      ],
      "x": "Shop sales area: 2m²; restaurant: 1m²; storage: 30m².",
      "r": "AD B Vol 2, Table D1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Floor space factor for a standing bar area within 2m of the serving point?",
      "o": [
       "0.3m² per person",
       "0.5m² per person",
       "1m² per person",
       "2m² per person"
      ],
      "x": "One of the densest occupancies.",
      "r": "AD B Vol 2, Table D1",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "mc",
      "q": "Fire door on a protected stairway (Table C1)?",
      "o": [
       "E 30 Sa (FD 30 S)",
       "E 20",
       "E 60",
       "No rating"
      ],
      "x": "Doors to other protected corridors: E 20 Sa.",
      "r": "AD B Vol 2, Table C1",
      "art": "firedoor",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     },
     {
      "t": "num",
      "q": "Regulation 38: without a competent person scheme, the person doing the work must notify the authority within how many days of handing over the information?",
      "a": [
       "5"
      ],
      "u": "days",
      "x": "30 days under a competent person scheme.",
      "r": "AD B Vol 2, Regulation 38(2B)–(2C)",
      "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   }
  ],
  "intro": "Part B is fire safety, covered section by section following the real Approved Document. Volume 1 (Dwellings): alarms, escape from houses and flats, linings, structure, cavities, external walls, space separation and fire service access. Volume 2 (all other buildings): travel distances, exits and stairs, care homes, small premises, compartment sizes, car parks, firefighting shafts and the appendix tables.",
  "docs": [
   {
    "t": "Approved Document B Vol 1 (PDF)",
    "url": "https://assets.publishing.service.gov.uk/media/6aa3bb335f6e942efe37f150/AD_B1_2026.pdf"
   },
   {
    "t": "Approved Document B Vol 2 (PDF)",
    "url": "https://assets.publishing.service.gov.uk/media/6aa3bb7492e72b8ac437f145/AD_B2_2026.pdf"
   },
   {
    "t": "Approved Document B page",
    "url": "https://www.gov.uk/government/publications/fire-safety-approved-document-b"
   }
  ]
 },
 {
  "k": "C",
  "name": "Moisture and site",
  "sub": "Site preparation, contaminants, damp",
  "lessons": [
   [
    {
     "t": "num",
     "q": "A damp-proof course should be at least how far above the adjoining ground?",
     "a": [
      "150"
     ],
     "u": "mm",
     "x": "150mm keeps the DPC clear of rain splashing back off the ground.",
     "r": "AD C, Section 5",
     "art": "dpc"
    },
    {
     "t": "build",
     "q": "A DPC sits at least ___ mm above the ___ ground.",
     "a": [
      "150",
      "adjoining"
     ],
     "d": [
      "100",
      "75",
      "finished"
     ],
     "x": "150mm above the adjoining ground keeps it clear of splash-back.",
     "r": "AD C, Section 5",
     "art": "dpc"
    },
    {
     "t": "mc",
     "q": "Which radioactive ground gas does AD C address in at-risk areas?",
     "o": [
      "Radon",
      "Carbon monoxide",
      "Hydrogen sulphide",
      "Nitrogen"
     ],
     "x": "In radon-affected areas, new buildings and extensions may need radon protection such as a gas-resistant membrane.",
     "r": "AD C, Section 2",
     "art": "radon"
    },
    {
     "t": "mc",
     "q": "Which of these is NOT covered by requirement C2 (resistance to moisture)?",
     "o": [
      "Sound transmission",
      "Moisture from the ground",
      "Rain penetration",
      "Condensation"
     ],
     "x": "C2 covers ground moisture, precipitation, and interstitial and surface condensation. Sound is Part E.",
     "r": "AD C"
    },
    {
     "t": "tf",
     "q": "Part C requires turf and other vegetable matter to be removed from the ground the building will cover.",
     "a": true,
     "x": "C1 covers site preparation: removing vegetable matter, and dealing with contaminants.",
     "r": "AD C, Section 1"
    }
   ],
   [
    {
     "t": "mc",
     "q": "To limit surface condensation and mould at thermal bridges, AD C sets a minimum temperature factor (fRsi) of…",
     "o": [
      "0.75",
      "0.25",
      "0.5",
      "0.95"
     ],
     "x": "Junctions should achieve fRsi of at least 0.75 for dwellings.",
     "r": "AD C, Section 5"
    },
    {
     "t": "tf",
     "q": "Requirement C2 covers interstitial condensation as well as surface condensation.",
     "a": true,
     "x": "C2 covers moisture from the ground, precipitation, and both surface and interstitial condensation.",
     "r": "AD C, Requirement C2"
    },
    {
     "t": "mc",
     "q": "A common way to stop ground moisture coming up through a ground floor is…",
     "o": [
      "A damp-proof membrane linked to the wall DPC",
      "A vapour barrier on the ceiling",
      "Thicker skirting boards",
      "A trickle vent"
     ],
     "x": "The membrane and DPC should join to form a continuous barrier.",
     "r": "AD C, Section 4"
    }
   ]
  ],
  "intro": "Part C covers preparing the site, resisting contaminants such as radon, and keeping moisture out of the building — from the ground, from rain, and from condensation.",
  "docs": [
   {
    "t": "Approved Document C",
    "url": "https://www.gov.uk/government/publications/site-preparation-and-resistance-to-contaminates-and-moisture-approved-document-c"
   }
  ]
 },
 {
  "k": "D",
  "name": "Toxic substances",
  "sub": "Cavity insulation fumes",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Part D is about…",
     "o": [
      "Cavity wall insulation giving off toxic fumes",
      "Asbestos removal",
      "Lead in water pipes",
      "Paint on fire doors"
     ],
     "x": "Part D addresses fumes such as formaldehyde from insulating material (e.g. urea-formaldehyde foam) put into cavity walls.",
     "r": "AD D"
    },
    {
     "t": "tf",
     "q": "Part D sets the rules for removing asbestos.",
     "a": false,
     "x": "Asbestos removal comes under the Control of Asbestos Regulations, not Part D.",
     "r": "AD D; Control of Asbestos Regulations 2012"
    },
    {
     "t": "mc",
     "q": "Which kind of wall does Part D apply to?",
     "o": [
      "Cavity walls",
      "Party walls only",
      "Basement walls only",
      "Curtain walls"
     ],
     "x": "It applies when insulating material is inserted into a cavity in a cavity wall.",
     "r": "AD D"
    }
   ]
  ],
  "intro": "Part D is the shortest Part. It stops insulation put into cavity walls from giving off toxic fumes into the building.",
  "docs": [
   {
    "t": "Approved Document D",
    "url": "https://www.gov.uk/government/publications/toxic-substances-approved-document-d"
   }
  ]
 },
 {
  "k": "E",
  "name": "Sound",
  "sub": "Separating walls and floors",
  "lessons": [
   [
    {
     "t": "num",
     "q": "In new-build homes, separating walls need airborne sound insulation of at least how many dB (DnT,w + Ctr)?",
     "a": [
      "45"
     ],
     "u": "dB",
     "x": "Higher is better for airborne sound. 45 dB applies to walls and floors between new-build dwellings.",
     "r": "AD E, Table 1a",
     "art": "sepwall"
    },
    {
     "t": "build",
     "q": "New-build separating walls: at least ___ dB airborne. Floors: no more than ___ dB impact.",
     "a": [
      "45",
      "62"
     ],
     "d": [
      "43",
      "58",
      "50"
     ],
     "x": "Airborne is a minimum (higher is better); impact is a maximum (lower is better).",
     "r": "AD E, Table 1a"
    },
    {
     "t": "num",
     "q": "In new-build homes, separating floors can let through impact sound of at most how many dB (L'nT,w)?",
     "a": [
      "62"
     ],
     "u": "dB",
     "x": "For impact sound, lower is better — the figure is a maximum, not a minimum.",
     "r": "AD E, Table 1a",
     "art": "sepfloor"
    },
    {
     "t": "mc",
     "q": "How do you usually show sound compliance for new attached homes?",
     "o": [
      "Pre-completion sound testing (or Robust Details)",
      "A letter from the architect",
      "Calculation only",
      "Testing after a resident complains"
     ],
     "x": "Pre-completion testing of a sample of separating walls and floors is the norm; Robust Details is the registered alternative.",
     "r": "AD E, Section 1"
    },
    {
     "t": "mc",
     "q": "Requirement E4 covers acoustic conditions in…",
     "o": [
      "Schools",
      "Hospitals",
      "Offices",
      "Cinemas"
     ],
     "x": "E4 is acoustic conditions in schools, usually shown by following BB93.",
     "r": "AD E"
    }
   ],
   [
    {
     "t": "num",
     "q": "Rooms for residential purposes (e.g. new hotel rooms): separating walls need at least how many dB DnT,w + Ctr?",
     "a": [
      "43"
     ],
     "u": "dB",
     "x": "Rooms for residential purposes have slightly lower wall values than new homes (45 dB).",
     "r": "AD E, Table 1b"
    },
    {
     "t": "num",
     "q": "Internal walls and floors inside a new home (e.g. around bedrooms) need a lab sound reduction of at least Rw…",
     "a": [
      "40"
     ],
     "u": "dB",
     "x": "Requirement E2 is shown by lab-tested constructions, not on-site tests.",
     "r": "AD E, Requirement E2"
    },
    {
     "t": "mc",
     "q": "How often should pre-completion sound testing be carried out?",
     "o": [
      "At least one set of tests for every 10 homes in a group or sub-group",
      "Every single home",
      "Only if a resident complains",
      "Once per site, whatever its size"
     ],
     "x": "A set is usually two walls and two floors, where they exist.",
     "r": "AD E, Section 1"
    },
    {
     "t": "num",
     "q": "Homes formed by a material change of use: separating floors can let through impact sound of at most…",
     "a": [
      "64"
     ],
     "u": "dB",
     "x": "Conversions get slightly relaxed values: 43 dB airborne and 64 dB impact.",
     "r": "AD E, Table 1a"
    }
   ]
  ],
  "intro": "Part E controls sound between homes and in rooms for residential purposes, such as hotel rooms, and sets acoustic conditions in schools. New homes are usually checked by pre-completion testing.",
  "docs": [
   {
    "t": "Approved Document E",
    "url": "https://www.gov.uk/government/publications/resistance-to-sound-approved-document-e"
   }
  ]
 },
 {
  "k": "F",
  "name": "Ventilation",
  "sub": "Background, extract and purge",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "What are trickle vents for?",
     "o": [
      "Background ventilation",
      "Purge ventilation",
      "Smoke control",
      "Cooling in summer"
     ],
     "x": "Trickle vents give continuous low-level background ventilation to dilute pollutants.",
     "r": "AD F",
     "art": "trickle"
    },
    {
     "t": "mc",
     "q": "Purge ventilation is meant to…",
     "o": [
      "Quickly clear high levels of pollutants or water vapour",
      "Run all the time at a low rate",
      "Remove smoke in a fire",
      "Heat incoming air"
     ],
     "x": "Purge ventilation is occasional and rapid — e.g. after painting — usually by opening windows.",
     "r": "AD F"
    },
    {
     "t": "mc",
     "q": "AD F 2021 (Volume 2) recommends CO₂ monitors in…",
     "o": [
      "Offices and spaces where people gather",
      "Every bathroom",
      "Car parks",
      "Plant rooms only"
     ],
     "x": "CO₂ is a proxy for how well an occupied room is ventilated. Since 2021, monitors are recommended in offices and other occupiable rooms in non-domestic buildings.",
     "r": "AD F Vol 2, 2021 edition"
    },
    {
     "t": "tf",
     "q": "A new AD F Volume 1 (dwellings) was published in March 2026 alongside the new AD L.",
     "a": true,
     "x": "Both were published on 24 March 2026 and come into force in March 2027.",
     "r": "Building Circular 01/2026"
    }
   ],
   [
    {
     "t": "num",
     "q": "AD F 2021: minimum intermittent extract rate for a bathroom?",
     "a": [
      "15"
     ],
     "u": "l/s",
     "x": "Intermittent rates: kitchen 30 (cooker hood) or 60, utility 30, bathroom 15, WC 6.",
     "r": "AD F Vol 1 2021, Table 1.1"
    },
    {
     "t": "mc",
     "q": "Intermittent extract for a kitchen with a cooker hood over the hob?",
     "o": [
      "30 l/s",
      "15 l/s",
      "60 l/s",
      "6 l/s"
     ],
     "x": "30 l/s with a cooker hood; 60 l/s if the extract is elsewhere in the kitchen.",
     "r": "AD F Vol 1 2021, Table 1.1"
    },
    {
     "t": "num",
     "q": "Minimum intermittent extract rate for a room with a WC only?",
     "a": [
      "6"
     ],
     "u": "l/s",
     "x": "Sanitary accommodation needs 6 l/s intermittent extract.",
     "r": "AD F Vol 1 2021, Table 1.1"
    },
    {
     "t": "num",
     "q": "Minimum intermittent extract rate for a utility room?",
     "a": [
      "30"
     ],
     "u": "l/s",
     "x": "Same as a kitchen with a cooker hood.",
     "r": "AD F Vol 1 2021, Table 1.1"
    }
   ]
  ],
  "intro": "Part F keeps indoor air healthy through extract, background and purge ventilation. A new Volume 1 for dwellings was published in March 2026 and applies from March 2027.",
  "docs": [
   {
    "t": "Approved Document F (2021)",
    "url": "https://www.gov.uk/government/publications/ventilation-approved-document-f"
   },
   {
    "t": "Approved Document F 2026",
    "url": "https://www.gov.uk/government/publications/approved-document-f-2026"
   }
  ]
 },
 {
  "k": "G",
  "name": "Water",
  "sub": "Hot water safety and water efficiency",
  "lessons": [
   [
    {
     "t": "num",
     "q": "New dwellings must be designed for water use of no more than how many litres per person per day?",
     "a": [
      "125"
     ],
     "u": "litres",
     "x": "125 l/p/d is the standard. Planning can apply an optional tighter 110 l/p/d target.",
     "r": "AD G, G2"
    },
    {
     "t": "build",
     "q": "New homes: ___ litres per person per day, and bath water up to ___ °C.",
     "a": [
      "125",
      "48"
     ],
     "d": [
      "100",
      "150",
      "60",
      "43"
     ],
     "x": "125 l/p/d is the standard water use limit; 48°C limits scalding at the bath.",
     "r": "AD G, G2 and G3"
    },
    {
     "t": "num",
     "q": "Hot water to a bath in a new dwelling should be limited to a maximum of…",
     "a": [
      "48"
     ],
     "u": "°C",
     "x": "48°C limits the risk of scalding, usually with a thermostatic mixing valve.",
     "r": "AD G, G3",
     "art": "bath"
    },
    {
     "t": "tf",
     "q": "A planning condition can apply the optional 110 litres per person per day water target.",
     "a": true,
     "x": "The tighter target only applies where a planning condition requires it.",
     "r": "AD G, G2"
    },
    {
     "t": "mc",
     "q": "Unvented hot water cylinders are covered by which Part?",
     "o": [
      "Part G",
      "Part J",
      "Part P",
      "Part H"
     ],
     "x": "G3 covers hot water supply and systems, including the safety of unvented storage.",
     "r": "AD G, G3"
    }
   ],
   [
    {
     "t": "mc",
     "q": "Unvented hot water storage needs the G3 safety devices when the vessel holds more than…",
     "o": [
      "15 litres",
      "5 litres",
      "50 litres",
      "100 litres"
     ],
     "x": "Above 15 litres, it needs safety devices and must be installed by a competent person.",
     "r": "AD G, G3"
    },
    {
     "t": "num",
     "q": "Stored hot water should never exceed what temperature?",
     "a": [
      "100"
     ],
     "u": "°C",
     "x": "The safety devices stop the stored water from reaching boiling point.",
     "r": "AD G, G3"
    },
    {
     "t": "mc",
     "q": "Requirement G6 covers…",
     "o": [
      "A sink in places where food is prepared",
      "Bathrooms",
      "Hot water cylinders",
      "Water efficiency"
     ],
     "x": "G4 covers sanitary conveniences, G5 bathrooms and G6 food preparation areas.",
     "r": "AD G, G6"
    },
    {
     "t": "tf",
     "q": "G4 requires enough sanitary conveniences, with washing facilities next to them.",
     "a": true,
     "x": "Hand washing facilities should be in or next to the room with the WC.",
     "r": "AD G, G4"
    }
   ]
  ],
  "intro": "Part G covers water: a safe supply, water efficiency, hot water safety (including scalding and unvented cylinders), and sanitary facilities.",
  "docs": [
   {
    "t": "Approved Document G",
    "url": "https://www.gov.uk/government/publications/sanitation-hot-water-safety-and-water-efficiency-approved-document-g"
   }
  ]
 },
 {
  "k": "H",
  "name": "Drainage",
  "sub": "Drains, rainwater and sewers",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Requirement H4 covers…",
     "o": [
      "Building over or close to public sewers",
      "Septic tanks",
      "Rainwater gutters",
      "Bin stores"
     ],
     "x": "Building over or near a public sewer normally needs the sewerage undertaker’s agreement.",
     "r": "AD H, H4"
    },
    {
     "t": "mc",
     "q": "What is the preferred order for disposing of rainwater?",
     "o": [
      "Soakaway, then watercourse, then sewer",
      "Sewer, then watercourse, then soakaway",
      "Watercourse, then sewer, then soakaway",
      "Any order"
     ],
     "x": "H3 sets a hierarchy: infiltration first, then a watercourse, and only then a sewer.",
     "r": "AD H, H3",
     "art": "rain"
    },
    {
     "t": "tf",
     "q": "Septic tanks and other wastewater treatment systems come under Part H.",
     "a": true,
     "x": "H2 covers wastewater treatment systems and cesspools.",
     "r": "AD H, H2"
    },
    {
     "t": "mc",
     "q": "Requirement H6 deals with…",
     "o": [
      "Solid waste storage",
      "Foul drainage",
      "Grease separators",
      "Rainwater harvesting"
     ],
     "x": "H6 covers storage for solid waste (bins), including access for collection.",
     "r": "AD H, H6"
    }
   ],
   [
    {
     "t": "num",
     "q": "Soakaways should be at least how far from a building?",
     "a": [
      "5"
     ],
     "u": "m",
     "x": "This keeps the water away from the foundations.",
     "r": "AD H, H3"
    },
    {
     "t": "num",
     "q": "Residents shouldn’t have to carry rubbish more than how far to the bin store?",
     "a": [
      "30"
     ],
     "u": "m",
     "x": "Excluding any vertical distance.",
     "r": "AD H, H6"
    },
    {
     "t": "num",
     "q": "Bins should be within how many metres of where the collection vehicle can stop?",
     "a": [
      "25"
     ],
     "u": "m",
     "x": "So collectors don’t have to wheel bins too far.",
     "r": "AD H, H6"
    },
    {
     "t": "mc",
     "q": "A 100mm foul drain with at least one WC connected can be laid at a minimum gradient of…",
     "o": [
      "1:80",
      "1:20",
      "1:150",
      "1:200"
     ],
     "x": "Steeper is fine; 1:40 is the usual general guide for smaller flows.",
     "r": "AD H, H1 Table 6"
    }
   ]
  ],
  "intro": "Part H covers foul drainage, wastewater treatment, rainwater disposal, building over or near sewers, and storage for solid waste.",
  "docs": [
   {
    "t": "Approved Document H",
    "url": "https://www.gov.uk/government/publications/drainage-and-waste-disposal-approved-document-h"
   }
  ]
 },
 {
  "k": "J",
  "name": "Combustion",
  "sub": "Appliances, flues and fuel storage",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Since October 2022, fitting a fixed combustion appliance in a dwelling means you must also…",
     "o": [
      "Fit a carbon monoxide alarm in the same room",
      "Fit a sprinkler head above it",
      "Install mechanical ventilation",
      "Get a structural engineer’s report"
     ],
     "x": "A CO alarm is now needed whenever a fixed combustion appliance of any fuel type is installed — except gas cookers.",
     "r": "AD J, 2022 amendments",
     "art": "co"
    },
    {
     "t": "tf",
     "q": "Installing a new gas cooker triggers the CO alarm requirement.",
     "a": false,
     "x": "Gas cookers are the one exception.",
     "r": "AD J, 2022 amendments"
    },
    {
     "t": "mc",
     "q": "Besides appliances and flues, Part J also covers…",
     "o": [
      "Storage of heating oil and LPG",
      "Electric heaters",
      "Underfloor heating pipes",
      "Solar panels"
     ],
     "x": "J covers protecting liquid fuel storage from fire and preventing oil pollution.",
     "r": "AD J"
    }
   ],
   [
    {
     "t": "mc",
     "q": "A carbon monoxide alarm should be placed how far horizontally from the appliance?",
     "o": [
      "Between 1m and 3m",
      "Within 30cm",
      "At least 5m away",
      "In a different room"
     ],
     "x": "On the ceiling at least 300mm from walls, or high on a wall above doors and windows.",
     "r": "AD J, Section 2"
    },
    {
     "t": "num",
     "q": "An oil storage tank closer than how many mm to a building needs extra fire protection?",
     "a": [
      "1800"
     ],
     "u": "mm",
     "x": "Tanks within 1800mm of the building need a fire-resisting barrier or construction.",
     "r": "AD J, Section 5"
    },
    {
     "t": "mc",
     "q": "Which is a combustion appliance covered by Part J?",
     "o": [
      "A wood-burning stove",
      "An electric heat pump",
      "A cooker hood",
      "An immersion heater"
     ],
     "x": "Part J covers appliances that burn fuel, and their flues and air supply.",
     "r": "AD J"
    }
   ]
  ],
  "intro": "Part J covers heat-producing appliances such as boilers and stoves: their flues, air supply, carbon monoxide alarms, and how oil and LPG are stored.",
  "docs": [
   {
    "t": "Approved Document J",
    "url": "https://www.gov.uk/government/publications/combustion-appliances-and-fuel-storage-systems-approved-document-j"
   }
  ]
 },
 {
  "k": "K",
  "name": "Stairs and guarding",
  "sub": "Stairs, ramps, guarding, glazing and doors",
  "lessons": [
   {
    "id": "k0",
    "name": "What Part K covers",
    "sec": "Requirements K1–K6 · Scope and performance",
    "page": 1,
    "intro": "Part K keeps people safe moving between levels and around glass, windows and doors. K1 covers stairs, ladders and ramps; K2 guarding against falls; K3 vehicle barriers and loading bays; K4 impact with glazing; K5.1–K5.4 open windows, manifestation, opening windows safely and cleaning them; and K6 doors and gates. The 2013 edition folded in the old Approved Document N (glazing) and overlapping Part M guidance, with no new technical requirements.",
    "watch": [
     "K5.1, K5.2, K5.3, K5.4 and K6 don’t apply to dwellings — but K4 (impact with glazing) does.",
     "K1 only applies to stairs, ladders and ramps that form part of the building.",
     "K2 performance: in dwellings, guard against falls of more than 600mm. Elsewhere, guard flights of two or more risers, or drops of 380mm if not part of a stair.",
     "K6 also doesn’t apply to doors and gates that are part of a lift."
    ],
    "qs": [
     {
      "t": "match",
      "q": "Match each requirement to its topic",
      "p": [
       [
        "K1",
        "Stairs, ladders and ramps"
       ],
       [
        "K2",
        "Protection from falling"
       ],
       [
        "K3",
        "Vehicle barriers and loading bays"
       ],
       [
        "K4",
        "Impact with glazing"
       ],
       [
        "K6",
        "Doors and gates"
       ]
      ],
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "Requirement K5.2 (manifestation of glazing) applies to new houses.",
      "a": false,
      "x": "K5.1–K5.4 and K6 don’t apply to dwellings.",
      "r": "AD K, Requirement K5.2, p.38",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "Requirement K4 (protection against impact with glazing) applies to dwellings.",
      "a": true,
      "x": "K4 has no limit on application, so it applies to houses and flats too.",
      "r": "AD K, Requirement K4, p.30",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "In a dwelling, guarding should prevent people falling from a height of more than how many mm?",
      "a": [
       "600"
      ],
      "u": "mm",
      "x": "In other buildings it’s two or more risers, or 380mm if not part of a stair.",
      "r": "AD K, K2 Performance, p.22",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "In buildings other than dwellings, guarding is needed on stairs with at least…",
      "o": [
       "Two risers (or a 380mm drop if not a stair)",
       "One riser",
       "Three risers (or a 600mm drop)",
       "Four risers"
      ],
      "x": "Dwellings use 600mm instead.",
      "r": "AD K, K2 Performance, p.22",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "The 2013 edition of AD K absorbed which old Approved Document?",
      "o": [
       "N — glazing safety",
       "H — drainage",
       "J — combustion",
       "T — toilets"
      ],
      "x": "Glazing impact, opening and cleaning moved into K4 and K5.",
      "r": "AD K, Main changes",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "K5.4 (safe cleaning) covers glazing that isn’t meant to be cleaned.",
      "a": false,
      "x": "It excludes dwellings and surfaces not intended to be cleaned.",
      "r": "AD K, Requirement K5.4, p.43",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k1a",
    "name": "Rise, going and steps",
    "sec": "Section 1 · Stairs: rise, going and construction of steps",
    "page": 4,
    "intro": "Stairs fall into three categories, each with its own limits in Table 1.1: private stairs (within one dwelling), utility stairs (escape, maintenance or other occasional use) and general access stairs (everything else). Every step in a flight should have the same rise and going, with level treads.",
    "watch": [
     "Rule of thumb: twice the rise plus the going (2R + G) should be 550–700mm.",
     "For schools the preferred rise is 150mm and going 280mm.",
     "Dwellings may have open risers if treads overlap by at least 16mm and a 100mm sphere can’t pass through. Other buildings should use closed risers.",
     "Non-dwellings: nosings contrast visually, a 55mm strip on both tread and riser, projecting no more than 25mm.",
     "Stepped gangways in assembly buildings: pitch up to 35°, tier risers 100–190mm, gangways 1100mm wide (900mm for 50 people or fewer)."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Private stair (Table 1.1): rise and going?",
      "o": [
       "Rise 150–220mm, going 220–300mm",
       "Rise 150–170mm, going 250–400mm",
       "Rise 150–190mm, going 250–400mm",
       "Rise 170–220mm, going 200–300mm"
      ],
      "x": "Maximum pitch 42°.",
      "r": "AD K, Table 1.1, p.5",
      "art": "stair:rise",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Utility stair (Table 1.1): rise and going?",
      "o": [
       "Rise 150–190mm, going 250–400mm",
       "Rise 150–170mm, going 250–400mm",
       "Rise 150–220mm, going 220–300mm",
       "Rise 100–150mm, going 280–425mm"
      ],
      "x": "Utility stairs are for escape, maintenance or occasional use.",
      "r": "AD K, Table 1.1, p.5",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "General access stair (Table 1.1): rise and going?",
      "o": [
       "Rise 150–170mm, going 250–400mm",
       "Rise 150–190mm, going 250–400mm",
       "Rise 150–220mm, going 220–300mm",
       "Rise 170–200mm, going 280–300mm"
      ],
      "x": "The tightest rise range, because anyone may use it.",
      "r": "AD K, Table 1.1, p.5",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Maximum pitch of a private stair?",
      "a": [
       "42"
      ],
      "u": "°",
      "x": "Only private stairs have a pitch limit in Table 1.1.",
      "r": "AD K, Table 1.1, p.5",
      "art": "stair:pitch",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "2R + G should fall between…",
      "o": [
       "550 and 700mm",
       "500 and 600mm",
       "600 and 800mm",
       "450 and 650mm"
      ],
      "x": "Twice the rise plus the going keeps the step comfortable.",
      "r": "AD K, para 1.3, p.5",
      "art": "stair:2rg",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Preferred step for a school stair?",
      "o": [
       "Rise 150mm, going 280mm",
       "Rise 170mm, going 250mm",
       "Rise 190mm, going 250mm",
       "Rise 220mm, going 220mm"
      ],
      "x": "A gentler stair for children.",
      "r": "AD K, Table 1.1 note, p.5",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Open risers in a dwelling: treads should overlap by at least how many mm?",
      "a": [
       "16"
      ],
      "u": "mm",
      "x": "And a 100mm sphere shouldn’t pass through the gap.",
      "r": "AD K, para 1.9, p.6",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "An office stair may have open risers if the treads overlap by 16mm.",
      "a": false,
      "x": "Buildings other than dwellings should have closed risers.",
      "r": "AD K, para 1.6, p.6",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Non-dwellings: width of the contrasting nosing strip on tread and riser?",
      "a": [
       "55"
      ],
      "u": "mm",
      "x": "Nosings should project no more than 25mm.",
      "r": "AD K, para 1.7, p.6",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Maximum pitch of a stepped gangway in an assembly building?",
      "a": [
       "35"
      ],
      "u": "°",
      "x": "Tier risers 100–190mm.",
      "r": "AD K, para 1.4, p.5",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k1b",
    "name": "Headroom, width and landings",
    "sec": "Section 1 · Headroom, width, length of flights and landings",
    "page": 7,
    "intro": "Every stair needs 2m clear headroom above the pitch line. In buildings other than dwellings, stairs should be at least 1200mm wide between walls or strings, flights are limited to 12 or 16 risers, and long climbs must turn. Every flight needs a level landing top and bottom, at least as long as the stair is wide.",
    "watch": [
     "Loft conversions: if 2m isn’t possible, 1.9m at the centre of the stair and 1.8m at the side is acceptable.",
     "No single steps in buildings other than dwellings or in the common parts of flats.",
     "Flights wider than 2m are split into flights at least 1000mm wide.",
     "A landing formed by the ground can slope up to 1:60 along its length if paved or otherwise firm.",
     "Cupboard doors may open onto a landing only if kept shut or locked; in a dwelling, a door may swing across the bottom landing if it leaves 400mm clear.",
     "Dwellings on severely sloping plots: the entrance-storey stair may be 900mm wide."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Minimum clear headroom over a stair?",
      "a": [
       "2",
       "2.0",
       "2000"
      ],
      "u": "m",
      "x": "Measured vertically above the pitch line.",
      "r": "AD K, para 1.11, p.7",
      "art": "stair:head",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Loft conversion where 2m headroom can’t be achieved — what’s acceptable?",
      "o": [
       "1.9m at the centre, 1.8m at the side",
       "1.8m at the centre, 1.7m at the side",
       "2.0m at the centre, 1.5m at the side",
       "No reduction is allowed"
      ],
      "x": "Diagram 1.4.",
      "r": "AD K, para 1.13, p.8",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Buildings other than dwellings: minimum stair width between enclosing walls, strings or upstands?",
      "a": [
       "1200"
      ],
      "u": "mm",
      "x": "At least 1000mm between handrails.",
      "r": "AD K, para 1.15, p.8",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "…and the minimum width between handrails?",
      "a": [
       "1000"
      ],
      "u": "mm",
      "x": "Flights over 2m wide are split into flights at least 1000mm wide.",
      "r": "AD K, para 1.15, p.8",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "General access stair: maximum risers in a flight (normal premises)?",
      "a": [
       "12"
      ],
      "u": "risers",
      "x": "Up to 16 in small premises where the plan area is restricted.",
      "r": "AD K, para 1.18, p.10",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Utility stair: maximum risers in a flight?",
      "a": [
       "16"
      ],
      "u": "risers",
      "x": "General access stairs normally stop at 12.",
      "r": "AD K, para 1.18, p.10",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Over 36 risers in consecutive flights needs a change of direction of at least how many degrees?",
      "a": [
       "30"
      ],
      "u": "°",
      "x": "With a landing between (Diagram 1.6).",
      "r": "AD K, para 1.17, p.9",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Buildings other than dwellings: minimum unobstructed length of a stair landing?",
      "o": [
       "1200mm",
       "900mm",
       "1000mm",
       "1500mm"
      ],
      "x": "Doors shouldn’t swing across it.",
      "r": "AD K, para 1.23, p.11",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "A single step is acceptable in an office corridor.",
      "a": false,
      "x": "Avoid single steps in buildings other than dwellings and in common parts of flats.",
      "r": "AD K, para 1.18, p.10",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "A landing formed by paved ground may have a gradient of up to…",
      "o": [
       "1:60",
       "1:40",
       "1:20",
       "1:12"
      ],
      "x": "Otherwise landings should be level.",
      "r": "AD K, para 1.22, p.10",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k1c",
    "name": "Special stairs and ladders",
    "sec": "Section 1 · Tapered treads, spiral, alternating tread stairs and ladders",
    "page": 11,
    "intro": "Tapered treads, spiral and helical stairs, alternating tread stairs and fixed ladders are \"special stairs\". They follow the same rise and going limits, with rules on where the going is measured. Alternating tread stairs and fixed ladders are only for loft conversions where there isn’t room for a normal stair.",
    "watch": [
     "Stairs under 1m wide: measure the going of a tapered tread at the centre. Stairs 1m or wider: measure 270mm in from each side.",
     "Tapered treads need at least 50mm going at the narrow end.",
     "Where straight and tapered treads mix, tapered treads mustn’t have a smaller going than the straight ones.",
     "Spiral and helical stairs: BS 5395-2. Industrial stairs, ladders and walkways: BS 5395-3 or BS 4211.",
     "Retractable ladders aren’t acceptable as a means of escape."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Minimum going at the narrow end of a tapered tread?",
      "a": [
       "50"
      ],
      "u": "mm",
      "x": "Diagram 1.9.",
      "r": "AD K, Diagram 1.9, p.12",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Tapered treads on a stair less than 1m wide: where is the going measured?",
      "o": [
       "At the centre of the tread",
       "270mm from the narrow end",
       "At the wide end",
       "Along the handrail"
      ],
      "x": "For stairs 1m or wider, it’s checked 270mm in from each side.",
      "r": "AD K, Diagram 1.9, p.12",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Consecutive tapered treads should have…",
      "o": [
       "The same going",
       "Goings increasing by 10mm",
       "Any going over 220mm",
       "Open risers"
      ],
      "x": "Uniform steps are safer.",
      "r": "AD K, para 1.26, p.11",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "An alternating tread stair is acceptable…",
      "o": [
       "In a loft conversion with no room for a normal stair, serving one habitable room (plus a bathroom/WC that isn’t the only WC)",
       "Anywhere in a dwelling",
       "As a fire escape stair",
       "In any building other than a dwelling"
      ],
      "x": "It’s a last resort for loft conversions.",
      "r": "AD K, para 1.29, p.12",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Alternating tread stair: maximum rise?",
      "a": [
       "220"
      ],
      "u": "mm",
      "x": "Minimum going 220mm, measured between alternate nosings.",
      "r": "AD K, para 1.30, p.13",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "An alternating tread stair needs handrails on both sides.",
      "a": true,
      "x": "Plus slip-resistant treads and 2m headroom.",
      "r": "AD K, para 1.30, p.13",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "A retractable loft ladder can serve as a means of escape from a loft room.",
      "a": false,
      "x": "Retractable ladders aren’t acceptable for means of escape.",
      "r": "AD K, para 1.31, p.13",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Spiral and helical stairs should be designed to…",
      "o": [
       "BS 5395-2",
       "BS 6180",
       "BS EN 12600",
       "BS 8213-1"
      ],
      "x": "BS 5395-3 covers industrial stairs.",
      "r": "AD K, para 1.28, p.12",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k1d",
    "name": "Handrails and guarding",
    "sec": "Section 1 · Handrails, guarding and access for maintenance",
    "page": 14,
    "intro": "Handrails sit 900–1000mm above the pitch line; stairs 1000mm wide or more need one on both sides. In buildings other than dwellings (and common parts of flats without a lift), handrails run continuously on both sides, extend 300mm beyond the flight, contrast visually and are easy to grip. Guarding follows Section 3 heights.",
    "watch": [
     "Profile: circular 32–50mm diameter, or non-circular 50mm wide × 39mm deep with 15mm-radius edges.",
     "A second, lower handrail at 600mm above the pitch line where there is full-height structural guarding.",
     "Handrails shouldn’t project into an access route, shouldn’t get very hot or cold, and need ends that won’t snag clothing.",
     "Dwellings on severely sloping plots: flights of three or more risers need handrails on both sides.",
     "Maintenance access at least monthly: design like a private stair (or BS 5395-3). Less often: portable ladders may be fine (CDM)."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Height to the top of a stair handrail, measured from the pitch line?",
      "o": [
       "900–1000mm",
       "800–900mm",
       "1000–1100mm",
       "850–950mm"
      ],
      "x": "The handrail can form the top of the guarding if heights match.",
      "r": "AD K, para 1.34, p.14",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Stairs at least how wide need a handrail on both sides?",
      "a": [
       "1000"
      ],
      "u": "mm",
      "x": "Narrower stairs need one on at least one side.",
      "r": "AD K, para 1.34, p.14",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Non-dwellings: how far should handrails extend beyond the top and bottom of a flight?",
      "a": [
       "300"
      ],
      "u": "mm",
      "x": "Diagram 1.12.",
      "r": "AD K, Diagram 1.12, p.15",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Circular handrail diameter?",
      "o": [
       "32–50mm",
       "25–40mm",
       "40–60mm",
       "50–75mm"
      ],
      "x": "Non-circular: 50mm wide, 39mm deep, 15mm-radius edges.",
      "r": "AD K, Diagram 1.13, p.16",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Height of a second (lower) handrail above the pitch line?",
      "a": [
       "600"
      ],
      "u": "mm",
      "x": "Used where there is full-height structural guarding.",
      "r": "AD K, para 1.36, p.15",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "In a dwelling, stair guarding is needed where the drop is more than how many mm?",
      "a": [
       "600"
      ],
      "u": "mm",
      "x": "Other buildings: flights with two or more risers.",
      "r": "AD K, para 1.41, p.17",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Stairs likely to be used by children under five: openings shouldn’t let a sphere of what diameter through?",
      "a": [
       "100"
      ],
      "u": "mm",
      "x": "And guarding should be hard to climb.",
      "r": "AD K, para 1.39, p.16",
      "art": "sphere",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "A plant room stair used at least once a month should follow…",
      "o": [
       "Private stair provisions (or BS 5395-3 for industrial)",
       "General access stair provisions",
       "No provisions — CDM covers it",
       "Ramp provisions"
      ],
      "x": "Less frequent access may use portable ladders.",
      "r": "AD K, para 1.42, p.17",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k2",
    "name": "Ramps",
    "sec": "Section 2 · Ramps",
    "page": 18,
    "intro": "A floor at 1:20 or steeper is a ramp. The steeper the ramp, the shorter each flight: 1:20 up to a 10m going (500mm rise), 1:15 up to 5m (333mm) and 1:12 up to 2m (166mm), interpolating in between. In buildings other than dwellings, ramps must be obvious or signed, at least 1500mm wide, with handrails both sides and generous landings.",
    "watch": [
     "Slip-resistant surface that contrasts with the landings; 100mm contrasting kerb on any open side.",
     "A change of level of 300mm or more needs steps as well as a ramp. Under 300mm, use a ramp rather than a single step.",
     "Passing places 1800 × 1800mm where you can’t see from one end to the other, or there are three or more flights.",
     "Dwellings: ramps under 1000mm wide need a handrail on one side; 1000mm or wider, both sides. No handrail is needed if the rise is 600mm or less.",
     "2m headroom; a soffit below 2m needs guarding and cane detection."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "At what gradient does a floor become a ramp?",
      "o": [
       "1:20 or steeper",
       "1:60 or steeper",
       "1:40 or steeper",
       "1:12 or steeper"
      ],
      "x": "Flatter than 1:20 counts as a gentle slope.",
      "r": "AD K, para 2.3, p.18",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Maximum gradient for a ramp flight with a 2m going?",
      "o": [
       "1:12",
       "1:15",
       "1:20",
       "1:10"
      ],
      "x": "Rise 166mm.",
      "r": "AD K, Diagram 2.1, p.18",
      "art": "ramp",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "A 1:15 ramp flight can have a going of up to…",
      "o": [
       "5m (333mm rise)",
       "2m (166mm rise)",
       "10m (500mm rise)",
       "8m (533mm rise)"
      ],
      "x": "1:20 allows 10m; 1:12 allows 2m.",
      "r": "AD K, Diagram 2.1, p.18",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Maximum rise of a 1:20 ramp flight with a 10m going?",
      "a": [
       "500"
      ],
      "u": "mm",
      "x": "Then you need a landing.",
      "r": "AD K, Diagram 2.1, p.18",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Buildings other than dwellings: minimum ramp width?",
      "a": [
       "1500"
      ],
      "u": "mm",
      "x": "Between walls, upstands or kerbs.",
      "r": "AD K, para 2.9, p.20",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Non-dwellings: minimum ramp landing lengths?",
      "o": [
       "1200mm at head and foot, 1500mm intermediate",
       "900mm everywhere",
       "1500mm at head and foot, 1200mm intermediate",
       "1800mm everywhere"
      ],
      "x": "Clear of door swings.",
      "r": "AD K, para 2.13, p.20",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Ramp passing places should be at least how many mm square?",
      "a": [
       "1800"
      ],
      "u": "mm",
      "x": "Where you can’t see end to end, or there are three or more flights.",
      "r": "AD K, para 2.13, p.21",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Minimum height of the contrasting kerb on the open side of a ramp?",
      "a": [
       "100"
      ],
      "u": "mm",
      "x": "",
      "r": "AD K, para 2.5, p.19",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "A change of level of 300mm or more should have…",
      "o": [
       "A ramp and two or more clearly signed steps",
       "A ramp only",
       "A single step",
       "A lift"
      ],
      "x": "Some people find steps easier than ramps.",
      "r": "AD K, para 2.6, p.19",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Dwellings: a ramp needs no handrails if it rises no more than how many mm?",
      "a": [
       "600"
      ],
      "u": "mm",
      "x": "",
      "r": "AD K, para 2.12, p.20",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k3",
    "name": "Guarding heights",
    "sec": "Section 3 · Protection from falling",
    "page": 22,
    "intro": "Guarding is needed at the edges of floors, galleries, balconies, accessible roofs, rooflights, light wells and sunken areas where people could fall. Diagram 3.1 sets heights: in a house, 900mm on stairs, landings, ramps and internal floor edges and 1100mm on external balconies and roof edges; in most other buildings, 900mm on flights and 1100mm elsewhere.",
    "watch": [
     "Opening windows in any building: guarding (sill) height 800mm — roof windows in loft extensions follow AD B instead.",
     "Assembly: 800mm within 530mm in front of fixed seating.",
     "Guarding isn’t needed where it would obstruct normal use, e.g. loading bay edges, or on vehicle-only ramps.",
     "Loads: BS EN 1991-1-1 with its UK National Annex and PD 6688-1-1. BS 6180 helps with barrier design; glazed guarding also meets Section 5.",
     "Maintenance areas used at least monthly need permanent guarding; less often, temporary guarding or warning signs may do."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Guarding height for an external balcony on a house?",
      "o": [
       "1100mm",
       "900mm",
       "1000mm",
       "800mm"
      ],
      "x": "Including Juliet balconies.",
      "r": "AD K, Diagram 3.1, p.24",
      "art": "balcony",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "A Juliet balcony on a house needs guarding 1100mm high.",
      "a": true,
      "x": "Diagram 3.1 groups Juliet balconies with external balconies.",
      "r": "AD K, Diagram 3.1, p.24",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Guarding height on an internal landing in a house?",
      "a": [
       "900"
      ],
      "u": "mm",
      "x": "Stairs, landings, ramps and internal floor edges: 900mm.",
      "r": "AD K, Diagram 3.1, p.24",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Office: guarding at the edge of a floor or gallery?",
      "o": [
       "1100mm",
       "900mm",
       "1000mm",
       "800mm"
      ],
      "x": "900mm on flights, 1100mm everywhere else.",
      "r": "AD K, Diagram 3.1, p.24",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Minimum guarding height at an opening window (any building)?",
      "a": [
       "800"
      ],
      "u": "mm",
      "x": "Usually the sill height.",
      "r": "AD K, Diagram 3.1, p.24",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Assembly building: guarding height within 530mm in front of fixed seating?",
      "a": [
       "800"
      ],
      "u": "mm",
      "x": "Lower, so it doesn’t block sightlines.",
      "r": "AD K, Diagram 3.1, p.24",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Light-traffic factory: stairs and landings?",
      "o": [
       "900mm on stairs, 1100mm on landings",
       "1100mm on both",
       "900mm on both",
       "1000mm on both"
      ],
      "x": "",
      "r": "AD K, Diagram 3.1, p.24",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Which standard sets the loads guarding must resist?",
      "o": [
       "BS EN 1991-1-1 (with UK NA and PD 6688-1-1)",
       "BS 5395-2",
       "BS EN 12600",
       "BS 8300"
      ],
      "x": "BS 6180 gives further barrier guidance.",
      "r": "AD K, para 3.2, p.23",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "Guarding must be provided along a loading bay edge even if it obstructs loading.",
      "a": false,
      "x": "Not where it would obstruct normal use — see Section 4 for loading bays instead.",
      "r": "AD K, para 3.1, p.23",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k4",
    "name": "Vehicle barriers and loading bays",
    "sec": "Section 4 · Vehicle barriers and loading bays",
    "page": 26,
    "intro": "Where vehicles can reach the edge of a floor, roof or ramp that is above the ground or another vehicle route — think multi-storey car parks — barriers stop them going over. Loading bays need a way for people to get clear of a reversing vehicle.",
    "watch": [
     "Any wall, parapet or similar can act as a barrier if it’s tall and strong enough.",
     "Barrier loads: BS EN 1991-1-1 with UK NA and PD 6688-1-1.",
     "Wide loading bays (three or more vehicles): two stepped exits, one each side, or one exit plus a refuge.",
     "If pedestrian guarding at a loading bay is impractical, agree alternative safeguards with building control."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Minimum vehicle barrier height at the edge of a floor or roof?",
      "a": [
       "375"
      ],
      "u": "mm",
      "x": "610mm at the edge of a ramp.",
      "r": "AD K, Diagram 4.2, p.28",
      "art": "vbar",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Minimum vehicle barrier height at the edge of a ramp?",
      "a": [
       "610"
      ],
      "u": "mm",
      "x": "375mm at floor and roof edges.",
      "r": "AD K, Diagram 4.2, p.28",
      "art": "vbar:ramp",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Where should a loading bay’s exit from the lower level be?",
      "o": [
       "As near the centre of the rear wall as possible",
       "At one corner",
       "Beside the vehicle door",
       "Anywhere"
      ],
      "x": "So someone can escape whichever way the vehicle reverses.",
      "r": "AD K, para 4.3, p.28",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "A loading bay for three or more vehicles needs…",
      "o": [
       "Two stepped exits, one each side, or one exit plus a refuge",
       "One exit at the centre",
       "A ramp at each end",
       "Nothing extra"
      ],
      "x": "Diagram 4.3.",
      "r": "AD K, para 4.3, p.28",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "A car park’s perimeter wall can act as the vehicle barrier.",
      "a": true,
      "x": "If it meets the height and load requirements.",
      "r": "AD K, para 4.2, p.27",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Vehicle barriers are needed at…",
      "o": [
       "Edges of floors, roofs and ramps above ground or another vehicle route",
       "Every parking space",
       "Only at ground-floor ramps",
       "Pedestrian crossings"
      ],
      "x": "Diagram 4.1.",
      "r": "AD K, para 4.1, p.27",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k5",
    "name": "Glazing in critical locations",
    "sec": "Section 5 · Protection against impact with glazing",
    "page": 30,
    "intro": "Glazing in \"critical locations\" — where people are most likely to walk into it — must break safely, be robust or in small panes, or be permanently screened. Critical locations are glazing between floor level and 800mm in walls and partitions, and between floor level and 1500mm in a door or within 300mm of either side of a door.",
    "watch": [
     "Safe breakage: Class 3 of BS EN 12600 (or Class C of BS 6206). Door and side panel panes wider than 900mm: Class 2 / Class B.",
     "Annealed glass by thickness: 8mm up to 1.1 × 1.1m, 10mm up to 2.25 × 2.25m, 12mm up to 3.0 × 4.5m, 15mm any size.",
     "Small panes: no wider than 250mm, no bigger than 0.5m², at least 6mm annealed (4mm in traditional leaded or copper lights if fire resistance doesn’t matter).",
     "A permanent screen must stop a 75mm sphere touching the glass, and be hard to climb if the glass prevents falls.",
     "Unlike K5, this applies to houses too."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Critical zone in walls and partitions: from floor level up to…",
      "a": [
       "800"
      ],
      "u": "mm",
      "x": "Anything lower is easy to walk into.",
      "r": "AD K, Diagram 5.1, p.31",
      "art": "glass",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Critical zone in doors and side panels: from floor level up to…",
      "a": [
       "1500"
      ],
      "u": "mm",
      "x": "Because people push on doors.",
      "r": "AD K, Diagram 5.1, p.31",
      "art": "glass:door",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Glazing within how many mm of either edge of a door counts as a door side panel?",
      "a": [
       "300"
      ],
      "u": "mm",
      "x": "",
      "r": "AD K, Diagram 5.1, p.31",
      "art": "glass:side",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Safe breakage normally means…",
      "o": [
       "Class 3 of BS EN 12600 (Class C of BS 6206)",
       "Class 1 of BS EN 12600",
       "Any toughened glass",
       "Wired glass"
      ],
      "x": "Class 2 / Class B also works for door panes wider than 900mm.",
      "r": "AD K, para 5.4, p.32",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Small panes: maximum size?",
      "o": [
       "250mm wide and 0.5m²",
       "500mm wide and 1m²",
       "300mm wide and 0.25m²",
       "400mm wide and 0.5m²"
      ],
      "x": "Diagram 5.3.",
      "r": "AD K, para 5.7, p.33",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Minimum thickness of annealed glass in a small pane?",
      "a": [
       "6"
      ],
      "u": "mm",
      "x": "4mm in traditional leaded or copper lights where fire resistance doesn’t matter.",
      "r": "AD K, para 5.7, p.33",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "10mm annealed glass is robust enough up to…",
      "o": [
       "2.25m × 2.25m",
       "1.1m × 1.1m",
       "3.0m × 4.5m",
       "Any size"
      ],
      "x": "8mm: 1.1m; 12mm: 3.0 × 4.5m; 15mm: any size.",
      "r": "AD K, Diagram 5.2, p.32",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "A protective screen must stop a sphere of what diameter reaching the glass?",
      "a": [
       "75"
      ],
      "u": "mm",
      "x": "And be hard to climb if the glass protects against falls.",
      "r": "AD K, para 5.8, p.34",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "Glazing in a house door doesn’t need to meet K4.",
      "a": false,
      "x": "K4 applies to all buildings, including dwellings.",
      "r": "AD K, Requirement K4, p.30",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k6",
    "name": "Open windows and manifestation",
    "sec": "Sections 6–7 · Projecting windows and manifestation of glazing",
    "page": 35,
    "intro": "In buildings other than dwellings, people shouldn’t walk into open windows, skylights or ventilators, and large areas of clear glass must be made obvious. Manifestation goes in two zones — 850–1000mm and 1400–1600mm above the floor — and must contrast with what’s behind it.",
    "watch": [
     "Parts that project into an access route below 2m need marking with a barrier or a surface feature, plus cane detection (Diagrams 6.1 and 6.2).",
     "In spaces used only for maintenance, clearly marking the projecting part is enough.",
     "Manifestation can be a logo or sign at least 150mm high, or decorative bands or broken lines at least 50mm high.",
     "Not needed where the glass is already obvious — e.g. panes under 400mm wide, or doors with substantial frames or large push plates.",
     "Glazed doors in glazed screens need a high-contrast strip at the top and both sides."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Manifestation on glazed doors and screens goes at…",
      "o": [
       "850–1000mm and 1400–1600mm",
       "600–800mm and 1200–1400mm",
       "900–1100mm only",
       "1000–1200mm and 1500–1700mm"
      ],
      "x": "Two zones catch both children and adults.",
      "r": "AD K, para 7.4, p.39",
      "art": "manif",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Minimum height of a logo or sign used as manifestation?",
      "a": [
       "150"
      ],
      "u": "mm",
      "x": "Decorative bands: at least 50mm.",
      "r": "AD K, para 7.4, p.39",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Minimum height of a decorative band used as manifestation?",
      "a": [
       "50"
      ],
      "u": "mm",
      "x": "A logo or sign must be 150mm.",
      "r": "AD K, para 7.4, p.39",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "Manifestation is a building regulation requirement for glazed doors in a new house.",
      "a": false,
      "x": "K5.2 doesn’t apply to dwellings.",
      "r": "AD K, Requirement K5.2, p.38",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Which glazing doesn’t need manifestation?",
      "o": [
       "A pane less than 400mm wide",
       "A 2m-wide shopfront",
       "A frameless glass door",
       "A glazed screen in a reception"
      ],
      "x": "Narrow panes are already obvious.",
      "r": "AD K, Diagram 7.1, p.40",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "A window projecting into an access route below 2m needs to be detectable by someone using a cane.",
      "a": true,
      "x": "Diagram 6.1 shows a barrier or surface feature.",
      "r": "AD K, para 6.1, p.36",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k7",
    "name": "Opening and cleaning windows",
    "sec": "Sections 8–9 · Safe opening, closing and cleaning of windows",
    "page": 41,
    "intro": "In buildings other than dwellings, window, skylight and ventilator controls must be reachable — or operated remotely — and windows must be safe to clean: from inside, from the ground, by ladder, cradle, harness anchor or walkway.",
    "watch": [
     "Above ground floor, where people could fall out of an opening window, fit opening limiters or guarding.",
     "Reversible windows need a mechanism to hold them reversed (BS 8213-1).",
     "Ladders up to 6m need nothing special; 6–9m need tying points; 9m is the maximum.",
     "Walkways for cleaning: at least 400mm wide, with guarding at least 1100mm high or harness anchorages.",
     "K5.4 doesn’t cover glazing that isn’t meant to be cleaned."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Maximum height of a window control with nothing in the way?",
      "a": [
       "1900"
      ],
      "u": "mm",
      "x": "1700mm if you have to reach over an obstruction.",
      "r": "AD K, Diagram 8.1, p.42",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Maximum height of a window control when reaching over an obstruction?",
      "a": [
       "1700"
      ],
      "u": "mm",
      "x": "1900mm when unobstructed.",
      "r": "AD K, Diagram 8.1, p.42",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "A remote control or electric opener is acceptable for a high-level window.",
      "a": true,
      "x": "Where controls can’t be within safe reach.",
      "r": "AD K, para 8.1, p.42",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Above ground floor, to stop falls through opening windows…",
      "o": [
       "Fit opening limiters or guarding",
       "Fit trickle vents",
       "Use fixed glazing only",
       "Nothing is needed"
      ],
      "x": "Guarding per Section 3.",
      "r": "AD K, para 8.2, p.42",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Maximum length of ladder for cleaning windows?",
      "a": [
       "9"
      ],
      "u": "m",
      "x": "Over 6m needs tying points (eyebolts).",
      "r": "AD K, para 9.1, p.44",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Ladders up to how long need no special provisions?",
      "a": [
       "6"
      ],
      "u": "m",
      "x": "6–9m need safety features.",
      "r": "AD K, para 9.1, p.44",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "num",
      "q": "Minimum width of a walkway used for cleaning windows?",
      "a": [
       "400"
      ],
      "u": "mm",
      "x": "With 1100mm guarding or harness anchorages.",
      "r": "AD K, para 9.1, p.44",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Reversible windows for cleaning from inside should follow…",
      "o": [
       "BS 8213-1",
       "BS 6206",
       "BS 5395-3",
       "BS EN 81-70"
      ],
      "x": "They need a holding mechanism.",
      "r": "AD K, para 9.1, p.44",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "id": "k8",
    "name": "Doors and gates",
    "sec": "Section 10 · Protection against impact from and trapping by doors",
    "page": 47,
    "intro": "K6 covers doors and gates in buildings other than dwellings. Sliding and upward-opening ones mustn’t fall on anyone, powered ones mustn’t trap anyone and must open in a power failure, and swing doors need a clear view of the other side.",
    "watch": [
     "Vision panels in leaves and side panels wider than 450mm, towards the leading edge, covering 500–1500mm (a break is allowed between 800mm and 1150mm).",
     "Sliding doors: a stop at the end of the track and a retaining rail.",
     "Upward-opening doors: a device to stop them falling.",
     "Powered doors: pressure-sensitive safety edges, an easily found stop switch, and opening in a power failure where needed.",
     "Doors that swing into an access route may need guarding with cane detection; fire escape doors are excluded."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Door leaves and side panels wider than how many mm need a vision panel?",
      "a": [
       "450"
      ],
      "u": "mm",
      "x": "Towards the leading edge.",
      "r": "AD K, para 10.1, p.48",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "The zone of visibility in a vision panel runs from…",
      "o": [
       "500mm to 1500mm",
       "800mm to 1150mm",
       "300mm to 1200mm",
       "900mm to 2000mm"
      ],
      "x": "A break (e.g. a rail) is allowed between 800 and 1150mm.",
      "r": "AD K, Diagram 10.1, p.49",
      "art": "vision",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "A sliding door needs…",
      "o": [
       "A stop at the end of the track and a retaining rail",
       "A vision panel",
       "A closer",
       "A kick plate"
      ],
      "x": "So it can’t run off the end or fall.",
      "r": "AD K, para 10.1, p.48",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "Power-operated doors need…",
      "o": [
       "Safety edges, a stop switch and opening in a power failure",
       "Only a key switch",
       "A vision panel only",
       "Nothing extra"
      ],
      "x": "So no one is trapped.",
      "r": "AD K, para 10.1, p.48",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "mc",
      "q": "An upward-opening door needs…",
      "o": [
       "A device to stop it falling",
       "Manifestation",
       "A vision panel",
       "A retaining rail"
      ],
      "x": "",
      "r": "AD K, para 10.1, p.48",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     },
     {
      "t": "tf",
      "q": "K6 applies to the doors of a passenger lift.",
      "a": false,
      "x": "Lift doors are excluded.",
      "r": "AD K, Requirement K6, p.47",
      "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   }
  ],
  "intro": "Part K keeps people safe from falls, collisions and impacts: stairs, ladders and ramps, guarding, vehicle barriers, glazing, windows and doors. This unit follows Approved Document K section by section.",
  "docs": [
   {
    "t": "Approved Document K (PDF)",
    "url": "https://assets.publishing.service.gov.uk/media/60d5bdcde90e07716f516cfd/Approved_Document_K.pdf"
   },
   {
    "t": "Approved Document K page",
    "url": "https://www.gov.uk/government/publications/protection-from-falling-collision-and-impact-approved-document-k"
   }
  ]
 },
 {
  "k": "L",
  "name": "Energy",
  "sub": "Now \"Energy and Greenhouse Gas Emissions\"",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "In 2026, Part L was renamed to…",
     "o": [
      "Energy and Greenhouse Gas Emissions",
      "Conservation of Fuel and Power",
      "Net Zero Buildings",
      "Thermal Performance"
     ],
     "x": "The 2026 amending regulations renamed Part L when the Future Homes and Buildings Standards were published.",
     "r": "SI 2026/335; AD L 2026"
    },
    {
     "t": "mc",
     "q": "When does AD L 2026 (the Future Homes and Buildings Standards) come into force?",
     "o": [
      "24 March 2027",
      "24 March 2026",
      "2025",
      "2030"
     ],
     "x": "It was published on 24 March 2026 and comes into force a year later, with transitional arrangements. Until then, AD L 2021 applies.",
     "r": "Building Circular 01/2026"
    },
    {
     "t": "mc",
     "q": "Under AD L 2021, energy performance of new dwellings is calculated using…",
     "o": [
      "SAP 10",
      "SBEM",
      "TM59",
      "PAS 2035"
     ],
     "x": "SAP is for dwellings; SBEM is for non-domestic buildings. TM59 is for overheating (Part O).",
     "r": "AD L Vol 1, 2021"
    },
    {
     "t": "num",
     "q": "Under AD L 2021, maximum air permeability for a new dwelling is how many m³/(h·m²) at 50 Pa?",
     "a": [
      "8"
     ],
     "u": "m³/(h·m²)",
     "x": "8 is the limiting value; most design targets are well below it.",
     "r": "AD L Vol 1, 2021, Table 4.1"
    },
    {
     "t": "tf",
     "q": "Under the Future Homes Standard, the Home Energy Model replaces SAP for assessing new homes.",
     "a": true,
     "x": "The Home Energy Model is the new government method for new dwellings under AD L 2026.",
     "r": "AD L 2026"
    }
   ],
   [
    {
     "t": "num",
     "q": "AD L 2021: limiting U-value for external walls in a new dwelling?",
     "a": [
      "0.26"
     ],
     "u": "W/m²K",
     "x": "Limiting values: walls 0.26, floors 0.18, roofs 0.16, windows 1.6. The notional dwelling uses much better values.",
     "r": "AD L Vol 1 2021, Table 4.1"
    },
    {
     "t": "num",
     "q": "AD L 2021: limiting U-value for the roof of a new dwelling?",
     "a": [
      "0.16"
     ],
     "u": "W/m²K",
     "x": "Lower is better.",
     "r": "AD L Vol 1 2021, Table 4.1"
    },
    {
     "t": "num",
     "q": "AD L 2021: limiting U-value for windows in a new dwelling?",
     "a": [
      "1.6"
     ],
     "u": "W/m²K",
     "x": "The window limit is set much higher than walls and roofs.",
     "r": "AD L Vol 1 2021, Table 4.1"
    },
    {
     "t": "mc",
     "q": "In an extension, windows, rooflights and doors should normally total no more than…",
     "o": [
      "25% of the extension floor area, plus any openings removed",
      "10% of the floor area",
      "50% of the floor area",
      "No limit"
     ],
     "x": "Going over this needs extra calculations to show the whole house still performs.",
     "r": "AD L Vol 1 2021"
    },
    {
     "t": "mc",
     "q": "New non-domestic buildings are usually assessed with…",
     "o": [
      "SBEM (or approved dynamic simulation software)",
      "SAP",
      "TM59",
      "RdSAP"
     ],
     "x": "SAP is for dwellings; SBEM is for non-domestic buildings.",
     "r": "AD L Vol 2 2021"
    }
   ]
  ],
  "intro": "Part L limits energy use and carbon emissions, and is now called Energy and Greenhouse Gas Emissions. AD L 2021 applies today; AD L 2026, the Future Homes and Buildings Standards, comes into force in March 2027.",
  "docs": [
   {
    "t": "Approved Document L (2021, in force now)",
    "url": "https://www.gov.uk/government/publications/conservation-of-fuel-and-power-approved-document-l"
   },
   {
    "t": "Approved Document L 2026",
    "url": "https://www.gov.uk/government/publications/approved-document-l-2026"
   }
  ]
 },
 {
  "k": "M",
  "name": "Access",
  "sub": "Volume 1 dwellings · Volume 2 other buildings",
  "lessons": [
   {
    "id": "m1s0",
    "vol": 1,
    "name": "The three categories",
    "sec": "Vol 1 Section 0 · M4(1), M4(2) and M4(3)",
    "page": 1,
    "intro": "Volume 1 covers new dwellings. Every new home must at least meet M4(1), visitable dwellings. M4(2), accessible and adaptable, and M4(3), wheelchair user, are optional requirements: they only apply when a planning condition says so, and then they replace M4(1). M4(3) splits into (2)(a) wheelchair adaptable, the default, and (2)(b) wheelchair accessible, only where the planning permission specifies it.",
    "watch": [
     "Part M Volume 1 doesn’t apply to extensions. After a material alteration, a home must be no less compliant with M4(1) than before.",
     "The person doing the work must tell building control which optional requirements apply.",
     "A shared approach route serving several categories follows the highest category it serves.",
     "Where Parts M and K both apply to a stepped or ramped approach, Part M takes precedence.",
     "Level approaches and thresholds still have to keep water out (Part C, C2 and C4).",
     "Part 4 of the Equality Act 2010 doesn’t apply to building new dwellings."
    ],
    "qs": [
     {
      "t": "match",
      "q": "Match each category to its name",
      "p": [
       [
        "M4(1)",
        "Visitable dwellings"
       ],
       [
        "M4(2)",
        "Accessible and adaptable dwellings"
       ],
       [
        "M4(3)",
        "Wheelchair user dwellings"
       ]
      ],
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "Which requirements apply only when a planning condition imposes them?",
      "o": [
       "M4(2) and M4(3)",
       "M4(1) only",
       "All three",
       "None"
      ],
      "x": "M4(1) is the default for every new dwelling.",
      "r": "AD M Vol 1, para 0.3, p.1",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "Which part of M4(3) applies unless the planning permission says otherwise?",
      "o": [
       "M4(3)(2)(a) wheelchair adaptable",
       "M4(3)(2)(b) wheelchair accessible",
       "Both",
       "Neither"
      ],
      "x": "(2)(b) applies only if the planning permission specifies it.",
      "r": "AD M Vol 1, para 0.5, p.1",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "tf",
      "q": "Requirement M4(1) applies to an extension to a house.",
      "a": false,
      "x": "Volume 1 doesn’t apply to extensions.",
      "r": "AD M Vol 1, M4(1) limits, p.3",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "tf",
      "q": "A dwelling can be required to meet both M4(1) and M4(2).",
      "a": false,
      "x": "M4(2) applies in substitution for M4(1).",
      "r": "AD M Vol 1, M4(2) limits, p.10",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "Parts K and M both apply to a stepped approach to a home. Which wins?",
      "o": [
       "Part M",
       "Part K",
       "Whichever is stricter on each point",
       "Building control decides"
      ],
      "x": "The relevant Part M requirement takes precedence.",
      "r": "AD M Vol 1, para 0.14, p.2",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "Who must tell building control that an optional requirement applies?",
      "o": [
       "The person carrying out the work",
       "The planning officer",
       "The future occupant",
       "The architect only"
      ],
      "x": "",
      "r": "AD M Vol 1, para 0.6, p.1",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "A shared path serves M4(1) and M4(3) homes. Which approach-route guidance applies?",
      "o": [
       "M4(3), the highest category served",
       "M4(1), the lowest",
       "An average of both",
       "Neither"
      ],
      "x": "",
      "r": "AD M Vol 1, para 0.4, p.1",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
   },
   {
    "id": "m1s1",
    "vol": 1,
    "name": "Category 1: visitable",
    "sec": "Vol 1 Section 1 · M4(1) visitable dwellings",
    "page": 4,
    "intro": "M4(1) makes a home visitable: most people, including many wheelchair users, can approach it, get in, reach the habitable rooms and a WC on the entrance storey, and use switches and sockets. Key terms: level means no steeper than 1:60, gently sloping 1:60–1:20, ramped 1:20–1:12.",
    "watch": [
     "Approach route at least 900mm wide, cross-fall no more than 1 in 40. A driveway needs an extra 900mm so a wheelchair user can pass a parked car.",
     "Steps only on steeply sloping plots: rises 75–150mm, goings at least 280mm, no more than 1800mm rise between landings; three or more risers need a handrail at 850–1000mm.",
     "Any unavoidable step at the private entrance: no more than 150mm.",
     "Corridors must never narrow below 750mm; obstructions like radiators no longer than 2m and not opposite a doorway.",
     "A standard 826mm door leaf (up to 44mm thick) is deemed to give 775mm clear.",
     "An accessible threshold is level, or no more than 15mm high in total."
    ],
    "qs": [
     {
      "t": "num",
      "q": "M4(1): minimum clear opening of the principal private entrance door?",
      "a": [
       "775"
      ],
      "u": "mm",
      "x": "The same applies to a communal entrance door.",
      "r": "AD M Vol 1, para 1.14, p.7",
      "art": "door",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(1): minimum width of the approach route?",
      "a": [
       "900"
      ],
      "u": "mm",
      "x": "Maximum cross-fall 1 in 40.",
      "r": "AD M Vol 1, para 1.6, p.4",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(1) external ramp flights can be…",
      "o": [
       "Up to 10m at 1:15, or up to 5m at 1:12",
       "Up to 2m at 1:12 only",
       "Up to 10m at 1:12",
       "Any length at 1:20"
      ],
      "x": "Minimum clear width 900mm, landings 1200mm long.",
      "r": "AD M Vol 1, para 1.7, p.4",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(1) external steps (steep plots only): rise per step?",
      "o": [
       "75–150mm",
       "150–170mm",
       "150–220mm",
       "100–190mm"
      ],
      "x": "Going at least 280mm.",
      "r": "AD M Vol 1, para 1.8, p.5",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "Table 1.1: a 775mm door approached at right angles needs a corridor at least…",
      "o": [
       "1050mm",
       "900mm",
       "1200mm",
       "750mm"
      ],
      "x": "750mm door: 1200mm; 800mm door: 900mm; head-on: 900mm.",
      "r": "AD M Vol 1, Table 1.1, p.8",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(1): switches and sockets serving habitable rooms are centred…",
      "o": [
       "450–1200mm above floor",
       "300–900mm above floor",
       "700–1000mm above floor",
       "600–1500mm above floor"
      ],
      "x": "Diagram 1.5.",
      "r": "AD M Vol 1, para 1.18, p.9",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(1): where must the WC be?",
      "o": [
       "On the entrance storey (or principal storey if no habitable room is on it)",
       "On any floor",
       "Next to the main bedroom",
       "Only in the bathroom"
      ],
      "x": "With step-free access from the habitable rooms.",
      "r": "AD M Vol 1, para 1.17, p.8",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "tf",
      "q": "In an M4(1) home, the entrance-storey WC door should open outwards.",
      "a": true,
      "x": "So someone who falls doesn’t block it.",
      "r": "AD M Vol 1, para 1.17, p.8",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "“Level” in Approved Document M means a gradient no steeper than…",
      "o": [
       "1:60",
       "1:40",
       "1:20",
       "1:12"
      ],
      "x": "Gently sloping: 1:60 to 1:20. Ramped: 1:20 to 1:12.",
      "r": "AD M Vol 1, Appendix A, p.51",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "An accessible threshold is no more than how many mm high in total?",
      "a": [
       "15"
      ],
      "u": "mm",
      "x": "Upstands over 5mm should be chamfered.",
      "r": "AD M Vol 1, Appendix A, p.51",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
   },
   {
    "id": "m1s2",
    "vol": 1,
    "name": "Category 2: approach and entrance",
    "sec": "Vol 1 Sections 2A–2B · M4(2) approach and entrances",
    "page": 11,
    "intro": "M4(2) homes suit a wide range of occupants and can be adapted later. They start with a step-free approach — level, gently sloping or ramped between 1:20 and 1:12 — to an entrance with a covered level landing and an 850mm door.",
    "watch": [
     "Private approach routes 900mm wide (750mm at obstructions); communal routes 1200mm (1050mm).",
     "Ramp flights 900mm wide (private) or 1200mm (communal), with 1200mm landings.",
     "Extra steps alongside a ramp: rises 150–170mm, goings 280–425mm.",
     "Private parking: at least one standard bay that can be widened to 3.3m. Dropped kerbs at least 1000mm wide.",
     "Communal entrance: 1500 × 1500mm level landing, 850mm door with 300mm nib, entry controls 900–1000mm. Communal lift car at least 1100 × 1400mm."
    ],
    "qs": [
     {
      "t": "num",
      "q": "M4(2): minimum clear opening of the principal private entrance door?",
      "a": [
       "850"
      ],
      "u": "mm",
      "x": "M4(1) needs 775mm.",
      "r": "AD M Vol 1, para 2.20, p.16",
      "art": "door",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(2): level landing outside the private entrance?",
      "o": [
       "1200 × 1200mm",
       "900 × 900mm",
       "1500 × 1500mm",
       "1000 × 1200mm"
      ],
      "x": "Covered to at least 900mm wide by 600mm deep.",
      "r": "AD M Vol 1, para 2.20, p.16",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(2): minimum clear space beside the leading edge of the entrance door (the nib)?",
      "a": [
       "300"
      ],
      "u": "mm",
      "x": "On the pull side.",
      "r": "AD M Vol 1, para 2.20, p.16",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(2): a private parking bay should be capable of widening to how many metres?",
      "a": [
       "3.3"
      ],
      "u": "m",
      "x": "From a standard 2.4m bay.",
      "r": "AD M Vol 1, para 2.12, p.13",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(2): communal lift car minimum size?",
      "o": [
       "1100 × 1400mm",
       "900 × 1250mm",
       "2000 × 1400mm",
       "800 × 1250mm"
      ],
      "x": "Doors at least 800mm clear.",
      "r": "AD M Vol 1, para 2.16, p.15",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(2): ramped approach gradients allowed?",
      "o": [
       "Between 1:20 and 1:12",
       "Between 1:20 and 1:15 only",
       "Up to 1:10",
       "Any gradient"
      ],
      "x": "M4(3) is stricter: 1:20 to 1:15.",
      "r": "AD M Vol 1, para 2.10, p.12",
      "art": "ramp",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(2): minimum clear width of a private approach route?",
      "a": [
       "900"
      ],
      "u": "mm",
      "x": "750mm at localised obstructions.",
      "r": "AD M Vol 1, para 2.9, p.11",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(2): level landing outside a communal entrance?",
      "o": [
       "1500 × 1500mm",
       "1200 × 1200mm",
       "900 × 1200mm",
       "1800 × 1800mm"
      ],
      "x": "",
      "r": "AD M Vol 1, para 2.14, p.14",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
   },
   {
    "id": "m1s3",
    "vol": 1,
    "name": "Category 2: inside the home",
    "sec": "Vol 1 Section 2B · M4(2) circulation, rooms, bathrooms and controls",
    "page": 17,
    "intro": "Inside an M4(2) home: halls at least 900mm wide, a stair that could take a stairlift, a living space and WC on the entrance storey, bedrooms with room around the bed, a bathroom on the same floor as the main bedroom, and walls ready for grab rails.",
    "watch": [
     "Doors on the entrance storey need a 300mm nib on the pull side.",
     "Stair to the floor above: 850mm clear width, measured 450mm above the pitch line.",
     "1200mm clear in front of and between kitchen units and appliances.",
     "Glazing to the principal living space starts no higher than 850mm.",
     "Bathroom and WC walls, ducts and boxings strong enough for 1.5kN/m² (grab rails later).",
     "Homes with three or more bedrooms: the entrance-storey WC also has a level access shower, or the potential for one."
    ],
    "qs": [
     {
      "t": "num",
      "q": "M4(2): minimum width of halls and landings?",
      "a": [
       "900"
      ],
      "u": "mm",
      "x": "Doors and corridors follow Table 2.1.",
      "r": "AD M Vol 1, para 2.22, p.17",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(2): minimum clear width of the stair to the floor above?",
      "a": [
       "850"
      ],
      "u": "mm",
      "x": "Measured 450mm above the pitch line, so a stairlift fits.",
      "r": "AD M Vol 1, para 2.23, p.17",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(2): clear space in front of and between kitchen units?",
      "a": [
       "1200"
      ],
      "u": "mm",
      "x": "M4(3) needs 1500mm.",
      "r": "AD M Vol 1, para 2.24, p.18",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(2): clear access zone around the principal double bed?",
      "o": [
       "750mm on both sides and the foot",
       "1000mm on both sides",
       "600mm on one side",
       "1200mm at the foot only"
      ],
      "x": "Other doubles: one side and the foot.",
      "r": "AD M Vol 1, para 2.25, p.18",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(2): glazing to the principal living space starts no higher than how many mm?",
      "a": [
       "850"
      ],
      "u": "mm",
      "x": "So you can see out sitting down.",
      "r": "AD M Vol 1, para 2.24, p.18",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(2): bathroom and WC walls should take loads of…",
      "o": [
       "1.5kN/m²",
       "0.5kN/m²",
       "3kN/m²",
       "5kN/m²"
      ],
      "x": "Ready for grab rails and seats.",
      "r": "AD M Vol 1, para 2.26, p.19",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(2): the bathroom should be on…",
      "o": [
       "The same floor as the principal bedroom",
       "The entrance storey",
       "Any floor",
       "The top floor"
      ],
      "x": "With a WC, basin and bath.",
      "r": "AD M Vol 1, para 2.29, p.20",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(2): consumer unit switches go at…",
      "o": [
       "1350–1450mm above floor",
       "450–1200mm",
       "900–1200mm",
       "700–1000mm"
      ],
      "x": "Boiler controls 900–1200mm; switches and sockets 450–1200mm.",
      "r": "AD M Vol 1, para 2.30, p.22",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "tf",
      "q": "In an M4(2) home with three bedrooms, the entrance-storey WC needs a level access shower or the potential for one.",
      "a": true,
      "x": "Smaller homes just need a WC and basin.",
      "r": "AD M Vol 1, para 2.27, p.19",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
   },
   {
    "id": "m1s4",
    "vol": 1,
    "name": "Category 3: approach and entrance",
    "sec": "Vol 1 Sections 3A–3B · M4(3) approach, parking and entrances",
    "page": 24,
    "intro": "M4(3) wheelchair user dwellings need step-free routes to every private entrance, gentle ramps between 1:20 and 1:15, parking with a 1200mm access zone, and big entrance landings with a turning circle inside the door.",
    "watch": [
     "Approach route at least 1200mm clear, with 1500 × 1500mm passing spaces at each end and no more than 10m apart.",
     "If a communal ramp rises 300mm or more, add steps too.",
     "Private parking: a standard bay (2.4 × 4.8m) with a 1200mm access zone to one side and the rear.",
     "Private entrance: 1500 × 1500mm level landing, covered to 1200 × 1200mm; the 300mm nib continues 1800mm beyond the door.",
     "Communal lift: car at least 1100 × 1400mm, to BS EN 81-70 type 2.",
     "Entry controls 900–1000mm above the floor."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "M4(3): ramp gradient range on the approach?",
      "o": [
       "1:20 to 1:15",
       "1:20 to 1:12",
       "1:15 to 1:12",
       "Up to 1:10"
      ],
      "x": "Flights at least 1200mm wide.",
      "r": "AD M Vol 1, para 3.10, p.25",
      "art": "ramp",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(3): minimum clear width of the approach route?",
      "a": [
       "1200"
      ],
      "u": "mm",
      "x": "M4(2) private routes need 900mm.",
      "r": "AD M Vol 1, para 3.9, p.25",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(3): width of the access zone beside and behind a private parking bay?",
      "a": [
       "1200"
      ],
      "u": "mm",
      "x": "",
      "r": "AD M Vol 1, para 3.12, p.27",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "A standard parking bay is…",
      "o": [
       "2.4 × 4.8m",
       "2.5 × 5.0m",
       "3.3 × 4.8m",
       "2.4 × 5.5m"
      ],
      "x": "",
      "r": "AD M Vol 1, Appendix A, p.52",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(3): level landing outside the private entrance?",
      "o": [
       "1500 × 1500mm",
       "1200 × 1200mm",
       "1800 × 1800mm",
       "900 × 1200mm"
      ],
      "x": "Clear of the door swing.",
      "r": "AD M Vol 1, para 3.22, p.31",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(3): diameter of the turning circle inside the private entrance?",
      "a": [
       "1500"
      ],
      "u": "mm",
      "x": "",
      "r": "AD M Vol 1, para 3.22, p.31",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(3): the 300mm nib beside the entrance door continues for how many mm beyond the door?",
      "a": [
       "1800"
      ],
      "u": "mm",
      "x": "",
      "r": "AD M Vol 1, para 3.22, p.31",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(3): door entry controls go at…",
      "o": [
       "900–1000mm",
       "450–1200mm",
       "1200–1400mm",
       "700–800mm"
      ],
      "x": "",
      "r": "AD M Vol 1, para 3.22, p.32",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
   },
   {
    "id": "m1s5",
    "vol": 1,
    "name": "Category 3: inside the home",
    "sec": "Vol 1 Section 3B · M4(3) storage, lifts, rooms, bathrooms and controls",
    "page": 32,
    "intro": "Inside a wheelchair user dwelling: somewhere to store and charge a wheelchair, a lift or space for one, bigger kitchens and bedrooms, wet rooms with level access showers, and controls in a narrower 700–1000mm band.",
    "watch": [
     "Wheelchair adaptable homes need space for a future through-floor lift; wheelchair accessible homes need it installed.",
     "Kitchen worktop length is set by bedspaces (Tables 3.3 and 3.4).",
     "Every bedroom has a 1200 × 1200mm space inside the door; the principal double bed needs 1000mm zones on both sides and the foot.",
     "Bathrooms need a 1500mm turning circle; level access showers 1200 × 1200mm.",
     "Door handles, locks and latches 850–1000mm; consumer unit 1350–1450mm.",
     "Private outdoor space at least 1500mm wide with a level 1500mm turning circle."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "M4(3): wheelchair storage and transfer space on the entrance storey?",
      "o": [
       "1100 × 1700mm",
       "900 × 1200mm",
       "1500 × 1500mm",
       "800 × 1250mm"
      ],
      "x": "With a power socket for charging.",
      "r": "AD M Vol 1, para 3.25, p.33",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(3) wheelchair adaptable: future through-floor liftway at least…",
      "o": [
       "1100 × 1650mm",
       "900 × 1400mm",
       "1100 × 1400mm",
       "2000 × 1400mm"
      ],
      "x": "Wheelchair accessible homes have the lift installed.",
      "r": "AD M Vol 1, para 3.28, p.34",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(3): clear access zone in front of and between kitchen units?",
      "a": [
       "1500"
      ],
      "u": "mm",
      "x": "M4(2) needs 1200mm.",
      "r": "AD M Vol 1, para 3.32, p.36",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(3): switches, sockets and stopcocks are centred…",
      "o": [
       "700–1000mm above floor",
       "450–1200mm",
       "900–1200mm",
       "300–1000mm"
      ],
      "x": "And at least 700mm from an inside corner.",
      "r": "AD M Vol 1, para 3.44, p.49",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(3): access zone on both sides and the foot of the principal double bed?",
      "a": [
       "1000"
      ],
      "u": "mm",
      "x": "M4(2) needs 750mm.",
      "r": "AD M Vol 1, para 3.35, p.38",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "num",
      "q": "M4(3): turning circle in the bathroom?",
      "a": [
       "1500"
      ],
      "u": "mm",
      "x": "It may overlap the shower.",
      "r": "AD M Vol 1, paras 3.38–3.39, p.42",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(3): combined living, dining and kitchen area for a 4-bedspace home (Table 3.2)?",
      "o": [
       "29m²",
       "25m²",
       "33m²",
       "37m²"
      ],
      "x": "25m² for 2 bedspaces, rising 2m² per bedspace to 37m² for 8.",
      "r": "AD M Vol 1, Table 3.2, p.36",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     },
     {
      "t": "mc",
      "q": "M4(3): door handles, locks and latches go at…",
      "o": [
       "850–1000mm",
       "700–1000mm",
       "450–1200mm",
       "1000–1200mm"
      ],
      "x": "",
      "r": "AD M Vol 1, para 3.44, p.49",
      "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
   },
   {
    "id": "m2s0",
    "vol": 2,
    "name": "Requirements M1–M3",
    "sec": "Vol 2 Section 0 · Requirements and general guidance",
    "page": 8,
    "intro": "Volume 2 covers buildings other than dwellings: new buildings, extensions, material alterations, and changes of use to a hotel, institution, public building or shop. M1 is access to and use of the building; M2 access to extensions; M3 sanitary conveniences in extensions. Since 2020 Changing Places toilets are required in larger public buildings, and the 2024 amendments align the document with Part T.",
    "watch": [
     "Visual contrast means a light reflectance value (LRV) difference of more than 30 points — 20 points can be enough where lighting is above 200 lux.",
     "M1 doesn’t apply to parts used solely for inspection, repair or maintenance.",
     "M2 doesn’t apply where there’s suitable access through the existing building; M3 doesn’t apply where suitable toilets elsewhere in the building can be reached.",
     "Historic buildings: balance access against conservation; an access strategy helps explain the approach.",
     "Equality Act 2010 duties sit alongside Part M — meeting one doesn’t discharge the other."
    ],
    "qs": [
     {
      "t": "match",
      "q": "Match each requirement to its topic",
      "p": [
       [
        "M1",
        "Access to and use of buildings"
       ],
       [
        "M2",
        "Access to extensions"
       ],
       [
        "M3",
        "Sanitary conveniences in extensions"
       ]
      ],
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Visual contrast normally needs an LRV difference of more than…",
      "o": [
       "30 points",
       "10 points",
       "50 points",
       "5 points"
      ],
      "x": "20 points may do where illuminance is above 200 lux.",
      "r": "AD M Vol 2, Section 0 definitions, p.14",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Where lighting is above 200 lux, the minimum LRV difference can drop to…",
      "o": [
       "20 points",
       "25 points",
       "15 points",
       "10 points"
      ],
      "x": "Otherwise more than 30.",
      "r": "AD M Vol 2, Section 0 definitions, p.14",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "tf",
      "q": "M2 applies even where suitable access to the extension is through the existing building.",
      "a": false,
      "x": "M2 doesn’t apply in that case.",
      "r": "AD M Vol 2, Requirement M2, p.8",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Part M applies to a material change of use to…",
      "o": [
       "A hotel, institution, public building or shop",
       "Any use at all",
       "A dwelling",
       "A warehouse"
      ],
      "x": "",
      "r": "AD M Vol 2, Section 0, p.12",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "What did the 2020 amendments to Volume 2 introduce?",
      "o": [
       "Mandatory Changing Places toilets in larger public buildings",
       "Wider entrance doors",
       "Lifts in all new buildings",
       "Part T toilets"
      ],
      "x": "Paragraphs 5.6 and 5.7.",
      "r": "AD M Vol 2, Main changes",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Why was Volume 2 amended in 2024?",
      "o": [
       "To reflect the new Part T and Approved Document T",
       "To add Changing Places toilets",
       "To split it from Volume 1",
       "To add ramp gradients"
      ],
      "x": "Part T (toilet accommodation) came in through the 2024 amendment regulations.",
      "r": "AD M Vol 2, Main changes",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
   },
   {
    "id": "m2s1",
    "vol": 2,
    "name": "Approach, parking and ramps",
    "sec": "Vol 2 Section 1 · Level approach, parking and ramped access",
    "page": 16,
    "intro": "The route from the site boundary and car park to the entrance should be level (1:60 or flatter) or gently sloping (no steeper than 1:20, with landings for every 500mm rise). Anything at 1:20 or steeper is a ramp, limited by Table 1, and a total rise of more than 2m needs another way up, like a lift.",
    "watch": [
     "Approach routes at least 1.5m wide, with 1.8m × 2m passing places within sight of each other, no more than 50m apart.",
     "Cross-fall no steeper than 1:40; the level approach kept clear of obstructions up to 2.1m.",
     "Ramps: at least 1.5m wide, 1.2m landings at head and foot, 1.5m intermediate landings, 1800 × 1800mm passing-place landings, 100mm contrasting kerb on an open side.",
     "Provide steps as well when a ramp rises more than 300mm.",
     "Accessible parking bays as close as possible to the entrance, with 1200mm zones alongside and behind; a level, signed setting-down point."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "A “level” approach has a gradient no steeper than…",
      "o": [
       "1:60",
       "1:40",
       "1:20",
       "1:12"
      ],
      "x": "Up to 1:20 is gently sloping, with landings every 500mm rise.",
      "r": "AD M Vol 2, para 1.13, p.17",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Minimum surface width of an approach route?",
      "a": [
       "1.5",
       "1500"
      ],
      "u": "m",
      "x": "With passing places every 50m or less.",
      "r": "AD M Vol 2, para 1.13, p.17",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Passing places on an approach route should be at least…",
      "o": [
       "1.8m wide × 2m long",
       "1.5m × 1.5m",
       "1.2m × 1.8m",
       "2m × 2m"
      ],
      "x": "Within sight of each other, no more than 50m apart.",
      "r": "AD M Vol 2, para 1.13, p.17",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "A level approach route should be clear of obstructions up to what height?",
      "a": [
       "2.1",
       "2100"
      ],
      "u": "m",
      "x": "Other overhead hazards follow AD K Sections 6 and 10.",
      "r": "AD M Vol 2, para 1.13, p.17",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "What is the most any single ramp flight can have (Table 1)?",
      "o": [
       "A 10m going and a 500mm rise",
       "A 5m going and a 333mm rise",
       "A 2m going and a 166mm rise",
       "There is no limit"
      ],
      "x": "1:20 up to 10m, 1:15 up to 5m, 1:12 up to 2m.",
      "r": "AD M Vol 2, Table 1, p.19",
      "art": "ramp",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "When does a ramped approach need an alternative such as a lift?",
      "o": [
       "When the total rise is over 2m",
       "Over 500mm",
       "Over 1m",
       "Never"
      ],
      "x": "Long ramps are tiring.",
      "r": "AD M Vol 2, para 1.26, p.19",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Minimum surface width of an external ramp?",
      "a": [
       "1.5",
       "1500"
      ],
      "u": "m",
      "x": "",
      "r": "AD M Vol 2, para 1.26, p.19",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Ramp landing lengths?",
      "o": [
       "1.2m at head and foot, 1.5m intermediate",
       "1.5m at head and foot, 1.2m intermediate",
       "1.8m everywhere",
       "900mm everywhere"
      ],
      "x": "Passing-place landings: 1800 × 1800mm.",
      "r": "AD M Vol 2, para 1.26, p.20",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Width of the access zone beside an accessible parking bay?",
      "a": [
       "1200"
      ],
      "u": "mm",
      "x": "Plus a 1200mm safety zone at the vehicle end.",
      "r": "AD M Vol 2, Diagram 2, p.18",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
   },
   {
    "id": "m2s2",
    "vol": 2,
    "name": "Steps and handrails",
    "sec": "Vol 2 Section 1 · Stepped access and handrails",
    "page": 20,
    "intro": "External steps need uniform 150–170mm rises and 280–425mm goings, flights at least 1.2m wide, contrasting nosings, corduroy hazard warning surfaces at top and bottom, and handrails on both sides.",
    "watch": [
     "No more than 12 risers in a flight where the going is under 350mm; 18 where it’s 350mm or more.",
     "Landings at least 1200mm long at the top and bottom; no single steps.",
     "Nosings: contrasting material 55mm wide on the tread and the riser.",
     "Handrails: 900–1000mm above the pitch line and 900–1100mm above landings, extending 300mm beyond the top and bottom, circular 32–50mm."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "External steps to a public building: what rise per step?",
      "o": [
       "150–170mm",
       "150–220mm",
       "100–150mm",
       "170–200mm"
      ],
      "x": "Going 280–425mm.",
      "r": "AD M Vol 2, para 1.33, p.22",
      "art": "stair:rise",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "…and what going?",
      "o": [
       "280–425mm",
       "250–400mm",
       "220–300mm",
       "300–450mm"
      ],
      "x": "Same rise and going throughout the flight.",
      "r": "AD M Vol 2, para 1.33, p.22",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Minimum width of an external stepped flight?",
      "a": [
       "1.2",
       "1200"
      ],
      "u": "m",
      "x": "Landings at least 1200mm long.",
      "r": "AD M Vol 2, para 1.33, p.21",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Maximum risers in an external flight?",
      "o": [
       "12 if the going is under 350mm, 18 if 350mm or more",
       "12 always",
       "16 always",
       "20 if the going is over 400mm"
      ],
      "x": "Shallower steps allow longer flights.",
      "r": "AD M Vol 2, para 1.33, p.21",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Hazard warning surface at the top and bottom of external steps?",
      "o": [
       "Corduroy",
       "Blister",
       "Smooth contrasting",
       "Rubber matting"
      ],
      "x": "Blister paving is for crossings.",
      "r": "AD M Vol 2, para 1.33, pp.20–21",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Handrails to external steps and ramps sit at…",
      "o": [
       "900–1000mm above the pitch line, 900–1100mm above landings",
       "800–900mm everywhere",
       "1000–1100mm everywhere",
       "850–1000mm above landings"
      ],
      "x": "",
      "r": "AD M Vol 2, para 1.37, p.23",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "How far should handrails extend beyond the top and bottom of steps or a ramp?",
      "a": [
       "300"
      ],
      "u": "mm",
      "x": "Horizontally, ending in a way that won’t catch clothing.",
      "r": "AD M Vol 2, para 1.37, p.23",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Width of the contrasting nosing strip on each step?",
      "a": [
       "55"
      ],
      "u": "mm",
      "x": "On both the tread and the riser.",
      "r": "AD M Vol 2, para 1.33, p.21",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
   },
   {
    "id": "m2s3",
    "vol": 2,
    "name": "Entrances and doors",
    "sec": "Vol 2 Section 2 · Accessible entrances and doors",
    "page": 24,
    "intro": "The principal entrance and main staff entrance should be accessible, with a 1500 × 1500mm level landing, a level threshold (no more than 15mm if unavoidable), doors wide enough for Table 2, and opening forces of no more than 30N.",
    "watch": [
     "Table 2 (new / existing): straight-on 800/750mm; at right angles from a 1500mm route 800/750mm; from a 1200mm route 825/775mm; external doors used by the public 1000/775mm.",
     "300mm clear on the pull side between the leading edge and any return wall (manual doors).",
     "Powered doors: safety stops, sensors and fail-safe opening; manual controls 750–1000mm high.",
     "Revolving doors aren’t accessible — put an accessible door right next to them.",
     "Lobbies must let a wheelchair user clear one door before opening the next."
    ],
    "qs": [
     {
      "t": "num",
      "q": "New building: minimum effective clear width of an external door used by the public?",
      "a": [
       "1000"
      ],
      "u": "mm",
      "x": "775mm in an existing building.",
      "r": "AD M Vol 2, Table 2, p.25",
      "art": "door",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "New building: internal door approached straight on?",
      "o": [
       "800mm",
       "750mm",
       "825mm",
       "1000mm"
      ],
      "x": "750mm in an existing building.",
      "r": "AD M Vol 2, Table 2, p.25",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "New building: door at right angles off a corridor at least 1200mm wide?",
      "o": [
       "825mm",
       "800mm",
       "775mm",
       "900mm"
      ],
      "x": "From a 1500mm corridor, 800mm is enough.",
      "r": "AD M Vol 2, Table 2, p.25",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Existing building: external door used by the public?",
      "o": [
       "775mm",
       "750mm",
       "800mm",
       "1000mm"
      ],
      "x": "New buildings need 1000mm.",
      "r": "AD M Vol 2, Table 2, p.25",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Maximum opening force at the leading edge of a manual door?",
      "o": [
       "30N up to 30°, then 22.5N from 30° to 60°",
       "50N throughout",
       "20N throughout",
       "30N throughout"
      ],
      "x": "Otherwise use a powered door.",
      "r": "AD M Vol 2, para 2.13, p.25",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Maximum height of an unavoidable raised threshold?",
      "a": [
       "15"
      ],
      "u": "mm",
      "x": "Otherwise the threshold should be level.",
      "r": "AD M Vol 2, para 2.7, p.24",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Minimum level landing at an accessible entrance (each side)?",
      "a": [
       "1500"
      ],
      "u": "mm",
      "x": "1500 × 1500mm, clear of door swings.",
      "r": "AD M Vol 2, para 2.7, p.24",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "tf",
      "q": "A revolving door counts as an accessible entrance.",
      "a": false,
      "x": "Provide an accessible door immediately next to it.",
      "r": "AD M Vol 2, para 2.20, p.26",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Clear space beside the leading edge of a door on the pull side?",
      "a": [
       "300"
      ],
      "u": "mm",
      "x": "Between the leading edge and any return wall, on manual doors.",
      "r": "AD M Vol 2, para 2.17, p.26",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
   },
   {
    "id": "m2s4",
    "vol": 2,
    "name": "Corridors and lifts",
    "sec": "Vol 2 Section 3 · Reception, corridors, lifts and stairs",
    "page": 29,
    "intro": "Inside, a wheelchair user needs to reach reception, move along corridors at least 1200mm wide, and get between floors — preferably by passenger lift, with stairs always provided too.",
    "watch": [
     "Reception counters: part no higher than 760mm with a 700mm knee recess, and a hearing enhancement system like an induction loop.",
     "Corridors under 1800mm wide need 1800 × 1800mm passing places; slopes between 1:60 and 1:20 need level rest areas.",
     "Lift landings 1500 × 1500mm; call buttons 900–1100mm and at least 500mm from a return wall; car controls 900–1200mm.",
     "Lifting platforms travel at no more than 0.15m/s; over 2m of travel needs an enclosed liftway.",
     "Wheelchair platform stairlifts only in exceptional circumstances in existing buildings.",
     "Internal stairs and ramps follow AD K Sections 1 and 2."
    ],
    "qs": [
     {
      "t": "num",
      "q": "Minimum unobstructed corridor width?",
      "a": [
       "1200"
      ],
      "u": "mm",
      "x": "Passing places where it’s under 1800mm.",
      "r": "AD M Vol 2, para 3.14, p.31",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "A corridor narrower than 1800mm needs passing places of…",
      "o": [
       "1800 × 1800mm",
       "1500 × 1500mm",
       "1200 × 1800mm",
       "2000 × 1400mm"
      ],
      "x": "At reasonable intervals.",
      "r": "AD M Vol 2, para 3.14, p.31",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Minimum passenger lift car size?",
      "o": [
       "1100 × 1400mm",
       "900 × 1250mm",
       "2000 × 1400mm",
       "1000 × 1200mm"
      ],
      "x": "Fits a wheelchair user and one companion.",
      "r": "AD M Vol 2, para 3.34, p.33",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "A lift car big enough for any wheelchair and a 180° turn?",
      "o": [
       "2000 × 1400mm",
       "1100 × 1400mm",
       "1500 × 1500mm",
       "1800 × 1800mm"
      ],
      "x": "",
      "r": "AD M Vol 2, para 3.34, p.33",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Minimum clear width of passenger lift doors?",
      "a": [
       "800"
      ],
      "u": "mm",
      "x": "Power-operated sliding doors.",
      "r": "AD M Vol 2, para 3.34, p.34",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Lift landing call buttons go at…",
      "o": [
       "900–1100mm",
       "750–1000mm",
       "1200–1400mm",
       "400–1000mm"
      ],
      "x": "At least 500mm from a return wall.",
      "r": "AD M Vol 2, para 3.34, p.34",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Maximum vertical travel of a lifting platform without an enclosed liftway?",
      "a": [
       "2"
      ],
      "u": "m",
      "x": "More than 2m needs a liftway.",
      "r": "AD M Vol 2, para 3.43, p.35",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Maximum height of the lowered part of a reception counter?",
      "a": [
       "760"
      ],
      "u": "mm",
      "x": "At least 1500mm of counter, with a knee recess at least 700mm high.",
      "r": "AD M Vol 2, para 3.6, p.30",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "tf",
      "q": "A wheelchair platform stairlift is the preferred option in a new building.",
      "a": false,
      "x": "Only in exceptional circumstances, in existing buildings.",
      "r": "AD M Vol 2, para 3.49, p.36",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
   },
   {
    "id": "m2s5",
    "vol": 2,
    "name": "Seating, hotels and controls",
    "sec": "Vol 2 Section 4 · Facilities",
    "page": 38,
    "intro": "Facilities themselves must be usable: wheelchair spaces in audience seating, lower counters in bars and cafés, accessible hotel bedrooms, controls within reach, and aids to communication like hearing enhancement systems.",
    "watch": [
     "Each wheelchair space is 900 × 1400mm; up to 600 seats, 1% permanent spaces plus removable ones to make at least 6.",
     "Part of a bar or serving counter no higher than 850mm.",
     "At least one wheelchair-accessible bedroom for every 20 bedrooms, or part of 20.",
     "Sockets 400–1000mm, appliance switches 400–1200mm, light switches 900–1100mm, sockets at least 350mm from corners.",
     "Emergency pull cords with bangles at 100mm and 800–1000mm above floor."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Size of a wheelchair space in audience seating?",
      "o": [
       "900 × 1400mm",
       "800 × 1250mm",
       "1100 × 1400mm",
       "1500 × 1500mm"
      ],
      "x": "With 900mm access space beside it.",
      "r": "AD M Vol 2, para 4.12, p.39",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Up to 600 seats: how many wheelchair spaces?",
      "o": [
       "1% permanent (rounded up), plus removable ones to total 6",
       "1 per 100 removable only",
       "6 permanent",
       "2% permanent"
      ],
      "x": "Table 3.",
      "r": "AD M Vol 2, Table 3, p.39",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Maximum height of the lowered part of a bar or serving counter?",
      "a": [
       "850"
      ],
      "u": "mm",
      "x": "",
      "r": "AD M Vol 2, para 4.16, p.41",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Hotels: wheelchair-accessible bedrooms?",
      "o": [
       "At least 1 for every 20 bedrooms (or part)",
       "1 per 50",
       "1 per 10",
       "At least 2 per hotel"
      ],
      "x": "",
      "r": "AD M Vol 2, para 4.24, p.42",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Wall socket outlets go at…",
      "o": [
       "400–1000mm above floor",
       "450–1200mm",
       "700–1000mm",
       "900–1100mm"
      ],
      "x": "At least 350mm from room corners.",
      "r": "AD M Vol 2, para 4.30, p.44",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Light switches for public use go at…",
      "o": [
       "900–1100mm",
       "400–1000mm",
       "1200–1400mm",
       "750–1000mm"
      ],
      "x": "Aligned with door handles.",
      "r": "AD M Vol 2, para 4.30, p.44",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Sockets should be at least how many mm from a room corner?",
      "a": [
       "350"
      ],
      "u": "mm",
      "x": "",
      "r": "AD M Vol 2, para 4.30, p.44",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Emergency assistance pull cords need bangles at…",
      "o": [
       "100mm and 800–1000mm",
       "300mm and 1200mm",
       "Floor level only",
       "900–1100mm only"
      ],
      "x": "So they can be reached from the floor.",
      "r": "AD M Vol 2, para 4.30, p.44",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
   },
   {
    "id": "m2s6",
    "vol": 2,
    "name": "Toilets and Changing Places",
    "sec": "Vol 2 Section 5 · Sanitary accommodation",
    "page": 47,
    "intro": "Wherever toilets are provided there should be at least one wheelchair-accessible unisex toilet, no more than 40m away on the same floor. Separate-sex washrooms add ambulant and enlarged cubicles, and since 2020 larger public buildings also need a Changing Places toilet for people with complex and multiple impairments.",
    "watch": [
     "A unisex toilet that is the only toilet in the building widens from 1.5m to 2m, with a standing-height basin.",
     "Doors preferably open outward, with a horizontal closing bar; opening forces as for other doors.",
     "An enlarged cubicle (1200mm wide) is needed where there are four or more WC cubicles in a separate-sex washroom.",
     "Exposed heat emitters stay below 43°C, or are screened.",
     "Changing Places toilets are needed in: assembly, recreation and entertainment buildings for 350+ people; shopping centres of 30,000m²+; retail premises of 2500m²+; sports and leisure buildings over 5000m²; hospitals and primary care centres; crematoria and cemetery buildings. Layout: BS 8300-2."
    ],
    "qs": [
     {
      "t": "mc",
      "q": "Minimum size of a wheelchair-accessible unisex toilet?",
      "o": [
       "1500 × 2200mm",
       "1200 × 1800mm",
       "2000 × 2000mm",
       "1000 × 1500mm"
      ],
      "x": "Widened to 2m if it’s the only toilet.",
      "r": "AD M Vol 2, Diagram 18, p.50",
      "art": "wc",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Maximum travel distance to a wheelchair-accessible toilet on the same floor?",
      "a": [
       "40"
      ],
      "u": "m",
      "x": "",
      "r": "AD M Vol 2, para 5.10, p.50",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Minimum width of an enlarged WC cubicle?",
      "a": [
       "1200"
      ],
      "u": "mm",
      "x": "For people who need more room, e.g. with a child or crutches.",
      "r": "AD M Vol 2, para 5.14, p.53",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "An enlarged cubicle is needed where a separate-sex washroom has…",
      "o": [
       "Four or more WC cubicles",
       "Two or more",
       "Six or more",
       "Any cubicles"
      ],
      "x": "",
      "r": "AD M Vol 2, para 5.7, p.48",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "Retail premises need a Changing Places toilet from what gross floor area?",
      "o": [
       "2500m²",
       "1000m²",
       "5000m²",
       "30,000m²"
      ],
      "x": "Shopping centres and retail parks: 30,000m².",
      "r": "AD M Vol 2, para 5.7, p.48",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Assembly, recreation and entertainment buildings need a Changing Places toilet from what capacity?",
      "a": [
       "350"
      ],
      "u": "people",
      "x": "",
      "r": "AD M Vol 2, para 5.7, p.48",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "tf",
      "q": "Doors to wheelchair-accessible toilets should preferably open outwards.",
      "a": true,
      "x": "With a horizontal closing bar on the inside.",
      "r": "AD M Vol 2, para 5.10, p.50",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "num",
      "q": "Exposed heating surfaces in sanitary rooms should stay below what temperature?",
      "a": [
       "43"
      ],
      "u": "°C",
      "x": "Or be screened.",
      "r": "AD M Vol 2, para 5.4, p.47",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     },
     {
      "t": "mc",
      "q": "A wheelchair-accessible unisex toilet that is the only toilet in the building should be…",
      "o": [
       "2m wide, with a standing-height basin",
       "1.5m wide",
       "2.2m wide with two WCs",
       "Separate-sex"
      ],
      "x": "",
      "r": "AD M Vol 2, para 5.10, p.50",
      "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
     }
    ],
    "doc": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
   }
  ],
  "intro": "Part M makes buildings accessible. Volume 1 sets three categories of new home, M4(1) to M4(3); Volume 2 covers access into and around other buildings, facilities and toilets. This unit follows both volumes section by section.",
  "docs": [
   {
    "t": "Approved Document M Vol 1 (PDF)",
    "url": "https://assets.publishing.service.gov.uk/media/5a7f8a82ed915d74e622b17b/BR_PDF_AD_M1_2015_with_2016_amendments_V3.pdf"
   },
   {
    "t": "Approved Document M Vol 2 (PDF)",
    "url": "https://assets.publishing.service.gov.uk/media/66f6c5eec71e42688b65ee11/ADM__V2_with_2024_amendments.pdf"
   },
   {
    "t": "Approved Document M page",
    "url": "https://www.gov.uk/government/publications/access-to-and-use-of-buildings-approved-document-m"
   }
  ]
 },
 {
  "k": "O",
  "name": "Overheating",
  "sub": "New residential buildings",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Part O applies to…",
     "o": [
      "New residential buildings",
      "All new buildings",
      "Extensions to houses",
      "Offices only"
     ],
     "x": "Part O covers new dwellings and other new residential buildings such as care homes and student accommodation.",
     "r": "AD O"
    },
    {
     "t": "mc",
     "q": "Part O offers a simplified method, or dynamic thermal modelling using…",
     "o": [
      "CIBSE TM59",
      "SAP 10",
      "BS 8233",
      "BREEAM"
     ],
     "x": "TM59 is the CIBSE method for assessing overheating risk in homes.",
     "r": "AD O"
    },
    {
     "t": "tf",
     "q": "Part O applies when you build an extension to an existing house.",
     "a": false,
     "x": "It only applies to new residential buildings.",
     "r": "AD O"
    }
   ],
   [
    {
     "t": "mc",
     "q": "Openings can be assumed closed at night (for noise) if bedroom noise between 11pm and 7am would exceed…",
     "o": [
      "40 dB LAeq,T, or 55 dB LAFmax more than 10 times a night",
      "30 dB at any time",
      "60 dB LAeq,T",
      "70 dB once a night"
     ],
     "x": "Then other ways of removing heat are needed.",
     "r": "AD O, Section 3"
    },
    {
     "t": "tf",
     "q": "Part O applies to new hotels.",
     "a": false,
     "x": "Part O covers new dwellings and other new residential buildings, such as care homes and student accommodation, but not hotels.",
     "r": "AD O"
    },
    {
     "t": "mc",
     "q": "Under the simplified method, the limits on glazing depend mainly on…",
     "o": [
      "The building’s location and whether it has cross-ventilation",
      "The colour of the walls",
      "The number of bedrooms",
      "The heating system"
     ],
     "x": "High-risk locations, such as central London, get tighter limits.",
     "r": "AD O, Section 1"
    }
   ]
  ],
  "intro": "Part O limits overheating in new residential buildings, either by following the simplified method or by dynamic thermal modelling.",
  "docs": [
   {
    "t": "Approved Document O",
    "url": "https://www.gov.uk/government/publications/overheating-approved-document-o"
   }
  ]
 },
 {
  "k": "P",
  "name": "Electrical",
  "sub": "Electrical safety in dwellings",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Which of these is notifiable electrical work?",
     "o": [
      "Adding a new circuit",
      "Replacing a socket faceplate",
      "Swapping a light switch like-for-like",
      "Changing a lampshade"
     ],
     "x": "New circuits, replacing a consumer unit, and some work in bathrooms are notifiable.",
     "r": "AD P"
    },
    {
     "t": "mc",
     "q": "Notifiable work is usually self-certified by…",
     "o": [
      "An electrician in a competent person scheme",
      "The homeowner",
      "The architect",
      "The fire service"
     ],
     "x": "Registered installers notify building control for you. Otherwise you apply to building control directly.",
     "r": "AD P"
    },
    {
     "t": "tf",
     "q": "Part P applies to dwellings, not to offices.",
     "a": true,
     "x": "Part P covers electrical installations in and around dwellings, including gardens and outbuildings.",
     "r": "AD P"
    }
   ],
   [
    {
     "t": "tf",
     "q": "Replacing a consumer unit is notifiable electrical work.",
     "a": true,
     "x": "So is adding a new circuit, and most new work in special locations.",
     "r": "AD P"
    },
    {
     "t": "mc",
     "q": "Which counts as a \"special location\" under Part P?",
     "o": [
      "A room with a bath or shower",
      "A bedroom",
      "A hallway",
      "A loft"
     ],
     "x": "Work within the zones around a bath or shower is notifiable.",
     "r": "AD P"
    },
    {
     "t": "mc",
     "q": "After notifiable work by a registered installer, the homeowner should get…",
     "o": [
      "An Electrical Installation Certificate and a compliance certificate",
      "Nothing",
      "A planning permission",
      "An EPC"
     ],
     "x": "The installer’s scheme notifies building control.",
     "r": "AD P"
    }
   ]
  ],
  "intro": "Part P covers electrical safety in and around dwellings, and which electrical work must be notified to building control.",
  "docs": [
   {
    "t": "Approved Document P",
    "url": "https://www.gov.uk/government/publications/electrical-safety-approved-document-p"
   }
  ]
 },
 {
  "k": "Q",
  "name": "Security",
  "sub": "Doors and windows in new homes",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Part Q requires new dwellings to have…",
     "o": [
      "Easily accessible doors and windows that resist unauthorised entry",
      "CCTV at the entrance",
      "Burglar alarms",
      "Window bars on the ground floor"
     ],
     "x": "Q1 covers doors and windows that a burglar could easily reach.",
     "r": "AD Q"
    },
    {
     "t": "mc",
     "q": "Which standard is commonly used to show doors and windows meet Part Q?",
     "o": [
      "PAS 24",
      "BS 476",
      "PAS 2035",
      "BS 9999"
     ],
     "x": "PAS 24 tests the security of doorsets and windows.",
     "r": "AD Q"
    },
    {
     "t": "tf",
     "q": "Part Q applies when you replace windows in an existing house.",
     "a": false,
     "x": "Part Q applies to new dwellings.",
     "r": "AD Q"
    }
   ],
   [
    {
     "t": "mc",
     "q": "Under Part Q, a window is \"easily accessible\" if it is…",
     "o": [
      "On the ground floor or basement, or within 2m of a reachable flat roof",
      "Any window above the 2nd floor",
      "Only a door-height window",
      "Any roof light"
     ],
     "x": "These windows need to meet security standards like PAS 24.",
     "r": "AD Q"
    },
    {
     "t": "tf",
     "q": "Part Q covers doors leading into a flat from a communal area.",
     "a": true,
     "x": "Doors giving access into a dwelling from a communal area need to be secure too.",
     "r": "AD Q"
    }
   ]
  ],
  "intro": "Part Q requires new homes to have doors and windows that resist unauthorised entry.",
  "docs": [
   {
    "t": "Approved Document Q",
    "url": "https://www.gov.uk/government/publications/security-in-dwellings-approved-document-q"
   }
  ]
 },
 {
  "k": "R",
  "name": "Broadband",
  "sub": "Gigabit-ready new homes",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Since 2022, new homes must have…",
     "o": [
      "Gigabit-capable broadband infrastructure",
      "A fibre connection to every room",
      "A 5G mast nearby",
      "Wi-Fi in common areas"
     ],
     "x": "New homes need gigabit-ready physical infrastructure, and a gigabit connection where one can be provided within a cost cap.",
     "r": "AD R, 2022"
    },
    {
     "t": "mc",
     "q": "The developer’s connection cost cap per dwelling is…",
     "o": [
      "£2,000",
      "£500",
      "£5,000",
      "£10,000"
     ],
     "x": "Above £2,000 per home, the next fastest connection is acceptable.",
     "r": "AD R, 2022"
    },
    {
     "t": "tf",
     "q": "Part R also covers in-building physical infrastructure, such as ducts and access points.",
     "a": true,
     "x": "R1 covers the physical infrastructure inside the building; R2 covers the connection.",
     "r": "AD R"
    }
   ],
   [
    {
     "t": "mc",
     "q": "Requirement R1 covers in-building infrastructure running from the access point to…",
     "o": [
      "A network termination point in each dwelling",
      "The nearest exchange",
      "The street cabinet only",
      "The loft"
     ],
     "x": "R1 is the physical infrastructure; R2 is the gigabit connection itself.",
     "r": "AD R"
    },
    {
     "t": "tf",
     "q": "Part R applies to new dwellings, and to dwellings formed by a material change of use.",
     "a": true,
     "x": "Both must be gigabit-ready.",
     "r": "AD R"
    }
   ]
  ],
  "intro": "Part R makes new homes ready for gigabit broadband — from the physical infrastructure inside the building to the connection itself.",
  "docs": [
   {
    "t": "Approved Document R",
    "url": "https://www.gov.uk/government/publications/infrastructure-for-electronic-communications-approved-document-r"
   }
  ]
 },
 {
  "k": "S",
  "name": "EV charging",
  "sub": "Charge points and cable routes",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "A new dwelling with associated parking needs…",
     "o": [
      "At least one EV charge point",
      "Cable routes only",
      "A charge point for every two homes",
      "Nothing, it’s optional"
     ],
     "x": "Each new dwelling with associated parking needs at least one charge point.",
     "r": "AD S"
    },
    {
     "t": "build",
     "q": "Each charge point needs a minimum output of ___ kW.",
     "a": [
      "7"
     ],
     "d": [
      "3",
      "11",
      "22"
     ],
     "x": "7kW is the minimum nominal rated output.",
     "r": "AD S",
     "art": "ev"
    },
    {
     "t": "num",
     "q": "Charge points need a minimum nominal rated output of…",
     "a": [
      "7"
     ],
     "u": "kW",
     "x": "7kW is the minimum output.",
     "r": "AD S",
     "art": "ev"
    },
    {
     "t": "mc",
     "q": "A new non-residential building with more than 10 parking spaces needs…",
     "o": [
      "One charge point, plus cable routes for 1 in 5 spaces",
      "Charge points in every space",
      "Cable routes only",
      "One charge point per 10 spaces"
     ],
     "x": "At least one charge point, plus cable routes for one in five of the spaces.",
     "r": "AD S"
    }
   ],
   [
    {
     "t": "mc",
     "q": "EV charge points installed under Part S must be…",
     "o": [
      "Smart charge points",
      "Rapid 50kW chargers",
      "Three-phase only",
      "Wall-mounted only"
     ],
     "x": "They must meet the smart charge point regulations.",
     "r": "AD S"
    },
    {
     "t": "mc",
     "q": "In new homes, charge points are only required up to an average connection cost of how much per charge point?",
     "o": [
      "£3,600",
      "£500",
      "£1,000",
      "£10,000"
     ],
     "x": "Above the £3,600 average cap, cable routes can be installed instead of charge points.",
     "r": "AD S"
    }
   ]
  ],
  "intro": "Part S requires electric vehicle charge points and cable routes in new buildings and some major renovations.",
  "docs": [
   {
    "t": "Approved Document S",
    "url": "https://www.gov.uk/government/publications/infrastructure-for-charging-electric-vehicles-approved-document-s"
   }
  ]
 },
 {
  "k": "T",
  "name": "Toilets",
  "sub": "Toilet accommodation, 2024",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "AD T requires new non-domestic buildings to provide…",
     "o": [
      "Universal toilets: a self-contained room with a WC and basin",
      "Only gender-neutral toilets",
      "A toilet for every 10 people",
      "Toilets on every floor"
     ],
     "x": "Universal toilets are fully enclosed rooms with their own WC and basin, provided alongside single-sex toilets where there’s space.",
     "r": "AD T, 2024 edition"
    },
    {
     "t": "tf",
     "q": "If there’s only space for one toilet, it should be a universal toilet.",
     "a": true,
     "x": "Where space allows only one toilet, it should be a universal toilet.",
     "r": "AD T, 2024 edition"
    },
    {
     "t": "mc",
     "q": "AD T was introduced in…",
     "o": [
      "2024",
      "2019",
      "2010",
      "2027"
     ],
     "x": "It is the newest Approved Document, added in 2024.",
     "r": "AD T, 2024 edition"
    }
   ]
  ],
  "intro": "Part T, added in 2024, sets out toilet provision in new non-domestic buildings, including universal toilets.",
  "docs": [
   {
    "t": "Approved Document T",
    "url": "https://www.gov.uk/government/publications/toilet-accommodation-approved-document-t"
   }
  ]
 },
 {
  "k": "7",
  "name": "Materials",
  "sub": "Regulation 7 and external walls",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "Regulation 7(1) requires building work to be done…",
     "o": [
      "With adequate and proper materials, in a workmanlike manner",
      "To the client’s satisfaction",
      "Using British-made materials",
      "By a registered contractor"
     ],
     "x": "Reg 7(1) covers the quality of materials and how the work is done.",
     "r": "Reg 7; AD 7"
    },
    {
     "t": "build",
     "q": "External walls of relevant buildings: class ___ or ___.",
     "a": [
      "A2-s1,d0",
      "A1"
     ],
     "d": [
      "B-s1,d0",
      "Class 0",
      "C-s3,d2"
     ],
     "any": true,
     "x": "Reg 7(2) requires A2-s1,d0 or A1, with listed exceptions.",
     "r": "Reg 7(2)"
    },
    {
     "t": "mc",
     "q": "In a \"relevant building\", materials in external walls should normally achieve which class?",
     "o": [
      "A2-s1,d0 or A1",
      "B-s3,d2",
      "Class 0",
      "C-s3,d2"
     ],
     "x": "Reg 7(2) bans combustible materials in external walls of relevant buildings, with listed exceptions.",
     "r": "Reg 7(2); AD B"
    },
    {
     "t": "num",
     "q": "The combustible materials ban applies to relevant buildings with a storey at least how many metres above ground?",
     "a": [
      "18"
     ],
     "u": "m",
     "x": "Relevant buildings have a storey at least 18m above ground and contain flats, hospitals, care homes, student accommodation and similar.",
     "r": "Reg 7(2)",
     "art": "height"
    },
    {
     "t": "tf",
     "q": "Since 2022, hotels, hostels and boarding houses are also covered by the ban.",
     "a": true,
     "x": "They were added by the 2022 amendments.",
     "r": "Building Regulations 2022 amendments"
    }
   ],
   [
    {
     "t": "mc",
     "q": "Which is exempt from the Regulation 7(2) combustible materials ban?",
     "o": [
      "Window frames and glass",
      "Insulation in the external wall",
      "Cladding panels",
      "Spandrel panels"
     ],
     "x": "Other exemptions include door frames, seals, gaskets, fixings and membranes.",
     "r": "Reg 7(3)"
    },
    {
     "t": "tf",
     "q": "Since 2022, metal composite panels with an unmodified polyethylene core are banned on all buildings, whatever their height.",
     "a": true,
     "x": "This ban applies to all buildings, not just relevant buildings over 18m.",
     "r": "Building Regulations 2022 amendments"
    }
   ]
  ],
  "intro": "Regulation 7 requires adequate and proper materials used in a workmanlike manner. Regulation 7(2) bans combustible materials in the external walls of relevant buildings.",
  "docs": [
   {
    "t": "Approved Document 7",
    "url": "https://www.gov.uk/government/publications/material-and-workmanship-approved-document-7"
   }
  ]
 },
 {
  "k": "HR",
  "name": "Higher-risk buildings",
  "sub": "Building Safety Act basics",
  "lessons": [
   [
    {
     "t": "mc",
     "q": "For building control, a higher-risk building is at least…",
     "o": [
      "18m or 7 storeys, with at least 2 residential units",
      "11m with any number of flats",
      "30m tall",
      "10 storeys"
     ],
     "x": "Hospitals and care homes meeting the height test also count during design and construction.",
     "r": "Building Safety Act 2022"
    },
    {
     "t": "mc",
     "q": "Who is the building control authority for higher-risk buildings?",
     "o": [
      "The Building Safety Regulator",
      "The local authority",
      "An approved inspector",
      "The fire service"
     ],
     "x": "The Building Safety Regulator handles building control for higher-risk buildings.",
     "r": "Building Safety Act 2022"
    },
    {
     "t": "mc",
     "q": "Gateway 2 is…",
     "o": [
      "Building control approval before work starts",
      "Planning permission",
      "Completion certificate",
      "The fire statement at planning"
     ],
     "x": "Gateway 1 is at planning, Gateway 2 is before construction starts, and Gateway 3 is at completion.",
     "r": "Building Safety Act 2022"
    }
   ],
   [
    {
     "t": "mc",
     "q": "Gateway 1 happens at…",
     "o": [
      "The planning stage, with a fire statement",
      "The start of building work",
      "Completion",
      "The first annual inspection"
     ],
     "x": "Gateway 2 is before building work starts and Gateway 3 is at completion.",
     "r": "Building Safety Act 2022"
    },
    {
     "t": "mc",
     "q": "For a new higher-risk building, how long does the BSR normally have to decide a Gateway 2 application?",
     "o": [
      "12 weeks",
      "5 weeks",
      "8 weeks",
      "26 weeks"
     ],
     "x": "Work to an existing higher-risk building has 8 weeks.",
     "r": "Building Safety Act 2022"
    },
    {
     "t": "mc",
     "q": "The \"golden thread\" is…",
     "o": [
      "Up-to-date digital information about the building, kept through its life",
      "A gold-coloured fire stopping product",
      "A type of fire alarm cable",
      "The planning history"
     ],
     "x": "It helps people understand the building and keep it safe.",
     "r": "Building Safety Act 2022"
    },
    {
     "t": "mc",
     "q": "Which two dutyholders carry the main building regulations duties during design and construction?",
     "o": [
      "The principal designer and principal contractor",
      "The client and the planning officer",
      "The architect and the estate agent",
      "The fire service and the BSR"
     ],
     "x": "The client must appoint them and make sure they’re competent.",
     "r": "Building Regulations 2010, Part 2A"
    }
   ]
  ],
  "intro": "The Building Safety Act 2022 created a stricter regime for higher-risk buildings, with the Building Safety Regulator as the building control authority and approval gateways at key stages.",
  "docs": [
   {
    "t": "Building Safety Act 2022",
    "url": "https://www.legislation.gov.uk/ukpga/2022/30/contents"
   },
   {
    "t": "Approved Document B",
    "url": "https://www.gov.uk/government/publications/fire-safety-approved-document-b"
   }
  ]
 }
];
