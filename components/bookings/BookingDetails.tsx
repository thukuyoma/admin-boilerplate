import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import { useRouter } from 'next/router'
import wordsCapitalizer from '../../utils/words-capitalizer'
import { TagKeyValuePair, TagKey, TagValue, TagTitle, TagDetails } from '../shared/shared-styles'

const Styles = styled.div`
  margin-bottom: 30px;
  .booking__title {
    font-size: 16px;
    line-height: 27px;
    color: #0c4284;
    margin: 0;
    font-weight: 600;
  }
  .booking__image {
    width: 80px;
    height: 80px;
    position: relative;
    flex-shrink: 0;
  }
  .booking__timestamp {
    font-size: 13px;
    line-height: 200.4%;
    color: #c4c4c4;
    margin-left: 20px;
  }

  .booking__wrapper {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 20px;
  }
  .booking__section {
    margin-left: 10px;
  }
  .booking__type {
    margin: 0;
  }
  @media (max-width: 600px) {
    .booking__image {
      width: 100%;
      height: 200px;
    }
    .booking__wrapper {
      display: flex;
      flex-direction: column;
    }
    .booking__section {
      margin-left: 0px;
      margin-top: 20px;
    }
  }
`

export default function BookingDetails({ booking }) {
  const router = useRouter()
  return (
    <Styles>
      <div className="booking__wrapper">
        <div className="booking__image">
          {
            <Image
              src={booking.bookingImage ? booking.bookingImage.url : '/assets/no-booking-image.png'}
              layout="fill"
            />
          }
        </div>
      </div>
      <TagKeyValuePair>
        <TagKey>Booking Type:</TagKey>
        <TagValue>{capitalizeFirstLetter(booking.type)}</TagValue>
      </TagKeyValuePair>

      <TagKeyValuePair>
        <TagKey>Booking Title:</TagKey>
        <TagValue>{capitalizeFirstLetter(booking.title)}</TagValue>
      </TagKeyValuePair>
      <TagKeyValuePair>
        <TagKey>Date Created:</TagKey>
        <TagValue>{dateFormatter(booking.timestamp)}</TagValue>
      </TagKeyValuePair>

      <TagKeyValuePair>
        <TagKey>Created By:</TagKey>
        <TagValue
          style={{ cursor: 'pointer' }}
          onClick={() => router.push(`/admins/${booking.createdBy.adminId}`)}
        >
          {wordsCapitalizer(booking.createdBy.adminFullName)}
        </TagValue>
      </TagKeyValuePair>
      <TagKeyValuePair>
        <TagKey>Booking View Count:</TagKey>
        <TagValue>{booking?.viewCount}</TagValue>
      </TagKeyValuePair>
      <TagKeyValuePair>
        <TagKey>Booking Status:</TagKey>
        <TagValue>
          {booking.status.isPublished ? (
            <span style={{ color: '#68da68' }}>Published</span>
          ) : (
            <span style={{ color: '#f90' }}>Not Published</span>
          )}
        </TagValue>
      </TagKeyValuePair>
      <TagTitle>Booking Description</TagTitle>
      <TagDetails>{capitalizeFirstLetter(booking.description)}</TagDetails>
    </Styles>
  )
}
