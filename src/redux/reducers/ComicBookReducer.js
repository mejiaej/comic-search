import Immutable from 'immutable';
import _ from 'lodash';
import { COMIC_BOOK_CATEGORIES } from '../../config/constants';
import {
  SET_COMICBOOKS_CATEGORY,
  GET_ALL_COMICBOOKS,
} from '../actions/action-types';

export const generateRandomCategory = () => {
  // generate a random category
  const categories = Object.keys(COMIC_BOOK_CATEGORIES);
  categories.splice(-1, 1);
  return COMIC_BOOK_CATEGORIES[_.sample(categories)];
};

export const getComicBooksMapByCategory = (category, comicBooks) => {
  let currentCategory = category;
  if (currentCategory.value === COMIC_BOOK_CATEGORIES.random.value) {
    currentCategory = generateRandomCategory();
  }
  // populate comicBookMapByCategory object with category as key and
  // its respecting comicBooks as value { category1: [comic1,comic2] }
  const comicBookMapByCategory = {};
  comicBooks.forEach(comicBook => {
    const categoryValue = comicBook[currentCategory.value];
    // if key exists add comicBook to the array
    if (comicBookMapByCategory[categoryValue]) {
      comicBookMapByCategory[categoryValue].push(comicBook);
    } else {
      comicBookMapByCategory[categoryValue] = [comicBook];
    }
  });
  return comicBookMapByCategory;
};

const INITIAL_STATE = Immutable.Map({
  currentCategory: COMIC_BOOK_CATEGORIES.year,
  all: Immutable.List(),
  categories: Immutable.Map(),
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COMICBOOKS: {
      // update all comicBooks and generate ComicBooksMapByCategory
      const comicBooks = action.payload;
      const comicBookMap = getComicBooksMapByCategory(
        state.get('currentCategory'),
        comicBooks,
      );
      return state
        .set('all', Immutable.List(comicBooks))
        .set('categories', Immutable.Map(comicBookMap));
    }
    case SET_COMICBOOKS_CATEGORY: {
      // update category and generate ComicBooksMapByCategory
      const currentCategory = action.payload;
      const comicBookMap = getComicBooksMapByCategory(
        currentCategory,
        state.get('all'),
      );
      return state
        .set('currentCategory', currentCategory)
        .set('categories', Immutable.Map(comicBookMap));
    }
    default:
      return state;
  }
};
