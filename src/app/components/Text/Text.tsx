import { Typography, type TypographyProps } from 'antd';
import styles from './Text.module.less';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TextProps {
	type: 'link' | 'text' | 'title';
	href?: string;
	children: React.ReactNode;
}
const Text = (): TypographyProps => {
	return Typography;
};
export default Text;
