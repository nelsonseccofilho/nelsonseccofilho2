import type { Metadata } from 'next';
import { AppThemeProvider } from '@/components/theme/theme-provider';
import '../globals.css';

export const metadata: Metadata = {
  title: 'N3LX | Senior Product Designer | UX Strategy | Product Discovery | Design Systems | AI-assisted Product Design',
  description:
    'Senior Product Designer e UX Lead especializado em produtos digitais, sistemas complexos, estratégia e experiências orientadas por tecnologia.',
  icons: {
    icon: '/assets/brand/favicon-32.png',
    apple: '/assets/brand/apple-touch-icon.png',
  },
};

export default function PortugueseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
