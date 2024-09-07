import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.less';
import { RouterProvider } from 'react-router-dom';
import { router } from './configs/routes.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App>
			<RouterProvider router={router} />
		</App>
	</StrictMode>,
);
