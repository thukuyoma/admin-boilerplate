import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import unPublishPost from '../../../actions/post/unpublish-post'
import ActionButton from '../../shared/ActionButton'

export default function UnPublishBlogButton({ postId, refetch }) {
  const { mutateAsync, isLoading } = useMutation([postId], unPublishPost, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      refetch()
      toast.success(data)
    },
  })
  const handleUnpublishPost = async () => {
    if (!postId) {
      return null
    }
    await mutateAsync(postId)
    return null
  }
  return (
    <ActionButton
      block
      title="Unpublish Post"
      onClick={handleUnpublishPost}
      loading={isLoading}
      align="left"
    />
  )
}
