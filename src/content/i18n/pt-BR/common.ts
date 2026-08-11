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
  portfolioReturn: { accessibilityLabel: 'Navegação para o portfólio', label: 'Portfólio' },
  caseNavigation: { nextProjectLabel: 'Próximo projeto' },
  backToTop: { label: '↑ Topo', accessibilityLabel: 'Voltar ao topo' },
  routeLoading: { label: 'Carregando conteúdo…' },
  notFound: {
    code: '404',
    title: 'Não encontramos esta página.',
    description: 'O endereço pode ter mudado ou esta página pode não existir mais.',
  },
  evidenceViewer: {
    openImageLabel: 'Abrir imagem ampliada',
    closeImageLabel: 'Fechar imagem',
    enlargedImageLabel: 'Imagem ampliada',
    viewAllArtifactsLabel: 'Ver todos os artefatos',
    showLessLabel: 'Mostrar menos',
  },
  mediaPlaceholders: {
    cover: 'Capa em reconstrução',
    visual: 'Imagem em reconstrução',
    evidence: 'Evidência visual em reconstrução',
  },
  accessibility: {
    home: 'Página inicial — N3LX',
    mainNavigation: 'Navegação principal',
    caseNavigation: 'Navegação do estudo de caso',
    featuredCases: 'Cases em destaque',
    secondaryContactLinks: 'Links secundários de contato',
  },
} as const satisfies CommonContent;
