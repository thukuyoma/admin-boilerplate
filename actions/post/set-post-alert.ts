import api from '../../utils/api'

export default async function setPostAlert(postSlug) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.post(`${baseUrl}/settings/alert/${postSlug}`)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
