import Link from 'next/link';
import { ThemeAwareProjectImage } from './theme-aware-project-image';

type ResponsiveSources = Record<number, string>;

type ProjectCardImage = {
  alt: string;
  width: number;
  height: number;
  light: ResponsiveSources;
  dark: ResponsiveSources;
};

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: ProjectCardImage;
  href?: string;
};

export function ProjectCard({ id, title, description, tags, image, href }: ProjectCardProps) {
  const titleId = `${id}-title`;

  return (
    <li className="project-grid__item">
      {href ? (
        <Link href={href} className="project-card__link">
          <article className="project-card" aria-labelledby={titleId}>
            <div className="project-card__media">
              <ThemeAwareProjectImage
                image={image}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 92vw, (max-width: 1599px) 82vw, 1440px"
              />
            </div>
            <div className="project-card__content">
              <h3 id={titleId} className="project-card__title">
                {title}
              </h3>
              <p className="project-card__description">{description}</p>
              <ul className="project-card__tags" aria-label={`${title} tags`}>
                {tags.map((tag) => (
                  <li key={tag} className="project-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Link>
      ) : (
        <article className="project-card" aria-labelledby={titleId}>
          <div className="project-card__media">
            <ThemeAwareProjectImage
              image={image}
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 92vw, (max-width: 1599px) 82vw, 1440px"
            />
          </div>
          <div className="project-card__content">
            <h3 id={titleId} className="project-card__title">
              {title}
            </h3>
            <p className="project-card__description">{description}</p>
            <ul className="project-card__tags" aria-label={`${title} tags`}>
              {tags.map((tag) => (
                <li key={tag} className="project-card__tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
    </li>
  );
}