import {TICKETS_FETCHED, ADD_TICKET_SUCCES} from '../actions/tickets'

export default function (state = null, action) {
    switch(action.type) {
        case TICKETS_FETCHED:
            return action.tickets
        case ADD_TICKET_SUCCES:
            return action.tickets
        default:
            return state;    
    }
}