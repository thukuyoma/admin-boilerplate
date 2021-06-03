/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getAuthor(email) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.get(`${baseUrl}/posts/write/${email}`)
    return res.data
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
