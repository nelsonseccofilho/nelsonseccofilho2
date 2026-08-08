import { describe, expect, it } from 'vitest';
import { dasaCanalDoConsultorCaseContent, dasaCanalDoConsultorSharedFacts } from '@/content/i18n/projects/dasa-canal-do-consultor';
import { projectFacts } from '@/content/project-facts';
import { horizonHisCaseContent, horizonHisSharedFacts } from '@/content/i18n/projects/horizon-his';
import { redeDccCaseContent, redeDccSharedFacts } from '@/content/i18n/projects/rede-dcc';
import { subiterCaseContent, subiterSharedFacts } from '@/content/i18n/projects/subiter';
import { commonContent, homeContent } from '.';

const expectedPortugueseAboutParagraphs = [
  'Sou Senior Product Designer com mais de 12 anos de experiência na construção de produtos digitais e mais de 8 anos dedicados a UX e Product Design.',
  'Atuo de forma hands-on do Discovery à entrega, transformando problemas complexos, regras de negócio e necessidades de usuários em experiências claras, consistentes e viáveis — conectando Design, Produto e Engenharia.',
  'Ao longo da minha trajetória, trabalhei em produtos para empresas como Embraer, Santander, Bradesco, DASA, REDE, ConnectCar e Salux, além de startups como TerraMagna e NOALVO, posteriormente reconhecidas entre as 100 Startups to Watch.',
  'Meu background em Front-end e o uso de IA e automação complementam minha prática de Design, permitindo explorar, prototipar e validar soluções com maior velocidade sem abrir mão do pensamento crítico e da qualidade da experiência.',
] as const;

const expectedEnglishAboutParagraphs = [
  'I’m a Senior Product Designer with over 12 years of experience building digital products and more than 8 years focused on UX and Product Design.',
  'I work hands-on from Discovery to delivery, turning complex problems, business rules, and user needs into clear, consistent, and feasible experiences — connecting Design, Product, and Engineering.',
  'Throughout my career, I’ve worked on products for companies such as Embraer, Santander, Bradesco, DASA, REDE, ConnectCar, and Salux, as well as startups including TerraMagna and NOALVO, later recognized among Brazil’s 100 Startups to Watch.',
  'My Front-end background and use of AI and automation complement my Design practice, helping me explore, prototype, and validate solutions faster without compromising critical thinking or experience quality.',
] as const;

function getStructure(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(getStructure);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, child]) => [key, getStructure(child)]),
    );
  }

  return typeof value;
}

function getStringValues(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(getStringValues);
  if (value && typeof value === 'object') return Object.values(value).flatMap(getStringValues);
  return [];
}

describe('Home and shared localized content', () => {
  it('keeps complete structural parity between English and Portuguese', () => {
    expect(getStructure(homeContent.en)).toEqual(getStructure(homeContent['pt-BR']));
    expect(getStructure(commonContent.en)).toEqual(getStructure(commonContent['pt-BR']));
  });

  it('contains complete non-empty Portuguese Home and shared copy', () => {
    expect(getStringValues(homeContent['pt-BR']).every((value) => value.trim().length > 0)).toBe(true);
    expect(getStringValues(commonContent['pt-BR']).every((value) => value.trim().length > 0)).toBe(true);
  });

  it('keeps approved profile paragraphs in order for both locales', () => {
    expect(homeContent['pt-BR'].about.paragraphs).toEqual(expectedPortugueseAboutParagraphs);
    expect(homeContent.en.about.paragraphs).toEqual(expectedEnglishAboutParagraphs);
    expect(new Set(homeContent['pt-BR'].about.paragraphs).size).toBe(homeContent['pt-BR'].about.paragraphs.length);
    expect(new Set(homeContent.en.about.paragraphs).size).toBe(homeContent.en.about.paragraphs.length);
  });

  it('keeps project factual identifiers equivalent across locales and shared facts', () => {
    const englishRouteIds = homeContent.en.featuredCases.projects.map((project) => project.routeId);
    const portugueseRouteIds = homeContent['pt-BR'].featuredCases.projects.map((project) => project.routeId);

    expect(portugueseRouteIds).toEqual(englishRouteIds);
    expect(englishRouteIds).toEqual(Object.keys(projectFacts));
    expect(englishRouteIds.map((routeId) => projectFacts[routeId].projectName)).toEqual([
      'HORIZON HIS',
      'SUBITER',
      'REDE DCC 1.0',
      'DASA — Canal do Consultor',
    ]);
  });

  it('keeps Horizon HIS locale structure equivalent and shared factual identifiers immutable', () => {
    expect(getStructure(horizonHisCaseContent.en)).toEqual(getStructure(horizonHisCaseContent['pt-BR']));

    expect(horizonHisSharedFacts.routeId).toBe('horizon-his');
    expect(horizonHisSharedFacts.projectName).toBe('HORIZON HIS');
    expect(horizonHisSharedFacts.companyName).toBe('SALUX');
    expect(horizonHisSharedFacts.year).toBe('2025');
    expect(horizonHisSharedFacts.eventName).toBe('Hospitalar 2025');
    expect(horizonHisSharedFacts.establishedPlatforms).toEqual(['MV', 'Tasy']);

    expect(horizonHisCaseContent.en.hero.metadata.find((item) => item.label === 'Year')?.value).toBe(horizonHisSharedFacts.year);
    expect(horizonHisCaseContent['pt-BR'].hero.metadata.find((item) => item.label === 'Ano')?.value).toBe(horizonHisSharedFacts.year);
    expect(horizonHisCaseContent.en.hero.eyebrow).toBe(horizonHisSharedFacts.projectName);
    expect(horizonHisCaseContent['pt-BR'].hero.eyebrow).toBe(horizonHisSharedFacts.projectName);
  });

  it('keeps SUBITER locale structure equivalent and shared factual identifiers immutable', () => {
    expect(getStructure(subiterCaseContent.en)).toEqual(getStructure(subiterCaseContent['pt-BR']));

    expect(subiterSharedFacts.routeId).toBe('subiter');
    expect(subiterSharedFacts.projectName).toBe('SUBITER');
    expect(subiterSharedFacts.companyName).toBe('Subiter');
    expect(subiterSharedFacts.period).toBe('2025–2026');
    expect(subiterSharedFacts.productName).toBe('Subiter Web Portal');
    expect(subiterSharedFacts.aiAssistantName).toBe('Marina');
    expect(subiterSharedFacts.operationLocation).toBe('Ecuador');
    expect(subiterSharedFacts.operationAssetName).toBe('National Geographic Delfina');
    expect(subiterSharedFacts.operationRegion).toBe('Galápagos');
    expect(subiterSharedFacts.articleUrl).toBe('https://www.subiter.com/post/portal-web-da-subiter-rastreabilidade-e-intelig%C3%AAncia-na-ind%C3%BAstria-4-0');
    expect(subiterSharedFacts.delfinaUrl).toBe('https://www.expeditions.com/ships/national-geographic-delfina');

    expect(subiterCaseContent.en.hero.eyebrow).toBe(subiterSharedFacts.projectName);
    expect(subiterCaseContent['pt-BR'].hero.eyebrow).toBe(subiterSharedFacts.projectName);
    expect(subiterCaseContent.en.hero.metadata.find((item) => item.label === 'Period')?.value).toBe(subiterSharedFacts.period);
    expect(subiterCaseContent['pt-BR'].hero.metadata.find((item) => item.label === 'Período')?.value).toBe(subiterSharedFacts.period);
  });

  it('keeps REDE DCC locale structure equivalent and shared factual identifiers immutable', () => {
    expect(getStructure(redeDccCaseContent.en)).toEqual(getStructure(redeDccCaseContent['pt-BR']));

    expect(redeDccSharedFacts.routeId).toBe('rede-dcc');
    expect(redeDccSharedFacts.projectName).toBe('REDE DCC 1.0');
    expect(redeDccSharedFacts.clientName).toBe('REDE');
    expect(redeDccSharedFacts.companyName).toBe('Môre Talent Tech');
    expect(redeDccSharedFacts.domain).toBe('Payments / Dynamic Currency Conversion');
    expect(redeDccSharedFacts.year).toBe('2023');
    expect(redeDccSharedFacts.engagement).toBe('8 months');
    expect(redeDccSharedFacts.languages).toBe('Portuguese / English');
    expect(redeDccSharedFacts.deliverable).toBe('End-to-end transaction journey');
    expect(redeDccSharedFacts.status).toBe('Implemented in REDE\'s product');

    expect(redeDccCaseContent.en.hero.eyebrow).toBe(redeDccSharedFacts.projectName);
    expect(redeDccCaseContent['pt-BR'].hero.eyebrow).toBe(redeDccSharedFacts.projectName);
    expect(redeDccCaseContent.en.hero.metadata.find((item) => item.label === 'Year')?.value).toBe(redeDccSharedFacts.year);
    expect(redeDccCaseContent['pt-BR'].hero.metadata.find((item) => item.label === 'Ano')?.value).toBe(redeDccSharedFacts.year);
  });

  it('keeps DASA locale structure equivalent and preserves research numbers exactly', () => {
    expect(getStructure(dasaCanalDoConsultorCaseContent.en)).toEqual(getStructure(dasaCanalDoConsultorCaseContent['pt-BR']));

    expect(dasaCanalDoConsultorSharedFacts.routeId).toBe('dasa-canal-do-consultor');
    expect(dasaCanalDoConsultorSharedFacts.projectName).toBe('DASA — Canal do Consultor');
    expect(dasaCanalDoConsultorSharedFacts.clientName).toBe('DASA');
    expect(dasaCanalDoConsultorSharedFacts.companyName).toBe('Môre Talent Tech');
    expect(dasaCanalDoConsultorSharedFacts.year).toBe('2022');
    expect(dasaCanalDoConsultorSharedFacts.scope).toBe('Canal do Consultor / MV Soul / Feegow / Tasy');

    expect(dasaCanalDoConsultorSharedFacts.researchFacts.participantsInterviewed).toBe(37);
    expect(dasaCanalDoConsultorSharedFacts.researchFacts.nacsVisitedCount).toBe(3);
    expect(dasaCanalDoConsultorSharedFacts.researchFacts.nacsVisited).toBe('RJ, SP and Brasília');
    expect(dasaCanalDoConsultorSharedFacts.researchFacts.systemsAnalyzedCount).toBe(4);
    expect(dasaCanalDoConsultorSharedFacts.researchFacts.systemsAnalyzedList).toBe('Canal do Consultor, MV Soul, Feegow and Tasy');
    expect(dasaCanalDoConsultorSharedFacts.researchFacts.researchQuotesMapped).toBe(290);
    expect(dasaCanalDoConsultorSharedFacts.researchFacts.businessRulesAndFeaturesMapped).toBe(57);

    expect(dasaCanalDoConsultorCaseContent.en.hero.eyebrow).toBe(dasaCanalDoConsultorSharedFacts.projectName);
    expect(dasaCanalDoConsultorCaseContent['pt-BR'].hero.eyebrow).toBe(dasaCanalDoConsultorSharedFacts.projectName);
    expect(dasaCanalDoConsultorCaseContent.en.hero.metadata.find((item) => item.label === 'Year')?.value).toBe(dasaCanalDoConsultorSharedFacts.year);
    expect(dasaCanalDoConsultorCaseContent['pt-BR'].hero.metadata.find((item) => item.label === 'Ano')?.value).toBe(dasaCanalDoConsultorSharedFacts.year);
  });
});