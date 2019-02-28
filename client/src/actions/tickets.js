import request from 'superagent'
import store from '../store'
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
    const updateData = {
        name: data.name,
        description: data.description,
        image: data.image,
        price: data.price,
        event: data.event,
        user: store.getState().currentUser.user.id

    }
        console.log(updateData)
        request
          .post(`${baseUrl}/tickets`)
          .send(updateData)
          .then(response => {
            dispatch(addTicketSucces(response.body))
          })
          .catch(console.error)
      }