import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(params);
    console.log(searchParams);
    console.log(searchParams.get('profile'));
  });

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Profile;
