import api from '../../utils/api'

export default async function toggleSupportClose(ticketId: string) {
  try {
    const res = await api.put(`/supports/${ticketId}/toggle-close`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
