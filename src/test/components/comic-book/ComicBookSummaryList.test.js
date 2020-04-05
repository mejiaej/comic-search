import React from 'react';
import { shallow } from 'enzyme';
import ComicBookSummaryList from '../../../components/common/comic-book/ComicBookSummaryList';
import ComicBookSummary from '../../../components/common/comic-book/ComicBookSummary';
import { COMICBOOK_PATH } from '../../../config/paths';

const mockPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}));

describe('<ComicBookSummaryList />', () => {
  const props = {
    comicBooks: [
      {
        name: 'Name test 2019',
        owner: 'Owner test 2019',
        writer: 'Writer test 2019',
        image: 'https://test.test/file-2019.svg',
        rating: 5,
        summary: 'summary 2019',
      },
      {
        name: 'Name test 2018',
        owner: 'Owner test 2018',
        writer: 'Writer test 2018',
        image: 'https://test.test/file-2018.svg',
        rating: 3,
        summary: 'summary 2018',
      },
    ],
  };

  it('renders successfully', () => {
    const component = shallow(<ComicBookSummaryList {...props} />);
    expect(component.find('Container').length).toBe(1);

    const comicBookSummaries = component.find(ComicBookSummary);
    expect(comicBookSummaries.length).toBe(2);
    comicBookSummaries.forEach((comicBookSummary, index) => {
      expect(comicBookSummary.prop('name')).toBe(props.comicBooks[index].name);
      expect(comicBookSummary.prop('owner')).toBe(
        props.comicBooks[index].owner,
      );
      expect(comicBookSummary.prop('coverSrc')).toBe(
        props.comicBooks[index].image,
      );
    });
  });

  it('handles onClick history push', () => {
    // test history.push function when clicking on ComicBookSummary
    const component = shallow(<ComicBookSummaryList {...props} />);
    const comicBookSummaries = component.find(ComicBookSummary);

    comicBookSummaries.forEach((comicBookSummary, index) => {
      comicBookSummary.simulate('click');
      expect(mockPush).toHaveBeenCalledTimes(index + 1);
      expect(mockPush).toHaveBeenCalledWith({
        pathname: COMICBOOK_PATH,
        state: props.comicBooks[index],
      });
    });
  });
});
