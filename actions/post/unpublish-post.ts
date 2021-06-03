import api from '../../utils/api'

export default async function unPublishPost(postId: string) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.put(`${baseUrl}/posts/unpublish/${postId}`)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
