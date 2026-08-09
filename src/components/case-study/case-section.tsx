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
    <section className="py-10 md:py-16 xl:py-20" aria-labelledby={titleId} id={id}>
      <div className="layout-container grid gap-8 md:gap-10">
        {!mediaFirst ? (
          <header className="grid max-w-[60rem] gap-3">
            <h2 id={titleId} className="m-0 max-w-[24ch] text-[clamp(1.75rem,3vw,3rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[var(--color-text-primary)]">
              {title}
            </h2>
            {intro ? <p className="m-0 max-w-[58rem] text-[1.05rem] leading-[1.75] text-[var(--color-text-secondary)]">{intro}</p> : null}
          </header>
        ) : null}
        <div className="grid gap-5 md:gap-6">{children}</div>
        {mediaFirst ? (
          <header className="mt-2 grid max-w-[60rem] gap-3">
            <h2 id={titleId} className="m-0 max-w-[24ch] text-[clamp(1.75rem,3vw,3rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[var(--color-text-primary)]">
              {title}
            </h2>
            {intro ? <p className="m-0 max-w-[58rem] text-[1.05rem] leading-[1.75] text-[var(--color-text-secondary)]">{intro}</p> : null}
          </header>
        ) : null}
      </div>
    </section>
  );
}
