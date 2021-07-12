import api from '../../../utils/api'

export default async function deleteCategory(categoryTitle: string) {
  try {
    const res = await api.delete(`/blogs/categories/${categoryTitle}`)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
