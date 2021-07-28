import api from '../../../utils/api'

export default async function adminsCount() {
  try {
    const res = await api(`/admins/analytics/admins-count`)
    return res.data.adminsCount
  } catch (err) {
    throw err.response.data.msg
  }
}
