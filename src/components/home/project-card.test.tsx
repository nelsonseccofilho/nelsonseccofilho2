import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ProjectCard } from './project-card';

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

const horizonCard = (
  <ProjectCard
    id="horizon-his"
    title="HORIZON HIS"
    description="High-fidelity navigable prototype for a complex hospital information system, validated with clinical and domain stakeholders and presented at Hospitalar 2025."
    tags={['Healthtech', 'UX Leadership', 'Product Strategy']}
    placeholderLabel="Cover being rebuilt"
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

  it('renders the title, description, tags and intentional cover placeholder', () => {
    render(<ul>{horizonCard}</ul>);

    expect(screen.getByRole('heading', { level: 3, name: 'HORIZON HIS' })).toBeInTheDocument();
    expect(screen.getByText(/high-fidelity navigable prototype for a complex hospital information system/i)).toBeInTheDocument();
    expect(screen.getByText('Healthtech')).toBeInTheDocument();
    expect(screen.getByText('UX Leadership')).toBeInTheDocument();
    expect(screen.getByText('Product Strategy')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Cover being rebuilt' })).toHaveAttribute('data-placeholder-variant', 'project-card');
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
          actionLabel="View project →"
          placeholderLabel="Cover being rebuilt"
        />
      </ul>,
    );

    const link = screen.getByRole('link', { name: /horizon his/i });

    expect(link).toHaveAttribute('href', '/en/projects/horizon-his');
    expect(screen.getByText('View project →')).toBeInTheDocument();
    expect(link.querySelectorAll('a')).toHaveLength(0);
  });

  it('does not expose a fake case-study link before the route exists', () => {
    render(<ul>{horizonCard}</ul>);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
