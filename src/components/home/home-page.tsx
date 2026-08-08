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
        <section className="featured-cases" aria-labelledby="featured-cases-title">
          <div className="layout-container featured-cases__inner">
            <h2 id="featured-cases-title" className="featured-cases__heading">
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
                  />
                );
              })}
            </ProjectGrid>
          </div>
        </section>
        <section className="selected-work" aria-labelledby="selected-work-title">
          <div className="layout-container selected-work__inner">
            <div className="selected-work__header">
              <p className="selected-work__eyebrow">{content.selectedWork.eyebrow}</p>
              <h2 id="selected-work-title" className="selected-work__heading">
                {content.selectedWork.title}
              </h2>
            </div>
            <article className="selected-work__card" aria-labelledby="selected-work-card-title">
              <div className="selected-work__media">
                <ThemeAwareProjectImage
                  image={{ ...selectedWork.image, alt: content.selectedWork.image.alt }}
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 92vw, 960px"
                />
              </div>
              <div className="selected-work__content">
                <h3 id="selected-work-card-title" className="selected-work__title">
                  {selectedWork.projectName}
                </h3>
                <p className="selected-work__description">{content.selectedWork.description}</p>
                <ul className="selected-work__tags" aria-label={content.accessibility.selectedWorkTags}>
                  {content.selectedWork.tags.map((tag) => (
                    <li key={tag} className="selected-work__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section className="seniority" aria-labelledby="seniority-title" aria-label={content.accessibility.seniority}>
          <div className="layout-container seniority__inner">
            <div className="seniority__header">
              <p className="seniority__eyebrow">{content.seniority.eyebrow}</p>
              <h2 id="seniority-title" className="seniority__heading">
                {content.seniority.title}
              </h2>
            </div>
            <div className="seniority__grid" role="list">
              {content.seniority.pillars.map((pillar) => (
                <article key={pillar.title} className="seniority__pillar" role="listitem">
                  <h3 className="seniority__pillar-title">{pillar.title}</h3>
                  <p className="seniority__pillar-copy">{pillar.description}</p>
                </article>
              ))}
            </div>
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