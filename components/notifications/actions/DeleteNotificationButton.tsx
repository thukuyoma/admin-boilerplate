import Loader from 'react-loader-spinner'
import { useRouter } from 'next/router'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import deletePublicAdminNotification from '../../../actions/notifications/delete-public-admin-notification'

import styled from 'styled-components'
const Styles = styled.div`
  display: inline;
  font-size: 12px;
  color: #0098db;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: underline;
    color: red;
  }
`
export default function DeleteNotificationButton({
  notificationId,
  refetch,
}: {
  notificationId: string
  refetch: () => void
}) {
  const { mutateAsync, isLoading } = useMutation([notificationId], deletePublicAdminNotification)
  const handleSubmit = async () => {
    if (!notificationId) {
      return null
    }
    await mutateAsync(notificationId, {
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
    <Styles onClick={handleSubmit}>
      Delete
      {isLoading && (
        <Loader style={{ marginLeft: '5px' }} type="Oval" color="black" height={15} width={15} />
      )}
    </Styles>
  )
}
