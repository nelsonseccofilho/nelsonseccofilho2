import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from './page';

describe('HomePage', () => {
  it('renders the new header, hero and featured cases composition', () => {
    render(<HomePage />);

    const hero = screen.getByRole('region', { name: /hero/i });
    const featuredCases = screen.getByRole('region', { name: /featured cases/i });

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(hero).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: /designing digital products for complex systems\./i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByText(/senior product designer/i)).toBeInTheDocument();
    expect(screen.getByText(/ux strategy/i)).toBeInTheDocument();
    expect(screen.getByText(/product discovery/i)).toBeInTheDocument();
    expect(screen.getByText(/design systems/i)).toBeInTheDocument();
    expect(screen.getByText(/ai-assisted product design/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /featured cases/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /horizon his/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /subiter/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /rede dcc 1\.0/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /dasa/i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual(['HORIZON HIS', 'SUBITER', 'REDE DCC 1.0', 'DASA — Canal do Consultor']);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
    expect(screen.getByText(/discovery-led product design work/i)).toBeInTheDocument();
    expect(screen.getByText('Research & Discovery')).toBeInTheDocument();
    expect(screen.getByText('Product Design')).toBeInTheDocument();
    expect(screen.getByText('Business Rules')).toBeInTheDocument();
    expect(hero.compareDocumentPosition(featuredCases) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });
});
