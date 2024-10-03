import * as D from './MainLayout.styles';
import FooterMainLayout from './Footer/FooterMainLayout';
import HeaderMainLayout from './Header/HeaderMainLayout';
import { Flex } from 'antd';

const LandingLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <HeaderMainLayout />
      {/* <Flex vertical>
          <D.ContainerWrap>
            <D.Container wrap flex={1} vertical>
              <D.Main>{children}</D.Main>
            </D.Container>
            <FooterMainLayout />
          </D.ContainerWrap>
        </Flex> */}
    </>
  );
};

export default LandingLayout;
