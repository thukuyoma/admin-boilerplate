import React from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from './../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import DisplayServerError from '../../components/shared/DisplayServerError'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'
import EditBookingButton from '../../components/bookings/actions/EditBookingButton'
import DeleteBookingButton from '../../components/bookings/actions/DeleteBookingButton'
import BookingDetails from '../../components/bookings/BookingDetails'
import getBookingDetails from '../../actions/bookings/get-booking-details'
import LoadingState from '../../components/shared/ServerLoadingLoader'
import TooglePublishBookingButton from '../../components/bookings/actions/TooglePublishBookingButton'

export default function BookingDetailsPage() {
  const router = useRouter()
  const { bookingId } = router.query
  const { refetch, data: booking, isSuccess, isError, error, isLoading } = useQuery(
    ['Booking details', bookingId],
    () => getBookingDetails(bookingId)
  )
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Details', url: '', isActive: true },
    { title: 'Bookings', url: '/bookings', isActive: false },
    { title: 'Booking Requests', url: '/bookings/booking-requests', isActive: false },
    { title: 'Create booking', url: '/bookings/create', isActive: false },
  ]
  const primaryActions = [
    { component: booking && <EditBookingButton bookingId={booking._id} /> },
    { component: booking && <DeleteBookingButton bookingId={booking._id} /> },
    {
      component: booking && (
        <TooglePublishBookingButton
          isPublished={booking.status.isPublished}
          refetch={refetch}
          bookingId={booking ? booking._id : ''}
        />
      ),
    },
  ]

  const secondaryActions = [
    { title: 'Create booking', url: '/bookings/create' },
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
            {isSuccess && booking && <BookingDetails booking={booking} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <LoadingState message="Loading Bookings" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && booking && (
            <>
              {primaryActions.map((primaryAction) => (
                <ActionButtonWrapper key={nanoid()}>{primaryAction.component} </ActionButtonWrapper>
              ))}
            </>
          )}
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
