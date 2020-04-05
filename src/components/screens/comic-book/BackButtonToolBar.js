import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HOME_PATH } from '../../../config/paths';

const Container = styled.div({
  padding: '2rem 1rem 1rem',
  '@media(max-width: 500px)': {
    padding: '1rem 1rem',
  },
});

const StyledLink = styled(Link)({
  color: '#777777',
});

const BackImage = styled.img({
  marginRight: '5px',
});

const BackButtonToolBar = () => (
  <Container>
    <StyledLink data-cy="backLink" to={HOME_PATH}>
      <BackImage
        src={`${process.env.PUBLIC_URL}/assets/SVG/BackIcon.svg`}
        alt="back to collection button"
      />
      Back to collection
    </StyledLink>
  </Container>
);

export default BackButtonToolBar;
