import React from 'react';
import { shallow } from 'enzyme';
import Rating from '../../../components/common/Rating';

describe('<Header />', () => {
  it('renders 5 full stars', () => {
    const component = shallow(<Rating score={5} />);
    const stars = component.find('img');
    stars.forEach(star => {
      expect(star.prop('src')).toBe('/assets/SVG/Fullstar.svg');
      expect(star.prop('loading')).toBe('lazy');
      expect(star.prop('alt')).toBe('full star');
    });
  });

  it('renders 5 empty stars', () => {
    const component = shallow(<Rating score={0} />);
    const stars = component.find('img');
    stars.forEach(star => {
      expect(star.prop('src')).toBe('/assets/SVG/Emptystar.svg');
      expect(star.prop('loading')).toBe('lazy');
      expect(star.prop('alt')).toBe('empty star');
    });
  });

  it('renders 3 full stars and 2 empty', () => {
    const component = shallow(<Rating score={3} />);
    const stars = component.find('img');
    stars.forEach((star, index) => {
      if (index < 3) {
        expect(star.prop('src')).toBe('/assets/SVG/Fullstar.svg');
        expect(star.prop('loading')).toBe('lazy');
        expect(star.prop('alt')).toBe('full star');
      } else {
        expect(star.prop('src')).toBe('/assets/SVG/Emptystar.svg');
        expect(star.prop('loading')).toBe('lazy');
        expect(star.prop('alt')).toBe('empty star');
      }
    });
  });
});
