import React, { useState } from 'react'
import Layout from '../../../components/layout/Layout'
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
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import BookingListTable from '../../../components/bookings/BookingListTable'
import filterBookings from '../../../actions/bookings/filter-bookings'

export default function FilterOnlineBooking() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalBookings: 0,
    currentPage: page,
    bookings: null,
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['Online Bbookings', page],
    () => filterBookings({ page, limit, status: 'online' }),
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
    { title: `Online (${query.totalBookings})`, url: '/bookings', isActive: true },
    { title: 'Create Booking', url: '/bookings/create', isActive: false },
    { title: 'Booking Requests', url: '/bookings/booking-request', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Create Booking', url: '/bookings/create' },
    { title: 'Booking Requests', url: '/bookings/booking-requests' },
    { title: 'All Online', url: '/bookings/filters/online' },
    { title: 'All Offline', url: '/bookings/filters/offline' },
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
            {isSuccess && <BookingListTable bookings={query.bookings} />}
            {isLoading && <ServerLoadingLoader message="Loading Bookings" />}
            {isSuccess && !query.bookings.length && <NotFound message="No Booking Found" />}
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
