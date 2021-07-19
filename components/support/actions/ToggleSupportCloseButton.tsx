import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import toggleSupportClose from '../../../actions/support/toggle-support-close'
import ActionButton from '../../buttons/ActionButton'

export default function ToggleSupportCloseButton({ ticketId, refetch, isClosed }) {
  const { mutateAsync, isLoading } = useMutation([ticketId], toggleSupportClose, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      refetch()
      toast.success(data)
    },
  })
  const handleSubmit = async () => {
    if (!ticketId) {
      return null
    }
    await mutateAsync(ticketId)
    return null
  }
  return (
    <ActionButton
      block
      title={isClosed ? 'Open Ticket' : 'Close Ticket'}
      onClick={handleSubmit}
      loading={isLoading}
      align="left"
    />
  )
}
