import commentsReducer from 'reducers/commentsReducer';
import { ADD_COMMENT } from 'actions/types';

it('handle actions of type ADD_COMMENT', () => {
    const action = {
        type: ADD_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
});
