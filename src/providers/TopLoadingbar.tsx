import { useEffect, useRef } from 'react';
import { useNavigation } from 'react-router-dom';
import LoadingBar, { IProps, LoadingBarRef } from 'react-top-loading-bar';

type TopLoadingbarProps = Omit<IProps & React.RefAttributes<LoadingBarRef>, 'href'>;

const TopLoadingbar: React.FC<TopLoadingbarProps> = ({ color = '#000' }) => {
	const navigation = useNavigation();
	const ref = useRef<LoadingBarRef>(null);
	useEffect(() => {
		if (navigation.state === 'loading' || navigation.state === 'submitting') {
			ref.current?.staticStart();
		}
		if (navigation.state === 'idle') {
			ref.current?.complete();
		}
	}, [navigation.state]);
	return (
		<>
			<LoadingBar ref={ref} color={color} />
		</>
	);
};

export default TopLoadingbar;
