import React, { useState } from 'react'
import ContainerMainHeader from '../../components/layout/ContainerMainHeader'
import Layout from '../../components/layout/Layout'
import MobileContainerHeader from '../../components/layout/MobileContainerHeader'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import Containerizer from '../../components/layout/Containerizer'
import { useQuery } from 'react-query'
import getAllPosts from '../../actions/post/get-all-posts'
import QueryPagination from '../../components/shared/QueryPagination'
import ServerError from '../../components/shared/ServerError'
import NotFound from '../../components/shared/NotFound'
import ServerLoadingLoader from '../../components/shared/ServerLoadingLoader'
import BlogCard from '../../components/blog/BlogCard'

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

  return (
    <Layout>
      <Containerizer>
        <ContainerMainColumn>
          <ContainerMainHeader pageTitle="Blog" createUrl="" createButtonTitle="Create Blog" />
          <MobileContainerHeader pageTitle="Blog" createButtonUrl="" />
          <ScrollableContainer>
            {isSuccess && query.posts.map((post) => <BlogCard key={post.slug} blog={post} />)}
            {isLoading && <ServerLoadingLoader message="Loading All Posts" />}
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
        <ContainerMainAction />
      </Containerizer>
    </Layout>
  )
}
