/* Building Regs Lab · Regulation Hunter pilot: 15 hunts (AD K 2013, AD B Vol 1 2019 incl. 2020-2026 amendments).
   Each hunt is marked by the block the player picks, not by typed text.
   accept: references that count as finding it (resolved against the current pack by tools/check_refs.js and in the app)
   near:   references that are close but not quite (pointer paragraphs, the version for another building type)
   follow: a question answered by reading the found text. Every answer here is quoted from that text.
   Status: written for the pilot; NOT yet independently reviewed. */
window.LAB_HUNTS = [
  {
    id: 'k-loft-headroom',
    doc: 'K',
    title: 'Loft stair headroom',
    brief:
      "A client is converting their loft into a bedroom. The new stair rises under the sloping roof and there isn't room for full headroom. Find what the guidance accepts instead.",
    accept: ['Diagram 1.4', 'para 1.13'],
    near: ['Diagram 1.3', 'para 1.11'],
    hint: 'Stairs are AD K. Look under headroom, and for something specific to loft conversions.',
    follow: {
      q: 'Under the reduced arrangement, what headroom is shown at the centre of the stair?',
      o: ['1.9m', '1.8m', '2.0m', '2.1m'],
      why: "Diagram 1.4 shows 1.9m at the centre of the stair width, falling to 1.8m at the side. It only applies where there isn't space for the 2m in Diagram 1.3."
    }
  },
  {
    id: 'k-rise-going',
    doc: 'K',
    title: 'Steepness of a house stair',
    brief: "You're drawing a new stair inside a house. Find the limits on the rise and going of each step.",
    accept: ['Table 1.1'],
    near: ['Diagram 1.1'],
    hint: 'AD K, Section 1. Look for steepness: a table, not a diagram.',
    follow: {
      q: 'According to the notes to that table, what is the maximum pitch of a private stair?',
      o: ['42°', '38°', '45°', '35°'],
      why: 'Note 1 to Table 1.1: the maximum pitch for a private stair is 42°. The table also gives twice the rise plus the going as 550mm to 700mm.'
    }
  },
  {
    id: 'k-open-risers',
    doc: 'K',
    title: 'Open risers in a house',
    brief:
      'The client wants an open-tread stair with no risers in their house. Find what the guidance needs for open risers.',
    accept: ['para 1.9'],
    near: ['para 1.39'],
    hint: 'AD K, Section 1, construction of steps, for dwellings.',
    follow: {
      q: 'Besides the sphere test, what does it say about the treads?',
      o: [
        'They should overlap by a minimum of 16mm',
        'They should be at least 300mm deep',
        'They should be non-slip',
        'They should be solid timber'
      ],
      why: 'Para 1.9: overlap treads by a minimum of 16mm, and make sure a 100mm diameter sphere cannot pass through the open risers.'
    }
  },
  {
    id: 'k-handrails',
    doc: 'K',
    title: 'Handrails on a wide stair',
    brief: 'A new stair is 1050mm wide. Find the guidance on handrail height and how many handrails it needs.',
    accept: ['para 1.34'],
    near: ['para 1.36', 'Diagram 1.11', 'Diagram 1.12'],
    hint: 'AD K, Section 1: handrails for stairs, for all buildings.',
    follow: {
      q: 'This stair is 1050mm wide. What does the guidance say?',
      o: [
        'Provide a handrail on both sides',
        'One handrail is enough',
        'A central handrail is required',
        'Handrails are optional'
      ],
      why: 'Para 1.34: if the stairs are 1000mm or wider, provide a handrail on both sides. The top of the handrail goes 900mm to 1000mm from the pitch line or floor.'
    }
  },
  {
    id: 'k-balcony-guarding',
    doc: 'K',
    title: 'Juliet balcony guarding',
    brief: 'A new house has a Juliet balcony off the main bedroom. Find how high its guarding should be.',
    accept: ['Diagram 3.1'],
    near: ['para 3.2', 'para 1.38'],
    hint: 'AD K, Section 3: design of guarding. The heights are set out by building type.',
    follow: {
      q: 'For a single family dwelling, what guarding height does it give for external balconies, including Juliet balconies?',
      o: ['1100mm', '900mm', '1000mm', '800mm'],
      why: 'Diagram 3.1: in single family dwellings, external balconies (including Juliet balconies) and edges of roofs need 1100mm. Stairs, landings and internal edges need 900mm.'
    }
  },
  {
    id: 'k-critical-glazing',
    doc: 'K',
    title: 'Glazing beside a door',
    brief:
      'A glazed side panel sits right beside a front door. Find where the guidance shows which areas of glazing are critical locations.',
    accept: ['Diagram 5.1', 'para 5.1'],
    near: ['para 5.2'],
    hint: "AD K, Section 5: glazing in critical locations. It's shown as a drawing.",
    follow: {
      q: 'Read the next paragraph too. Which of these is one of the ways it gives to deal with glazing in a critical location?',
      o: ['Glazing that breaks safely', 'Any glass at least 4mm thick', 'A warning sign', 'Frosted glass'],
      why: 'Para 5.2 gives three routes: glazing that breaks safely; glazing that is robust or in small panes; or permanently protecting it.'
    }
  },
  {
    id: 'k-manifestation',
    doc: 'K',
    title: 'Marking glass doors',
    brief:
      'An office reception has frameless glass doors and screens. Find at what heights they need to be marked so people notice them.',
    accept: ['Diagram 7.2', 'para 7.4'],
    near: ['Diagram 7.1'],
    hint: 'AD K, Section 7. The marking is called manifestation.',
    follow: {
      q: 'If a logo or sign is used as the marking, how tall does it need to be at least?',
      o: ['150mm', '50mm', '100mm', '300mm'],
      why: 'Para 7.4c: a logo or sign at least 150mm high, or a decorative feature such as broken lines or continuous bands at least 50mm high. Diagram 7.2 shows the two heights.'
    }
  },
  {
    id: 'k-guarding-children',
    doc: 'K',
    title: 'Stair guarding with toddlers',
    brief: 'Guarding to a stair in a home where children under five will live. Find what it needs to prevent.',
    accept: ['para 1.39'],
    near: ['para 1.9', 'Diagram 3.1'],
    hint: 'AD K, Section 1: guarding of stairs.',
    follow: {
      q: 'Besides the 100mm sphere test, what else should the guarding do?',
      o: ['Stop children readily climbing it', 'Be at least 1100mm high', 'Be glazed', 'Have handrails on both sides'],
      why: 'Para 1.39: a 100mm sphere must not pass through any opening, and the guarding should stop children readily being able to climb it.'
    }
  },
  {
    id: 'b-escape-window',
    doc: 'B1',
    title: 'Escape window size',
    brief:
      'A first-floor bedroom in a two-storey house will rely on an escape window. Find the size and position the opening needs.',
    accept: ['para 2.10'],
    near: ['para 3.6', 'para 2.2'],
    hint: 'AD B Volume 1, Section 2: houses (not flats). Look for emergency escape windows.',
    follow: {
      q: 'How high above the floor can the bottom of the openable area be, at most?',
      o: ['1100mm', '800mm', '1200mm', '900mm'],
      why: 'Para 2.10: at least 0.33m², at least 450mm high and 450mm wide, with the bottom of the opening no more than 1100mm above the floor.'
    }
  },
  {
    id: 'b-inner-room',
    doc: 'B1',
    title: 'A room reached through another room',
    brief:
      'In a house, a new room can only be reached by walking through another room. Find when that arrangement (an inner room) is allowed.',
    accept: ['para 2.11'],
    near: ['para 3.7', 'para 2.12'],
    hint: 'AD B Volume 1, Section 2, general provisions. This is the house version, not flats.',
    follow: {
      q: 'Which of these can always be an inner room, without an escape window?',
      o: ['A bathroom', 'A bedroom on the second floor', 'A home office', 'A playroom'],
      why: 'Para 2.11 allows a kitchen, laundry or utility room, dressing room, bathroom, WC or shower room, or a room on a storey no more than 4.5m above ground that has an escape window.'
    }
  },
  {
    id: 'b-loft-escape',
    doc: 'B1',
    title: 'Loft conversion, new top storey',
    brief:
      'A loft conversion adds a storey more than 4.5m above ground to a house. Find what escape arrangement the house then needs.',
    accept: ['para 2.5'],
    near: ['Diagram 2.1', 'para 2.6', 'para 5.4'],
    hint: 'AD B Volume 1, Section 2: escape from upper storeys more than 4.5m above ground.',
    follow: {
      q: 'What minimum fire resistance does it give for the construction separating a protected stairway?',
      o: ['REI 30', 'REI 60', 'E 20', 'EI 15'],
      why: 'Para 2.5a: a protected stairway is separated by fire resisting construction (minimum REI 30) at all storeys.'
    }
  },
  {
    id: 'b-alarms',
    doc: 'B1',
    title: 'Smoke alarms in a new home',
    brief: 'Find the minimum fire detection and alarm system for a new dwelling.',
    accept: ['para 1.1'],
    near: ['para 1.4'],
    hint: 'AD B Volume 1, Section 1: fire detection and alarm systems.',
    follow: {
      q: 'What minimum grade and category does it give?',
      o: ['Grade D2 Category LD3', 'Grade A Category L1', 'Grade D1 Category LD1', 'Grade F Category LD3'],
      why: 'Para 1.1: minimum Grade D2 Category LD3, to BS 5839-6. A higher standard should be considered where occupants would be at special risk from fire.'
    }
  },
  {
    id: 'b-flats-travel',
    doc: 'B1',
    title: 'Corridor length in flats',
    brief:
      "A block of flats has one common stair. Find the limit on travel distance from a flat's front door along the common corridor.",
    accept: ['Table 3.1'],
    near: ['para 3.27'],
    hint: 'AD B Volume 1, Section 3: means of escape in the common parts of flats. The figures are in a table.',
    follow: {
      q: 'What is the maximum travel distance where escape is in one direction only?',
      o: ['7.5m', '30m', '18m', '15m'],
      why: "Table 3.1: 7.5m in one direction, 30m in more than one direction. Read the table's notes too: they change things for small single stair buildings."
    }
  },
  {
    id: 'b-second-stair',
    doc: 'B1',
    title: 'When flats need a second stair',
    brief: 'Find when a block of flats must be served by more than one common stair.',
    accept: ['para 3.30'],
    near: ['para 3.27', 'Diagram 3.8'],
    hint: 'AD B Volume 1, Section 3: number of common stairs.',
    follow: {
      q: 'From what top-storey height does it say flats need more than one common stair?',
      o: ['18m or more', '11m or more', '30m or more', '4.5m or more'],
      why: "Para 3.30b: a top storey of 18m or more in height (measured as in Diagram D6). Para 3.30a covers storeys that don't meet the single-stair criteria."
    }
  },
  {
    id: 'b-sprinklers',
    doc: 'B1',
    title: 'Sprinklers in flats',
    brief: 'Find when a block of flats needs a sprinkler system.',
    accept: ['para 7.4'],
    near: [],
    hint: 'AD B Volume 1, Section 7: compartmentation and sprinklers in flats.',
    follow: {
      q: 'Do sprinklers need to go in fire-sterile common stairs and corridors?',
      o: ['No, within the individual flats', 'Yes, everywhere', 'Only in corridors', 'Only on the top storey'],
      why: "Para 7.4: blocks with a top storey more than 11m above ground need sprinklers throughout, in the flats. They don't need to go in fire-sterile common areas such as stairs, corridors or landings."
    }
  }
];
