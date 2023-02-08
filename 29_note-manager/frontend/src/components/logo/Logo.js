import style from './style.module.css';

const Logo = ({ image, title, subtitle, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className={style.container}>
        <img className={style.img} src={image} alt="logo" />
        <div className={style.logo_txt}>{title}</div>
      </div>
      <div className={style.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Logo;
