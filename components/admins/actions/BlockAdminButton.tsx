import React, { useEffect } from 'react'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import blockAdmin from '../../../actions/account/block-admin'
import ActionButton from '../../buttons/ActionButton'

export default function BlockAdminButton({
  adminId,
  refetch,
  isBlocked,
}: {
  adminId: string
  refetch: () => void
  isBlocked: boolean
}) {
  const { mutateAsync, isLoading } = useMutation([adminId], blockAdmin)
  const [buttonTilte, setButtonTitle] = useState('')
  useEffect(() => {
    if (isBlocked) {
      setButtonTitle('Unblock')
      return null
    }
    setButtonTitle('Block')
    return null
  }, [isBlocked])
  const handleBlockAdmin = async () => {
    if (!adminId) {
      return null
    }
    await mutateAsync(adminId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: async (data) => {
        refetch()
        toast.success(data)
      },
    })
    return null
  }
  return (
    <ActionButton
      block
      title={isLoading ? `${buttonTilte}ing Admin` : `${buttonTilte} Admin`}
      onClick={handleBlockAdmin}
      loading={isLoading}
      align="left"
    />
  )
}
