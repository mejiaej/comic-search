import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/common/Header';

describe('<Header />', () => {
  it('renders successfully', () => {
    const component = shallow(<Header />);
    expect(component.find('div').length).toBe(1);
    expect(component.find('img').length).toBe(1);
  });

  it('contains logo', () => {
    const img = shallow(<Header />).find('img');
    expect(img.prop('src')).toEqual('/assets/SVG/Logo.svg');
    expect(img.prop('alt')).toEqual('logo');
    expect(img.prop('loading')).toEqual('lazy');
  });
});
