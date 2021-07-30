import api from '../../utils/api'

export default async function deletePublicAdminNotification(notificationId: string) {
  try {
    const res = await api.delete(`/notifications/admin-announcements/${notificationId}/delete`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
