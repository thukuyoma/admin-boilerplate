import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import publishCategory from '../../../../actions/post/categories/publish-category'
import ActionButton from '../../../buttons/ActionButton'

export default function TogglePublishBlogCategoryButton({ categoryTitle, refetch, isPublished }) {
  const { mutateAsync, isLoading } = useMutation([categoryTitle], publishCategory, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      refetch()
      toast.success(data)
    },
  })
  const handlePublish = async () => {
    if (!categoryTitle) {
      return null
    }
    await mutateAsync(categoryTitle)
    return null
  }
  return (
    <ActionButton
      block
      title={isPublished ? 'Unpublish Category' : 'Publish Category'}
      onClick={handlePublish}
      loading={isLoading}
      align="left"
    />
  )
}
