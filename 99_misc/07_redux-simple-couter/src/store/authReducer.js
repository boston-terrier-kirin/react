const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  // dispatchするたびに、authReducerもcounterReducerも呼ばれている。
  // typeの値が重複すると、変なことが起きてしまうので要注意。
  console.log('authReducer');

  if (action.type === 'login') {
    return {
      isAuthenticated: true,
    };
  }

  if (action.type === 'logout') {
    return {
      isAuthenticated: false,
    };
  }

  return state;
};

export default authReducer;
