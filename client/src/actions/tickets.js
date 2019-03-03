import request from 'superagent'
import {isExpired} from '../jwt'
import {userLogOut} from './users'
import store from '../store'

const baseUrl = 'http://localhost:4000'

export const TICKETS_FETCHED = "TICKETS_FETCHED"
export const ADD_TICKET_SUCCES = "ADD_TICKET_SUCCES"
export const UPDATE_TICKET_SUCCES ="UPDATE_TICKET_SUCCES"
export const TICKET_FETCHED = "TICKET_FETCHED"

const ticketFetched = ticket => ({
    type: TICKET_FETCHED,
    ticket
  })

const addTicketSucces = (tickets) => ({
    type: ADD_TICKET_SUCCES,
    tickets
})

const updateTicketSucces = (ticket) => ({
    type: UPDATE_TICKET_SUCCES,
    ticket
})

const ticketsFetched = (tickets) => (
    { type: TICKETS_FETCHED,
    tickets
})

export const loadTicket = (id) => dispatch => {
    request
    .get(`${baseUrl}/tickets/${id}`)
        .then(response => {
            dispatch(ticketFetched(response.body)
        )})
    .catch(console.error)
    }



export const addTicketToDB = (data) => dispatch => {
    const jwt = store.getState().currentUser.jwt

    if (isExpired(jwt)) return dispatch(userLogOut())

    const updateData = {
        name: data.name,
        description: data.description,
        image: data.image,
        price: data.price,
        event: data.event,
        user: store.getState().currentUser.user.id
    }
        request
          .post(`${baseUrl}/tickets`)
          .set('Authorization', `Bearer ${jwt}`)
          .send(updateData)
          .then(response => {console.log(response)
            dispatch(addTicketSucces(response.body.tickets))
          })
          .catch(console.error)
      }

export const updateTicket = (id, data) => (dispatch) => {
    const jwt = store.getState().currentUser.jwt

    if (isExpired(jwt)) return dispatch(userLogOut())
    
    const updateData = {
        name: data.name,
        description: data.description,
        image: data.image,
        price: data.price,
        event: data.event,
        user: store.getState().currentUser.user.id
    }
        request
          .put(`${baseUrl}/tickets/${id}`)
          .set('Authorization', `Bearer ${jwt}`)
          .send(updateData)
          .then(response => {
            dispatch(updateTicketSucces(response.body))
          })
          .catch(console.error)
      }


export const loadTickets = () => (dispatch, getState) => {
    if (getState().tickets) return null
    request(`${baseUrl}/tickets`)
      .then(response => { 
        dispatch(ticketsFetched(response.body.tickets))
      })
      .catch(console.error)
  }