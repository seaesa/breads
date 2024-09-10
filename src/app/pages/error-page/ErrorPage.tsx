import { Footer } from 'antd/es/layout/layout';
import styles from './ErrorPage.module.less';
import { Button } from '@/app/components';
import { FloatButton } from 'antd';
const ErrorPage = () => {
	return (
		<>
			<div>
				<div>
					<span className={styles.title}></span>
					<span className={styles.content}></span>
				</div>
				<Button type="primary">Back</Button>
			</div>
			<Footer />
			<FloatButton shape="square" type="primary" style={{ insetInlineEnd: 24 }} />
		</>
	);
};

export default ErrorPage;
