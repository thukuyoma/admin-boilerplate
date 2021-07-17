import { useRouter } from 'next/router'
import React from 'react'
import ActionButton from '../../buttons/ActionButton'

export default function EditBookingButton({ bookingId }) {
  const router = useRouter()
  return (
    <ActionButton
      block
      title="Edit Booking"
      onClick={() => router.push(`/bookings/update/${bookingId}`)}
      align="left"
    />
  )
}
