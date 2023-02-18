import style from './style.module.css';
import { BsSearch } from 'react-icons/bs';

const SearchBox = ({ type = 'text', placeholder, value, onChange }) => {
  return (
    <div className={`${style.searchBox}`}>
      <input
        type={type}
        className={style.search}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <BsSearch className={style.icon} />
    </div>
  );
};

export default SearchBox;
