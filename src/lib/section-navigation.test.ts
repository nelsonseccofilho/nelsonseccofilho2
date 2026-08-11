import { describe, expect, it, vi } from 'vitest';
import { getSectionHref, HOME_SECTION_IDS, isReducedMotionPreferred, SECTION_OBSERVER_OPTIONS, shouldHandleInPageSectionNavigation } from './section-navigation';

describe('section-navigation', () => {
  it('keeps the expected home section IDs in order', () => {
    expect(HOME_SECTION_IDS).toEqual(['projects', 'work-process', 'about', 'contact']);
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
