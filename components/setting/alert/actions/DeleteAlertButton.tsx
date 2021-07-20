import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deleteAlert from '../../../../actions/settings/alert/delete-alert'
import ActionButton from '../../../buttons/ActionButton'

export default function DeleteAlertButton({ alertId }: { alertId: string }) {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation([alertId], deleteAlert)
  const handleSubmit = async () => {
    if (!alertId) {
      return null
    }
    await mutateAsync(alertId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: (data) => {
        toast.success(data)
        router.push('/settings/alerts')
      },
    })
    return null
  }
  return (
    <ActionButton
      block
      title="Delete Alert"
      onClick={handleSubmit}
      loading={isLoading}
      align="left"
    />
  )
}
