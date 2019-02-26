import {combineReducers} from 'redux'
import events from './events'
import signIn from './signIn'

export default combineReducers({
  events,
  signIn
})