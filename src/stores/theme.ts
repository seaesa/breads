import { create } from 'zustand';

export type Theme = 'light' | 'dark';
type ThemeProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const useThemeStore = create<ThemeProps>((set) => ({
  theme: (localStorage.getItem('mode') as Theme) || systemTheme,
  setTheme: (theme) => {
    localStorage.setItem('mode', theme);
    set(() => ({ theme }));
  },
}));

export const useTheme = () => useThemeStore((state) => state);
