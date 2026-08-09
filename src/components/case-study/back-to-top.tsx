'use client';

import { useEffect, useState } from 'react';

type BackToTopProps = {
  label: string;
  accessibilityLabel: string;
  threshold?: number;
};

export function BackToTop({ label, accessibilityLabel, threshold = 480 }: BackToTopProps) {
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isEndNavigationVisible, setIsEndNavigationVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsPastThreshold(window.scrollY >= threshold);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    const endNavigation = document.getElementById('case-navigation');
    const observer =
      endNavigation && typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(([entry]) => setIsEndNavigationVisible(entry.isIntersecting))
        : null;

    if (endNavigation && observer) observer.observe(endNavigation);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      observer?.disconnect();
    };
  }, [threshold]);

  if (!isPastThreshold || isEndNavigationVisible) return null;

  const scrollToTop = () => {
    const reduceMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 text-sm font-semibold text-[var(--color-text-primary)] shadow-lg transition-colors hover:border-[var(--color-brand)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-text)] motion-reduce:transition-none"
      aria-label={accessibilityLabel}
      onClick={scrollToTop}
    >
      {label}
    </button>
  );
}
