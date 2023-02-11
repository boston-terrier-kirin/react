import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase.config';
import { showErrorMessage } from '../../utils/message';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      showErrorMessage('Bad User Credentials');
    }
  };

  return (
    <>
      <div className="container-md">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
