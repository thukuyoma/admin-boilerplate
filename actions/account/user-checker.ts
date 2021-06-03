/* eslint-disabasync le consistent-return */
import api from '../../utils/api'

export default async function userChecker(email: string) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.get(`${baseUrl}/accounts/check-user/${email}`)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
