import type { CommonContent } from '../types';

export const ptBRCommon = {
  metadata: {
    title: 'Nelson Secco — Senior Product Designer & UX Consultant',
    description: 'Senior Product Designer com background em desenvolvimento de software, também atuando como UX Consultant entre Design, Produto e Engenharia.',
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
  privacy: {
    title: 'Privacidade e experiência',
    description: 'Uso o Microsoft Clarity para entender como as pessoas navegam pelo portfólio e orientar melhorias de UX. O analytics só é ativado se você permitir.',
    declineLabel: 'Recusar',
    allowLabel: 'Permitir analytics',
    manageLabel: 'Privacidade',
  },
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
    featuredCases: 'Projetos em destaque',
    secondaryContactLinks: 'Links secundários de contato',
  },
} as const satisfies CommonContent;
