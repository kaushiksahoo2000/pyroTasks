import Axios from 'axios'

export const FETCH_GROUPS = 'FETCH_GROUPS'
export const CREATE_GROUP = 'CREATE_GROUP'

const ROOT_URL = 'http://localhost:8080/api'

export function fetchGroups () {
  const request = Axios.get(`${ROOT_URL}/groups`)
  return {
    type: FETCH_GROUPS,
    payload: request
  }
}

export function createGroup () {
  const request = Axios.post(`${ROOT_URL}/creategroup`)
  return {
    type: "CREATE_GROUP",
    payload: request
  }
}
