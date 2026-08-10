'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useRef } from 'react';

const initializeTheme = `
  try {
    var storedTheme = window.localStorage.getItem('theme');
    var theme = storedTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.colorScheme = 'light';
  }
`;

export function ThemeInitializationScript() {
  const inserted = useRef(false);

  useServerInsertedHTML(() => {
    if (inserted.current) return null;
    inserted.current = true;

    return <script id="theme-initialization" dangerouslySetInnerHTML={{ __html: initializeTheme }} />;
  });

  return null;
}
