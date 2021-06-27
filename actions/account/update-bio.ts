import api from '../../utils/api'

export default async function updateBio(bio: string) {
  try {
    const res = await api.put(`/users/update-bio`, { bio })
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
