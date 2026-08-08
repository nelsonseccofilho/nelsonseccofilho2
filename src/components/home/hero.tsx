import { enHome } from '@/content/i18n';
import type { HomeContent } from '@/content/i18n/types';

type HeroProps = {
  content?: HomeContent['hero'];
  accessibility?: Pick<HomeContent['accessibility'], 'hero' | 'professionalDisciplines'>;
};

export function Hero({ content = enHome.hero, accessibility = enHome.accessibility }: HeroProps = {}) {

  return (
    <section className="hero" aria-label={accessibility.hero}>
      <div className="layout-container hero__inner">
        <p className="hero__eyebrow">{content.eyebrow}</p>
        <h1 className="hero__title">{content.title}</h1>
        <p className="hero__description">{content.description}</p>
        <ul className="hero__disciplines" aria-label={accessibility.professionalDisciplines}>
          {content.disciplines.map((discipline) => (
            <li key={discipline} className="hero__discipline">
              {discipline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
