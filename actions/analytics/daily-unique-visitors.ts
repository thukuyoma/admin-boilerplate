import api from '../../utils/api'

export default async function dailyUniqueVisitors() {
  try {
    const res = await api(`/analytics/daily-unique-visitors`)
    return res.data.dailyUniqueVisitors
  } catch (err) {
    throw err.response.data.msg
  }
}
