import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// config router
import { router } from './configs/routes.tsx';
// import css
import '/node_modules/antd/dist/reset.css';
import './global.less';
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);