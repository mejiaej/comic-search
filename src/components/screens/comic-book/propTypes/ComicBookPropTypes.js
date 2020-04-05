import PropTypes from 'prop-types';

const comicBookPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  writer: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
});

export {
  // eslint-disable-next-line import/prefer-default-export
  comicBookPropTypes,
}