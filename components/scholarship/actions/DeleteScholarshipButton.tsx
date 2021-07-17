import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deleteScholarship from '../../../actions/scholarship/delete-scholarship'
import ActionButton from '../../buttons/ActionButton'

export default function DeleteScholarshipButton({ scholarshipId }: { scholarshipId: string }) {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation([scholarshipId], deleteScholarship, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      toast.success(data)
      router.push('/scholarships')
    },
  })
  const handleDeletePost = async () => {
    if (!scholarshipId) {
      return null
    }
    await mutateAsync(scholarshipId)
    return null
  }
  return (
    <ActionButton
      block
      title={isLoading ? 'Deleting Scholarship' : 'Delete Scholarship'}
      onClick={handleDeletePost}
      loading={isLoading}
      align="left"
    />
  )
}
