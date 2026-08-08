import type { ProjectFactsMap } from './i18n/types';

export const projectFacts = {
  'horizon-his': { routeId: 'horizon-his', projectName: 'HORIZON HIS' },
  subiter: { routeId: 'subiter', projectName: 'SUBITER' },
  'rede-dcc': { routeId: 'rede-dcc', projectName: 'REDE DCC 1.0' },
  'dasa-canal-do-consultor': { routeId: 'dasa-canal-do-consultor', projectName: 'DASA — Canal do Consultor' },
} as const satisfies ProjectFactsMap;