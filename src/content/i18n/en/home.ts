import type { HomeContent } from '../types';

export const enHome = {
  metadata: {
    title: 'Nelson Secco — Senior Product Designer & UX Consultant',
    description: 'Senior Product Designer with a software-development background who also works as a UX Consultant across Design, Product, and Engineering.',
  },
  hero: {
    name: 'Nelson Secco',
    eyebrow: 'Senior Product Designer',
    title: 'Designing digital products for complex systems.',
    description: 'Senior Product Designer with a software-development background, working hands-on across Design, Product, and Engineering.',
    disciplines: ['UX Strategy', 'Product Discovery', 'Design Systems', 'AI-assisted Product Design'],
  },
  featuredCases: {
    title: 'Featured projects',
    actionLabel: 'View project →',
    projects: [
      {
        routeId: 'horizon-his',
        description: 'High-fidelity navigable prototype for a complex hospital information system, validated with clinical and domain stakeholders and presented at Hospitalar 2025.',
        tags: ['Healthtech', 'UX Leadership', 'Product Strategy'],
        tagsLabel: 'HORIZON HIS tags',
        image: { alt: 'Hospital information system prototype interface showing triage workflow and generated clinical data panels.' },
      },
      {
        routeId: 'subiter',
        description: 'Product Design leadership for a production inspection platform connecting operational workflows, traceability and AI-assisted review.',
        tags: ['Complex Systems', 'Inspections', 'AI-assisted Workflows'],
        tagsLabel: 'SUBITER tags',
        image: { alt: 'Editorial interface composition with inspection workflow grid, trend line and review summary panels.' },
      },
      {
        routeId: 'rede-dcc',
        description: 'Interaction design for a financial choice within a payment journey spanning transactional states, decision points and exception handling.',
        tags: ['Payments', 'Interaction Design', 'Transactional States'],
        tagsLabel: 'REDE DCC 1.0 tags',
        image: { alt: 'Payment interface composition showing transaction flow states and confirmation screens.' },
      },
      {
        routeId: 'dasa-canal-do-consultor',
        description: 'Discovery-led product design translating research into business rules for a complex consultant scheduling journey and product decision structure.',
        tags: ['Research & Discovery', 'Product Design', 'Business Rules'],
        tagsLabel: 'DASA — Canal do Consultor tags',
        image: { alt: 'Editorial representation of a consultation journey translating research into decision rules and product strategy.' },
      },
    ],
  },
  selectedWork: {
    eyebrow: 'Selected work',
    title: 'Design systems for mobility',
    description: 'Responsive UI and design-system studies for ConnectCar / Freeflow. The cover is an editorial representation.',
    tags: ['Mobility', 'Responsive UI', 'Design Systems'],
    image: { alt: 'Editorial representation of responsive component studies and design-system references for ConnectCar / Freeflow.' },
  },
  seniority: {
    eyebrow: 'How I work',
    title: 'Strategy through delivery',
    pillars: [
      { title: 'Strategy', description: 'Aligning product intent, service context and user needs to guide product and interface decisions.' },
      { title: 'Complex Systems', description: 'Translating intricate workflows into coherent, legible product structures.' },
      { title: 'Delivery', description: 'Turning concepts into delivery-ready decisions with clear handoff and implementation support.' },
      { title: 'Discovery', description: 'Using research, synthesis and critique to reduce ambiguity and sharpen product choices.' },
      { title: 'Design Systems', description: 'Building reusable patterns that scale across teams, touchpoints and future product change.' },
    ],
  },
  about: {
    title: 'About',
    paragraphs: [
      'I’m Nelson Secco, a Senior Product Designer who also works as a UX Consultant on independent engagements. I work at the intersection of Design, Product, and Engineering. My background combines UX and Product Design experience with software development, helping me understand both the experience we want to create and the technical conditions required to turn it into a real product.',
      'I work hands-on across complex products and systems: investigating context, structuring flows and rules, designing interfaces, and collaborating closely with Engineering through implementation. My role is not to replace other disciplines, but to create continuity between product decisions, experience quality, and technical feasibility.',
      'I’m also exploring a way of working where Design and implementation happen increasingly close together, using AI to support analysis, prototyping, development, and validation. These tools accelerate execution, but decisions, critical review, and quality standards remain human responsibilities. This portfolio itself was built this way and is practical evidence of how I work today.',
    ],
    businessContext: 'My background includes products for Embraer, Santander, Bradesco, DASA, REDE, ConnectCar, and Salux, as well as startups including TerraMagna and NOALVO, later recognized among Brazil’s 100 Startups to Watch. N3LX Digital Business is the business structure through which I conduct independent Product Design and UX consulting work.',
    artisticEyebrow: 'Beyond product and technology',
    artisticCopy: 'Outside of digital product work, I also write and produce original music as N3LX — another space where I explore creativity, experimentation, and making things.',
    artisticActionLabel: 'Listen to N3LX on Spotify ↗',
  },
  metaCase: {
    eyebrow: 'Behind this portfolio',
    title: 'This portfolio is also a product.',
    description: 'Designed and built directly in code, it evolved through cycles of decision-making, implementation, human review, testing, and production validation—connecting Product Design, Engineering, and AI-assisted development.',
    primaryActionLabel: 'See how it was built →',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something meaningful.',
    description: 'Have a complex product challenge, a Product Design opportunity, or a UX consulting project? Let’s talk.',
    primaryActionLabel: 'Talk to me on WhatsApp',
  },
  accessibility: {
    home: 'N3LX home', mainNavigation: 'Main navigation', caseNavigation: 'Case study navigation',
    featuredCases: 'Featured projects', secondaryContactLinks: 'Secondary contact links', hero: 'Hero',
    professionalDisciplines: 'Professional disciplines', selectedWorkTags: 'ConnectCar / Freeflow tags',
    seniority: 'Seniority and value proposition', about: 'About', contact: 'Contact',
  },
} as const satisfies HomeContent;
