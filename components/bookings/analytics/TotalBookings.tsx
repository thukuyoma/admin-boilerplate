import { IconNotebook } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import bookingsCount from '../../../actions/bookings/analytics/bookings-count'
import CountOne from '../../analytics/counters/CountOne'

export default function TotalBookings() {
  const { isLoading, data, isSuccess } = useQuery('total bookings', bookingsCount)
  return (
    <CountOne
      itemCount={data}
      itemName="Bookings"
      icon={<IconNotebook width={20} color="#0baee6" strokeWidth={2} />}
    />
  )
}
