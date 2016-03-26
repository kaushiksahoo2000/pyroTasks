import Axios from 'axios'

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'

const ROOT_URL = 'http://localhost:8080/api'

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
