import { useRouter } from 'next/router'
import React from 'react'
import ActionButton from '../../../buttons/ActionButton'

export default function EditBlogCatogryButton({ categoryTitle }) {
  const router = useRouter()
  return (
    <ActionButton
      block
      title="Edit category"
      onClick={() => router.push(`/blogs/categories/update/${categoryTitle}`)}
      align="left"
    />
  )
}
