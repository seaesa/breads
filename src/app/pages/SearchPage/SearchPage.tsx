import LandingLayout from '@/app/layouts/LandingLayout/LandingLayout';
import { Flex } from 'antd';
import styles from './SearchPage.module.less';
import SearchIcon from '@/assets/icons/search.svg?react';
const SearchPage = () => {
  return (
    <>
      <LandingLayout>
        <Flex vertical className={styles.searchWrap}>
          <div className={styles.searchBox}>
            <SearchIcon className={styles.searchIcon} />
            <input type="text" className={styles.searchInput} />
          </div>
        </Flex>
      </LandingLayout>
    </>
  );
};
export default SearchPage;
