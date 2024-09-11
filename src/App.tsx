import { Outlet } from 'react-router-dom';
import { LoadingBarProvider, AntDesignProvider, ThemeProvider } from './providers';

const App = () => {
	return (
		<>
			<LoadingBarProvider />
			<ThemeProvider>
				<AntDesignProvider>
					<Outlet />
				</AntDesignProvider>
			</ThemeProvider>
		</>
	);
};
export default App;
