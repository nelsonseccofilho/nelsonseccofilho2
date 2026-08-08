import type { ProjectRouteId } from './i18n/types';

type ResponsiveSources = Readonly<Record<number, string>>;

export type HomeProjectImage = {
  width: number;
  height: number;
  light: ResponsiveSources;
  dark: ResponsiveSources;
};

function createCover(projectSlug: string): HomeProjectImage {
  const basePath = `/assets/projects/${projectSlug}/cover`;

  return {
    width: 1920,
    height: 1080,
    light: {
      640: `${basePath}/light/cover-640.webp`,
      1024: `${basePath}/light/cover-1024.webp`,
      1440: `${basePath}/light/cover-1440.webp`,
      1920: `${basePath}/light/cover-1920.webp`,
    },
    dark: {
      640: `${basePath}/dark/cover-640.webp`,
      1024: `${basePath}/dark/cover-1024.webp`,
      1440: `${basePath}/dark/cover-1440.webp`,
      1920: `${basePath}/dark/cover-1920.webp`,
    },
  };
}

export const homeProjectImages: Readonly<Record<ProjectRouteId, HomeProjectImage>> = {
  'horizon-his': createCover('horizon-his'),
  subiter: createCover('subiter'),
  'rede-dcc': createCover('rede-dcc'),
  'dasa-canal-do-consultor': createCover('dasa-canal-do-consultor'),
};

export const selectedWork = {
  projectName: 'ConnectCar / Freeflow',
  image: createCover('connectcar-freeflow'),
} as const;