const initialState = {
  value: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  // dispatchするたびに、authReducerもcounterReducerも呼ばれている。
  // typeの値が重複すると、変なことが起きてしまうので要注意。
  console.log('counterReducer');

  if (action.type === 'increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  }

  if (action.type === 'increaseBy') {
    return {
      ...state,
      value: state.value + action.payload,
    };
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      value: state.value - 1,
    };
  }

  if (action.type === 'toggle') {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

export default counterReducer;
