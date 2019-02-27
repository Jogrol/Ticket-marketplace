import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const TICKET_FETCHED = "TICKET_FETCHED"

const ticketFetched = ticket => ({
    type: TICKET_FETCHED,
    ticket
  })

export const loadTicket = (id) => dispatch => {
    console.log("loadTIcketRequest")
    request
    .get(`${baseUrl}/ticket/${id}`)
        .then(response => {
            dispatch(ticketFetched(response.body)
        )})
    .catch(console.error)
    }