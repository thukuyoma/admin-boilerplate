import React from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayServerError from '../../../components/shared/DisplayServerError'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import EditBooking from '../../../components/bookings/EditBooking'
import getBookingDetails from '../../../actions/bookings/get-booking-details'
import LoadingState from '../../../components/shared/ServerLoadingLoader'

export default function UpdateBookingPage() {
  const router = useRouter()
  const { bookingId } = router.query
  const { data: booking, isSuccess, isError, error, isLoading } = useQuery(
    ['Booking details', bookingId],
    () => getBookingDetails(bookingId)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Edit', url: '', isActive: true },
    { title: 'Bookings', url: '/bookings', isActive: false },
    { title: 'Booking Requests', url: '/bookings/booking-requests', isActive: false },
    { title: 'Create booking', url: '/bookings/create', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Bookings', url: '/bookings' },
    { title: 'Booking Requests', url: '/bookings/booking-requests' },
    { title: 'Create booking', url: '/bookings/create' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Bookings"
            createButtonUrl="/bookings/create"
            createButtonTitle="Create Booking"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && booking && <EditBooking booking={booking} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <LoadingState message="Loading Bookings" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {secondaryActions.map((secondaryAction) => (
            <ActionButtonWrapper key={nanoid()}>
              <span
                onKeyPress={() => router.push(secondaryAction.url)}
                onClick={() => router.push(secondaryAction.url)}
              >
                {secondaryAction.title}
              </span>
            </ActionButtonWrapper>
          ))}
        </ContainerMainAction>
      </ContainerMainWrapper>
    </Layout>
  )
}
