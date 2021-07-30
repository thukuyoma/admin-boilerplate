import api from '../../utils/api'

export default async function toggleReadPublicAdminNotification(notificationId: string) {
  try {
    const res = await api.put(`/notifications/admin-announcements/${notificationId}/toggle-read`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
