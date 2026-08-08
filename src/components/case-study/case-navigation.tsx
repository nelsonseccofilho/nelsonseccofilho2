import Link from 'next/link';

export function CaseNavigation() {
  return (
    <nav className="case-navigation" aria-label="Case navigation">
      <div className="layout-container case-navigation__inner">
        <Link href="/" className="case-navigation__back">
          Back to Featured Cases
        </Link>
      </div>
    </nav>
  );
}