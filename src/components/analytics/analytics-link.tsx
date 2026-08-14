'use client';

import type { ComponentProps } from 'react';
import Link from 'next/link';
import { useAnalytics } from './analytics-provider';
import type { PortfolioAnalyticsEvent } from './clarity';

type AnalyticsLinkProps = Omit<ComponentProps<'a'>, 'onClick'> & {
  eventName: PortfolioAnalyticsEvent;
};

export function AnalyticsLink({ eventName, ...props }: AnalyticsLinkProps) {
  const { trackEvent } = useAnalytics();
  return <a {...props} onClick={() => trackEvent(eventName)} />;
}

type AnalyticsNavigationLinkProps = Omit<ComponentProps<typeof Link>, 'onClick'> & {
  eventName: PortfolioAnalyticsEvent;
};

export function AnalyticsNavigationLink({ eventName, ...props }: AnalyticsNavigationLinkProps) {
  const { trackEvent } = useAnalytics();
  return <Link {...props} onClick={() => trackEvent(eventName)} />;
}
