import { Link } from 'react-router-dom';
import { Avatar, Typography } from 'antd';
import { cn } from '@/lib/utils';
import { LandingLayout } from '@/app/layouts';
import { OptionIcon } from '@/assets/icons';
import { Button, PostActions, Image } from '@/app/components';
import styles from './LandingPage.module.less';

const Post = () => {
  return (
    <>
      <div className={styles.postWrap}>
        <div className={styles.avatar}>
          <Link to="">
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          </Link>
        </div>

        <div className={styles.title}>
          <div className={styles.titleHeading}>
            <Link className={styles.titleLink} to="">
              james_photography89
            </Link>
            <div>
              <time dateTime={new Date().toLocaleDateString()} title="time">
                <span className={styles.time}>14h</span>
              </time>
            </div>
          </div>
          <div>
            <Button size="middle" shape="circle">
              <OptionIcon className={cn(styles.icon)} />
            </Button>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <div className={styles.contentTitle}>
              <Typography.Text className={styles.title}>
                Angel Reese announces she will not play the rest of her rookie season due to injury - what a rough
                moment in an otherwise incredible year. She will be back, and she will be back dazzling.
              </Typography.Text>
            </div>
            <div className={styles.contentImageWrap}>
              <div className={styles.contentImage}>
                <Image src="https://images.pexels.com/photos/27244360/pexels-photo-27244360/free-photo-of-car-by-maelifell-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
            <div className={styles.action}>
              <PostActions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        <div className={cn(styles.contentWrap)}>
          <Post />
          <Post />
          <Post />
        </div>
      </LandingLayout>
    </>
  );
};
export default LandingPage;
