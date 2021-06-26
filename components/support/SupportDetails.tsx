import React from 'react'
import styled from 'styled-components'
import PersonDataDisplay from './PersonDataDisplay'
import { TagKey, TagKeyValuePair, TagValue } from '../shared/shared-styles'
import ReplySupportTicket from './ReplySupportTicket'
import TicketReplies from './TicketReplies'

const Styles = styled.div`
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
        firstName={ticket.requester.firstName}
        lastName={ticket.requester.lastName}
        timestamp={ticket.timestamp}
        email={ticket.requester.email}
        isOpen={ticket.status.isClosed}
        telephone={ticket.requester.telephone}
      />
      <TagKey>Subject</TagKey>
      <p>{ticket.subject}</p>
      <TagKey>Message</TagKey>
      <p>{ticket.message}</p>
      <TicketReplies ticketId={ticket._id} />
    </Styles>
  )
}
