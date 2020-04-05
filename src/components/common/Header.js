import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  backgroundColor: '#535353',
  height: '2rem',
  padding: '1rem',
});
Container.displayName = 'div';

const Header = () => (
  <Container>
    <img
      src={`${process.env.PUBLIC_URL}/assets/SVG/Logo.svg`}
      alt="logo"
      loading="lazy"
    />
  </Container>
);

export default Header;
