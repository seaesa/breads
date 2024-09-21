import LandingLayout from '@/app/layouts/DefaultLayout/DefaultLayout';
import { Flex } from 'antd';
import SearchIcon from '@/assets/icons/search.svg?react';
import * as S from './SearchPage.styles';
const SearchPage = () => {
  return (
    <>
      <LandingLayout>
        <Flex vertical>
          <S.Search>
            <S.Icon icon={SearchIcon} />
            <S.Input type='text' />
          </S.Search>
        </Flex>
      </LandingLayout>
    </>
  );
};
export default SearchPage;
