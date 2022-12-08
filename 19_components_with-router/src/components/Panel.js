import classNames from 'classnames';

const Panel = ({ children, className, ...rest }) => {
  const mergedClassName = classNames(
    'border rounded p-2 bg-white w-full',
    className
  );
  return (
    <div className={mergedClassName} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
