import { Footer } from 'antd/es/layout/layout';
import styles from './ErrorPage.module.less';
import { Button } from '@/app/components';
import { useEffect } from 'react';
const ErrorPage = () => {
	useEffect(() => {
		console.log(`render`);
	}, []);
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
		</>
	);
};

export default ErrorPage;
