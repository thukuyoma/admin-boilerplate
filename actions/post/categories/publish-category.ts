import api from '../../../utils/api'

export default async function publishCategory(catgoryTitle: string) {
  try {
    const res = await api.put(`/blogs/categories/${catgoryTitle}/toggle-publish`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
