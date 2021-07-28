import api from '../../../utils/api'

export default async function blogsCount() {
  try {
    const res = await api(`/blogs/analytics/blogs-count`)
    return res.data.blogsCount
  } catch (err) {
    throw err.response.data.msg
  }
}
