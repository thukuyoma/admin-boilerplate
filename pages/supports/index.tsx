import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import { useQuery } from 'react-query'
import QueryPagination from '../../components/shared/QueryPagination'
import ServerError from '../../components/shared/ServerError'
import NotFound from '../../components/shared/NotFound'
import ServerLoadingLoader from '../../components/shared/ServerLoadingLoader'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import router from 'next/router'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'
import getSupportTickets from '../../actions/support/get-support-tickets'
import NameListCard from '../../components/shared/NameListCard'
import SupportTable from '../../components/shared/SupportTable'

export default function SupportIndexPage() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalTickets: 0,
    currentPage: page,
    tickets: [],
  })
  const { isLoading, data, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['supports ticket', page],
    () => getSupportTickets({ page, limit }),
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
    { title: `Tickets (${query.totalTickets})`, url: '/supports', isActive: true },
  ]

  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Supports"
            createButtonUrl=""
            createButtonTitle=""
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && data && query?.tickets && <SupportTable tickets={query.tickets} />}
            {isLoading && <ServerLoadingLoader message="Loading Support Tickets" />}
            {isSuccess && !query.tickets.length && <NotFound message="No Support Ticket Found" />}
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
          {/* {secondaryActions.map((secondaryAction) => (
            <ActionButtonWrapper key={nanoid()}>
              <span
                onKeyPress={() => router.push(secondaryAction.url)}
                onClick={() => router.push(secondaryAction.url)}
              >
                {secondaryAction.title}
              </span>
            </ActionButtonWrapper>
          ))} */}
        </ContainerMainAction>
      </ContainerMainWrapper>
    </Layout>
  )
}
