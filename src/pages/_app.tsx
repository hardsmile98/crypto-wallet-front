import React from 'react';
import 'assets/styles/fonts.css';
import 'assets/styles/normalize.css';
import 'assets/styles/theme.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
