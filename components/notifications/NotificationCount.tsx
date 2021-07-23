import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import notificationCount from '../../actions/notifications/notification-count'

const Styles = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  color: red;
  background: #fff;
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
  const { data } = useQuery('notification count', notificationCount)
  return <>{data ? <Styles>{data > 9 ? `9+` : data}</Styles> : null}</>
}