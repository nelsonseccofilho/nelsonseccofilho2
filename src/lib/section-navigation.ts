export const HOME_SECTION_IDS = ['projects', 'work-process', 'about', 'contact'] as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number];

export const SECTION_OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '-34% 0px -52% 0px',
  threshold: [0, 0.2, 0.45, 0.7, 1],
};

export function isReducedMotionPreferred(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getSectionHref(homePath: string, sectionId: HomeSectionId): string {
  return `${homePath}#${sectionId}`;
}

export function shouldHandleInPageSectionNavigation(currentPathname: string, homePath: string): boolean {
  return currentPathname === homePath;
}
