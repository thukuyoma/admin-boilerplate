import api from '../../utils/api'

export default async function blockUser(adminId: string) {
  try {
    const res = await api.put(`/users/block/${adminId}`)
    const { msg } = res.data
    return msg
  } catch (err) {
    throw err.response.data.msg
  }
}
