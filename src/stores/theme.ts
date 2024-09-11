import { create } from 'zustand';

type Theme = 'system' | 'light' | 'dark';
type ThemeProps = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};
const useThemeStore = create<ThemeProps>((set) => ({
	theme: (localStorage.getItem('mode') as Theme) || 'system',
	setTheme: (theme) => {
		localStorage.setItem('mode', theme);
		set(() => ({ theme }));
	},
}));

export const useTheme = () =>
	useThemeStore((state) => ({ theme: state.theme, setTheme: state.setTheme }));
