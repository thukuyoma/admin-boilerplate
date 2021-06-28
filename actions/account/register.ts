import api from '../../utils/api'
import { setCookie } from './cookies'

export default async function register({ firstName, lastName, email, password }) {
  try {
    const res = await api.post(`users/register`, { firstName, lastName, email, password })
    const { data } = res
    setCookie('authToken', data.token)
    return data.profile
  } catch (err) {
    throw err.response.data.msg
  }
}
