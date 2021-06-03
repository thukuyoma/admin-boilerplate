/* eslint-disable consistent-return */

import api from '../../utils/api'

export default async function editPost({ postId, formData }) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.put(`${baseUrl}/posts/update/${postId}`, formData)
    const { data } = res
    return data
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
