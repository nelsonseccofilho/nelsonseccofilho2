import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './hero';

describe('Hero', () => {
  it('renders the editorial hero composition', () => {
    render(<Hero />);

    const section = screen.getByRole('region', { name: /hero/i });
    expect(section).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /designing digital products for complex systems\./i })).toBeInTheDocument();
    expect(screen.getByText('Nelson Secco')).toBeInTheDocument();
    expect(screen.getByText('Senior Product Designer')).toBeInTheDocument();
    expect(screen.getByText(/software-development background, working hands-on across design, product, and engineering/i)).toBeInTheDocument();
    expect(screen.getByText('UX Strategy')).toBeInTheDocument();
    expect(screen.getByText('Product Discovery')).toBeInTheDocument();
    expect(screen.getByText('Design Systems')).toBeInTheDocument();
    expect(screen.getByText('AI-assisted Product Design')).toBeInTheDocument();
  });
});
