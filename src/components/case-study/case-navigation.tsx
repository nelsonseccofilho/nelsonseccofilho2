import Link from 'next/link';

type CaseNavigationProps = {
  label?: string;
};

export function CaseNavigation({ label = 'Back to Featured Cases' }: CaseNavigationProps) {
  return (
    <nav className="case-navigation" aria-label="Case navigation">
      <div className="layout-container case-navigation__inner">
        <Link href="/" className="case-navigation__back">
          {label}
        </Link>
      </div>
    </nav>
  );
}