const WA_PHONE = '923314041512';
const WA_MESSAGE =
  'Assalam o Alaikum, I would like to inquire about online Quran and Ahkam classes for my child.';
const EMAIL = 'meesum701110@gmail.com';
const EMAIL_SUBJECT = 'Inquiry for Online Shia Quran Classes';

export const SITE = {
  name:     'Qari M. Raza',
  fullName: 'Qari Syed Muhammad Raza',
  tagline:  'Online Quran & Ahkam-e-Deen Education',
  url:      'https://qari-raza.com',

  contact: {
    phone:          `+${WA_PHONE}`,
    phoneDisplay:   '+92 331 404 1512',
    email:          EMAIL,
    whatsappUrl:    `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`,
    emailUrl:       `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`,
    whatsappMessage: WA_MESSAGE,
  },

  nav: [
    { label: 'Home',           href: '#home'     },
    { label: 'About',          href: '#about'    },
    { label: 'Teaching Modes', href: '#teaching-modes' },
    { label: 'Contact',        href: '#contact'  },
  ],

  /* Header badge: left → right, Qari rendered last (rightmost) */
  badgePortraits: [
    {
      src: '/images/MaulanaManzoor_Pic.png',
      alt: 'Grandfather — Maulana Syed Manzoor Hussain Naqvi',
    },
    {
      src: '/images/AghaAbulHasan_Pic.png',
      alt: 'Father — Allama Syed Agha Abul Hasan',
    },
    {
      src: '/images/MRaza_Pic.png',
      alt: 'Qari Syed Muhammad Raza',
    },
  ] as const,

  /* Hero collage — Grandfather left · Qari center · Father right */
  heroPortraits: [
    {
      src: '/images/MaulanaManzoor_Pic.png',
      alt: 'Grandfather — Maulana Syed Manzoor Hussain Naqvi',
      role: 'left',
    },
    {
      src: '/images/MRaza_Pic.png',
      alt: 'Qari Syed Muhammad Raza',
      role: 'center',
    },
    {
      src: '/images/AghaAbulHasan_Pic.png',
      alt: 'Father — Allama Syed Agha Abul Hasan',
      role: 'right',
    },
  ] as const,

  teachingPlatforms: [
    {
      key:         'whatsapp',
      name:        'WhatsApp',
      description: 'One-on-one classes via WhatsApp.',
    },
    {
      key:         'skype',
      name:        'Skype',
      description: 'Interactive lessons with screen sharing.',
    },
    {
      key:         'zoom',
      name:        'Zoom',
      description: 'HD video classes with virtual whiteboard.',
    },
  ],

  hero: {
    badge:      'GLOBAL ONLINE SHIA QURAN CLASSES',
    headline:   'Online Shia Quran & Ahkam Classes with Qari Syed Muhammad Raza',
    subheading:
      'Son of the famous Scholar Allama Syed Agha Abul Hasan Naqvi (Imam Masjid-e-Jamkaran) & Grandson of the renowned scholar Maulana Syed Manzoor Hussain Naqvi (Author of Tohfatul Awam)',
    intro:
      'Qari Allama Syed Muhammad Raza holds over 30 years of experience teaching Quran, Ahkam-e-Deen (Fiqh-e-Jafaria), correct Shia principles and practices, proper Arabic Makharij, Quranic Tafseer, translations, Shia duas and ziyarat. His teaching style is friendly, engaging, and enriched with inspiring stories of the Prophets and Ahlul Bayt (A.S.), making learning enjoyable for children. Offering flexible scheduling across all major time zones for students in the US, Canada, Europe, and Australia.',
  },

  globalReach: {
    leftText:  'Proudly teaching students across the globe',
    rightText: 'Flexible across all major time zones',
    flags: [
      { code: 'pk', src: 'https://flagcdn.com/w80/pk.png', label: 'Pakistan' },
      { code: 'us', src: 'https://flagcdn.com/w80/us.png', label: 'United States' },
      { code: 'ca', src: 'https://flagcdn.com/w80/ca.png', label: 'Canada' },
      { code: 'gb', src: 'https://flagcdn.com/w80/gb.png', label: 'United Kingdom' },
      { code: 'au', src: 'https://flagcdn.com/w80/au.png', label: 'Australia' },
    ],
  } as const,

  authority: {
    sectionBadge: 'Credentials & Heritage',
    sectionTitle: 'A Legacy of Scholarship & Service',
    sectionSubtitle:
      'Rooted in a distinguished lineage of Islamic scholarship, Qari M. Raza brings both formal academic training and a living tradition of Quranic education.',
    academic: {
      title: 'Academic & Islamic Background',
      items: [
        'Six years of study completing the five-year Islamic Studies program at Imam Khomeini Education and Research Institute, Qom, Iran',
        'Bachelor of Science from Lahore, Pakistan',
        'Fluent in Urdu; basic proficiency in English and Farsi.',
      ],
    },
    family: {
      title: 'Family Legacy',
      items: [
        'Father served seven years as Imam of Jamkran Mosque in Qom and over twenty years as Imam of famous Shia Masjid, Islampura, Lahore',
        'All seven brothers are dedicated Shia Islamic Scholars currently serving the community',
        'Grandfather authored the famous book Tohfatul Awam',
      ],
    },
  },

  teaching: {
    sectionBadge: 'Teaching Modes',
    sectionTitle: 'Teaching Modes',
    sectionSubtitle:
      'Classes are conducted live, one-on-one or in small groups, using the platform most comfortable for you.',
  },

  cta: {
    heading:  'Begin Your Quranic Journey Today',
    subtext:
      'Connect directly to schedule your first lesson. Classes are available for all ages and levels.',
    primaryLabel:   'Chat on WhatsApp',
    secondaryLabel: 'Send an Email',
  },

  footer: {
    aboutText:
      'Bringing the Quran and Islamic teachings to your home, one lesson at a time.',
    arabicQuote: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
    copyright: `© ${new Date().getFullYear()} Qari M. Raza. All rights reserved.`,
  },

  images: {
    maulana:  '/images/MaulanaManzoor_Pic.png',
    agha:     '/images/AghaAbulHasan_Pic.png',
    raza:     '/images/MRaza_Pic.png',
    jamkaran: '/images/Jamkran_Shrine.png',
  },

  meta: {
    title:       'Qari M. Raza – Learn Quran & Ahkam-e-Deen Online | Shia Quran Tutor',
    description: 'Learn Quran, Ahkam-e-Deen, Arabic Makharij, Tafseer, and Shia duas with Qari Syed Muhammad Raza. Over 30 years of experience. Classes via WhatsApp, Skype & Zoom.',
    keywords:    'online Quran classes, Shia Quran tutor, Ahkam-e-Deen online, learn Quran, Islamic jurisprudence, Arabic Makharij, Quranic Tafseer',
    ogImage:     '/og-image.jpg',
  },

  jsonLd: {
    '@context': 'https://schema.org',
    '@type':    'EducationalOrganization',
    name:        'Qari M. Raza – Online Quran & Ahkam-e-Deen Classes',
    description: 'Learn Quran, Ahkam-e-Deen, Arabic Makharij, Tafseer, and Shia duas with Qari Syed Muhammad Raza.',
    url:         'https://qari-raza.com',
    contactPoint: {
      '@type':           'ContactPoint',
      telephone:         `+${WA_PHONE}`,
      contactType:       'customer service',
      email:             EMAIL,
      availableLanguage: ['Urdu', 'English', 'Farsi'],
    },
    founder: {
      '@type':    'Person',
      name:       'Qari Syed Muhammad Raza',
      jobTitle:   'Quran Teacher & Islamic Scholar',
    },
  },
} as const;
