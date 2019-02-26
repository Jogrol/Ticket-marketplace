import {combineReducers} from 'redux'
import events from './events'
import signIn from './signIn'
import currentUser from './currentUser'
import failed_login from './failed_login'

export default combineReducers({
  currentUser,
  events,
  signIn,
  failed_login
})