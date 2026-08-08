import type { CommonContent } from '../types';

export const ptBRCommon = {
  metadata: {
    title: 'N3LX | Senior Product Designer | Estratégia de UX | Product Discovery | Design Systems | Product Design assistido por IA',
    description: 'Senior Product Designer e UX Lead especializado em produtos digitais, sistemas complexos, estratégia e experiências orientadas por tecnologia.',
  },
  header: { contactLabel: 'Vamos conversar' },
  themeToggle: {
    pendingLabel: 'Alternar tema',
    activateLightLabel: 'Ativar tema claro',
    activateDarkLabel: 'Ativar tema escuro',
  },
  languageSwitcher: { label: 'Idioma', portugueseLabel: 'Português', englishLabel: 'Inglês' },
  caseNavigation: { backLabel: '← Voltar aos projetos' },
  accessibility: {
    home: 'Página inicial — N3LX',
    mainNavigation: 'Navegação principal',
    caseNavigation: 'Navegação do estudo de caso',
    featuredCases: 'Cases em destaque',
    secondaryContactLinks: 'Links secundários de contato',
  },
} as const satisfies CommonContent;