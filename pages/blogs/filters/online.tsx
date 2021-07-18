export {}
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
import BlogListTable from '../../../components/blog/BlogListTable'
import filterBlogs from '../../../actions/post/filters/filter-by-published'

export default function Blogs() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalBlogs: 0,
    currentPage: page,
    blogs: [],
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['Online Articles', page],
    () => filterBlogs({ page, limit, status: 'online' }),
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
    { title: `Online (${query.totalBlogs})`, url: '/blogs', isActive: true },
    { title: 'Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Category', url: '/blogs/categories/create', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
  ]
  const secondaryActions = [
    { title: 'Create Blog', url: '/blogs/create' },
    { title: 'Categories', url: '/blogs/categories' },
    { title: 'Create Category', url: '/blogs/categories/create' },
    { title: 'Blogs', url: '/blogs' },
    { title: 'All Online', url: '/blogs/filters/online' },
    { title: 'All Offline', url: '/blogs/filters/offline' },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Blogs"
            createButtonUrl="/blogs/create"
            createButtonTitle="Create Blog"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && query?.blogs && <BlogListTable blogs={query.blogs} />}
            {isLoading && <ServerLoadingLoader message="Loading Posts" />}
            {isSuccess && query.blogs.length === 0 && <NotFound message="No Post Found" />}
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
