import { useRouter } from 'next/router'
import React from 'react'
import ActionButton from '../../buttons/ActionButton'

export default function AdminActivitiesButton({ adminId }: { adminId: string }) {
  const router = useRouter()
  return (
    <ActionButton
      block
      title="Admin Activities"
      onClick={() => router.push(`/admins/activities/${adminId}`)}
      align="left"
    />
  )
}
