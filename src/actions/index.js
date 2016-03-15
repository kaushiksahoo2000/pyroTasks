import Axios from 'axios'

/**
 * Export all action types here if you want to use the consts in the reducers
 * eg: `export const FETCH_POSTS = 'FETCH_POSTS'`
 */

/**
 * The action types exported above are subscribed to by the reducers.
 * the functions exported below are used by the components themselves.
 */

/* Define a const url that will prepend all api requests */
const ROOT_URL = /* ~ localhost:8080 */

/* Example action creator */
export function /* actionName */() {
  const request = Axios.get(`${ROOT_URL}/` + /* endpoint */)
  return {
    type: /* some const eg: FETCH_POSTS */,
    payload: request /* change this if the action doesn't pass on ajax data */
  }
}
