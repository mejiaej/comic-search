import React, { useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ComicBookSummaryList from '../../common/comic-book/ComicBookSummaryList';
import Title from '../../common/Title';
import { getAllComicBooks } from '../../../redux/actions';

const Container = styled.div({
  padding: '1rem',
});

const RandomComicBooks = () => {
  const dispatch = useDispatch();
  const comicBooks = useSelector(({ ComicBook }) =>
    ComicBook.get('all'),
  ).toJS();

  // load comic book list if empty due to
  // ComicBook TODO
  useEffect(() => {
    const loadComicBooks = async () => {
      await dispatch(getAllComicBooks());
    };

    if (!comicBooks.length) {
      loadComicBooks();
    }
  });

  const randomComicBooks = _.sampleSize(comicBooks, 6);

  return (
    <Container>
      <Title>Other Random books</Title>
      <ComicBookSummaryList comicBooks={randomComicBooks} />
    </Container>
  );
};

export default RandomComicBooks;
