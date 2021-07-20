import api from '../../../utils/api'

export default async function deleteAlert(alertId: string) {
  try {
    const res = await api.delete(`/alerts/${alertId}`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
