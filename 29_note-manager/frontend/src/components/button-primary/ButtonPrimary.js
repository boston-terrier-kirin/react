import style from './style.module.css';

const ButtonPrimary = ({ onClick, isDisabled, children }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-primary ${style.button}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
