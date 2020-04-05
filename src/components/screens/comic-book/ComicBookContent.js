import React from 'react';
import styled from 'styled-components';
import Rating from '../../common/Rating';
import { comicBookPropTypes } from './propTypes/ComicBookPropTypes';

const Container = styled.div({
  display: 'flex',
  '@media(max-width: 500px)': {
    flexDirection: 'column',
  },
});

const CoverImage = styled.div({
  padding: '1rem',
  '@media(max-width: 500px)': {
    padding: '1rem 2rem',
  },
});

const Details = styled.div({
  padding: '1rem 1rem',
});

const Title = styled.div({
  color: '#AAAAAA',
  fontSize: '2rem',
  fontWeight: '500',
  marginRight: '1rem',
});

const Text = styled.div(({ doublePadding }) => ({
  display: 'flex',
  color: '#CCCCCC',
  fontWeight: 'bold',
  margin: doublePadding ? '2rem 0rem' : '1rem 0rem',
}));

const Accent = styled.div({
  color: '#999999',
  marginRight: '5px',
});

const Separator = styled.hr({
  margin: '1rem',
});

const ComicBookContent = ({ comicBook }) => {
  return (
    <>
      <Container data-cy="comicBookContainer">
        <CoverImage>
          <img
            loading="lazy"
            style={{ height: '450px' }}
            src={comicBook.image}
            alt="comicbook cover"
          />
        </CoverImage>
        <Details>
          <Container>
            <Title data-cy="comickBookName">{`${comicBook.name} (${comicBook.year})`}</Title>
            <Rating score={comicBook.rating} />
          </Container>
          <Text data-cy="comickBookWriter">
            <Accent>Writer: </Accent>
            {comicBook.writer}
          </Text>
          <Text data-cy="comickBookArtist">
            <Accent>Artist: </Accent>
            {comicBook.artist}
          </Text>
          <Text data-cy="comickBookPublication">
            <Accent>Publication: </Accent>
            {comicBook.publication}
          </Text>
          <Text data-cy="comickBookOwner">
            <Accent>Owner: </Accent>
            {comicBook.owner}
          </Text>
          <Text doublePadding>{comicBook.summary}</Text>
        </Details>
      </Container>
      <Separator />
    </>
  );
};

ComicBookContent.propTypes = {
  comicBook: comicBookPropTypes.isRequired,
};

export default ComicBookContent;
