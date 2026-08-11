import type { Locale } from '@/i18n/locales';

const WHATSAPP_PHONE = '5512981241764';
const WHATSAPP_MESSAGES = {
  'pt-BR': 'Olá Nelson, vi seu portfólio e gostaria de conversar sobre um projeto.',
  en: "Hi Nelson, I saw your portfolio and I'd like to talk about a project.",
} as const;

export function getWhatsAppContactUrl(locale: Locale): string {
  const message = WHATSAPP_MESSAGES[locale];
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
}

export const WHATSAPP_CONTACT_URL =
  'https://wa.me/5512981241764?text=Olá%20Nelson%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.';

export const CONTACT_EMAIL = 'nelsonseccofilho@gmail.com';
export const CONTACT_EMAIL_URL = `mailto:${CONTACT_EMAIL}`;
export const LINKEDIN_CONTACT_URL = 'https://www.linkedin.com/in/nelsonseccofilho/';
export const GITHUB_PROFILE_URL = 'https://github.com/nelsonseccofilho';
export const GITHUB_PORTFOLIO_REPOSITORY_URL = 'https://github.com/nelsonseccofilho/nelsonseccofilho2';
export const N3LX_SPOTIFY_URL = 'https://open.spotify.com/intl-pt/artist/2ieIog7rXx1yWHaPyQhJvE';
