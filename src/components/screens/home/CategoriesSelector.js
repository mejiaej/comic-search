import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { COMIC_BOOK_CATEGORIES } from '../../../config/constants';
import { setComicBooksCategory } from '../../../redux/actions';
import Pill from '../../common/Pill';

const Container = styled.div({
  display: 'flex',
  margin: '1rem',
  maxWidth: '500px',
});

const CategoriesSelector = () => {
  const currentCategory = useSelector(({ ComicBook }) =>
    ComicBook.get('currentCategory'),
  );
  const dispatch = useDispatch();

  const handleCategoryChange = category => {
    dispatch(setComicBooksCategory(category));
  };

  return (
    <Container>
      {Object.keys(COMIC_BOOK_CATEGORIES).map(category => (
        <Pill
          key={category}
          selected={COMIC_BOOK_CATEGORIES[category].value === currentCategory.value}
          onClick={() =>
            handleCategoryChange(COMIC_BOOK_CATEGORIES[category])
          }
        >
          {COMIC_BOOK_CATEGORIES[category].label}
        </Pill>
      ))}
    </Container>
  );
};
export default CategoriesSelector;
