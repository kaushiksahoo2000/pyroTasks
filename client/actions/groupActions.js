import Axios from 'axios'

export const FETCH_TASKS = 'FETCH_TASKS'

const ROOT_URL = 'http://localhost:8080/api'

export function fetchTasks (id) {
  const request = Axios.get(`${ROOT_URL}/group/${id}`)
  return {
    type: FETCH_TASKS,
    payload: request
  }
}
