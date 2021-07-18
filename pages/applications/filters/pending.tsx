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
import filterApplications from '../../../actions/application/filter-applications'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import ApplicationListTable from '../../../components/applications/ApplicationListTable'

export default function FilterApplicationByPending() {
  const [page, setPage] = useState<number>(1)
  const limit: number = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalApplications: 0,
    currentPage: page,
    applications: [],
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['Pending Applications', page],
    () => filterApplications({ page, limit, status: 'pending' }),
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
    {
      title: `Pending (${query.totalApplications})`,
      url: '/applications',
      isActive: true,
    },
  ]

  const secondaryActions = [
    { title: 'Applications', url: '/applications' },
    { title: 'All Applied', url: '/applications/filters/pending' },
    { title: 'All Pending', url: '/applications/filters/applied' },
  ]

  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Application"
            createButtonUrl=""
            createButtonTitle=""
            overlayItems={overlayItems}
          />

          <ScrollableContainer>
            {isSuccess && <ApplicationListTable applications={query.applications} />}
            {isLoading && <ServerLoadingLoader message="Loading Applications" />}
            {isSuccess && !query.applications.length && <NotFound message="No Application Found" />}
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
