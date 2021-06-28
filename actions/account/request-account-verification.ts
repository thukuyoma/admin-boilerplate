/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function requestAccountVerification({ email, ip, device }) {
  try {
    const res = await api.put(`/users/request-verification/${email}`, {
      ip,
      device,
    })
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
