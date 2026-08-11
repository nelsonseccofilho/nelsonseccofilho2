'use client';

import type { ComponentProps } from 'react';
import { useAnalytics } from './analytics-provider';
import type { PortfolioAnalyticsEvent } from './clarity';

type AnalyticsLinkProps = Omit<ComponentProps<'a'>, 'onClick'> & {
  eventName: PortfolioAnalyticsEvent;
};

export function AnalyticsLink({ eventName, ...props }: AnalyticsLinkProps) {
  const { trackEvent } = useAnalytics();
  return <a {...props} onClick={() => trackEvent(eventName)} />;
}
