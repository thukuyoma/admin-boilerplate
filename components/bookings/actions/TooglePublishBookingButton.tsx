import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import togglePublish from '../../../actions/bookings/toggle-publish'
import ActionButton from '../../buttons/ActionButton'

export default function TooglePublishBookingButton({ bookingId, refetch, isPublished }) {
  const { mutateAsync, isLoading } = useMutation([bookingId], togglePublish)
  const handleSubmit = async () => {
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
      title={isPublished ? 'Unpublish Booking' : 'Publish Booking'}
      onClick={handleSubmit}
      loading={isLoading}
      align="left"
    />
  )
}
