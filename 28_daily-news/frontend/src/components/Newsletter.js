import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToNewsletter } from '../store/reducers/usersThunk';
import { showToast } from './utils/toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addToNewsletter(email))
      .unwrap()
      .then((res) => {
        console.log(res);

        if (res.newsletter === 'added') {
          showToast('SUCCESS', 'Thank you for subscribe');
          setEmail('');
        } else {
          showToast('ERROR', 'You are already on newsletter');
        }
      });
  };

  return (
    <div className="newsletter_container">
      <h1>Join our newsletter</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn btn-primary">Add me to the list</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
