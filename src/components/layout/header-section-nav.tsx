'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { useAnalytics } from '@/components/analytics/analytics-provider';
import { getMobileNavSelectEvent } from '@/components/analytics/clarity';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  clearLocaleScrollContext,
  getLocaleScrollTarget,
  getSectionHref,
  HOME_SECTION_IDS,
  isReducedMotionPreferred,
  readLocaleScrollContext,
  SECTION_OBSERVER_OPTIONS,
  shouldHandleInPageSectionNavigation,
  type HomeSectionId,
} from '@/lib/section-navigation';

type HeaderSectionNavLink = { label: string; anchor: HomeSectionId };

type HeaderSectionNavProps = {
  links: readonly HeaderSectionNavLink[];
  homePath: string;
  label: string;
  openLabel: string;
  closeLabel: string;
};

const PENDING_SECTION_STORAGE_KEY = 'n3lx:pending-home-section';

function MenuIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function HeaderSectionNav({
  links,
  homePath,
  label,
  openLabel,
  closeLabel,
}: HeaderSectionNavProps) {
  const { trackEvent } = useAnalytics();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<HomeSectionId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileOpenRef = useRef(false);
  const inPageNavigation = shouldHandleInPageSectionNavigation(pathname, homePath);

  useEffect(() => {
    if (typeof window === 'undefined' || !inPageNavigation) {
      return;
    }

    const targets = HOME_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!targets.length || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const visibleSections = new Map<HomeSectionId, number>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id as HomeSectionId;
        if (!HOME_SECTION_IDS.includes(sectionId)) {
          return;
        }

        if (entry.isIntersecting) {
          visibleSections.set(sectionId, entry.intersectionRatio);
        } else {
          visibleSections.delete(sectionId);
        }
      });

      const visibleSection = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
      setActiveSection(window.scrollY <= 1 ? null : visibleSection?.[0] ?? null);
    }, SECTION_OBSERVER_OPTIONS);

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [inPageNavigation]);

  useEffect(() => {
    if (typeof window === 'undefined' || !inPageNavigation) {
      return;
    }

    const clearActiveSectionAtTop = () => {
      if (window.scrollY <= 1) {
        setActiveSection(null);
      }
    };

    clearActiveSectionAtTop();
    window.addEventListener('scroll', clearActiveSectionAtTop, { passive: true });

    return () => window.removeEventListener('scroll', clearActiveSectionAtTop);
  }, [inPageNavigation]);

  useEffect(() => {
    if (typeof window === 'undefined' || !inPageNavigation) {
      return;
    }

    const context = readLocaleScrollContext();
    if (!context) {
      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;

    const restoreScrollContext = () => {
      const target = getLocaleScrollTarget(context);
      if (target === null) {
        clearLocaleScrollContext();
        return;
      }

      window.sessionStorage.removeItem(PENDING_SECTION_STORAGE_KEY);
      window.scrollTo({ top: target, behavior: 'auto' });
      clearLocaleScrollContext();
    };

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(restoreScrollContext);
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [inPageNavigation]);

  useEffect(() => {
    if (typeof window === 'undefined' || !inPageNavigation) {
      return;
    }

    const pendingSection = window.sessionStorage.getItem(PENDING_SECTION_STORAGE_KEY) as HomeSectionId | null;
    if (!pendingSection || !HOME_SECTION_IDS.includes(pendingSection)) {
      return;
    }

    const target = document.getElementById(pendingSection);
    if (!target) {
      window.sessionStorage.removeItem(PENDING_SECTION_STORAGE_KEY);
      return;
    }

    const behavior: ScrollBehavior = isReducedMotionPreferred() ? 'auto' : 'smooth';
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior, block: 'start' });
      window.history.replaceState(window.history.state, '', homePath);
      setActiveSection(pendingSection);
      window.sessionStorage.removeItem(PENDING_SECTION_STORAGE_KEY);
    });
  }, [homePath, inPageNavigation]);

  function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, sectionId: HomeSectionId) {
    if (typeof window === 'undefined') {
      return;
    }

    if (!inPageNavigation) {
      event.preventDefault();
      window.sessionStorage.setItem(PENDING_SECTION_STORAGE_KEY, sectionId);
      window.location.assign(homePath);
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    event.preventDefault();
    const behavior: ScrollBehavior = isReducedMotionPreferred() ? 'auto' : 'smooth';
    target.scrollIntoView({ behavior, block: 'start' });
    window.history.replaceState(window.history.state, '', homePath);
    setActiveSection(sectionId);
  }

  function handleMobileSectionClick(event: MouseEvent<HTMLAnchorElement>, sectionId: HomeSectionId) {
    trackEvent(getMobileNavSelectEvent(sectionId));
    mobileOpenRef.current = false;
    setMobileOpen(false);
    handleSectionClick(event, sectionId);
  }

  function handleMobileOpenChange(open: boolean) {
    if (open && !mobileOpenRef.current) {
      trackEvent('mobile_nav_open');
    }

    mobileOpenRef.current = open;
    setMobileOpen(open);
  }

  return (
    <>
      <nav className="site-header__section-nav" aria-label={label}>
        {links.map((link) => (
          <a
            key={link.anchor}
            className="site-header__section-link"
            href={getSectionHref(homePath, link.anchor)}
            onClick={(event) => handleSectionClick(event, link.anchor)}
            aria-current={inPageNavigation && activeSection === link.anchor ? 'location' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <Dialog open={mobileOpen} onOpenChange={handleMobileOpenChange}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="site-header__mobile-nav-trigger"
            aria-label={mobileOpen ? closeLabel : openLabel}
            aria-expanded={mobileOpen}
          >
            <MenuIcon />
          </button>
        </DialogTrigger>
        <DialogContent className="site-header__mobile-nav-dialog !translate-x-0 !translate-y-0">
          <div className="site-header__mobile-nav-heading">
            <DialogTitle className="site-header__mobile-nav-title">{label}</DialogTitle>
            <DialogClose asChild>
              <button type="button" className="site-header__mobile-nav-close" aria-label={closeLabel}>
                <CloseIcon />
              </button>
            </DialogClose>
          </div>
          <nav className="site-header__mobile-section-nav" aria-label={label}>
            {links.map((link) => (
              <a
                key={link.anchor}
                className="site-header__mobile-section-link"
                href={getSectionHref(homePath, link.anchor)}
                onClick={(event) => handleMobileSectionClick(event, link.anchor)}
                aria-current={inPageNavigation && activeSection === link.anchor ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
    </>
  );
}
