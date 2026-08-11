import type { Metadata } from 'next';
import { getProjectMetadata, ProjectPage, projectRouteIds } from '@/components/case-study/project-page';

type ProjectRouteProps = {
  params: Promise<{ project: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectRouteIds.map((project) => ({ project }));
}

export async function generateMetadata({ params }: ProjectRouteProps): Promise<Metadata> {
  return getProjectMetadata((await params).project, 'pt-BR');
}

export default async function PortugueseProjectPage({ params }: ProjectRouteProps) {
  return <ProjectPage locale="pt-BR" projectId={(await params).project} />;
}
