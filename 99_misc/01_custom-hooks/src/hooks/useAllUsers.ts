import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from '../types/api/user';
import { UserProfile } from '../types/userProfile';

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const { data } = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      const users = data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city} ${user.address.suite} ${user.address.street}`,
      }));

      setUserProfiles(users);
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getAllUsers,
    userProfiles,
    loading,
    error,
  };
};
