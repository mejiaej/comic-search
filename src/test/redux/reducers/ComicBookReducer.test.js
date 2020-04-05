import Immutable from 'immutable';
import comicBookReducer, {
  getComicBooksMapByCategory,
  generateRandomCategory,
} from '../../../redux/reducers/ComicBookReducer';
import { COMIC_BOOK_CATEGORIES } from '../../../config/constants';
import {
  COMIC_BOOK_INITIAL_STATE,
  GET_COMIC_BOOKS_RESPONSE,
  COMIC_BOOKS_BY_CATEGORY_MAP,
} from '../../fixtures/ComicBookFixtures';
import {
  GET_ALL_COMICBOOKS,
  SET_COMICBOOKS_CATEGORY,
} from '../../../redux/actions/action-types';

describe('ComicBookReducer', () => {
  describe('test state', () => {
    it('returns initial state', () => {
      expect(comicBookReducer(undefined, {})).toEqual(COMIC_BOOK_INITIAL_STATE);
    });

    it('handles GET_ALL_COMICBOOKS', () => {
      const action = {
        type: GET_ALL_COMICBOOKS,
        payload: GET_COMIC_BOOKS_RESPONSE,
      };
      const state = comicBookReducer(undefined, action);
      expect(state.get('all')).toEqual(Immutable.List(action.payload));
      // validate comic books map by category
      expect(state.get('categories')).toEqual(
        Immutable.Map(
          getComicBooksMapByCategory(
            state.get('currentCategory'),
            state.get('all'),
          ),
        ),
      );
    });

    it('handles SET_COMICBOOKS_CATEGORY', () => {
      const action = {
        type: SET_COMICBOOKS_CATEGORY,
        payload: COMIC_BOOK_CATEGORIES.writer.value,
      };

      const state = comicBookReducer(undefined, action);
      expect(state.get('currentCategory')).toEqual(action.payload);
      // validate comic books map by category
      expect(state.get('categories')).toEqual(
        Immutable.Map(
          getComicBooksMapByCategory(
            state.get('currentCategory'),
            state.get('all'),
          ),
        ),
      );
    });
  });

  describe('test functions', () => {
    it('generateRandomCategory', () => {
      const randomCategory = generateRandomCategory();
      expect(
        Object.values(COMIC_BOOK_CATEGORIES).includes(randomCategory),
      ).toEqual(true);
    });

    it('getComicBooksMapByCategory', () => {
      const comicBookMapByCategory = getComicBooksMapByCategory(
        COMIC_BOOK_CATEGORIES.year,
        GET_COMIC_BOOKS_RESPONSE,
      );
      expect(comicBookMapByCategory).toEqual(COMIC_BOOKS_BY_CATEGORY_MAP);
    });
  });
});
