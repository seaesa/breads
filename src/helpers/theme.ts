import type { Theme } from '@/stores/theme';
import { darkTheme } from '@/styles/themes/darkTheme';
import { lightTheme } from '@/styles/themes/lightTheme';

export const getTheme = (theme: Theme) => {
  return theme === 'light' ? lightTheme : darkTheme;
};
