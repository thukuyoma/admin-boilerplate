import api from '../../utils/api'

export default async function uniqueVisitorsCount() {
  try {
    const res = await api(`/analytics/total-unique-visitors`)
    return res.data.totalUniqueVisitors
  } catch (err) {
    throw err.response.data.msg
  }
}
