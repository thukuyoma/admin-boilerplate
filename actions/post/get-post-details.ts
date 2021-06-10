/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function getPostDetails(slug) {
  try {
    const res = await api(`/blogs/${slug}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
