import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ResumeDialog } from './resume-dialog';

const trackEventMock = vi.hoisted(() => vi.fn());

vi.mock('@/components/analytics/analytics-provider', () => ({
  useAnalytics: () => ({ trackEvent: trackEventMock }),
}));

const ptLabels = {
  triggerLabel: 'Currículo',
  triggerAriaLabel: 'Abrir currículo de Nelson Secco em português',
  dialogTitle: 'Currículo — Nelson Secco',
  closeLabel: 'Fechar currículo',
  downloadLabel: 'Baixar PDF',
  loadingLabel: 'Carregando currículo…',
};

const enLabels = {
  triggerLabel: 'Resume',
  triggerAriaLabel: "Open Nelson Secco's resume in English",
  dialogTitle: 'Resume — Nelson Secco',
  closeLabel: 'Close resume',
  downloadLabel: 'Download PDF',
  loadingLabel: 'Loading resume…',
};

const ptHref = '/assets/resume/N3LX_PT-BR.pdf';
const enHref = '/assets/resume/N3LX_EN.pdf';

beforeEach(() => trackEventMock.mockClear());
afterEach(cleanup);

describe('ResumeDialog', () => {
  it('renders PT-BR trigger with correct accessible label', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} surface="hero" />);

    const trigger = screen.getByRole('button', { name: ptLabels.triggerAriaLabel });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent(ptLabels.triggerLabel);
  });

  it('renders EN trigger with correct accessible label', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" />);

    const trigger = screen.getByRole('button', { name: enLabels.triggerAriaLabel });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent(enLabels.triggerLabel);
  });

  it('opens PT-BR modal with correct title when trigger is clicked', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} surface="hero" />);

    fireEvent.click(screen.getByRole('button', { name: ptLabels.triggerAriaLabel }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(ptLabels.dialogTitle)).toBeInTheDocument();
  });

  it('opens EN modal with correct title when trigger is clicked', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(enLabels.dialogTitle)).toBeInTheDocument();
  });

  it('uses the correct PT-BR PDF path in the iframe', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} surface="hero" />);

    fireEvent.click(screen.getByRole('button', { name: ptLabels.triggerAriaLabel }));

    const iframe = screen.getByTitle(ptLabels.dialogTitle);
    expect(iframe).toHaveAttribute('src', ptHref);
  });

  it('uses the correct EN PDF path in the iframe', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));

    const iframe = screen.getByTitle(enLabels.dialogTitle);
    expect(iframe).toHaveAttribute('src', enHref);
  });

  it('provides a download link with the correct PDF path', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} surface="hero" />);

    fireEvent.click(screen.getByRole('button', { name: ptLabels.triggerAriaLabel }));

    const downloadLink = screen.getByText(ptLabels.downloadLabel);
    expect(downloadLink).toHaveAttribute('href', ptHref);
    expect(downloadLink).toHaveAttribute('download');
  });

  it('closes the modal when the close button is clicked', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: enLabels.closeLabel }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when Escape is pressed', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(document.activeElement ?? document.body, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('returns focus to the trigger after the dialog closes', async () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" />);

    const trigger = screen.getByRole('button', { name: enLabels.triggerAriaLabel });
    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole('button', { name: enLabels.closeLabel }));

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it('does not navigate away — trigger is a button, not a link', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} surface="hero" />);

    const trigger = screen.getByRole('button', { name: ptLabels.triggerAriaLabel });
    expect(trigger.tagName).toBe('BUTTON');
    expect(trigger).not.toHaveAttribute('href');
  });

  it('shows loading label before iframe fires onLoad', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));

    expect(screen.getByText(enLabels.loadingLabel)).toBeInTheDocument();
  });

  it('applies custom trigger className', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" triggerClassName="hero__resume-link" />);

    expect(screen.getByRole('button', { name: enLabels.triggerAriaLabel })).toHaveClass('hero__resume-link');
  });

  it.each([
    ['hero', 'resume_open:hero', 'resume_download:hero'],
    ['footer', 'resume_open:footer', 'resume_download:footer'],
  ] as const)('tracks one open and one download for the %s surface', (surface, openEvent, downloadEvent) => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface={surface} />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));
    expect(trackEventMock).toHaveBeenCalledTimes(1);
    expect(trackEventMock).toHaveBeenLastCalledWith(openEvent);

    const downloadLink = screen.getByRole('link', { name: enLabels.downloadLabel });
    expect(downloadLink).toHaveAttribute('href', enHref);
    expect(downloadLink).toHaveAttribute('download');
    fireEvent.click(downloadLink);

    expect(trackEventMock).toHaveBeenCalledTimes(2);
    expect(trackEventMock).toHaveBeenLastCalledWith(downloadEvent);

    fireEvent.click(screen.getByRole('button', { name: enLabels.closeLabel }));
    expect(trackEventMock).toHaveBeenCalledTimes(2);
  });

  it('tracks a new Resume intention after closing and reopening', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} surface="hero" />);

    const trigger = screen.getByRole('button', { name: enLabels.triggerAriaLabel });
    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole('button', { name: enLabels.closeLabel }));
    fireEvent.click(trigger);

    expect(trackEventMock).toHaveBeenCalledTimes(2);
    expect(trackEventMock).toHaveBeenNthCalledWith(1, 'resume_open:hero');
    expect(trackEventMock).toHaveBeenNthCalledWith(2, 'resume_open:hero');
  });
});
