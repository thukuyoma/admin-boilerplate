import api from '../../utils/api'

export default async function deleteUser(userId: string) {
  try {
    const res = await api.delete(`/users/${userId}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
