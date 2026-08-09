import { Hero } from '@/components/home/hero';
import { ProjectCard } from '@/components/home/project-card';
import { ProjectGrid } from '@/components/home/project-grid';
import { ThemeAwareProjectImage } from '@/components/home/theme-aware-project-image';
import { SiteHeader } from '@/components/layout/site-header';
import { CONTACT_EMAIL, CONTACT_EMAIL_URL, LINKEDIN_CONTACT_URL, WHATSAPP_CONTACT_URL } from '@/content/contact';
import { homeProjectImages, selectedWork } from '@/content/home-shared';
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

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="home" />
      <main>
        <Hero content={content.hero} accessibility={content.accessibility} />
        <section id="cases" className="pt-[clamp(2rem,4vw,4rem)] pb-[clamp(3rem,6vw,6rem)]" aria-labelledby="featured-cases-title">
          <div className="layout-container grid gap-8">
            <h2 id="featured-cases-title" className="m-0 text-[clamp(2rem,3.5vw,3.5rem)] leading-none font-bold text-[var(--color-text-primary)]">
              {content.featuredCases.title}
            </h2>
            <ProjectGrid>
              {content.featuredCases.projects.map((project) => {
                const facts = projectFacts[project.routeId];
                const image = homeProjectImages[project.routeId];

                return (
                  <ProjectCard
                    key={project.routeId}
                    id={project.routeId}
                    title={facts.projectName}
                    description={project.description}
                    tags={project.tags}
                    tagsLabel={project.tagsLabel}
                    href={getLocalizedPath(project.routeId, locale)}
                    image={{ ...image, alt: project.image.alt }}
                    actionLabel={content.featuredCases.actionLabel}
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
                <ThemeAwareProjectImage
                  image={{ ...selectedWork.image, alt: content.selectedWork.image.alt }}
                  sizes="(max-width: 767px) 100vw, (max-width: 1399px) 58vw, 760px"
                />
              </div>
              <div className="grid content-center gap-3 md:col-span-5 md:pr-4">
                <h3 id="selected-work-card-title" className="m-0 text-[clamp(1.1rem,1.7vw,1.35rem)] leading-[1.2] font-bold text-[var(--color-text-primary)]">
                  {selectedWork.projectName}
                </h3>
                <p className="m-0 text-[clamp(0.95rem,1.25vw,1rem)] leading-[1.6] text-[var(--color-text-secondary)]">{content.selectedWork.description}</p>
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
        <section className="pt-[clamp(1.5rem,2.5vw,2.5rem)] pb-[clamp(2rem,4vw,3rem)]" aria-labelledby="seniority-title" aria-label={content.accessibility.seniority}>
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
        <section className="about" aria-labelledby="about-title" aria-label={content.accessibility.about}>
          <div className="layout-container about__inner">
            <div className="about__content">
              <h2 id="about-title" className="about__heading">
                {content.about.title}
              </h2>
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="about__copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="contact" aria-labelledby="contact-title" aria-label={content.accessibility.contact}>
          <div className="layout-container contact__inner">
            <div className="contact__content">
              <p className="contact__eyebrow">{content.contact.eyebrow}</p>
              <h2 id="contact-title" className="contact__heading">
                {content.contact.title}
              </h2>
              <p className="contact__copy">{content.contact.description}</p>
              <div className="contact__actions">
                <a
                  className="contact__primary-link"
                  href={WHATSAPP_CONTACT_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.contact.primaryActionLabel}
                >
                  {content.contact.primaryActionLabel}
                </a>
                <div className="contact__secondary-links" aria-label={content.accessibility.secondaryContactLinks}>
                  <a className="contact__secondary-link" href={CONTACT_EMAIL_URL}>
                    {CONTACT_EMAIL}
                  </a>
                  <a className="contact__secondary-link" href={LINKEDIN_CONTACT_URL} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
