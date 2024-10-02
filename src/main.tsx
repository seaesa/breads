import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './configs/routes.tsx';
import GlobalStyles from './styles/GlobalStyles.tsx';
import LoadingBar from 'react-top-loading-bar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <GlobalStyles />
      <LoadingBar />
      <RouterProvider router={router} />
    </>
  </StrictMode>,
);
