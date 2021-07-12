import api from '../../../utils/api'

export default async function updateCategory({ categoryTitle, values }) {
  try {
    const res = await api.put(`/blogs/categories/${categoryTitle}`, values)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
