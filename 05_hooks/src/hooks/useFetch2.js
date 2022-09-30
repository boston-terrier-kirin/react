import { useState, useEffect } from 'react';

function useFetch2(url, options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const data = await res.json();

          setData(data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };

      fetchData();
    },
    // optionsはobjectなので、依存関係に入れると無限ループする。
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url]
  );

  return {
    data,
    loading,
    error,
  };
}

export default useFetch2;
