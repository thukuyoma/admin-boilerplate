import api from '../../utils/api'

export default async function totalPageViews() {
  try {
    const res = await api(`/analytics/total-page-views`)
    return res.data.totalPageViews
  } catch (err) {
    throw err.response.data.msg
  }
}
