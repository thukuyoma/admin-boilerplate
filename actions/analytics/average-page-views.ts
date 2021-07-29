import api from '../../utils/api'

export default async function averagePageViews() {
  try {
    const res = await api(`/analytics/average-page-views`)
    return res.data.averagePageViews
  } catch (err) {
    throw err.response.data.msg
  }
}
