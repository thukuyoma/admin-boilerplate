import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import removeAlert from '../../../../actions/settings/alert/remove-alert'
import ActionButton from '../../../buttons/ActionButton'

export default function RemoveAlertButton({
  alertId,
  isActive,
}: {
  alertId: string
  isActive: boolean
}) {
  const router = useRouter()
  const { mutateAsync, isLoading } = useMutation([alertId], removeAlert)
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
    <>
      {isActive ? (
        <ActionButton
          block
          title="Remove Alert"
          onClick={handleSubmit}
          loading={isLoading}
          align="left"
        />
      ) : null}
    </>
  )
}
