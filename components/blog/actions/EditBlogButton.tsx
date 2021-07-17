import { useRouter } from 'next/router'
import React from 'react'
import ActionButton from '../../buttons/ActionButton'

export default function EditBlogButton({ slug }) {
  const router = useRouter()
  return (
    <ActionButton
      block
      title="Edit Post"
      onClick={() => router.push(`/blogs/update/${slug}`)}
      align="left"
    />
  )
}
