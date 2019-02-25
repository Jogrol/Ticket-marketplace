
import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const EVENTS_FETCHED = "EVENTS_FETCHED"


const eventsFetched = (events) => (
    { type: EVENTS_FETCHED,
    events
})

export const loadEvents = () => (dispatch, getState) => {
    // when the state already contains events, we don't fetch them again
    if (getState().events) return
  
    // a GET /events request
    request(`${baseUrl}/events`)
      .then(response => { 
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(eventsFetched(response.body.events))
      })
      .catch(console.error)
  }