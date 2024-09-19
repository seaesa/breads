import { useTheme } from '@/stores/theme';
import { useEffect, useRef } from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from 'react-top-loading-bar';
import type { IProps, LoadingBarRef } from 'react-top-loading-bar';

type LoadingBarProps = Omit<IProps & React.RefAttributes<LoadingBarRef>, 'href'>;

const LoadingBar: React.FC<Omit<LoadingBarProps, 'ref'>> = ({ color, ...props }) => {
  const { theme } = useTheme();
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
      <Loading ref={ref} color={color || theme === 'light' ? '#000' : '#fff'} {...props} />
    </>
  );
};

export default LoadingBar;
