import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { WHATSAPP_CONTACT_URL } from '@/content/contact';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="layout-container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Página inicial — N3LX">
          N3LX
        </Link>
        <div className="site-header__actions">
          <a className="site-header__cta" href={WHATSAPP_CONTACT_URL} target="_blank" rel="noreferrer">
            Let’s talk
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
