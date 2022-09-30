import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const showMessage = useMessage();

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(data);
      showMessage({ title: 'SUCCESS', status: 'success' });
    } catch (error) {
      showMessage({ title: 'ERROR', status: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    users,
    getUsers,
  };
};
