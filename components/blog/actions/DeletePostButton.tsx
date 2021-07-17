import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deletePost from '../../../actions/post/delete-post'
import ActionButton from '../../buttons/ActionButton'

export default function DeletePostButton({ postId }: { postId: string }) {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation([postId], deletePost, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      toast.success(data)
      router.push('/blogs')
    },
  })
  const handleDeletePost = async () => {
    if (!postId) {
      return null
    }
    await mutateAsync(postId)
    return null
  }
  return (
    <ActionButton
      block
      title={isLoading ? 'Deleting Post' : 'Delete Post'}
      onClick={handleDeletePost}
      loading={isLoading}
      align="left"
    />
  )
}
