import { ResumeDialog } from '@/components/ui/resume-dialog';
import { enHome } from '@/content/i18n';
import type { HomeContent } from '@/content/i18n/types';

type HeroProps = {
  content?: HomeContent['hero'];
  accessibility?: Pick<HomeContent['accessibility'], 'hero' | 'professionalDisciplines'>;
  resume?: {
    label: string;
    ariaLabel: string;
    href: string;
    dialogTitle: string;
    closeLabel: string;
    downloadLabel: string;
    loadingLabel: string;
  };
};

export function Hero({ content = enHome.hero, accessibility = enHome.accessibility, resume }: HeroProps = {}) {
  return (
    <section className="py-[clamp(3rem,6vw,6rem)] lg:py-[clamp(3.5rem,4.5vw,5.25rem)]" aria-label={accessibility.hero}>
      <div className="layout-container grid gap-6 py-[clamp(2rem,5vw,3.5rem)] md:gap-8 lg:max-w-[calc(var(--container-max)-8rem)] lg:justify-self-start lg:py-10">
        <div className="grid gap-1">
          <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">{content.name}</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p className="m-0 text-sm font-semibold text-[var(--color-text-secondary)]">{content.eyebrow}</p>
            {resume ? (
              <>
                <span className="text-[var(--color-border)]" aria-hidden="true">
                  ·
                </span>
                <ResumeDialog
                  pdfHref={resume.href}
                  triggerClassName="hero__resume-link"
                  labels={{
                    triggerLabel: resume.label,
                    triggerAriaLabel: resume.ariaLabel,
                    dialogTitle: resume.dialogTitle,
                    closeLabel: resume.closeLabel,
                    downloadLabel: resume.downloadLabel,
                    loadingLabel: resume.loadingLabel,
                  }}
                />
              </>
            ) : null}
          </div>
        </div>
        <h1 className="m-0 max-w-[12ch] text-[clamp(2.7rem,5vw,4.75rem)] leading-[0.95] font-bold tracking-[-0.045em] text-[var(--color-text-primary)] lg:max-w-[15ch]">
          {content.title}
        </h1>
        <p className="m-0 max-w-[58rem] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.6] text-[var(--color-text-secondary)] lg:max-w-[48rem]">
          {content.description}
        </p>
        <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-3 p-0 max-[40rem]:gap-x-3" aria-label={accessibility.professionalDisciplines}>
          {content.disciplines.map((discipline, index) => (
            <li key={discipline} className="flex items-center gap-4 text-[0.95rem] leading-6 text-[var(--color-text-secondary)] max-[40rem]:gap-0">
              {index > 0 ? (
                <span className="text-[var(--color-border)] max-[40rem]:hidden" aria-hidden="true">
                  •
                </span>
              ) : null}
              {discipline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
