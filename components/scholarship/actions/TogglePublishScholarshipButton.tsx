import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import togglePublishScholarship from '../../../actions/scholarship/toggle-publish-scholarship'
import ActionButton from '../../buttons/ActionButton'

export default function TogglePublishScholarshipButton({ scholarshipId, refetch, isPublished }) {
  const [buttonTitle, setButtonTitle] = useState('')
  useEffect(() => {
    if (isPublished) {
      setButtonTitle('Unpublish')
      return
    }
    setButtonTitle('Publish')
  }, [isPublished])
  const { mutateAsync, isLoading } = useMutation([scholarshipId], togglePublishScholarship, {
    onError: (err) => {
      toast.error(err)
    },
    onSuccess: (data) => {
      refetch()
      toast.success(data)
    },
  })
  const handleSubmit = async () => {
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
      onClick={handleSubmit}
      loading={isLoading}
      align="left"
    />
  )
}
