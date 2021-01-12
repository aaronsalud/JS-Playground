import { SET_ROBOTS } from '../../actions/types';
import robotsReducer from '../robotsReducer';

it('should return the initial state', () => {
    expect(robotsReducer([], {})).toEqual([]);
});