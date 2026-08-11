import { LocalizedNotFound } from '@/components/layout/localized-not-found';
import { ptBRCommon } from '@/content/i18n';

export default function PortugueseNotFound() {
  return <LocalizedNotFound content={ptBRCommon} locale="pt-BR" />;
}
