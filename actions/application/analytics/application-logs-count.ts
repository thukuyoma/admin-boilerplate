import api from '../../../utils/api'

export default async function applicationLogsCount() {
  try {
    const res = await api(`/applications/logs/analytics/application-logs-count`)
    return res.data.applicationLogsCount
  } catch (err) {
    throw err.response.data.msg
  }
}
