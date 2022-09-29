import { FC } from 'react';
import { UserProfile } from '../types/userProfile';

type Props = {
  user: UserProfile;
};

const UserCard: FC<Props> = (props) => {
  const { name, email, address } = props.user;
  const style = {
    border: 'solid 1px #ccc',
    borderRadius: '8px',
    padding: '0 16px',
    margin: '8px',
  };

  return (
    <div style={style}>
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
        <dt>Address</dt>
        <dd>{address}</dd>
      </dl>
    </div>
  );
};

export default UserCard;
