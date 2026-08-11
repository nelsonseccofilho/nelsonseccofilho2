import { SiteFooter } from '@/components/layout/site-footer';

export default function PortugueseFooterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-dvh flex-col [&>main]:flex-1">
      {children}
      <SiteFooter locale="pt-BR" />
    </div>
  );
}
