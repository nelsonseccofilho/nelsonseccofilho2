import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="layout-container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Página inicial — N3LX">
          N3LX
        </Link>
        <div className="site-header__actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
