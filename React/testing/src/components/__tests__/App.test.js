import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('contains a CommentBox component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('contains a CommentList component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList).length).toEqual(1);
});

