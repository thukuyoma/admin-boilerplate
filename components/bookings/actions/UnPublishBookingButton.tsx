import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import unPublishBooking from '../../../actions/bookings/unpublish-booking'
import ActionButton from '../../shared/ActionButton'

export default function UnPublishBookingButton({ bookingId, refetch }) {
  const { mutateAsync, isLoading } = useMutation([bookingId], unPublishBooking)
  const handleUnpublishBooking = async () => {
    if (!bookingId) {
      return null
    }
    await mutateAsync(bookingId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: (data) => {
        refetch()
        toast.success(data)
      },
    })
    return null
  }
  return (
    <ActionButton
      block
      title={isLoading ? 'Unpublishing Booking' : 'Unpublish Booking'}
      onClick={handleUnpublishBooking}
      loading={isLoading}
      align="left"
    />
  )
}
