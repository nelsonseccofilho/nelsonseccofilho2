import '@testing-library/jest-dom/vitest';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LOCALE_SCROLL_CONTEXT_STORAGE_KEY, serializeLocaleScrollContext } from '@/lib/section-navigation';
import { HeaderSectionNav } from './header-section-nav';

const usePathnameMock = vi.fn();
const trackEventMock = vi.hoisted(() => vi.fn());

vi.mock('@/components/analytics/analytics-provider', () => ({
  useAnalytics: () => ({ trackEvent: trackEventMock }),
}));

vi.mock('next/navigation', () => ({
  usePathname: () => usePathnameMock(),
}));

const links = [
  { label: 'Projects', anchor: 'projects' as const },
  { label: 'How I work', anchor: 'work-process' as const },
  { label: 'This portfolio', anchor: 'portfolio' as const },
  { label: 'About', anchor: 'about' as const },
  { label: 'Contact', anchor: 'contact' as const },
];

const navigationLabels = {
  openLabel: 'Open navigation',
  closeLabel: 'Close navigation',
};

describe('HeaderSectionNav', () => {
  const disconnectMock = vi.fn();
  let intersectionObserverCallback: IntersectionObserverCallback | undefined;

  beforeEach(() => {
    usePathnameMock.mockReturnValue('/en');
    trackEventMock.mockClear();
    disconnectMock.mockReset();
    intersectionObserverCallback = undefined;
    window.sessionStorage.clear();

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        intersectionObserverCallback = callback;
      }

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
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    document.body.innerHTML = '';
  });

  it('keeps semantic anchor hrefs for progressive enhancement', () => {
    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/en#projects');
    expect(screen.getByRole('link', { name: 'This portfolio' })).toHaveAttribute('href', '/en#portfolio');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/en#contact');
  });

  it('opens a mobile dialog containing the same five section destinations', () => {
    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    const trigger = screen.getByRole('button', { name: 'Open navigation' });
    expect(trigger).toHaveClass('site-header__mobile-nav-trigger');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(trigger);

    const dialog = screen.getByRole('dialog', { name: 'Home sections' });
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAccessibleName('Close navigation');
    expect(within(dialog).getAllByRole('link').map((link) => link.textContent)).toEqual([
      'Projects',
      'How I work',
      'This portfolio',
      'About',
      'Contact',
    ]);
    expect(trackEventMock).toHaveBeenCalledOnce();
    expect(trackEventMock).toHaveBeenCalledWith('mobile_nav_open');
  });

  it('tracks only false-to-true mobile dialog transitions', () => {
    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    const trigger = screen.getByRole('button', { name: 'Open navigation' });
    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole('button', { name: 'Close navigation' }));

    expect(trackEventMock).toHaveBeenCalledTimes(1);
    expect(trackEventMock).toHaveBeenLastCalledWith('mobile_nav_open');

    fireEvent.click(trigger);
    expect(trackEventMock).toHaveBeenCalledTimes(2);
    expect(trackEventMock).toHaveBeenLastCalledWith('mobile_nav_open');

    fireEvent.keyDown(document.activeElement ?? document.body, { key: 'Escape', code: 'Escape' });
    expect(trackEventMock).toHaveBeenCalledTimes(2);
  });

  it.each(links)('tracks the mobile destination $anchor with a locale-independent key', ({ anchor, label: linkLabel }) => {
    const target = document.createElement('section');
    target.id = anchor;
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    const dialog = screen.getByRole('dialog', { name: 'Home sections' });
    fireEvent.click(within(dialog).getByRole('link', { name: linkLabel }));

    expect(trackEventMock).toHaveBeenCalledTimes(2);
    expect(trackEventMock).toHaveBeenNthCalledWith(1, 'mobile_nav_open');
    expect(trackEventMock).toHaveBeenNthCalledWith(2, `mobile_nav_select:${anchor}`);
  });

  it('uses the same mobile destination event for Portuguese labels', () => {
    const portugueseLinks = [
      { label: 'Projetos', anchor: 'projects' as const },
      { label: 'Como trabalho', anchor: 'work-process' as const },
      { label: 'Este portfólio', anchor: 'portfolio' as const },
      { label: 'Sobre', anchor: 'about' as const },
      { label: 'Contato', anchor: 'contact' as const },
    ];
    const target = document.createElement('section');
    target.id = 'portfolio';
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    render(
      <HeaderSectionNav
        links={portugueseLinks}
        homePath="/"
        label="Seções da Home"
        openLabel="Abrir navegação"
        closeLabel="Fechar navegação"
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Abrir navegação' }));
    fireEvent.click(within(screen.getByRole('dialog', { name: 'Seções da Home' })).getByRole('link', { name: 'Este portfólio' }));

    expect(trackEventMock).toHaveBeenNthCalledWith(2, 'mobile_nav_select:portfolio');
  });

  it('closes the mobile dialog and uses the existing in-page section navigation', () => {
    const target = document.createElement('section');
    target.id = 'about';
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    const dialog = screen.getByRole('dialog', { name: 'Home sections' });

    fireEvent.click(within(dialog).getByRole('link', { name: 'About' }));

    expect(screen.queryByRole('dialog', { name: 'Home sections' })).not.toBeInTheDocument();
    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('closes on Escape and restores focus to the mobile trigger', async () => {
    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);
    const trigger = screen.getByRole('button', { name: 'Open navigation' });
    fireEvent.click(trigger);

    fireEvent.keyDown(document.activeElement ?? document.body, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByRole('dialog', { name: 'Home sections' })).not.toBeInTheDocument();
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('shares the observed active section with the mobile menu without another observer', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 640 });
    const target = document.createElement('section');
    target.id = 'portfolio';
    document.body.appendChild(target);

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);
    act(() => {
      intersectionObserverCallback?.([
        { isIntersecting: true, intersectionRatio: 0.7, target } as unknown as IntersectionObserverEntry,
      ], {} as IntersectionObserver);
    });
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));

    const dialog = screen.getByRole('dialog', { name: 'Home sections' });
    expect(within(dialog).getByRole('link', { name: 'This portfolio' })).toHaveAttribute('aria-current', 'location');
  });

  it('keeps the localized Home destination when a mobile item is selected from an internal route', () => {
    usePathnameMock.mockReturnValue('/en/projects/horizon-his');
    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
    const dialog = screen.getByRole('dialog', { name: 'Home sections' });
    const portfolioLink = within(dialog).getByRole('link', { name: 'This portfolio' });

    expect(portfolioLink).toHaveAttribute('href', '/en#portfolio');
    fireEvent.click(portfolioLink);

    expect(screen.queryByRole('dialog', { name: 'Home sections' })).not.toBeInTheDocument();
    expect(window.sessionStorage.getItem('n3lx:pending-home-section')).toBe('portfolio');
  });

  it('uses in-page scroll and preserves hash-free URL on same-page navigation', () => {
    const target = document.createElement('section');
    target.id = 'about';
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    const replaceState = vi.spyOn(window.history, 'replaceState');

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    fireEvent.click(screen.getByRole('link', { name: 'About' }));

    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    expect(replaceState).toHaveBeenCalledWith(window.history.state, '', '/en');
  });

  it('uses the shared section behavior and active state for This portfolio', () => {
    const target = document.createElement('section');
    target.id = 'portfolio';
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    fireEvent.click(screen.getByRole('link', { name: 'This portfolio' }));

    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    expect(screen.getByRole('link', { name: 'This portfolio' })).toHaveAttribute('aria-current', 'location');
  });

  it('clears section active state when the observer reports no monitored section', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 640 });
    const target = document.createElement('section');
    target.id = 'portfolio';
    document.body.appendChild(target);

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    act(() => {
      intersectionObserverCallback?.([
        { isIntersecting: true, intersectionRatio: 0.7, target } as unknown as IntersectionObserverEntry,
      ], {} as IntersectionObserver);
    });
    expect(screen.getByRole('link', { name: 'This portfolio' })).toHaveAttribute('aria-current', 'location');

    act(() => {
      intersectionObserverCallback?.([
        { isIntersecting: false, intersectionRatio: 0, target } as unknown as IntersectionObserverEntry,
      ], {} as IntersectionObserver);
    });
    expect(screen.getByRole('navigation', { name: 'Home sections' }).querySelector('[aria-current]')).not.toBeInTheDocument();
  });

  it('uses immediate scroll when reduced motion is enabled', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));

    const target = document.createElement('section');
    target.id = 'contact';
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    fireEvent.click(screen.getByRole('link', { name: 'Contact' }));

    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto', block: 'start' });
  });

  it('navigates case pages to the localized Home and stores This portfolio as the pending section', () => {
    usePathnameMock.mockReturnValue('/en/projects/horizon-his');

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    const portfolioLink = screen.getByRole('link', { name: 'This portfolio' });
    expect(portfolioLink).toHaveAttribute('href', '/en#portfolio');
    fireEvent.click(portfolioLink);

    expect(window.sessionStorage.getItem('n3lx:pending-home-section')).toBe('portfolio');
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

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

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

    render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);

    expect(scrollTo).not.toHaveBeenCalled();
    expect(window.sessionStorage.getItem(LOCALE_SCROLL_CONTEXT_STORAGE_KEY)).toBeNull();
  });

  it('disconnects the observer on unmount to avoid duplicated watchers', () => {
    const projects = document.createElement('section');
    projects.id = 'projects';
    const workProcess = document.createElement('section');
    workProcess.id = 'work-process';
    const portfolio = document.createElement('section');
    portfolio.id = 'portfolio';
    const about = document.createElement('section');
    about.id = 'about';
    const contact = document.createElement('section');
    contact.id = 'contact';

    document.body.append(projects, workProcess, portfolio, about, contact);

    const { unmount } = render(<HeaderSectionNav links={links} homePath="/en" label="Home sections" {...navigationLabels} />);
    unmount();

    expect(disconnectMock).toHaveBeenCalledTimes(1);
  });
});
