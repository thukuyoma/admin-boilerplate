/* eslint-disabasync le consistent-return */
import api from '../../utils/api'

export default async function userChecker(email: string) {
  try {
    const res = await api.get(`/admins/check-user/${email}`)
    return res.data.user
  } catch (err) {
    throw err.response.data.msg
  }
}
