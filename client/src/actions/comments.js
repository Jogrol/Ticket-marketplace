import request from 'superagent'
import store from '../store'
import {isExpired} from '../jwt'
import {userLogOut} from './users'

const baseUrl = 'http://localhost:4000'

export const UPDATE_COMMENTS_TICKET = "UPDATE_COMMENTS_TICKET"

const addCommentToTicket = (ticket) => ({
    type: UPDATE_COMMENTS_TICKET,
    ticket
})

export const addCommentToDB = (data) => dispatch => {
    const jwt = store.getState().currentUser.jwt

    if (isExpired(jwt)) return dispatch(userLogOut())

    const updateData = {
        comment: data.comment,
        ticket: store.getState().ticket.id,
        user: store.getState().currentUser.user.id
    }
    request
        .post(`${baseUrl}/comments`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(updateData)
        .then(response => {
            dispatch(addCommentToTicket(response.body))
        })
        .catch(err => console.error(err))
}