import { FETCH_TASKS } from '../actions/groupActions'
import { ADD_TASK } from '../actions/groupActions'
import { FETCH_TASK } from '../actions/taskActions'

const INITIAL_STATE = {all: [], task: null}

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_TASKS:
      return {...state, all: action.payload.data }
    case FETCH_TASK:
      return {...state, task: action.payload.data }
    default:
      return state
  }
}
