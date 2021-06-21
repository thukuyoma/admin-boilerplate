import api from '../../utils/api'

export default async function blockAdmin(adminId: string) {
  try {
    const res = await api.put(`/admins/block/${adminId}`)
    const { msg } = res.data
    return msg
  } catch (err) {
    throw err.response.data.msg
  }
}
