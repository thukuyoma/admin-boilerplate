import api from '../../../utils/api'

export default async function getAlerts({ page, limit }: { page: number; limit: number }) {
  try {
    const res = await api.get(`/alerts?limit=${Number(limit)}&page=${Number(page)}`)
    const { alerts } = res.data
    return alerts
  } catch (err) {
    throw err.response.data.msg
  }
}
