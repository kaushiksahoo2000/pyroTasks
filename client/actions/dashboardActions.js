import Axios from 'axios'

export const FETCH_GROUPS = 'FETCH_GROUPS'
export const CREATE_GROUP = 'CREATE_GROUP'
export const JOIN_GROUP = 'JOIN_GROUP'

const ROOT_URL = 'http://localhost:8080/api'

export function fetchGroups () {
  const request = Axios.get(`${ROOT_URL}/groups`)
  return {
    type: FETCH_GROUPS,
    payload: request
  }
}

export function createGroup (props) {
  const request = Axios.post(`${ROOT_URL}/groups`, props)
  return {
    type: "CREATE_GROUP",
    payload: request
  }
}

export function joinGroup (props) {
  const request = Axios.put(`${ROOT_URL}/group/:groupid`, props)
  return {
    type: "JOIN_GROUP",
    payload: request
  }
}
