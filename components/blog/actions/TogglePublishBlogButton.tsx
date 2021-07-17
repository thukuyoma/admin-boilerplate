import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import publishPost from '../../../actions/post/publish-post'
import ActionButton from '../../buttons/ActionButton'

export default function TogglePublishBlogButton({ postId, refetch, isPublished }) {
  const { mutateAsync, isLoading } = useMutation([postId], publishPost, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      refetch()
      toast.success(data)
    },
  })
  const handlePublishPost = async () => {
    if (!postId) {
      return null
    }
    await mutateAsync(postId)
    return null
  }
  return (
    <ActionButton
      block
      title={isPublished ? 'Unpublish Post' : 'Publish Post'}
      onClick={handlePublishPost}
      loading={isLoading}
      align="left"
    />
  )
}
