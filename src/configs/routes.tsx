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
          let { SearchPage } = await import('@/app/pages');
          return { Component: SearchPage };
        },
      },
      {
        path: '/login',
        lazy: async () => {
          let { LoginPage } = await import('@/app/pages');
          return { Component: LoginPage };
        },
      },
      {
        path: '/:userId',
        lazy: async () => {
          let { UserPage } = await import('@/app/pages');
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
