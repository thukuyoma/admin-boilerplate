import api from '../../utils/api'

export default async function getAdminNotifications({
  page,
  limit,
}: {
  page: number
  limit: number
}) {
  try {
    const res = await api.get(`/notifications/admin-announcements?page=${page}&limit=${limit}`)
    return res.data
  } catch (err) {
    throw err.response.data.msg
  }
}
