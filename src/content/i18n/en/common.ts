import type { CommonContent } from '../types';

export const enCommon = {
  metadata: {
    title: 'Nelson Secco — Senior Product Designer & UX Consultant',
    description: 'Senior Product Designer with a software-development background who also works as a UX Consultant across Design, Product, and Engineering.',
  },
  header: {
    contactLabel: 'Let’s talk',
    contactAriaLabel: 'Let’s talk on WhatsApp',
    resumeLabel: 'Resume',
    resumeAriaLabel: "Open Nelson Secco's resume in English",
    sectionsNavLabel: 'Home sections',
    sectionLinks: [
      { label: 'Projects', anchor: 'projects' },
      { label: 'How I work', anchor: 'work-process' },
      { label: 'This portfolio', anchor: 'portfolio' },
      { label: 'About', anchor: 'about' },
      { label: 'Contact', anchor: 'contact' },
    ],
  },
  themeToggle: {
    pendingLabel: 'Toggle theme',
    activateLightLabel: 'Activate light theme',
    activateDarkLabel: 'Activate dark theme',
  },
  languageSwitcher: { label: 'Language', portugueseLabel: 'Portuguese', englishLabel: 'English' },
  portfolioReturn: { accessibilityLabel: 'Portfolio navigation', label: 'Portfolio' },
  caseNavigation: { nextProjectLabel: 'Next project' },
  backToTop: { label: '↑ Top', accessibilityLabel: 'Back to top' },
  privacy: {
    title: 'Privacy and experience',
    description: 'I use Microsoft Clarity to understand how people navigate the portfolio and guide UX improvements. Analytics is only enabled if you allow it.',
    declineLabel: 'Decline',
    allowLabel: 'Allow analytics',
    manageLabel: 'Privacy',
  },
  routeLoading: { label: 'Loading content…' },
  notFound: {
    code: '404',
    title: "We couldn't find this page.",
    description: 'The address may have changed, or this page may no longer exist.',
  },
  evidenceViewer: {
    openImageLabel: 'Open enlarged image',
    closeImageLabel: 'Close image',
    enlargedImageLabel: 'Enlarged image',
    viewAllArtifactsLabel: 'View all artifacts',
    showLessLabel: 'Show less',
  },
  mediaPlaceholders: {
    cover: 'Cover being rebuilt',
    visual: 'Visual being rebuilt',
    evidence: 'Evidence visual being rebuilt',
  },
  accessibility: {
    home: 'N3LX home',
    mainNavigation: 'Main navigation',
    caseNavigation: 'Case study navigation',
    featuredCases: 'Featured projects',
    secondaryContactLinks: 'Secondary contact links',
  },
  resumeDialog: {
    title: 'Resume — Nelson Secco',
    closeLabel: 'Close resume',
    downloadLabel: 'Download PDF',
    loadingLabel: 'Loading resume…',
  },
} as const satisfies CommonContent;
