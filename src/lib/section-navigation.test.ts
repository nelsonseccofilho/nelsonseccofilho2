import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  captureLocaleScrollContext,
  clearLocaleScrollContext,
  getLocaleScrollTarget,
  getSectionHref,
  HOME_SECTION_IDS,
  HOME_TOP_SECTION_ID,
  isReducedMotionPreferred,
  LOCALE_SCROLL_CONTEXT_STORAGE_KEY,
  parseLocaleScrollContext,
  readLocaleScrollContext,
  SECTION_OBSERVER_OPTIONS,
  serializeLocaleScrollContext,
  shouldHandleInPageSectionNavigation,
  storeLocaleScrollContext,
} from './section-navigation';

function stubLayout(sectionTops: Record<string, number>, scrollHeight = 5000) {
  Object.defineProperty(window, 'innerHeight', { value: 1000, configurable: true });
  Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true });
  Object.defineProperty(document.documentElement, 'scrollHeight', { value: scrollHeight, configurable: true });

  for (const [id, top] of Object.entries(sectionTops)) {
    const section = document.createElement('section');
    section.id = id;
    section.getBoundingClientRect = vi.fn(() => ({
      bottom: top - window.scrollY + 100,
      height: 100,
      left: 0,
      right: 0,
      top: top - window.scrollY,
      width: 0,
      x: 0,
      y: top - window.scrollY,
      toJSON: () => ({}),
    }));
    document.body.appendChild(section);
  }
}

describe('section-navigation', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    document.body.innerHTML = '';
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('keeps the expected home section IDs in order', () => {
    expect(HOME_SECTION_IDS).toEqual(['projects', 'work-process', 'about', 'contact']);
  });

  it('serializes and parses locale scroll context safely', () => {
    const serialized = serializeLocaleScrollContext({ sectionId: HOME_TOP_SECTION_ID, progress: 1.7 });

    expect(serialized).toBe('{"sectionId":"hero","progress":1}');
    expect(parseLocaleScrollContext(serialized)).toEqual({ sectionId: 'hero', progress: 1 });
    expect(parseLocaleScrollContext('{"sectionId":"unknown","progress":0.5}')).toBeNull();
    expect(parseLocaleScrollContext('not-json')).toBeNull();
  });

  it('stores, reads and clears the temporary locale scroll context', () => {
    storeLocaleScrollContext({ sectionId: 'about', progress: 0.5 });

    expect(window.sessionStorage.getItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY)).toBe('{"sectionId":"about","progress":0.5}');
    expect(readLocaleScrollContext()).toEqual({ sectionId: 'about', progress: 0.5 });

    clearLocaleScrollContext();

    expect(window.sessionStorage.getItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY)).toBeNull();
  });

  it('captures semantic context for the active Home section and top region', () => {
    stubLayout({ projects: 1000, 'work-process': 2400, about: 3600, contact: 4800 });

    window.scrollY = 260;
    expect(captureLocaleScrollContext()).toEqual({ sectionId: HOME_TOP_SECTION_ID, progress: 0.6 });

    window.scrollY = 2360;
    expect(captureLocaleScrollContext()).toEqual({ sectionId: 'work-process', progress: 0.25 });

    window.scrollY = 3800;
    expect(captureLocaleScrollContext()).toEqual({ sectionId: 'about', progress: 0.45 });
  });

  it('restores the approximate scroll target for the matching localized section', () => {
    stubLayout({ projects: 1000, 'work-process': 2400, about: 3600, contact: 4800 });

    expect(getLocaleScrollTarget({ sectionId: HOME_TOP_SECTION_ID, progress: 0.5 })).toBe(0);
    expect(getLocaleScrollTarget({ sectionId: 'about', progress: 0.5 })).toBe(4200);
    expect(getLocaleScrollTarget({ sectionId: 'contact', progress: 0.25 })).toBe(4850);
  });

  it('returns null when the stored section is missing in the destination locale', () => {
    stubLayout({ projects: 1000, 'work-process': 2400, contact: 4800 });

    expect(getLocaleScrollTarget({ sectionId: 'about', progress: 0.5 })).toBeNull();
  });

  it('does not restore anything on unrelated routes', () => {
    window.sessionStorage.setItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY, serializeLocaleScrollContext({ sectionId: 'about', progress: 0.5 }));

    expect(shouldHandleInPageSectionNavigation('/en/projects/horizon-his', '/en')).toBe(false);
    expect(readLocaleScrollContext()).toEqual({ sectionId: 'about', progress: 0.5 });
  });

  it('builds semantic anchor hrefs for progressive enhancement', () => {
    expect(getSectionHref('/en', 'about')).toBe('/en#about');
    expect(getSectionHref('/', 'contact')).toBe('/#contact');
  });

  it('only enables hash-free in-page behavior on the current home pathname', () => {
    expect(shouldHandleInPageSectionNavigation('/en', '/en')).toBe(true);
    expect(shouldHandleInPageSectionNavigation('/en/projects/horizon-his', '/en')).toBe(false);
  });

  it('exposes stable observer options for active-section feedback', () => {
    expect(SECTION_OBSERVER_OPTIONS.root).toBeNull();
    expect(SECTION_OBSERVER_OPTIONS.rootMargin).toBe('-34% 0px -52% 0px');
    expect(SECTION_OBSERVER_OPTIONS.threshold).toEqual([0, 0.2, 0.45, 0.7, 1]);
  });

  it('respects prefers-reduced-motion when available', () => {
    const matchMedia = vi.fn().mockReturnValue({ matches: true });
    vi.stubGlobal('window', { matchMedia });

    expect(isReducedMotionPreferred()).toBe(true);
  });
});
