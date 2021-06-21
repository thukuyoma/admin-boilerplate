/* eslint-disable consistent-return */
import api from '../../utils/api'
import { setCookie } from './cookies'

export default async function loginAdmin(values) {
  try {
    const res = await api.post('/admins/login', JSON.stringify(values))
    const { token, profile } = res.data
    setCookie('authToken', token)
    return profile
  } catch (err) {
    throw err.response.data.msg
  }
}
