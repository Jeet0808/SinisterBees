import React, { Suspense } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';

type AppProviderProps = {
  children: React.ReactNode;
};

function Provider({ children }: AppProviderProps) {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <ThemeProvider>
        <HelmetProvider>{children}</HelmetProvider>
      </ThemeProvider>
    </Suspense>
  );
}

export default Provider;
