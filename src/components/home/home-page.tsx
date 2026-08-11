import Link from 'next/link';
import { AnalyticsConsentSurface } from '@/components/analytics/analytics-provider';
import { AnalyticsLink } from '@/components/analytics/analytics-link';
import { BackToTop } from '@/components/case-study/back-to-top';
import { Hero } from '@/components/home/hero';
import { ProjectCard } from '@/components/home/project-card';
import { ProjectGrid } from '@/components/home/project-grid';
import { SiteHeader } from '@/components/layout/site-header';
import { SendIcon } from '@/components/ui/send-icon';
import {
  N3LX_SPOTIFY_URL,
  getWhatsAppContactUrl,
} from '@/content/contact';
import { selectedWork } from '@/content/home-shared';
import { commonContent, homeContent } from '@/content/i18n';
import { projectFacts } from '@/content/project-facts';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath } from '@/i18n/routes';

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const common = commonContent[locale];
  const content = homeContent[locale];
  const resumeHref = locale === 'pt-BR' ? '/assets/resume/N3LX_PT-BR.pdf' : '/assets/resume/N3LX_EN.pdf';

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="home" />
      <main>
        <Hero
          content={content.hero}
          accessibility={content.accessibility}
          resume={{
            label: common.header.resumeLabel,
            ariaLabel: common.header.resumeAriaLabel,
            href: resumeHref,
            dialogTitle: common.resumeDialog.title,
            closeLabel: common.resumeDialog.closeLabel,
            downloadLabel: common.resumeDialog.downloadLabel,
            loadingLabel: common.resumeDialog.loadingLabel,
          }}
        />
        <AnalyticsConsentSurface />
        <section id="projects" className="scroll-mt-24 pt-[clamp(2rem,4vw,4rem)] pb-[clamp(3rem,6vw,6rem)]" aria-labelledby="featured-projects-title">
          <div className="layout-container grid gap-8">
            <h2 id="featured-projects-title" className="m-0 text-[clamp(2rem,3.5vw,3.5rem)] leading-none font-bold text-[var(--color-text-primary)]">
              {content.featuredCases.title}
            </h2>
            <ProjectGrid>
              {content.featuredCases.projects.map((project) => {
                const facts = projectFacts[project.routeId];
                const featuredImage =
                  project.routeId === 'horizon-his'
                    ? { src: '/assets/projects/horizon-his/cover/cover-home-horizon-his.png', alt: project.image.alt }
                    : project.routeId === 'subiter'
                      ? { src: '/assets/projects/subiter/cover/cover-master.webp', alt: project.image.alt }
                      : project.routeId === 'rede-dcc'
                    ? { src: '/assets/projects/rede-dcc/cover/cover-home-rede-dcc.png', alt: project.image.alt }
                    : project.routeId === 'dasa-canal-do-consultor'
                      ? { src: '/assets/projects/dasa-canal-do-consultor/cover/cover-home-dasa-canal-consultor.jpg', alt: project.image.alt }
                      : undefined;

                return (
                  <ProjectCard
                    key={project.routeId}
                    id={project.routeId}
                    title={facts.projectName}
                    description={project.description}
                    tags={project.tags}
                    tagsLabel={project.tagsLabel}
                    image={featuredImage}
                    href={getLocalizedPath(project.routeId, locale)}
                    placeholderLabel={common.mediaPlaceholders.cover}
                    actionLabel={content.featuredCases.actionLabel}
                    actionAriaLabel={
                      locale === 'pt-BR' ? `Ver projeto ${facts.projectName}` : `View ${facts.projectName} project`
                    }
                  />
                );
              })}
            </ProjectGrid>
          </div>
        </section>
        <section className="pt-[clamp(1.5rem,2.5vw,2.5rem)] pb-[clamp(2rem,4vw,3rem)]" aria-labelledby="selected-work-title">
          <div className="layout-container grid gap-6">
            <div className="grid gap-2">
              <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">{content.selectedWork.eyebrow}</p>
              <h2 id="selected-work-title" className="m-0 text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.1] font-bold text-[var(--color-text-primary)]">
                {content.selectedWork.title}
              </h2>
            </div>
            <article
              className="grid w-full gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[clamp(1.1rem,2vw,1.5rem)] md:grid-cols-12 md:items-center md:gap-8 lg:max-w-[78rem]"
              aria-labelledby="selected-work-card-title"
            >
              <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] md:col-span-7 md:aspect-[4/3] lg:aspect-[16/10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="project-card__image"
                  src="/assets/projects/connectcar-freeflow/cover/cover-1920.webp"
                  srcSet="/assets/projects/connectcar-freeflow/cover/cover-640.webp 640w, /assets/projects/connectcar-freeflow/cover/cover-1024.webp 1024w, /assets/projects/connectcar-freeflow/cover/cover-1440.webp 1440w, /assets/projects/connectcar-freeflow/cover/cover-1920.webp 1920w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 52vw"
                  alt={content.selectedWork.image.alt}
                  loading="lazy"
                />
              </div>
              <div className="grid content-center gap-3 md:col-span-5 md:pr-4">
                <h3 id="selected-work-card-title" className="m-0 text-[clamp(1.1rem,1.7vw,1.35rem)] leading-[1.2] font-bold text-[var(--color-text-primary)]">
                  {selectedWork.projectName}
                </h3>
                <p className="m-0 text-[clamp(0.95rem,1.25vw,1rem)] leading-[1.6] text-[var(--color-text-secondary)]">{content.selectedWork.description}</p>
                <p className="m-0 text-[0.84rem] leading-[1.5] font-semibold tracking-[0.04em] text-[var(--color-text-secondary)] uppercase">
                  {content.selectedWork.provenanceLabel}
                </p>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label={content.accessibility.selectedWorkTags}>
                  {content.selectedWork.tags.map((tag) => (
                    <li key={tag} className="text-[0.82rem] leading-[1.4] font-semibold tracking-[0.08em] text-[var(--color-brand-text)] uppercase">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section id="work-process" className="scroll-mt-24 pt-[clamp(1.5rem,2.5vw,2.5rem)] pb-[clamp(2rem,4vw,3rem)]" aria-labelledby="seniority-title" aria-label={content.accessibility.seniority}>
          <div className="layout-container grid gap-8 md:gap-10">
            <div className="grid gap-2">
              <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">{content.seniority.eyebrow}</p>
              <h2 id="seniority-title" className="m-0 text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.1] font-bold text-[var(--color-text-primary)]">
                {content.seniority.title}
              </h2>
            </div>
            <ol className="m-0 grid list-none border-b border-[var(--color-border)] p-0">
              {content.seniority.pillars.map((pillar, index) => (
                <li key={pillar.title} className="grid gap-3 border-t border-[var(--color-border)] py-6 md:grid-cols-12 md:items-baseline md:gap-6 md:py-7">
                  <span className="text-sm font-semibold tracking-[0.14em] text-[var(--color-brand-text)] tabular-nums md:col-span-2" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="m-0 text-[1.05rem] leading-[1.25] font-bold text-[var(--color-text-primary)] md:col-span-3">{pillar.title}</h3>
                  <p className="m-0 max-w-[48rem] text-[0.98rem] leading-[1.7] text-[var(--color-text-secondary)] md:col-span-7">{pillar.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="portfolio" className="scroll-mt-24 py-[clamp(2.5rem,5vw,5rem)]" aria-labelledby="portfolio-meta-case-title">
          <div className="layout-container">
            <div className="editorial-grid py-[clamp(2.5rem,5vw,4.5rem)]">
              <div className="editorial-grid__aside">
                <p className="editorial-grid__eyebrow">{content.metaCase.eyebrow}</p>
              </div>
              <div className="editorial-grid__main">
                <h2 id="portfolio-meta-case-title" className="editorial-grid__title">
                  {content.metaCase.title}
                </h2>
                <p className="editorial-grid__description">{content.metaCase.description}</p>
                <Link className="contact__secondary-link min-h-11 w-fit items-center" href={getLocalizedPath('building-portfolio', locale)}>
                  {content.metaCase.primaryActionLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about scroll-mt-24" aria-labelledby="about-title" aria-label={content.accessibility.about}>
          <div className="layout-container">
            <div className="editorial-grid about__grid">
              <div className="about__aside">
                <p className="about__eyebrow">{content.about.eyebrow}</p>
                <h2 id="about-title" className="about__heading">
                  {content.about.title}
                </h2>
              </div>
              <div className="about__main">
                <ul className="about__positioning" aria-label="Professional positioning">
                  {content.about.positioning.map((item) => (
                    <li key={item.title} className="about__positioning-item">
                      <p className="about__positioning-title">{item.title}</p>
                      <p className="about__positioning-copy">{item.description}</p>
                    </li>
                  ))}
                </ul>
                <div className="about__biography">
                  {content.about.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="about__copy">
                      {paragraph}
                    </p>
                  ))}
                  <p className="about__copy">{content.about.businessContext}</p>
                </div>
                <div className="about__secondary">
                  <p className="about__eyebrow">{content.about.artisticEyebrow}</p>
                  <p className="about__copy">{content.about.artisticCopy}</p>
                  <a className="contact__secondary-link min-h-11 w-fit items-center" href={N3LX_SPOTIFY_URL} target="_blank" rel="noreferrer">
                    {content.about.artisticActionLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact scroll-mt-24" aria-labelledby="contact-title" aria-label={content.accessibility.contact}>
          <div className="layout-container">
            <div className="editorial-grid contact__grid">
              <div className="editorial-grid__aside">
                <p className="editorial-grid__eyebrow">{content.contact.eyebrow}</p>
              </div>
              <div className="editorial-grid__main">
                <h2 id="contact-title" className="editorial-grid__title">
                  {content.contact.title}
                </h2>
                <p className="editorial-grid__description">{content.contact.description}</p>
                <div className="contact__actions">
                  <AnalyticsLink
                    className="whatsapp-action contact__primary-link"
                    href={getWhatsAppContactUrl(locale)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={content.contact.primaryActionLabel}
                    eventName="contact_whatsapp_click"
                    data-clarity-mask="true"
                  >
                    <SendIcon className="contact__primary-icon" />
                    <span>{content.contact.primaryActionLabel}</span>
                  </AnalyticsLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BackToTop label={common.backToTop.label} accessibilityLabel={common.backToTop.accessibilityLabel} />
    </>
  );
}
