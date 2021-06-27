import api from '../../utils/api'

export default async function changePassword({ oldPassword, newPassword }) {
  try {
    const res = await api.put(`/users/change-password`, { oldPassword, newPassword })
    return res.data.bio
  } catch (err) {
    throw err.response.data.msg
  }
}
