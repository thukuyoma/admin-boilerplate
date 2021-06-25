import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import { useQuery } from 'react-query'
import getAllPosts from '../../actions/post/get-all-posts'
import QueryPagination from '../../components/shared/QueryPagination'
import ServerError from '../../components/shared/ServerError'
import NotFound from '../../components/shared/NotFound'
import ServerLoadingLoader from '../../components/shared/ServerLoadingLoader'
import BlogCard from '../../components/blog/BlogCard'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { nanoid } from 'nanoid'
import router from 'next/router'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'
import ContainerHeaders from '../../components/layout/ContainerHeaders'

export default function Blogs() {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const [query, setQuery] = useState({
    hasMore: false,
    totalPages: 0,
    totalPosts: 0,
    currentPage: page,
    posts: null,
  })
  const { isLoading, isError, isSuccess, error, isPreviousData, isFetching } = useQuery(
    ['articles', page],
    () => getAllPosts({ page, limit }),
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
    { title: `All Blogs (${query.totalPosts})`, url: '/blogs', isActive: true },
    { title: 'All Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Categories', url: '/blogs/categories/create', isActive: false },
    { title: 'Create Blog', url: '/blogs/create', isActive: false },
  ]

  const secondaryActions = [
    { title: 'Create Blog', url: '/blogs/create' },
    { title: 'All Blogs', url: '/blogs' },
    { title: 'All Categories', url: '/blogs/categories' },
    { title: 'Create Categories', url: '/blogs/categories/create' },
  ]

  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerHeaders
            pageTitle="Blog"
            createButtonUrl="/blogs/create"
            createButtonTitle="Create Blog"
            overlayItems={overlayItems}
          />
          <ScrollableContainer>
            {isSuccess && query.posts.map((post) => <BlogCard key={post.slug} blog={post} />)}
            {isLoading && <ServerLoadingLoader message="Loading Posts" />}
            {isSuccess && !query.posts.length && <NotFound message="No Post Found" />}
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
