import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deleteUser from '../../../actions/users/delete-user'
import ActionButton from '../../buttons/ActionButton'

export default function DeleteUserButton({ userId }: { userId: string }) {
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
        router.push('/users')
      },
    })
    return null
  }
  return (
    <ActionButton
      block
      title="Delete User"
      onClick={handleSubmit}
      loading={isLoading}
      align="left"
    />
  )
}
