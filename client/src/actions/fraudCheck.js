import request from 'superagent'
import store from '../store';
const baseUrl = 'http://localhost:4000'


export const calculateFraudRate = (data) => () => {
  request
    .get(`${baseUrl}/tickets`)
    .then(response => {calculateRiks(response.body.tickets)})
    .catch(console.error)
  }


async function calculateRiks(tickets) {
  const eventsDB = store.getState().events

  console.log(eventsDB)
  // let startRate = 5;
  // Total os tickets sold by user
  const ticketByUser = await tickets.filter(ticket => ticket.user.id === 1)
  console.log("user 1 sold tickets", ticketByUser.length)
  
  //average price event
  //Setp 1 Select and event
  const SingleEvent = await eventsDB.filter(event => event.id === 4)
  console.log("Select an event from the DB", SingleEvent)

  //Step 2 Select all tickets from that event.
  const allTickets = await SingleEvent.map((event) => event.tickets)
  console.log('select all tickets from an Even', allTickets)
  //Step 3 Get average price of an event.
  const avgPrice = await allTickets.reducer((r, cur) => r.price + cur.price, 0)
  console.log(avgPrice)
}

// let filteredData = data.filter(({ gender }) => gender == 'female'),
//     avg = filteredData.reduce((r, c) => r + c.age, 0) / filteredData.length;