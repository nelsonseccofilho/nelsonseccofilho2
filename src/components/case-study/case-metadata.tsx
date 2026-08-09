import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CaseMetadataItem = {
  label: string;
  value: ReactNode;
};

type CaseMetadataProps = {
  items: CaseMetadataItem[];
};

export function CaseMetadata({ items }: CaseMetadataProps) {
  const compactSpans = Array<number>(items.length).fill(2);
  for (let index = 0; index < items.length - 1; index += 1) {
    const value = items[index]?.value;
    const nextValue = items[index + 1]?.value;
    const isShort = typeof value === 'string' && value.length <= 28;
    const nextIsShort = typeof nextValue === 'string' && nextValue.length <= 28;

    if (isShort && nextIsShort) {
      compactSpans[index] = 1;
      compactSpans[index + 1] = 1;
      index += 1;
    }
  }

  return (
    <dl
      className={cn(
        'm-0 mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)]',
        items.length % 4 === 0 ? 'xl:grid-cols-4' : 'xl:grid-cols-3',
      )}
    >
      {items.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              'grid min-w-0 gap-1 bg-[var(--color-surface)] p-4 md:p-5 xl:col-span-1',
              compactSpans[index] === 2 && 'col-span-2',
            )}
          >
            <dt className="text-[0.78rem] font-semibold tracking-[0.14em] text-[var(--color-text-secondary)] uppercase">{item.label}</dt>
            <dd className="m-0 text-base leading-[1.55] text-[var(--color-text-primary)]">{item.value}</dd>
          </div>
        ))}
    </dl>
  );
}
