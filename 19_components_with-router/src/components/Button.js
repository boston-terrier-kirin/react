import classNames from 'classnames';

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classNames(
    rest.className,
    'px-3 py-1.5 border flex items-center gap-1',
    {
      'border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:border-blue-600':
        primary,
      'border-slate-500 bg-slate-500 text-white hover:bg-slate-600 hover:border-slate-600':
        secondary,
      'border-green-600 bg-green-600 text-white hover:bg-green-700 hover:border-green-700':
        success,
      'border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600 hover:border-yellow-600':
        warning,
      'border-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600':
        danger,
      'rounded-full': rounded,
      'rounded-sm': !rounded,
      'bg-white hover:text-white': outline,
      'text-blue-500': outline && primary,
      'text-slate-500': outline && secondary,
      'text-green-700': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
