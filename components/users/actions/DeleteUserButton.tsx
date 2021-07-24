import { IconTrash } from '@tabler/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deleteUser from '../../../actions/users/delete-user'
import IconButton from '../../buttons/IconButton'

export default function DeleteUserButton({
  userId,
  refetch,
}: {
  userId: string
  refetch: () => void
}) {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation([userId], deleteUser)
  const handleSubmit = async () => {
    if (!userId) {
      return null
    }
    await mutateAsync(userId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: (data) => {
        toast.success(data)
        refetch()
      },
    })
    return null
  }
  return (
    <IconButton
      style={{ marginRight: 30 }}
      block
      onClick={handleSubmit}
      loading={isLoading}
      size="medium"
      color="danger"
    >
      <IconTrash />
    </IconButton>
  )
}
