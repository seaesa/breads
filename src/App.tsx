import { Outlet } from 'react-router-dom';
import { AntDesignProvider, ThemeProvider } from './providers';
import GlobalStyles from './styles/GlobalStyles';
import { LoadingBar } from './app/components';
const App = () => {
  return (
    <>
      <GlobalStyles />
      <LoadingBar />
      <ThemeProvider>
        <AntDesignProvider>
          <Outlet />
        </AntDesignProvider>
      </ThemeProvider>
    </>
  );
};
export default App;
