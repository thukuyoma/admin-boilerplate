import React, { useState } from 'react'

import { useQuery } from 'react-query'
import getAlerts from '../../../actions/settings/alert/get-alerts'
import NotFound from '../../shared/NotFound'
import QueryPagination from '../../shared/QueryPagination'
import ServerError from '../../shared/ServerError'
import ServerLoadingLoader from '../../shared/ServerLoadingLoader'
import AlertCard from './AlertCard'

export default function AlertCreatedList() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalScholarships: 0,
    currentPage: page,
    alerts: [],
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['alerts', page],
    () => getAlerts({ page, limit }),
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

  return (
    <>
      {isSuccess && query.alerts.map((alert) => <AlertCard key={alert._id} alert={alert} />)}
      {isLoading && <ServerLoadingLoader message="Loading Alerts" />}
      {isSuccess && !query.alerts.length && <NotFound message="No Alerts Found" />}
      {isError && <ServerError error={error} />}
      <QueryPagination
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
        hasMore={query.hasMore}
        currentPage={query.currentPage}
        totalPages={query.totalPages}
        isFetching={isFetching}
      />
    </>
  )
}
