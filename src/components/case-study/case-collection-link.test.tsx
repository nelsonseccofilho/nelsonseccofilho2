import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { CaseCollectionLink } from './case-collection-link';

afterEach(cleanup);

describe('CaseCollectionLink', () => {
  it('returns Portuguese readers directly to the case collection', () => {
    render(<CaseCollectionLink locale="pt-BR" />);

    const navigation = screen.getByRole('navigation', { name: 'Coleção de projetos' });
    expect(within(navigation).getByRole('link', { name: '← Todos os projetos' })).toHaveAttribute('href', '/#cases');
    expect(within(navigation).queryByRole('list')).not.toBeInTheDocument();
    expect(navigation.querySelector('[aria-current]')).not.toBeInTheDocument();
  });

  it('returns English readers directly to the localized case collection', () => {
    render(<CaseCollectionLink locale="en" />);

    const navigation = screen.getByRole('navigation', { name: 'Case collection' });
    expect(within(navigation).getByRole('link', { name: '← All projects' })).toHaveAttribute('href', '/en#cases');
    expect(within(navigation).queryByRole('list')).not.toBeInTheDocument();
    expect(navigation.querySelector('[aria-current]')).not.toBeInTheDocument();
  });
});
