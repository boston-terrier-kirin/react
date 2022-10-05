import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const increaseBy = (value) => {
    dispatch({ type: 'increaseBy', payload: value });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={increment}>Increment</button>
            <button onClick={() => increaseBy(5)}>Increase By 5</button>
            <button onClick={decrement}>Decrement</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
