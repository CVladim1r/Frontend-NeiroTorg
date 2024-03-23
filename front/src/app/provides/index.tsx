import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from './QueryClientProvider';
import { Router } from './RouterProvider';
import { Toaster } from 'react-hot-toast';

interface ProviderProps {
  // any
}

const Provider: FC<ProviderProps> = () => {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <Router />
        <Toaster
          position={'top-right'}
          toastOptions={{
            style: {
              background: '#000',
              color: '#FFF',
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Provider;
