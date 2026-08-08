import type { ReactNode } from 'react';
import { ThemeAwareProjectImage } from '@/components/home/theme-aware-project-image';

type ResponsiveSources = Record<number, string>;

type ThemeAwareImage = {
  alt: string;
  width: number;
  height: number;
  light: ResponsiveSources;
  dark: ResponsiveSources;
};

type StaticImage = {
  alt: string;
  src: string;
};

type CaseMediaProps = {
  image: ThemeAwareImage | StaticImage;
  caption?: ReactNode;
  className?: string;
  scrollable?: boolean;
  sizes?: string;
};

export function CaseMedia({ image, caption, className, scrollable = false, sizes = '100vw' }: CaseMediaProps) {
  const figureClassName = ['case-media', scrollable ? 'case-media--scrollable' : '', className].filter(Boolean).join(' ');

  return (
    <figure className={figureClassName}>
      <div className="case-media__frame">
        {'light' in image ? (
          <ThemeAwareProjectImage image={image} sizes={sizes} />
        ) : (
          // Native images are used for case evidence to keep the section lightweight and readable.
          // eslint-disable-next-line @next/next/no-img-element
          <img className="case-media__image" src={image.src} alt={image.alt} loading="lazy" />
        )}
      </div>
      {caption ? <figcaption className="case-media__caption">{caption}</figcaption> : null}
    </figure>
  );
}