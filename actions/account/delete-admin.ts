import api from '../../utils/api'

export default async function deleteAdmin(adminId: string) {
  try {
    const res = await api.delete(`/admins/${adminId}`)
    const { data } = res
    return data
  } catch (err) {
    throw err.response.data.msg
  }
}
