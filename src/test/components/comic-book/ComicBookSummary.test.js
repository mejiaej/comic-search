import React from 'react';
import { shallow } from 'enzyme';
import ComicBookSummary from '../../../components/common/comic-book/ComicBookSummary';

describe('<ComicBookSummary />', () => {
  const props = {
    name: 'Name test',
    owner: 'Owner test',
    coverSrc: 'https://test.test/file.svg',
    onClick: jest.fn(),
  };

  it('renders successfully', () => {
    const component = shallow(<ComicBookSummary {...props} />);

    const container = component.find('Container');
    expect(container.length).toBe(1);
    expect(container.find('img').prop('src')).toBe(props.coverSrc);
    expect(container.find('ComickBookName').prop('children')).toBe(props.name);

    const ownerContainer = container.find('OwnerContainer');
    expect(ownerContainer.prop('children')[0]).toBe('owned by');
    expect(ownerContainer.find('Owner').prop('children')).toBe(props.owner);
  });

  it('handles onClick', () => {
    const mockOnClick = jest.fn();
    const component = shallow(
      <ComicBookSummary {...{ ...props, onClick: mockOnClick }} />,
    );
    component.find('Container').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
