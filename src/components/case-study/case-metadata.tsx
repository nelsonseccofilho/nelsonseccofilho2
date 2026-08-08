import type { ReactNode } from 'react';

type CaseMetadataItem = {
  label: string;
  value: ReactNode;
};

type CaseMetadataProps = {
  items: CaseMetadataItem[];
};

export function CaseMetadata({ items }: CaseMetadataProps) {
  return (
    <dl className="case-metadata">
      {items.map((item) => (
        <div key={item.label} className="case-metadata__item">
          <dt className="case-metadata__label">{item.label}</dt>
          <dd className="case-metadata__value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}