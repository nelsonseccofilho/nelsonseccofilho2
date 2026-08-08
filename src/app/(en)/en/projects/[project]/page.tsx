import type { Metadata } from 'next';
import { getProjectMetadata, ProjectPage, projectRouteIds } from '@/components/case-study/project-page';

type ProjectRouteProps = {
  params: Promise<{ project: string }>;
};

export function generateStaticParams() {
  return projectRouteIds.map((project) => ({ project }));
}

export async function generateMetadata({ params }: ProjectRouteProps): Promise<Metadata> {
  return getProjectMetadata((await params).project);
}

export default async function EnglishProjectPage({ params }: ProjectRouteProps) {
  return <ProjectPage locale="en" projectId={(await params).project} />;
}