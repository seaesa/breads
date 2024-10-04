import HeaderMainLayout from './Header/HeaderMainLayout';

const MainLayout = ({ children }: { children: JSX.Element }) => {
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

export default MainLayout;
