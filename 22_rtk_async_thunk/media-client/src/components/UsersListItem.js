import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import { removeUser } from '../store';

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded" key={user.id}>
      <div className="p-2 flex justify-between items-center cursor-pointer">
        <div className="flex items-center">
          <Button
            danger
            loading={isLoading}
            onClick={handleClick}
            className="mr-2"
          >
            <GoTrashcan />
          </Button>
          {error && <div>Error deleting user.</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
