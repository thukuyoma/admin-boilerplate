import api from '../../../utils/api'

export default async function getAllCategories() {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.get(`${baseUrl}/posts/categories`)
    const { categories } = res.data
    return categories
  } catch (err) {
    throw err.response.data.msg
  }
}
