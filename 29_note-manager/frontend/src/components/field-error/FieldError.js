import style from './style.module.css';

const FieldError = ({ message }) => {
  return <span className={style.container}>{message}</span>;
};

export default FieldError;
