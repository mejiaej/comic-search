import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPill = styled.div(props => ({
  padding: '10px',
  cursor: 'pointer',
  borderRadius: '19px',
  background: props.selected ? '#F15454' : null,
  color: props.selected ? '#FFFFFF' : '#777777',
  marginRight: '2rem',
  '@media(max-width: 500px)': {
    marginRight: '3px',
    padding: '5px',
  },
}));
StyledPill.displayName = 'StyledPill';

const Pill = ({ selected, onClick, children }) => (
  <StyledPill
    data-cy="pill"
    selected={selected}
    onClick={!selected ? onClick : null}
    role={!selected ? 'button' : null}
    tabIndex={!selected ? 0 : null}
    onKeyDown={e => {
      if (!selected && e.key === 'Enter') onClick();
    }}
    aria-label={children}
  >
    {children}
  </StyledPill>
);

Pill.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Pill.defaultProps = {
  selected: false,
  onClick: null,
};

export default Pill;
