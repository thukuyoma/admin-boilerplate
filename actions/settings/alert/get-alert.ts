/* eslint-disable consistent-return */
import api from '../../../utils/api'

export default async function getAlert(alertId) {
  try {
    const res = await api(`/alerts/${alertId}`)
    const { data } = res
    return data.alert
  } catch (err) {
    throw err.response.data.msg
  }
}
