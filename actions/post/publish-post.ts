import api from '../../utils/api'

export default async function publishPost(postId: string) {
  try {
    const res = await api.put(`/blogs/${postId}/toggle-publish`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
