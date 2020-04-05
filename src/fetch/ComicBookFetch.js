import Axios from 'axios';
import { COMIC_ENDPOINT } from '../config/endpoints';

const getComicBooks = async (searchTerm = null) => {
  let url = COMIC_ENDPOINT;
  if (searchTerm) {
    url = `${url}?q=${searchTerm}`;
  }
  const { data } = await Axios.get(url);

  return data;
};

// eslint-disable-next-line import/prefer-default-export
export { getComicBooks };
