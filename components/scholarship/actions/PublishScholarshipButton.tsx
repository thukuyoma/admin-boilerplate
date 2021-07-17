import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import publishScholarship from '../../../actions/scholarship/publish-scholarship'
import ActionButton from '../../buttons/ActionButton'

export default function PublishScholarshipButton({ scholarshipId, refetch, isPublished }) {
  const [buttonTitle, setButtonTitle] = useState('')
  useEffect(() => {
    if (isPublished) {
      setButtonTitle('Unpublish')
      return
    }
    setButtonTitle('Publish')
  }, [isPublished])
  const { mutateAsync, isLoading } = useMutation([scholarshipId], publishScholarship, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      refetch()
      toast.success(data)
    },
  })
  const handlePublishPost = async () => {
    if (!scholarshipId) {
      return null
    }
    await mutateAsync(scholarshipId)
    return null
  }
  return (
    <ActionButton
      block
      title={isLoading ? `${buttonTitle}ing Scholarship` : `${buttonTitle} Scholarship`}
      onClick={handlePublishPost}
      loading={isLoading}
      align="left"
    />
  )
}
