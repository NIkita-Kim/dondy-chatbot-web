import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/query-client';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={ queryClient }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
