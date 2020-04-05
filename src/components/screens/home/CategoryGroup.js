import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { comicBookPropTypes } from '../comic-book/propTypes/ComicBookPropTypes';
import ComicBookSummaryList from '../../common/comic-book/ComicBookSummaryList';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1rem',
  marginRight: '1rem',
});

const Title = styled.h4({
  color: '#AAAAAA',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '2rem',
});

const CategoryGroup = ({ category, comicBooks }) => {
  return (
    <Container>
      <Title data-cy="categoryTitle">{category}</Title>
      <ComicBookSummaryList comicBooks={comicBooks} />
      <div>
        <hr />
      </div>
    </Container>
  );
};

CategoryGroup.propTypes = {
  category: PropTypes.string.isRequired,
  comicBooks: PropTypes.arrayOf(comicBookPropTypes).isRequired,
};

export default CategoryGroup;
