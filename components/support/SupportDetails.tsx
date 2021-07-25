import React from 'react'
import styled from 'styled-components'
import PersonDataDisplay from './PersonDataDisplay'
import { TagKey } from '../shared/shared-styles'
import TicketReplies from './TicketReplies'

const Styles = styled.div`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 12px;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  border: 1px solid #ccc;
  padding: 20px;

  .avatar-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    > * {
      &:first-child {
        margin-right: 20px;
      }
    }
  }
  .image-avatar {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
  .admin__name {
    color: black;
    font-size: 16px;
  }
  .admin__tags {
    margin-bottom: 50px;
    > * {
      margin-bottom: 20px;
    }
  }
`
export default function AdminPublicDetails({ ticket }) {
  return (
    <Styles>
      <PersonDataDisplay
        firstName={ticket.createdBy.firstName}
        lastName={ticket.createdBy.lastName}
        timestamp={ticket.timestamp}
        email={ticket.createdBy.email}
        isOpen={ticket.status.isClosed}
        telephone={ticket.createdBy.telephone}
      />
      <TagKey>Subject</TagKey>
      <p>{ticket.subject}</p>
      <TagKey>Message</TagKey>
      <p>{ticket.message}</p>
      <TicketReplies ticketId={ticket._id} />
    </Styles>
  )
}
