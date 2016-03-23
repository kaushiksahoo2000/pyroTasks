import Axios from 'axios'

const ROOT_URL = 'http://localhost:8080'

export function signup () {
  const request = Axios.get(`${ROOT_URL}/signup`)
  return {
    type: "SIGNUP",
    payload: request
  }
}

export function login () {
  const request = Axios.get(`${ROOT_URL}/login`)
  return {
    type: "LOGIN",
    payload: request
  }
}
