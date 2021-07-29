import api from '../../utils/api'

export default async function eventViewsPerPage() {
  try {
    const res = await api(`/analytics/event-views-per-page`)
    return res.data.eventViewsPerPage
  } catch (err) {
    throw err.response.data.msg
  }
}
