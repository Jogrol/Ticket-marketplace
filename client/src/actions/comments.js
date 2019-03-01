import request from 'superagent'
import store from '../store'
import {isExpired} from '../jwt'
import {userLogOut} from './users'

const baseUrl = 'http://localhost:4000'


export const ADD_COMMENT_SUCCES = "ADD_COMMENT_SUCCES"
// export const COMMENTS_FETCHED = "COMMENTS_FETCHED"
export const UPDATE_COMMENTS_TICKET = "UPDATE_COMMENTS_TICKET"


// const commentsFetched = (comments) => ({
//     type: COMMENTS_FETCHED,
//     comments
// })

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
    console.log('send to db', updateData)
        request
          .post(`${baseUrl}/comments`)
          .set('Authorization', `Bearer ${jwt}`)
          .send(updateData)
          .then(response => {
            dispatch(addCommentToTicket(response.body))
          })
          .catch(err => console.error(err))
      }

// export const loadComments = (id) => (dispatch, getState) => {
//         // const id = getState().ticket.id
//         // console.log(id)
//         // when the state already contains events, we don't fetch them again
//         if (getState().ticket.it) return null
//         // a GET /events request
//         request(`${baseUrl}/comments/${id}`)
//           .then(response => {
//             // dispatch an EVENTS_FETCHED action that contains the events
//             dispatch(commentsFetched(response.body))
//           })
//           .catch(console.error)
//       }