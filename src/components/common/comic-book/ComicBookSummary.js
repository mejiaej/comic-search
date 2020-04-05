import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div({
  marginRight: '5rem',
  maxWidth: '210px',
});
Container.displayName = 'Container';

const ComickBookName = styled.div({
  color: '#CCCCCC',
  fontWeight: 'bold',
});
ComickBookName.displayName = 'ComickBookName';

const OwnerContainer = styled.div({
  color: '#999999',
  display: 'flex',
});
OwnerContainer.displayName = 'OwnerContainer';

const Owner = styled.div({
  color: '#CCCCCC',
  marginLeft: '5px',
});
Owner.displayName = 'Owner';

const ComicBookSummary = ({ name, owner, coverSrc, onClick }) => (
  <Container
    onClick={onClick}
    role="link"
    tabIndex={0}
    onKeyDown={e => {
      if (e.key === 'Enter') onClick();
    }}
    data-cy="comicBookSummaryContainer"
  >
    <img src={coverSrc} alt={`cover of ${name}`} loading="lazy" />
    <ComickBookName data-cy="comicBookName">{name}</ComickBookName>
    <OwnerContainer>
      owned by
      <Owner>{owner}</Owner>
    </OwnerContainer>
  </Container>
);

ComicBookSummary.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  coverSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ComicBookSummary;
