import PropTypes from 'prop-types';

export const fishShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  japanese_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flavor_profile: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  taste_profile: PropTypes.shape({
    taste: PropTypes.string.isRequired,
    texture: PropTypes.string.isRequired
  }).isRequired,
  origin: PropTypes.string.isRequired,
  sustainability: PropTypes.string.isRequired,
  nutritional_information: PropTypes.shape({
    calories_per_serving: PropTypes.number.isRequired,
    protein: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
    carbohydrates: PropTypes.string.isRequired
  }).isRequired
});
