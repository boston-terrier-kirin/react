import { FC, memo, useCallback, useEffect, useState } from 'react';
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import UserCard from '../orgnisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import UserDetailModal from '../orgnisms/user/UserDetailModal';
import { User } from '../../types/api/user';

const UserManagement: FC = memo(() => {
  const [user, setUser] = useState<User | null>(null);
  const { loading, users, getUsers } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback(
    (id: number) => {
      const selectedUser = users.find((user) => user.id === id);
      if (selectedUser) {
        setUser(selectedUser);
      }
      onOpen();
    },

    // ここにusersを追加しないと、初回のundefinedでメモ化されてしまう。
    [users]
  );

  const usersToRender = users.map((user) => {
    return (
      <WrapItem key={user.id}>
        <UserCard
          id={user.id}
          userName={user.username}
          email={user.email}
          onClick={onClickUser}
        />
      </WrapItem>
    );
  });

  return (
    <>
      {loading && (
        <Center h="100vh">
          <Spinner />
        </Center>
      )}
      <Wrap p={4}>{usersToRender}</Wrap>
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={user} />
    </>
  );
});

export default UserManagement;
