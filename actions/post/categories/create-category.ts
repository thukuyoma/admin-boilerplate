import api from '../../../utils/api'

export default async function createCategory(formData) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.post(`${baseUrl}/posts/categories`, formData)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
