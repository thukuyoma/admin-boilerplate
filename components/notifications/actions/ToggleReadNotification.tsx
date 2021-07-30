import Loader from 'react-loader-spinner'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import toggleReadPublicAdminNotification from '../../../actions/notifications/toggle-read-public-admin-notification'
import styled from 'styled-components'

const Styles = styled.div`
  display: inline;
  font-size: 12px;
  color: #0098db;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`
export default function ToggleReadNotification({ isRead, refetch, notificationId }) {
  const { mutateAsync, isLoading } = useMutation(toggleReadPublicAdminNotification)
  const handleSubmit = async () => {
    await mutateAsync(notificationId, {
      onError: (err) => {
        toast.error(err)
      },
      onSuccess: (data) => {
        toast.success(data)
        refetch()
      },
    })
  }
  return (
    <Styles onClick={handleSubmit}>
      {!isRead ? 'Mark As Read' : 'Mark As Unread'}
      {isLoading && (
        <Loader style={{ marginLeft: '5px' }} type="Oval" color="black" height={15} width={15} />
      )}
    </Styles>
  )
}
