import { FETCH_GROUPS } from '../actions/dashboardActions'

const INITIAL_STATE = {all: [], group: null}

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_GROUPS:
      return {...state, all: action.payload.data }
    default:
      return state
  }
}
