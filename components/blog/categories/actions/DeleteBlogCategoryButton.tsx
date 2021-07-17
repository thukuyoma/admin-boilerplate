import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deleteCategory from '../../../../actions/post/categories/delete-category'
import ActionButton from '../../../buttons/ActionButton'

export default function DeleteBlogCategoryButton({ categoryTitle }: { categoryTitle: string }) {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation([categoryTitle], deleteCategory, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      toast.success(data)
      router.push('/blogs/categories')
    },
  })
  const handleDelete = async () => {
    if (!categoryTitle) {
      return null
    }
    await mutateAsync(categoryTitle)
    return null
  }
  return (
    <ActionButton
      block
      title="Delete Categories"
      onClick={handleDelete}
      loading={isLoading}
      align="left"
    />
  )
}
