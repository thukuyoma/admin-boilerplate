/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function editBooking({ bookingId, formData }) {
  try {
    const res = await api.put(`/bookings/${bookingId}`, formData)
    const { data } = res
    return data.bookingId
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
