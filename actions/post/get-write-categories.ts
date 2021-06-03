/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getWriteCategories() {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api(`${baseUrl}/posts/categories`)
    const { data } = res
    return data.categories
  } catch (err) {
    throw err.response.data.msg
  }
}
