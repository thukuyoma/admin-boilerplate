/* eslint-disable consistent-return */
import api from '../../utils/api'
import { setCookie } from './cookies'

export default async function loginAdmin(values) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.post(`${baseUrl}/accounts/login`, JSON.stringify(values))
    const { token, profile } = res.data
    setCookie('adminAuthToken', token)
    return profile
  } catch (err) {
    throw err.response.data.msg
  }
}
