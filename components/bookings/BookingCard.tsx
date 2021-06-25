import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import wordShortener from '../../utils/wordShortener'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 20px;
  margin-right: 20px;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  .booking__image {
    height: 62px;
    width: 62px;
    border-radius: 0px;
    margin-right: 10px;
    border-radius: 5px;
    flex-shrink: 0;
  }
  .booking__wrapper {
    display: flex;
  }
  .booking-details__type {
    margin: 0;
    color: #0c4284;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .button__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: gray;
    flex-shrink: 0;
  }
  .button__read {
    color: #ccc;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 23px;
    cursor: pointer;
    :hover {
      color: #fff;
      background: #0098db;
    }
    @media (max-width: 600px) {
      margin-top: 20px;
    }
  }
  .booking-details__description {
    margin: 0;
    font-size: 14px;
  }
`
export default function BookingCard({ booking }) {
  const router = useRouter()
  return (
    <Styles>
      <div className="booking__wrapper">
        <img
          src={booking.bookingImage ? booking.bookingImage.url : '/assets/no-booking-image.png'}
          className="booking__image"
        />
        <div className="booking__details">
          <p className="booking-details__type">
            {capitalizeFirstLetter(booking.type)}
            <span className="booking__timestamp">{dateFormatter(booking.timestamp)}</span>
          </p>
          <p className="booking-details__description">{wordShortener(booking.description, 20)}</p>
        </div>
      </div>
      <div className="button__wrapper">
        <div className="button__read" onClick={() => router.push(`/bookings/${booking._id}`)}>
          View More
        </div>
      </div>
    </Styles>
  )
}
