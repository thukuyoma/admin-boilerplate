import React, { useState } from 'react'
import Layout from '../../../../components/layout/Layout'
import ContainerMainAction from '../../../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../../../components/layout/ScrollableContainer'
import { useQuery } from 'react-query'
import QueryPagination from '../../../../components/shared/QueryPagination'
import ServerError from '../../../../components/shared/ServerError'
import NotFound from '../../../../components/shared/NotFound'
import ServerLoadingLoader from '../../../../components/shared/ServerLoadingLoader'
import ActionButtonWrapper from '../../../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import router from 'next/router'
import ContainerMainWrapper from '../../../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../../../components/layout/ContainerHeaders'
import BlogCategoriesListTable from '../../../../components/blog/categories/BlogCategoriesListTable'
import filterCategories from '../../../../actions/post/categories/filter-categories'

export default function FilterOnlineCategories() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalCategories: 0,
    currentPage: page,
    categories: [],
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['Offline Categories', page],
    () => filterCategories({ page, limit, status: 'offline' }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setQuery(data)
        return
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
    { title: `Offline Categories (${query.totalCategories})`, url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'Create Category', url: '/blogs/categories/create', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Blogs', url: '/blogs' },
    { title: 'Create Blog', url: '/blogs/create' },
    { title: 'Create Categories', url: '/blogs/categories/create' },
    { title: 'Categories', url: '/blogs/categories' },
    { title: 'Online Categories', url: '/blogs/categories/filter/online' },
    { title: 'Offline Categories', url: '/blogs/categories/filter/offline' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Blogs"
            createButtonUrl="/blogs/categories/create"
            createButtonTitle="Create Category"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && query?.categories && (
              <BlogCategoriesListTable categories={query.categories} />
            )}
            {isLoading && <ServerLoadingLoader message="Loading Categories" />}
            {isSuccess && query.categories.length === 0 && <NotFound message="No Category Found" />}
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
