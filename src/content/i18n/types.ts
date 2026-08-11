import type { Locale } from '@/i18n/locales';
import type { RouteId } from '@/i18n/routes';

export type DictionaryByLocale<Dictionary> = Readonly<Record<Locale, Dictionary>>;
export type ProjectRouteId = Exclude<RouteId, 'home' | 'building-portfolio' | 'privacy'>;

export type MetadataContent = {
  title: string;
  description: string;
};

export type AccessibilityLabels = {
  home: string;
  mainNavigation: string;
  caseNavigation: string;
  featuredCases: string;
  secondaryContactLinks: string;
};

export type CommonContent = {
  metadata: MetadataContent;
  header: {
    contactLabel: string;
    contactAriaLabel: string;
    resumeLabel: string;
    resumeAriaLabel: string;
    sectionsNavLabel: string;
    sectionLinks: readonly {
      label: string;
      anchor: 'projects' | 'work-process' | 'about' | 'contact';
    }[];
  };
  themeToggle: {
    pendingLabel: string;
    activateLightLabel: string;
    activateDarkLabel: string;
  };
  languageSwitcher: {
    label: string;
    portugueseLabel: string;
    englishLabel: string;
  };
  portfolioReturn: {
    accessibilityLabel: string;
    label: string;
  };
  caseNavigation: {
    nextProjectLabel: string;
  };
  backToTop: {
    label: string;
    accessibilityLabel: string;
  };
  privacy: {
    title: string;
    description: string;
    declineLabel: string;
    allowLabel: string;
    manageLabel: string;
  };
  routeLoading: {
    label: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
  };
  evidenceViewer: {
    openImageLabel: string;
    closeImageLabel: string;
    enlargedImageLabel: string;
    viewAllArtifactsLabel: string;
    showLessLabel: string;
  };
  mediaPlaceholders: {
    cover: string;
    visual: string;
    evidence: string;
  };
  accessibility: AccessibilityLabels;
  resumeDialog: {
    title: string;
    closeLabel: string;
    downloadLabel: string;
    loadingLabel: string;
  };
};

export type LocalizedImageContent = {
  alt: string;
  caption?: string;
};

export type HomeProjectCardContent = {
  routeId: ProjectRouteId;
  description: string;
  tags: readonly string[];
  tagsLabel: string;
  image: LocalizedImageContent;
};

export type HomeAccessibilityLabels = AccessibilityLabels & {
  hero: string;
  professionalDisciplines: string;
  selectedWorkTags: string;
  seniority: string;
  about: string;
  contact: string;
};

export type HomeContent = {
  metadata: MetadataContent;
  hero: {
    name: string;
    eyebrow: string;
    title: string;
    description: string;
    disciplines: readonly string[];
  };
  featuredCases: {
    title: string;
    actionLabel: string;
    projects: readonly HomeProjectCardContent[];
  };
  selectedWork: {
    eyebrow: string;
    title: string;
    description: string;
    provenanceLabel: string;
    tags: readonly string[];
    image: LocalizedImageContent;
  };
  seniority: {
    eyebrow: string;
    title: string;
    pillars: readonly {
      title: string;
      description: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    positioning: readonly {
      title: string;
      description: string;
    }[];
    highlights: readonly string[];
    paragraphs: readonly string[];
    businessContext: string;
    artisticEyebrow: string;
    artisticCopy: string;
    artisticActionLabel: string;
  };
  metaCase: {
    eyebrow: string;
    title: string;
    description: string;
    primaryActionLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    primaryActionLabel: string;
  };
  accessibility: HomeAccessibilityLabels;
};

export type ProjectFacts = {
  routeId: ProjectRouteId;
  projectName: string;
  dates?: string;
  metrics?: readonly {
    id: string;
    value: number;
    unit?: string;
  }[];
  externalUrls?: Readonly<Record<string, string>>;
};

export type ProjectFactsMap = Readonly<Record<ProjectRouteId, ProjectFacts>>;

export type ProjectSectionContent = {
  id: string;
  title: string;
  intro?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  media?: readonly LocalizedImageContent[];
  accessibilityLabel?: string;
};

export type ProjectCaseContent = {
  metadata: MetadataContent;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    metadata: readonly {
      label: string;
      value: string;
    }[];
    image: LocalizedImageContent;
  };
  sections: readonly ProjectSectionContent[];
  accessibility: AccessibilityLabels;
};

export type PortfolioDictionary = {
  common: CommonContent;
  home: HomeContent;
  projects: Readonly<Record<ProjectRouteId, ProjectCaseContent>>;
};
