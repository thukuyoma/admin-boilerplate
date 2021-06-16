import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import publishBooking from '../../../actions/bookings/publish-booking'
import ActionButton from '../../shared/ActionButton'

export default function PublishBookingButton({ bookingId, refetch }) {
  const { mutateAsync, isLoading } = useMutation([bookingId], publishBooking)
  const handlePublishBooking = async () => {
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
      title={isLoading ? 'Publishing Booking' : 'Publish Booking'}
      onClick={handlePublishBooking}
      loading={isLoading}
      align="left"
    />
  )
}
