import api from '../../../utils/api'

export default async function updateCategory({ catTitle, formData }) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.put(`${baseUrl}/posts/categories/${catTitle}`, formData)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
