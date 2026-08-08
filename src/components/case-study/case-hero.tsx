import { CaseMetadata } from './case-metadata';
import { ThemeAwareProjectImage } from '@/components/home/theme-aware-project-image';

type ResponsiveSources = Record<number, string>;

type CaseHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  metadata: Array<{
    label: string;
    value: string;
  }>;
  image: {
    alt: string;
    width: number;
    height: number;
    light: ResponsiveSources;
    dark: ResponsiveSources;
  };
};

export function CaseHero({ eyebrow, title, description, metadata, image }: CaseHeroProps) {
  const titleId = 'case-hero-title';

  return (
    <section className="case-hero" aria-labelledby={titleId}>
      <div className="layout-container case-hero__inner">
        <div className="case-hero__media">
          <ThemeAwareProjectImage
            image={image}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 92vw, (max-width: 1599px) 88vw, 1600px"
          />
        </div>
        <div className="case-hero__content">
          <p className="case-hero__eyebrow">{eyebrow}</p>
          <h1 id={titleId} className="case-hero__title">
            {title}
          </h1>
          <p className="case-hero__description">{description}</p>
          <CaseMetadata items={metadata} />
        </div>
      </div>
    </section>
  );
}