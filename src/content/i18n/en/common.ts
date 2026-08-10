import type { CommonContent } from '../types';

export const enCommon = {
  metadata: {
    title: 'N3LX | Senior Product Designer | UX Strategy | Product Discovery | Design Systems | AI-assisted Product Design',
    description: 'Senior Product Designer and UX Lead specializing in digital products, complex systems, strategy and technology-driven experiences.',
  },
  header: { contactLabel: 'Let’s talk' },
  themeToggle: {
    pendingLabel: 'Toggle theme',
    activateLightLabel: 'Activate light theme',
    activateDarkLabel: 'Activate dark theme',
  },
  languageSwitcher: { label: 'Language', portugueseLabel: 'Portuguese', englishLabel: 'English' },
  breadcrumb: { accessibilityLabel: 'Breadcrumb', homeLabel: 'Home', projectsLabel: 'Projects' },
  caseNavigation: { allProjectsLabel: '← All projects', nextCaseLabel: 'Next case' },
  backToTop: { label: '↑ Top', accessibilityLabel: 'Back to top' },
  evidenceViewer: {
    openImageLabel: 'Open enlarged image',
    closeImageLabel: 'Close image',
    enlargedImageLabel: 'Enlarged image',
    viewAllArtifactsLabel: 'View all artifacts',
    showLessLabel: 'Show less',
  },
  accessibility: {
    home: 'N3LX home',
    mainNavigation: 'Main navigation',
    caseNavigation: 'Case study navigation',
    featuredCases: 'Featured cases',
    secondaryContactLinks: 'Secondary contact links',
  },
} as const satisfies CommonContent;
