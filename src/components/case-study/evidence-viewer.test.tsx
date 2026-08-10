import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { EvidenceGallery } from './evidence-gallery';
import { EvidenceViewer } from './evidence-viewer';

const labels = {
  openImageLabel: 'Open enlarged image',
  closeImageLabel: 'Close image',
  enlargedImageLabel: 'Enlarged image',
  viewAllArtifactsLabel: 'View all artifacts',
  showLessLabel: 'Show less',
};

afterEach(cleanup);

describe('EvidenceViewer', () => {
  it('opens an accessible modal, closes with Escape, and restores trigger focus', async () => {
    render(
      <EvidenceViewer
        image={{ src: '/evidence.svg', alt: 'Evidence map' }}
        labels={labels}
        caption="Evidence caption"
      />,
    );

    const trigger = screen.getByRole('button', { name: 'Open enlarged image: Evidence map' });
    trigger.focus();
    fireEvent.click(trigger);

    const dialog = await screen.findByRole('dialog', { name: 'Enlarged image' });
    expect(within(dialog).getByRole('button', { name: 'Close image' })).toBeInTheDocument();
    expect(within(dialog).getByRole('img', { name: 'Evidence map' })).toHaveAttribute('src', '/evidence.svg');
    expect(within(dialog).getAllByText('Evidence caption', { selector: 'p' })).toHaveLength(2);

    fireEvent.click(within(dialog).getByRole('button', { name: 'Close image' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();

    fireEvent.click(trigger);
    await screen.findByRole('dialog', { name: 'Enlarged image' });
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });

  it('uses localized labels and resolves evidence items independently', async () => {
    const portugueseLabels = {
      openImageLabel: 'Abrir imagem ampliada',
      closeImageLabel: 'Fechar imagem',
      enlargedImageLabel: 'Imagem ampliada',
    };

    render(
      <>
        <EvidenceViewer image={{ src: '/primeira.svg', alt: 'Primeira evidência' }} labels={portugueseLabels} />
        <EvidenceViewer image={{ src: '/segunda.svg', alt: 'Segunda evidência' }} labels={portugueseLabels} />
      </>,
    );

    expect(screen.queryByRole('button', { name: /Open enlarged image/ })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Abrir imagem ampliada: Segunda evidência' }));

    const dialog = await screen.findByRole('dialog', { name: 'Imagem ampliada' });
    expect(within(dialog).getByRole('img', { name: 'Segunda evidência' })).toHaveAttribute('src', '/segunda.svg');
    expect(within(dialog).queryByRole('img', { name: 'Primeira evidência' })).not.toBeInTheDocument();
    expect(within(dialog).getByRole('button', { name: 'Fechar imagem' })).toBeInTheDocument();
  });
});

describe('EvidenceGallery', () => {
  it('preserves source order and makes every artifact available through disclosure', () => {
    const items = Array.from({ length: 6 }, (_, index) => ({
      image: { src: `/evidence-${index + 1}.svg`, alt: `Evidence ${index + 1}` },
    }));

    render(<EvidenceGallery items={items} labels={labels} initiallyVisibleCount={2} />);

    expect(screen.getAllByRole('button', { name: /Open enlarged image:/ })).toHaveLength(2);
    const viewAll = screen.getByRole('button', { name: 'View all artifacts (6)' });
    expect(viewAll).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(viewAll);
    expect(screen.getAllByRole('button', { name: /Open enlarged image:/ }).map((button) => button.getAttribute('aria-label'))).toEqual([
      'Open enlarged image: Evidence 1',
      'Open enlarged image: Evidence 2',
      'Open enlarged image: Evidence 3',
      'Open enlarged image: Evidence 4',
      'Open enlarged image: Evidence 5',
      'Open enlarged image: Evidence 6',
    ]);

    const showLess = screen.getByRole('button', { name: 'Show less' });
    expect(showLess).toHaveAttribute('aria-expanded', 'true');
    expect(showLess).toHaveTextContent('Show less');
    showLess.focus();
    fireEvent.click(showLess);
    expect(screen.getAllByRole('button', { name: /Open enlarged image:/ })).toHaveLength(2);
    expect(screen.getByRole('button', { name: 'View all artifacts (6)' })).toHaveFocus();
  });
});
