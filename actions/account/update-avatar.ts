import api from '../../utils/api'

export default async function updateAvatar(avatar: { url: string; publicId: string }) {
  try {
    const res = await api.put(`/users/update-avatar`, { avatar })
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
