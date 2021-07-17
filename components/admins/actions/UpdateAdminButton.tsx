import { useRouter } from 'next/router'
import React from 'react'
import ActionButton from '../../buttons/ActionButton'

export default function UpdateAdminButton({
  adminId,
  adminToUpdateName,
}: {
  adminId: string
  adminToUpdateName: string
}) {
  const router = useRouter()
  return (
    <ActionButton
      block
      title="Update Admin"
      onClick={() =>
        router.push(`/admins/update/${adminId}?adminToUpdateName=${adminToUpdateName}`)
      }
      align="left"
    />
  )
}
