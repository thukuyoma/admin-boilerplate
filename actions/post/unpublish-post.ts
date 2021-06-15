import api from '../../utils/api'

export default async function unPublishPost(postId: string) {
  try {
    const res = await api.put(`/blogs/${postId}/unpublish`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
