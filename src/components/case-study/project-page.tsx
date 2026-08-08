import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DasaCanalDoConsultorPage, { metadata as dasaMetadata } from './projects/dasa-canal-do-consultor/page';
import HorizonHisPage, { metadata as horizonMetadata } from './projects/horizon-his/page';
import RedeDccPage, { metadata as redeDccMetadata } from './projects/rede-dcc/page';
import SubiterPage, { metadata as subiterMetadata } from './projects/subiter/page';
import { projectFacts } from '@/content/project-facts';
import type { Locale } from '@/i18n/locales';
import type { ProjectRouteId } from '@/content/i18n/types';

type ProjectComponent = (props: { locale?: Locale }) => React.ReactNode;

const projectPages: Readonly<Record<ProjectRouteId, { component: ProjectComponent; metadata: Metadata }>> = {
  'horizon-his': { component: HorizonHisPage, metadata: horizonMetadata },
  subiter: { component: SubiterPage, metadata: subiterMetadata },
  'rede-dcc': { component: RedeDccPage, metadata: redeDccMetadata },
  'dasa-canal-do-consultor': { component: DasaCanalDoConsultorPage, metadata: dasaMetadata },
};

export const projectRouteIds = Object.keys(projectFacts) as ProjectRouteId[];

export function isProjectRouteId(value: string): value is ProjectRouteId {
  return Object.hasOwn(projectPages, value);
}

export function getProjectMetadata(projectId: string): Metadata {
  if (!isProjectRouteId(projectId)) notFound();
  return projectPages[projectId].metadata;
}

export function ProjectPage({ locale, projectId }: { locale: Locale; projectId: string }) {
  if (!isProjectRouteId(projectId)) notFound();

  const Page = projectPages[projectId].component;
  return <Page locale={locale} />;
}