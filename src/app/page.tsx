import { Hero } from '@/components/home/hero';
import { ProjectCard } from '@/components/home/project-card';
import { ProjectGrid } from '@/components/home/project-grid';
import { SiteHeader } from '@/components/layout/site-header';

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
                description="Editorial representation of complex inspection and post-inspection workflows for enterprise systems, including AI-assisted review patterns."
                tags={['Complex Systems', 'Inspections', 'AI-assisted Workflows']}
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
                description="Interaction design for a financial choice shaped by transactional states, decision points and exception handling."
                tags={['Payments', 'Interaction Design', 'Transactional States']}
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
            </ProjectGrid>
          </div>
        </section>
      </main>
    </>
  );
}
