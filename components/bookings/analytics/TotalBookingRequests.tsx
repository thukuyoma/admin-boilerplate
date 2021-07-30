import { IconBook } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import bookingRequestsCount from '../../../actions/bookings/analytics/booking-requests-count'
import kFormatter from '../../../utils/k-formatter'
import CountFive from '../../analytics/counters/CountFIve'

export default function TotalBookingRequest() {
  const { isLoading, data, isSuccess } = useQuery('booking requests count', bookingRequestsCount)
  return (
    <>
      <CountFive
        itemCount={kFormatter(data, 2)}
        itemName="Total Booking Request"
        icon={<IconBook width={20} color="#e3713c" strokeWidth={2} />}
      />
    </>
  )
}
