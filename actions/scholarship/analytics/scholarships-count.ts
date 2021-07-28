import api from '../../../utils/api'

export default async function scholarshipsCount() {
  try {
    const res = await api(`/scholarships/analytics/scholarships-count`)
    return res.data.scholarshipsCount
  } catch (err) {
    throw err.response.data.msg
  }
}
