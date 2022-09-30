import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { ChangeEvent, FC, memo, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import PrimaryButton from '../atom/PrimaryButton';

const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState('');

  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const onClickLogin = () => {
    login(userId);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={6}>
          <Input
            value={userId}
            onChange={onChangeUserId}
            placeholder="ユーザID"
          />
          <PrimaryButton onClick={onClickLogin} loading={loading}>
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});

export default Login;
