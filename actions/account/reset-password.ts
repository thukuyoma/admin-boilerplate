/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function resetPassword({ token, password, ip, device }) {
  try {
    const res = await api.post(`/users/reset-password`, { token, password, ip, device })
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
