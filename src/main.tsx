import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/app/App';
import { ThemeProvider } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './layout/theme/globalStyle.scss';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
