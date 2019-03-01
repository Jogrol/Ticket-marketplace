import request from 'superagent'
const baseUrl = 'http://localhost:4000'


export const EVENTS_FETCHED = "EVENTS_FETCHED"
export const ADD_EVENT_SUCCES = "ADD_EVENT_SUCCES"
export const EVENT_FETCHED = "EVENT_FETCHED"

const eventsFetched = (events) => (
    { type: EVENTS_FETCHED,
    events
})

const addEventSucces = (event) => ({
  type: ADD_EVENT_SUCCES,
  event
})

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})

export const loadEvents = () => (dispatch, getState) => {

    // when the state already contains events, we don't fetch them again
    if (getState().events) return null

    // a GET /events request
    request(`${baseUrl}/events`)
      .then(response => {
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(eventsFetched(response.body.upCommingEvents))
      })
      .catch(console.error)
  }


  export const addEventToDB = (data) => dispatch => {
    request
      .post(`${baseUrl}/events`)
      .send(data)
      .then(response => {
        dispatch(addEventSucces(response.body))
      })
      .catch(console.error)
  }

  export const loadEvent = (id) => dispatch => {
    request
    .get(`${baseUrl}/event/${id}`)
        .then(response => { 
            dispatch(eventFetched(response.body)
        )})
    .catch(console.error)
    }