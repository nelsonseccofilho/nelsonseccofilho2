export const HOME_SECTION_IDS = ['projects', 'work-process', 'about', 'contact'] as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number];

export const HOME_TOP_SECTION_ID = 'hero' as const;
export const LOCALE_SCROLL_CONTEXT_STORAGE_KEY = 'portfolio:locale-scroll-context';

export type LocaleScrollSectionId = HomeSectionId | typeof HOME_TOP_SECTION_ID;

export type LocaleScrollContext = {
  sectionId: LocaleScrollSectionId;
  progress: number;
};

export const SECTION_OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '-34% 0px -52% 0px',
  threshold: [0, 0.2, 0.45, 0.7, 1],
};

function clampProgress(progress: number): number {
  if (!Number.isFinite(progress)) {
    return 0;
  }

  return Math.min(1, Math.max(0, progress));
}

function getSectionTop(element: HTMLElement): number {
  return element.getBoundingClientRect().top + window.scrollY;
}

function getTrackedHomeSections(): Array<{ id: HomeSectionId; top: number }> {
  return HOME_SECTION_IDS.map((id) => {
    const element = document.getElementById(id);

    return element ? { id, top: getSectionTop(element) } : null;
  }).filter((section): section is { id: HomeSectionId; top: number } => section !== null);
}

export function serializeLocaleScrollContext(context: LocaleScrollContext): string {
  return JSON.stringify({
    sectionId: context.sectionId,
    progress: clampProgress(context.progress),
  });
}

export function parseLocaleScrollContext(serializedContext: string | null): LocaleScrollContext | null {
  if (!serializedContext) {
    return null;
  }

  try {
    const parsed = JSON.parse(serializedContext) as Partial<LocaleScrollContext>;
    if (parsed.sectionId !== HOME_TOP_SECTION_ID && !HOME_SECTION_IDS.includes(parsed.sectionId as HomeSectionId)) {
      return null;
    }

    return {
      sectionId: parsed.sectionId as LocaleScrollSectionId,
      progress: clampProgress(typeof parsed.progress === 'number' ? parsed.progress : 0),
    };
  } catch {
    return null;
  }
}

export function storeLocaleScrollContext(context: LocaleScrollContext): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.sessionStorage.setItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY, serializeLocaleScrollContext(context));
  } catch {
    // The locale transition still works without temporary scroll persistence.
  }
}

export function readLocaleScrollContext(): LocaleScrollContext | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return parseLocaleScrollContext(window.sessionStorage.getItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY));
  } catch {
    return null;
  }
}

export function clearLocaleScrollContext(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.sessionStorage.removeItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY);
  } catch {
    // Best effort only.
  }
}

export function captureLocaleScrollContext(): LocaleScrollContext | null {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }

  const sections = getTrackedHomeSections();
  if (!sections.length) {
    return null;
  }

  const firstSection = sections[0];
  const anchor = window.scrollY + window.innerHeight * 0.34;

  if (anchor < firstSection.top) {
    const heroRange = Math.max(1, firstSection.top);
    return {
      sectionId: HOME_TOP_SECTION_ID,
      progress: clampProgress(anchor / heroRange),
    };
  }

  for (let index = 0; index < sections.length; index += 1) {
    const current = sections[index];
    const next = sections[index + 1];
    const end = next?.top ?? document.documentElement.scrollHeight;

    if (anchor >= current.top && anchor < end) {
      return {
        sectionId: current.id,
        progress: clampProgress((anchor - current.top) / Math.max(1, end - current.top)),
      };
    }
  }

  const lastSection = sections[sections.length - 1];
  const lastRangeEnd = document.documentElement.scrollHeight;

  return {
    sectionId: lastSection.id,
    progress: clampProgress((anchor - lastSection.top) / Math.max(1, lastRangeEnd - lastSection.top)),
  };
}

export function getLocaleScrollTarget(context: LocaleScrollContext): number | null {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }

  const sections = getTrackedHomeSections();
  if (!sections.length) {
    return null;
  }

  if (context.sectionId === HOME_TOP_SECTION_ID) {
    return 0;
  }

  const currentElement = document.getElementById(context.sectionId);
  if (!currentElement) {
    return null;
  }

  const currentTop = getSectionTop(currentElement);
  const nextSection = HOME_SECTION_IDS.slice(HOME_SECTION_IDS.indexOf(context.sectionId) + 1)
    .map((id) => document.getElementById(id))
    .find((element): element is HTMLElement => element !== null);

  if (!Number.isFinite(currentTop)) {
    return null;
  }

  const end = nextSection ? getSectionTop(nextSection) : document.documentElement.scrollHeight;

  return currentTop + clampProgress(context.progress) * Math.max(1, end - currentTop);
}

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
