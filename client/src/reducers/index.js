import {combineReducers} from 'redux'
import events from './events'
import signIn from './signIn'
import currentUser from './currentUser'
import failed_login from './failed_login'
import event from './event'
import ticket from './ticket'

export default combineReducers({
  currentUser,
  events,
  event,
  signIn,
  failed_login,
  ticket
})