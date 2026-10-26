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
    actionLabel: 'View project',
    additionalProductWorkTitle: 'Additional product work',
    projects: [
      {
        routeId: 'horizon-his',
        description: 'High-fidelity navigable prototype for a complex hospital information system, reviewed with the CEO and presented at Hospitalar 2025.',
        tags: ['UX Lead / Product Designer', 'Healthtech', 'Product Strategy'],
        tagsLabel: 'HORIZON HIS tags',
        image: { alt: 'Hospital information system prototype interface showing triage workflow and generated clinical data panels.' },
      },
      {
        routeId: 'subiter',
        description: 'Product Design leadership for a production inspection platform connecting operational workflows, traceability and AI-assisted review.',
        tags: ['UX Lead / Senior Product Designer', 'Deep Tech / Industrial Inspection', 'AI-assisted Workflows'],
        tagsLabel: 'SUBITER tags',
        image: { alt: 'Editorial interface composition with inspection workflow grid, trend line and review summary panels.' },
      },
      {
        routeId: 'rede-dcc',
        description: 'Interaction design for a financial choice within a payment journey spanning transactional states, decision points and exception handling.',
        tags: ['Senior Product Designer', 'Payments / Dynamic Currency Conversion', 'Interaction Design'],
        tagsLabel: 'REDE DCC 1.0 tags',
        image: { alt: 'Payment interface composition showing transaction flow states and confirmation screens.' },
      },
      {
        routeId: 'dasa-canal-do-consultor',
        description: 'Discovery-led product design translating research into business rules for a complex consultant scheduling journey and product decision structure.',
        tags: ['Product Designer', 'Healthtech', 'Discovery and Business Rules'],
        tagsLabel: 'DASA — Canal do Consultor tags',
        image: { alt: 'Editorial representation of a consultation journey translating research into decision rules and product strategy.' },
      },
    ],
  },
  featuredPractice: {
    eyebrow: 'Featured practice',
    title: 'AI-Assisted Design Engineering Operating System',
    description: 'From experimentation to professional practice: a framework I created to connect Design, Engineering and AI through evidence, continuity and human accountability.',
    steps: [
      { title: 'Evidence', description: 'Check sources and context' },
      { title: 'Decision', description: 'Decide with accountability' },
      { title: 'Artifact + QA', description: 'Inspect, compose and validate' },
      { title: 'Continuity', description: 'Record decisions and next steps' },
    ],
    actionLabel: 'Explore the framework',
  },
  selectedWork: {
    eyebrow: 'Selected work',
    title: 'Design systems for mobility',
    description: 'Responsive UI and design-system studies for ConnectCar / Freeflow.',
    provenanceLabel: 'Editorial representation',
    tags: ['Mobility', 'Responsive UI', 'Design Systems'],
    image: { alt: 'Editorial representation of responsive component studies and design-system references for ConnectCar / Freeflow.' },
  },
  seniority: {
    eyebrow: 'How I work',
    title: 'From evidence to delivery, with AI',
    description: 'I structure collaboration with AI agents through the framework I developed. Evidence, Design Systems and persistent records support the work; product direction and final accountability remain human.',
    pillars: [
      { title: 'Evidence and context', description: 'Gathering research, approved sources, and project constraints to understand the problem and preserve the origin of each piece of information.' },
      { title: 'Product decisions', description: 'Turning evidence into requirements and priorities, distinguishing facts, inferences, and hypotheses before shaping the solution.' },
      { title: 'Design and implementation', description: 'Inspecting the current artifact and reusing Design System components and patterns. AI supports execution within authorized scope.' },
      { title: 'Review and QA', description: 'Defining acceptance criteria and checking experience, accessibility and technical quality. Distinguishing executed tests, available evidence and human approval.' },
      { title: 'Continuity', description: 'Preserving decisions, evidence, and next steps in persistent records to resume work across sessions with context and accountability.' },
    ],
  },
  about: {
    eyebrow: 'Professional profile',
    title: 'About',
    positioning: [
      { title: 'Senior Product Designer', description: 'Designing digital products and complex systems with hands-on delivery focus.' },
      { title: 'UX Consultant', description: 'Independent engagements focused on UX strategy, discovery, and product direction.' },
      { title: 'Product × Engineering', description: 'Connecting product decisions to implementation continuity across teams.' },
    ],
    highlights: ['Senior Product Designer', 'UX Consultant in independent engagements', 'Design × Product × Engineering'],
    paragraphs: [
      'I’m Nelson Secco, a Senior Product Designer who also works as a UX Consultant on independent engagements. I work at the intersection of Design, Product, and Engineering. My background combines UX and Product Design experience with software development, helping me understand both the experience we want to create and the technical conditions required to turn it into a real product.',
      'I work hands-on across complex products and systems: investigating context, structuring flows and rules, designing interfaces, and collaborating closely with Engineering through implementation. My role is not to replace other disciplines, but to create continuity between product decisions, experience quality, and technical feasibility.',
      'This practice led to the AI-Assisted Design Engineering Operating System, a framework I created and now use as an operational baseline in real professional work, adapted to each engagement. It connects evidence, Design Systems, execution and continuity across sessions. AI supports the work; decisions, critical review and final accountability remain human.',
    ],
    businessContext: 'My background includes products for Embraer, Santander, Bradesco, DASA, REDE, ConnectCar, and Salux, as well as startups such as Subiter, TerraMagna, and NOALVO, recognized in PEGN\'s 100 Startups to Watch. N3LX Digital Business is the business structure through which I lead independent Product Design and UX consulting projects.',
    artisticEyebrow: 'Beyond product and technology',
    artisticCopy: 'Outside of digital product work, I also write and produce original music as N3LX — another space where I explore creativity, experimentation, and making things.',
    artisticActionLabel: 'Listen to N3LX on SoundCloud',
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
    featuredCases: 'Featured projects', secondaryContactLinks: 'Secondary contact links', hero: 'Introduction',
    professionalDisciplines: 'Professional disciplines', selectedWorkTags: 'ConnectCar / Freeflow tags',
    seniority: 'Seniority and value proposition', about: 'About', contact: 'Contact',
  },
} as const satisfies HomeContent;
