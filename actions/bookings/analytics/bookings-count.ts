import api from '../../../utils/api'

export default async function bookingsCount() {
  try {
    const res = await api(`/bookings/analytics/bookings-count`)
    return res.data.bookingsCount
  } catch (err) {
    throw err.response.data.msg
  }
}
