import React from 'react'
import ContainerMainHeader from '../../components/layout/ContainerMainHeader'
import Layout from '../../components/layout/Layout'
import MobileContainerHeader from '../../components/layout/MobileContainerHeader'
import styled from 'styled-components'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from './../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import PostDetails from '../../components/blog/PostDetails'
import { useRouter } from 'next/router'
import getPostDetails from '../../actions/post/get-post-details'
import { useQuery } from 'react-query'
import DisplayAdminLoader from '../../components/shared/DisplayAdminLoader'
import DisplayServerError from '../../components/shared/DisplayServerError'
import DeletePostButton from '../../components/blog/actions/DeletePostButton'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import EditBlogButton from '../../components/blog/actions/EditBlogButton'
import UnPublishBlogButton from '../../components/blog/actions/UnPublishBlogButton'
import PublishBlogButton from '../../components/blog/actions/PublishBlogButton'

const ContainerMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 450px;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    height: 100%;
  }
`

export default function BlogPostDetails() {
  const router = useRouter()
  const { slug } = router.query
  const { refetch, data: blog, isSuccess, isError, error, isLoading } = useQuery(
    ['blog post details', slug],
    () => getPostDetails(slug)
  )
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader pageTitle="Blog" createUrl="" createButtonTitle="Create Blog" />
          <MobileContainerHeader pageTitle="Blog" createButtonUrl="" />
          <ScrollableContainer>
            {isSuccess && blog && <PostDetails blog={blog} />}
            {isError && <DisplayServerError error={error} />}
            {isLoading && <DisplayAdminLoader message="Loading Post" />}
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          {isSuccess && blog && (
            <>
              <ActionButtonWrapper>
                <EditBlogButton slug={blog.slug} />
              </ActionButtonWrapper>
              <ActionButtonWrapper>
                <DeletePostButton postId={blog._id} />
              </ActionButtonWrapper>
              <ActionButtonWrapper>
                {blog.status.isPublished ? (
                  <UnPublishBlogButton postId={blog._id} refetch={refetch} />
                ) : (
                  <PublishBlogButton postId={blog._id} refetch={refetch} />
                )}
              </ActionButtonWrapper>
            </>
          )}
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/blogs/create')}
              onClick={() => router.push('/blogs/create')}
            >
              Create Blog
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span onKeyPress={() => router.push('/blogs')} onClick={() => router.push('/blogs')}>
              All Posts
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/blogs/categories')}
              onClick={() => router.push('/blogs/categories')}
            >
              See Categories
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/blogs/categories/create')}
              onClick={() => router.push('/blogs/categories/create')}
            >
              Create Categories
            </span>
          </ActionButtonWrapper>
        </ContainerMainAction>
      </ContainerMainWrapper>
    </Layout>
  )
}
