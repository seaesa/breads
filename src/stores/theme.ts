import { create } from 'zustand';

type Theme = 'system' | 'light' | 'dark';
type ThemeProps = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};
export const useTheme = create<ThemeProps>((set) => ({
	theme: (localStorage.getItem('mode') as Theme) || 'system',
	setTheme: (theme) => {
		localStorage.setItem('mode', theme);
		set(() => ({ theme }));
	},
}));
