import api from '../../utils/api'

export default async function forgotPassword({ email, device, ip }) {
  try {
    const res = await api.post(`/users/forgot-password/${email}`, { device, ip })
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
