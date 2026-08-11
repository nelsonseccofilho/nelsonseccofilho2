import type { ReactNode } from 'react';
import { EvidenceViewer, type EvidenceViewerLabels } from '@/components/case-study/evidence-viewer';
import { ThemeAwareProjectImage } from '@/components/home/theme-aware-project-image';
import { MediaPlaceholder } from '@/components/media/media-placeholder';

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
  image?: ThemeAwareImage | StaticImage;
  placeholderLabel?: string;
  caption?: ReactNode;
  className?: string;
  scrollable?: boolean;
  sizes?: string;
  viewerLabels?: EvidenceViewerLabels;
};

export function CaseMedia({ image, placeholderLabel, caption, className, scrollable = false, sizes = '100vw', viewerLabels }: CaseMediaProps) {
  const mediaClassName = [scrollable ? 'case-media--scrollable' : '', className].filter(Boolean).join(' ');
  const figureClassName = ['case-media', mediaClassName].filter(Boolean).join(' ');

  if (placeholderLabel) {
    return (
      <figure className={figureClassName} data-placeholder-media>
        <div className="case-media__frame">
          <MediaPlaceholder label={placeholderLabel} variant="evidence" />
        </div>
        {caption ? <figcaption className="case-media__caption">{caption}</figcaption> : null}
      </figure>
    );
  }

  if (!image) return null;

  if (!('light' in image) && viewerLabels) {
    return <EvidenceViewer image={image} labels={viewerLabels} caption={caption} className={mediaClassName} />;
  }

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
