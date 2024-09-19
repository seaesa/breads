import * as D from './DefaultLayout.styles';
import FooterDefaultLayout from './Footer/FooterDefaultLayout';
import HeaderDefaultLayout from './Header/HeaderDefaultLayout';
import { Flex } from 'antd';

const LandingLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Flex vertical>
        <HeaderDefaultLayout />
        <Flex vertical>
          <D.ContainerWrap>
            <D.Container wrap flex={1} vertical>
              <D.Main>{children}</D.Main>
            </D.Container>
            <FooterDefaultLayout />
          </D.ContainerWrap>
        </Flex>
      </Flex>
    </>
  );
};

export default LandingLayout;
