import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import PrivacyPageEn from './(en)/(with-footer)/en/privacy/page';
import PrivacyPagePtBr from './(pt-BR)/(with-footer)/privacidade/page';

vi.mock('@/components/layout/site-header', () => ({
  SiteHeader: () => <header />,
}));

afterEach(cleanup);

describe('direct privacy routes', () => {
  it('keeps the Portuguese privacy page available at /privacidade', () => {
    render(<PrivacyPagePtBr />);

    expect(screen.getByRole('heading', { level: 1, name: 'Privacidade e experiência' })).toBeInTheDocument();
    expect(screen.getByText(/Privacidade: Permitir analytics \/ Recusar/i)).toBeInTheDocument();
  });

  it('keeps the English privacy page available at /en/privacy', () => {
    render(<PrivacyPageEn />);

    expect(screen.getByRole('heading', { level: 1, name: 'Privacy and experience' })).toBeInTheDocument();
    expect(screen.getByText(/Privacy: Allow analytics \/ Decline/i)).toBeInTheDocument();
  });
});
