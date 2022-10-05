const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
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
