import classNames from 'classnames';

const Skelton = ({ times, className }) => {
  const outerClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-2.5',
    className
  );
  const innerClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );

  const boxes = Array(times)
    .fill('')
    .map((_, index) => (
      <div key={index} className={outerClassNames}>
        <div className={innerClassNames} />
      </div>
    ));

  return boxes;
};

export default Skelton;
