/* eslint-disable consistent-return */
import api from '../../../utils/api'

export default async function filterByUnPublished(page: number) {
  try {
    const baseUrl = process.env.BASE_URL
    const limit = 10
    const res = await api(
      `${baseUrl}/posts/filters/unpublished?limit=${Number(limit)}&page=${Number(page)}`
    )
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
