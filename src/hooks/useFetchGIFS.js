import { useState, useEffect } from 'react';
import { fetchGIFS } from '../components/helpers/fetchGIFS';

export const useFetchGIFS = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchGIFS(category).then((images) => {
      setTimeout(() => {
        setState({
          data: images,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};
