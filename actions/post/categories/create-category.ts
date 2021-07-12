import api from '../../../utils/api'

export default async function createCategory(values) {
  try {
    const res = await api.post('blogs/categories', values)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
