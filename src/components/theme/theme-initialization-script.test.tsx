import { renderToString } from 'react-dom/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { serverInsertionCallbacks } = vi.hoisted(() => ({
  serverInsertionCallbacks: [] as Array<() => unknown>,
}));

vi.mock('next/navigation', () => ({
  useServerInsertedHTML: (callback: () => unknown) => serverInsertionCallbacks.push(callback),
}));

import { ThemeInitializationScript } from './theme-initialization-script';

beforeEach(() => {
  serverInsertionCallbacks.length = 0;
});

describe('ThemeInitializationScript', () => {
  it('registers one pre-hydration script without rendering it in the client tree', () => {
    expect(renderToString(<ThemeInitializationScript />)).toBe('');
    expect(serverInsertionCallbacks).toHaveLength(1);

    const insertedMarkup = renderToString(serverInsertionCallbacks[0]() as React.ReactNode);
    expect(insertedMarkup).toContain('id="theme-initialization"');
    expect(insertedMarkup).toContain("localStorage.getItem('theme')");
    expect(serverInsertionCallbacks[0]()).toBeNull();
  });
});
