import api from '../../utils/api'

export default async function deleteLog({
  applicationId,
  applicationLogId,
}: {
  applicationId: string
  applicationLogId: string
}) {
  try {
    const res = await api.delete(`/applications/logs/${applicationId}/${applicationLogId}`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
