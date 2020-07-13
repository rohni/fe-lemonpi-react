import { useEffect } from 'react';

const useFetch = (getter, setter, url) => {
  useEffect(() => {
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          console.log('request completed, but status not okay');
          setter({ data: getter.data, error: true, loading: false });
        } else {
          const json = await response.json();
          console.table(json);
          setter({ data: json, error: false, loading: false });
        }
      })
      .catch((error) => {
        console.log('We had a network error', error);
        setter({ data: getter.data, error: true, loading: false });
      });
  }, []);
};

export default useFetch;
