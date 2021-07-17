import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deleteAdmin from '../../../actions/account/delete-admin'
import ActionButton from '../../buttons/ActionButton'

export default function DeleteAdminButton({ adminId }: { adminId: string }) {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation([adminId], deleteAdmin)
  const handleDeleteAdmin = async () => {
    if (!adminId) {
      return null
    }
    await mutateAsync(adminId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: (data) => {
        toast.success(data)
        router.push('/admins')
      },
    })
    return null
  }
  return (
    <ActionButton
      block
      title={isLoading ? 'Deleting Admin' : 'Delete Admin'}
      onClick={handleDeleteAdmin}
      loading={isLoading}
      align="left"
    />
  )
}
