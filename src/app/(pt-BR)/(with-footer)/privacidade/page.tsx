import { SiteHeader } from '@/components/layout/site-header';
import { commonContent } from '@/content/i18n';

export default function PrivacyPagePtBr() {
  const common = commonContent['pt-BR'];

  return (
    <>
      <SiteHeader content={common} locale="pt-BR" routeId="privacy" />
      <main className="py-[clamp(2.5rem,6vw,5rem)]">
        <section className="layout-container grid gap-5" aria-labelledby="privacy-title">
          <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">Privacidade</p>
          <h1 id="privacy-title" className="m-0 max-w-[16ch] text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] font-bold tracking-[-0.04em] text-[var(--color-text-primary)]">
            {common.privacy.title}
          </h1>
          <p className="m-0 max-w-[52rem] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-[var(--color-text-secondary)]">
            {common.privacy.description}
          </p>
          <p className="m-0 max-w-[52rem] text-[clamp(1rem,1.6vw,1.15rem)] leading-[1.7] text-[var(--color-text-secondary)]">
            {common.privacy.manageLabel}: {common.privacy.allowLabel} / {common.privacy.declineLabel}
          </p>
        </section>
      </main>
    </>
  );
}
