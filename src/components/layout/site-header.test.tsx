import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WHATSAPP_CONTACT_URL } from '@/content/contact';
import { SiteHeader } from './site-header';

vi.mock('@/components/theme/theme-toggle', () => ({
  ThemeToggle: () => <button type="button">Theme Toggle</button>,
}));

describe('SiteHeader', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the brand, the theme toggle and no fictitious navigation', () => {
    render(<SiteHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /n3lx/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /let.s talk/i })).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
    expect(screen.getByRole('button', { name: /theme toggle/i })).toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});
