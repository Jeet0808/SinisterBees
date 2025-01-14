import React, { Suspense } from 'react'
import { ThemeProvider } from '../context/ThemeContext';

type AppProviderProps = {
    children: React.ReactNode;
  };

function Provider({children}:AppProviderProps) {
  return (
    <Suspense fallback={<div>Loading</div>}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </Suspense>
  )
}

export default Provider