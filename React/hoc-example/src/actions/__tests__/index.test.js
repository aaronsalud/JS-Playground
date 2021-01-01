import { addComment } from 'actions';
import { ADD_COMMENT } from 'actions/types';

describe('ADD COMMENT', () => {
    it('has the correct type', () => {
        const action = addComment();
        expect(action.type).toEqual(ADD_COMMENT)
    });

    it('has the correct payload', () => {
        const action = addComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    });
});