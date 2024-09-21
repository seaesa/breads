import { Flex, Space, Typography } from 'antd';
import * as T from './ToolTipUserDetail.styles';
import { Button } from '@/app/components/base';

const ToolTipUserDetail = () => {
  return (
    <>
      <T.ToolTipWrap vertical>
        <Flex justify='space-between'>
          <Flex vertical>
            <T.UserNameTitle>hai</T.UserNameTitle>
            <T.Username>hai</T.Username>
          </Flex>
          <T.Avatar src='https://instagram.fsgn2-7.fna.fbcdn.net/v/t51.2885-19/384996348_892928569063956_6227893749853879777_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsgn2-7.fna.fbcdn.net&_nc_cat=1&_nc_ohc=XHXLbaWkkgMQ7kNvgFp3yLb&_nc_gid=089043d2a80546be86b833d957e1d76b&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYCWqJXXa3v15naDtOr_PR5dHaKbPariyClHyxv9ud6hqw&oe=66F446BF&_nc_sid=10d13b' />
        </Flex>
        <Space direction='vertical'>
          <Typography.Text>
            {' '}
            half of the Main Beach is a lake, the San Lorenzo has again dammed itself up and the river is full.
          </Typography.Text>
          <Typography.Text>1000 flower</Typography.Text>
          <Button type='primary'>Flowwing</Button>
        </Space>
      </T.ToolTipWrap>
    </>
  );
};

export default ToolTipUserDetail;
