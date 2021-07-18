import React from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'
import dateFormatter from '../../utils/date-formatter'
import { useRouter } from 'next/router'
import wordsCapitalizer from '../../utils/words-capitalizer'
import { TagKey, TagTitle, TagDetails } from '../shared/shared-styles'
import ItemStatus from '../shared/ItemStatus'
import BorderPaddingWrapper from '../shared/BorderPaddingWrapper'

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
    border-radius: 5px;
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
    margin-bottom: 40px;
  }
  .booking__type-date {
    margin: 0;
  }
  .booking__creator {
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5px;
  }
  .booking__details {
    margin-left: 10px;
  }
`

export default function BookingDetails({ booking }) {
  const router = useRouter()
  return (
    <Styles>
      <BorderPaddingWrapper padding>
        <div className="booking__wrapper">
          <img
            className="booking__image"
            src={booking.image ? booking.image.url : '/assets/no-booking-image.png'}
          />
          <div className="booking__details">
            <p className="booking__type-date">
              {capitalizeFirstLetter(booking.type)}{' '}
              <span className="booking__timestamp">{dateFormatter(booking.timestamp)}</span>
            </p>
            <ItemStatus statusTitle="Published" status={booking.status.isPublished} />
            <p className="booking__creator">
              <TagKey>Created By:</TagKey>
              {wordsCapitalizer(booking.createdBy.adminFullName)}
            </p>
          </div>
        </div>
        <TagTitle>Title</TagTitle>
        <TagDetails>{capitalizeFirstLetter(booking.title)}</TagDetails>
        <TagTitle>Affilitate Link</TagTitle>
        <TagDetails>{capitalizeFirstLetter(booking.affiliateLink)}</TagDetails>
        <TagTitle>Booking Description</TagTitle>
        <TagDetails>{capitalizeFirstLetter(booking.description)}</TagDetails>
      </BorderPaddingWrapper>
    </Styles>
  )
}
