import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { CONTACT_EMAIL, CONTACT_EMAIL_URL, GITHUB_PROFILE_URL, LINKEDIN_CONTACT_URL } from '@/content/contact';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath } from '@/i18n/routes';

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const resumeHref = locale === 'pt-BR' ? '/assets/resume/N3LX_PT-BR.pdf' : '/assets/resume/N3LX_EN.pdf';
  const navLabel = locale === 'pt-BR' ? 'Navegação de rodapé' : 'Footer navigation';
  const copyright =
    locale === 'pt-BR'
      ? `© ${year} N3LX Digital Business. Todos os direitos reservados.`
      : `© ${year} N3LX Digital Business. All rights reserved.`;

  return (
    <footer>
      <Separator />
      <div className="layout-container py-[clamp(2rem,4vw,3.25rem)]">
        <div className="grid justify-items-center gap-5">
          <nav aria-label={navLabel} className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <a className="contact__secondary-link" href={CONTACT_EMAIL_URL} data-clarity-mask="true">
              {CONTACT_EMAIL}
            </a>
            <a
              className="contact__secondary-link"
              href={LINKEDIN_CONTACT_URL}
              target="_blank"
              rel="noreferrer"
              data-clarity-mask="true"
            >
              LinkedIn
            </a>
            <a
              className="contact__secondary-link"
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              data-clarity-mask="true"
            >
              GitHub
            </a>
            <a
              className="contact__secondary-link"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              aria-label={locale === 'pt-BR' ? 'Abrir currículo de Nelson Secco em português' : "Open Nelson Secco's resume in English"}
            >
              {locale === 'pt-BR' ? 'Currículo' : 'Resume'}
            </a>
            <Link className="contact__secondary-link" href={getLocalizedPath('privacy', locale)}>
              {locale === 'pt-BR' ? 'Privacidade' : 'Privacy'}
            </Link>
          </nav>
          <p className="m-0 text-center text-sm text-[var(--color-text-secondary)]">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
