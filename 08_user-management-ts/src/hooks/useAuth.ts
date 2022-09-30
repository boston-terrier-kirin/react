import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAuth = () => {
  // hookの中でもhookは使える。
  const history = useHistory();
  const showMessage = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const { data } = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (data) {
          // setLoadingとhistory.pushの順番を逆にするのはNGらしい。
          // Can't perform a React state update on an unmounted component.
          // This is a no-op, but it indicates a memory leak in your application.
          // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
          setLoading(false);
          showMessage({ title: 'ログインしました', status: 'success' });
          history.push('/home');
        } else {
          showMessage({ title: 'エラー', status: 'error' });
        }
      } catch (err) {
        setLoading(false);
        showMessage({ title: 'エラー', status: 'error' });
      }
    },
    [history]
  );

  return { login, loading };
};
