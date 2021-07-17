import api from '../../utils/api'

export default async function markApplicationAsApplied(applicationId: string) {
  try {
    const res = await api.put(`applications/${applicationId}/toggle-applied`)
    const { msg } = res.data
    return msg
  } catch (err) {
    throw err.response.data.msg
  }
}
