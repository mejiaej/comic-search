import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ComicBookSummary from './ComicBookSummary';
import { comicBookPropTypes } from '../../screens/comic-book/propTypes/ComicBookPropTypes';
import { COMICBOOK_PATH } from '../../../config/paths';

const Container = styled.div({
  display: 'flex',
  overflow: 'auto',
});
Container.displayName = 'Container';

const ComicBookSummaryList = ({ comicBooks }) => {
  const history = useHistory();

  const handleSummaryClick = comicBook => {
    // pass selected comicBook trough react router
    history.push({ pathname: COMICBOOK_PATH, state: comicBook });
  };

  return (
    <Container>
      {comicBooks.map(comicBook => (
        <ComicBookSummary
          onClick={() => handleSummaryClick(comicBook)}
          key={comicBook.name}
          name={comicBook.name}
          owner={comicBook.owner}
          coverSrc={comicBook.image}
        />
      ))}
    </Container>
  );
};

ComicBookSummaryList.propTypes = {
  comicBooks: PropTypes.arrayOf(comicBookPropTypes).isRequired,
};

export default ComicBookSummaryList;
