import React from 'react';
import { shallow } from 'enzyme';
import Pill from '../../../components/common/Pill';

describe('<Pill />', () => {
  it('renders a selected Pill', () => {
    const props = {
      selected: true,
      onClick: jest.fn(),
      children: 'test children',
    };

    const styledPill = shallow(<Pill {...props} />).find('StyledPill');
    expect(styledPill.length).toBe(1);
    expect(styledPill.prop('children')).toBe(props.children);
    styledPill.simulate('click');

    // click only works on non selected Pills
    // expect called times equals to 0
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });

  it('renders a non selected Pill', () => {
    const props = {
      onClick: jest.fn(),
      children: 'test children',
    };

    const styledPill = shallow(<Pill {...props} />).find('StyledPill');
    expect(styledPill.length).toBe(1);
    expect(styledPill.prop('children')).toBe(props.children);
    expect(styledPill.prop('selected')).toBe(false);
    styledPill.simulate('click');

    // click only works on non selected Pills
    // expect called times equals to 1
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
