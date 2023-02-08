import { Search as SearchIcon } from 'react-bootstrap-icons';
import style from './style.module.css';

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <>
      <SearchIcon size={25} className={style.icon} />
      <input
        type="text"
        className={style.input}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
