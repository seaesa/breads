import { OptionIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';
import { Button, PostActions, Image } from '@/app/components';
import { Avatar, Col, Divider, Flex, Row, Typography } from 'antd';
import { styles } from './Post.styles';

const Post = () => {
  return (
    <>
      <div css={styles}>
        <Row className="post">
          <Col span={2}>
            <div className="avatar">
              <Link to="">
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              </Link>
            </div>
          </Col>
          <Col span={22}>
            <Flex align="center">
              <Flex gap={6} flex={1} align="center">
                <Link className="titleLink" to="">
                  <Typography.Text>james_photography89</Typography.Text>
                </Link>
                <time dateTime={new Date().toLocaleDateString()} title="time">
                  <Typography.Text className="time">14h</Typography.Text>
                </time>
              </Flex>
              <Button size="middle" shape="circle">
                <OptionIcon className="icon" />
              </Button>
            </Flex>
            <div className="contentTitle">
              <Typography.Text>
                Angel Reese announces she will not play the rest of her rookie season due to injury - what a rough
                moment in an otherwise incredible year. She will be back, and she will be back dazzling.
              </Typography.Text>
            </div>
            <div className="contentImageWrap">
              <div className="contentImage">
                <Image src="https://images.pexels.com/photos/27244360/pexels-photo-27244360/free-photo-of-car-by-maelifell-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
            <div className="action">
              <PostActions />
            </div>
          </Col>
        </Row>
        <Divider type="horizontal" />
      </div>
    </>
  );
};

export default Post;
