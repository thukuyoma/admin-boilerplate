import api from '../../../utils/api'

export default async function removeAlert(alertId: string) {
  try {
    const res = await api.put(`/alerts/remove/${alertId}`)
    const { msg } = res.data
    return msg
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
