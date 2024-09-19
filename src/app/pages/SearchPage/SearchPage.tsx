import LandingLayout from '@/app/layouts/DefaultLayout/DefaultLayout';
import { Flex } from 'antd';
import { styles } from './SearchPage.styles';
import SearchIcon from '@/assets/icons/search.svg?react';
const SearchPage = () => {
  return (
    <>
      <LandingLayout>
        <Flex vertical css={styles} className='searchWrap'>
          <div className='searchBox'>
            <SearchIcon className='searchIcon' />
            <input type='text' className='searchInput' />
          </div>
        </Flex>
      </LandingLayout>
    </>
  );
};
export default SearchPage;
