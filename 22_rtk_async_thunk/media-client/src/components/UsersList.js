import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { faker } from '@faker-js/faker';
import { useThunk } from '../hooks/use-thunk';
import { fetchUsers } from '../store';
import { addUser } from '../store';
import UsersListItem from './UsersListItem';
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

  let content;
  if (isLoadingUser) {
    content = (
      <div className="mt-3">
        <Skelton times={6} className="h-10 w-full" />
      </div>
    );
  } else if (loadingUserError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => <UsersListItem key={user.id} user={user} />);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-3 mt-3">
        <h1 className="text-xl">Users</h1>
        <Button
          onClick={handleUserAdd}
          loading={isCreatingUser || isLoadingUser}
        >
          Add User
        </Button>
        {creatingUserError}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
