import api from '../../../utils/api'

export default async function supportsCount() {
  try {
    const res = await api(`/supports/analytics/supports-count`)
    return res.data.supportsCount
  } catch (err) {
    throw err.response.data.msg
  }
}
