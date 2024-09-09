import ErrorPage from '@/app/pages/error-page/ErrorPage';
import LangdingPage from '@/app/pages/landing-page/LandingPage';
import SearchPage from '@/app/pages/search-page/SearchPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LangdingPage />,
	},
	{
		path: '/search',
		element: <SearchPage />,
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);

export { router };
