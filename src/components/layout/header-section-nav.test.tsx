import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LOCALE_SCROLL_CONTEXT_STORAGE_KEY, serializeLocaleScrollContext } from '@/lib/section-navigation';
import { HeaderSectionNav } from './header-section-nav';

const usePathnameMock = vi.fn();

vi.mock('next/navigation', () => ({
  usePathname: () => usePathnameMock(),
}));

const links = [
  { label: 'Projects', anchor: 'projects' as const },
  { label: 'How I work', anchor: 'work-process' as const },
  { label: 'About', anchor: 'about' as const },
  { label: 'Contact', anchor: 'contact' as const },
];

describe('HeaderSectionNav', () => {
  const disconnectMock = vi.fn();

  beforeEach(() => {
    usePathnameMock.mockReturnValue('/en');
    disconnectMock.mockReset();
    window.sessionStorage.clear();

    class MockIntersectionObserver {
      observe = vi.fn();
      disconnect = disconnectMock;
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver as unknown as typeof IntersectionObserver);
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('keeps semantic anchor hrefs for progressive enhancement', () => {
    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" />);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/en#projects');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/en#contact');
  });

  it('uses in-page scroll and preserves hash-free URL on same-page navigation', () => {
    const target = document.createElement('section');
    target.id = 'about';
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    const replaceState = vi.spyOn(window.history, 'replaceState');

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" />);

    fireEvent.click(screen.getByRole('link', { name: 'About' }));

    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    expect(replaceState).toHaveBeenCalledWith(window.history.state, '', '/en');
  });

  it('uses immediate scroll when reduced motion is enabled', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));

    const target = document.createElement('section');
    target.id = 'contact';
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" />);

    fireEvent.click(screen.getByRole('link', { name: 'Contact' }));

    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto', block: 'start' });
  });

  it('navigates case pages to home without hash and stores pending section', () => {
    usePathnameMock.mockReturnValue('/en/projects/horizon-his');

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" />);

    fireEvent.click(screen.getByRole('link', { name: 'About' }));

    expect(window.sessionStorage.getItem('n3lx:pending-home-section')).toBe('about');
  });

  it('restores the temporary locale scroll context on Home without leaving a hash', () => {
    const projects = document.createElement('section');
    projects.id = 'projects';
    projects.getBoundingClientRect = vi.fn(() => ({ bottom: 1100, height: 100, left: 0, right: 0, top: 1000, width: 0, x: 0, y: 1000, toJSON: () => ({}) }));
    const workProcess = document.createElement('section');
    workProcess.id = 'work-process';
    workProcess.getBoundingClientRect = vi.fn(() => ({ bottom: 2500, height: 100, left: 0, right: 0, top: 2400, width: 0, x: 0, y: 2400, toJSON: () => ({}) }));
    const about = document.createElement('section');
    about.id = 'about';
    about.getBoundingClientRect = vi.fn(() => ({ bottom: 3700, height: 100, left: 0, right: 0, top: 3600, width: 0, x: 0, y: 3600, toJSON: () => ({}) }));
    const contact = document.createElement('section');
    contact.id = 'contact';
    contact.getBoundingClientRect = vi.fn(() => ({ bottom: 4900, height: 100, left: 0, right: 0, top: 4800, width: 0, x: 0, y: 4800, toJSON: () => ({}) }));

    document.body.append(projects, workProcess, about, contact);
    window.sessionStorage.setItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY, serializeLocaleScrollContext({ sectionId: 'about', progress: 0.5 }));

    const scrollTo = vi.fn();
    vi.stubGlobal('scrollTo', scrollTo);
    const replaceState = vi.spyOn(window.history, 'replaceState');

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" />);

    expect(scrollTo).toHaveBeenCalledWith({ top: 4200, behavior: 'auto' });
    expect(window.sessionStorage.getItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY)).toBeNull();
    expect(replaceState).not.toHaveBeenCalled();
  });

  it('drops a stale locale scroll context when the destination section no longer exists', () => {
    const projects = document.createElement('section');
    projects.id = 'projects';
    projects.getBoundingClientRect = vi.fn(() => ({ bottom: 1100, height: 100, left: 0, right: 0, top: 1000, width: 0, x: 0, y: 1000, toJSON: () => ({}) }));
    const workProcess = document.createElement('section');
    workProcess.id = 'work-process';
    workProcess.getBoundingClientRect = vi.fn(() => ({ bottom: 2500, height: 100, left: 0, right: 0, top: 2400, width: 0, x: 0, y: 2400, toJSON: () => ({}) }));
    const contact = document.createElement('section');
    contact.id = 'contact';
    contact.getBoundingClientRect = vi.fn(() => ({ bottom: 4900, height: 100, left: 0, right: 0, top: 4800, width: 0, x: 0, y: 4800, toJSON: () => ({}) }));

    document.body.append(projects, workProcess, contact);
    window.sessionStorage.setItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY, serializeLocaleScrollContext({ sectionId: 'about', progress: 0.5 }));

    const scrollTo = vi.fn();
    vi.stubGlobal('scrollTo', scrollTo);

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" />);

    expect(scrollTo).not.toHaveBeenCalled();
    expect(window.sessionStorage.getItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY)).toBeNull();
  });

  it('disconnects the observer on unmount to avoid duplicated watchers', () => {
    const projects = document.createElement('section');
    projects.id = 'projects';
    const workProcess = document.createElement('section');
    workProcess.id = 'work-process';
    const about = document.createElement('section');
    about.id = 'about';
    const contact = document.createElement('section');
    contact.id = 'contact';

    document.body.append(projects, workProcess, about, contact);

    const { unmount } = render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" />);
    unmount();

    expect(disconnectMock).toHaveBeenCalledTimes(1);
  });
});
