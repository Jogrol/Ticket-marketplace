import request from 'superagent'
import {isExpired} from '../jwt'
import {userLogOut} from './users'
import store from '../store'
const baseUrl = 'http://localhost:4000'


export const EVENTS_FETCHED = "EVENTS_FETCHED"
export const ADD_EVENT_SUCCES = "ADD_EVENT_SUCCES"
export const EVENT_FETCHED = "EVENT_FETCHED"

const eventsFetched = (events) => ({
  type: EVENTS_FETCHED,
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
  if (getState().events) return null
  request(`${baseUrl}/events`)
    .then(response => {
      dispatch(eventsFetched(response.body.upCommingEvents))
    })
    .catch(console.error)
}


export const addEventToDB = (data) => dispatch => {
  const jwt = store.getState().currentUser.jwt
  if (isExpired(jwt)) return dispatch(userLogOut())
  request
    .post(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(addEventSucces(response.body))
    })
    .catch(err => {
      console.log(err)
    })
}

export const loadEvent = (id) => dispatch => {
  if (store.getState().event.id) return null
  request
    .get(`${baseUrl}/event/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}