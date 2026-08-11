import type { Metadata } from 'next';
import { PortfolioMetaCasePage } from '@/components/meta-case/portfolio-meta-case-page';
import { portfolioMetaCaseContent } from '@/content/i18n/meta-case';

export const metadata: Metadata = portfolioMetaCaseContent.en.metadata;

export default function EnglishPortfolioMetaCasePage() {
  return <PortfolioMetaCasePage locale="en" />;
}
