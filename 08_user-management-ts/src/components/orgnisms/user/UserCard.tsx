import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type UserCardProps = {
  id: number;
  userName: string;
  email: string;
  onClick: (id: number) => void;
};

const UserCard: FC<UserCardProps> = (props) => {
  const { id, userName, email, onClick } = props;

  const onClickUser = () => {
    onClick(id);
  };

  return (
    <Box
      onClick={onClickUser}
      w="260px"
      h="260px"
      bg="white"
      borderRadius={10}
      shadow="md"
    >
      <Stack textAlign="center">
        <Image
          m="auto"
          boxSize="160px"
          borderRadius="full"
          p={4}
          src={`https://robohash.org/${id}?bgset=bg2&size=180x180`}
          _hover={{ cursor: 'pointer', opacity: 0.8 }}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {email}
        </Text>
      </Stack>
    </Box>
  );
};

export default memo(UserCard);
