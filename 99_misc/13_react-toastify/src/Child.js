import { toast } from 'react-toastify';

const Child = () => {
  const handleClick = () => {
    toast.success('SUCCESS', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        CLICK
      </button>
    </div>
  );
};

export default Child;
