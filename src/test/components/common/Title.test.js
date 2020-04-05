import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../../components/common/Title';

describe('<Title />', () => {
  it('renders a h4', () => {
    const children = 'Test';
    const component = shallow(<Title>{children}</Title>);

    expect(component.find('h4').length).toBe(1);
    expect(component.find('h4').prop('children')).toBe(children);
  });
});