import api from '../../utils/api'

export default async function getProfile() {
  try {
    const res = await api('/admins/profile')
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
