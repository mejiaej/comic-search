import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import {
  COMIC_BOOK_INITIAL_STATE,
  GET_COMIC_BOOKS_RESPONSE,
} from '../../fixtures/ComicBookFixtures';
import {
  GET_ALL_COMICBOOKS,
  SET_COMICBOOKS_CATEGORY,
} from '../../../redux/actions/action-types';
import {
  getAllComicBooks,
  setComicBooksCategory,
} from '../../../redux/actions/ComicBookActions';
import { COMIC_BOOK_CATEGORIES } from '../../../config/constants';

const middlewares = [thunk, ReduxPromise];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');
describe('ComicBookActions', () => {
  it('getAllComicBooks', () => {
    const store = mockStore(COMIC_BOOK_INITIAL_STATE);
    const expectedActions = [
      {
        type: GET_ALL_COMICBOOKS,
        payload: GET_COMIC_BOOKS_RESPONSE,
      },
    ];

    // mock axios response
    const response = { data: GET_COMIC_BOOKS_RESPONSE };
    axios.get.mockResolvedValue(response);

    return store.dispatch(getAllComicBooks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('setComicBooksCategory', () => {
    const expectedActions = [
      {
        type: SET_COMICBOOKS_CATEGORY,
        payload: COMIC_BOOK_CATEGORIES.writer.value,
      },
    ];

    const store = mockStore(COMIC_BOOK_INITIAL_STATE);
    store.dispatch(setComicBooksCategory(COMIC_BOOK_CATEGORIES.writer.value));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
