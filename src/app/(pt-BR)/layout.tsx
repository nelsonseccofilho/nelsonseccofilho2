import type { Metadata } from 'next';
import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { ThemeInitializationScript } from '@/components/theme/theme-initialization-script';
import { AppThemeProvider } from '@/components/theme/theme-provider';
import { ptBRCommon } from '@/content/i18n';
import '../globals.css';

export const metadata: Metadata = {
  title: ptBRCommon.metadata.title,
  description: ptBRCommon.metadata.description,
  icons: {
    icon: '/assets/brand/favicon-32.png',
    apple: '/assets/brand/apple-touch-icon.png',
  },
};

export default function PortugueseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ThemeInitializationScript />
      </head>
      <body>
        <AppThemeProvider>
          <AnalyticsProvider copy={ptBRCommon.privacy} locale="pt-BR">
            {children}
          </AnalyticsProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
