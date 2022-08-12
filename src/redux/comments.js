import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state=COMMENTS, action) => {
    console.log(ActionTypes.ADD_COMMENT);
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return [...state, comment]
        default:
            return state;
    }
}