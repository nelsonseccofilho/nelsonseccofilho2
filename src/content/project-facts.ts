import type { ProjectFactsMap } from './i18n/types';

export const projectFacts = {
  'horizon-his': { routeId: 'horizon-his', projectName: 'HORIZON HIS' },
  subiter: { routeId: 'subiter', projectName: 'SUBITER' },
  'rede-dcc': { routeId: 'rede-dcc', projectName: 'REDE DCC 1.0' },
  'dasa-canal-do-consultor': { routeId: 'dasa-canal-do-consultor', projectName: 'DASA — Canal do Consultor' },
  'ai-assisted-design-engineering': {
    routeId: 'ai-assisted-design-engineering',
    projectName: 'AI-Assisted Design Engineering Operating System',
    externalUrls: {
      repository: 'https://github.com/nelsonseccofilho/ai-assisted-design-engineering-operating-system',
      commit: 'https://github.com/nelsonseccofilho/ai-assisted-design-engineering-operating-system/commit/2910154799ed28416475a359a9ea536599f38451',
    },
  },
} as const satisfies ProjectFactsMap;