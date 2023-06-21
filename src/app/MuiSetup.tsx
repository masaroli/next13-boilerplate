'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme';

type Props = {
  children: ReactNode;
};

const cache = createCache({
  key: 'css',
  prepend: true,
});

function MuiSetup({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MuiSetup;
