import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(
    (param) => {
      setIsLoading(true);

      dispatch(thunk(param))
        // unwrapしないと、成功しても失敗してもthenが呼ばれてしまう。
        .unwrap()
        .then(() => setIsLoading(false))
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log(err);
        });
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
};
