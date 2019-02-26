import {EVENTS_FETCHED, ADD_EVENT_SUCCES} from '../actions/events'

export default function (state = null, action) {
    switch(action.type) {
        case EVENTS_FETCHED:
            return action.events
        case ADD_EVENT_SUCCES:
            return [
                ...state,
                action.event
            ]
        default:
            return state;    
    }
}