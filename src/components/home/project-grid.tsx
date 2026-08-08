import type { ReactNode } from 'react';

type ProjectGridProps = {
  children?: ReactNode;
};

export function ProjectGrid({ children }: ProjectGridProps) {
  return <ul className="project-grid">{children}</ul>;
}