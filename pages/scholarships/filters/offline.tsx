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
import ScholarshipListTable from '../../../components/scholarship/ScholarshipListTable'
import filterScholarship from '../../../actions/scholarship/filter-scholarship'

export default function FilterOfflineScholarships() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalScholarships: 0,
    currentPage: page,
    scholarships: [],
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['scholarships', page],
    () => filterScholarship({ page, limit, status: 'offline' }),
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
    { title: `Offline (${query.totalScholarships})`, url: '/scholarships', isActive: true },
    { title: 'Create Scholarship', url: '/scholarships/create', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Create Scholarship', url: '/scholarships/create' },
    { title: 'Scholarships', url: '/scholarships' },
    { title: 'All Online', url: '/scholarships/filters/online' },
    { title: 'All Offline', url: '/scholarships/filters/offline' },
  ]

  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Scholarship"
            createButtonUrl="/scholarships/create"
            createButtonTitle="Create Scholarship"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && <ScholarshipListTable scholarships={query.scholarships} />}
            {isLoading && <ServerLoadingLoader message="Loading Scholarships" />}
            {isSuccess && !query.scholarships.length && <NotFound message="No scholarship Found" />}
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
