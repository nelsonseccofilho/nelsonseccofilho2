import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ProjectCard } from './project-card';

vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

const horizonCard = (
  <ProjectCard
    id="horizon-his"
    title="HORIZON HIS"
    description="High-fidelity navigable prototype for a complex hospital information system, validated with clinical and domain stakeholders and presented at Hospitalar 2025."
    tags={['Healthtech', 'UX Leadership', 'Product Strategy']}
    image={{
      alt: 'Hospital information system prototype interface showing triage workflow and generated clinical data panels.',
      width: 1920,
      height: 1080,
      light: {
        640: '/assets/projects/horizon-his/cover/light/cover-640.webp',
        1024: '/assets/projects/horizon-his/cover/light/cover-1024.webp',
        1440: '/assets/projects/horizon-his/cover/light/cover-1440.webp',
        1920: '/assets/projects/horizon-his/cover/light/cover-1920.webp',
      },
      dark: {
        640: '/assets/projects/horizon-his/cover/dark/cover-640.webp',
        1024: '/assets/projects/horizon-his/cover/dark/cover-1024.webp',
        1440: '/assets/projects/horizon-his/cover/dark/cover-1440.webp',
        1920: '/assets/projects/horizon-his/cover/dark/cover-1920.webp',
      },
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

    expect(item?.tagName).toBe('LI');
    expect(article).toHaveAccessibleName('HORIZON HIS');
  });

  it('renders the title, description, tags and accessible cover image', async () => {
    render(<ul>{horizonCard}</ul>);

    expect(screen.getByRole('heading', { level: 3, name: 'HORIZON HIS' })).toBeInTheDocument();
    expect(screen.getByText(/high-fidelity navigable prototype for a complex hospital information system/i)).toBeInTheDocument();
    expect(screen.getByText('Healthtech')).toBeInTheDocument();
    expect(screen.getByText('UX Leadership')).toBeInTheDocument();
    expect(screen.getByText('Product Strategy')).toBeInTheDocument();
    expect(await screen.findByRole('img', { name: /hospital information system prototype interface/i })).toBeInTheDocument();
  });

  it('keeps ProjectCard as a server component by not requiring client-only props', () => {
    render(<ul>{horizonCard}</ul>);

    expect(screen.getByRole('article', { name: 'HORIZON HIS' })).toBeInTheDocument();
  });

  it('renders an optional link when a route exists', () => {
    render(
      <ul>
        <ProjectCard
          id="horizon-his"
          title="HORIZON HIS"
          description="High-fidelity navigable prototype for a complex hospital information system, validated with clinical and domain stakeholders and presented at Hospitalar 2025."
          tags={['Healthtech', 'UX Leadership', 'Product Strategy']}
          href="/en/projects/horizon-his"
          actionLabel="View case →"
          image={{
            alt: 'Hospital information system prototype interface showing triage workflow and generated clinical data panels.',
            width: 1920,
            height: 1080,
            light: {
              640: '/assets/projects/horizon-his/cover/light/cover-640.webp',
              1024: '/assets/projects/horizon-his/cover/light/cover-1024.webp',
              1440: '/assets/projects/horizon-his/cover/light/cover-1440.webp',
              1920: '/assets/projects/horizon-his/cover/light/cover-1920.webp',
            },
            dark: {
              640: '/assets/projects/horizon-his/cover/dark/cover-640.webp',
              1024: '/assets/projects/horizon-his/cover/dark/cover-1024.webp',
              1440: '/assets/projects/horizon-his/cover/dark/cover-1440.webp',
              1920: '/assets/projects/horizon-his/cover/dark/cover-1920.webp',
            },
          }}
        />
      </ul>,
    );

    const link = screen.getByRole('link', { name: /horizon his/i });

    expect(link).toHaveAttribute('href', '/en/projects/horizon-his');
    expect(screen.getByText('View case →')).toBeInTheDocument();
    expect(link.querySelectorAll('a')).toHaveLength(0);
  });

  it('does not expose a fake case-study link before the route exists', () => {
    render(<ul>{horizonCard}</ul>);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
