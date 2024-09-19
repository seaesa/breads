import App from '@/App';
import { ErrorPage, LandingPage } from '@/app/pages';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/search',
        lazy: async () => {
          const { SearchPage } = await import('@/app/pages');
          return { Component: SearchPage };
        },
      },
      {
        path: '/login',
        lazy: async () => {
          const { LoginPage } = await import('@/app/pages');
          return { Component: LoginPage };
        },
      },
      {
        path: '/:userId',
        lazy: async () => {
          const { UserPage } = await import('@/app/pages');
          return { Component: UserPage };
        },
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export { router };
