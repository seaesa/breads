import { Outlet } from 'react-router-dom';
import { LoadingBarProvider, AntDesignProvider, ThemeProvider } from './providers';
import { GlobalStyles } from './styles';
const App = () => {
  return (
    <>
      <GlobalStyles />
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
