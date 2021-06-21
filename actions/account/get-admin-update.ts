/* eslint-disabasync le consistent-return */
import api from '../../utils/api'

export default async function getAdminToUpdate(email: string) {
  try {
    const res = await api.get(`/admins/public/${email}`)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
