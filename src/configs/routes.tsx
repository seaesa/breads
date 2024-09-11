import App from '@/App';
import ErrorPage from '@/app/pages/ErrorPage/ErrorPage';
import LangdingPage from '@/app/pages/LandingPage/LandingPage';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <LangdingPage />,
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
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);

export { router };
