import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Hero } from './hero';

const trackEventMock = vi.hoisted(() => vi.fn());

vi.mock('@/components/analytics/analytics-provider', () => ({
  useAnalytics: () => ({ trackEvent: trackEventMock }),
}));

beforeEach(() => trackEventMock.mockClear());

describe('Hero', () => {
  it('renders the editorial hero composition', () => {
    render(<Hero />);

    const section = screen.getByRole('region', { name: /introduction/i });
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

  it('wires the Hero Resume surface to open and download intent events', () => {
    render(
      <Hero
        resume={{
          label: 'Resume',
          ariaLabel: "Open Nelson Secco's resume in English",
          href: '/assets/resume/N3LX_EN.pdf',
          dialogTitle: 'Resume — Nelson Secco',
          closeLabel: 'Close resume',
          downloadLabel: 'Download PDF',
          loadingLabel: 'Loading resume…',
        }}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: "Open Nelson Secco's resume in English" }));
    fireEvent.click(screen.getByRole('link', { name: 'Download PDF' }));

    expect(trackEventMock.mock.calls).toEqual([
      ['resume_open:hero'],
      ['resume_download:hero'],
    ]);
  });
});
