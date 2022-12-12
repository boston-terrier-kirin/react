import classNames from 'classnames';

const Skelton = ({ times }) => {
  const boxes = Array(times)
    .fill('')
    .map((_, index) => <div key={index}></div>);

  return boxes;
};

export default Skelton;
