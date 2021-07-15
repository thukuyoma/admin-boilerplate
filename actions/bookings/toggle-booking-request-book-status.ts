import api from '../../utils/api'

export default async function toggleIsBooked(bookingRequestId: string) {
  try {
    const res = await api.put(`/booking-requests/${bookingRequestId}/toggle-booked`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
