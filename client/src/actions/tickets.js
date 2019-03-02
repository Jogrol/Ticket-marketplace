import request from 'superagent'
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

const addTicketSucces = (ticket) => ({
    type: ADD_TICKET_SUCCES,
    ticket
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
          .send(updateData)
          .then(response => {
            dispatch(addTicketSucces(response.body))
          })
          .catch(console.error)
      }

export const updateTicket = (id, data) => (dispatch) => {
    const updateData = {
        name: data.name,
        description: data.description,
        image: data.image,
        price: data.price,
        event: data.event
        // user: store.getState().currentUser.user.id
    }
        request
          .put(`${baseUrl}/tickets/${id}`)
          .send(updateData)
          .then(response => {
            dispatch(updateTicketSucces(response.body))
          })
          .catch(console.error)
      }


export const loadTickets = () => (dispatch, getState) => {
    // when the state already contains events, we don't fetch them again
    if (getState().tickets) return null

    // a GET /events request
    request(`${baseUrl}/tickets`)
      .then(response => {
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(ticketsFetched(response.body.tickets))
      })
      .catch(console.error)
  }