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
import AdminCard from '../../components/admins/AdminCard'
import getAllAdmins from '../../actions/account/get-all-admins'
import ContainerHeaders from '../../components/layout/ContainerHeaders'

export default function AdminIndexPage() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalAdmins: 0,
    currentPage: page,
    admins: null,
  })
  const { isLoading, data, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['admins', page],
    () => getAllAdmins({ page, limit }),
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
    { title: `(${query.totalAdmins})`, url: '/admins', isActive: true },
    { title: 'Create Admin', url: '/admins/create', isActive: false },
  ]
  const secondaryActions = [{ title: 'Create Admin', url: '/admins/create' }]

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
            {isSuccess &&
              data &&
              query?.admins.map((admin) => <AdminCard key={admin.title} admin={admin} />)}
            {isLoading && <ServerLoadingLoader message="Loading Admins" />}
            {isSuccess && !query.admins.length && <NotFound message="No Admin Found" />}
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
