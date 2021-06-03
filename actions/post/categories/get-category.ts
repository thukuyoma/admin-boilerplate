import api from '../../../utils/api'

export default async function getCategory(catagoryTitle: string) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.get(`${baseUrl}/posts/categories/${catagoryTitle}`)
    const { category } = res.data
    return category
  } catch (err) {
    throw err.response.data.msg
  }
}
