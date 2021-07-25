import React, { useState } from 'react'
import { useQuery } from 'react-query'
import getApplicationLogs from '../../actions/application/get-application-logs'
import QueryPagination from '../shared/QueryPagination'
import ServerError from '../shared/ServerError'
import ApplicationLogCard from './ApplicationLogCard'
import styled from 'styled-components'
import WriteSupportLog from './WriteSupportLog'
import TextDisplay from '../shared/TextDisplay'

const Styles = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
`

export default function ApplicationsLogs({ applicationId }) {
  const [page, setPage] = useState<number>(1)
  const limit: number = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalApplicationLogs: 0,
    currentPage: page,
    applicationLogs: [],
  })
  const {
    isLoading,
    refetch: refetchApplicationLogs,
    isError,
    isSuccess,
    error,
    isPreviousData,
    isFetching,
  } = useQuery(
    ['application logs', applicationId, page],
    () => getApplicationLogs({ applicationId, page, limit }),
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
      <WriteSupportLog
        applicationId={applicationId}
        refetchApplicationLogs={refetchApplicationLogs}
      />
      <Styles>
        <p className="tag__title">Application Support Log</p>
        {isSuccess &&
          query.applicationLogs.map((log) => (
            <ApplicationLogCard
              refetchApplicationLogs={refetchApplicationLogs}
              key={log._id}
              log={log}
            />
          ))}
        {isLoading && <TextDisplay text="Loading previous logs..." />}
        {isSuccess && !query.applicationLogs.length && (
          <TextDisplay text="Logs on this application will appear here" />
        )}
        {isError && <ServerError error={error} />}
        <QueryPagination
          nextPage={handleNextPage}
          prevPage={handlePrevPage}
          hasMore={query.hasMore}
          currentPage={query.currentPage}
          totalPages={query.totalPages}
          isFetching={isFetching}
        />
      </Styles>
    </>
  )
}
