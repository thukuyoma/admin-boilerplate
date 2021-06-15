import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { CgCalendarDates } from 'react-icons/cg'
import styled from 'styled-components'
import dateFormatter from '../../utils/date-formatter'
import wordShortener from '../../utils/wordShortener'
import useWindowSize from '../../hooks/useWindowSize'
import capitalizeFirstLetter from '../../utils/capitalize-first-letter'

const Styles = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 20px;
  .booking__image {
    height: 62px;
    width: 62px;
    border-radius: 0px;
    margin-right: 10px;
  }
  .booking-details {
    width: 100%;
  }
  .booking-details__title {
    font-weight: normal;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }
  .booking-details__type {
    margin: 0;
    color: #0c4284;
    font-weight: bold;
  }
  .booking-details__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: gray;
  }
  .booking__Count {
    display: flex;
    place-items: center;
    > * {
      &:first-child {
        margin-right: 5px;
      }
    }
  }
  .booking__read {
    color: #0098db;
    padding: 5px 10px;
    border: 1px solid #e8e8e8;
    border-radius: 23px;
    cursor: pointer;
    :hover {
      color: #fff;
      background: #0098db;
    }
  }
  .booking-counter__wrapper {
    display: flex;
    align-items: center;
    > * {
      &:first-child {
        margin-right: 10px;
      }
    }
  }
`
export default function BookingCard({ booking }) {
  const { width } = useWindowSize()
  const router = useRouter()
  return (
    <Styles>
      <img
        src={booking.bookingImage ? booking.bookingImage.url : '/assets/no-booking-image.png'}
        className="booking__image"
      />
      <div className="booking-details">
        <p className="booking-details__type">{capitalizeFirstLetter(booking.type)}</p>
        <h1 className="booking-details__title">
          {width < 600 ? wordShortener(booking.title, 20) : booking.title}
        </h1>
        <div className="booking-details__wrapper">
          <div className="booking-counter__wrapper">
            <div className="booking__Count">
              <CgCalendarDates />
              {dateFormatter(booking.timestamp)}
            </div>
            <div className="booking__Count">
              <AiOutlineEye />
              10000
            </div>
          </div>
          <span className="booking__read" onClick={() => router.push(`/bookings/${booking._id}`)}>
            View
          </span>
        </div>
      </div>
    </Styles>
  )
}
