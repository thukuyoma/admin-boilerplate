import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deleteBooking from '../../../actions/bookings/delete-booking'
import ActionButton from '../../shared/ActionButton'

export default function DeleteBookingButton({ bookingId }: { bookingId: string }) {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation([bookingId], deleteBooking)
  const handleDeletePost = async () => {
    if (!bookingId) {
      return null
    }
    await mutateAsync(bookingId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: (data) => {
        toast.success(data)
        router.push('/bookings')
      },
    })
    return null
  }
  return (
    <ActionButton
      block
      title={isLoading ? 'Deleting Booking' : 'Delete Booking'}
      onClick={handleDeletePost}
      loading={isLoading}
      align="left"
    />
  )
}
