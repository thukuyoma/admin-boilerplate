import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import blockAdmin from '../../../actions/account/block-admin'
import ActionButton from '../../buttons/ActionButton'

export default function DeleteUsergButton({
  userId,
  refetch,
  isBlocked,
}: {
  userId: string
  refetch: () => void
  isBlocked: boolean
}) {
  const { mutateAsync, isLoading } = useMutation([userId], blockAdmin)
  const handleSubmit = async () => {
    if (!userId) {
      return null
    }
    await mutateAsync(userId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: async (data) => {
        refetch()
        toast.success(data)
      },
    })
    return null
  }
  return (
    <ActionButton
      block
      title={isBlocked ? 'Unblock Admin' : 'Block Admin'}
      onClick={handleSubmit}
      loading={isLoading}
      align="left"
    />
  )
}
