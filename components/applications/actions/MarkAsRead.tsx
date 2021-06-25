import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import markApplicationAsRead from '../../../actions/application/mark-application-as-read'
import ActionButton from '../../shared/ActionButton'

export default function MarkAsRead({
  applicationId,
  refetch,
  isRead,
}: {
  applicationId: string
  refetch: () => void
  isRead: boolean
}) {
  const { mutateAsync, isLoading } = useMutation([applicationId], markApplicationAsRead)
  const [buttonTitle, setButtonTitle] = useState('')
  useEffect(() => {
    if (isRead) {
      setButtonTitle('Unmark')
      return
    }
    setButtonTitle('Mark')
  }, [isRead])
  const handleReadAppication = async () => {
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
      title={isLoading ? `${buttonTitle}ing Application` : `${buttonTitle} Application`}
      onClick={handleReadAppication}
      loading={isLoading}
      align="left"
    />
  )
}
