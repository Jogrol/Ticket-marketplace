import store from '../store'
import request from 'superagent'
const baseUrl = 'http://localhost:4000'
export const EVENTS_FETCHED = "EVENTS_FETCHED"


const eventsFetched = (events) => (
    {
    type: EVENTS_FETCHED,
    events
})

export const loadEvents = () => {
    // when the state already contains events, we don't fetch them again
    // if (getState().events) return
  
    // a GET /events request
    request(`${baseUrl}/events`)
      .then(response => { 
        // dispatch an EVENTS_FETCHED action that contains the events
        store.dispatch(eventsFetched(response.body.events))
      })
      .catch(console.error)
  }

// export const loadAds = () => (dispatch : any, getState: any) => {
//     // when the state already contains events, we don't fetch them again
//     if (getState().events) return
  
//     // a GET /events request
//     request(`${baseUrl}/advertisments`)
//       .then(response => {
//         // dispatch an EVENTS_FETCHED action that contains the events
//         dispatch(adsFetched(response.body.advertisements))
//       })
//       .catch(console.error)
//   }