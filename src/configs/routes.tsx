import App from '@/App';
import { ErrorPage, LandingPage, LoginPage, SearchPage } from '@/app/pages';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/search', element: <SearchPage /> },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/:userId',
        lazy: async () => {
          const { UserPage } = await import('@/app/pages');
          return { Component: UserPage };
        },
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
export { router };
