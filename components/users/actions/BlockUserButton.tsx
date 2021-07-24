import { IconUserCheck, IconUserOff } from '@tabler/icons'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import blockUser from '../../../actions/users/block-user'
import IconButton from '../../buttons/IconButton'

export default function DeleteUsergButton({
  userId,
  refetch,
  isBlocked,
}: {
  userId: string
  refetch: () => void
  isBlocked: boolean
}) {
  const { mutateAsync, isLoading } = useMutation([userId], blockUser)
  const handleSubmit = async () => {
    if (!userId) {
      return null
    }
    await mutateAsync(userId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: async (data) => {
        toast.success(data)
        refetch()
      },
    })
    return null
  }
  return (
    <IconButton
      onClick={handleSubmit}
      loading={isLoading}
      size="medium"
      color={isBlocked ? 'primary' : 'warning'}
    >
      {isBlocked ? <IconUserCheck /> : <IconUserOff />}
    </IconButton>
  )
}
