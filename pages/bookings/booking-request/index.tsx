import React, { useState } from 'react'
import ContainerMainHeader from '../../../components/layout/ContainerMainHeader'
import Layout from '../../../components/layout/Layout'
import MobileContainerHeader from '../../../components/layout/MobileContainerHeader'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import { useQuery } from 'react-query'
import QueryPagination from '../../../components/shared/QueryPagination'
import ServerError from '../../../components/shared/ServerError'
import NotFound from '../../../components/shared/NotFound'
import ServerLoadingLoader from '../../../components/shared/ServerLoadingLoader'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import router from 'next/router'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import getBookingRequests from '../../../actions/bookings/get-booking-requests'
import BookingRequestCard from '../../../components/bookings/BookingRequestCard'

export default function BookingRequestsPage() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalBookingRequests: 0,
    currentPage: page,
    bookingRequests: null,
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['Booking Requests', page],
    () => getBookingRequests({ page, limit }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setQuery(data)
      },
    }
  )
  const handleNextPage = () => {
    if (!isPreviousData && query?.hasMore) {
      setPage((prev) => prev + 1)
    }
  }
  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: `Booking Requests (${query.totalBookingRequests})`, url: '/bookings', isActive: true },
    { title: 'Bookings', url: '/bookings', isActive: false },
    { title: 'Create Booking', url: '/bookings/create', isActive: false },
    { title: 'Booking Requests', url: '/bookings/booking-request', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Create Booking', url: '/bookings/create' },
    { title: 'Bookings', url: '/bookings' },
    { title: 'Booking Requests', url: '/bookings/booking-request' },
  ]

  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader
            pageTitle="Bookings"
            createButtonUrl="/bookings/create"
            createButtonTitle="Create Booking"
            overlayItems={overlayItems}
          />
          <MobileContainerHeader
            overlayItems={overlayItems}
            pageTitle="Bookings"
            createButtonUrl="/bookings/create"
          />
          <ScrollableContainer>
            {isSuccess &&
              query.bookingRequests.map((bookingRequest) => (
                <BookingRequestCard key={bookingRequest.title} bookingRequest={bookingRequest} />
              ))}
            {isLoading && <ServerLoadingLoader message="Loading All bookings" />}
            {isSuccess && !query.bookingRequests.length && <NotFound message="No booking Found" />}
            {isError && <ServerError error={error} />}
            <QueryPagination
              nextPage={handleNextPage}
              prevPage={handlePrevPage}
              hasMore={query.hasMore}
              currentPage={query.currentPage}
              totalPages={query.totalPages}
              isFetching={isFetching}
            />
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
