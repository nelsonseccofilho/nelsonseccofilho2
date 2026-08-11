import type { Metadata } from 'next';
import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { ThemeInitializationScript } from '@/components/theme/theme-initialization-script';
import { AppThemeProvider } from '@/components/theme/theme-provider';
import { enCommon } from '@/content/i18n';
import '../globals.css';

export const metadata: Metadata = {
  title: enCommon.metadata.title,
  description: enCommon.metadata.description,
  icons: {
    icon: '/assets/brand/favicon-32.png',
    apple: '/assets/brand/apple-touch-icon.png',
  },
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitializationScript />
      </head>
      <body>
        <AppThemeProvider>
          <AnalyticsProvider copy={enCommon.privacy} locale="en">
            {children}
          </AnalyticsProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
