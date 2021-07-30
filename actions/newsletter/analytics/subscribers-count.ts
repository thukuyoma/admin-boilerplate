import api from '../../../utils/api'

export default async function subscribersCount() {
  try {
    const res = await api(`/newsletters/analytics/subscribers-count`)
    console.log({ subscribersCount: res.data.subscribersCount })
    return res.data.subscribersCount
  } catch (err) {
    throw err.response.data.msg
  }
}
