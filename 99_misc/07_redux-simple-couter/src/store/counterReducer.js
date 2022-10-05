const initialState = {
  value: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
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
