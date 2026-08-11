import { SUPPORTED_LOCALES, type Locale } from './locales';

export const ROUTE_IDS = ['home', 'building-portfolio', 'horizon-his', 'subiter', 'rede-dcc', 'dasa-canal-do-consultor'] as const;

export type RouteId = (typeof ROUTE_IDS)[number];
export type LocalizedPath = '/' | `/${string}`;
export type LocalizedRoute = Readonly<Record<Locale, LocalizedPath>>;
export type RouteMap = Readonly<Record<RouteId, LocalizedRoute>>;

export const routeMap = {
  home: {
    'pt-BR': '/',
    en: '/en',
  },
  'building-portfolio': {
    'pt-BR': '/construindo-este-portfolio',
    en: '/en/building-this-portfolio',
  },
  'horizon-his': {
    'pt-BR': '/projetos/horizon-his',
    en: '/en/projects/horizon-his',
  },
  subiter: {
    'pt-BR': '/projetos/subiter',
    en: '/en/projects/subiter',
  },
  'rede-dcc': {
    'pt-BR': '/projetos/rede-dcc',
    en: '/en/projects/rede-dcc',
  },
  'dasa-canal-do-consultor': {
    'pt-BR': '/projetos/dasa-canal-do-consultor',
    en: '/en/projects/dasa-canal-do-consultor',
  },
} as const satisfies RouteMap;

export function getLocalizedPath(routeId: RouteId, locale: Locale): LocalizedPath {
  return routeMap[routeId][locale];
}

export function findLocalizedRoute(pathname: string): { routeId: RouteId; locale: Locale } | null {
  for (const routeId of ROUTE_IDS) {
    for (const locale of SUPPORTED_LOCALES) {
      if (routeMap[routeId][locale] === pathname) {
        return { routeId, locale };
      }
    }
  }

  return null;
}

export function getLocaleFromPath(pathname: string): Locale | null {
  return findLocalizedRoute(pathname)?.locale ?? null;
}

export function getRouteIdFromPath(pathname: string): RouteId | null {
  return findLocalizedRoute(pathname)?.routeId ?? null;
}

export function resolveEquivalentPath(pathname: string, targetLocale: Locale): LocalizedPath | null {
  const route = findLocalizedRoute(pathname);

  return route ? getLocalizedPath(route.routeId, targetLocale) : null;
}
