import { useRouter } from 'next/router'
import React from 'react'
import ActionButton from '../../buttons/ActionButton'

export default function EditBlogButton({ scholarshipId }: { scholarshipId: string }) {
  const router = useRouter()
  return (
    <ActionButton
      block
      title="Edit Scholarship"
      onClick={() => router.push(`/scholarships/update/${scholarshipId}`)}
      align="left"
    />
  )
}
