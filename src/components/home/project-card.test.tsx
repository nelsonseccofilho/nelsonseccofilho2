import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ProjectCard } from './project-card';

const horizonCard = (
  <ProjectCard
    id="horizon-his"
    title="HORIZON HIS"
    description="High-fidelity navigable prototype for a complex hospital information system, validated with clinical and domain stakeholders and presented at Hospitalar 2025."
    tags={['Healthtech', 'UX Leadership', 'Product Strategy']}
    image={{
      src: '/assets/projects/horizon-his/cover/cover-1440.webp',
      alt: 'Hospital information system prototype interface showing triage workflow and generated clinical data panels.',
    }}
  />
);

afterEach(() => {
  cleanup();
});

describe('ProjectCard', () => {
  it('renders a semantic list item with a named article', () => {
    render(<ul>{horizonCard}</ul>);

    const article = screen.getByRole('article', { name: 'HORIZON HIS' });
    const item = article.closest('li');

    expect(item).toHaveClass('project-grid__item');
    expect(article).toHaveClass('project-card');
  });

  it('renders the title, description, tags and accessible cover image', () => {
    render(<ul>{horizonCard}</ul>);

    expect(screen.getByRole('heading', { level: 3, name: 'HORIZON HIS' })).toBeInTheDocument();
    expect(screen.getByText(/high-fidelity navigable prototype for a complex hospital information system/i)).toBeInTheDocument();
    expect(screen.getByText('Healthtech')).toBeInTheDocument();
    expect(screen.getByText('UX Leadership')).toBeInTheDocument();
    expect(screen.getByText('Product Strategy')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /hospital information system prototype interface/i })).toBeInTheDocument();
  });

  it('does not expose a fake case-study link before the route exists', () => {
    render(<ul>{horizonCard}</ul>);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});