import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import getNotificationCount from '../../actions/notifications/get-notification-count'
import useGlobalState from '../../context/global'

const Styles = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  color: #f4863a;
  font-weight: 500;
  font-size: 12px;
  font-weight: 500;
  width: 18px;
  height: 18px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default function NotificationCount() {
  const { notificationCount, setNotificationCount } = useGlobalState()

  useQuery('notification count', getNotificationCount, {
    onSuccess: (data) => {
      setNotificationCount(data)
    },
  })
  return (
    <>
      {notificationCount ? (
        <Styles>{notificationCount > 99 ? `99+` : notificationCount}</Styles>
      ) : null}
    </>
  )
}
