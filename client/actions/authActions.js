import Axios from 'axios'

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const ROOT_URL = 'http://localhost:8080/api'

export function signup () {
  const request = Axios.get(`${ROOT_URL}/signup`)
  return {
    type: "SIGNUP",
    payload: request
  }
}

export function login (loginData) {
  const request = Axios.post(`${ROOT_URL}/login`, loginData)
  return {
    type: "LOGIN",
    payload: request
  }
}

export function logout () {
  const request = Axios.get(`${ROOT_URL}/logout`)
  return {
    type: "LOGOUT",
    payload: request
  }
}
