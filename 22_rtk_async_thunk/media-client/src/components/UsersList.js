import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { faker } from '@faker-js/faker';
import { useThunk } from '../hooks/use-thunk';
import { fetchUsers } from '../store';
import { addUser } from '../store';
import Button from './Button';
import Skelton from './Skelton';

const UsersList = () => {
  // 初回のローディングとユーザ作成のローディングを分けたいがために、頑張っている。
  const [doFetchUser, isLoadingUser, loadingUserError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUser();
  }, [doFetchUser]);

  const handleUserAdd = () => {
    const name = faker.name.fullName();
    doCreateUser(name);
  };

  if (isLoadingUser) {
    return (
      <div className="mt-3">
        <Skelton times={6} className="h-10 w-full" />
      </div>
    );
  }

  if (loadingUserError) {
    return <div>Error fetching data...</div>;
  }

  const usersToRender = data.map((user) => (
    <div className="mb-2 border rounded" key={user.id}>
      <div className="p-2 flex justify-center items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-3 mt-3">
        <h1 className="text-xl">Users</h1>
        {isCreatingUser ? (
          'Creating User...'
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && 'Error creating user...'}
      </div>
      {usersToRender}
    </div>
  );
};

export default UsersList;
