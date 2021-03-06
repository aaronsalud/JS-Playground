import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

let robot = null;
beforeEach(() => {
    robot = {
        name: 'test',
        email: 'test@test.com'
    };
});

it('expect to render Card Component', () => {
    expect(shallow(<Card robot={robot} />)).toMatchSnapshot();
});