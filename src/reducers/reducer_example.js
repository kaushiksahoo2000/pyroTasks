/* If necessary, import relevant action types from the actions list */

const INITIAL_STATE = /* some object that describes the initial / empty version of this particular reducer's state */

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case /* action name */:
      /**
       * Note the use of object spread to copy all the properties
       * and then overwrite
       */
      return {...state, /* overwrite other properties here */ }
    default:
      return state
  }
}
