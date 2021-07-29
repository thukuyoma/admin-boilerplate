import api from '../../utils/api'

export default async function eventActionsPerPage() {
  try {
    const res = await api(`/analytics/event-actions-per-page`)
    return res.data.eventActionsPerPage
  } catch (err) {
    throw err.response.data.msg
  }
}
