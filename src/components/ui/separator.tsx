import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type SeparatorProps = HTMLAttributes<HTMLDivElement>;

export function Separator({ className, ...props }: SeparatorProps) {
  return <div role="separator" className={cn('h-px w-full bg-[var(--color-border)]', className)} {...props} />;
}
