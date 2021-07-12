import api from '../../../utils/api'

export default async function getCategory(catagoryTitle: string) {
  try {
    const res = await api.get(`/blogs/categories/${catagoryTitle}`)
    const { category } = res.data
    return category
  } catch (err) {
    throw err.response.data.msg
  }
}
