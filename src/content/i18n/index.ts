import type { CommonContent, DictionaryByLocale, HomeContent } from './types';
import { enCommon } from './en/common';
import { enHome } from './en/home';
import { ptBRCommon } from './pt-BR/common';
import { ptBRHome } from './pt-BR/home';

export const commonContent = { 'pt-BR': ptBRCommon, en: enCommon } as const satisfies DictionaryByLocale<CommonContent>;
export const homeContent = { 'pt-BR': ptBRHome, en: enHome } as const satisfies DictionaryByLocale<HomeContent>;

export { enCommon, enHome, ptBRCommon, ptBRHome };