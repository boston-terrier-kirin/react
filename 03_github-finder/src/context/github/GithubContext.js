import { createContext, useReducer, useCallback } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // POINT：useCallback
  const searchUsers = useCallback(async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  }, []);

  const clearUsers = useCallback(() => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  }, []);

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
