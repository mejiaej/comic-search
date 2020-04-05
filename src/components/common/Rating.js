import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
Container.displayName = 'div';

const Img = styled.img({
  marginRight: '5px',
});
Img.displayName = 'img';

const Rating = ({ score }) => {
  return (
    <Container>
      {_.times(5, i => {
        if (i < score) {
          return (
            <Img
              loading="lazy"
              key={i}
              src={`${process.env.PUBLIC_URL}/assets/SVG/Fullstar.svg`}
              alt="full star"
            />
          );
        }

        return (
          <Img
            loading="lazy"
            key={i}
            src={`${process.env.PUBLIC_URL}/assets/SVG/Emptystar.svg`}
            alt="empty star"
          />
        );
      })}
    </Container>
  );
};

Rating.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Rating;
