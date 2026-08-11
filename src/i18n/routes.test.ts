import { describe, expect, it } from 'vitest';
import { SUPPORTED_LOCALES } from './locales';
import {
  ROUTE_IDS,
  findLocalizedRoute,
  getLocaleFromPath,
  getLocalizedPath,
  resolveEquivalentPath,
  routeMap,
} from './routes';

describe('localized route map', () => {
  it('maps the Portuguese and English home routes in both directions', () => {
    expect(resolveEquivalentPath('/', 'en')).toBe('/en');
    expect(resolveEquivalentPath('/en', 'pt-BR')).toBe('/');
  });

  it.each([
    ['building-portfolio', '/construindo-este-portfolio', '/en/building-this-portfolio'],
    ['privacy', '/privacidade', '/en/privacy'],
    ['horizon-his', '/projetos/horizon-his', '/en/projects/horizon-his'],
    ['subiter', '/projetos/subiter', '/en/projects/subiter'],
    ['rede-dcc', '/projetos/rede-dcc', '/en/projects/rede-dcc'],
    ['dasa-canal-do-consultor', '/projetos/dasa-canal-do-consultor', '/en/projects/dasa-canal-do-consultor'],
  ] as const)('maps %s between its equivalent Portuguese and English routes', (routeId, portuguesePath, englishPath) => {
    expect(getLocalizedPath(routeId, 'pt-BR')).toBe(portuguesePath);
    expect(getLocalizedPath(routeId, 'en')).toBe(englishPath);
    expect(resolveEquivalentPath(portuguesePath, 'en')).toBe(englishPath);
    expect(resolveEquivalentPath(englishPath, 'pt-BR')).toBe(portuguesePath);
  });

  it('identifies locales only from supported final paths', () => {
    expect(getLocaleFromPath('/projetos/subiter')).toBe('pt-BR');
    expect(getLocaleFromPath('/en/projects/subiter')).toBe('en');
    expect(findLocalizedRoute('/projects/subiter')).toBeNull();
  });

  it('does not expose a /pt route', () => {
    const paths: string[] = ROUTE_IDS.flatMap((routeId) => SUPPORTED_LOCALES.map((locale) => routeMap[routeId][locale]));

    expect(paths.every((path) => path !== '/pt' && !path.startsWith('/pt/'))).toBe(true);
  });

  it('does not expose artificial project collection index routes', () => {
    const paths = Object.values(routeMap).flatMap((route) => Object.values(route));

    expect(paths).not.toContain('/projetos');
    expect(paths).not.toContain('/en/projects');
    expect(findLocalizedRoute('/projetos')).toBeNull();
    expect(findLocalizedRoute('/en/projects')).toBeNull();
  });

  it('has complete Portuguese and English parity for every route ID', () => {
    for (const routeId of ROUTE_IDS) {
      expect(Object.keys(routeMap[routeId]).sort()).toEqual([...SUPPORTED_LOCALES].sort());
      expect(routeMap[routeId]['pt-BR']).toBeTruthy();
      expect(routeMap[routeId].en).toBeTruthy();
    }
  });
});
