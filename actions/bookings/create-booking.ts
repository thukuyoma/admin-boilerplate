/* eslint-disable consistent-return */
import api from '../../utils/api'

export default async function createBooking(formData) {
  try {
    const res = await api.post('/bookings', formData)
    const { data } = res
    return data.bookingId
  } catch (err) {
    const error = err.response.data.msg
    throw error
  }
}
