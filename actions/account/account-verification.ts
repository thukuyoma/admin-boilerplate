/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function accountVerification({ token, ip, device }) {
  try {
    const res = await api.put(`/users/verification/${token}`, {
      ip,
      device,
    })
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
