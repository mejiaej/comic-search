import { getComicBooks } from '../../fetch/ComicBookFetch';
import { SET_COMICBOOKS_CATEGORY, GET_ALL_COMICBOOKS } from './action-types';

const getAllComicBooks = async (searchTerm = null) => async dispatch => {
  const comicBooks = await getComicBooks(searchTerm);
  dispatch({
    type: GET_ALL_COMICBOOKS,
    payload: comicBooks,
  });
};

const setComicBooksCategory = category => dispatch =>
  dispatch({
    type: SET_COMICBOOKS_CATEGORY,
    payload: category,
  });

export { getAllComicBooks, setComicBooksCategory };
