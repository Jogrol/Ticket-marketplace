import {USER_SIGNIN_SUCCESFULL, USER_SIGNIN_FAILED} from '../actions/users'

export default function (state = {}, {type, payload}) {

	switch(type) {
    case USER_SIGNIN_SUCCESFULL:
      return {
        success: true
      }

    case USER_SIGNIN_FAILED:
      return {errorMessage: payload}
		default:
      return state
	}
}