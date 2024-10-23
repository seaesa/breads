import { create } from 'zustand';
export type Theme = 'light' | 'dark' | 'system';
type ThemeProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const themeSrote = create<ThemeProps>((set) => ({
  theme: (localStorage.getItem('mode') as Theme) || 'system',
  setTheme: (theme) => {
    localStorage.setItem('mode', theme);
    set(() => ({ theme }));
  },
}));
export const useTheme = () => themeSrote((state) => state);
