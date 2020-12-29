import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('contains a CommentBox component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('contains a CommentList component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList).length).toEqual(1);
});

