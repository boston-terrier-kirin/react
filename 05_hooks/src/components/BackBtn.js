import { Link } from 'react-router-dom';

const BackBtn = () => {
  return (
    <>
      <Link className="btn btn-secondary" to="/">
        <i className="bi bi-arrow-bar-left"></i> Back
      </Link>
      <hr />
    </>
  );
};

export default BackBtn;
