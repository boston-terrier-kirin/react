import { useState } from 'react';
import { Transition } from 'react-transition-group';

const TransitionComp = () => {
  const [show, setShow] = useState(true);

  const toggleDiv = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Transition
        in={show}
        timeout={{ enter: 1000, exit: 1000 }}
        onEnter={(elem) => console.log('ENTER', elem)}
        onExit={(elem) => console.log('EXIT', elem)}
      >
        {(state) => <div className={`square square-${state}`}>{state}</div>}
      </Transition>

      <button className="btn btn-primary mt-3" onClick={toggleDiv}>
        Toggle Show
      </button>
    </>
  );
};

export default TransitionComp;
