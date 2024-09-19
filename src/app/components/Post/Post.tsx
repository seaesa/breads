import { Link } from 'react-router-dom';
import { Avatar, Col, Divider, Flex, Row, Typography } from 'antd';
import { OptionIcon } from '@/assets/icons';
import { PostActions, Icon } from '@/app/components';
import { Button, Image } from '@/app/components/base';
import * as P from './Post.styles';
const Post = () => {
  return (
    <>
      <P.Post>
        <Row>
          <Col span={2}>
            <P.Avatar>
              <Link to=''>
                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
              </Link>
            </P.Avatar>
          </Col>
          <Col span={22}>
            <Flex align='center'>
              <Flex gap={6} flex={1} align='center'>
                <P.Link to=''>
                  <Typography.Text>james_photography89</Typography.Text>
                </P.Link>
                <P.Time dateTime={new Date().toLocaleDateString()} title='time'>
                  <Typography.Text className='time'>14h</Typography.Text>
                </P.Time>
              </Flex>
              <Button size='middle' shape='circle'>
                <Icon color='var(--secondary-icon)' icon={OptionIcon}></Icon>
              </Button>
            </Flex>
            <P.Content>
              <P.Title>
                <Typography.Text>
                  Angel Reese announces she will not play the rest of her rookie season due to injury - what a rough
                  moment in an otherwise incredible year. She will be back, and she will be back dazzling.
                </Typography.Text>
              </P.Title>
              <P.ImageWrap>
                <P.Image>
                  <Image src='https://images.pexels.com/photos/27244360/pexels-photo-27244360/free-photo-of-car-by-maelifell-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </P.Image>
              </P.ImageWrap>
            </P.Content>
            <P.Action>
              <PostActions />
            </P.Action>
          </Col>
        </Row>
      </P.Post>
      <Divider type='horizontal' />
    </>
  );
};

export default Post;
