import api from '../../utils/api'

export default async function getPublicUser(userId: string) {
  try {
    const res = await api.get(`/users/public-profile/${userId}`)
    const { publicProfile } = res.data
    return publicProfile
  } catch (err) {
    throw err.response.data.msg
  }
}
