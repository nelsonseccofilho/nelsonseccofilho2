import { Hero } from '@/components/home/hero';
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
            <ProjectGrid />
          </div>
        </section>
      </main>
    </>
  );
}
