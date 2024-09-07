import ErrorPage from '@/app/pages/error-page/ErrorPage';
import LangdingPage from '@/app/pages/landing-page/LandingPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LangdingPage />,
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);

export { router };
