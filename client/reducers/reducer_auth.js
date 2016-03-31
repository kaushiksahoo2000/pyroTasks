import { SIGNUP, LOGIN, LOGOUT } from '../actions/authActions'

const INITIAL_STATE = false

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case SIGNUP:
      return true
    case LOGIN:
      return true
    case LOGOUT:
      return false
    default:
      return state
  }
}
