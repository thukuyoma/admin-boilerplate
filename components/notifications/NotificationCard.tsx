import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import Button from '../buttons/Button'

const Styles = styled.div`
  margin: 0 -20px;
  padding: 10px 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgb(238, 238, 238);
  :hover {
    background: #e3f2fd;
  }
  p {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.57;
    color: rgb(158, 158, 158);
  }
  .item__card {
    display: flex;
    justify-content: space-between;
  }
`
export default function NotificationCard({ item }) {
  const router = useRouter()
  return (
    <Styles>
      <div className="item__card">
        <small>{item.title}</small>
        <small>{dateFormatter(item.timestamp)}</small>
      </div>
      <p>{item.message}</p>
      {item.linkButtonText && (
        <Button
          title={item.linkButtonText}
          onClick={() => router.push(item.link)}
          variant="outlined"
          color="link"
          curved
          size="small"
        />
      )}
    </Styles>
  )
}
