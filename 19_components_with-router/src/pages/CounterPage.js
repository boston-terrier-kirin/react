import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

const CounterPage = ({ initialCount }) => {
  const { count, increment, decrement } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button className="mb-2" primary onClick={increment}>
        Increment
      </Button>
      <Button primary onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
};

export default CounterPage;
