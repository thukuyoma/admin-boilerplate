import React, { useState } from 'react'
import { useQuery } from 'react-query'
import NotFound from '../shared/NotFound'
import QueryPagination from '../shared/QueryPagination'
import ServerError from '../shared/ServerError'
import ServerLoadingLoader from '../shared/ServerLoadingLoader'
import TicketReplyCard from './TicketReplyCard'
import styled from 'styled-components'
import ReplySupportTicket from './ReplySupportTicket'
import getTicketReplies from '../../actions/support/get-ticket-replies'

const Styles = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
`
export default function TicketReplies({ ticketId }) {
  const [page, setPage] = useState<number>(1)
  const limit: number = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalApplicationLogs: 0,
    currentPage: page,
    applicationLogs: [],
  })
  const { isLoading, refetch, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['application logs', ticketId, page],
    () => getTicketReplies({ ticketId, page, limit }),
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
      <ReplySupportTicket ticketId={ticketId} refetch={refetch} />
      <Styles>
        <p className="tag__title">Application Support Log</p>
        {isSuccess &&
          query.applicationLogs.map((log) => <TicketReplyCard key={log._id} log={log} />)}
        {isLoading && <ServerLoadingLoader message="Loading Tickets Replies" />}
        {isSuccess && !query.applicationLogs.length && <NotFound message="No Replies Found" />}
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
