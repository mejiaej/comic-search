import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ComicBookContent from './ComicBookContent';
import BackButtonToolBar from './BackButtonToolBar';
import { comicBookPropTypes } from './propTypes/ComicBookPropTypes';
import RandomComicBooks from './RandomComicBooks';
import { HOME_PATH } from '../../../config/paths';

// TODO: find a different way to send/recieve comicBook
// location.state.comicBook doesn't get deleted when refreshing page
const ComicBook = ({ location }) => {
  // if comicBook not found, user navigated manually to the page
  // send to Home
  const history = useHistory();
  if (!location.state) {
    history.replace(HOME_PATH);
    return null;
  }

  // get comicBook passed through react router
  const { state: comicBook } = location;

  return (
    <>
      <BackButtonToolBar />
      <ComicBookContent comicBook={comicBook} />
      <RandomComicBooks />
    </>
  );
};

ComicBook.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      comicBook: comicBookPropTypes.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComicBook;
