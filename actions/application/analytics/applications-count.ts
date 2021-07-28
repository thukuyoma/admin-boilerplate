import api from '../../../utils/api'

export default async function applicationsCount() {
  try {
    const res = await api(`/applications/analytics/applications-count`)
    return res.data.applicationsCount
  } catch (err) {
    throw err.response.data.msg
  }
}
