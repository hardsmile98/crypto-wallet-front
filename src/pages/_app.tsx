import React from 'react';
import 'assets/styles/fonts.css';
import 'assets/styles/normalize.css';
import 'assets/styles/theme.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
