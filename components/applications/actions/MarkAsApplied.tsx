import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import markApplicationAsApplied from '../../../actions/application/mark-application-as-applied'
import ActionButton from '../../buttons/ActionButton'

export default function MarkAsApplied({
  applicationId,
  refetch,
  isApplied,
}: {
  applicationId: string
  refetch: () => void
  isApplied: boolean
}) {
  const { mutateAsync, isLoading } = useMutation([applicationId], markApplicationAsApplied)
  const handleSubmit = async () => {
    if (!applicationId) {
      return null
    }
    await mutateAsync(applicationId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: (data) => {
        toast.success(data)
        refetch()
      },
    })
    return null
  }
  return (
    <ActionButton
      block
      title={isApplied ? 'Mark As Pending' : 'Mark As Applied'}
      onClick={handleSubmit}
      loading={isLoading}
      align="left"
    />
  )
}
