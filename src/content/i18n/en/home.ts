import type { HomeContent } from '../types';

export const enHome = {
  metadata: {
    title: 'N3LX | Senior Product Designer',
    description: 'Product Design for complex digital systems, from strategy and discovery through delivery.',
  },
  hero: {
    eyebrow: 'Senior Product Designer',
    title: 'Designing digital products for complex systems.',
    description: 'I connect product strategy, UX and technology to turn complex problems into clear, scalable digital experiences.',
    disciplines: ['UX Strategy', 'Product Discovery', 'Design Systems', 'AI-assisted Product Design'],
  },
  featuredCases: {
    title: 'Featured cases',
    actionLabel: 'View case →',
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
      'I’m a Senior Product Designer with over 12 years of experience building digital products and more than 8 years focused on UX and Product Design.',
      'I work hands-on from Discovery to delivery, turning complex problems, business rules, and user needs into clear, consistent, and feasible experiences — connecting Design, Product, and Engineering.',
      'Throughout my career, I’ve worked on products for companies such as Embraer, Santander, Bradesco, DASA, REDE, ConnectCar, and Salux, as well as startups including TerraMagna and NOALVO, later recognized among Brazil’s 100 Startups to Watch.',
      'My Front-end background and use of AI and automation complement my Design practice, helping me explore, prototype, and validate solutions faster without compromising critical thinking or experience quality.',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something meaningful.',
    description: 'Have a complex product challenge or an opportunity to collaborate? Let’s talk.',
    primaryActionLabel: 'Talk to me on WhatsApp',
  },
  accessibility: {
    home: 'N3LX home', mainNavigation: 'Main navigation', caseNavigation: 'Case study navigation',
    featuredCases: 'Featured cases', secondaryContactLinks: 'Secondary contact links', hero: 'Hero',
    professionalDisciplines: 'Professional disciplines', selectedWorkTags: 'ConnectCar / Freeflow tags',
    seniority: 'Seniority and value proposition', about: 'About', contact: 'Contact',
  },
} as const satisfies HomeContent;
