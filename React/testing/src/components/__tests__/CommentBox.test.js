import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentBox />);
});

afterEach(() => {
    wrapper.unmount();
});

it('has a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

describe('the text area', () => {

    beforeEach(() => {
        // Simulate change event
        wrapper.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapper.update(); // Force component to re render
    });

    it('has a text area that users can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment'); // Expect textarea value prop to contain new value set from change event
    });

    it('should clear the textarea when form is submitted', () => {

        expect(wrapper.find('textarea').prop('value')).toEqual('new comment');

        wrapper.find('form').simulate('submit');
        wrapper.update();

        expect(wrapper.find('textarea').prop('value')).toEqual('');
    });

});

