import api from '../../utils/api'
export default async function updateAdmin({
  adminId,
  formData,
}: {
  adminId: string | undefined
  formData: object
}) {
  try {
    const res = await api.put(`/admins/${adminId}`, formData)
    return res.data.adminId
  } catch (err) {
    throw err.response.data.msg
  }
}
