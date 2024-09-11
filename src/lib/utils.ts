import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import { v4 as uuid } from 'uuid';
export const cn = (...input: ClassValue[]) => {
	return clsx(input);
};

export const id = (): string => {
	return uuid();
};
