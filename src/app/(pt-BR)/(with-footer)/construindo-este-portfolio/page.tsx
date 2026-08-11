import type { Metadata } from 'next';
import { PortfolioMetaCasePage } from '@/components/meta-case/portfolio-meta-case-page';
import { portfolioMetaCaseContent } from '@/content/i18n/meta-case';

export const metadata: Metadata = portfolioMetaCaseContent['pt-BR'].metadata;

export default function PortuguesePortfolioMetaCasePage() {
  return <PortfolioMetaCasePage locale="pt-BR" />;
}
