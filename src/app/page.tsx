import { Hero } from '@/components/home/hero';
import { ProjectCard } from '@/components/home/project-card';
import { ProjectGrid } from '@/components/home/project-grid';
import { ThemeAwareProjectImage } from '@/components/home/theme-aware-project-image';
import { SiteHeader } from '@/components/layout/site-header';
import { WHATSAPP_CONTACT_URL } from '@/content/contact';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <section className="featured-cases" aria-labelledby="featured-cases-title">
          <div className="layout-container featured-cases__inner">
            <h2 id="featured-cases-title" className="featured-cases__heading">
              Featured cases
            </h2>
            <ProjectGrid>
              <ProjectCard
                id="horizon-his"
                title="HORIZON HIS"
                description="High-fidelity navigable prototype for a complex hospital information system, validated with clinical and domain stakeholders and presented at Hospitalar 2025."
                tags={['Healthtech', 'UX Leadership', 'Product Strategy']}
                href="/projects/horizon-his"
                image={{
                  alt: 'Hospital information system prototype interface showing triage workflow and generated clinical data panels.',
                  width: 1920,
                  height: 1080,
                  light: {
                    640: '/assets/projects/horizon-his/cover/light/cover-640.webp',
                    1024: '/assets/projects/horizon-his/cover/light/cover-1024.webp',
                    1440: '/assets/projects/horizon-his/cover/light/cover-1440.webp',
                    1920: '/assets/projects/horizon-his/cover/light/cover-1920.webp',
                  },
                  dark: {
                    640: '/assets/projects/horizon-his/cover/dark/cover-640.webp',
                    1024: '/assets/projects/horizon-his/cover/dark/cover-1024.webp',
                    1440: '/assets/projects/horizon-his/cover/dark/cover-1440.webp',
                    1920: '/assets/projects/horizon-his/cover/dark/cover-1920.webp',
                  },
                }}
              />
              <ProjectCard
                id="subiter"
                title="SUBITER"
                description="Product Design leadership for a production inspection platform connecting operational workflows, traceability and AI-assisted review."
                tags={['Complex Systems', 'Inspections', 'AI-assisted Workflows']}
                href="/projects/subiter"
                image={{
                  alt: 'Editorial interface composition with inspection workflow grid, trend line and review summary panels.',
                  width: 1920,
                  height: 1080,
                  light: {
                    640: '/assets/projects/subiter/cover/light/cover-640.webp',
                    1024: '/assets/projects/subiter/cover/light/cover-1024.webp',
                    1440: '/assets/projects/subiter/cover/light/cover-1440.webp',
                    1920: '/assets/projects/subiter/cover/light/cover-1920.webp',
                  },
                  dark: {
                    640: '/assets/projects/subiter/cover/dark/cover-640.webp',
                    1024: '/assets/projects/subiter/cover/dark/cover-1024.webp',
                    1440: '/assets/projects/subiter/cover/dark/cover-1440.webp',
                    1920: '/assets/projects/subiter/cover/dark/cover-1920.webp',
                  },
                }}
              />
              <ProjectCard
                id="rede-dcc"
                title="REDE DCC 1.0"
                description="Interaction design for a financial choice within a payment journey spanning transactional states, decision points and exception handling."
                tags={['Payments', 'Interaction Design', 'Transactional States']}
                href="/projects/rede-dcc"
                image={{
                  alt: 'Payment interface composition showing transaction flow states and confirmation screens.',
                  width: 1920,
                  height: 1080,
                  light: {
                    640: '/assets/projects/rede-dcc/cover/light/cover-640.webp',
                    1024: '/assets/projects/rede-dcc/cover/light/cover-1024.webp',
                    1440: '/assets/projects/rede-dcc/cover/light/cover-1440.webp',
                    1920: '/assets/projects/rede-dcc/cover/light/cover-1920.webp',
                  },
                  dark: {
                    640: '/assets/projects/rede-dcc/cover/dark/cover-640.webp',
                    1024: '/assets/projects/rede-dcc/cover/dark/cover-1024.webp',
                    1440: '/assets/projects/rede-dcc/cover/dark/cover-1440.webp',
                    1920: '/assets/projects/rede-dcc/cover/dark/cover-1920.webp',
                  },
                }}
              />
              <ProjectCard
                id="dasa"
                title="DASA — Canal do Consultor"
                description="Discovery-led product design translating research into business rules for a complex consultant scheduling journey and product decision structure."
                tags={['Research & Discovery', 'Product Design', 'Business Rules']}
                href="/projects/dasa-canal-do-consultor"
                image={{
                  alt: 'Editorial representation of a consultation journey translating research into decision rules and product strategy.',
                  width: 1920,
                  height: 1080,
                  light: {
                    640: '/assets/projects/dasa-canal-do-consultor/cover/light/cover-640.webp',
                    1024: '/assets/projects/dasa-canal-do-consultor/cover/light/cover-1024.webp',
                    1440: '/assets/projects/dasa-canal-do-consultor/cover/light/cover-1440.webp',
                    1920: '/assets/projects/dasa-canal-do-consultor/cover/light/cover-1920.webp',
                  },
                  dark: {
                    640: '/assets/projects/dasa-canal-do-consultor/cover/dark/cover-640.webp',
                    1024: '/assets/projects/dasa-canal-do-consultor/cover/dark/cover-1024.webp',
                    1440: '/assets/projects/dasa-canal-do-consultor/cover/dark/cover-1440.webp',
                    1920: '/assets/projects/dasa-canal-do-consultor/cover/dark/cover-1920.webp',
                  },
                }}
              />
            </ProjectGrid>
          </div>
        </section>
        <section className="selected-work" aria-labelledby="selected-work-title">
          <div className="layout-container selected-work__inner">
            <div className="selected-work__header">
              <p className="selected-work__eyebrow">Selected work</p>
              <h2 id="selected-work-title" className="selected-work__heading">
                Design systems for mobility
              </h2>
            </div>
            <article className="selected-work__card" aria-labelledby="selected-work-card-title">
              <div className="selected-work__media">
                <ThemeAwareProjectImage
                  image={{
                    alt: 'Editorial representation of responsive component studies and design-system references for ConnectCar / Freeflow.',
                    width: 1920,
                    height: 1080,
                    light: {
                      640: '/assets/projects/connectcar-freeflow/cover/light/cover-640.webp',
                      1024: '/assets/projects/connectcar-freeflow/cover/light/cover-1024.webp',
                      1440: '/assets/projects/connectcar-freeflow/cover/light/cover-1440.webp',
                      1920: '/assets/projects/connectcar-freeflow/cover/light/cover-1920.webp',
                    },
                    dark: {
                      640: '/assets/projects/connectcar-freeflow/cover/dark/cover-640.webp',
                      1024: '/assets/projects/connectcar-freeflow/cover/dark/cover-1024.webp',
                      1440: '/assets/projects/connectcar-freeflow/cover/dark/cover-1440.webp',
                      1920: '/assets/projects/connectcar-freeflow/cover/dark/cover-1920.webp',
                    },
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 92vw, 960px"
                />
              </div>
              <div className="selected-work__content">
                <h3 id="selected-work-card-title" className="selected-work__title">
                  ConnectCar / Freeflow
                </h3>
                <p className="selected-work__description">
                  Responsive UI and design-system studies for ConnectCar / Freeflow. The cover is an editorial representation.
                </p>
                <ul className="selected-work__tags" aria-label="ConnectCar / Freeflow tags">
                  <li className="selected-work__tag">Mobility</li>
                  <li className="selected-work__tag">Responsive UI</li>
                  <li className="selected-work__tag">Design Systems</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section className="seniority" aria-labelledby="seniority-title" aria-label="Seniority and value proposition">
          <div className="layout-container seniority__inner">
            <div className="seniority__header">
              <p className="seniority__eyebrow">How I work</p>
              <h2 id="seniority-title" className="seniority__heading">
                Strategy through delivery
              </h2>
            </div>
            <div className="seniority__grid" role="list">
              <article className="seniority__pillar" role="listitem">
                <h3 className="seniority__pillar-title">Strategy</h3>
                <p className="seniority__pillar-copy">
                  Aligning product intent, service context and user needs to guide product and interface decisions.
                </p>
              </article>
              <article className="seniority__pillar" role="listitem">
                <h3 className="seniority__pillar-title">Complex Systems</h3>
                <p className="seniority__pillar-copy">
                  Translating intricate workflows into coherent, legible product structures.
                </p>
              </article>
              <article className="seniority__pillar" role="listitem">
                <h3 className="seniority__pillar-title">Delivery</h3>
                <p className="seniority__pillar-copy">
                  Turning concepts into delivery-ready decisions with clear handoff and implementation support.
                </p>
              </article>
              <article className="seniority__pillar" role="listitem">
                <h3 className="seniority__pillar-title">Discovery</h3>
                <p className="seniority__pillar-copy">
                  Using research, synthesis and critique to reduce ambiguity and sharpen product choices.
                </p>
              </article>
              <article className="seniority__pillar" role="listitem">
                <h3 className="seniority__pillar-title">Design Systems</h3>
                <p className="seniority__pillar-copy">
                  Building reusable patterns that scale across teams, touchpoints and future product change.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="about" aria-labelledby="about-title" aria-label="About">
          <div className="layout-container about__inner">
            <div className="about__content">
              <h2 id="about-title" className="about__heading">
                About
              </h2>
              <p className="about__copy">
                I’m a senior product designer and UX lead with hands-on experience across healthtech, payments and industrial operations.
              </p>
              <p className="about__copy">
                I work from discovery and product strategy through UX/UI, prototyping, design systems and implementation support.
              </p>
            </div>
          </div>
        </section>
        <section className="contact" aria-labelledby="contact-title" aria-label="Contact">
          <div className="layout-container contact__inner">
            <div className="contact__content">
              <p className="contact__eyebrow">Contact</p>
              <h2 id="contact-title" className="contact__heading">
                Let’s build something meaningful.
              </h2>
              <p className="contact__copy">
                Have a complex product challenge or an opportunity to collaborate? Let’s talk.
              </p>
              <div className="contact__actions">
                <a
                  className="contact__primary-link"
                  href={WHATSAPP_CONTACT_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Talk to me on WhatsApp"
                >
                  Talk to me on WhatsApp
                </a>
                <div className="contact__secondary-links" aria-label="Secondary contact links">
                  <a className="contact__secondary-link" href="mailto:nelsonseccofilho@gmail.com">
                    nelsonseccofilho@gmail.com
                  </a>
                  <a className="contact__secondary-link" href="https://www.linkedin.com/in/nelsonseccofilho/" target="_blank" rel="noreferrer">
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
