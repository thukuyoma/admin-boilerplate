import api from '../../../utils/api'

export default async function getAllCategories() {
  try {
    const res = await api.get('/blogs/categories/all/all')
    const { categories } = res.data
    return categories
  } catch (err) {
    throw err.response.data.msg
  }
}
