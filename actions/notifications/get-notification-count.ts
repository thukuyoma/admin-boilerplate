import api from '../../utils/api'

export default async function getNotificationCount() {
  try {
    const res = await api.get('/notifications/admin-announcements/counts')
    return res.data.totalAnnouncements
  } catch (err) {
    throw err.response.data.msg
  }
}
