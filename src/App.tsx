import { Outlet } from 'react-router-dom';
import { AntDesignProvider, ThemeProvider } from './providers';
const App = () => {
  return (
    <>
      <ThemeProvider>
        <AntDesignProvider>
          <Outlet />
        </AntDesignProvider>
      </ThemeProvider>
    </>
  );
};
export default App;
