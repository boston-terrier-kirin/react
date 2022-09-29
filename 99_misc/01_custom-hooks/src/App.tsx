import UserCard from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

function App() {
  const { getAllUsers, userProfiles, loading, error } = useAllUsers();
  const onFetchUsers = () => {
    getAllUsers();
  };

  const renderContents = () => {
    if (error) {
      return <p>Error</p>;
    } else if (loading) {
      return <p>Loading...</p>;
    } else {
      return userProfiles.map((user) => <UserCard key={user.id} user={user} />);
    }
  };

  return (
    <div>
      <button onClick={onFetchUsers}>Fetch Users</button>
      {renderContents()}
    </div>
  );
}

export default App;
