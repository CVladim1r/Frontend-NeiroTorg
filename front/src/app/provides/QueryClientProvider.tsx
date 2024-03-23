import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from 'react-query';

// Создаем новый экземпляр QueryClient
const queryClient = new QueryClient();

// Компонент-обертка для предоставления QueryClient
export const QueryClientProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};
