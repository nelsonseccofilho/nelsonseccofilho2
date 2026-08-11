import { LocalizedNotFound } from '@/components/layout/localized-not-found';
import { enCommon } from '@/content/i18n';

export default function EnglishNotFound() {
  return <LocalizedNotFound content={enCommon} locale="en" />;
}
