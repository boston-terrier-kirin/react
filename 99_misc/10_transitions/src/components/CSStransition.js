import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const CssTr = () => {
  const [show, setShow] = useState(false);

  const toggleDiv = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <CSSTransition in={show} timeout={1000} classNames="cssSq">
        <div className="cssSq">Hello</div>
      </CSSTransition>
      <button className="btn btn-primary mt-3" onClick={toggleDiv}>
        Toggle Show
      </button>
    </div>
  );
};

export default CssTr;
