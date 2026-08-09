import type { ReactNode } from 'react';

type ProjectGridProps = {
  children?: ReactNode;
};

export function ProjectGrid({ children }: ProjectGridProps) {
  return <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 2xl:grid-cols-12 2xl:gap-8">{children}</ul>;
}
