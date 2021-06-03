import api from '../../utils/api'

export default async function setHeroPost(postId: string) {
  try {
    const baseUrl = process.env.BASE_URL
    const res = await api.delete(`${baseUrl}/posts/${postId}`)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
