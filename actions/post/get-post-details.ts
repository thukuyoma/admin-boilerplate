/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getPostDetails(slug) {
  try {
    const clientBaseUrl = process.env.BASE_URL
    const res = await api(`${clientBaseUrl}/posts/details/${slug}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
