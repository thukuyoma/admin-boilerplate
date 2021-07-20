import React, { useState } from 'react'
import Layout from '../../../components/layout/Layout'
import ContainerMainAction from '../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../components/layout/ScrollableContainer'
import { useRouter } from 'next/router'
import ActionButtonWrapper from '../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import { useQuery } from 'react-query'
import getAlerts from '../../../actions/settings/alert/get-alerts'
import NotFound from '../../../components/shared/NotFound'
import QueryPagination from '../../../components/shared/QueryPagination'
import ServerError from '../../../components/shared/ServerError'
import ServerLoadingLoader from '../../../components/shared/ServerLoadingLoader'
import AlertListTable from '../../../components/setting/alert/AlertListTable'

export default function AlertsIndexPage() {
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
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Alerts', url: '', isActive: true },
    { title: 'Create Alert', url: '/settings/alerts/create', isActive: false },
  ]
  const router = useRouter()
  const secondaryActions = [
    { title: 'Alerts', url: '/settings/alerts' },
    { title: 'Create Alert', url: '/settings/alerts/create' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Settings"
            createButtonUrl="/settings/alerts/create"
            createButtonTitle="Create Alert"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && <AlertListTable alerts={query.alerts} />}
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
