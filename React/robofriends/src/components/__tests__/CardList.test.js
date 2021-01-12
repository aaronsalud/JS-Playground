import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../CardList';

let robots = null;
beforeEach(() => {
    robots = [{
        name: 'test',
        email: 'test@test.com'
    },
    {
        name: 'test2',
        email: 'test2@test.com'
    }];
});

it('expect to render CardList Component', () => {
    expect(shallow(<CardList robots={robots}/>)).toMatchSnapshot();
});