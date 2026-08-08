import Link from 'next/link';

type CaseNavigationProps = {
  label?: string;
  href?: string;
  accessibilityLabel?: string;
};

export function CaseNavigation({ label = 'Back to Featured Cases', href = '/', accessibilityLabel = 'Case navigation' }: CaseNavigationProps) {
  return (
    <nav className="case-navigation" aria-label={accessibilityLabel}>
      <div className="layout-container case-navigation__inner">
        <Link href={href} className="case-navigation__back">
          {label}
        </Link>
      </div>
    </nav>
  );
}