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
import { useRouter } from 'next/router'
import ContainerMainWrapper from '../../../components/layout/ContainerWrapper'
import getAdminActiviesLog from '../../../actions/account/get-admin-activities-log'
import ContainerHeaders from '../../../components/layout/ContainerHeaders'
import ActionLogListTable from '../../../components/admins/ActionLogListTable'

export default function AdminActivitiesPage() {
  const [page, setPage] = useState<number>(1)
  const limit = 10
  const router = useRouter()
  const { adminId } = router.query
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalActionLogs: 0,
    currentPage: page,
    actionLogs: [],
  })
  const { isLoading, data, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['activity history', page],
    () => getAdminActiviesLog({ page, limit, adminId }),
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
      title: `Activities (${query && query.totalActionLogs})`,
      url: '/',
      isActive: true,
    },
    { title: 'Create Admin', url: '/admins/create', isActive: false },
    { title: 'Details', url: `admins/${adminId}`, isActive: false },
    { title: 'Admins', url: '/admins', isActive: false },
    { title: 'Create Admin', url: '/admins/create', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Create Admin', url: '/admins/create' },
    { title: 'Admin Details', url: `/admins/${adminId}` },
    { title: 'Admins', url: `/admins` },
    { title: 'All Active', url: '/admins/filters/active' },
    { title: 'All Blocked', url: '/admins/filters/blocked' },
  ]

  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Admins"
            createButtonUrl="/admins/create"
            createButtonTitle="Create Admin"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && <ActionLogListTable key={nanoid()} actionLogs={query.actionLogs} />}
            {isLoading && <ServerLoadingLoader message="Loading Admin Activities" />}
            {isSuccess && !query.actionLogs.length && (
              <NotFound message="No Admin Activity Found" />
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
