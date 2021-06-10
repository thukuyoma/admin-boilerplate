/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getWriteCategories() {
  try {
    const res = await api(`/blogs/categories/all/all`)
    const { data } = res
    return data.categories
  } catch (err) {
    throw err.response.data.msg
  }
}
