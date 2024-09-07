import clsx, { ClassValue } from 'clsx';
import { v4 as uuid } from 'uuid';
export const cn = (...input: ClassValue[]) => {
	return clsx(input);
};

export const id = () => {
	return uuid();
};
