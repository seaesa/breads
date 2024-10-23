import { Outlet } from 'react-router-dom';
import { AntDesignProvider, ThemeProvider } from './providers';
import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      console.log(e);
      console.log(window.innerWidth);
    });
  }, []);
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
