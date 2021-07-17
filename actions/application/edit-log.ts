import api from '../../utils/api'

export default async function editLog({
  message,
  applicationId,
  applicationLogId,
}: {
  message: string
  applicationId: string
  applicationLogId: string
}) {
  try {
    const res = await api.put(`/applications/logs/${applicationId}/${applicationLogId}`, {
      message,
    })
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
