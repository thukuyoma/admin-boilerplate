import api from '../../utils/api'

export default async function writeLog({
  message,
  applicationId,
}: {
  message: string
  applicationId: string
}) {
  try {
    const res = await api.post(`/applications/${applicationId}/logs`, { message })
    return res.data.msg
  } catch (err) {
    if (err) {
      return err.response.data.msg
    }
  }
}
