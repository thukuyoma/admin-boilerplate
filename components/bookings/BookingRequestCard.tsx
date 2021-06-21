import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import useWindowSize from '../../hooks/useWindowSize'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import { TagKey, TagKeyValuePair, TagValue } from '../shared/shared-styles'

const Styles = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 20px;
  margin-right: 20px;
`
export default function BookingCard({ bookingRequest }) {
  const { width } = useWindowSize()
  const router = useRouter()
  return (
    <Styles>
      <div></div>
      <div>
        <TagKeyValuePair>
          <TagKey>Booking Title:</TagKey>
          <TagValue>{capitalizeFirstLetter(bookingRequest.title)}</TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Requesters Fullnames:</TagKey>
          <TagValue>
            {capitalizeFirstLetter(bookingRequest.firstName)}{' '}
            {capitalizeFirstLetter(bookingRequest.lastName)}
          </TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Requesters Telephone:</TagKey>
          <TagValue>{bookingRequest.telephoneNumber}</TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Requesters Email:</TagKey>
          <TagValue>{bookingRequest.email}</TagValue>
        </TagKeyValuePair>
        <TagKeyValuePair>
          <TagKey>Date Requested:</TagKey>
          <TagValue>{dateFormatter(bookingRequest.timestamp)}</TagValue>
        </TagKeyValuePair>
      </div>
    </Styles>
  )
}
