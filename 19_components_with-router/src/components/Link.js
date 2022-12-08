import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    to === currentPath && activeClassName
  );

  const handleClick = (event) => {
    // Ctrlキーを押している場合は、Ctrl+クリックで別タブを開こうとしているので、preventDefaultはせずに、やりたいようにさせる。
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
