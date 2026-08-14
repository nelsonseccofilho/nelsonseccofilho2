import { PrivacyPreferencesButton } from '@/components/analytics/privacy-preferences-button';
import { Separator } from '@/components/ui/separator';
import { ResumeDialog } from '@/components/ui/resume-dialog';
import { CONTACT_EMAIL, CONTACT_EMAIL_URL, GITHUB_PROFILE_URL, LINKEDIN_CONTACT_URL } from '@/content/contact';
import { commonContent } from '@/content/i18n';
import type { Locale } from '@/i18n/locales';

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
  const content = commonContent[locale];

  return (
    <footer>
      <Separator />
      <div className="layout-container py-[clamp(2rem,4vw,3.25rem)]">
        <div className="grid justify-items-center gap-5">
          <nav aria-label={navLabel} className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <a className="text-link text-link--hit-area" href={CONTACT_EMAIL_URL} data-clarity-mask="true">
              {CONTACT_EMAIL}
            </a>
            <a
              className="text-link text-link--hit-area"
              href={LINKEDIN_CONTACT_URL}
              target="_blank"
              rel="noreferrer"
              data-clarity-mask="true"
            >
              LinkedIn
            </a>
            <a
              className="text-link text-link--hit-area"
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              data-clarity-mask="true"
            >
              GitHub
            </a>
            <ResumeDialog
              pdfHref={resumeHref}
              triggerClassName="text-link text-link--hit-area"
              labels={{
                triggerLabel: content.header.resumeLabel,
                triggerAriaLabel: content.header.resumeAriaLabel,
                dialogTitle: content.resumeDialog.title,
                closeLabel: content.resumeDialog.closeLabel,
                downloadLabel: content.resumeDialog.downloadLabel,
                loadingLabel: content.resumeDialog.loadingLabel,
              }}
            />
            <PrivacyPreferencesButton
              label={locale === 'pt-BR' ? 'Privacidade' : 'Privacy'}
              closeLabel={locale === 'pt-BR' ? 'Fechar preferências de privacidade' : 'Close privacy preferences'}
              triggerClassName="text-link text-link--hit-area"
            />
          </nav>
          <p className="m-0 text-center text-sm text-[var(--color-text-secondary)]">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
