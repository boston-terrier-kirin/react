import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import Skelton from './Skelton';

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skelton times={6} />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  const usersToRender = data.map((user) => (
    <div key={user.id}>{user.name}</div>
  ));

  return <div>{usersToRender}</div>;
};

export default UsersList;
