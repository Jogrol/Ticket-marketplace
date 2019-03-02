import {TICKETS_FETCHED} from '../actions/tickets'

export default function (state = null, action) {
    switch(action.type) {
        case TICKETS_FETCHED:
            return action.tickets
        // case ADD_TICKET_SUCCES:
        //     return [
        //         ...state,
        //         action.event
        //     ]
        default:
            return state;    
    }
}