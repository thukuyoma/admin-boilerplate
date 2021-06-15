/* eslint-disable consistent-return */

import api from '../../utils/api'

export default async function editPost({ postId, formData }) {
  try {
    const res = await api.put(`/blogs/${postId}`, formData)
    const { data } = res
    return data.postSlug
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
