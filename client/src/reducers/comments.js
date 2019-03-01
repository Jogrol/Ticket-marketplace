import {COMMENTS_FETCHED, ADD_COMMENT_SUCCES} from '../actions/comments'

export default function (state = null, action) {
    switch(action.type) {
        case COMMENTS_FETCHED:
            return action.comments
        case ADD_COMMENT_SUCCES:
            return action.comment
        default:
            return state;    
    }
}