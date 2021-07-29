import api from '../../utils/api'

export default async function dailyPageViews() {
  try {
    const res = await api(`/analytics/daily-page-views`)
    return res.data.dailyPageViews
  } catch (err) {
    throw err.response.data.msg
  }
}
