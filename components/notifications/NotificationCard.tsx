import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import DeleteNotificationButton from './actions/DeleteNotificationButton'
// import ToggleReadNotification from './actions/ToggleReadNotification'

const Styles = styled.div`
  margin: 0 -20px;
  padding: 10px 20px;
  border-top: 1px solid rgb(238, 238, 238);
  :hover {
    background: #e3f2fd;
  }
  p {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.57;
    color: rgb(158, 158, 158);
    display: inline;
    margin-right: 10px;
  }
  .item__card {
    display: flex;
    justify-content: space-between;
  }
  .timestamp {
    font-size: 10px;
  }
  .button {
    display: inline;
    font-size: 12px;
    color: #0098db;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .card__buttons {
    display: inline-flex;
    align-items: center;
  }
`
export default function NotificationCard({ item, refetch }: { item: any; refetch: () => void }) {
  const router = useRouter()
  return (
    <Styles>
      <div className="item__card">
        <small>{item.title}</small>
        <small className="timestamp">{dateFormatter(item.timestamp)}</small>
      </div>
      <p>{capitalizeFirstLetter(item.message)}</p>
      <div className="card__buttons">
        {item.linkButtonText && (
          <div
            className="button"
            onClick={() => router.push(item.link)}
            style={{ marginRight: 10 }}
          >
            {item.linkButtonText}
          </div>
        )}
        <DeleteNotificationButton refetch={refetch} notificationId={item._id} />
        {/* <ToggleReadNotification
          isRead={item.status.isRead}
          refetch={refetch}
          notificationId={item._id}
        /> */}
      </div>
    </Styles>
  )
}
