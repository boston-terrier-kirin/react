import { useState, useCallback } from 'react';

function useFetch1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async (url, options) => {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return {
    fetchData,
    data,
    loading,
    error,
  };
}

export default useFetch1;
