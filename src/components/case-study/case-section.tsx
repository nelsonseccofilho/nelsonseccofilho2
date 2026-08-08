import type { ReactNode } from 'react';

type CaseSectionProps = {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  mediaFirst?: boolean;
};

export function CaseSection({ id, title, intro, children, mediaFirst = false }: CaseSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section className="case-section" aria-labelledby={titleId} id={id}>
      <div className="layout-container case-section__inner">
        {!mediaFirst ? (
          <header className="case-section__header">
            <h2 id={titleId} className="case-section__title">
              {title}
            </h2>
            {intro ? <p className="case-section__copy">{intro}</p> : null}
          </header>
        ) : null}
        <div className="case-section__body">{children}</div>
        {mediaFirst ? (
          <header className="case-section__header case-section__header--after-media">
            <h2 id={titleId} className="case-section__title">
              {title}
            </h2>
            {intro ? <p className="case-section__copy">{intro}</p> : null}
          </header>
        ) : null}
      </div>
    </section>
  );
}