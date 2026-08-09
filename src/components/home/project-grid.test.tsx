import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ProjectGrid } from './project-grid';

afterEach(() => {
  cleanup();
});

describe('ProjectGrid', () => {
  it('renders children inside a semantic collection', () => {
    render(
      <ProjectGrid>
        <li>First case</li>
        <li>Second case</li>
      </ProjectGrid>,
    );

    const collection = screen.getByRole('list');

    expect(collection.tagName).toBe('UL');
    expect(within(collection).getByText('First case')).toBeInTheDocument();
    expect(within(collection).getByText('Second case')).toBeInTheDocument();
  });

  it('preserves the DOM order of rendered items', () => {
    render(
      <ProjectGrid>
        <li>HORIZON HIS</li>
        <li>SUBITER</li>
        <li>REDE DCC 1.0</li>
      </ProjectGrid>,
    );

    expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual(['HORIZON HIS', 'SUBITER', 'REDE DCC 1.0']);
  });
});
