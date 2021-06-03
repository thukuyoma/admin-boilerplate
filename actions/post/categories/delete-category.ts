import api from '../../../utils/api'

export default async function deleteCategory(catTitle: string) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.delete(`${baseUrl}/posts/categories/${catTitle}`)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
