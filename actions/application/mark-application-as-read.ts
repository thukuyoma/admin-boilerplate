import api from '../../utils/api'

export default async function markApplicationAsRead(applicationId: string) {
  try {
    const res = await api.put(`applications/${applicationId}/mark-read`)
    const { msg } = res.data
    return msg
  } catch (err) {
    throw err.response.data.msg
  }
}
