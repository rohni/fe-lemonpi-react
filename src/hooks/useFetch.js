import { useEffect } from 'react';

const useFetch = (getter, setter, url) => {
  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          setter({ data: getter.data, error: true, loading: false });
        } else {
          const json = await response.json();
          setter({ data: json, error: false, loading: false });
        }
      })
      .catch((error) => {
        setter({ data: getter.data, error: true, loading: false });
      });
  }, []);
};

export default useFetch;
