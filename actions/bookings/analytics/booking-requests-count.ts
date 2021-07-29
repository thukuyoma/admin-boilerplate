import api from '../../../utils/api'

export default async function bookingRequestsCount() {
  try {
    const res = await api(`/booking-requests/analytics/booking-requests-count`)
    return res.data.bookingRequestCount
  } catch (err) {
    throw err.response.data.msg
  }
}
