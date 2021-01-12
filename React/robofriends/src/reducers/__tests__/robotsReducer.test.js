import robotsReducer from '../robotsReducer';

it('should return the initial state', () => {
    expect(robotsReducer([], {})).toEqual([]);
});