import { Flex } from 'antd';
import { LandingLayout } from '@/app/layouts';
import { Post } from '@/app/components';
const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        <Flex vertical>
          <Post />
          <Post />
          <Post />
        </Flex>
      </LandingLayout>
      {/* <Dialog /> */}
    </>
  );
};
export default LandingPage;
