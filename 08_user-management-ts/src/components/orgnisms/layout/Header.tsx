import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { FC, memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Header: FC = memo(() => {
  const history = useHistory();

  const onClickHome = useCallback(() => history.push('/home'), [history]);

  const onClickUserManagement = useCallback(
    () => history.push('/home/user_management'),
    [history]
  );

  const onClickSetting = useCallback(
    () => history.push('/home/setting'),
    [history]
  );

  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding="3"
    >
      <Heading
        as="a"
        _hover={{ cursor: 'pointer' }}
        fontSize={{ base: 'md', md: 'lg' }}
        onClick={onClickHome}
      >
        ユーザ管理
      </Heading>

      <Flex>
        <Box pr={4}>
          <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
        </Box>
        <Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Box>
      </Flex>
    </Flex>
  );
});

export default Header;
