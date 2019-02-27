import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const TICKET_FETCHED = "TICKET_FETCHED"
export const ADD_TICKET_SUCCES = "ADD_TICKET_SUCCES"

const ticketFetched = ticket => ({
    type: TICKET_FETCHED,
    ticket
  })

const addTicketSucces = (ticket) => ({
    type: ADD_TICKET_SUCCES,
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



export const addTicketToDB = (data) => dispatch => {
        console.log(data)
        request
          .post(`${baseUrl}/events`)
          .send(data)
          .then(response => {
            dispatch(addTicketSucces(response.body))
          })
          .catch(console.error)
      }