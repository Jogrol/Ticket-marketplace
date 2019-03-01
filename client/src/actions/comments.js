import request from 'superagent'
import store from '../store'
import { UPDATE_TICKET_SUCCES } from './tickets';
const baseUrl = 'http://localhost:4000'

export const ADD_COMMENT_SUCCES = "ADD_COMMENT_SUCCES"
export const COMMENTS_FETCHED = "COMMENTS_FETCHED"
export const UPDATE_COMMENTS_TICKET = "UPDATE_COMMENTS_TICKET"

const addCommentSucces = (comment) => ({
    type: ADD_COMMENT_SUCCES,
    comment
})

const commentsFetched = (comments) => ({
    type: COMMENTS_FETCHED,
    comments
})

const addCommentToTicket = (ticket) => ({
    type: UPDATE_COMMENTS_TICKET,
    ticket
})

export const addCommentToDB = (data) => dispatch => {
    const updateData = {
        comment: data.comment,
        ticket: store.getState().ticket.id,
        user: store.getState().currentUser.user.id
    }
    console.log('send to db', updateData)
        request
          .post(`${baseUrl}/comments`)
          .send(updateData)
          .then(response => {
            dispatch(addCommentToTicket(response.body))
          })
          .catch(console.error)
      }

export const loadComments = (id) => (dispatch, getState) => {
        // const id = getState().ticket.id
        // console.log(id)
        // when the state already contains events, we don't fetch them again
        if (getState().ticket.it) return null
        // a GET /events request
        request(`${baseUrl}/comments/${id}`)
          .then(response => {
            // dispatch an EVENTS_FETCHED action that contains the events
            dispatch(commentsFetched(response.body))
          })
          .catch(console.error)
      }