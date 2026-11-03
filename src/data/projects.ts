import { asset, type Entry } from './types'

export const projects: Entry[] = [
  {
    id: 'moles',
    title: 'M.O.L.E.S. (Multi-Observation Link for Entrapped Survivors)',
    role: 'Hardware & Embedded Developer',
    event: 'ShellHacks 2026',
    period: 'September 2026',
    location: 'Florida International University, Miami, FL',
    tagline: 'Wireless sensors that detect breathing under rubble.',
    summary:
      'A set of small wireless sensors you place around a pile of rubble to detect the tiny movements of someone breathing underneath, inspired by the 2026 earthquakes in Venezuela.',
    tech: ['ESP32', 'UWB', 'C++', 'Python', 'Signal Processing', '3D Printing'],
    accent: 'red',
    emoji: '📡',
    images: [
      { src: asset('moles-1.jpeg'), alt: 'M.O.L.E.S. cover: three sensor nodes linked over a pile of rubble, ShellHacks 2026' },
      { src: asset('moles-2.jpeg'), alt: 'Three sensor nodes in their 3D-printed cases placed around a bin of rubble for testing' },
      { src: asset('moles-3.jpeg'), alt: 'Wiring an ESP32 board and radio module inside a 3D-printed sensor case' },
      { src: asset('moles-4.jpeg'), alt: 'The breathing simulator used for testing, built inside a 3D-printed box' },
      { src: asset('moles-5.jpeg'), alt: 'Graph showing a confirmed breathing signal at 20 breaths per minute, with two of three sensor links agreeing' },
    ],
    highlights: [
      'Each sensor sits in a 3D-printed case. Because the sensors watch the same spot from different angles, they double-check each other before confirming a signal.',
      "Streamed data from three ESP32 boards at the same time. To stay within the boards' limits, averaged the readings over 30-second windows and used frequency analysis to pick out breathing-rate movement.",
      'In testing, the sensors detected our breathing simulator at 20 breaths per minute, with multiple sensors agreeing on the signal.',
    ],
    team: ['Ian Lopez', 'Timothy Hawks', 'Jacob Bhatt'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/m-o-l-e-s-multi-observation-link-for-entrapped-survivors' },
      // TODO(Gregory): GitHub repo link if public
    ],
  },
  {
    id: 'panelly',
    title: 'Panelly, Solar Savings Estimator',
    role: 'Backend Lead',
    event: 'BloomKnights',
    period: 'July 2026',
    tagline: 'Realistic solar savings estimates for homeowners.',
    summary:
      'A solar-savings estimation pipeline combining the Google Solar API, EIA API, and Google Places to give homeowners a realistic savings estimate.',
    tech: ['Next.js', 'Google Solar API', 'EIA API', 'Zod'],
    accent: 'gold',
    emoji: '☀️',
    images: [
      { src: asset('panelly-1.jpeg'), alt: 'Panelly landing page: "Turn your energy habits into a solar savings plan"' },
      { src: asset('panelly-2.jpeg'), alt: 'Panelly home screen inviting the user to start the energy challenge' },
      { src: asset('panelly-3.jpeg'), alt: 'Panelly Energy Quest, a game-style form that asks about the household' },
      { src: asset('panelly-4.jpg'), alt: 'Group photo of hackathon participants' },
    ],
    highlights: [
      'Built the core solar-savings estimation pipeline using the Google Solar API, EIA API, and Google Places, adding a fallback for API coverage gaps.',
      'Excluded the recently repealed federal solar tax credit after researching current policy, keeping estimates accurate.',
      'Led and mentored a 4-person team as the sole backend developer, defining a shared Zod contract that let teammates build the UI, database, and gamification in parallel through a mid-project pivot in input design.',
    ],
    links: [
      { label: 'Live Site', href: 'https://panelly-nu.vercel.app' },
      { label: 'Devpost', href: 'https://devpost.com/software/panelly' },
      { label: 'GitHub', href: 'https://github.com/GiamSoo23/Panelly' },
    ],
  },
  {
    id: 'mox',
    title: 'Mox, Cross-Platform File Relay',
    role: 'Creator and Developer',
    period: 'May 2026',
    tagline: 'Move files between Mac and Android with one hotkey.',
    summary:
      'A cross-platform file-relay app moving files up to 500MB between Mac and Android through a private Supabase bucket.',
    tech: ['Swift', 'Kotlin', 'Supabase'],
    accent: 'teal',
    emoji: '🔁',
    images: [
      { src: asset('mox-1.jpg'), alt: 'Mox app icon' },
      { src: asset('mox-2.jpeg'), alt: 'Mox menu-bar app on a Mac, showing a file just received from Android' },
      { src: asset('mox-3.jpg'), alt: 'Mox Android app with a received file ready to save or share' },
    ],
    highlights: [
      'Built a Swift menu-bar app and a Kotlin Android share-target so files move between Mac and Android in one hotkey.',
      'Implemented signed-URL access and a single-file relay schema, enabling native Android share-sheet integration.',
    ],
    // TODO(Gregory): the Mox repo is private. Add its GitHub link here if you make it public.
  },
]
