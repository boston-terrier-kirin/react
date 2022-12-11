import { useReducer } from 'react';
import Button from '../components/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + action.payload.count,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count + action.payload.count,
      };
    case 'change-value-to-add':
      return {
        ...state,
        valueToAdd: action.payload.valueToAdd,
      };
    case 'add-value':
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

const Counter2Page = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: 'increment',
      payload: { count: 1 },
    });
  };

  const decrement = () => {
    dispatch({
      type: 'increment',
      payload: { count: -1 },
    });
  };

  const handleChange = (value) => {
    dispatch({
      type: 'change-value-to-add',
      payload: { valueToAdd: parseInt(value) || 0 },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'add-value',
    });
  };

  return (
    <div>
      <h1>Count is {state.count}</h1>
      <div className="flex gap-1 mb-2">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button primary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-1 mb-2">
        <label>Add a lot!</label>
        <input
          className="p-1 bg-gray-50 border border-gray-300 rounded-md"
          type="number"
          value={state.valueToAdd}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Button primary>Add it!</Button>
      </form>
    </div>
  );
};

export default Counter2Page;
