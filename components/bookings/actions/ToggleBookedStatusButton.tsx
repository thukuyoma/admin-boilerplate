import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import toggleIsBooked from '../../../actions/bookings/toggle-booking-request-book-status'
import Button from '../../buttons/Button'

export default function ToggleBookedStatusButton({ isBooked, refetch, bookingRequestId }) {
  const { mutateAsync, isLoading } = useMutation(toggleIsBooked)
  const handleSubmit = async () => {
    await mutateAsync(bookingRequestId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: (data) => {
        refetch()
        toast.success(data)
      },
    })
  }
  return (
    <Button
      title={!isBooked ? 'Mark As Booked' : 'Mark As Pending'}
      color={!isBooked ? 'danger' : 'info'}
      size="small"
      variant="filled"
      align="right"
      loading={isLoading}
      onClick={() => handleSubmit()}
    />
  )
}
