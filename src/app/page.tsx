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
                  src: '/assets/projects/horizon-his/cover/cover-1440.webp',
                  alt: 'Hospital information system prototype interface showing triage workflow and generated clinical data panels.',
                }}
              />
            </ProjectGrid>
          </div>
        </section>
      </main>
    </>
  );
}
