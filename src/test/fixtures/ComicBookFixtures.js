import Immutable from 'immutable';
import { COMIC_BOOK_CATEGORIES } from '../../config/constants';

const COMIC_BOOK_INITIAL_STATE = Immutable.Map({
  currentCategory: COMIC_BOOK_CATEGORIES.year,
  all: Immutable.List(),
  categories: Immutable.Map(),
});

const GET_COMIC_BOOKS_RESPONSE = [
  {
    name: 'The True Story of Banana Man #955',
    writer: 'Donni Marjy',
    artist: 'Nanon Sib',
    publication: 'Lovely Ltd.',
    owner: 'Coffeewalrus',
    rating: 3,
    image: 'https://svgshare.com/i/Joo.svg',
    summary: 'Et ad proident occaecat pariatur sint est duis non',
    year: 2002
  },
  {
    name: 'The Ultimate Banana Thing #588',
    writer: 'Carrissa Agata',
    artist: 'Tim Saree',
    publication: 'Urban Inc.',
    owner: 'Jadecat',
    rating: 3,
    image: 'https://svgshare.com/i/Jmi.svg',
    summary: 'Mollit ad esse enim aute ex quis adipisicing incididunt',
    year: 1980
  }
];

const COMIC_BOOKS_BY_CATEGORY_MAP = {
  2002: [
    {
      name: 'The True Story of Banana Man #955',
      writer: 'Donni Marjy',
      artist: 'Nanon Sib',
      publication: 'Lovely Ltd.',
      owner: 'Coffeewalrus',
      rating: 3,
      image: 'https://svgshare.com/i/Joo.svg',
      summary: 'Et ad proident occaecat pariatur sint est duis non',
      year: 2002
    },
  ],
  1980: [
    {
      name: 'The Ultimate Banana Thing #588',
      writer: 'Carrissa Agata',
      artist: 'Tim Saree',
      publication: 'Urban Inc.',
      owner: 'Jadecat',
      rating: 3,
      image: 'https://svgshare.com/i/Jmi.svg',
      summary: 'Mollit ad esse enim aute ex quis adipisicing incididunt',
      year: 1980
    }
  ],
};


export {
  COMIC_BOOK_INITIAL_STATE,
  GET_COMIC_BOOKS_RESPONSE,
  COMIC_BOOKS_BY_CATEGORY_MAP,
};
