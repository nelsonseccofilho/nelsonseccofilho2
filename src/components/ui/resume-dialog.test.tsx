import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ResumeDialog } from './resume-dialog';

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

afterEach(cleanup);

describe('ResumeDialog', () => {
  it('renders PT-BR trigger with correct accessible label', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} />);

    const trigger = screen.getByRole('button', { name: ptLabels.triggerAriaLabel });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent(ptLabels.triggerLabel);
  });

  it('renders EN trigger with correct accessible label', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} />);

    const trigger = screen.getByRole('button', { name: enLabels.triggerAriaLabel });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent(enLabels.triggerLabel);
  });

  it('opens PT-BR modal with correct title when trigger is clicked', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} />);

    fireEvent.click(screen.getByRole('button', { name: ptLabels.triggerAriaLabel }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(ptLabels.dialogTitle)).toBeInTheDocument();
  });

  it('opens EN modal with correct title when trigger is clicked', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(enLabels.dialogTitle)).toBeInTheDocument();
  });

  it('uses the correct PT-BR PDF path in the iframe', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} />);

    fireEvent.click(screen.getByRole('button', { name: ptLabels.triggerAriaLabel }));

    const iframe = screen.getByTitle(ptLabels.dialogTitle);
    expect(iframe).toHaveAttribute('src', ptHref);
  });

  it('uses the correct EN PDF path in the iframe', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));

    const iframe = screen.getByTitle(enLabels.dialogTitle);
    expect(iframe).toHaveAttribute('src', enHref);
  });

  it('provides a download link with the correct PDF path', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} />);

    fireEvent.click(screen.getByRole('button', { name: ptLabels.triggerAriaLabel }));

    const downloadLink = screen.getByText(ptLabels.downloadLabel);
    expect(downloadLink).toHaveAttribute('href', ptHref);
    expect(downloadLink).toHaveAttribute('download');
  });

  it('closes the modal when the close button is clicked', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: enLabels.closeLabel }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when Escape is pressed', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(document.activeElement ?? document.body, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('returns focus to the trigger after the dialog closes', async () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} />);

    const trigger = screen.getByRole('button', { name: enLabels.triggerAriaLabel });
    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole('button', { name: enLabels.closeLabel }));

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it('does not navigate away — trigger is a button, not a link', () => {
    render(<ResumeDialog pdfHref={ptHref} labels={ptLabels} />);

    const trigger = screen.getByRole('button', { name: ptLabels.triggerAriaLabel });
    expect(trigger.tagName).toBe('BUTTON');
    expect(trigger).not.toHaveAttribute('href');
  });

  it('shows loading label before iframe fires onLoad', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} />);

    fireEvent.click(screen.getByRole('button', { name: enLabels.triggerAriaLabel }));

    expect(screen.getByText(enLabels.loadingLabel)).toBeInTheDocument();
  });

  it('applies custom trigger className', () => {
    render(<ResumeDialog pdfHref={enHref} labels={enLabels} triggerClassName="hero__resume-link" />);

    expect(screen.getByRole('button', { name: enLabels.triggerAriaLabel })).toHaveClass('hero__resume-link');
  });
});
