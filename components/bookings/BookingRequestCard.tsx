import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import useWindowSize from '../../hooks/useWindowSize'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import { TagKey, TagKeyValuePair, TagValue } from '../shared/shared-styles'
import { FaUser } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Styles = styled.div`
  flex-wrap: nowrap;
  margin-bottom: 40px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 20px;
  margin-right: 20px;
  .request__title-timestamp {
    font-size: 13px;
    color: #a2a1a1;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .request__timestamp {
    margin-left: 10px;
  }
  .requester__details {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .requester__author,
  .requester__email,
  .requester__phone {
    display: flex;
    align-items: center;
    margin-right: 20px;
    flex-shrink: 0;
    flex-wrap: nowrap;
    margin-bottom: 10px;
  }

  .requester__icon {
    margin-right: 10px;
    color: #0098db;
  }
`
export default function BookingCard({ bookingRequest }) {
  return (
    <Styles>
      <div className="request__title-timestamp">
        <span className="request__title">{capitalizeFirstLetter(bookingRequest.title)} </span>
        <span className="request__timestamp">- {dateFormatter(bookingRequest.timestamp)}</span>
      </div>
      <div className="requester__details">
        <span className="requester__author">
          <FaUser className="requester__icon" />
          {capitalizeFirstLetter(bookingRequest.firstName)}{' '}
          {capitalizeFirstLetter(bookingRequest.lastName)}
        </span>
        <span className="requester__phone">
          <AiFillPhone className="requester__icon" />
          {bookingRequest.telephoneNumber}
        </span>
        <span className="requester__email">
          <MdEmail className="requester__icon" />
          {bookingRequest.email}
        </span>
      </div>
    </Styles>
  )
}
