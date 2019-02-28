import {TICKET_FETCHED, UPDATE_TICKET_SUCCES} from '../actions/tickets'

export default function (state = [], action) {
    switch(action.type) {
        case TICKET_FETCHED:
            return action.ticket
        case UPDATE_TICKET_SUCCES:
            return action.ticket
        default:
            return state;
    }
    
}