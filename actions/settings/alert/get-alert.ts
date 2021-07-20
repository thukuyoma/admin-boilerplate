/* eslint-disable consistent-return */
import api from '../../../utils/api'

export default async function getAlert(alertId) {
  try {
    console.log('get alert function has been called successfully')
    const res = await api(`/alerts/${alertId}`)
    const { data } = res
    return data.alert
  } catch (err) {
    throw err.response.data.msg
  }
}
